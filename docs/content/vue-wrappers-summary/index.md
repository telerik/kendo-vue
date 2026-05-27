---
title: Vue Wrappers End of Support
page_title: "Kendo UI for Vue Wrapper Components - End of Support in 2025"
description: "Kendo UI for Vue will end support for the Wrapper components in May, 2025. Learn how to make a smooth transition to Vue Native or Kendo UI for jQuery components"
slug: vue-wrappers-summary
---

# Overview of the Kendo UI for Vue Wrapper components

## Wrappers Deprecation Summary
In 2024, we announced the [deprecation of the Kendo UI for Vue Wrapper components](slug:vue-wrappers-end-of-support) of our jQuery suite, with End of Support  by end of May, 2025. This deprecation is a huge step forward for our native Vue product - Kendo UI for Vue as it will now be our sole development focus. Naturally, this decision comes with some changes from the developers’ perspective for everyone previously using the Wrappers.

This article is only relevant to users still using Kendo UI Vue Wrappers. If you don’t know or have never used the Wrapper components you can safely skip this article .

This article:
* Will deep dive into how to use the functionality of the components that were previously available as Wrapper ones, but don’t have their Native equivalents.
* Will point you to an archive of the already unpublished wrapper documentation and examples, for the cases when you are working on a legacy project.
* Will not guide you on how to migrate your Wrapper components to Native ones. If you need migration guidance, please see the [Vue Wrappers Migration Guide](slug:vue-wrappers-end-of-support#toc-vue-wrappers-migration-guide).

You can directly jump to the following article sections:
* [What’s Next for the Wrappers Documentation?](#what-s-next-for-the-wrappers-documentation)
* [Wrappers vs. Native Feature Parity](#wrappers-vs-native-feature-parity)
* [Using Kendo UI for jQuery components in your Vue.js project](#using-kendo-ui-for-jquery-components-in-your-vue-js-project)
* [FAQs – Using Kendo UI for jQuery in a Vue Project](#faqs-using-kendo-ui-for-jquery-in-a-vue-project)


### What’s next for the Wrappers Documentation?

The Wrapper documentation is already unpublished from our docs site and has been moved to [our public repository](https://github.com/telerik/kendo-vue/tree/master/vue-wrappers-documentation).

In the shared link, you can find all Wrappers documentation previously available, separated by package names. Each package folder has subfolders with the names of the components part of each package. Following this structure here is where you can find the:
* **Documentation Articles:** Each wrapper component docs article can be found in the subfolder with the name of a specific component.
* **Examples:** All examples are located in the examples folder of each package folder.

Another option to easily navigate to the documentation of the different components is using the list in this [ReadMe file](https://github.com/telerik/kendo-vue/tree/master/vue-wrappers-documentation#readme) or using the search functionality of the shared repository.

### Wrappers vs. Native Feature Parity

Although **the Kendo UI for Vue Native suite provides a bigger number of components** and functionalities that were not available in the Wrapper suite, there are still some components that were available as Wrapper components but are not implemented as Native ones.

As of the deprecation date of the Wrapper components, the components that were available as wrappers but are still not available as Native ones are:

* Barcode
* QR code
* Chat
* Datasource
* Diagram
* MulticolumnCombobox
* Gantt
* Map
* MediaPlayer
* PivotGrid
* Spreadsheet
* TreeMap
* Validator

If you are interested in some of the above components and would like to use them as a part of the Kendo UI for Vue Native suite, please visit [our Feedback portal](https://feedback.telerik.com/kendo-vue-ui) and:
* Search for an existing feature request about the implementation of a selected component, check the available discussion, and vote for the selected feature or component implementation.
* Be the first to request the implementation of a feature or component if no previous submission is available

Based on the users‘ interest in each feature request, we will consider their future implementation.

### Using Kendo UI for jQuery components in your Vue.js project

Under the hood, Kendo UI for Vue Wrapper components were using the [Kendo UI for jQuery](https://demos.telerik.com/kendo-ui/) components. In this context, those who prefer to continue to use the Wrappers functionality (which was a Kendo UI for jQuery functionality) can still use the Kendo UI for jQuery components in their Vue projects.

Below you will find details and examples about how one can add the Kendo UI for jQuery Diagram, Gantt, PivotGrid, Spreadsheet, and TreeMap components in a Vue.js project.

The following examples demonstrate in action what is described in this [Migrating Wrapper components to Kendo UI for jQuery](slug:vue-wrappers-end-of-support#toc-migrating-wrapper-components-to-kendo-ui-for-jquery) article.

All examples below import the Kendo UI library and jQuery itself from NPM packages using the following definition in the `main.js` file:
```js
import jquery from 'jquery';
import { createApp } from 'vue';
import App from './main.vue';

window.$ = jquery;
window.jQuery = jquery;
import '@progress/kendo-ui';
import '@progress/kendo-theme-default';

createApp(App).mount('#app');
```

The same import can be done using CDN links:
```html
<script src="https://code.jquery.com/jquery-3.7.0.min.js"></script>
<script src="https://kendo.cdn.telerik.com/2024.4.1112/js/kendo.all.min.js"></script>
```

To run each example in Vue, in the Framework’s template section, we have a div element from which each component is initialized. All JavaScript definitions from the jQuery examples are inside the script tag of our Vue application.

To initialize a selected component, we need to call the $document.ready method (as it is in Kendo UI for jQuery) in the mounted function of the Vue application.

```js
    $(document).ready(
        ...the logic that initializes a jQuery component...
    );
```
#### Use Diagram component in Vue

The following demo uses the [Overview demo of the Kendo UI for jQuery Diagram](https://demos.telerik.com/kendo-ui/diagram/index) as a basis.

{% meta height:720 %}
{% embed_file diagram/main.vue preview %}
{% embed_file diagram/main.js %}
{% endmeta %}


#### Use Gantt component in Vue

The demonstrated Gantt example is based on the [Basic usage demo of the Kendo UI for jQuery Gantt](https://demos.telerik.com/kendo-ui/gantt/basic-usage), and uses the same configuration as described above.

{% meta height:820 %}
{% embed_file gantt/main.vue preview %}
{% embed_file gantt/main.js %}
{% endmeta %}

#### Use PivotGrid component in Vue

Check the implementation of the Kendo UI for jQuery PivotGrid inside a Vue project:

{% meta height:720 %}
{% embed_file pivotgrid/main.vue preview %}
{% embed_file pivotgrid/main.js %}
{% endmeta %}

#### Use Spreadsheet component in Vue

Here is a runnable Vue example based on the [Kendo UI for jQuery Spreadsheet Overview](https://demos.telerik.com/kendo-ui/spreadsheet/index) demo:

{% meta height:720 %}
{% embed_file spreadsheet/main.vue preview %}
{% embed_file spreadsheet/main.js %}
{% endmeta %}

#### Use TreeMap component in Vue

The following example demonstrates the usage of the Kendo UI for jQuery TreeMap in a Vue project:

{% meta height:850 %}
{% embed_file treemap/main.vue preview %}
{% embed_file treemap/main.js %}
{% endmeta %}


### FAQs – Using Kendo UI for jQuery in a Vue Project

**Q:** Will the Barcode, QR code, Chat, Datasource, Diagram, MulticolumnCombobox, Gantt Map, MediaPlayer, PivotGrid, Spreadsheet, TreeMap, and Validator components be implemented as a part of the Kendo UI for Vue Native suite?

**A:** The Implementation of the components previously available as a Wrapper component or the introduction of new features in the Native suite depends on the community’s interest in each feature. To check the interest in a specific feature or submit a new feature request, please visit [our Feedback portal](https://feedback.telerik.com/kendo-vue-ui).

**Q:** Can I use the Kendo UI for jQuery components in my Vue project?

**A:** Yes, you can. Please check the Using Kendo UI for jQuery components in your Vue.js project section above or check this [Migrating Wrapper components to Kendo UI for jQuery](https://www.telerik.com/kendo-vue-ui/components/vue-wrappers-deprecation/#toc-migrating-wrapper-components-to-kendo-ui-for-jquery) article


## Additional Resources

* [Getting Started with Kendo UI for Vue - JavaScript (Online Guide)](slug:getting_started_javascript_composition_api)
* [Getting Started with Kendo UI for Vue - TypeScript (Online Guide)](slug:getting_started_typescript_composition_api)
* [Getting Started with Kendo UI for Vue - JavaScript + Options API (Online Guide)](slug:getting_started_javascript_options_api)
* [Getting Started with Kendo UI for Vue - TypeScript + Options API (Online Guide)](slug:getting_started_typescript_options_api)
* [Getting Started with Kendo UI for Vue - Nuxt 3 (Online Guide)](slug:getting_started_nuxt_3)
