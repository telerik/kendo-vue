---
title: Overview
page_title: Vue Grid Wrapper - Overview - Kendo UI for Vue
description: "Try the Vue Grid by Kendo UI with 100+ ready-to-use features covering everything from paging, sorting, filtering and data editing to grouping."
slug: overview_grid_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/grid/"
position: 0
---

<div><WrapperBanner link="/kendo-vue-ui/components/grid"></WrapperBanner></div>

# Grid Overview

The Kendo UI Grid wrapper for Vue displays data in a tabular format and provides a full spectrum of configuration options.

It supports the implementation of data operations and can be bound to local or remote data.

The Kendo UI Data Grid wrapper for Vue is a client-side wrapper for the [Kendo UI Grid](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid) widget.

<div data-component="StartFreeTrialSection"></div>

## Basic Usage

The following example demonstrates how to initialize the Grid.

{% meta height:470 %}
{% embed_file grid/basic/main.vue preview %}
{% embed_file grid/basic/main.js %}
{% endmeta %}

## Installation

To initialize the Kendo UI Grid wrapper for Vue, either:

* [Use the CDN service]({% slug using_cdn %}), or
* [Use Webpack](#toc-initializing-with-webpack).

### Initializing with Webpack

1. Install Kendo UI and add a theme.

    ```sh
    npm install --save @progress/kendo-ui
    npm install --save @progress/kendo-theme-default
    ```

1. Install the Kendo UI Grid package for Vue.

    ```sh
    npm install --save @progress/kendo-grid-vue-wrapper
    ```

1. Import the Kendo UI packages to the App component. If you use the Kendo UI components more than once in your application, add all Kendo UI-related files to the `main.js` file. If you use the Kendo UI components once in your application, add the Kendo UI-related files the component where they will be referred.

    ```js-no-run
    import '@progress/kendo-ui' // This will import the entire Kendo UI library
    // As an alternative, you could import only the scripts that are used by a specific widget:
    // import '@progress/kendo-ui/js/kendo.grid' // Imports only the Grid script and its dependencies

    import '@progress/kendo-theme-default/dist/all.css'

    import { Grid, GridInstaller } from '@progress/kendo-grid-vue-wrapper'

    Vue.use(GridInstaller)

    new Vue({
        el: '#app',
        components: {
            Grid
        }
    })
    ```

## Functionality and Features

* Data operations
    * [Data binding]({% slug databinding_grid_wrapper %})
    * [Editing]({% slug editing_grid_wrapper %})
    * [Filtering]({% slug filtering_grid_wrapper %})
    * [Grouping]({% slug grouping_grid_wrapper %})
    * [Paging]({% slug paging_grid_wrapper %})
    * [Sorting]({% slug sorting_grid_wrapper %})
    * [Selection]({% slug selection_grid_wrapper %})
* Columns
    * [Basics]({% slug columns_grid_wrapper %})
    * [Locked columns]({% slug lockedcolumns_grid_wrapper %})
    * [Multi-column headers]({% slug multicolumnheaders_grid_wrapper %})
    * [Reordering]({% slug reordering_grid_wrapper %})
    * [Resizing]({% slug resizing_grid_wrapper %})
    * [Column menu]({% slug columnmenu_grid_wrapper %})
    * [Foreign-key columns]({% slug foreignkeycolumns_grid_wrapper %})
    * [Custom commands]({% slug customcommands_grid_wrapper %})
* Scroll modes
    * [Basics]({% slug scrolling_grid_wrapper %})
    * [Virtualization]({% slug virtualization_grid_wrapper %})
* Export options
    * [Excel export]({% slug excel_export_grid_wrapper %})
    * [PDF export]({% slug pdf_export_grid_wrapper %})
* More settings
    * [Templates]({% slug templates_grid_wrapper %})
    * [State persistence]({% slug persist_state_grid_wrapper %})
    * [Keyboard navigation]({% slug keyboard_grid_wrapper %})
    * [RTL support]({% slug rtl_grid_wrapper %})

## Events

The following example demonstrates basic Grid events. You can subscribe to [all Grid events](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid#events) by the handler name.

```html
<div id="vueapp" class="vue-app">
    <kendo-grid :data-source="localDataSource"
                :selectable="'multiple cell'"
                :sortable="true"
                :filterable="true"
                :groupable="true"
                v-on:change="onChange"
                v-on:databinding="onDataBinding"
                v-on:databound="onDataBound"
                v-on:sort="onSorting"
                v-on:filter="onFiltering"
                v-on:group="onGrouping"
                v-on:groupexpand="onGroupExpand"
                v-on:groupcollapse="onGroupCollapse">
    </kendo-grid>
</div>
```
```js
Vue.use(GridInstaller);

new Vue({
    el: '#vueapp',
    methods: {
        onChange: function(ev) {
            var selected = $.map(ev.sender.select(), function(item) {
                return $(item).text();
            });

            console.log("Selected: " + selected.length + " item(s), [" + selected.join(", ") + "]");
        },
        onDataBinding: function(ev) {
            console.log("Grid data binding");
        },
        onDataBound: function(ev) {
            console.log("Grid data bound");
        },
        onSorting: function(ev) {
            console.log("Sorting on field: " + ev.sort.field + ", direction:" + (ev.sort.dir || "none"));
        },
        onFiltering: function(ev) {
            console.log("Filter on " + kendo.stringify(ev.filter));
        },
        onGrouping: function(ev) {
            console.log("Group on " + kendo.stringify(ev.groups));
        },
        onGroupExpand: function(ev) {
            console.log("The group to be expanded: " + kendo.stringify(ev.group));
        },
        onGroupCollapse: function(ev) {
            console.log("The group to be collapsed: " + kendo.stringify(ev.group));
        }
    },
    data: {
        localDataSource: [{
                "ProductID": 1,
                "ProductName": "Chai",
                "UnitPrice": 18,
                "UnitsInStock": 39,
                "Discontinued": false,
            },
            {
                "ProductID": 2,
                "ProductName": "Chang",
                "UnitPrice": 17,
                "UnitsInStock": 40,
                "Discontinued": false,
            },
            {
                "ProductID": 3,
                "ProductName": "Aniseed Syrup",
                "UnitPrice": 10,
                "UnitsInStock": 13,
                "Discontinued": false,
            }
        ]
    }
})
```

## Suggested Links

* [Kendo UI Grid for jQuery](https://docs.telerik.com/kendo-ui/controls/data-management/grid/overview)
* [API Reference of the Grid Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid)
