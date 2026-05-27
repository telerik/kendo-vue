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

<script setup>
import { ref } from "vue";
import { Button as KButton } from "@progress/kendo-vue-buttons";
import { Signature } from "@progress/kendo-vue-inputs";

const open = ref(false);

function toggleOpen() {
    open.value = !open.value;
}
</script>
