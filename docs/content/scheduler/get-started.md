---
title: Getting Started
description: "Get started with the Kendo UI for Vue Native Scheduler component that features everything from data binding, date selection, views, and editing to grouping, resources, timezones, and globalization."
slug: get_started_scheduler
position: 1
---

# Getting Started with Kendo UI for Vue Native Scheduler

The Kendo UI for Vue Native Scheduler component displays events in different views with built-in support for editing, timezones, and recurrence rules.

> Due to the huge number of possible features that can be implemented in the Scheduler, the team is actively gathering feedback and will implement the most requested features according to the [Kendo UI for Vue Feedback Portal](https://feedback.telerik.com/kendo-vue-ui).

<div data-component="StartFreeTrialSection"></div>

## Basic Usage

The following example demonstrates the Scheduler component in action.



{% meta height:770 %}
{% embed_file overview/basic/main.vue preview %}
{% embed_file overview/basic/main.js %}
{% embed_file shared/events-utc.js  %}
{% endmeta %}


## Functionality and Features

* Data operations
    * [Data binding]({% slug data_binding_scheduler %})
    * [Editing]({% slug editing_scheduler %})
    * [Grouping]({% slug grouping_scheduler %})
    * [Resources]({% slug resources_scheduler %})
* Views
    * [Timeline]({% slug timeline_view_scheduler %})
    * [Day]({% slug day_view_scheduler %})
    * [Week and WorkWeek]({% slug week_views_scheduler %})
    * [Month]({% slug month_view_scheduler %})
    * [Agenda]({% slug agenda_view_scheduler %})

* More settings
    <!-- * [Recurring events]({% slug recurring_events_scheduler %})
    * [Date selection]({% slug date_selection_scheduler %}) -->
    * [Timezones]({% slug timezones_scheduler %})
    * [Globalization]({% slug globalization_scheduler %})

## Installation

1. Download and install the package. Use Node.js v5.0.0 or later.

    ```sh
    npm install --save @progress/kendo-vue-scheduler @progress/kendo-vue-intl @progress/kendo-vue-popup @progress/kendo-vue-dialogs @progress/kendo-vue-dateinputs @progress/kendo-vue-dropdowns @progress/kendo-vue-inputs @progress/kendo-vue-buttons @progress/kendo-date-math @progress/kendo-vue-form @progress/kendo-licensing @progress/kendo-svg-icons
    ```

2. Once installed, import the package module.

    ```jsx-no-run
    // ES2015 module syntax
    import { Scheduler } from '@progress/kendo-vue-scheduler';
    ```

    ```jsx-no-run
    // CommonJS format
    const { Scheduler } = require('@progress/kendo-vue-scheduler');
    ```

3. You are required to install one of the Kendo UI for Vue themes to style your components. For more information on how to add the styles, refer to the [style section]({% slug getting_started_javascript_composition_api %}#toc-5-import-the-kendo-ui-for-vue-css-styles) of our getting started article.

## Dependencies

The Scheduler package requires the following [peer dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/) that have to be installed by your application:

* Vue 2.6.11+ or 3.0.0+
* @progress/kendo-licensing
* @progress/kendo-svg-icons
* @progress/kendo-vue-intl
* @progress/kendo-vue-popup
* @progress/kendo-vue-dialogs
* @progress/kendo-vue-dateinputs
* @progress/kendo-vue-dropdowns
* @progress/kendo-vue-inputs
* @progress/kendo-vue-buttons
* @progress/kendo-date-math

> Vue 2 is currently in its end-of-support phase till Nov 2024. After our last major release for 2024, Vue 2 will no longer be supported in the new versions of the Kendo UI for Vue components. Please check our [Vue 2 End of Support article](slug:vue2-end-of-support) for more details.

## Suggested Links

* [Getting Started with Kendo UI for Vue Native](https://www.telerik.com/kendo-vue-ui/getting-started/)
* [API Reference of the Kendo UI for Vue Native Scheduler]({% slug api_scheduler_schedulerprops %})
* [Kendo UI Productivity Tools extension for VS Code]({% slug vue_vscode_overview %})
