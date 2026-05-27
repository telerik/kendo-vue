---
title: Globalization
description: "Globalize the KendoVue Inputs in Vue projects by adapting to specific cultures, loading translated messages, or using the RTL support."
slug: globalization_inputs
position: 50
---

# Globalization

The globalization process combines the translation of component messages with adapting them to specific locales.

The following example demonstrates how to show the value as a culture-specific currency in the available Inputs components and how to localize their built-in messages.

{% meta height:300 %}
{% embed_file globalization/main.vue preview %}
{% embed_file globalization/main.js %}
{% embed_file globalization/es.json %}
{% endmeta %}


## Internationalization

The internationalization process applies specific culture formats to a web application.

For more information, refer to:
* [Kendo UI for Vue Native documentation on internationalization]({% slug overview_intl %})
* [kendo-intl (the base Internationalization package on GitHub)](https://github.com/telerik/kendo-intl)

## Messages

The Inputs support the localization of their messages by utilizing the KendoVue Internationalization package.

The following table lists the built-in message keys and their default values.

|Message Key                                |Default Value                                                           |
|:----------------------------------------- |:---------------------------------------------------------------------- |
|`numerictextbox.increment`                 | `Increase value`                                                       |
|`numerictextbox.decrement`                 | `Decrease value`                                                       |
|`slider.increment`                         | `Increase`                                                             |
|`slider.decrement`                         | `Decrease`                                                             |

## Right-to-Left Support

The following example demonstrates how to utilize the RTL support for the Inputs.

{% meta height:450 %}
{% embed_file rtl/main.vue preview %}
{% embed_file rtl/main.js %}
{% endmeta %}

## Suggested Links

* [Globalization]({% slug overview_globalization %})
* [Internationalization]({% slug overview_intl %})
* [Localization]({% slug localization_intl %})
