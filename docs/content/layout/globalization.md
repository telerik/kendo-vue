---
title: Globalization
description: "Globalize the Kendo UI for Vue Native Layout components in Vue projects by adapting to specific cultures, loading translated messages, or using the RTL support."
slug: rtl_layout
position: 50
---

# Globalization

The globalization process combines the translation of component messages with adapting them to specific locales.

For more information on how globalization practices are implemented in Kendo UI for Vue Native, refer to the [overview article]({% slug overview_globalization %}). For more information on the globalization aspects which are available for each component, refer to the article on [globalization support]({% slug globalization_support %}).

## Internationalization

The internationalization process applies specific culture formats to a web application.

For more information, refer to:
* [Kendo UI for Vue Native documentation on internationalization]({% slug overview_intl %})
* [kendo-intl (the base Internationalization package on GitHub)](https://github.com/telerik/kendo-intl)

## Messages

The Layout components support the localization of their messages by utilizing the [Kendo UI for Vue Internationalization]({% slug overview_intl %}) package.


## Right-to-Left Support

The following example demonstrates how to utilize the RTL support for the Layout components.

{% meta height:720 %}
{% embed_file globalization/main.vue preview %}
{% embed_file globalization/index.js %}
{% embed_file globalization/AvatarComponent.vue %}
{% embed_file globalization/CardComponent.vue %}
{% embed_file globalization/MenuComponent.vue %}
{% embed_file globalization/TabStripComponent.vue %}
{% embed_file globalization/TileLayoutComponent.vue %}
{% embed_file globalization/PanelBarComponent.vue %}
{% embed_file globalization/SplitterComponent.vue %}
{% embed_file globalization/FormInput.vue %}
{% embed_file globalization/main.js %}
{% embed_file globalization/styles.css %}
{% embed_file globalization/panelbar-styles.css %}
{% embed_file globalization/splitter-styles.css %}
{% endmeta %}

## Suggested Links

* [Globalization]({% slug overview_globalization %})
* [Internationalization]({% slug overview_intl %})
* [Localization]({% slug localization_intl %})
