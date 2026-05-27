---
title: Globalization
description: "Globalize the KendoVue Dropdowns in Vue projects by adapting to specific cultures, loading translated messages, or using the RTL support."
slug: globalization_dropdowns
position: 50
---

# Globalization

The globalization process combines the translation of component messages with adapting them to specific locales.

For more information on how globalization practices are implemented in KendoVue. For more information on the globalization aspects which are available for each component.

The following example demonstrates how to localize the built-in messages of the Dropdowns.

{% meta height:450 %}
{% embed_file globalization/main.vue preview %}
{% embed_file globalization/main.js %}
{% embed_file shared/es.json %}
{% endmeta %}

## Internationalization

The internationalization process applies specific culture formats to a web application.

For more information, refer to:
* [Kendo UI for Vue Native documentation on internationalization]({% slug overview_intl %})
* [kendo-intl (the base Internationalization package on GitHub)](https://github.com/telerik/kendo-intl)

## Messages

The Dropdowns support the localization of their messages by utilizing the KendoVue Internationalization package.

The following table lists the built-in message keys and their default values.

|Message Key                                |Default Value                                      |
|:----------------------------------------- |:------------------------------------------------- |
|`dropdowns.nodata`                         | `NO DATA FOUND.`                                  |
|`dropdowns.clear`                          | `Clear`                                           |

## Right-to-Left Support

The following example demonstrates how to utilize the RTL support for the Dropdowns.

{% meta height:450 %}
{% embed_file rtl/main.vue preview %}
{% embed_file rtl/main.js %}
{% endmeta %}

## Suggested Links

* [Globalization]({% slug overview_globalization %})
* [Internationalization]({% slug overview_intl %})
* [Localization]({% slug localization_intl %})