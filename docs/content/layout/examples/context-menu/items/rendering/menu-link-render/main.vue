<template>
  <div>
    <div :style="rectangularStyle" @contextmenu="handleContextMenu">
      <p>Right click here to open Context menu</p>
    </div>
    <Popup :show="show" :offset="currentOffset">
      <Menu :items="items" :link-render="'linkRender'" :vertical="true">
        <template #linkRender="{ props }">
          <MenuItemLink :url="props.item.url" :opened="props.opened">
            <span
              v-if="props.item.icon"
              :class="`k-icon k-i-${props.item.icon}`"
              role="presentation"
              key="0"
            />
            {{ props.item.text }}
            <MenuItemArrow
              v-if="props.item.items && props.item.items.length > 0"
              :itemId="props.itemId"
              :vertical-menu="true"
              :dir="props.dir"
              key="1"
            />
          </MenuItemLink>
        </template>
      </Menu>
    </Popup>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { Menu, MenuItemArrow, MenuItemLink } from '@progress/kendo-vue-layout';
import { Popup } from '@progress/kendo-vue-popup';
import { heartIcon } from '@progress/kendo-svg-icons';

const offSet = ref({ left: 0, top: 0 });
const show = ref(false);
const items = [
    { text: 'Item1' },
    {
        text: 'Item2',
        svgIcon: heartIcon,
        items: [{ text: 'Item2.1' }, { text: 'Item2.2' }],
    },
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

onMounted(() => {
    document.addEventListener('click', () => {
        show.value = false;
    });
});
</script>
