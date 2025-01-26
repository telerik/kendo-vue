<template>
      <div class="k-rtl">
        <kendo-menu ref="menu1">
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
            <li>
                Third Item
                <ul>
                    <li>Sub Item 1</li>
                    <li>Sub Item 2</li>
                    <li>Sub Item 3</li>
                    <li>Sub Item 4</li>
                </ul>
            </li>
        </kendo-menu>
    </div>
</template>
<script>
import { Menu, MenuItem } from '@progress/kendo-layout-vue-wrapper';
export default {
  components: {
    'kendo-menu': Menu,
    'kendo-menu-item': MenuItem
  }
}
</script>
