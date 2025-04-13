<template>
  <div class="panelbar-wrapper">
    <PanelBar
      :animation="animation"
      :expand-mode="'multiple'"
      :items="items"
      :expanded="expanded"
      :selected="selected"
      :focused="focused"
      @select="onSelect"
    >
    </PanelBar>
  </div>
</template>

<script>
import { PanelBar } from '@progress/kendo-vue-layout';
import './styles.css';

export default {
  components: {
    PanelBar,
  },
  mounted() {
    this.aniamtion = true;
  },
  data() {
    return {
      animation: false,
      selected: 1,
      focused: 6,
      expanded: [5, 7],
      items: [
        {
          id: 1,
          title: 'Id: 1',
          items: [
            {
              id: 2,
              title: 'Id: 2',
            },
            {
              id: 3,
              title: 'Id: 3',
            },
            {
              id: 4,
              title: 'Id: 4',
            },
          ],
        },
        {
          id: 5,
          title: 'Id: 5',
          items: [
            {
              id: 6,
              title: 'Id: 6',
            },
            {
              id: 7,
              title: 'Id: 7',
              items: [
                {
                  id: 8,
                  title: 'Id: 8',
                },
                {
                  id: 9,
                  title: 'Id: 9',
                },
                {
                  id: 10,
                  title: 'Id: 10',
                },
                {
                  id: 11,
                  title: 'Id: 11',
                },
              ],
            },
            {
              id: 12,
              title: 'Id: 12',
            },
          ],
        },
        {
          id: 13,
          title: 'Id: 13',
          disabled: true,
        },
      ],
    };
  },
  methods: {
    onSelect(e) {
      this.expanded = e.expandedItems;
    },
  },
};
</script>
