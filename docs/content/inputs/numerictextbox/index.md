---
title: Overview
description: "Get an overview of the features the Kendo UI for Vue NumericTextBox delivers and use the component in Vue projects."
slug: overview_numerictextbox
position: 1
---

# Kendo UI for Vue Native NumericTextBox Overview

The Kendo UI for Vue Native NumericTextBox lets the user edit and submit specific numeric values by typing or by using the spin buttons.

The KendoVue NumericTextBox component is part of the KendoVue library of Vue UI components. It is distributed through NPM under the [kendo-vue-inputs package](https://www.npmjs.com/package/@progress/kendo-vue-inputs).

<div data-component="StartFreeTrialSection"></div>

## Basic Usage

The following example demonstrates the NumericTextBox in action.

{% meta height:210 %}
{% embed_file numerictextbox/basic/main.vue preview %}
{% embed_file numerictextbox/basic/main.js %}
{% endmeta %}

## Functionality and Features

* [Predefined steps]({% slug predefinedsteps_numerictextbox %})
* [Spin buttons]({% slug spinbuttons_numerictextbox %})
* [Formats]({% slug formats_numerictextbox %})
* [Prefix & Suffix Adornments]({% slug numerictextbox_prefix_suffix %})
* [Custom parsing and formatting of user input]({% slug custom_parse_format_numerictextbox %})
* [Floating labels]({% slug floatinglabels_inputs %})
* [Appearance]({% slug appearance_numerictextbox %})
* [Forms support]({% slug forms_numerictextbox %})
* [Globalization]({% slug globalization_inputs %})
* [Keyboard navigation]({% slug keyboard_navigation_numerictextbox %})
* [Accessibility]({% slug accessibility_numerictextbox %})

>To learn more about the appearance, anatomy, and accessibility of the NumericTextBox, visit the [Progress Design System documentation](https://www.telerik.com/design-system/docs/components/numerictextbox/). This information portal offers rich component usage guidelines, descriptions of the available style variables, and globalization support details.

## Known Limitations

To keep its value, the NumericTextBox uses the [`Number`](https://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types-number-type) JavaScript object. The `Number` JavaScript object persists its precision up to 16 digits, and units which are longer than that get converted to exponential numbers and lose their precision. Because the component relies on `Number`, it inherits the precision limitation and because the limitation is caused by the JavaScript logic, the NumericTextBox does not provide a workaround to handle it.

## Support and Learning Resources

* [NumericTextBox Homepage](https://www.telerik.com/kendo-vue-ui/numerictextbox)
* [Getting Started with the Kendo UI Vue Inputs](slug:getstarted_inputs)
* [API Reference of the NumericTextBox Component](slug:api_inputs_numerictextboxprops)
* [Getting Started with Kendo UI for Vue - JavaScript (Online Guide)](slug:getting_started_javascript_composition_api)
* [Getting Started with Kendo UI for Vue - TypeScript (Online Guide)](slug:getting_started_typescript_composition_api)
* [Getting Started with Kendo UI for Vue - JavaScript + Options API (Online Guide)](slug:getting_started_javascript_options_api)
* [Getting Started with Kendo UI for Vue - TypeScript + Options API (Online Guide)](slug:getting_started_typescript_options_api)
* [Getting Started with Kendo UI for Vue - Nuxt 3 (Online Guide)](slug:getting_started_nuxt_3)
* [Virtual Classroom (Training Course for Registered Users)](https://learn.telerik.com/learn/course/internal/view/elearning/45/kendo-ui-for-vue-with-typescript)
* [NumericTextBox Forum](https://www.telerik.com/forums/kendo-ui-vue?searchText=numerictextbox)
* [Knowledge Base](https://www.telerik.com/kendo-vue-ui/components/knowledge-base/)
* [Kendo UI Productivity Tools extension for VS Code]({% slug vue_vscode_overview %})

## Additional Resources

* [Vue Blogs](https://www.telerik.com/blogs/tag/kendo-ui-for-vue)
* [Kendo UI for Vue Roadmap](https://www.telerik.com/support/whats-new/kendo-vue-ui/roadmap)
