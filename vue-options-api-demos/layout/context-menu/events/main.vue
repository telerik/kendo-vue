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
      :events="eventsList"
      :style="{ 'margin-top': '20px' }"
    />
  </div>
</template>

<script>
import { Menu } from '@progress/kendo-vue-layout';
import { Popup } from '@progress/kendo-vue-popup';
import Logger from './Logger.vue';

export default {
  components: {
    Menu,
    Popup,
    Logger,
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
    eventsList() {
      return this.events;
    },
  },
  data: function () {
    return {
      offSet: {
        left: 0,
        top: 0,
      },
      show: false,
      rectangularStyle: {
        width: '300px',
        height: '200px',
        backgroundColor: '#f6f6f6',
        borderRadius: '5px',
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
        boxShadow:
          '0 1px 5px 0 rgba(0, 0, 0, 0.26), 0 2px 2px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.08)',
      },
      events: [],
      items: [
        {
          text: 'First item',
        },
        {
          text: 'Second item',
          items: [
            {
              text: 'Second item child item',
            },
          ],
        },
      ],
    };
  },
  methods: {
    onMenuSelect(e) {
      this.events.unshift("Menu Item '" + e.item.text + "' was selected");
    },
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
