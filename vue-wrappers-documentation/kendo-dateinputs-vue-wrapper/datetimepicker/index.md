---
title: Overview
page_title: DateTimePicker Overview - Components - Kendo UI for Vue
description: "Get an overview of the features the Kendo UI DateTimePicker wrapper for Vue delivers and use the component in Vue projects."
slug: overview_datetimepicker_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/dateinputs/datetimepicker/"
position: 0
---

<div><WrapperBanner link="/kendo-vue-ui/components/dateinputs/datetimepicker"></WrapperBanner></div>

# DateTimePicker Overview

The DateTimePicker combines the Kendo UI DateInput and Calendar components.

It enables the user to enter or pick a date and time value.

The DateTimePicker wrapper for Vue is a client-side wrapper for the [Kendo UI DateTimePicker](https://docs.telerik.com/kendo-ui/api/javascript/ui/datetimepicker) widget.

<div data-component="StartFreeTrialSection"></div>

## Basic Usage

The following example demonstrates the DateTimePicker in action.

{% meta height:450 %}
{% embed_file datetimepicker/basic/main.vue preview %}
{% embed_file datetimepicker/basic/main.js %}
{% endmeta %}

## Functionality and Features

* [Disabled dates]({% slug disabledates_datetimepicker_wrapper %})
* [Date ranges and formats]({% slug daterangesformats_datetimepicker_wrapper %})
* [Active view and view depth]({% slug startviewdepth_datetimepicker_wrapper %})
* [Week number column]({% slug weekcolumn_datetimepicker_wrapper %})
* [Range selection]({% slug rangeselection_datetimepicker_wrapper %})
* [Intervals]({% slug intervals_datetimepicker_wrapper %})
* [Templates]({% slug templates_datetimepicker_wrapper %})
* [Keyboard navigation]({% slug keyboardnavigation_datetimepicker_wrapper %})
* [RTL support]({% slug rtl_datetimepicker_wrapper %})

## Events

The following example demonstrates basic DateTimePicker events. You can subscribe to [all DateTimePicker events](https://docs.telerik.com/kendo-ui/api/javascript/ui/datetimepicker#events) by the handler name.

```html
<div id="vueapp" class="vue-app">
    <kendo-datetimepicker v-on:open="onOpen"
                          v-on:close="onClose"
                          style="width: 250px">
    </kendo-datetimepicker>
</div>
```
```js
Vue.use(DateinputsInstaller);
new Vue({
    el: '#app',
    methods: {
        onOpen: function (e) {
            console.log("DateTimePicker is opened");
        },
        onClose: function (e) {
            console.log("DateTimePicker is closed");
        }
    }
})
```

## Suggested Links

* [Kendo UI DateTimePicker for jQuery](https://docs.telerik.com/kendo-ui/controls/editors/datetimepicker/overview)
* [API Reference of the DateTimePicker](https://docs.telerik.com/kendo-ui/api/javascript/ui/datetimepicker)
