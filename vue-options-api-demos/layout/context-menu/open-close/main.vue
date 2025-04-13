<template>
  <div>
    <div :style="rectangularStyle" @contextmenu="handleContextMenu">
      <p>Right click here to open Context menu</p>
    </div>
    <Popup :show="show" :offset="currentOffset">
      <Menu
        :items="items"
        :hover-open-delay="0"
        :hover-close-delay="300"
        :vertical="true"
      >
      </Menu>
    </Popup>
  </div>
</template>

<script>
import { Menu, MenuItemArrow, MenuItemLink } from '@progress/kendo-vue-layout';
import { Popup } from '@progress/kendo-vue-popup';

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
        {
          text: 'Item1',
          items: [
            { text: 'Item1.1' },
            {
              text: 'Item1.2',
              items: [{ text: 'Item1.2.1' }, { text: 'Item1.2.2' }],
            },
          ],
        },
        {
          text: 'Item2',
          items: [
            { text: 'Item2.1' },
            { text: 'Item2.2' },
            { text: 'Item2.3' },
          ],
        },
        {
          text: 'Item3',
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
