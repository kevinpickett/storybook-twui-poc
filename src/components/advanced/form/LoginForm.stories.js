import LoginForm from './LoginForm.vue';

// You need to import this once
import './../../../index.css'

export default {
  title: 'Components/LoginForm',
  component: LoginForm,
  argTypes: {
    color: { control: { type: 'select', options: ['primary', 'secondary'] } },
    useSocial: { control: {type: 'boolean'}}
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { LoginForm },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<login-form v-bind="args"> </login-form>',
});

export const Primary = Template.bind({});
Primary.args = {
    useSocial: false,
    color: 'primary'
};

export const PrimaryWithSocial = Template.bind({});
PrimaryWithSocial.args = {
    useSocial: true,
    color: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
    useSocial: false,
    color: 'secondary'
};

export const SecondaryWithSocial = Template.bind({});
SecondaryWithSocial.args = {
    useSocial: true,
    color: 'secondary'
};

// export const Large = Template.bind({});
// Large.args = {
//     loading: 'true',
//     accent: 'blue',
// };

