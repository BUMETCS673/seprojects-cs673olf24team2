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
    </form>

    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p> <!-- 反馈信息 -->

    <p class="register-prompt">
      Don't have an account? <router-link to="/RegisterPage" class="register-link">Register now</router-link>
    </p>
  </div>
</template>

<script>
import { signIn } from '@aws-amplify/auth';
import "@aws-amplify/ui-vue/styles.css";
import { fetchAuthSession } from "aws-amplify/auth";
import { Amplify } from "aws-amplify";

import axios from 'axios';




export default {
  data() {
    return {
      email: '',
      password: '',
      errorMessage: '', // 用于登录失败时的反馈
      posts: [],
    };
  },
  methods: {
    async login() {
      try {
        const user = await signIn({
          username: this.email,
          password: this.password,
          
        });
        localStorage.setItem('userId', this.email);
        console.log('Login successful:', user);
        localStorage.setItem('isLoggedIn', 'true');
   
        console.log(localStorage.getItem('isLoggedIn'));
        
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
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('idToken', idToken);
        console.log(localStorage.getItem('idToken'));
        console.log(localStorage.getItem('accessToken'));

      

        this.$router.push('/');
        
      } catch (error) {
        console.error('Login error:', error);
        this.errorMessage = 'Login failed: ' + error.message; // 设置错误反馈
      }
      
    },


    async get_url() {
      try {
        const idToken = localStorage.getItem('idToken');
        if (!idToken) {
          console.error('ID Token not found in localStorage.');
          return;
        }

        console.log('ID Token:', idToken);

        // 使用 axios 发送 POST 请求
        const response = await axios.post('https://api.rentalninja.link/get-post-list', {
          pageNum: 0,
          pageSize: 10,
          keyword: "",
          stateCode: "",
          cityCode: ""
        }, {
          headers: {
            'Authorization': `Bearer ${idToken}`, // 添加 Bearer 前缀
            'Content-Type': 'application/json' // 设置请求头的内容类型
          }
        });

        // 检查响应结构
        console.log('Full response:', response); // 输出完整的 response，检查其结构
        if (response.data && response.data.responseBody && response.data.responseBody.post_list) {
          this.posts = response.data.responseBody.post_list;
          console.log("Posts received:", this.posts);
        } else {
          console.error("Unexpected response structure:", response.data);
        }
      } catch (e) {
        console.error('GET call failed: ', e.message);
        if (e.response) {
          console.error('Response Error:', e.response);
        }
      }
    
  
    }

    
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

.error-message {
  color: red;
  margin-top: 20px;
}
</style>
