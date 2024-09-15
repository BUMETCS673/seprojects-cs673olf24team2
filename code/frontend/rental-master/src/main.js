import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/style.css';

// 使用命名导出导入 Amplify
import { Amplify } from 'aws-amplify'; 
import awsConfig from './aws-exports';

// 配置 Amplify
Amplify.configure(awsConfig);

// 创建 Vue 实例并挂载
createApp(App).use(router).mount('#app');
console.log('Amplify configured: ', Amplify.configure(awsConfig));
