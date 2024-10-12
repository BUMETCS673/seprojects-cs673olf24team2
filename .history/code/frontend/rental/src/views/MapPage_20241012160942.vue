<template>
  <!-- 保持模板部分不变 -->
</template>

<script>
import L from "leaflet";

export default {
  name: 'MapPage',
  data() {
    return {
      map: null,
      markers: [],
      searchQuery: "",
      selectedLocation: "",
      selectedPriceRange: "",
      listings: [
        // 保持listings数组不变
      ],
      filteredListings: [],
    };
  },
  mounted() {
    this.filteredListings = this.listings; // 初始化
    this.initMap();
    this.addMarkers();
  },
  methods: {
    applyFilters() {
      // 保持applyFilters方法不变
    },
    initMap() {
      if (process.env.NODE_ENV !== 'test') {
        this.map = L.map("map", { zoomControl: false }).setView([42.3601, -71.0589], 13);
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: '© OpenStreetMap contributors',
        }).addTo(this.map);
      }
    },
    addMarkers() {
      if (process.env.NODE_ENV !== 'test') {
        this.markers.forEach((marker) => this.map.removeLayer(marker));
        this.markers = [];

        this.listings.forEach((listing) => {
          const markerIcon = L.icon({
            iconUrl: require("@/assets/marker.png"),
            iconSize: [30, 30],
            iconAnchor: [15, 45],
          });

          const marker = L.marker(listing.coordinates, { icon: markerIcon }).addTo(this.map);

          marker.bindPopup(`<b>${listing.title}</b><br>${listing.description}`);

          marker.on("mouseover", () => {
            marker.setIcon(
              L.icon({
                iconUrl: require("@/assets/marker.png"),
                iconSize: [40, 40],
                iconAnchor: [20, 60],
              })
            );
          });

          marker.on("mouseout", () => {
            marker.setIcon(markerIcon);
          });

          marker.on("click", () => {
            this.$router.push({ name: "Detail", params: { id: listing.id } });
          });

          this.markers.push(marker);
        });
      }
    },
  },
};
</script>

<style scoped>
@import 'leaflet/dist/leaflet.css';

/* 保持其他样式不变 */
</style>