<template>
  <KButton @click="handleCollapse">Collapse All items</KButton>
  <KButton @click="handleExpand">Expand All items</KButton>
  <br />
  <br />
  <div class="panelbar-wrapper">
    <PanelBar
      :items="items"
      :mode="'multiple'"
      :expanded="expanded"
      @select="onSelect"
      :animation="false"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { PanelBar } from '@progress/kendo-vue-layout';
import { Button as KButton } from '@progress/kendo-vue-buttons';
import './styles.css';

const expanded = ref(['.0', '5']);
const items = ref([
    {
        id: '1',
        title: 'Home',
        items: [
            { id: '2', title: 'Decor' },
            { id: '3', title: 'Furniture' },
            { id: '4', title: 'Lights' },
        ],
    },
    {
        id: '5',
        title: 'Kitchen',
        items: [
            { id: '6', title: 'Tables' },
            {
                id: '7',
                title: 'Decor',
                items: [
                    { id: '8', title: 'Lights' },
                    { id: '9', title: 'Candles' },
                    { id: '10', title: 'Cook books' },
                    { id: '11', title: 'Plates' },
                ],
            },
            { id: '12', title: 'Chairs' },
        ],
    },
    { id: '13', title: 'Bathroom', disabled: true },
]);

let dataItems = [];

const flatData = (data) => {
    for (let index = 0; index < data.length; index++) {
        const currentItem = { ...data[index] };
        if (currentItem.items && currentItem.items.length) {
            currentItem.items = flatData(currentItem.items);
            dataItems.push(currentItem.id);
        }
    }
    return dataItems;
};

const onSelect = (ev) => {
    expanded.value = ev.expandedItems;
};

const handleExpand = () => {
    expanded.value = flatData(items.value).sort();
};

const handleCollapse = () => {
    expanded.value = [];
    dataItems = [];
};
</script>
