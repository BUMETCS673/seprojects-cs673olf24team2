// import { shallowMount } from '@vue/test-utils';
// import RegisterPage from '@/views/RegisterPage.vue'; // 假设 RegisterPage.vue 位于 views 文件夹中
// import Amplify, { Authenticator } from "@aws-amplify/ui-vue";
// import { useRouter } from "vue-router";

// // Mock Amplify and Vue Router
// jest.mock('vue-router', () => ({
//   useRouter: jest.fn(),
// }));
// jest.mock('@aws-amplify/ui-vue', () => ({
//   Authenticator: {
//     template: '<div><slot></slot></div>',
//   },
// }));

// describe('RegisterPage.vue', () => {
//   let wrapper;
//   const pushMock = jest.fn();

//   beforeEach(() => {
//     // Mock useRouter's push function
//     useRouter.mockReturnValue({
//       push: pushMock,
//     });

//     // Mock Amplify configuration
//     Amplify.getConfig = jest.fn().mockReturnValue({});
//     Amplify.configure = jest.fn();

//     wrapper = shallowMount(RegisterPage);
//   });

//   afterEach(() => {
//     jest.clearAllMocks();
//     wrapper.destroy();
//   });

//   it('renders register page title', () => {
//     const title = wrapper.find('.register-title');
//     expect(title.text()).toBe('Register');
//   });

//   it('calls Amplify.configure with current config on creation', () => {
//     expect(Amplify.getConfig).toHaveBeenCalled();
//     expect(Amplify.configure).toHaveBeenCalled();
//   });

//   it('renders Authenticator component', () => {
//     expect(wrapper.findComponent(Authenticator).exists()).toBe(true);
//   });

//   it('redirects to LoginPage when Sign In button is clicked', async () => {
//     await wrapper.vm.redirectToCustomLogin();
//     expect(pushMock).toHaveBeenCalledWith('/LoginPage');
//   });
// });
