<template>
  <kbutton @click="handleCollapse">Collapse All items</kbutton>
  <kbutton @click="handleExpand">Expand All items</kbutton>
  <br />
  <br />
  <div class="panelbar-wrapper">
    <PanelBar
      :items="items"
      :mode="'multiple'"
      :expanded="expanded"
      @select="onSelect"
      :animation="false"
    >
    </PanelBar>
  </div>
</template>

<script>
import { PanelBar } from '@progress/kendo-vue-layout';
import { Button } from '@progress/kendo-vue-buttons';
import './styles.css';
let dataItems = [];

export default {
  components: {
    PanelBar,
    kbutton: Button,
  },
  data() {
    return {
      expanded: ['.0', '5'],
      updated: 0,
      items: [
        {
          id: '1',
          title: 'Home',
          items: [
            {
              id: '2',
              title: 'Decor',
            },
            {
              id: '3',
              title: 'Furniture',
            },
            {
              id: '4',
              title: 'Lights',
            },
          ],
        },
        {
          id: '5',
          title: 'Kitchen',
          items: [
            {
              id: '6',
              title: 'Tables',
            },
            {
              id: '7',
              title: 'Decor',
              items: [
                {
                  id: '8',
                  title: 'Lights',
                },
                {
                  id: '9',
                  title: 'Candles',
                },
                {
                  id: '10',
                  title: 'Cook books',
                },
                {
                  id: '11',
                  title: 'Plates',
                },
              ],
            },
            {
              id: '12',
              title: 'Chairs',
            },
          ],
        },
        {
          id: '13',
          title: 'Bathroom',
          disabled: true,
        },
      ],
    };
  },
  methods: {
    flatData(data) {
      for (let index = 0; index < data.length; index++) {
        const currentItem = { ...data[index] };

        if (currentItem.items && currentItem.items.length) {
          currentItem.items = this.flatData(currentItem.items);
          dataItems.push(currentItem.id);
        }
      }
      return dataItems;
    },
    onSelect(ev) {
      this.expanded = ev.expandedItems;
    },
    handleExpand(e) {
      this.expanded = this.flatData(this.items).sort();
    },
    handleCollapse(e) {
      this.expanded = [];
      dataItems = [];
    },
  },
};
</script>
