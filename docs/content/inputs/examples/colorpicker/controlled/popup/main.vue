<template>
  <div>
    <div class="row">
      <div class="col-xs-12 col-md-6 example-col">
        <p>Controlled ColorPicker</p>
        <ColorPicker :open="open" />
        &nbsp;
        <KButton
          class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary"
          @click="handleOnClick"
        >
          Toggle
        </KButton>
      </div>
      <div class="col-xs-12 col-md-6 example-col">
        <p>Always shown</p>
        <ColorPicker :open="true" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Button as KButton } from "@progress/kendo-vue-buttons";
import { ColorPicker } from "@progress/kendo-vue-inputs";

const open = ref(false);

const handleOnClick = () => {
    open.value = !open.value;
};
</script>
