import { shallowMount } from '@vue/test-utils';
import MapPage from '@/views/MapPage.vue';

describe('MapPage.vue', () => {
  it('renders without crashing', () => {
    const wrapper = shallowMount(MapPage);
    expect(wrapper.exists()).toBe(true);
  });

  it('displays the correct number of listings', () => {
    const wrapper = shallowMount(MapPage);
    const listingCards = wrapper.findAll('.listing-card');
    expect(listingCards).toHaveLength(2);
  });
});