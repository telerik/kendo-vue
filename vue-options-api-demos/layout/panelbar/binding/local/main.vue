<template>
  <div class="panelbar-wrapper">
    <PanelBar :expand-mode="'single'" :items="items">
      <template v-slot:first>
        <div style="padding: 10px">First Item Template</div>
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
        { title: 'First item', content: 'first', expanded: true },
        {
          title: 'Second item',
          items: [{ title: 'Second item child item' }],
        },
      ],
    };
  },
};
</script>
