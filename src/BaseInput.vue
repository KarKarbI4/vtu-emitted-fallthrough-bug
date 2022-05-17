<template>
  <input :value="props.modelValue" @input="onInput" />
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseInput",
  props: {
    modelValue: {
      type: String,
      required: true,
    },
  },
  setup(props, { emit }) {
    function onInput(event) {
      emit("update:modelValue", event.target.value);
    }

    return {
      props,
      onInput,
    };
  },
});
</script>
