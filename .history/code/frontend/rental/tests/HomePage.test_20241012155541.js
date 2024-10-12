import { shallowMount } from '@vue/test-utils';
import HomePage from '@/views/HomePage.vue';
import { disable } from 'ol/rotationconstraint';

#、describe('HomePage.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(HomePage, {
      data() {
        return {
          // 模拟组件中的初始数据
          listings: [
            {
              id: 1,
              title: 'Deluxe Apartment',
              description: 'Convenient location near the city center.',
              country: 'China',
              state: 'Zhejiang',
              city: 'Hangzhou',
              keyword: 'apartment',
            },
          ],
          reviews: [
            {
              text: 'This is the best rental platform I have ever used.',
              user: 'User A',
            },
          ],
        };
      },
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('renders hero banner content correctly', () => {
    expect(wrapper.find('.hero-content h1').text()).toBe('Welcome to the Student Housing Platform');
  });

  it('renders the search form', () => {
    expect(wrapper.find('.search-form').exists()).toBe(true);
  });

  it('filters listings by keyword', async () => {
    wrapper.setData({
      searchQuery: {
        keyword: 'apartment',
      },
    });

    await wrapper.vm.$nextTick();

    wrapper.vm.searchByKeyword(); // 手动调用方法来触发搜索

    expect(wrapper.vm.filteredListings.length).toBe(1);
    expect(wrapper.vm.filteredListings[0].title).toBe('Deluxe Apartment');
  });

  it('renders listings correctly', () => {
    const listingItem = wrapper.find('.listing-item');
    expect(listingItem.exists()).toBe(true);
    expect(listingItem.find('h3').text()).toBe('Deluxe Apartment');
  });

  it('toggles FAQ item', async () => {
    wrapper.vm.toggleFaq(0);
    await wrapper.vm.$nextTick();

    expect(wrapper.vm.activeFaqIndex).toBe(0);

    // 点击同一个FAQ再次关闭
    wrapper.vm.toggleFaq(0);
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.activeFaqIndex).toBe(null);
  });
});
