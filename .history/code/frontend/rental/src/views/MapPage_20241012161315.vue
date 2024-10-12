<template>
  <div class="map-page-container">
    <h1>Map Page</h1>
    <div v-for="listing in listings" :key="listing.id" class="listing-card">
      <h3>{{ listing.title }}</h3>
      <p>{{ listing.description }}</p>
      <p>Price: ¥{{ listing.price }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MapPage',
  data() {
    return {
      listings: [
        {
          id: 1,
          title: "Deluxe Apartment",
          description: "Convenient location near the city center.",
          price: 3000,
        },
        {
          id: 2,
          title: "Single Room for Rent",
          description: "Quiet residential area, perfect for students.",
          price: 2000,
        },
      ],
    };
  },
};
</script>

<style scoped>
.map-page-container {
  padding: 20px;
}
.listing-card {
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
}
</style>