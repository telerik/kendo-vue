---
title: Globalization
description: "Globalize the Kendo UI for Vue Excel Export in Vue projects by adapting to specific cultures, loading translated messages, or using the RTL support."
slug: rtl_excelexport_vue
position: 50
---

# Globalization

The globalization process combines the translation of component messages with adapting them to specific locales.

## Internationalization

The internationalization process applies specific culture formats to a web application.

For more information, refer to:
* [Kendo UI for Vue Native documentation on internationalization]({% slug overview_intl %})
* [kendo-intl (the base Internationalization package on GitHub)](https://github.com/telerik/kendo-intl)

## Right-to-Left Support

The Excel Export functionality of the Kendo UI for Vue supports right-to-left direction by switching the direction of the Excel sheet.

To enable the RTL mode when using the `saveExcel` method in your Vue application, set to `true` the [`RTL`]({% slug api_excel-export_excelexportoptions %}#toc-rtl) property in the parameters obejct passed to the method.

{% meta height:300 %}
{% embed_file rtl/main.vue preview %}
{% embed_file rtl/main.js %}
{% embed_file rtl/products.json %}
{% endmeta %}


## Suggested Links

* [API Reference of the Excel Export functionaity]({% slug api_excel-export %})
* [Globalization]({% slug overview_globalization %})
* [Internationalization]({% slug overview_intl %})
* [Localization]({% slug localization_intl %})

