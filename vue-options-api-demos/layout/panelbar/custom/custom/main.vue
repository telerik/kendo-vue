<template>
  <div class="panelbar-wrapper">
    <PanelBar :expand-mode="'single'" :items="items" @select="onSelect">
      <template v-slot:first="{ props }">
        <div style="padding: 10px">
          First Item Template.
          <b>{{ props.item.myCustomProp }}</b>
        </div>
      </template>
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
  data() {
    return {
      items: [
        {
          title: 'First item',
          content: 'first',
          myCustomProp: 'This information is passed through a custom property',
          expanded: true,
        },
        {
          title: 'Second item',
          myCustomProp: 'Second Item: Custom property',
          items: [
            {
              title: 'Second item child item',
              myCustomProp: 'Second Item, Child: Custom property',
            },
          ],
        },
      ],
    };
  },
  methods: {
    onSelect(ev) {
      console.log(ev.target.myCustomProp);
    },
  },
};
</script>
