---
title: Overview
page_title: ComboBox Overview - Components - Kendo UI for Vue
description: "Get an overview of the features the Kendo UI ComboBox wrapper for Vue delivers and use the component in Vue projects."
slug: overview_combobox_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/dropdowns/combobox/"
position: 1
---

<div><WrapperBanner link="/kendo-vue-ui/components/dropdowns/combobox"></WrapperBanner></div>

# ComboBox Overview

The ComboBox is a richer version of the `<select>` element and allows the user to choose from a list of options or enter custom values through the keyboard.

The ComboBox wrapper for Vue is a client-side wrapper for the [Kendo UI ComboBox](https://docs.telerik.com/kendo-ui/api/javascript/ui/combobox) widget.

<div data-component="StartFreeTrialSection"></div>

## Basic Usage

The following example demonstrates the ComboBox in action.

{% meta height:350 %}
{% embed_file combobox/basic/main.vue preview %}
{% embed_file combobox/basic/main.js %}
{% endmeta %}

## Functionality and Features

* [Data binding]({% slug databinding_combobox_wrapper %})
* [Filtering]({% slug filtering_combobox_wrapper %})
* [Virtualization]({% slug virtualization_combobox_wrapper %})
* [Grouping]({% slug grouping_combobox_wrapper %})
* [Cascading ComboBoxes]({% slug cascading_combobox_wrapper %})
* [Templates]({% slug templates_combobox_wrapper %})
* [Keyboard navigation]({% slug keyboard_navigation_combobox_wrapper %})
* [RTL support]({% slug rtl_support_combobox_wrapper %})

## Events

The following example demonstrates basic ComboBox events. You can subscribe to [all ComboBox events](https://docs.telerik.com/kendo-ui/api/javascript/ui/combobox#events) by the handler name.

```html
<div id="vueapp" class="vue-app">
    <kendo-combobox :data-source="dataSourceArray"
                    :data-text-field="'text'"
                    :data-value-field="'value'"
                    :filter="'contains'"
                    :placeholder="'Select country...'"
                    @change="onChange"
                    @close="onClose"
                    @dataBound="onDataBound"
                    @filtering="onFiltering"
                    @open="onOpen"
                    @select="onSelect"
                    @cascade="onCascade">
    </kendo-combobox>
</div>
```
```js
Vue.use(DropdownsInstaller);

new Vue({
    el: "#vueapp",
    data: function() {
        return {
            dataSourceArray: [
                { text: 'Albania', value: '1' },
                { text: 'Andorra', value: '2' },
                { text: 'Armenia', value: '3' },
                { text: 'Austria', value: '4' },
                { text: 'Azerbaijan', value: '5' },
                { text: 'Belarus', value: '6' },
                { text: 'Belgium', value: '7' }
            ]
        }
    },
    methods: {
        onChange: function(e) {
            console.log("Event :: change");
        },
        onClose: function(e) {
            console.log("Event :: close");
        },
        onDataBound: function(e) {
            console.log("Event :: dataBound");
        },
        onFiltering: function(e) {
            console.log("Event :: filtering");
        },
        onOpen: function(e) {
            console.log("Event :: open");
        },
        onSelect: function(e) {
            console.log("Event :: select");
        },
        onCascade: function(e) {
            console.log("Event :: cascade")
        }
    }
})
```

## Suggested Links

* [Kendo UI ComboBox for jQuery](https://docs.telerik.com/kendo-ui/controls/editors/combobox/overview)
* [API Reference of the ComboBox Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/combobox)
