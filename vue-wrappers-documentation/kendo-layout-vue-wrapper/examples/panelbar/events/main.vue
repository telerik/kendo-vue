<template>
   <kendo-panelbar @select="onSelect">
    <li>
    Item 1
        <ul>
            <li>Sub Item 1
                <ul>
                    <li>Sub Item 1.1</li>
                    <li>Sub Item 1.2</li>
                    <li>Sub Item 1.3</li>
                </ul>
            </li>
            <li>Sub Item 2</li>
            <li>Sub Item 3</li>
        </ul>
    </li>
    <li>
        Item 2
        <ul>
            <li>Sub Item 1</li>
            <li>Sub Item 2</li>
            <li>Sub Item 3</li>
        </ul>
    </li>
</kendo-panelbar>
</template>
<script>
import { PanelBar } from '@progress/kendo-layout-vue-wrapper';
export default {
  components: {
    'kendo-panelbar': PanelBar
  },
   methods: {
        onSelect: function (e) {
            var selectedItem = $(e.item);
            console.log("Selected item : " + selectedItem.text());
        }
    }
}
</script>
