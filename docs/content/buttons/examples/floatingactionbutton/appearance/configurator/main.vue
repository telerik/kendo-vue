<template>
  <div>
    <FloatingActionButtonConfigurator
      :size="size"
      @sizechange="setSize"
      :theme-color="themeColor"
      @themecolorchange="setThemeColor"
      :rounded="rounded"
      @roundedchange="setRounded"
    />
    <FloatingActionButton
      :size="size"
      :theme-color="themeColor"
      :rounded="rounded"
      :svg-icon="shareIcon"
      :text="'Floating Action Button'"
      :align="{ horizontal: 'center', vertical: 'middle' }"
    >
    </FloatingActionButton>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { FloatingActionButton } from "@progress/kendo-vue-buttons";
import { shareIcon } from "@progress/kendo-svg-icons";
import FloatingActionButtonConfigurator from "./FloatingActionButtonConfigurator.vue";

const size = ref("medium");
const themeColor = ref("primary");
const rounded = ref("medium");

const setSize = (event) => {
    size.value = event.value;
};

const setThemeColor = (event) => {
    themeColor.value = event.value;
};

const setRounded = (event) => {
    rounded.value = event.value;
};
</script>
