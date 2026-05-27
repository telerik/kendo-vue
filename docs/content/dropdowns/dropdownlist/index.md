---
title: Overview
description: "Use the KendoVue DropDownList component in a Vue project."
slug: overview_dropdownlist
position: 1
---

# Kendo UI for Vue DropDownList Overview

The KendoVue DropDownList is a form component that lets you choose a single predefined value from a list and is a richer version of the `<select>` element and supports filtering, default items, and virtualization.

The KendoVue DropDownList component is part of the KendoVue library of Vue UI components. It is distributed through NPM under the [kendo-vue-dropdowns package](https://www.npmjs.com/package/@progress/kendo-vue-dropdowns).

<div data-component="StartFreeTrialSection"></div>

## Basic Usage

The following example demonstrates the DropDownList in action.

{% meta height:350 %}
{% embed_file dropdownlist/basic/main.vue preview %}
{% embed_file dropdownlist/basic/main.js %}
{% endmeta %}

## Functionality and Features

* [Value and data binding]({% slug binding_dropdownlist %})
* [Default item]({% slug defaultitem_dropdownlist %})
* [Filtering]({% slug filtering_dropdownlist %})
* [Custom rendering]({% slug customrendering_dropdownlist %})
* [Virtualization]({% slug virtualization_dropdownlist %})
* [Floating labels]({% slug floatinglabels_dropdowns %})
* [Appearance]({% slug appearance_dropdownlist %})
* [Forms support]({% slug forms_dropdownlist %})
* [Common scenarios]({% slug common_scenarios_dropdownlist %})
* [Globalization]({% slug globalization_dropdowns %})
* [Keyboard navigation]({% slug keyboard_navigation_dropdownlist %})
* [Accessibility]({% slug accessibility_dropdownlist %})

>To learn more about the appearance, anatomy, and accessibility of the DropDownList, visit the [Progress Design System documentation](https://www.telerik.com/design-system/docs/components/dropdownlist/)—an information portal offering rich component usage guidelines, descriptions of the available style variables, and globalization support details.

## Events

The DropDownList provides events which:

* [Ease common scenarios](#toc-common-usage)
* [Enable item selection through the keyboard](#toc-looping-through-items)

### Common Usage

The following example demonstrates basic DropDownList events.

{% meta height:320 %}
{% embed_file dropdownlist/events/main.vue preview %}
{% embed_file dropdownlist/events/main.js %}
{% endmeta %}

### Looping through Items

By default, you can select a DropDownList item by pressing a keyboard key. For example, if the DropDownList items are `Foo`, `Bar`, and `Baz` and the user presses the `B` letter key, based on the alphabetical order of the items, the keypress selects the first item which starts with a `B`.

> The keyboard selection is available only if the filtering functionality is disabled.

## Support and Learning Resources

* [DropDownList Homepage](https://www.telerik.com/kendo-vue-ui/dropdownlist)
* [API Reference of the DropDownList Component](slug:api_dropdowns_dropdownlistprops)
* [Getting Started with Kendo UI for Vue - JavaScript (Online Guide)](slug:getting_started_javascript_composition_api)
* [Getting Started with Kendo UI for Vue - TypeScript (Online Guide)](slug:getting_started_typescript_composition_api)
* [Getting Started with Kendo UI for Vue - JavaScript + Options API (Online Guide)](slug:getting_started_javascript_options_api)
* [Getting Started with Kendo UI for Vue - TypeScript + Options API (Online Guide)](slug:getting_started_typescript_options_api)
* [Getting Started with Kendo UI for Vue - Nuxt 3 (Online Guide)](slug:getting_started_nuxt_3)
* [Virtual Classroom (Training Course for Registered Users)](https://learn.telerik.com/learn/course/internal/view/elearning/45/kendo-ui-for-vue-with-typescript)
* [DropDownList Forum](https://www.telerik.com/forums/kendo-ui-vue?searchText=dropdownlist)
* [Knowledge Base](https://www.telerik.com/kendo-vue-ui/components/knowledge-base/)
* [Kendo UI Productivity Tools extension for VS Code]({% slug vue_vscode_overview %})

## Additional Resources

* [Vue Blogs](https://www.telerik.com/blogs/tag/kendo-ui-for-vue)
* [Kendo UI for Vue Roadmap](https://www.telerik.com/support/whats-new/kendo-vue-ui/roadmap)

