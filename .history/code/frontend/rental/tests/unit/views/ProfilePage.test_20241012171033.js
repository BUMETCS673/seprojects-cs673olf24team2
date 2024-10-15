import { shallowMount } from '@vue/test-utils';
import ProfilePage from '@/views/ProfilePage.vue';

describe('ProfilePage.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(ProfilePage, {
      data() {
        return {
          profile: {
            avatar: require('@/assets/1.png'),
            name: 'User Name',
            email: 'user@example.com',
          },
          newListing: {
            title: '',
            description: '',
            price: '',
            location: '',
            type: '',
            contactInfo: '',
            image: null,
          },
          publishedListings: [
            {
              id: 1,
              title: 'Luxury Apartment',
              description: 'Fully furnished apartment in the city center.',
              price: 5000,
              image: require('@/assets/3.png'),
            },
          ],
          userId: 'user-123',
          pos: [
            {
              post_id: 1,
              title: 'Deluxe Apartment',
              content: 'Convenient location.',
              userId: 'user-123',
              picUrls: null,
            },
          ],
        };
      },
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('renders profile information', () => {
    expect(wrapper.find('.profile-section h2').text()).toBe('Profile Information');
    expect(wrapper.find('input[type="text"]').element.value).toBe('User Name');
    expect(wrapper.find('input[type="email"]').element.value).toBe('user@example.com');
  });

  it('renders the published listings section', () => {
    expect(wrapper.find('.published-listings-section h2').text()).toBe('Published Listings');
  });

  it('displays the user\'s published listings', () => {
    expect(wrapper.findAll('.published-item').length).toBe(1);
    expect(wrapper.find('.published-item h3').text()).toBe('Deluxe Apartment');
  });

  it('calls saveProfile method when save button is clicked', async () => {
    const saveProfileMock = jest.fn();
    wrapper.setMethods({ saveProfile: saveProfileMock });

    await wrapper.find('.btn-primary').trigger('click');

    expect(saveProfileMock).toHaveBeenCalled();
  });

  it('calls submitNewListing method when submit button is clicked', async () => {
    const submitNewListingMock = jest.fn();
    wrapper.setMethods({ submitNewListing: submitNewListingMock });

    await wrapper.find('.new-listing-form').trigger('submit.prevent');

    expect(submitNewListingMock).toHaveBeenCalled();
  });

  it('calls editListing method when edit button is clicked', async () => {
    const editListingMock = jest.fn();
    wrapper.setMethods({ editListing: editListingMock });

    await wrapper.find('.btn-secondary').trigger('click');

    expect(editListingMock).toHaveBeenCalled();
  });

  it('calls removeListing method when delete button is clicked', async () => {
    const removeListingMock = jest.fn();
    wrapper.setMethods({ removeListing: removeListingMock });

    await wrapper.find('.btn-danger').trigger('click');

    expect(removeListingMock).toHaveBeenCalled();
  });
});
