<template>
  <div class="example">
    <div
      class="img"
      :style="{ backgroundColor: value }"
    />
    <div class="description">
      <h1>Comfy T-shirt with a cut-away neckline</h1>
      <p class="price">$19.99</p>
      <span>incl. VAT</span>

      <p class="selected-color">{{ colorNames[value] }}</p>
      <ColorPalette
        :palette="['#37399b', '#a81c85', '#0ab3cc', '#2f7d20', '#a21616']"
        :value="value"
        :tile-size="40"
        @change="handleOnChange"
      />
      <KButton
        class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"
      >
        Add to cart
      </KButton>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Button as KButton } from "@progress/kendo-vue-buttons";
import { ColorPalette } from "@progress/kendo-vue-inputs";
import "./styles.css";

const value = ref("#a21616");
const colorNames = {
    "#37399b": "Navy blue",
    "#a81c85": "Violet",
    "#0ab3cc": "Light blue",
    "#2f7d20": "Forest green",
    "#a21616": "Dark red",
};

const handleOnChange = (e) => {
    value.value = e.value;
};
</script>
