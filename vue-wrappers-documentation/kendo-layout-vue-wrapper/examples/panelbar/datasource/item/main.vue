<template>
    <kendo-panelbar>
        <kendo-panelbar-item text="Furniture">
            <kendo-panelbar-item text="Tables"></kendo-panelbar-item>
            <kendo-panelbar-item text="Sofas"></kendo-panelbar-item>
            <kendo-panelbar-item text="Occasional Furniture"></kendo-panelbar-item>
        </kendo-panelbar-item>
        <kendo-panelbar-item text="Decor"
                             :items="[{ text: 'Bed Linen' },
                                      { text: 'Curtains' },
                                      { text: 'Carpets' }]">
        </kendo-panelbar-item>
    </kendo-panelbar>
</template>
<script>
import { PanelBar, PanelBarItem } from '@progress/kendo-layout-vue-wrapper';
export default {
  components: {
    'kendo-panelbar': PanelBar,
    'kendo-panelbar-item': PanelBarItem
  }
}
</script>
