<template>
  <div>
    <div class="example-config">
      Select <b>ContextMenu</b> orientation:
      <RadioGroup :default-value="directions[0].value" :data-items="directions" @change="handleOrientationChange" />
    </div>
    <div :style="rectangularStyle" @contextmenu="handleContextMenu">
      <p>Right click here to open Context menu</p>
    </div>
    <Popup :show="show" :offset="currentOffset">
      <Menu
        :items="items"
        :vertical="orientation === 'Vertical'? true : false"
        :style="{ display: 'inline-block' }"
      />
    </Popup>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { Menu } from '@progress/kendo-vue-layout';
import { RadioGroup } from '@progress/kendo-vue-inputs';
import { Popup } from '@progress/kendo-vue-popup';

const directions = [
    { label: 'Horizontal', value: 'Horizontal' },
    { label: 'Vertical', value: 'Vertical' },
];
const orientation = ref({ label: 'Horizontal', value: 'Horizontal' });
const offSet = ref({ left: 0, top: 0 });
const show = ref(false);
const items = [
    {
        text: 'Item1',
        items: [
            { text: 'Item1.1' },
            { text: 'Item1.2', items: [{ text: 'Item1.2.1' }, { text: 'Item1.2.2' }] },
        ],
    },
    {
        text: 'Item2',
        items: [{ text: 'Item2.1' }, { text: 'Item2.2' }, { text: 'Item2.3' }],
    },
    { text: 'Item3' },
];
const rectangularStyle = {
    width: '300px',
    height: '200px',
    backgroundColor: '#f6f6f6',
    borderRadius: '5px',
    justifyContent: 'center',
    display: 'flex',
    position: 'absolute',
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
const handleOrientationChange = (e) => {
    orientation.value = e.value;
};

onMounted(() => {
    document.addEventListener('click', () => {
        show.value = false;
    });
});
</script>
