<template>
  <div>
    <div class="example-config">
      {{ view }}
      <RadioGroup
        :data-items="dataItems"
        :default-value="'gradient'"
        @change="onChange"
      />
    </div>
    <div>
      <ColorPicker :default-value="value" :view="view" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ColorPicker, RadioGroup } from "@progress/kendo-vue-inputs";

const view = ref("gradient");
const value = ref("rgba(237, 126, 50, 1)");
const dataItems = ref([
    { label: "Gradient", value: "gradient" },
    { label: "Palette", value: "palette" },
]);

const onChange = (e) => {
    view.value = e.value;
};
</script>
