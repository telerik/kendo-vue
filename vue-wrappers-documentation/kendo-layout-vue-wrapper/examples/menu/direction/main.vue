<template>
   <h4>Direction Settings</h4>
    <ul class="options">
        <li>
            <input id="default" name="direction" type="radio" checked="checked" /> <label for="default">default / bottom</label>
        </li>
        <li>
            <input id="left" name="direction" type="radio" /> <label for="left">left</label>
        </li>
        <li>
            <input id="right" name="direction" type="radio" /> <label for="right">right</label>
        </li>
        <li>
            <input id="top" name="direction" type="radio" /> <label for="top">top</label>
        </li>
        <li>
            <input id="custom" name="direction" type="radio" /> <label for="custom">custom:</label>
            <input id="customValue" type="text" value="top left" class="k-textbox customValue" />
        </li>
    </ul>
    <br />
    <span class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base" ref="apply" href="#" style="width: 80px;" v-on:click="onClick">Apply</span>
    <kendo-menu ref="menu1">
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
            menu.setOptions({
               direction: vm.getDirection()
            })
        },
        getDirection: function () {
            var checked = $("input[type=radio]:checked")[0].id;
            return checked == "custom" ? "top left" : checked;
        }
    }
}
</script>
