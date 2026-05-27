<template>
  <div>
    <div class="example-config">
      <RadioGroup v-model="value" :data-items="tasks" layout="horizontal" />
    </div>
    <TextArea
      :style="{ width: '230px' }"
      :flow="value"
      input-prefix="prefix"
      :rows="5"
      placeholder="Type some text..."
    >
      <template #prefix="{ props }">
        <span :class="props.className">
          <InputIcons />
        </span>
      </template>
    </TextArea>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { TextArea, RadioGroup } from "@progress/kendo-vue-inputs";
import InputIcons from "./InputIcons.vue";

const value = ref("vertical");
const tasks = [
    { label: "Vertical", value: "vertical" },
    { label: "Horizontal", value: "horizontal" },
];
</script>
