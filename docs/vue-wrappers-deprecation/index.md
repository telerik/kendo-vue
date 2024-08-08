---
title: Vue Wrappers End of Support
page_title: "Kendo UI for Vue Wrapper Components - End of Support in 2025"
description: "Kendo UI for Vue will end support for the Wrapper components in May, 2025. Learn how to make a smooth transition to Vue Native or Kendo UI for jQuery components"
slug: vue-wrappers-end-of-support
---

# Vue Wrappers End of Life

The Kendo UI for Vue Wrapper components reached end of life (EOL) as of May 2024. After May 2024 no new versions of the Wrapper components will be released. To ensure your smooth transition we have a one year support till May, 2025.
 
To help guide you through the transition check out the following articles: 
* [Vue Wrappers deprecation details](#toc-vue-wrappers-deprecation-details) 
* [Vue Wrappers Migration Guide](#toc-vue-wrappers-migration-guide) 

### The history of Kendo UI for Vue 

The story of the Kendo UI for Vue suite started in 2017 with our Wrapper components, built over Kendo UI for jQuery. Back then, the Vue.js framework was gaining popularity and the Wrappers helped us evaluate the potential Vue.js had. Later, in 2019 we introduced the Native Grid component (a Data Grid component built from scratch with Vue.js), which laid the foundations of our Kendo UI for Vue Native suite. 

With the launch of the Native suite and the development of Vue.js, naturally, the interest in our component was transferred to the Native Vue components (currently being more than 110 and growing in numbers). Driven by our efforts to be up to date with the latest technologies, the market expectations, and the potential we saw in the Native components, they have become our focus over the last few years.  

Today, the Kendo UI for Vue suite has two types of components:
* **Native** (built from scratch with Vue.js, following the latest trends in the Vue ecosystem), and 
* **Wrapper** (using Kendo UI for jQuery under the hood and having limitations in the context of the Vue framework). 

In terms of usage, the majority of our clients have migrated their projects to Kendo UI for Vue Native components. Very few use some of our Wrapper components in scenarios where an equivalent Native component is not available. 

During the past few years, in our support channels, we’ve been continuously communicating that the Wrappers’ deprecation will happen at some point. Announcing it today, 
> the deprecation of the Kendo UI for Vue Wrappers is planned for May 2024. After that period, no new versions of the Wrapper components will be released.

## Vue Wrappers Deprecation Details
### Why do We deprecate the Wrapper components?

While rich in functionality, the Kendo UI for Vue Wrapper components lag, compared to the true Native components built from scratch with Vue.js. The Wrappers’ architecture and the way they work do not follow the modern Vue trends and best practices that the Vue Native components adopt.

Some of the important differences between the Wrapper and Native components are:
* **Performance & reactivity** – In terms of performance, the Native Kendo UI for Vue suite is way ahead of the game compared to the Wrappers for Vue. The Native components are faster and out-of-the-box support reactiveness. On the other hand, with the Wrapper components, one needs to manually handle the state updates using the jQuery API.
* **Bundle size** - to ship a Wrapper component you also need the Kendo UI for jQuery and the jQuery itself imported into your project. This raises the bundle size of your project noticeably, which is not the case when using the Native suite
* **Templates** – Working with the Kendo UI for Vue Wrappers you can only use Kendo Templates to customize the different components while the Native components allow you to benefit from all the functionality the Vue Framework provides, including slot templates.

The above factors are enough reason for us to step further with the deprecation of the Wrapper components.

### How Does the Wrappers Deprecation Affect Me and What to Do?

The deprecation affects you only if you are a user of the Vue Wrappers, and not the Native Vue components. After May 2024, no further version of the Wrapper components will be released. If you want to keep up to date the Wrapper components after this period, you will not be able to do it as you are used to. `If you are worried about the future of your projects that use Vue Wrapper components, do not be!` Yes, you will need to apply some changes to your projects, but they will continue functioning the same way as you are used to. The two paths to go, depending on your specific project needs are:

1. **Path 1:** Migrate the Wrapper components to [Kendo UI for Vue Native](https://www.telerik.com/kendo-vue-ui/components/), where a Native equivalent of a specific component is available. This is applicable in most scenarios. Almost all the Wrapper components have their native equivalents we recommend to use.
2. **Path 2:** Migrate the Wrapper components to [Kendo UI for jQuery](https://demos.telerik.com/kendo-ui/) – recommended only for scenarios where a Native equivalent for a specific component is not available or when there is a need to keep to the Kendo UI for jQuery components that are rendered when using the Kendo UI for Vue Wrappers.  

No matter which of the suggested approaches you select, we recommend checking the [migration guide](#toc-vue-wrappers-migration-guide) for instructions related to the migration process. If the details in the guide don’t help, [our outstanding support team will be happy to assist you](https://www.telerik.com/account/support-tickets) migrate the Wrapper components in your project either to Kendo UI for Vue Native or Kendo UI for jQuery. 

### FAQs – Vue Wrappers
**Q:** Will the Wrapper components get updates and bug fixes for the Wrapper suite?  
**A:** No new features, bug fixes, and component improvements will be released after May 2024. 

**Q:** Will the Support Service answer Wrapper-related tickets?  
**A:** Nothing will be changed in our support service until May 2025. We rely on the responsible attitude of our clients and believe that all components using the Wrapper components will be [migrated](#toc-vue-wrappers-migration-guide) till the discussed milestone. After the last release of the Wrapper components, we will be happy to give bits of advice related to them, but, in general, after the deprecation date, the only support questions raised in the Wrapper components context will be only those about migration to another Kendo suite. All other Wrapper-related tickets will not be handled. 

**Q:** How do I keep my Wrapper-using projects up-to-date after the deprecation date?   
**A:** We are aware that few of you are still using the Wrapper components and we are really sorry about all the inconveniences the deprecation will cause you. If you want to keep your projects updated, we recommend checking our [migration guide](#toc-vue-wrappers-migration-guide). If you have plans for your project, we recommend migrating the Wrapper components to Native ones. If you are maintaining a project, the easiest solution for you will be to change the Wrapper components with their Kendo UI for jQuery equivalents. 

**Q:** Can I continue using the Wrapper components after the deprecation date?  
**A:** Yes, you can. All projects currently using the Wrapper components will continue to work after the deprecation date. But have in mind that no new features, bug fixes and support will be provided after May 2024.

## Vue Wrappers Migration Guide

The following instructions aim to guide you through the migration from the Kendo UI for Vue Wrapper components to Kendo UI for Vue Native, or Kendo UI for jQuery equivalent. If you need assistance with the migration of the Vue Wrappers in your project, please submit a [support ticket](https://www.telerik.com/account/support-tickets).

### Migrating Wrapper components to Kendo UI for Vue Native

Almost all components available in the Kendo UI for Vue Wrapper suite have their Native equivalents. What we recommend is migrating the Wrappers in your project to the [Kendo UI for Vue Native components](https://www.telerik.com/kendo-vue-ui/components/). 

There are no universal instructions we can provide for migrating your project. You can check the documentation for the targeted Native component and configure it the way you need it. While the migration to Native components could be more time-consuming, the result will be more beneficial (faster application and smaller bundle size) for you and your clients. 

What is important here is that once you start using the Native components, you no longer need the Kendo UI for jQuery library and the jQuery itself referenced in your project. Another significant difference for the Native components is that they directly consume the data passed to them. What this means is that the Native Vue components don’t use DataSource. Following the best practices in the Vue ecosystem, the Native Vue components are reactively updated once their data is changed. 

### Migrating Wrapper components to Kendo UI for jQuery

The Kendo UI for Vue Wrapper components use the Kendo UI for jQuery suite under the hood. To be more precise in what the previous statement means, what we see in the browser are Kendo UI for jQuery components configured through the Vue.js API. 

That said, it is reasonable to assume that we can effortlessly use the Kendo UI for jQuery components in Vue, maintaining the structure of the Vue project and using the jQuery API.

The basic instructions for migrating a Wrapper component to its Kendo UI for jQuery equivalent can be summarized to the following:

**Step 1: Prerequisites**

Make sure the `Kendo UI for jQuery` library, the `jQuery` itself, and a selected `Kendo Theme` are imported into your project. In the shared above examples, the listed requirements are imported using NPM packages but the same can be achieved through CDN links. If you are using NPM, the `main.js` file of your project must contain the following:
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
\* If you are working with CDNs, you won’t need to import Kendo, jQuery and the Kendo Theme

**Step 2: Get familiar with the jQuery components**

Go to the [Kendo UI for jQuery’s components page](https://demos.telerik.com/kendo-ui/) and select the component which you want to migrate to. Check the demos of the selected component so you get familiar with the way the jQuery components can be configured. You will notice that the properties structure of the selected component is similar to the one in the Wrapper components. 

Another specific thing for the jQuery components is that they are initialized from DOM elements (DIVs, SPANs, buttons, etc.) defined in the HTML of the page. Then the ‘magic’ happens inside the `$(document).ready` function following a structure like this:

```js
$(document).ready(function () {
    $("#primaryTextButton").kendoButton({
        themeColor: "primary"
    });
});
```
In the context of the above code, here we are initializing a jQuery button from an element with `primaryTextButton` id and `primary` `themeColor` property. 

All properties of the jQuery components are defined inside the configuration object passed to the method that initializes a specific component. In the above snippet, this method is `kendoButton`.

**Step 3: Add the jQuery component to your Vue project**

Inside the `template` section of your Vue project define a DOM element that is similar to the element used in the jQuery demos for the specific component you are migrating. Define a unique `id` for this element.

```html
<button id="primaryTextButton">Primary Button</button>
```

To render a jQuery component from our element, we need to add its initialization code inside the `mounted` function of your project. 

**Step 4: How to apply data and properties changes in the jQuery components?**

To change the data in the jQuery components, we need to use the `setDatasource` method available in all data-driven components. The mentioned method works by getting a reference to the component, and then calling its `data` method. To demonstrate the previous here is how we can get a reference to a DropDownList component:

```js
const ddl = $('#dropdownlist').data('kendoDropDownList')
```

The value of the `ddl` variable is an object that contains the current state of the DropDownList component. Having this object, we can call the `setDatasource` method as follows:

```js
ddl.setDataSource(['Red', 'Blue', 'Green']);
```

Having the `ddl` variable, we can also call a method available for each component. For example, here is how we can programmatically change the value of the DropDownList component using its `value` method:

```js
ddl.value('Red');
```

The methods available for each component can be checked in the [Kendo UI for  jQuery’s](https://demos.telerik.com/kendo-ui) documentation.

**Step 5: How to handle events in Kendo UI for jQuery?**

Each Kendo UI for jQuery component has different built-in events we can listen for and implement logic when they are triggered.  Here is an updated version of our `primaryTextButton` in which we add custom logic to its `click` event: 

```js
$('#primaryTextButton').kendoButton({
    themeColor: 'primary',
    click: function () {
        const ddl = $('#dropdownlist').data('kendoDropDownList');

        ddl.valueTemplate = (data) => {
            return $(`<span> The selected value is ${data}</span>`);
        };
        ddl.setDataSource(['Red', 'Blue', 'Green']);
        ddl.value('Red');
    },
});
```

The above snippet will update the `valueTemplate`, `dataSource`, and the `value` of a  DropDownList component, once the button is clicked. 

[Here is a runnable example demonstrating the discussed above scenarios](https://stackblitz.com/edit/hdyxve-hhzf3l?file=src%2Fmain.vue).  This example showcases how we can update a jQuery DropDownList component with a click on jQuery Button, implemented in Vue.js project. 

And…this is it. For each Kendo UI for jQuery component, you need to check their API docs and handle your scenario based on the available options. 

To cover more complex scenarios, below you will find a few runnable examples in which some of the most popular Kendo UI of jQuery components are used in Vue.js projects:
* [Kendo UI for jQuery Grid](https://stackblitz.com/edit/hdyxve-drxd4y?file=src%2Fmain.vue) 
* [Kendo UI for jQuery Pivot Grid](https://stackblitz.com/edit/hdyxve-8zgig1?file=src%2Fmain.vue) 
* [Kendo UI for jQuery Scheduler](https://stackblitz.com/edit/hdyxve-kql5fl?file=src%2Fmain.vue) 
* [Kendo UI for jQuery Chart component inside a Kendo UI for jQuery TileLayout Tile](https://stackblitz.com/edit/hdyxve-v3ckmi?file=src%2Fmain.vue) 


## Additional Resources

* [Getting Started with Kendo UI for Vue - JavaScript (Online Guide)](slug:getting_started_javascript_composition_api)
* [Getting Started with Kendo UI for Vue - TypeScript (Online Guide)](slug:getting_started_typescript_composition_api)
* [Getting Started with Kendo UI for Vue - JavaScript + Options API (Online Guide)](slug:getting_started_javascript_options_api)
* [Getting Started with Kendo UI for Vue - TypeScript + Options API (Online Guide)](slug:getting_started_typescript_options_api)
* [Getting Started with Kendo UI for Vue - Nuxt 3 (Online Guide)](slug:getting_started_nuxt_3)