---
title: Overview
page_title: DataSource Overview - Components - Kendo UI for Vue
description: "Learn about the Kendo UI wrappers for Vue which are delivered by the DataSource package."
slug: overview_datasourcepackage
position: 0
---

<div><WrapperBanner></WrapperBanner></div>

# DataSource Overview

The [DataSource](https://docs.telerik.com/kendo-ui/framework/datasource/overview) is an abstraction for using local data arrays of JavaScript objects or remote data services which return JSON, JSONP, oData, or XML.

The DataSource wrapper components play a central role in practically all web applications that are built with the Kendo UI Wrappers for Vue suite.

<div data-component="StartFreeTrialSection"></div>

## Installation

To initialize the DataSource wrapper components, utilize any of the following approaches:

* [Use the `ref` attribute](#toc-using-the-ref-attribute)
* [Use an internal `slot` element](#toc-using-an-internal-slot-element)
* [Use the CDN service]({% slug using_cdn %})
* [Use Webpack](#toc-initializing-with-webpack)

### Using the ref Attribute

The following example demonstrates how to initialize the DataSource components by referencing the DataSource with the `ref` attribute.

{% meta height:350 %}
{% embed_file overview/ref-attribute/main.vue preview %}
{% embed_file overview/ref-attribute/main.js %}
{% endmeta %}

### Using an Internal slot Element

The following example demonstrates how to initialize the DataSource components by referencing the DataSource as an internal slot element.

{% meta height:350 %}
{% embed_file overview/internal-slot/main.vue preview %}
{% embed_file overview/internal-slot/main.js %}
{% endmeta %}

### Initializing with Webpack

1. Install Kendo UI and add a theme.

    ```sh
    npm install --save @progress/kendo-ui
    npm install --save @progress/kendo-theme-default
    ```

1. Install the Kendo UI DataSource package for Vue.

    ```sh
    npm install --save @progress/kendo-datasource-vue-wrapper
    ```

	The package also exports the following wrappers for individual components:

	* DataSource
	* HierarchicalDataSource
	* GanttDataSource
	* GanttDependencyDataSource
	* PivotDataSource
	* SchedulerDataSource
	* TreeListDataSource

1. Import the Kendo UI packages to the App component. If you use the Kendo UI components more than once in your application, add all Kendo UI-related files to the `main.js` file. If you use the Kendo UI components once in your application, add the Kendo UI-related files the component where they will be referred.

    ```js-no-run
    import '@progress/kendo-ui'// This will import the entire Kendo UI library
    // As an alternative, you could import only the scripts that are used by the utility:
    // import '@progress/kendo-ui/js/kendo.data' // Imports only the DataSource script and its dependencies

    import '@progress/kendo-theme-default/dist/all.css'

	import { DataSource,
			HierarchicalDataSource,
			GanttDataSource,
			GanttDependencyDataSource,
			PivotDataSource,
			SchedulerDataSource,
			TreeListDataSource,
			DataSourceInstaller } from '@progress/kendo-datasource-vue-wrapper'

    Vue.use(DataSourceInstaller)

    new Vue({
        el: '#app',
        components: {
            DataSource,
			HierarchicalDataSource,
			GanttDataSource,
			GanttDependencyDataSource,
			PivotDataSource,
			SchedulerDataSource,
			TreeListDataSource,
			DatasourceInstaller
        }
    })
    ```

## Suggested Links

* [Get Started with the DataSource]({% slug overview_datasource %})
* [Get Started with the HierarchicalDataSource]({% slug overview_hierarchicaldatasource %})
* [Get Started with the GanttDataSource]({% slug overview_ganttdatasource %})
* [Get Started with the GanttDependencyDataSource]({% slug overview_ganttdependencydatasource %})
* [Get Started with the PivotDataSource]({% slug overview_pivotdatasource %})
* [Get Started with the SchedulerDataSource]({% slug overview_schedulerdatasource %})
* [Get Started with the TreeListDataSource]({% slug overview_treelistdatasource %})
