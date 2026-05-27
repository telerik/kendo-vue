---
title: Reverse Selection
description: "Enable or disable reverse selection and swap button in the Kendo UI for Vue DateRangePicker in Vue projects."
slug: reverse_daterangepicker
position: 7
---

# Reverse Selection

By default, the DateRangePicker auto-corrects the selection from its calendar to a range where the `start` value is always before the `end` value.

## Getting Started

However, the DateRangePicker allows you to implement reverse date-range selection by setting its [`allowReverse`]({% slug api_dateinputs_daterangepickerprops %}) property to `true`.

The following example demonstrates how to enable the reverse selection from the Calendar component.

{% meta height:680 %}
{% embed_file daterangepicker/reverse/basic/main.vue preview %}
{% embed_file daterangepicker/reverse/basic/main.js %}
{% endmeta %}


## Swapping Start and End Dates in Ranges

Along with the reverse selection logic, you can also render a button to swap the `start` and `end` date values. To display the swap button, set the [`swapButton`]({% slug api_dateinputs_daterangepickerprops %}#toc-swapbutton) and [`allowReverse`]({% slug api_dateinputs_daterangepickerprops %}#toc-allowreverse) properties to `true`.

> To enable the reverse selection from the Calendar without rendering a swap button, provide the `allowReverse` property and set the `swapButton` property to `false`.



{% meta height:680 %}
{% embed_file daterangepicker/reverse/swap/main.vue preview %}
{% embed_file daterangepicker/reverse/swap/main.js %}
{% endmeta %}


## Suggested Links

* [API Reference of the DateRangePicker]({% slug api_dateinputs_daterangepickerprops %})
* [Kendo UI Productivity Tools extension for VS Code]({% slug vue_vscode_overview %})
