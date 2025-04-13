<template>
  <div>
    <dropdownbutton :item-render="itemRender" :items="items" :text="'Export'">
      <template v-slot:itemRender="{ props }">
        <div class="k-link k-menu-link">
          <SvgIcon :icon="props.item.svgIcon" />
          <em>{{ `action #${props.itemIndex}: ${props.item.text}` }}</em>
        </div>
      </template>
    </dropdownbutton>
  </div>
</template>

<script>
import { DropDownButton } from "@progress/kendo-vue-buttons";
import { filePdfIcon, fileExcelIcon } from "@progress/kendo-svg-icons";
import { SvgIcon } from "@progress/kendo-vue-common";

export default {
  components: {
    dropdownbutton: DropDownButton,
    SvgIcon,
  },
  data: function () {
    return {
      items: [
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
      ],
      itemRender: "itemRender",
    };
  },
};
</script>
