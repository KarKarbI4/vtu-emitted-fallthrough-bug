<template>
  <label>BaseInput<base-input v-model="text" /></label>
  <br />
  <br />
  <label>CoolInput<cool-input v-model="text" /></label>
</template>

<script>
import { defineComponent, ref } from "vue";
import BaseInput from "./BaseInput.vue";
import CoolInput from "./CoolInput.vue";

export default defineComponent({
  components: {
    BaseInput,
    CoolInput,
  },
  setup() {
    const text = ref("");

    return {
      text,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
