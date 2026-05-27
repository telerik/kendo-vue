---
title: Formats
description: "Control the format of the Kendo UI for Vue DateTimePicker in Vue projects."
slug: formats_datetimepicker
position: 7
---

# Formats

You can control the format of the DateTimePicker by using the [`format`]({% slug api_dateinputs_datetimepickerprops %}#toc-format) property.

The `format` property accepts string parameters and, by default, is set to `'MM/dd/yyyy HH:mm:ss'`. When `format` is set and the `input` element is not focused, the value is formatted accordingly. For more information on the date and number formats Kendo UI for Vue supports, refer to the [kendo-intl](https://github.com/telerik/kendo-intl#date-formatting) GitHub repository.

{% meta height:690 %}
{% embed_file datetimepicker/formats/main.vue preview %}
{% embed_file datetimepicker/formats/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the DateTimePicker]({% slug api_dateinputs_datetimepickerprops %})
* [Supported Date and Number Formats](https://github.com/telerik/kendo-intl/tree/master/docs)
