---
title: Placeholders
description: "Render a text hint or provide descriptions for the format sections of the Kendo UI for Vue DatePicker in Vue projects."
slug: placeholders_datepicker
position: 8
---

# Placeholders

For its input field, the DatePicker enables you to [provide descriptions for the format sections](#toc-setting-the-description-of-the-format-sections).

The [`formatPlaceholder`]({% slug api_dateinputs_datepickerprops %}#toc-formatplaceholder) option enables you to set the way the format sections of the input field are rendered. For example, whether the month input is prompted as `month` or `MM`.

The `formatPlaceholder` provides the following available options which you can set:
- `'wide'`&mdash;Displays the full description of the format section. For example, turns `MM` into `month`. Retrieved from [CLDR](https://github.com/telerik/kendo-intl/blob/develop/docs/cldr/index.md).
- `'narrow'`&mdash;Displays the narrow description of the format section. For example, turns `MM` into `mo.`. Retrieved from [CLDR](https://github.com/telerik/kendo-intl/blob/develop/docs/cldr/index.md).
- `'short'`&mdash;Displays the short description of the format section. For example, turns `MM` into `mo.`. Retrieved from [CLDR](https://github.com/telerik/kendo-intl/blob/develop/docs/cldr/index.md).
- `'formatPattern'`&mdash;Directly displays the format section. For example, turns `MM` into `MM`.
- [`CustomFormatPlaceholder`]({% slug api_dateinputs_dateinputcustomformatplaceholder %})&mdash;An object that defines the description of the format sections. For example, `{ day: 'd.', month: 'M.', year: 'y', hour: 'h.' }`.

{% meta height:650 %}
{% embed_file datepicker/placeholders/main.vue preview %}
{% embed_file datepicker/placeholders/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the DatePicker]({% slug api_dateinputs_datepickerprops %})
