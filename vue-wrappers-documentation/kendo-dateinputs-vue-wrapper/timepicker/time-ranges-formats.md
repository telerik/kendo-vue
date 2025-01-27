---
title: Time Ranges and Formats
page_title: Time Ranges and Formats - TimePicker - Kendo UI for Vue
description: "Set the time ranges and the format in which the Kendo UI TimePicker wrapper for Vue renders them."
slug: timerangesformats_timepicker_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/dateinputs/timepicker/"
position: 2
---

<div><WrapperBanner link="/kendo-vue-ui/components/dateinputs/timepicker"></WrapperBanner></div>

# Time Ranges and Formats

The TimePicker enables you to set time ranges and formats.

To configure the time ranges, use the `min` and `max` properties. To set the time format, use the `time` property.

{% meta height:450 %}
{% embed_file timepicker/time-ranges/main.vue preview %}
{% embed_file timepicker/time-ranges/main.js %}
{% endmeta %}

The following example demonstrates how to configure the time interval and format for the time view.

```html-preview
<div id="vueapp" class="vue-app">
   <kendo-timepicker :value="currentDate"                       
                     :time="'(hh:mm))'">
    </kendo-timepicker>
</div>
```
```js
Vue.use(DateinputsInstaller);
new Vue({
    el: '#vueapp',
    data: {       
        currentDate: new Date(2018, 9, 15)
    }
})
```

## Suggested Links

* [Kendo UI TimePicker for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/timepicker)
* [API Reference of the TimePicker](https://docs.telerik.com/kendo-ui/api/javascript/ui/timepicker)
