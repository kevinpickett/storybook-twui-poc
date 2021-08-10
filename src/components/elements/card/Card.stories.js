import Card from './Card.vue';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    accent: { control: { type: 'select', options: ['none', 'primary', 'danger', 'warning', 'detail'] } },
    loading: { control: {type: 'boolean'}}
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Card },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<card v-bind="args"> <div> Content goes here... </div> </card>',
});

export const Boring = Template.bind({});
Boring.args = {
    loading: false,
    accent: 'none',
};

export const Primary = Template.bind({});
Primary.args = {
    loading: false,
    accent: 'primary',
};

export const Danger = Template.bind({});
Danger.args = {
    loading: false,
    accent: 'danger',
};

export const Warning = Template.bind({});
Warning.args = {
    loading: false,
    accent: 'warning',
};

export const Detail = Template.bind({});
Detail.args = {
    loading: false,
    accent: 'detail',
};
