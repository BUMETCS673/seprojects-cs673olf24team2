<template>
  <div class="login-page">
    <h1>Login</h1>

    <form class="login-form" @submit.prevent="login">
      <div class="input-group">
        <label for="email">Email:</label>
        <input type="email" v-model="email" id="email" class="input-field" required />
      </div>

      <div class="input-group">
        <label for="password">Password:</label>
        <input type="password" v-model="password" id="password" class="input-field" required />
      </div>

      <button type="submit" class="btn-primary">Login</button>
      <button @click="signOutUser">Sign Out</button>
    </form>

    <p class="register-prompt">
      Don't have an account? <router-link to="/RegisterPage" class="register-link">Register now</router-link>
    </p>
  </div>

</template>

<script>


import {signIn, signOut} from '@aws-amplify/auth';
import "@aws-amplify/ui-vue/styles.css";
// import { post } from "aws-amplify/api";
import { fetchAuthSession } from "aws-amplify/auth";
import {Amplify} from "aws-amplify";




export default {

  data() {
    return {
      email: '',
      password: '',
      errorMessage: '',
    };
  },
  methods: {
    async signOutUser() {
      try {
        // 调用 AWS Amplify 的 signOut 方法，处理后端的认证清除
        await signOut();
        localStorage.removeItem('idToken');
        localStorage.removeItem('accessToken');
      } catch (error) {
        console.error('Error signing out:', error);
      }
    },
    async login() {
      try {
        // 使用 signIn 进行登录
        const user = await signIn({
          username: this.email,
          password: this.password
        });
        console.log('Login successful:', user);
        const currentConfig = Amplify.getConfig();
        Amplify.configure({
          ...currentConfig,
          API: {
            REST: {
              RentalNinja: {
                endpoint: "https://api.rentalninja.link",
                region: "us-east-2",
              },
            },
          },
        });
        const { accessToken, idToken } = (await fetchAuthSession()).tokens ?? {};
        console.log(idToken);
        localStorage.setItem('accessToken', accessToken);
        console.log(idToken);
        localStorage.setItem('idToken', idToken);
        alert('Login successful');


        this.$router.push('/');


      } catch (error) {
        console.error('Login error:', error);

        this.errorMessage = 'Login failed: ' + error.message;
      }
    },


  },
};
</script>

<style scoped>

.login-page {
  padding: 60px 20px;
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
}


.input-group {
  margin-bottom: 20px;
}

.input-field {
  padding: 10px;
  border: 2px solid #4CAF50;
  border-radius: 5px;
  width: 100%;
}

button {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #45a049;
}


.register-prompt {
  margin-top: 20px;
}


.register-link {
  color: #2196F3;
  text-decoration: none;
}

.register-link:hover {
  text-decoration: underline;
}
</style>
