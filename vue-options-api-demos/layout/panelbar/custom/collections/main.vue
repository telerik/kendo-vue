<template>
  <div class="panelbar-wrapper">
    <PanelBar :expand-mode="'single'" :items="items">
      <template v-slot:first="{ props }">
        <div class="custom-template">First item content</div>
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
        },
        {
          title: 'Second item',
          items: [
            {
              title: 'Child item',
            },
          ],
        },
      ],
    };
  },
};
</script>
