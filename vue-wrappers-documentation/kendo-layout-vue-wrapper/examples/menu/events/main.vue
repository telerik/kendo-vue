<template>
      <kendo-menu @select="onSelect">
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
    </kendo-menu>
</template>
<script>
import { Menu, MenuItem } from '@progress/kendo-layout-vue-wrapper';
export default {
  components: {
    'kendo-menu': Menu,
    'kendo-menu-item': MenuItem
  },
   methods: {
        onSelect: function (e) {
            var currentItemText = $(e.item.firstChild).text().trim();
            console.log(currentItemText + " clicked.");
        }
    }
}
</script>
