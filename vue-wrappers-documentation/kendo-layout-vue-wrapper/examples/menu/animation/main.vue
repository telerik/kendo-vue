<template>
     <h4>Animation Settings</h4>
    <ul class="options">
        <li>
            <input ref="toggle" name="animation" type="radio" @change="onChange"/> <label for="toggle">toggle animation</label>
        </li>
        <li>
            <input ref="slide" name="animation" type="radio" checked="checked" @change="onChange"/> <label for="slide">slide animation</label>
        </li>
        <li>
            <input ref="expand" name="animation" type="radio" checked="checked" @change="onChange"/> <label for="expand">expand animation</label>
        </li>
        <li>
            <input ref="opacity" type="checkbox" checked="checked" @change="onChange"/> <label for="opacity">animate opacity</label>
        </li>
        <li>
            <input ref="delay" name="animation" type="text" value="100" class="k-textbox" @change="onChange"/> <label for="delay">open/close delay</label>
        </li>
    </ul>
	<kendo-menu id="menu1" ref="menu1">
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
        getEffects: function () {
            return (($(this.$refs.expand)[0].checked ? "expand:vertical " : "") +
                    ($(this.$refs.slide)[0].checked ? "slideIn:down " : "") +
                    ($(this.$refs.opacity)[0].checked ? "fadeIn" : "")) || false;
        },
        onChange: function (ev) {
            var menu = this.$refs.menu1.kendoWidget();
            var vm = this;
            var animation = { open: { effects: vm.getEffects() } };

            menu.setOptions({
               animation: animation,
               hoverDelay: $(this.$refs.delay)[0].value
            })
        }
    }
}
</script>
<style>
    .options li {
        list-style: none;
    }
</style>
