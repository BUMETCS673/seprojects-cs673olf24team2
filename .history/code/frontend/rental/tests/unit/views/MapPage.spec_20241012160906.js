import { shallowMount } from '@vue/test-utils';
import MapPage from '@/views/MapPage.vue';

describe('MapPage.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(MapPage);
  });

  it('initializes with correct data', () => {
    expect(wrapper.vm.searchQuery).toBe('');
    expect(wrapper.vm.selectedLocation).toBe('');
    expect(wrapper.vm.selectedPriceRange).toBe('');
    expect(wrapper.vm.listings.length).toBe(6);
    expect(wrapper.vm.filteredListings.length).toBe(6);
  });

  it('filters listings correctly', async () => {
    wrapper.vm.searchQuery = 'Deluxe';
    wrapper.vm.selectedLocation = 'City Center';
    wrapper.vm.selectedPriceRange = 'medium';
    
    await wrapper.vm.applyFilters();
    
    expect(wrapper.vm.filteredListings.length).toBe(1);
    expect(wrapper.vm.filteredListings[0].title).toBe('Deluxe Apartment');
  });

  it('initializes map on mount', () => {
    expect(wrapper.vm.map).not.toBeNull();
    expect(wrapper.vm.markers.length).toBe(6);
  });

  it('updates markers when filtering', async () => {
    const spy = jest.spyOn(wrapper.vm, 'addMarkers');
    
    wrapper.vm.searchQuery = 'Luxury';
    await wrapper.vm.applyFilters();
    
    expect(spy).toHaveBeenCalled();
  });

  it('navigates to detail page when marker is clicked', () => {
    const marker = wrapper.vm.markers[0];
    marker.fire('click');
    
    expect(wrapper.vm.$router.push).toHaveBeenCalledWith({
      name: 'Detail',
      params: { id: wrapper.vm.listings[0].id },
    });
  });
});