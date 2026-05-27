<template>
  <div>
    <div :style="rectangularStyle" @contextmenu="handleContextMenu">
      <p>Right click here to open Context menu</p>
    </div>
    <Popup :show="show" :offset="currentOffset">
      <Menu
        :items="items"
        :vertical="true"
        @select="onMenuSelect"
        :style="{ display: 'inline-block' }"
      />
    </Popup>
    <Logger
      :title="'Events list'"
      :events="events"
      :style="{ 'margin-top': '20px' }"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { Menu } from '@progress/kendo-vue-layout';
import { Popup } from '@progress/kendo-vue-popup';
import Logger from './Logger.vue';

const offSet = ref({ left: 0, top: 0 });
const show = ref(false);
const events = ref([]);
const items = [
    { text: 'First item' },
    {
        text: 'Second item',
        items: [{ text: 'Second item child item' }],
    },
];
const rectangularStyle = {
    width: '300px',
    height: '200px',
    backgroundColor: '#f6f6f6',
    borderRadius: '5px',
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    boxShadow:
    '0 1px 5px 0 rgba(0, 0, 0, 0.26), 0 2px 2px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.08)',
};

const currentOffset = computed(() => offSet.value);

const handleContextMenu = (e) => {
    e.preventDefault();
    offSet.value = { left: e.clientX, top: e.clientY };
    show.value = true;
};

const onMenuSelect = (e) => {
    events.value.unshift(`Menu Item '${e.item.text}' was selected`);
};

onMounted(() => {
    document.addEventListener('click', () => {
        show.value = false;
    });
});
</script>
