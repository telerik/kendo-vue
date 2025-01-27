<template>
    <h4>Animation Settings</h4>
    <ul class="options">
        <li>
            <input ref="expand" id="expand" name="animation" type="radio" checked="checked" @change="onChange" /> <label for="expand">expand animation</label>
        </li>
        <li>
            <input ref="opacity" id="opacity" name="animation" type="radio" @change="onChange" /> <label for="opacity">fadeIn animation</label>
        </li>
    </ul>
    <kendo-panelbar id="panelbar1" ref="panelbar1">
        <li>
            Today
            <ul>
                <li>Jane King</li>
                <li>Bob Fuller</li>
                <li>Lynda Kallahan</li>
                <li>Matt Sutnar</li>
            </ul>
        </li>
        <li>
            Yesterday
            <ul>
                <li>Stewart </li>
                <li>Jane King</li>
                <li>Steven</li>
                <li>Ken Stone</li>
            </ul>
        </li>
        <li>
            Wednesday, February 01, 2012
            <ul>
                <li>Jane King</li>
                <li>Lynda Kallahan</li>
                <li>Todd </li>
                <li>Bob Fuller</li>
            </ul>
        </li>
        <li>
            Tuesday, January 31, 2012
            <ul>
                <li>Emily Davolio</li>
                <li>Matt Sutnar</li>
                <li>Bob Fuller</li>
                <li>Jenn Heinlein</li>
            </ul>
        </li>
        <li>
            Monday, January 30, 2012
            <ul>
                <li>Matt Sutnar</li>
                <li>Joshua</li>
                <li>Michael</li>
                <li>Jenn Heinlein</li>
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
        getEffects: function () {
            return $(this.$refs.expand)[0].checked ? "expandVertical " : "fadeIn";
        },
        onChange: function (ev) {
            var panelbar = this.$refs.panelbar1.kendoWidget();
            var vm = this;
            var animation = { expand: { effects: vm.getEffects() } };

            panelbar.setOptions({
               animation: animation
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
