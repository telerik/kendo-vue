<template>
     <h4>Orientation Settings</h4>
    <ul class="options">
        <li>
            <input id="horizontal" name="orientation" type="radio" checked="checked" /> <label for="horizontal">Horizontal</label>
        </li>
        <li>
            <input id="vertical" name="orientation" type="radio" /> <label for="vertical">Vertical</label>
        </li>
    </ul>
    <br />
    <span class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base" ref="apply" href="#" style="width: 80px;" v-on:click="onClick">Apply</span>
    <kendo-menu ref="menu1" id="menu1">
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
                <li>Sub Item 2
                    <ul>
                        <li>Sub Item 1.1</li>
                        <li>Sub Item 1.2</li>
                        <li>Sub Item 1.3</li>
                    </ul>
                </li>
                <li>Sub Item 3</li>
            </ul>
        </li>
        <li>
        Item 3
        <ul>
            <li>Sub Item 1</li>
            <li>Sub Item 2
                <ul>
                    <li>Sub Item 1.1</li>
                    <li>Sub Item 1.2</li>
                    <li>Sub Item 1.3</li>
                </ul>
            </li>
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
        onClick: function (e) {
            var vm = this;
            var menu = vm.$refs.menu1.kendoWidget();
            var orientation = vm.getOrientation();

            $("#menu1").kendoMenu({
                orientation: orientation
            }).data("kendoMenu").wrapper.css("width", (orientation == "horizontal") ? "100%" : 100);
        },
        getOrientation: function () {
            var checked = $("input[type=radio]:checked")[0].id;
            return checked;
        }
    }
}
</script>
<style>
    .options li {
        list-style: none;
    }
</style>
