<template>
  <div class="row">
    <div class="col-xs-12 col-md-6 example-col">
      <p>Controlled Signature</p>
      <p>
        <KButton @click="toggleOpen" :theme-color="'primary'"> Open </KButton>
      </p>
      <Signature
        :open="open"
        @open="toggleOpen"
        @close="toggleOpen"
        :popup-scale="2"
      />
    </div>
  </div>
</template>
<script>
import { Button } from "@progress/kendo-vue-buttons";
import { Signature } from "@progress/kendo-vue-inputs";

export default {
  components: {
    Signature,
    KButton: Button,
  },
  data() {
    return {
      open: false,
    };
  },
  methods: {
    onChange(e) {
      this.value = e.value;
    },
    toggleOpen() {
      this.open = !this.open;
    },
  },
};
</script>
