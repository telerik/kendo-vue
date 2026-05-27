---
title: Overview
description: "Get started with the Vue Date Inputs package by Kendo UI and learn more about how to use the components in Vue projects."
slug: overview_dateinputs
position: 0
---

# Kendo UI for Vue Date Inputs Overview

The Kendo UI for Vue Date Inputs enable the user to pick up dates for scheduling appointments.

The Date Inputs components are part of the Kendo UI for Vue library which provides native Kendo UI components for the Vue ecosystem and are available under the [kendo-vue-dateinputs NPM package](https://www.npmjs.com/package/@progress/kendo-vue-dateinputs).

<Row>
    <Column count={6}>
        <Component href="{% slug overview_calendar %}">
        <svg id="calendar" viewbox="0 0 72 72">
                <path d="M60,57.5L51.5,66H12V15H6v51v6h6h42l12-12V15h-6V57.5z M45,0h6v12h-6V0z M27,24l-6,6v24h6V24z M33,30h12v6h-6
                    l-6,6v6l6,6h6l6-6H39v-6h6l6-6v-6l-6-6h-6L33,30z M21,0h6v12h-6V0z M0,3h18v6H0V3z M54,3v6h12l6-6H54z M30,3h12v6H30V3z"/>
            </svg>
        <ComponentTitle>Calendar</ComponentTitle>
        <ComponentDescription>A component for date selection and navigation.</ComponentDescription>
        </Component>
    </Column>
    <Column count={6}>
        <Component href="{% slug overview_dateinput %}">
       <svg id="dateinput" viewbox="0 0 72 72">
                <path d="M0,30v42h72V30H0z M66,66H6V36h60V66z M16.2,60L12,55.8l4.8-4.8l4.2-4.2l4.8-4.8l4.2,4.2L25.2,51L21,55.2
                L16.2,60z M37.2,60L33,55.8l4.8-4.8l4.2-4.2l4.8-4.8l4.2,4.2L46.2,51L42,55.2L37.2,60z"/>
            </svg>
        <ComponentTitle>DateInput</ComponentTitle>
        <ComponentDescription>An input field which recognizes and formats values as dates.</ComponentDescription>
        </Component>
    </Column>
    <Column count={6}>
        <Component href="{% slug overview_daterangepicker %}">
            <svg id="daterangepicker" viewBox="0 0 24 24" >
                <path d="M13,5v3h-3V5H13z M17,5h-3v3h3V5z M6,9v3h3V9H6z M6,20h3v-3H6V20z M13,20v-3h-3v3H13z M19,19.2L16.2,22H4V4H2 v20h15l4-4h0V4h-2V19.2z M0,0v2h22l2-2H0z M10,12h7v-1h-6v-1h6V9h-7V12z M6,15v1h7v-3H6v1h6v1H6z M17,16v-3h-3v3H17z"/>
            </svg>
        <ComponentTitle>DateRangePicker</ComponentTitle>
        <ComponentDescription>A set of directives and components which provide date-range selection.</ComponentDescription>
        </Component>
    </Column>
    <Column count={6}>
        <Component href="{% slug overview_datepicker %}">
         <svg id="datepicker" viewbox="0 0 72 72">
                <path d="M30,21h9v9h-9V21z M42,21h9v9h-9V21z M18,33h9v9h-9V33z M30,33h9v9h-9V33z M42,33h9v9h-9V33z M18,45h9v9h-9V45z
                M30,45h9v9h-9V45z M57,57.5L48.5,66H12V12H6v60h6h39l12-12V12h-6V57.5z M0,0v6h66l6-6H0z"/>
            </svg>
        <ComponentTitle>DatePicker</ComponentTitle>
        <ComponentDescription>A component which allows the fast selection of date values.</ComponentDescription>
        </Component>
    </Column>
      <Column count={6}>
        <Component href="{% slug overview_datetimepicker %}">
            <svg id="datepicker" viewBox="0 0 72 72">
            <path d="M39,24h-9v-9h9V24z M51,15h-9v9h9V15z M27,27h-9v9h9V27z M39,27h-9v9h9V27z M51,27h-9v9h9V27z M27,39h-9v9h9V39z M27,51h-9v9h9V51z M63,12h-6v24h6V12z M12,66V12H6v60h21v-6H12z M0,6h66l6-6H0V6z M63,55.5c0,9-7.5,16.5-16.5,16.5S30,64.5,30,55.5S37.5,39,46.5,39S63,46.5,63,55.5z M57,55.5C57,49.8,52.2,45,46.5,45S36,49.8,36,55.5S40.8,66,46.5,66S57,61.2,57,55.5z M48,54v-3h-3v6h6v-3H48z"></path>
            </svg>
        <ComponentTitle>DateTimePicker</ComponentTitle>
        <ComponentDescription>A component which allows the fast selection of date and time values.</ComponentDescription>
        </Component>
    </Column>
  <Column count={6}>
        <Component href="{% slug multipleviews_calendar %}">
            <svg version="1.1" viewBox="0 0 24 24">
            <path d="M16.2,21H1V5h2v14h12.3l1.7-1.7V5h2v13.2L16.2,21z M7,7L5,9v8h2V7z M9,9h4v2h-2l-2,2v2l2,2h2l2-2h-4v-2h2l2-2V9l-2-2h-2L9,9z M15,0h-2v4h2V0z M7,0H5v4h2V0z M4,1H0v2h4V1z M16,1v2h6l2-2H16z M12,1H8v2h4V1z M20,19l-3,3H2v2h15.8l2-2l2.2-2.2V5h-2V19z"/>
            </svg>
        <ComponentTitle>MultiView Calendar</ComponentTitle>
        <ComponentDescription>A configuration of the Calendar component that renders multiple month views and provides date selection and navigation.</ComponentDescription>
        </Component>
    </Column>
    <Column count={6}>
        <Component href="{% slug overview_timepicker %}">
            <svg id="timepicker" viewBox="0 0 72 72">
            <path d="M36,36V21l-6-6v21v6h6h21l-6-6H36z M36,0C16.1,0,0,16.1,0,36s16.1,36,36,36s36-16.1,36-36S55.9,0,36,0z M36,66 C19.4,66,6,52.6,6,36C6,19.4,19.4,6,36,6s30,13.4,30,30C66,52.6,52.6,66,36,66z"/>
            </svg>
        <ComponentTitle>TimePicker</ComponentTitle>
        <ComponentDescription>A component for selecting time values from a time-list.</ComponentDescription>
        </Component>
    </Column>
</Row>

<div data-component="StartFreeTrialSection"></div>

## Basic Usage

The following example demonstrates the Calendar, DateInput, DatePicker, TimePicker, DateTimePicker and DateRangePicker components in action.

{% meta height:830 %}
{% embed_file basic/main.vue preview %}
{% embed_file basic/main.js %}
{% endmeta %}

## Installation
To initialize the Date Inputs, either:

* [Use the CDN service](#toc-using-cdn), or
* [Use Webpack](#toc-initializing-with-webpack).

### Using CDN
To use the Kendo UI for Vue Native Date Inputs with CDN, follow the below steps:

1. Reference the `dateinput` and `intl` packages.

```sh
  <script src="https://unpkg.com/@progress/kendo-vue-intl@latest/dist/cdn/js/kendo-vue-intl.js"></script>
  <script src="https://unpkg.com/@progress/kendo-vue-dateinputs@latest/dist/cdn/js/kendo-vue-dateinputs.js"></script>
```

2. Reference one of the Kendo UI themes to style your components.

```sh
    // Load the Kendo Default Theme
    <link rel="stylesheet" href="https://unpkg.com/@progress/kendo-theme-default@latest/dist/all.css">

    // Load the Kendo Bootstrap Theme
    <link rel="stylesheet" href="https://unpkg.com/@progress/kendo-theme-bootstrap@latest/dist/all.css">
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">

    // To load the Kendo Material Theme
    <link rel="stylesheet" href="https://unpkg.com/@progress/kendo-theme-material@latest/dist/all.css">

    // To load the Kendo Fluent Theme
    <link rel="stylesheet" href="https://unpkg.com/@progress/kendo-theme-fluent@latest/dist/all.css">
```


3. Follow the instructions in [this article]({% slug my_license %}#toc-set-license-key-when-using-cdn-scripts) to activate your product license. You can skip this step if your application already contains a license key.

### Initializing with Webpack

1. Download and install the package. Use Node.js v5.0.0 or later.

    ```sh
    npm install --save @progress/kendo-vue-dateinputs @progress/kendo-vue-intl
    ```

1. Once installed, import the package module.

   ```jsx-no-run
    // ES2015 module syntax
    import { DateInput, Calendar, DateRangePicker, DatePicker, DateTimePicker, TimePicker } from '@progress/kendo-vue-dateinputs';
    ```
    ```jsx-no-run
    // CommonJS format
    const { DateInput, Calendar, DateRangePicker, DatePicker, DateTimePicker, TimePicker } = require('@progress/kendo-vue-dateinputs');
    ```

1. You are required to install one of the Kendo UI themes to style your components. For more information on how to add the styles, refer to the article on [getting started]({% slug getting_started_javascript_composition_api %}#toc-5-import-the-kendo-ui-for-vue-css-styles).

1. Follow the instructions on the Kendo UI for Vue [My License page]({% slug my_license %}) to activate your license. You can skip this step if your application already contains a Kendo UI license file.

## Dependencies

The Date Inputs package requires you to install the following [peer dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/) in your application:

* vue 3.0.0*
* @progress/kendo-vue-intl
* @progress/kendo-licensing
* @progress/kendo-svg-icons

> Vue 2 is currently in its end-of-support phase till Nov 2024. After our last major release for 2024, Vue 2 will no longer be supported in the new versions of the Kendo UI for Vue components. Please check our [Vue 2 End of Support article](slug:vue2-end-of-support) for more details.

## Support and Learning Resources

* [Calendar Homepage](https://www.telerik.com/kendo-vue-ui/calendar)
* [DateInput Homepage](https://www.telerik.com/kendo-vue-ui/dateinput)
* [DatePicker Homepage](https://www.telerik.com/kendo-vue-ui/datepicker)
* [DateRangePicker Homepage](https://www.telerik.com/kendo-vue-ui/daterangepicker)
* [DateTimePicker Homepage](https://www.telerik.com/kendo-vue-ui/datetimepicker)
* [TimePicker Homepage](https://www.telerik.com/kendo-vue-ui/timepicker)
* [API Reference of the DateInputs Package](slug:api_dateinputs)
* [Getting Started with Kendo UI for Vue - JavaScript (Online Guide)](slug:getting_started_javascript_composition_api)
* [Getting Started with Kendo UI for Vue - TypeScript (Online Guide)](slug:getting_started_typescript_composition_api)
* [Getting Started with Kendo UI for Vue - JavaScript + Options API (Online Guide)](slug:getting_started_javascript_options_api)
* [Getting Started with Kendo UI for Vue - TypeScript + Options API (Online Guide)](slug:getting_started_typescript_options_api)
* [Getting Started with Kendo UI for Vue - Nuxt 3 (Online Guide)](slug:getting_started_nuxt_3)
* [Virtual Classroom (Training Course for Registered Users)](https://learn.telerik.com/learn/course/internal/view/elearning/45/kendo-ui-for-vue-with-typescript)
* [Kendo UI for Vue Forum](https://www.telerik.com/forums/kendo-ui-vue)
* [Knowledge Base](https://www.telerik.com/kendo-vue-ui/components/knowledge-base/)
* [Kendo UI Productivity Tools extension for VS Code]({% slug vue_vscode_overview %})

## Additional Resources

* [Vue Blogs](https://www.telerik.com/blogs/tag/kendo-ui-for-vue)
* [Kendo UI for Vue Roadmap](https://www.telerik.com/support/whats-new/kendo-vue-ui/roadmap)
