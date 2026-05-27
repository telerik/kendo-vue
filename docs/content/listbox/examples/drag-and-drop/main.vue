<template>
  <div class="example">
    <div class="demo-section k-content wide">
      <div>
        <img :src="arrowleftImage" alt="drag-indicator" class="arrow" />
        <br />
        <ListBox
          :data-items="notDiscontinued"
          :text-field="'ProductName'"
          :draggable="true"
          @dragstart="handleDragStart"
          @drop="handleDrop"
        />
        <ListBox
          :data-items="discontinued"
          :text-field="'ProductName'"
          :draggable="true"
          :style="{ marginLeft: '12px' }"
          @dragstart="handleDragStart"
          @drop="handleDrop"
        />
        <img :src="arrowrightImage" alt="drag-indicator" class="arrow" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { ListBox, processListBoxDragAndDrop } from '@progress/kendo-vue-listbox';
import products from './products.json';

const arrowleftImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/listbox/arrow-left2right.png';
const arrowrightImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/listbox/arrow-right2left.png';

const notDiscontinued = ref(products.filter((product) => !product.Discontinued));
const discontinued = ref(products.filter((product) => product.Discontinued));
const draggedItem = ref({});

function handleDragStart(e) {
    draggedItem.value = e.dataItem;
}

function handleDrop(e) {
    const result = processListBoxDragAndDrop(
        notDiscontinued.value,
        discontinued.value,
        draggedItem.value,
        e.dataItem,
        'ProductID'
    );

    notDiscontinued.value = result.listBoxOneData;
    discontinued.value = result.listBoxTwoData;
}
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
