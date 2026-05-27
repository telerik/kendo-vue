---
title: Integration with JSON
description: "Bind the Kendo UI for Vue TimePicker to dates which are serialized as strings in Vue projects."
slug: jsonintegration_timepicker
position: 11
---

# Integration with JSON

Generally, the data which is received from the server is serialized in a [JSON](http://www.json.org/) format.

The date object in JSON is an [ISO8601](https://en.wikipedia.org/wiki/ISO_8601)-formatted date string. For more details, refer to the documentation on the [`JSON.stringify`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) method. On the other hand, the TimePicker works only with JavaScript [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) instances.

To bind the TimePicker to dates which are serialized as strings, handle the parsing process:

1. Convert the JSON date strings into valid JavaScript `Date` objects by using the `IntlService` or any other suitable `Date` parser.
2. Define the [`value`]({% slug api_dateinputs_timepickerprops %}#toc-value) property of the component.
3. Provide an [`onChange`]({% slug api_dateinputs_timepickerprops %}#toc-onchange) event handler to the TimePicker to get the selected `Date` value.

The following example demonstrates how to set the value of the TimePicker.

{% meta height:550 %}
{% embed_file timepicker/json/main.vue preview %}
{% embed_file timepicker/json/main.js %}
{% endmeta %}

## Suggested Links

* [Supported Date and Number Formats](https://github.com/telerik/kendo-intl/tree/master/docs)
* [API Reference of the TimePicker]({% slug api_dateinputs_timepickerprops %})
* [Keyboard Navigation]({% slug keyboard_navigation_timepicker %})
* [Accessibility]({% slug accessibility_timepicker %})
* [Globalization]({% slug globalization_dateinputs %})
