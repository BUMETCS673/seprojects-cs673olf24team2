import { shallowMount } from '@vue/test-utils';
import LoginPage from '@/views/LoginPage.vue';

describe('LoginPage.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(LoginPage);
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('renders login page with email and password input fields', () => {
    expect(wrapper.find('input#email').exists()).toBe(true);
    expect(wrapper.find('input#password').exists()).toBe(true);
  });

  it('shows error message when login fails', async () => {
    wrapper.setData({ errorMessage: 'Invalid credentials' });

    await wrapper.vm.$nextTick(); // Wait for DOM updates

    expect(wrapper.find('.error-message').text()).toBe('Invalid credentials');
  });

  it('calls login method when form is submitted', async () => {
    const loginMock = jest.fn();
    wrapper.setMethods({ login: loginMock });

    await wrapper.find('.login-form').trigger('submit.prevent');

    expect(loginMock).toHaveBeenCalled();
  });
});
