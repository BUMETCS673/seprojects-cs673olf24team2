<template>
  <div class="home-page">
    <h1>Welcome to the Student Housing Platform</h1>
    <section class="listings">
      <h2>Featured Listings</h2>
      <div v-for="listing in listings" :key="listing.id" class="listing-item">
        <h3>{{ listing.title }}</h3>
        <p>{{ listing.description }}</p>
      </div>
    </section>
    <section class="user-reviews">
      <h2>User Reviews</h2>
      <div v-for="(review, index) in reviews" :key="index" class="review-item">
        <p>"{{ review.text }}"</p>
        <p>—— {{ review.user }}</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      listings: [
        {
          id: 1,
          title: 'Deluxe Apartment',
          description: 'Convenient location near the city center.',
        },
        {
          id: 2,
          title: 'Single Room for Rent',
          description: 'Quiet residential area, perfect for students.',
        },
      ],
      reviews: [
        {
          text: 'This is the best rental platform I have ever used.',
          user: 'User A',
        },
        {
          text: 'I found a very satisfactory apartment through this platform.',
          user: 'User B',
        },
      ],
    };
  },
};
</script>