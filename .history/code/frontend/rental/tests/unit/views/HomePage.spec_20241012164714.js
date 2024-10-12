import { shallowMount } from '@vue/test-utils';
import HomePage from '@/views/HomePage.vue';

describe('HomePage.vue', () => {
  it('renders without crashing', () => {
    const wrapper = shallowMount(HomePage);
    expect(wrapper.exists()).toBe(true);
  });

  it('displays the correct number of listings', () => {
    const wrapper = shallowMount(HomePage);
    const listingItems = wrapper.findAll('.listing-item');
    expect(listingItems).toHaveLength(2);
  });

  it('displays the correct number of reviews', () => {
    const wrapper = shallowMount(HomePage);
    const reviewItems = wrapper.findAll('.review-item');
    expect(reviewItems).toHaveLength(2);
  });
});