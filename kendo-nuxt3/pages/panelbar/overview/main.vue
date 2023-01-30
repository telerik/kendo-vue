<template>
  <div class="panelbar-wrapper">
    <PanelBar :expand-mode="'single'" :items="items">
      <template v-slot:first="{ props }">
        <div style="padding: 10px">
          First Item Template.
          {{ props.item.myCustomProp }}
        </div>
      </template>
    </PanelBar>
  </div>
</template>

<script lang="ts">
import { PanelBar } from '@progress/kendo-vue-layout';
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
          items: [{ title: 'Second item child item' }],
        },
      ],
    };
  },
  methods: {
    imageUrl(imageName) {
      let baseImageUrl =
        'https://demos.telerik.com/kendo-ui/content/web/panelbar/';
      return baseImageUrl + imageName + '.jpg';
    },
  },
};
</script>
