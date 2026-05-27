---
title: Pie
description: "Basic usage of the Kendo UI for Vue Native Pie charts in Vue projects."
slug: pie_seriestypes_charts
position: 80
---

# Pie

Pie charts are circular charts which display data in the form of single-series sectors from a two-dimensional circle and are useful for rendering data as part of a whole.

## Basic Usage

The following example demonstrates the Pie chart in action.

{% meta height:465 %}
{% embed_file series-types/pie/basic/main.vue preview %}
{% embed_file series-types/pie/basic/main.js %}
{% endmeta %}

## Data Binding

You can bind the Pie series to an array that contains:

* Numbers.
* Arrays which represent `[value, category]` tuples.
* Objects which are also referred to as models.

When binding the Pie series to objects (models), the user selects the relevant fields through the available bindings:

| Model binding    | Data type                       | Required | Description
| ---              | ---                             | ---      | ---
| `field`          | `number`/`null`                 | Yes      | The value of the data point, if any.
| `categoryField`  | `string`/`date`/`number`/`null` | No       | The category of the data point, if any.
| `colorField`     | `string`                        | No       | The color of the data point, if overridden.

For more information on how to configure each data-binding mode, refer to the article on [binding the Kendo UI for Vue Chart to data]({% slug databinding_chart_charts %}).

## Suggested Links

* [API Reference of the Charts]({% slug api_charts %})
* [Donut Charts]({% slug donut_seriestypes_charts %})
