<template>
<div>
  <toolbar @toggle="onToggle">
        <toolbar-item template="<input id='shape' style='width: 140px;'/>"></toolbar-item>
        <toolbar-item type="separator"></toolbar-item>
        <toolbar-item template="<label>H:</label><input id='height' style='width: 70px;' type='text' />"></toolbar-item>
        <toolbar-item template="<label>W:</label><input id='width' style='width: 70px;' type='text' />"></toolbar-item>
        <toolbar-item type="separator"></toolbar-item>        
        <toolbar-item type="buttonGroup" text="Align" :buttons="[
                { icon: 'align-left', text: 'Left', togglable: true, group: 'text-align' },
                { icon: 'align-center', text: 'Center', togglable: true, group: 'text-align' },
                { icon: 'align-right', text: 'Right', togglable: true, group: 'text-align' }]">
        </toolbar-item>
        <toolbar-item type="separator"></toolbar-item>
        <toolbar-item template="<label>BG:</label><div type='color' id='background-picker'></div>"></toolbar-item>
        <toolbar-item type="separator"></toolbar-item>
        <toolbar-item template="<label>BORDER:</label><div type='color' id='border-picker'></div>"></toolbar-item>
        <toolbar-item template="<input id='border-style' style='width: 100px;' />"></toolbar-item>
    </toolbar>  
    <div class="box wide">
        <div id="target" style="border: 3px solid #333333;border-radius: 0;background-color: #ffffff;height: 150px;width: 150px;margin: 0 auto;"></div>
    </div>
</div>
</template>

<script>
import {ToolBar, ToolBarItem} from '@progress/kendo-buttons-vue-wrapper';

var target;

export default {
    name: 'App',
    components: {
        'toolbar': ToolBar,
        'toolbar-item': ToolBarItem
    },
    mounted: function() {
        target = kendo.jQuery("#target");
        kendo.jQuery("#shape").kendoDropDownList({
            dataTextField: "text",
            dataValueField: "value",            
            optionLabel: "Select Shape",
            dataSource: [
                { text: "Rectangle", value: 0 },
                { text: "Rounded rectangle", value: 30 },
                { text: "Circle/Ellipse", value: 300 }
            ],
            change: function() {
                target.css("border-radius", parseInt(this.value()));
            }
        });

        kendo.jQuery("#border-style").kendoDropDownList({
            dataTextField: "text",
            dataValueField: "value",
            dataSource: [
                { text: "Solid", value: "solid" },
                { text: "Dashed", value: "dashed" },
                { text: "Dotted", value: "dotted" }
            ],
            change: function() {
                target.css("border-style", this.value());
            }
        });

        kendo.jQuery("#background-picker").kendoColorPicker({
            value: "#ffffff",
            buttons: false,
            change: function() {
                target.css("background-color", this.value());
            }
        });

        kendo.jQuery("#border-picker").kendoColorPicker({
            value: "#333333",
            buttons: false,
            change: function() {
                target.css("border-color", this.value());
            }
        });

        kendo.jQuery("#height, #width").kendoNumericTextBox({
            value: 150,
            decimals: 0,
            format: "n0",
            max: 300,
            min: 50,
            change: function() {
                var dimension = this.element.attr("id");

                target.css(dimension, this.value());
            }
        });
    },
    methods: {
        onToggle (e) {          
            var position = e.target.text().toLowerCase();
            if (position == "center") {
                position = "none";
            }
            target.css("float", position);
        }      
    }
}
</script>
