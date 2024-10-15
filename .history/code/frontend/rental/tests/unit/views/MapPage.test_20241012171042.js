import { shallowMount } from '@vue/test-utils';
import MapPage from '@/views/MapPage.vue';

describe('MapPage.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(MapPage, {
      data() {
        return {
          listings: [
            {
              id: 1,
              title: 'Deluxe Apartment',
              description: 'Convenient location near the city center.',
              price: 3000,
              location: 'City Center',
            },
            {
              id: 2,
              title: 'Single Room for Rent',
              description: 'Quiet residential area, perfect for students.',
              price: 2000,
              location: 'Suburbs',
            },
          ],
          filteredListings: [],
          selectedLocation: '',
          selectedPriceRange: '',
          searchQuery: '',
        };
      },
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('renders search and filter section', () => {
    expect(wrapper.find('.search-filter-section').exists()).toBe(true);
  });

  it('renders map container', () => {
    expect(wrapper.find('#map').exists()).toBe(true);
  });

  it('filters listings by search query', async () => {
    wrapper.setData({ searchQuery: 'Deluxe' });
    await wrapper.vm.$nextTick();

    wrapper.vm.applyFilters();

    expect(wrapper.vm.filteredListings.length).toBe(1);
    expect(wrapper.vm.filteredListings[0].title).toBe('Deluxe Apartment');
  });

  it('filters listings by location', async () => {
    wrapper.setData({ selectedLocation: 'City Center' });
    await wrapper.vm.$nextTick();

    wrapper.vm.applyFilters();

    expect(wrapper.vm.filteredListings.length).toBe(1);
    expect(wrapper.vm.filteredListings[0].location).toBe('City Center');
  });

  it('filters listings by price range', async () => {
    wrapper.setData({ selectedPriceRange: 'low' });
    await wrapper.vm.$nextTick();

    wrapper.vm.applyFilters();

    expect(wrapper.vm.filteredListings.length).toBe(1);
    expect(wrapper.vm.filteredListings[0].price).toBe(2000);
  });

  it('renders listing cards', async () => {
    wrapper.setData({ filteredListings: wrapper.vm.listings });
    await wrapper.vm.$nextTick();

    expect(wrapper.findAll('.listing-card').length).toBe(2);
  });

  it('calls addMarkers method after mounting', () => {
    const addMarkersMock = jest.fn();
    wrapper.setMethods({ addMarkers: addMarkersMock });
    wrapper.vm.$mount();
    expect(addMarkersMock).toHaveBeenCalled();
  });
});
