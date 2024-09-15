const awsmobile = {
  Auth: {
    region: 'us-east-2',  // 你的AWS区域
    userPoolId: 'us-east-2_Ozgg97WG0',  // 你的用户池ID
    userPoolWebClientId: '3mhrk7hsqteu9r74hvdula5fm',  // 你的Web客户端ID
    mandatorySignIn: false,  // 是否强制用户登录才能使用应用
    authenticationFlowType: 'USER_SRP_AUTH',  // 认证流类型
    oauth: {
      domain: 'auth.rentalninja.link',  // 替换为你在Cognito中设置的OAuth域名
      scope: ['email', 'openid', 'profile'],  // OAuth 范围
      redirectSignIn: 'http://localhost:8081/',  // 替换为你的本地开发URL
      redirectSignOut: 'http://localhost:8081/',  // 替换为你的本地登出URL
      responseType: 'code',  // 使用code作为响应类型
    }
  }
};

export default awsmobile;
