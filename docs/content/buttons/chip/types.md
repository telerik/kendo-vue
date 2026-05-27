---
title: Chip Types
description: "Set different color types to the Kendo UI for Vue Chip in Vue projects."
slug: types_chip
position: 3
---

# Chip Types

The Chip component allows you to set different chip color types by controlling its [theme-color](slug:api_buttons_chipprops#toc-themecolor) property.

Each chip type is color-coded which allows the user to immediately recognize, whether the Chip indicates a successful operation or an error message.
By default the `themeColor` value is set to `base`.To use the predefined styles for each chip type, pass a value in the `themColor` property.

The allowed values for the `themeColor` are:
* `base` 
* `info`
* `error`
* `success`
* `warning`
* `null` - null&mdash;Does not set a themeColor `class`.

Below you will find a sample project demonstrating how we can configure each of the above `themeColor` options &mdash; starting with the built-in values and ending with a custom class definition for the Chip with a `themeColor` value of `null`.

{% meta height:130 %}
{% embed_file chip/types/main.vue preview %}
{% embed_file chip/types/CustomChip.vue %}
{% embed_file chip/types/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the Chip]({% slug api_buttons_chipprops %})
