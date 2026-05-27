<template>
  <div class="row">
    <div class="col-md-5">
      <span> Control with <i>v-model</i>: </span>
      <RadioGroup
        :data-items="dataItems"
        :disabled="disabled"
        v-model="checked"
        :layout="'horizontal'"
      />
      <span> Control with <i>value</i> and <i>change</i>: </span>
      <RadioGroup
        :data-items="dataItems"
        :disabled="disabled"
        :value="checked"
        @change="handleChange"
      />
    </div>
    <div class="col-md-4">
      <span>
        Current checked value is <strong>{{ checked }}</strong>
      </span>
      <KButton @click="handleClick">
        Toggle disabled state
      </KButton>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { RadioGroup } from "@progress/kendo-vue-inputs";
import { Button as KButton } from "@progress/kendo-vue-buttons";

const checked = ref("female");
const disabled = ref(false);
const dataItems = ref([
    { label: "Female", value: "female" },
    { label: "Male", value: "male" },
    { label: "Other", value: "other" },
]);

const handleClick = () => {
    disabled.value = !disabled.value;
};

const handleChange = (e) => {
    checked.value = e.value;
};
</script>
