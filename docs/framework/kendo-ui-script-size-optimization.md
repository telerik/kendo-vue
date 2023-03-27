---
title: Script Size Optimization
page_title: Script Size Optimization - Kendo UI for Vue
description: "Learn how to load only those Kendo UI scripts which are needed for a specific Kendo UI component for Vue."
slug: kendo_ui_script_size_optimization
use_runner: true
position: 6
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components"
toc: true
---

<WrapperBanner link="/kendo-vue-ui/components"></WrapperBanner>

# Script Size Optimization

To reduce the size of your Vue application, Kendo UI for Vue enables you to load only parts of the entire Kendo UI library.

Each Kendo UI component for Vue requires a specific set of the Kendo UI source scripts. Organized in this way, the modular structure of Kendo UI allows you to load only those scripts that are needed in a specific application scenario.

To load only the Kendo UI scripts you need, use Webpack and utilize either of the following approaches:

* [(Recommended) Direct loading of the specific source Kendo UI scripts](#toc-include-the-scripts-for-each-component), or
* [Create a custom scripts bundle and load it in your application](#toc-include-a-custom-scripts-bundle).

## Including the Scripts for Each Component

Including the individual script files for each component directly from the source folder of the `@progress/kendo-ui` package is a viable approach when you use a limited number of components in your application. This approach may dramatically reduce the size of the referenced JavaScript files from Kendo UI.

To include the scripts for each component:

1. Identify which are the scripts that will be included. The full list of scripts for each the Kendo UI widget is available in the [Kendo UI documentation](https://docs.telerik.com/kendo-ui/intro/installation/what-you-need#individual-scripts). For example, to use only the DatePicker, go to the [Editors scripts article](https://docs.telerik.com/kendo-ui/intro/scripts/scripts-editors) and look for the DatePicker script in the table.

1. Import the DatePicker script instead of the full Kendo UI library script. Webpack will also load all the dependency scripts.

    ```js
    import $ from 'jquery';
    import '@progress/kendo-ui/js/kendo.datepicker.js'
    ```

1. Import the DatePicker component and its installer from the `kendo-dateinputs-vue-wrapper` package.

    ```js
    import { DatePicker, DateinputsInstaller } from '@progress/kendo-dateinputs-vue-wrapper'
    ```

1. Initialize the DatePicker.

    ```html
    <div id="vueapp" class="vue-app row example-wrapper">
        <kendo-datepicker v-model="date"></kendo-datepicker>
    </div>
    ```
    ```js
    Vue.use(DateinputsInstaller);

    new Vue({
        el: '#vueapp',
        data: {
            date: null
        }
    })
    ```

## Including Custom Scripts Bundles

> Due to the different module loading, building a custom bundle may result in future side effects. Although including custom scripts bundles is still an option for adding Kendo UI scripts, the recommended and appropriate way to import them is by using the `@progress/kendo-ui` NPM module.

Including a custom scripts bundle is a viable approach only in scenarios when you use many Kendo UI widgets in your application.

To create a single bundled script:

1. Download the Kendo UI `commercial-source` archive from your [Telerik account](https://www.telerik.com/account/product-download?product=KENDOUICOMPLETE).
1. Extract the archive and navigate to its `src` folder.
1. To build a custom distribution from the shipped source, run the following shell commands.

    ```sh
    cd src
    npm install -g gulp
    npm install
    gulp custom -c autocomplete,dropdownlist
    ```

    In the `gulp` command, list the components you want to be included in the custom build and separate them with a comma (`,`). The previous example builds a custom minified script which includes the AutoComplete and the DropDownList widgets.

    When complete, the Gulp command outputs a `kendo.custom.min.js` file in the `src/dist` directory. The Gulp build task automatically resolves the dependencies needed by each component and you do not have to list them. Avoid using multiple combined custom scripts as they will contain duplicate code. Instead, create a single combined script file which includes everything you need.

1. Import the above script in your application.

    ```js
    import $ from 'jquery';
    import 'kendo.custom.min.js'
    ```

1. Import the respective Kendo UI components for Vue from `kendo-vue-dropdowns-package`.

    ```js
    import { DropDownList, AutoComplete, DropdownsInstaller } from '@progress/kendo-dropdowns-vue-wrapper'
    ```

1. Initialize the DropDownList and the AutoComplete.

    ```html
    <div id="vueapp" class="vue-app row example-wrapper">
        <div>
            <kendo-autocomplete :data-source="dataSourceArray"
                                :placeholder="'Your favorite sport'"
                                :separator="', '"
                                :filter="'contains'">
            </kendo-autocomplete>
        </div>
        <div>
            <kendo-dropdownlist :data-source="dataSourceArray"
                                :index="0">
            </kendo-dropdownlist>
        </div>
    </div>
    ```
    ```js
    Vue.use(DropdownsInstaller);

    new Vue({
        el: '#vueapp',
        data: function() {
            return {
                dataSourceArray: [
                    'Football',
                    'Tennis',
                    'Basketball',
                    'Baseball',
                    'Cricket',
                    'Field Hockey',
                    'Volleyball'
                ]
            }
        }
    })
    ```

## Suggested Links

* [Getting Started with Kendo UI for Vue](slug:getting_started)
* [Using CDN to Load the Kendo UI Wrappers for Vue](slug:using_cdn)
* [Creating Your Own Custom Bundles with Kendo UI](https://docs.telerik.com/kendo-ui/intro/installation/what-you-need)
