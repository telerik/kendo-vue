<template>
  <div class="row">
    <div class="m-3">
       <span :style="{ color: value }">value and change: {{ value }}</span>
       <br />
        <ColorPicker :value="value" @change="handleOnChange" />
    </div>
    <div class="m-3">
      <span :style="{ color: value }">v-model: {{ value }}</span>
      <br />
      <ColorPicker v-model="value" />
    </div>
  </div>
</template>
<script>
import { ColorPicker } from "@progress/kendo-vue-inputs";

export default {
  components: {
    ColorPicker,
  },
  data() {
    return {
      value: "red",
    };
  },
  methods: {
    handleOnChange(e) {
      this.value = e.value;
    },
  },
};
</script>
