<template>
  <div>
    <DropDownButton :item-render="itemRender" :items="items" text="Export">
      <template #itemRender="{ props }">
        <div class="k-link k-menu-link">
          <SvgIcon :icon="props.item.svgIcon" />
          <em>{{ `action #${props.itemIndex}: ${props.item.text}` }}</em>
        </div>
      </template>
    </DropDownButton>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { DropDownButton } from "@progress/kendo-vue-buttons";
import { filePdfIcon, fileExcelIcon } from "@progress/kendo-svg-icons";
import { SvgIcon } from "@progress/kendo-vue-common";

const items = ref([
    {
        text: "To PDF",
        svgIcon: filePdfIcon,
    },
    {
        text: "To Excel",
        svgIcon: fileExcelIcon,
    },
    {
        text: "Other",
    },
]);

const itemRender = "itemRender";
</script>
