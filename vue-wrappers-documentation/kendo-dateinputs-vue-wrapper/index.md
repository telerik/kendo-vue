---
title: Overview
page_title: DataInputs Overview - Components - Kendo UI for Vue
description: "Learn about the Kendo UI wrappers for Vue, which are delivered by the Date Inputs package."
slug: overview_dateinput_wrappers_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/dateinputs/"
position: 0
---

<div><WrapperBanner link="/kendo-vue-ui/components/dateinputs"></WrapperBanner></div>    

# Date Inputs Overview

The Date Inputs enable the user to pick up dates and times for scheduling appointments.

<Row>
    <Column count={6}>
        <Component href="{% slug overview_calendar_wrapper %}">
            <svg id="calendar" viewbox="0 0 72 72">
                <defs>
                    <linearGradient id="gradient" gradientUnits="userSpaceOnUse" x1="-4.4853" y1="59.2968" x2="74.4853" y2="13.7032">
                        <stop  offset="0" style="stop-color:#FF9B5E"/>
                        <stop  offset="8.618834e-02" style="stop-color:#FF8C5D"/>
                        <stop  offset="0.1949" style="stop-color:#FF7F5B"/>
                        <stop  offset="0.3" style="stop-color:#FF7B5B"/>
                        <stop  offset="0.7" style="stop-color:#FF6358"/>
                        <stop  offset="0.7835" style="stop-color:#FC5F59"/>
                        <stop  offset="0.8701" style="stop-color:#F4525E"/>
                        <stop  offset="0.9577" style="stop-color:#E63E65"/>
                        <stop  offset="1" style="stop-color:#DD3169"/>
                    </linearGradient>
                </defs>
                <path d="M60,57.5L51.5,66H12V15H6v51v6h6h42l12-12V15h-6V57.5z M45,0h6v12h-6V0z M27,24l-6,6v24h6V24z M33,30h12v6h-6
                    l-6,6v6l6,6h6l6-6H39v-6h6l6-6v-6l-6-6h-6L33,30z M21,0h6v12h-6V0z M0,3h18v6H0V3z M54,3v6h12l6-6H54z M30,3h12v6H30V3z"/>
            </svg>
            <ComponentTitle>Calendar</ComponentTitle>
            <ComponentDescription>A component for date selection and navigation.</ComponentDescription>
        </Component>
    </Column>
    <Column count={6}>
        <Component href="{% slug overview_dateinput_wrapper %}">
           <svg id="dateinput" viewbox="0 0 72 72">
                <path d="M0,30v42h72V30H0z M66,66H6V36h60V66z M16.2,60L12,55.8l4.8-4.8l4.2-4.2l4.8-4.8l4.2,4.2L25.2,51L21,55.2
                L16.2,60z M37.2,60L33,55.8l4.8-4.8l4.2-4.2l4.8-4.8l4.2,4.2L46.2,51L42,55.2L37.2,60z"/>
            </svg>
            <ComponentTitle>DateInput</ComponentTitle>
            <ComponentDescription>An input field which recognizes and formats values as dates.</ComponentDescription>
        </Component>
    </Column>
    <Column count={6}>
        <Component href="{% slug overview_datepicker_wrapper %}">
            <svg id="datepicker" viewbox="0 0 72 72">
                <path d="M30,21h9v9h-9V21z M42,21h9v9h-9V21z M18,33h9v9h-9V33z M30,33h9v9h-9V33z M42,33h9v9h-9V33z M18,45h9v9h-9V45z
                M30,45h9v9h-9V45z M57,57.5L48.5,66H12V12H6v60h6h39l12-12V12h-6V57.5z M0,0v6h66l6-6H0z"/>
            </svg>
            <ComponentTitle>DatePicker</ComponentTitle>
            <ComponentDescription>A component which allows the fast selection of date values.</ComponentDescription>
        </Component>
    </Column>
    <Column count={6}>
        <Component href="{% slug overview_daterangepicker_wrapper %}">
           <svg id="daterangepicker" viewBox="0 0 24 24">
                <path d="M13,5v3h-3V5H13z M17,5h-3v3h3V5z M6,9v3h3V9H6z M6,20h3v-3H6V20z M13,20v-3h-3v3H13z M19,19.2L16.2,22H4V4H2 v20h15l4-4h0V4h-2V19.2z M0,0v2h22l2-2H0z M10,12h7v-1h-6v-1h6V9h-7V12z M6,15v1h7v-3H6v1h6v1H6z M17,16v-3h-3v3H17z"></path>
            </svg>
            <ComponentTitle>DateRangePicker</ComponentTitle>
            <ComponentDescription>A component which provides date-range selection.</ComponentDescription>
        </Component>
    </Column>
    <Column count={6}>
        <Component href="{% slug overview_datetimepicker_wrapper %}">
             <svg id="datepicker" viewbox="0 0 72 72">
                <path d="M39,24h-9v-9h9V24z M51,15h-9v9h9V15z M27,27h-9v9h9V27z M39,27h-9v9h9V27z M51,27h-9v9h9V27z M27,39h-9v9h9V39
                z M27,51h-9v9h9V51z M63,12h-6v24h6V12z M12,66V12H6v60h21v-6H12z M0,6h66l6-6H0V6z M63,55.5c0,9-7.5,16.5-16.5,16.5
                S30,64.5,30,55.5S37.5,39,46.5,39S63,46.5,63,55.5z M57,55.5C57,49.8,52.2,45,46.5,45S36,49.8,36,55.5S40.8,66,46.5,66
                S57,61.2,57,55.5z M48,54v-3h-3v6h6v-3H48z"></path>
            </svg>
            <ComponentTitle>DateTimePicker</ComponentTitle>
            <ComponentDescription>A component which allows the fast selection of date and time values.</ComponentDescription>
        </Component>
    </Column>
     <Column count={6}>
        <Component href="{% slug overview_timepicker_wrapper %}">
            <svg id="timepicker" viewbox="0 0 72 72">
                <path d="M36,36V21l-6-6v21v6h6h21l-6-6H36z M36,0C16.1,0,0,16.1,0,36s16.1,36,36,36s36-16.1,36-36S55.9,0,36,0z M36,66
                C19.4,66,6,52.6,6,36C6,19.4,19.4,6,36,6s30,13.4,30,30C66,52.6,52.6,66,36,66z"/>
            </svg>
            <ComponentTitle>TimePicker</ComponentTitle>
            <ComponentDescription>A component for selecting time values from a time-list.</ComponentDescription>
        </Component>
    </Column>
    <Column count={6}>
        <Component href="{% slug overview_multiviewcalendar_wrapper %}">
            <svg id="multiviewcalendar" version="1.1" viewBox="0 0 24 24"><path d="M16.2,21H1V5h2v14h12.3l1.7-1.7V5h2v13.2L16.2,21z M7,7L5,9v8h2V7z M9,9h4v2h-2l-2,2v2l2,2h2l2-2h-4v-2h2l2-2V9l-2-2h-2L9,9z M15,0h-2v4h2V0z M7,0H5v4h2V0z M4,1H0v2h4V1z M16,1v2h6l2-2H16z M12,1H8v2h4V1z M20,19l-3,3H2v2h15.8l2-2l2.2-2.2V5h-2V19z"></path></svg>
            <ComponentTitle>MultiView Calendar</ComponentTitle>
            <ComponentDescription>A component with multiple month views which provides date selection and navigation.</ComponentDescription>
        </Component>
    </Column>
</Row>

<div data-component="StartFreeTrialSection"></div>

## Basic Usage

The following example demonstrates how to initialize the Calendar, DateInput, DatePicker, DateRangePicker, DateTimePicker, and TimePicker.

{% meta height:700 %}
{% embed_file basic/main.vue preview %}
{% embed_file basic/main.js %}
{% endmeta %}

## Installation

To initialize the Date Inputs, either:

* [Use the CDN service]({% slug using_cdn %}), or
* [Use Webpack](#toc-initializing-with-webpack).

### Initializing with Webpack

1. Install Kendo UI and add a theme.

  ```sh
  npm install --save @progress/kendo-ui
  npm install --save @progress/kendo-theme-default
  ```

1. Install the Kendo UI Date Inputs package for Vue.

  ```sh
  npm install --save @progress/kendo-dateinputs-vue-wrapper
  ```

    The package also exports the following wrappers for individual components:

    * Calendar
    * DateInput
    * DatePicker
    * DateRangePicker
    * DateTimePicker
    * MultiViewCalendar
    * TimePicker

1. Import the Kendo UI packages to the App component. If you use the Kendo UI components more than once in your application, add all Kendo UI-related files to the `main.js` file. If you use the Kendo UI components once in your application, add the Kendo UI-related files the component where they will be referred.

    ```js-no-run
    import '@progress/kendo-ui' // This will import the entire Kendo UI library
    // As an alternative, you could import only the scripts that are used by a specific widget:
    // import '@progress/kendo-ui/js/kendo.calendar' // Imports only the Calendar script and its dependencies
    // import '@progress/kendo-ui/js/kendo.dateinput' // Imports only the DateInput script and its dependencies
    // import '@progress/kendo-ui/js/kendo.datepicker' // Imports only the DatePicker script and its dependencies
    // import '@progress/kendo-ui/js/kendo.daterangepicker' // Imports only the DateRangePicker script and its dependencies
    // import '@progress/kendo-ui/js/kendo.datetimepicker' // Imports only the DateTimePicker script and its dependencies
    // import '@progress/kendo-ui/js/kendo.multiviewcalendar' // Imports only the MultiViewCalendar script and its dependencies
    // import '@progress/kendo-ui/js/kendo.timepicker' // Imports only the TimePicker script and its dependencies

    import '@progress/kendo-theme-default/dist/all.css'

    import { Calendar,
            DateInput,
            DatePicker,
            DateRangePicker,
            DateTimePicker,
            MultiViewCalendar,
            TimePicker,
            DateinputsInstaller } from '@progress/kendo-dateinputs-vue-wrapper'

    Vue.use(DateinputsInstaller)

    new Vue({
        el: '#app',
        components: {
            Calendar,
            DateInput,
            DatePicker,
            DateRangePicker,
            DateTimePicker,
            MultiViewCalendar,
            TimePicker
        }
    })
    ```

## Suggested Links

* [Get Started with the Calendar]({% slug overview_calendar_wrapper %})
* [Get Started with the DateInput]({% slug overview_dateinput_wrapper %})
* [Get Started with the DatePicker]({% slug overview_datepicker_wrapper %})
* [Get Started with the DateRangePicker]({% slug overview_daterangepicker_wrapper %})
* [Get Started with the DateTimePicker]({% slug overview_datetimepicker_wrapper %})
* [Get Started with the MultiViewCalendar]({% slug overview_multiviewcalendar_wrapper %})
* [Get Started with the TimePicker]({% slug overview_timepicker_wrapper %})
