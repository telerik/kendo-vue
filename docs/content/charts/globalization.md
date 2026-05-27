---
title: Globalization
description: "Globalize the Kendo UI for Vue Charts in Vue projects by adapting to specific cultures, loading translated messages, or using the RTL support."
slug: globalization_charts
position: 20
---

# Globalization

The globalization process combines the translation of component messages with adapting them to specific locales.

For more information on how globalization practices are implemented in Kendo UI for Vue, refer to the [overview article]({% slug overview_globalization %}). For more information on the globalization aspects which are available for each component, refer to the article on [globalization support]({% slug globalization_support %}).

The following example demonstrates how the Chart component reacts to `local` changes and visualize the currency data based on the selected locale.

{% meta height:600 %}
{% embed_file chart/globalization/main.vue preview %}
{% embed_file chart/globalization/main.js %}
{% endmeta %}

## Internationalization

The internationalization process applies specific culture formats to a web application.

For more information, refer to:
* [Kendo UI for Vue documentation on internationalization]({% slug overview_intl %})
* [kendo-intl (the base Internationalization package on GitHub)](https://github.com/telerik/kendo-intl)

## Messages

The Charts do not provide built-in translated messages.

## Right-to-Left Support

The following example demonstrates how to utilize the RTL support for the Chart.

{% meta height:500 %}
{% embed_file chart/rtl/main.vue preview %}
{% embed_file chart/rtl/main.js %}
{% endmeta %}

## Suggested Links

* [Globalization]({% slug overview_globalization %})
* [Internationalization]({% slug overview_intl %})
* [Localization]({% slug localization_intl %})
