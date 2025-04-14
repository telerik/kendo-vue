<template>
    <div class="example">
      <div class="demo-section k-content wide">
        <div>
          <img
            :src="arrowleftImage"
            alt="drag-indicator"
            class="arrow"
          />
          <br />
          <ListBox
            :dataItems="notDiscontinued"
            :text-field="'ProductName'"
            :draggable="true"
            @dragstart="handleDragStart"
            @drop="handleDrop"
          />
          <ListBox
            :dataItems="discontinued"
            :text-field="'ProductName'"
            :draggable="true"
            :style="{ marginLeft: '12px' }"
            @dragstart="handleDragStart"
            @drop="handleDrop"
          />
          <img
            :src="arrowrightImage"
            alt="drag-indicator"
            class="arrow"
          />
        </div>
      </div>
    </div>
  </template>
  <script>
  import {
    ListBox,
    ListBoxToolbar,
    processListBoxDragAndDrop,
  } from '@progress/kendo-vue-listbox';
  import products from './products.json';


  const arrowleftImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/listbox/arrow-left2right.png';
  const arrowrightImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/listbox/arrow-right2left.png';

  export default {
    components: {
      ListBox,
      ListBoxToolbar,
    },
    data() {
      return {
        notDiscontinued: products.filter((product) => !product.Discontinued),
        discontinued: products.filter((product) => product.Discontinued),
        draggedItem: {},
        arrowleftImage,
        arrowrightImage,
      };
    },
    methods: {
      handleDragStart(e) {
        this.draggedItem = e.dataItem;
      },
      handleDrop(e) {
        let result = processListBoxDragAndDrop(
          this.notDiscontinued,
          this.discontinued,
          this.draggedItem,
          e.dataItem,
          'ProductID'
        );

        this.notDiscontinued = result.listBoxOneData;
        this.discontinued = result.listBoxTwoData;
      },
    },
  };
  </script>

  <style>
  .arrow {
    padding: 8px 0 5px 238px;
  }
  .example .demo-section {
    max-width: none;
    width: 640px;
  }

  .example .k-listbox {
    width: 275px;
    height: 310px;
  }
  </style>
