<template>
  <base-input v-bind="{ ...props, ...attrs }" />
</template>

<script>
import { defineComponent } from "vue";
import BaseInput from "./BaseInput.vue";

export default defineComponent({
  name: "CoolInput",
  components: {
    BaseInput,
  },
  setup(props, { attrs }) {
    return {
      props,
      attrs,
    };
  },
});
</script>
