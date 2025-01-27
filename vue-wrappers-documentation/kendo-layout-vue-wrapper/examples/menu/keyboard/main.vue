<template>
     <h4>Vertical menu</h4>
    <div style="width:120px;">
        <kendo-menu ref="menu1" :orientation="'vertical'">
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
        </kendo-menu>
    </div>

    <h4 style="padding-top: 2em;">Horizontal menu</h4>
    <kendo-menu ref="menu2" :orientation="'horizontal'">
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
    </kendo-menu>
</template>
<script>
import { Menu, MenuItem } from '@progress/kendo-layout-vue-wrapper';
export default {
  components: {
    'kendo-menu': Menu,
    'kendo-menu-item': MenuItem
  },
   created() {
        var vm = this;
        window.addEventListener('keydown', (e) => {
            if (e.altKey && e.keyCode == 87) {
                $(vm.$refs.menu1.$el).focus();
            }
            else if (e.altKey && e.keyCode == 81) {
                $(vm.$refs.menu2.$el).focus();
            }
        });
    }
}
</script>
