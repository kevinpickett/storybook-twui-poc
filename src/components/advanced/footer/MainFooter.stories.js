import MainFooter from './MainFooter.vue';

// You need to import this once
import './../../../index.css'

export default {
  title: 'Components/MainFooter',
  component: MainFooter,
  argTypes: {
    accent: { control: { type: 'select', options: ['none', 'cyan', 'red', 'blue', 'orange'] } },
    loading: { control: {type: 'boolean'}}
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { MainFooter },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<main-footer v-bind="args"> </main-footer>',
});

export const Primary = Template.bind({});
Primary.args = {};

// export const Large = Template.bind({});
// Large.args = {
//     loading: 'true',
//     accent: 'blue',
// };

