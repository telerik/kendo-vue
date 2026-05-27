---
title: Reacting to Locale Changes
description: "Vue to locale changes when working with the Kendo UI for Vue Internationalization component in Vue projects."
slug: reacting_to_locale_changes_intl
position: 30
---

# Reacting to Locale Changes

The Internationalization package enables you to vue to changes in the locale data or language.

To vue to locale changes, call the [`provideIntlService`]({% slug api_intl_provideintlservice %}) function as it is demonstrated in the **DateFormatter** and **CurrencyFormatter** components in the below example.

{% meta height:300 %}
{% embed_file reacting/main.vue preview %}
{% embed_file reacting/main.js preview %}
{% embed_file shared/Chooser.vue %}
{% embed_file reacting/DateFormatter.vue %}
{% embed_file reacting/CurrencyFormatter.vue %}
{% endmeta %}

To vue to language changes, use the [`provideLocalizationService`]({% slug api_intl_providelocalizationservice %}) function as it demonstrated in the **MessageComponent** component in the below example. 

{% meta height:300 %}
{% embed_file localization/main.vue preview %}
{% embed_file localization/main.js %}
{% embed_file shared/Chooser.vue %}
{% embed_file localization/MessageComponent.vue %}
{% embed_file localization/messages.js %}
{% endmeta %}

## Suggested Links

* [IntlService API Reference]({% slug api_intl_intlservice %})
* [LocalizationService API Reference]({% slug api_intl_localizationservice %})
* [Troubleshooting]({% slug troubleshooting_intl %})
