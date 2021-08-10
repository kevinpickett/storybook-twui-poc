import ActionPanel from './ActionPanel.vue';

// You need to import this once
import './../../../index.css'

export default {
  title: 'Components/Panel/ActionPanel',
  component: ActionPanel,
  argTypes: {},
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { ActionPanel },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<action-panel v-bind="args"> </action-panel>',
});

export const Primary = Template.bind({});
Primary.args = {};

// export const Large = Template.bind({});
// Large.args = {
//     loading: 'true',
//     accent: 'blue',
// };

