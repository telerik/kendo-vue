---
title: Globalization
description: "Globalize the Kendo UI for Vue Native Indicator components in Vue projects by adapting to specific cultures, loading translated messages, or using the RTL support."
slug: rtl_indicators
position: 50
---

# Globalization

The globalization process combines the translation of component messages with adapting them to specific locales.

For more information on how globalization practices are implemented in Kendo UI for Vue Native, refer to the [overview article]({% slug overview_globalization %}). For more information on the globalization aspects which are available for each component, refer to the article on [globalization support]({% slug globalization_support %}).

## Internationalization

The internationalization (i18n) process applies specific culture formats to a web application.

For more information, refer to:
* [Kendo UI for Vue Native documentation on internationalization]({% slug overview_intl %})
* [kendo-intl (the base Internationalization package on GitHub)](https://github.com/telerik/kendo-intl)

## Messages

The Indicators do not provide built-in translated messages or the option to implement and localize custom ones.

## Right-to-Left (RTL) Support

The following example demonstrates how to utilize the RTL support for the Indicators.


{% meta height:430 %}
{% embed_file globalization/main.vue preview %}
{% embed_file globalization/main.js %}
{% endmeta %}


## Suggested Links

* [Globalization]({% slug overview_globalization %})
* [Internationalization]({% slug overview_intl %})
* [Localization]({% slug localization_intl %})
