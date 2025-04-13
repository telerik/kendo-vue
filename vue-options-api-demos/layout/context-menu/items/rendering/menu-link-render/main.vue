<template>
  <div>
    <div :style="rectangularStyle" @contextmenu="handleContextMenu">
      <p>Right click here to open Context menu</p>
    </div>
    <Popup :show="show" :offset="currentOffset">
      <Menu :items="items" :link-render="'linkRender'" :vertical="true">
        <template v-slot:linkRender="{ props }">
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

<script>
import { Menu, MenuItemArrow, MenuItemLink } from '@progress/kendo-vue-layout';
import { Popup } from '@progress/kendo-vue-popup';
import {
  heartIcon
} from "@progress/kendo-svg-icons";

export default {
  components: {
    Menu,
    MenuItemArrow,
    MenuItemLink,
    Popup,
  },
  mounted: function () {
    document.addEventListener(
      'click',
      function () {
        this.show = false;
      }.bind(this)
    );
  },
  computed: {
    currentOffset() {
      return this.offSet;
    },
  },
  data: function () {
    return {
      offSet: {
        left: 0,
        top: 0,
      },
      show: false,
      itemRender: 'itemRender',
      items: [
        { text: 'Item1' },
        {
          text: 'Item2',
          svgIcon: heartIcon,
          items: [{ text: 'Item2.1' }, { text: 'Item2.2' }],
        },
      ],
      rectangularStyle: {
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
      },
    };
  },
  methods: {
    handleContextMenu(e) {
      e.preventDefault();
      this.offSet = {
        left: e.clientX,
        top: e.clientY,
      };
      this.show = true;
    },
  },
};
</script>
