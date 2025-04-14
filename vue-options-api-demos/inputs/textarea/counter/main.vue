<template>
  <div
    :style="{
      position: 'absolute',
    }"
  >
    <k-textarea
       :style="{ width: '260px' }"
      :maxlength="max"
      :value="value"
      @input="handleChange"
      :rows="4"
    />
    <hint :direction="'end'"> {{ value.length }} / {{ max }} </hint>
  </div>
</template>

<script>
import { TextArea } from "@progress/kendo-vue-inputs";
import { Hint } from "@progress/kendo-vue-labels";

export default {
  components: {
    "k-textarea": TextArea,
    hint: Hint,
  },
  data() {
    return {
      max: 20,
      value: "",
    };
  },
  methods: {
    handleChange(e) {
      this.value = e.value;
    },
  },
};
</script>
