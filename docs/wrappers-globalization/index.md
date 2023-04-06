---
title: Overview
page_title: Globalization Overview - Kendo UI for Vue
description: "Learn how to define current culture settings, format number or date objects in the process of globalization when working with Kendo UI for Vue."
slug: globalization_wrappers_vue
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/intl"
position: 1
---

<WrapperBanner link="/kendo-vue-ui/components/intl"></WrapperBanner>

# Globalization Overview

Globalization is the process of designing and developing an application that works in multiple cultures.

The culture defines specific information for the number formats, week and month names, date and time formats.

The Kendo UI culture scripts are generated from the Windows 10 and .NET 4.7 server-side culture definitions and match them by design. To customize the culture in your application, refer to the article on [culture definition](https://docs.telerik.com/kendo-ui/framework/globalization/definecultureinfo).

## Globalization in Kendo UI

Kendo UI for Vue enables you to internationalize the current page by using Kendo UI culture scripts. Kendo UI exposes the `kendo.culture("cultureName")` method that provides options for selecting the culture script which corresponds to `<language code>-<country/region code>`. For more information, refer to the [API reference of the `culture` method](https://docs.telerik.com/kendo-ui/api/javascript/kendo/methods/culture).

The default culture of Kendo UI widgets is `"en-US"`.

## Defining the Current Culture

1. Install Kendo UI and add a theme.

    ```sh
    npm install --save @progress/kendo-ui
    npm install --save @progress/kendo-theme-default
    ```

1. Install the Kendo UI Date Inputs package for Vue.

    ```sh
    npm install --save @progress/kendo-dateinputs-vue-wrapper
    ```

1. Import the Kendo UI packages and the required culture script to the Vue application.

    ```js
    import $ from 'jquery';

    import '@progress/kendo-ui'
    import '@progress/kendo-theme-default/dist/all.css'

    import '@progress/kendo-ui/js/cultures/kendo.culture.de-DE.js'

    import { Calendar, DateinputsInstaller } from '@progress/kendo-dateinputs-vue-wrapper'
    ```

1. Before you initialize the Vue application, set the culture script which the Kendo UI components for Vue will use.

    ```html
    <div id="vueapp" class="vue-app row example-wrapper">
        <kendo-calendar :value="new Date()"></kendo-calendar>
    </div>
    ```
    ```js
    import '@progress/kendo-ui/js/cultures/kendo.culture.de-DE.js';

    kendo.culture("de-DE");

    Vue.use(DateinputsInstaller);

    new Vue({
        el: '#vueapp'
    })
    ```

## Configuration

Apart from the available global culture definition, the Kendo UI exposes methods which enable you to format and parse number and date objects.

### Formatting Number or Date Objects

Kendo UI exposes methods which format the number or date objects by using a specific format string and the current specified culture. For more information, refer to the article on [date formatting in Kendo UI](https://docs.telerik.com/kendo-ui/framework/globalization/dateformatting).

Kendo UI for Vue supports the following methods for date and number formatting:
- [`kendo.toString(object, format, [culture])`](https://docs.telerik.com/kendo-ui/api/javascript/kendo/methods/tostring)&mdash;Returns a string representation of the current object while taking into account the specified format and culture.
- [`kendo.format(format, arguments)`](https://docs.telerik.com/kendo-ui/api/javascript/kendo/methods/format)&mdash;Replaces each format item in a specified string with the text equivalent of a corresponding object value.

### Parsing Strings

Kendo UI exposes methods which convert the specified string to a date or number object. For more information, refer to the article on [date parsing in Kendo UI](https://docs.telerik.com/kendo-ui/framework/globalization/dateparsing).

Kendo UI for Vue supports the following methods for parsing strings:
- [`kendo.parseInt(string, [culture])`](https://docs.telerik.com/kendo-ui/api/javascript/kendo/methods/parseint)&mdash;This method converts a string to a whole number using the specified culture (current culture by default).
- [`kendo.parseFloat(string, [culture])`](https://docs.telerik.com/kendo-ui/api/javascript/kendo/methods/parsefloat)&mdash;Converts a string to a number with floating point using the specified culture (current culture by default).
- [`kendo.parseDate(string, [formats], [culture])`](https://docs.telerik.com/kendo-ui/api/javascript/kendo/methods/parsedate)&mdash;Converts a string to a JavaScript Date object, taking into account the given format/formats (or the given culture's set of default formats).

## Components Depending on Culture Information

All Kendo UI widgets which support number or date formatting also depend on the current culture. These components are the more complex ones such as the [Grid](slug:overview_grid), [ListView](slug:overview_listviewpackage), and [Charts](slug:overview_charts) among others.

The following Kendo UI components for Vue depend on the current culture:
- [Calendar](slug:overview_calendar)
- [DateInput](slug:overview_dateinput)
- [DatePicker](slug:overview_datepicker)
- [TimePicker](slug:overview_timepicker)
- [DateTimePicker](slug:overview_datetimepicker)
- [NumericTextBox](slug:overview_numerictextbox)
- [MaskedTextBox (globalized mask literals)](slug:overview_maskedtextbox)
- [Scheduler](slug:overview_scheduler)
- [Gantt](slug:overview_gantt)

## Suggested Links

* [Configuring Kendo UI for Vue](slug:configuration_wrappers_vue)
* [Localization of Kendo UI Components for Vue](slug:localization_wrappers_vue)
* [Culture Definition in Kendo UI](https://docs.telerik.com/kendo-ui/framework/globalization/definecultureinfo)
* [Date Formatting in Kendo UI](https://docs.telerik.com/kendo-ui/framework/globalization/dateformatting)
* [Number Formatting in Kendo UI](https://docs.telerik.com/kendo-ui/framework/globalization/numberformatting)
* [Date Parsing in Kendo UI](https://docs.telerik.com/kendo-ui/framework/globalization/dateparsing)
* [Number Parsing in Kendo UI](https://docs.telerik.com/kendo-ui/framework/globalization/numberparsing)
