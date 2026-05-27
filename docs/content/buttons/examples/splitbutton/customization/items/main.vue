<template>
  <div>
    <SplitButton :item-render="itemRender" :items="items" :text="'Save'">
      <template #itemRender="{ props }">
        <span class="k-link k-menu-link">
          <em>{{ `action #${props.itemIndex}: ${props.item.text}` }}</em>
        </span>
      </template>
    </SplitButton>
  </div>
</template>

<script setup>
import { SplitButton } from "@progress/kendo-vue-buttons";
import { ref } from "vue";

const items = ref([
    {
        text: "Save as",
    },
    {
        text: "Upload to drive",
    },
]);
const itemRender = ref("itemRender");
</script>
