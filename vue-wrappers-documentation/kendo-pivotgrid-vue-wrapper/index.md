---
title: Overview
page_title: PivotGrid Overview - Components - Kendo UI for Vue
description: "Get an overview of the features the Kendo UI PivotGrid wrapper for Vue delivers and use the component in Vue projects."
slug: overview_pivotgrid
position: 0
---

<div><WrapperBanner></WrapperBanner></div>

# PivotGrid Overview

The PivotGrid allows the user to perform a complex analysis on the visualized data.

It uses the Online Analytical Processing ([OLAP](https://en.wikipedia.org/wiki/Online_analytical_processing)) approach to present the result of multidimensional queries in a comprehensive way and also provides a drill-down functionality that represents the underlying data for calculated cells. The PivotGrid uses an instance of the [`kendo.data.PivotDataSource`](https://docs.telerik.com/kendo-ui/api/javascript/data/pivotdatasource) component as a data source. The `PivotDataSource` communicates with an [OLAP cube](https://en.wikipedia.org/wiki/OLAP_cube) instance on HTTP by using the [XMLA protocol](https://en.wikipedia.org/wiki/XML_for_Analysis).

The PivotGrid wrapper for Vue is a client-side wrapper for the [Kendo UI PivotGrid](https://docs.telerik.com/kendo-ui/api/javascript/ui/pivotgrid) widget.

<div data-component="StartFreeTrialSection"></div>

## Basic Usage

The following example demonstrates how to initialize the PivotGrid.

{% meta height:660 %}
{% embed_file basic/main.vue preview %}
{% embed_file basic/main.js %}
{% endmeta %}

## Installation

To initialize the PivotGrid, either:

* [Use the CDN service]({% slug using_cdn %}), or
* [Use Webpack](#toc-initializing-with-webpack).

### Initializing with Webpack

1. Install Kendo UI and add a theme.

    ```sh
    npm install --save @progress/kendo-ui
    npm install --save @progress/kendo-theme-default
    ```

1. Install the Kendo UI PivotGrid package for Vue.

    ```sh
    npm install --save @progress/kendo-pivotgrid-vue-wrapper
    ```

1. Import the Kendo UI packages to the App component. If you use the Kendo UI components more than once in your application, add all Kendo UI-related files to the `main.js` file. If you use the Kendo UI components once in your application, add the Kendo UI-related files the component where they will be referred.

    ```js-no-run
    import '@progress/kendo-ui' // This will import the entire Kendo UI library
    // As an alternative, you could import only the scripts that are used by a specific widget:
    // import '@progress/kendo-ui/js/kendo.pivotgrid' // Imports only the PivotGrid script and its dependencies

    import '@progress/kendo-theme-default/dist/all.css'

    import { PivotGrid, PivotGridInstaller } from '@progress/kendo-pivotgrid-vue-wrapper'

    Vue.use(PivotGridInstaller)

    new Vue({
        el: '#app',
        components: {
            PivotGrid
        }
    })
    ```

## Functionality and Features

* [Data binding]({% slug databinding_pivotgrid %})
* [Templates]({% slug templates_pivotgrid %})
* [Excel export]({% slug excel_export_pivotgrid %})
* [PDF export]({% slug pdf_export_pivotgrid %})

## Suggested Links

* [Kendo UI PivotGrid for jQuery](https://docs.telerik.com/kendo-ui/controls/data-management/pivotgrid/overview)
* [API Reference of the PivotGrid Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/pivotgrid)
