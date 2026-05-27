---
title: Services
description: "Use the Kendo UI for Vue Internationalization service in Vue projects."
slug: services_intl
position: 50
---

# Services

The Internationalization package exposes [`IntlService`]({% slug api_intl_intlservice %}) service for default and customized internationalization of locales and [`LocalizationService`]({% slug api_intl_localizationservice %}) for providing messages based on the current language.

## Using the `IntlService` in Components

To use the service in your own components:

1. Use the `IntlProvider` component in your parent component.
1. If you require locale data that is different from the default `en-US` locale data, [load the data you need]({% slug loadingdata_intl %}) in your parent component.
1. Inject the `IntlService` in your child component using the below code:

```js
  inject: {
    kendoIntlService: { default: null },
  }
```
4. Access the `IntlService` in the child component by using the [`provideIntlService`]({% slug api_intl_provideintlservice %}) function.

{% meta height:300 %}
{% embed_file use-in-component/main.vue preview %}
{% embed_file use-in-component/DateFormatter.vue %}
{% embed_file use-in-component/main.js %}
{% endmeta %}

## Applying the `LocalizationService` in Components

The [`toLanguageString`]({% slug api_intl_localizationservice %}#toc-tolanguagestring) method of the `LocalizationService` accepts a key and a default value. To use the `LocalizationService` in your own components in conjunction with the `LocalizationProvider`:

1. Use the `LocalizationProvider` component in your parent component.
2. Set the [`language`]({% slug api_intl_localizationproviderprops %}#toc-language) property.
3. Inject the `Localization Service` in your child component using the below code:

```js
  inject: {
    kendoLocalizationService: { default: null },
  }
```
4. In your child component, access the `LocalizationService` by using the [`provideLocalizationService`]({% slug api_intl_providelocalizationservice %}) function.

{% meta height:300 %}
{% embed_file localization/main.vue preview %}
{% embed_file localization/main.js %}
{% embed_file shared/Chooser.vue %}
{% embed_file localization/MessageComponent.vue %}
{% embed_file localization/messages.js %}
{% endmeta %}

## Customizing the Default Service

To override the default behavior of the internationalization service:

1. Inherit [`IntlService`]({% slug api_intl_intlservice %}) and override the necessary methods.
1. Inherit the [`IntlProvider`]({% slug api_intl_intlproviderprops %}) component and override its `getIntlService` method.
1. Use the customized `IntlProvider` component.

{% meta height:300 %}
{% embed_file custom-service/main.vue preview %}
{% embed_file custom-service/main.js %}
{% embed_file custom-service/DateFormatter.vue %}
{% embed_file custom-service/CustomFormatIntlProvider.js %}
{% embed_file custom-service/CustomFormatIntlService.js %}
{% endmeta %}

## Suggested Links

* [IntlService API Reference]({% slug api_intl_intlservice %})
* [LocalizationService API Reference]({% slug api_intl_localizationservice %})
* [Troubleshooting]({% slug troubleshooting_intl %})
