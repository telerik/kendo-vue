<template>
  <div class="example">
    <FloatingActionButton
      :popup-settings="{ animate: false, popupClass: 'my-popup' }"
      :items="items"
      :svg-icon="shareIcon"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { FloatingActionButton } from "@progress/kendo-vue-buttons";
import {
    shareIcon,
    facebookIcon,
    pinterestIcon,
  xLogoIcon,
} from "@progress/kendo-svg-icons";

const items = ref([
    {
    text: "Twitter",
    svgIcon: xLogoIcon,
    },
    {
        text: "Facebook",
        svgIcon: facebookIcon,
    },
    {
        text: "Pinterest",
        svgIcon: pinterestIcon,
    },
]);
</script>
