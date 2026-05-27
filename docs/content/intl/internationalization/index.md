---
title: Overview
description: "Try now the Kendo UI for Vue Internationalization package that provides services for parsing and formatting of dates and numbers."
slug: overview_intl
position: 0
---

# Getting Started with Kendo UI for Vue Native Internationalization

The Kendo UI for Vue Native Internationalization package applies the desired cultures by providing services and pipes for the parsing and formatting of dates and numbers.

Together with the [Localization options]({% slug localization_intl %}), the Internationalization package provides the globalization features of Kendo UI for Vue Native. For more information on the globalization aspects which are available for each component, refer to the article on [globalization support]({% slug globalization_support %}). For more information on the date and number formats Kendo UI for Vue Native supports, refer to the [kendo-intl](https://github.com/telerik/kendo-intl/tree/master/docs) GitHub repository.

The package exports the following types of provider components:
* An [`IntlProvider`]({% slug api_intl_intlproviderprops %}) component and an [API]({% slug api_intl_intlservice %}) for the parsing and formatting of dates and numbers.
* A [`LocalizationProvider`]({% slug api_intl_localizationproviderprops %}) component and an [API]({% slug api_intl_localizationservice %}#toc-tolanguagestring) for the translation of component messages into different languages.

The Kendo UI for Vue Native Internationalization feature is part of the Kendo UI for Vue Native library which provides native Kendo UI components for the Vue ecosystem and is available under the [kendo-vue-intl NPM package](https://www.npmjs.com/package/@progress/kendo-vue-intl).

## Kendo UI for Vue Native Internationalization

The following example demonstrates how to use the `IntlProvider` component in basic use-case scenarios.

{% meta height:300 %}
{% embed_file internationalization/overview/main.vue preview %}
{% embed_file internationalization/overview/main.js %}
{% embed_file internationalization/overview/DateFormatter.vue %}
{% embed_file internationalization/overview/CurrencyFormatter.vue %}
{% embed_file shared/Chooser.vue %}
{% endmeta %}

## Kendo UI for Vue Internationalization Key Features

The Kendo UI for Vue Internationalization package delivers a range of handy and developer-friendly features whose number and further development are not limited by the list in this section. The Kendo UI for Vue team constantly invests efforts to improve the performance and add more value to the existing Internationalization library as well as develop new features to it.

### Loading Locales

The Internationalization package enables you to load default and additional locale data. [Read more about the Intl locale data...]({% slug loadingdata_intl %})

### Intl Services

The package exposes a set of services, which provide handy methods for [formatting and parsing dates and numbers]({% slug parsingandformatting_intl %}) according to your project requirements. [Read more about the Intl services...]({% slug services_intl %})

### Locale Changes

You can change the currently loaded locale at runtime by using the built-in services of the Internationalization package. [Read more about how to dynamically change the locale...]({% slug reacting_to_locale_changes_intl %})

### Loading Messages

You can load messages for specific languages [Read more about how to load messages for a specific language...]({% slug loadingmessages_intl %})

### Using CDN
To use the Kendo UI for Vue Native Internationalization package with CDN, follow the below steps:

1. Reference the `intl` package.

```sh
  <script src="https://unpkg.com/@progress/kendo-vue-intl@latest/dist/cdn/js/kendo-vue-intl.js"></script>
```
2. Follow the instructions in [this article]({% slug my_license %}#toc-set-license-key-when-using-cdn-scripts) to activate your product license. You can skip this step if your application already contains a license key.

### Initializing with Webpack

1. Download and install the package:

```sh
  npm install @progress/kendo-vue-intl @progress/kendo-licensing
```
2. Follow the instructions on the Kendo UI for Vue [My License page]({% slug my_license %}) to activate your license. You can skip this step if your application already contains a Kendo UI license file.

## Kendo UI for Vue Trial Version and Commercial License

The Vue Internationalization package is part of Kendo UI for Vue, a commercial UI library. You are welcome to explore its full functionality and get technical support from the team when you register for a free 30-day trial. To use it commercially, you need to [purchase a license](https://www.telerik.com/kendo-vue-ui/#pricing). Feel free to review the Kendo UI for Vue [License Agreement](https://www.telerik.com/purchase/license-agreement/kendo-ui) to get acquainted with the full terms of use.

## Support Options

For any issues you face while working with the Kendo UI for Vue Internationalization, use any of the available support channels:

* Kendo UI for Vue license holders and anyone with an active trial can take advantage of the outstanding customer support delivered by the developers building the library. To submit a support ticket, use the [Kendo UI for Vue dedicated support](https://www.telerik.com/account/support-tickets) system.
* [Kendo UI for Vue forums](https://www.telerik.com/forums/kendo-ui-vue) are part of the free support you can get from the community and from the Kendo UI for Vue team on all kinds of general issues.
* The [Kendo UI for Vue feedback portal](https://feedback.telerik.com/kendo-vue-ui) and [Kendo UI for Vue roadmap](https://www.telerik.com/kendo-vue-ui/roadmap/) provide information on the features under consideration and also the planned ones for release.
* Kendo UI for Vue uses [GitHub Issues](https://github.com/telerik/kendo-vue/issues) as its bug tracker and you can submit any related reports there. Also, check out the [closed list](https://github.com/telerik/kendo-vue/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aclosed+).
* You may need a tailor-made solution for your project. In such cases, go straight to [Progress Services](https://www.progress.com/services).

## Suggested Links

* [API Index of the Internationalization]({% slug api_intl %})
* [Troubleshooting]({% slug troubleshooting_intl %})
* [Localization]({% slug localization_intl %})
* [Globalization Support]({% slug globalization_support %})
* [Kendo UI Productivity Tools extension for VS Code]({% slug vue_vscode_overview %})
