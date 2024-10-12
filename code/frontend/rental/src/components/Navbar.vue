<template>
  <nav class="navbar">
    <div class="nav-links">
      <router-link to="/">Home</router-link>
      <router-link to="/listing">Listings</router-link>
      <router-link to="/FavoritesPage">Favorites</router-link>
      <router-link to="/map">MapPage</router-link>
      <router-link to="/ProfilePage">Profile</router-link>
      
      <router-link to="/PostListPage">Post</router-link>
    </div>
    <div class="auth-links">

      <router-link v-if="!isLoggedIn" to="/LoginPage">Login</router-link>
      <router-link v-if="!isLoggedIn" to="/RegisterPage">Register</router-link>

      <!-- Show Logout if authenticated -->
      <button v-if="isLoggedIn" @click="logout">Logout</button>
    </div>
  </nav>
</template>

<script>
import { signOut } from '@aws-amplify/auth'; // 引入 Amplify 退出登录功能
export default {
  name: 'SiteNavbar',
  data() {
    return {
      isLoggedIn: false  // Track login status
    };
  },
  created() {
    // Check if a valid userid exists in localStorage (presence check)
    console.log("Idtoken", localStorage.getItem('idToken'))
    this.isLoggedIn = !!localStorage.getItem('idToken');  // Converts value to boolean
    console.log("Login or not", this.isLoggedIn)
  },
  methods:{
    async logout() {
      try {
        await signOut(); // 调用 AWS Amplify 的 signOut 方法
        localStorage.removeItem('idToken'); // 清除本地存储的 idToken
        localStorage.removeItem('userId');
        window.location.href = '/LoginPage'
        this.$router.push('/LoginPage'); // 退出后跳转到登录页面
      } catch (error) {
        console.error('退出登录失败:', error);
      }
    },
  }
}
</script>

  <style scoped>

  </style>
  