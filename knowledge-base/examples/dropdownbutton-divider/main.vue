<template>
    <div>
      <DropDownButton :items="items" :item-render="itemRender" text="Export">
        <template v-slot:itemRender="{ props }">
          <div>
            <hr v-if="props.itemIndex > 0" class="my-dropdown-divider" />
  
            <div class="k-link k-menu-link">
              <SvgIcon :icon="props.item.svgIcon" />
              <em>{{ `action #${props.itemIndex}: ${props.item.text}` }}</em>
            </div>
          </div>
        </template>
      </DropDownButton>
    </div>
  </template>
  
  <script>
  import { DropDownButton } from '@progress/kendo-vue-buttons';
  import { filePdfIcon, fileExcelIcon } from '@progress/kendo-svg-icons';
  import { SvgIcon } from '@progress/kendo-vue-common';
  
  export default {
    name: 'ExportDropdown',
    components: {
      DropDownButton,
      SvgIcon,
    },
    data() {
      return {
        items: [
          { text: 'To PDF', svgIcon: filePdfIcon },
          { text: 'To Excel', svgIcon: fileExcelIcon },
          { text: 'Other' },
        ],
        itemRender: 'itemRender',
      };
    },
  };
  </script>
  
  <style scoped>
  .my-dropdown-divider {
    margin: 4px 0;
    border: none;
    border-top: 1px solid #ddd;
  }
  </style>
  