---
title: Overview
page_title: Dropdowns Overview - Components - Kendo UI for Vue
description: "Learn about the Kendo UI wrappers for Vue which are delivered by the Dropdowns package."
slug: overview_dropdowns_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/dropdowns/"
position: 0
---

<div><WrapperBanner link="/kendo-vue-ui/components/dropdowns"></WrapperBanner></div>


# Dropdowns Overview

The Dropdowns allow you to choose from a predefined list of options.

<Row>
    <Column count={6}>
        <Component href="{% slug overview_autocomplete_wrapper %}">
            <svg id="autocomplete" viewbox="0 0 72 72">
                <path d="M60,57.5L51.5,66H12V18H6v54h48l12-12V15h-6V57.5z M18,21v6h30l6-6H18z M54,33H18v6h30L54,33z M18,51h18l6-6H18 V51z M42,3v6h24l6-6H42z M0,0h36v12H0V0z" />
            </svg>
            <ComponentTitle>AutoComplete</ComponentTitle>
            <ComponentDescription>A list of suggestions for typed content.</ComponentDescription>
        </Component>
    </Column>
    <Column count={6}>
        <Component href="{% slug overview_combobox_wrapper %}">
            <svg id="combobox" viewbox="0 0 72 72">
                <path d="M66,12v48L54,72H12H6v-6V12h6v54h39.5l8.5-8.5V12H66z M18,24h30l6-6H18V24z M54,6h12l6-6H54V6z M0,6h48V0H0V6z M18,36h30l6-6H18V36z M18,48h18l6-6H18V48z" />
            </svg>
            <ComponentTitle>ComboBox</ComponentTitle>
            <ComponentDescription>A list for picking single items or entering custom values.</ComponentDescription>
        </Component>
    </Column>
    <Column count={6}>
        <Component href="{% slug overview_dropdownlist_wrapper %}">
            <svg id="dropdownlist" viewbox="0 0 72 72">
                <path d="M60,57.5L51.5,66H12V12H6v54v6h6h42l12-12V12h-6V57.5z M18,18v6h30l6-6H18z M0,0v6h66l6-6H0z M18,36h30l6-6H18 V36z M18,48h18l6-6H18V48z" />
            </svg>
            <ComponentTitle>DropDownList</ComponentTitle>
            <ComponentDescription>A predefined list of options for picking single values.</ComponentDescription>
        </Component>
    </Column>
    <Column count={6}>
        <Component href="{% slug overview_multicolumncombobox_wrapper %}">
            <svg id="multicolumncombobox" viewbox="0 0 72 72">
                <path d="M60,57.5L51.5,66H12V12H6v54v6h6h42l12-12V12h-6V57.5z M18,18v6h30l6-6H18z M0,0v6h66l6-6H0z M18,36h30l6-6H18 V36z M18,48h18l6-6H18V48z" />
            </svg>
            <ComponentTitle>MultiColumnComboBox</ComponentTitle>
            <ComponentDescription>A list with a table-like drop-down structure for picking single items or entering custom values</ComponentDescription>
        </Component>
    </Column>
    <Column count={6}>
        <Component href="{% slug overview_multiselect_wrapper %}">
            <svg id="multiselect" viewbox="0 0 72 72">
                <path d="M60,57.5L51.5,66H12V12H6v54v6h6h42l12-12V12h-6V57.5z M18,18v6h30l6-6H18z M0,0v6h66l6-6H0z M18,36h30l6-6H18 V36z M18,48h18l6-6H18V48z" />
            </svg>
            <ComponentTitle>MultiSelect</ComponentTitle>
            <ComponentDescription>A predefined list for multiple item selection.</ComponentDescription>
        </Component>
    </Column>
</Row>

<div data-component="StartFreeTrialSection"></div>

## Basic Usage

The following example demonstrates how to initialize the AutoComplete, ComboBox, DropDownList, MultiColumnComboBox, and MultiSelect.

{% meta height:550 %}
{% embed_file basic/main.vue preview %}
{% embed_file basic/main.js %}
{% endmeta %}

## Installation

To initialize the Dropdowns, either:

* [Use the CDN service]({% slug using_cdn %}), or
* [Use Webpack](#toc-initializing-with-webpack).

### Initializing with Webpack

1. Install Kendo UI and add a theme.

    ```sh
    npm install --save @progress/kendo-ui
    npm install --save @progress/kendo-theme-default
    ```

1. Install the Kendo UI Dropdowns package for Vue.

    ```sh
    npm install --save @progress/kendo-dropdowns-vue-wrapper
    ```

  The package also exports the following wrappers for individual components:

    * AutoComplete
    * ComboBox
    * DropDownList
    * MultiColumnComboBox
    * MultiSelect

1. Import the Kendo UI packages to the App component. If you use the Kendo UI components more than once in your application, add all Kendo UI-related files to the `main.js` file. If you use the Kendo UI components once in your application, add the Kendo UI-related files the component where they will be referred.

    ```js-no-run
    import '@progress/kendo-ui' // This will import the entire Kendo UI library
    // As an alternative, you could import only the scripts that are used by a specific widget:
    // import '@progress/kendo-ui/js/kendo.autocomplete' // Imports only the AutoComplete script and its dependencies
    // import '@progress/kendo-ui/js/kendo.combobox' // Imports only the ComboBox script and its dependencies
    // import '@progress/kendo-ui/js/kendo.dropdownlist' // Imports only the DropDownList script and its dependencies
    // import '@progress/kendo-ui/js/kendo.multiselect' // Imports only the MultiSelect script and its dependencies
    // import '@progress/kendo-ui/js/kendo.multicolumncombobox' // Imports only the MultiColumnComboBox script and its dependencies

    import '@progress/kendo-theme-default/dist/all.css'

    import { AutoComplete,
             ComboBox,
             DropDownList,
             MultiSelect,
             MultiColumnComboBox,
             MultiColumnComboBoxColumn,
             DropdownsInstaller } from '@progress/kendo-dropdowns-vue-wrapper'

    Vue.use(DropdownsInstaller)

    new Vue({
        el: '#app',
        components: {
            AutoComplete,
            ComboBox,
            DropDownList,
            MultiSelect,
            MultiColumnComboBox,
            MultiColumnComboBoxColumn
        }
    })
    ```

## Suggested Links

* [Get Started with the AutoComplete]({% slug overview_autocomplete_wrapper %})
* [Get Started with the ComboBox]({% slug overview_combobox_wrapper %})
* [Get Started with the DropDownList]({% slug overview_dropdownlist_wrapper %})
* [Get Started with the MultiColumnComboBox]({% slug overview_multicolumncombobox_wrapper %})
* [Get Started with the MultiSelect]({% slug overview_multiselect_wrapper %})
