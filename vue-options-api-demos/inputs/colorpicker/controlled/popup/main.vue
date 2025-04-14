<template>
  <div>
    <div class="row">
      <div class="col-xs-12 col-md-6 example-col">
        <p>Controlled ColorPicker</p>
        <ColorPicker :open="open" />
        &nbsp;
        <button
          class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary"
          @click="handleOnClick"
        >
          Toggle
        </button>
      </div>
      <div class="col-xs-12 col-md-6 example-col">
        <p>Always shown</p>
        <ColorPicker :open="true" />
      </div>
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
      open: false,
    };
  },
  methods: {
    handleOnClick() {
      this.open = !this.open;
    },
  },
};
</script>
