---
title: Date Ranges and Formats
page_title: Date Ranges and Formats - DateTimePicker - Kendo UI for Vue
description: "Set the date ranges and the format in which the Kendo UI DateTimePicker wrapper for Vue renders them."
slug: daterangesformats_datetimepicker_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/dateinputs/datetimepicker/date-ranges/"
position: 3
---

<div><WrapperBanner link="/kendo-vue-ui/components/dateinputs/datetimepicker/date-ranges/"></WrapperBanner></div>

# Date Ranges and Formats

The DateTimePicker enables you to set date ranges and formats.

To configure the date ranges, use the `min` and `max` properties. To set the date and time formats, use the `format` property.

{% meta height:450 %}
{% embed_file datetimepicker/ranges/main.vue preview %}
{% embed_file datetimepicker/ranges/main.js %}
{% endmeta %}

The following example demonstrates how to configure the date format for the time view.

```html-preview
<div id="vueapp" class="vue-app">
   <kendo-datetimepicker :value="currentDate"
                          :format="'yyyy/MMMM/dd hh:mm'"
                          :time-format="'(hh:mm)'"
                          style="width: 250px">
    </kendo-datetimepicker>
</div>
```
```js
Vue.use(DateinputsInstaller);
new Vue({
    el: '#vueapp',
    data: {
        minDate: new Date(2018, 9, 1),
        maxDate: new Date(2018, 10, 1),
        currentDate: new Date(2018, 9, 15)
    }
})
```

## Suggested Links

* [Kendo UI DateTimePicker for jQuery](https://docs.telerik.com/kendo-ui/controls/editors/datetimepicker/overview)
* [API Reference of the DateTimePicker](https://docs.telerik.com/kendo-ui/api/javascript/ui/datetimepicker)
