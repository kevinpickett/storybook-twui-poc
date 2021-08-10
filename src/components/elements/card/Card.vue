<template>
    <div :class="classes">
        <div v-if="loading">Loading...</div>
        <slot v-else></slot>
    </div>
</template>

<script>
import { reactive, computed } from 'vue';

export default {
  name: 'card',

  props: {
    accent: {
        type: String,
        default: 'none',
        validator(value) {
            return ['none', 'primary', 'danger', 'detail', 'warning'].includes(value)
        }
    },
    loading: {
        type: Boolean,
        default: false,
    }
  },

  setup(props) {
    props = reactive(props)
    return {
      classes: computed(() => ({
        'integra-card': true,
        [`integra-card-accent--${props.accent}`]: props.accent != 'none'
      })),
      loading: props.loading
    }
  },
};
</script>

<style>
    :root {
    --red: hsl(0, 78%, 62%);
    --cyan: hsl(180, 62%, 55%);
    --orange: hsl(34, 97%, 64%);
    --blue: hsl(212, 86%, 64%);
    --varyDarkBlue: hsl(234, 12%, 34%);
    --grayishBlue: hsl(229, 6%, 66%);
    --veryLightGray: hsl(0, 0%, 98%);
}

.integra-card {
    border-radius: 5px;
    box-shadow: 0px 30px 40px -20px var(--grayishBlue);
    padding: 30px;
    margin: 20px;  
    background-color: white;
}

@media (max-width: 450px) {
    .integra-card {
        height: 200px;
    }
}

@media (max-width: 950px) and (min-width: 450px) {
    .integra-card {
        text-align: center;
        height: 180px;
    }
}

.integra-card-accent--primary {
    border-top: 3px solid var(--blue);
}

.integra-card-accent--detail {
    border-top: 3px solid var(--cyan);
}

.integra-card-accent--danger {
    border-top: 3px solid var(--red);
}

.integra-card-accent--warning {
    border-top: 3px solid var(--orange);
}

@media (min-width: 950px) {
    .integra-card {
        width: 20%;
    }    
}
</style>
