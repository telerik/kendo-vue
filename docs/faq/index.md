---
title: FAQ
page_title: FAQ - Kendo UI for Vue
description: "Find the answers to the most asked questions about the Kendo UI for Vue suite."
slug: faq_vue
position: 950
category: faq
---

# Kendo UI for Vue FAQ

This article lists the answers to the most frequently asked questions (FAQs) about the Kendo UI for Vue suite.

## General Queries

### What is the difference between the Kendo UI for Vue Native and Kendo UI for Vue Wrapper suites?

The Kendo UI for Vue Native components are built from scratch with Vue.js and benefit from all the functionality provided by the framework. The Wrapper components are wrappers of the Kendo UI for jQuery suite. They use Kendo UI for jQuery under the hood and there could be some usage limitations in specific Vue scenarios.

### If we have to choose between the Kendo UI for Vue Native and Kendo UI for Vue Wrapper suites, which one would you recommend?  

Historically, the Kendo UI for Vue Wrapper components were presented at first. When we saw the potential, we started developing the Kendo UI for Vue Native suite. The focus of the Kendo UI for Vue team is now on the Native suite. Currently, the number of Native components is bigger than the components in the Wrapper suite. 

If you have the choice between the Native and Wrapper suite, what we recommend is the `Native` one.

### Which Vue version is supported by the Kendo UI for Vue suite? 

The Kendo UI for Vue suite works both with Vue 3 and Vue 2. 

> Vue 2 is currently in its end-of-support phase till Nov 2024. After our last major release for 2024, Vue 2 will no longer be supported in the new versions of the Kendo UI for Vue components. Please check our [Vue 2 End of Support article](slug:vue2-end-of-support) for more details.

### Which Vue version is recommended for the Kendo UI for Vue suite? 
Kendo UI for Vue supports both Vue 2 and Vue 3. If you you are now starting your project, `we recommend the usage of Vue 3`. If you have a legacy project that uses Vue 2, again you are good to continue its development but there could be some configuration specifics for some of the components. 

> Vue 2 is currently in its end-of-support phase till Nov 2024. After our last major release for 2024, Vue 2 will no longer be supported in the new versions of the Kendo UI for Vue components. Please check our [Vue 2 End of Support article](slug:vue2-end-of-support) for more details.

### Does Kendo UI for Vue supports Server-Side Rendering(SSR)? 

Yes. All components that are part of the Kendo UI for Vue Native suite are SSR ready. 

### Does Kendo UI for Vue works with Vite? 

The Kendo UI for Vue components work both with [Vite](https://vitejs.dev/guide/) and [Webpack](https://webpack.js.org/). 

### Can both the Native and Wrapper components be used in one project?

Yes. The different Native and Wrapper components can work in synergy. 
The Kendo UI for Vue Native suite already covers almost all of the components available in the Wrapper suite. With this in mind, we recommend using only these Wrapper components that doesn't have their Native equivalent. 

### When can I expect the same level of maturity and completeness in Kendo UI for Vue as in Kendo UI for jQuery?

The plans for the future development of the Kendo UI for Vue suite are published and regularly updated on the [Roadmap page](hhttps://www.telerik.com/support/whats-new/kendo-vue-ui/roadmap).

### Are the components in Kendo UI for Vue divided into free and paid batches?

The Kendo UI for Vue is a professionally developed library of UI components distributed under [commercial license](https://www.telerik.com/purchase/license-agreement/kendo-ui). The usage of any Kendo UI for Vue components, requires either a commercial license key or an active trial license key. 

Follow the instructions on the Kendo UI for Vue [My License page]({% slug my_license_vue %}) to activate your license.

### Do you provide support service for Kendo UI for Vue? 

The suite is backed by the same level of professional support and scheduled updates that are shipped by all other Kendo UI libraries.

### Is there a code editor that you recommend?

The [Visual Studio Code](https://code.visualstudio.com/) in a combination with the [Volar extension](https://marketplace.visualstudio.com/items?itemName=Vue.volar) are strongly recommended when working with the Vue ecosystem.

In addition, we provide [extensions for Visual Studio Code]({% slug vue_vscode_overview %}).

### Where can I find further information?

If there is a question that is not answered by the [Kendo UI for Vue documentation](https://www.telerik.com/kendo-vue-ui/components), please submit a support ticket and we will handle it according to your support plan.

## Package and Release Management

### How can I find out when new package versions are published to NPM?

Subscribe for NPM notifications through [hooks](http://blog.npmjs.org/post/145260155635/introducing-hooks-get-notifications-of-npm).

### Where can I track any new releases of Kendo UI for Vue?

The releases of the Kendo UI for Vue are announced on:
* Our [Release history](https://www.telerik.com/kendo-vue-ui/components/changelogs/ui-for-vue/) page.
* The [Telerik blog](https://www.telerik.com/blogs/kendo-ui).

## Migration and Integration

### Can I use the Kendo UI Less themes for jQuery?

No, but you can use our SASS themes.

Kendo UI for Vue ships the following themes:

* [Kendo UI Default Theme]({% slug preview_kendothemedefault %})
* [Kendo UI Bootstrap Theme]({% slug preview_kendothemebootstrap %})
* [Kendo UI Material Theme]({% slug preview_kendothemematerial %})

To create a custom theme that matches the desired looks, you can also use the [ThemeBuilder application]({% slug themebuilder %}).

### Can I use Kendo UI for Vue in ASP.NET Core applications?

Yes, [Kendo UI for Vue can be integrated in ASP.NET Core applications]({% slug asp-net-core-sample-app %}). Also check the [Create an ASP.NET Core app with Vue in Visual Studio](https://docs.microsoft.com/en-us/visualstudio/javascript/tutorial-asp-net-core-with-vue?view=vs-2022) tutorial.

## Imports and Modules

### Can I import all components in one go?

No, but you can import all components from a single package by importing the package module. To see how to do this, refer to the **Overview** article of the specific package, for example, the [Dropdowns]({% slug overview_dropdowns %}#toc-installation).

## Grid

### Does the Grid support grouping?

Yes it does. Refer to the article on [grouping in the Grid]({% slug groupingbasics_grid %}) and the [API index of the Grid]({% slug api_grid %}).

### Does the Grid support server-side sorting and paging?

Yes, [server-side data operations are supported]({% slug data_binding_crud_remote_data %}) using the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) or a preferred HTTP request library.

### Does the Kendo UI for Vue Native Grid support detail templates and header attributes, similar to the Grid for jQuery?

Yes, it does. Refer to the articles on [master-detail Grids]({% slug master_detail_grid %}) and the [Grid API]({% slug api_grid %}).

### Are all Grid features which are supported by Kendo UI for jQuery available in Kendo UI for Vue Native suite?

The Kendo UI for Vue Native Grid covers most of the functionalities available in the jQuery Grid. If there is a Grid feature that you need and cannot find in the product documentation, please submit a support ticket and we will provide the needed details.

## Styling

### Can I apply SCSS-based custom styles with Kendo UI for Vue?

Yes, you can. All available themes provide options for customization.

To modify the variables of each theme, refer to these articles:
* [Customize the Default theme]({% slug variables_kendothemedefault %})
* [Customize the Bootstrap theme]({% slug variables_kendothemebootstrap %})
* [Customize the Material theme]({% slug variables_kendothemematerial %})


### How can I customize the styles for the components in Kendo UI for Vue?

You can customize the styles by using CSS overloads or SASS. For more information on the styling options, refer to the overview of the Kendo UI for Vue [themes and styles]({% slug themesandstyles %}).

## Suggested Links

* [Getting Started with Kendo UI for Vue Native suite]({% slug getting_started_javascript_composition_api %})
* [Kendo UI for Vue - First Steps with JavaScript + Options API]({% slug getting_started_javascript_options_api %})
* [Kendo UI for Vue - First Steps with TypeScript]({% slug getting_started_typescript_composition_api %})
* [Kendo UI for Vue - First Steps with TypeScript + Options API]({% slug getting_started_typescript_options_api %})
* [Kendo UI for Vue Components](https://www.telerik.com/kendo-vue-ui/components)
* [The Kendo UI for Vue Blog Page](https://www.telerik.com/blogs/web-vue)
