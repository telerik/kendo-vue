<template>
  <div class="example">
    <FloatingActionButton :items="items" :svg-icon="shareIcon" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { FloatingActionButton } from "@progress/kendo-vue-buttons";
import {
    shareIcon,
    xLogoIcon,
    facebookIcon,
    pinterestIcon,
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
