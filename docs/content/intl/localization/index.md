---
title: Overview
description: "Translate the messages and enable the RTL support for Kendo UI for Vue Native components in Vue projects."
slug: localization_intl
position: 0
---

# Kendo UI for Vue Native Localization Overview

The Kendo UI for Vue Native Localization package enables you to adapt a component to a different locale by providing options for translating its messages or by [enabling its right-to-left support](#toc-rtl-support).

The Kendo UI for Vue Native Localization feature is part of the Kendo UI for Vue Native library which provides native Kendo UI components for the Vue ecosystem and is available under the [kendo-vue-intl NPM package](https://www.npmjs.com/package/@progress/kendo-vue-intl).

<div data-component="StartFreeTrialSection"></div>

The following example demonstrates the Kendo UI for Vue Localization package in action.

{% meta height:600 %}
{% embed_file localization-overview/main.vue preview %}
{% embed_file localization-overview/main.js %}
{% endmeta %}

## RTL Support

Right-to-Left (RTL) support represents the ability of a library, website, or application to handle and respond to users who communicate through right-to-left languages. Right-to-left languages are Arabic, Hebrew, Chinese, Japanese, and others. [Read more about the RTL mode...]({% slug rtl_support %})

By default, the RTL mode is disabled. In web applications, the RTL mode is enabled through the [`dir`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/dir) attribute of a DOM element. To enable the RTL mode for all Kendo UI for Vue Native components in your Vue application, set a text direction value to the root element of the application. You can also limit the RTL mode to a part of the application by providing the `dir` property to a Kendo UI for Vue Native component.

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

* [Globalization Support]({% slug globalization_support %})
* [API Reference of the Internationalization]({% slug api_intl %})
* [Kendo UI Productivity Tools extension for VS Code]({% slug vue_vscode_overview %})
