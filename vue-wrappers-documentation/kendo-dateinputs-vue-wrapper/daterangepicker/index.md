---
title: Overview
page_title: DatePicker Overview - Components - Kendo UI for Vue
description: "Get an overview of the features the Kendo UI DateRangePicker wrapper for Vue delivers and use the component in Vue projects."
slug: overview_daterangepicker_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/dateinputs/daterangepicker/"
position: 0
---

<div><WrapperBanner link="/kendo-vue-ui/components/dateinputs/daterangepicker"></WrapperBanner></div>

# DateRangePicker Overview

The DateRangePicker combines the Kendo UI DateInput and MultiViewCalendar components and enables the user to enter or pick a date-range value.

The DateRangePicker wrapper for Vue is a client-side wrapper for the [Kendo UI DateRangePicker](https://docs.telerik.com/kendo-ui/api/javascript/ui/daterangepicker) widget.

<div data-component="StartFreeTrialSection"></div>

## Basic Usage

The following example demonstrates the DateRangePicker in action.

{% meta height:450 %}
{% embed_file daterangepicker/basic/main.vue preview %}
{% embed_file daterangepicker/basic/main.js %}
{% endmeta %}


## Functionality and Features

* [Disabled dates]({% slug disabledates_daterangepicker_wrapper %})
* [Active view]({% slug startviewdepth_daterangepicker_wrapper %})
* [Week number column]({% slug weekcolumn_daterangepicker_wrapper %})
* [Date ranges and formats]({% slug startviewdepth_daterangepicker_wrapper %})
* [Templates]({% slug templates_daterangepicker_wrapper %})
* [Keyboard navigation]({% slug keyboard_navigation_daterangepicker_wrapper %})
* [RTL support]({% slug rtl_daterangepicker_wrapper %})

## Events

The following example demonstrates basic DateRangePicker events. You can subscribe to [all DateRangePicker events](https://docs.telerik.com/kendo-ui/api/javascript/ui/daterangepicker#events) by the handler name.

```html
<div id="vueapp" class="vue-app">
    <kendo-daterangepicker v-on:open="onOpen"
                           v-on:close="onClose"
                           v-on:change="onChange">
    </kendo-daterangepicker>
</div>
```
```js
Vue.use(DateinputsInstaller);
new Vue({
    el: '#vueapp',
    methods: {
        onOpen: function (e) {
            console.log("DateRangePicker is opened");
        },
        onClose: function (e) {
            console.log("DateRangePicker is closed");
        },
        onChange: function (e) {
            console.log("DateRangePicker selected date is changed");
        }
    }
})
```

## Suggested Links

* [Kendo UI DateRangePicker for jQuery](https://docs.telerik.com/kendo-ui/controls/editors/daterangepicker/overview)
* [API Reference of the DateRangePicker](https://docs.telerik.com/kendo-ui/api/javascript/ui/daterangepicker)
