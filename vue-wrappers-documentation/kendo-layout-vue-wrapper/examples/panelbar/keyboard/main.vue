<template>
   <kendo-panelbar ref="panelbar1">
        <li>
            First Item
            <ul>
                <li>Sub Item 1</li>
                <li>Sub Item 2
                    <ul>
                        <li>Sub sub item 1</li>
                        <li>Sub sub item 2</li>
                        <li>Sub sub item 3</li>
                        <li>Sub sub item 4</li>
                    </ul>
                </li>
                <li>Sub Item 3</li>
                <li>Sub Item 4</li>
            </ul>
        </li>
        <li>
            Second Item
            <ul>
                <li>Sub Item 1</li>
                <li>Sub Item 2</li>
                <li>Sub Item 3</li>
                <li>Sub Item 4</li>
            </ul>
        </li>
        <li disabled="disabled">Disabled Item</li>
    </kendo-panelbar>
</template>
<script>
import { PanelBar } from '@progress/kendo-layout-vue-wrapper';
export default {
  components: {
    'kendo-panelbar': PanelBar
  }
}
</script>
