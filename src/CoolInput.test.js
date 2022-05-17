import CoolInput from './CoolInput.vue';
import { it, expect } from "vitest";
import { mount } from "@vue/test-utils";

it('Test CoolInput', async () => {
  const wrapper = mount(CoolInput);
  
  await wrapper.find('input').setValue('testvalue');
  
  const emitted = wrapper.emitted('update:modelValue') || [];
  expect(emitted.length).toBe(1);  // recieved "0"
  expect(emitted).toMatchObject([ ['testvalue'] ]);
})