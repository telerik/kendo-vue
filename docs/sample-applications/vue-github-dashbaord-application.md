---
title: GitHub Dashboard Application
description: "An application that implement a custom Vue data Grid, the Native Charts and other popular Kendo UI for Vue Native components."
slug: dashboard_app_vue
position: 3
---

# GitHub Dashboard Application

The Kendo UI for Vue Native suite provides a number of components that can be combined in a way that fits the requirements of your application. The final result can be both a beautiful and powerful solution.

## About the App

The `GitHub Dashboard` application is created following the best practices of building a Vue Application using Vite.js and providing a clean project structure. The application binds the Kendo UI `Native Grid` and `Native Charts` to a Github API. The result is a useful dashboard that provides detailed information about the issues in the `kendo-ui-core` repository. 

The `Dashboard` application consists of the following pages:
* The **Dashboard** page of the application demonstrates the `Native Charts` in action. You can see different types of [Charts]({% slug overview_charts %}), with simple and more complex configurations. 
* The **Issues** page shows a `Native Grid` implementation with a detail row, custom templates, data paging and filtering. This page also demonstrates how we can nest other Native components inside the [Grid]({% slug overview_grid %}).
* In the **My Profile** page you can see the usage of the [Card]({% slug overview_card %}), [Switch]({% slug overview_switch %}), [Dialog]({% slug overview_dialog %}), [Button]({% slug overview_button %}) components. 

Last but not least, the current example demonstrates how to style the different **Kendo UI for Vue Native** components, using the [Kendo Themes]({% slug themesandstyles %}). More information about the usage of the Kendo Themes, you can find in the [Styling the Components](#toc-styling-the-components) section below.

>The source code of the Dashboard application can be found in [our public GitHub repository](https://github.com/telerik/kendo-vue/tree/master/examples-standalone/dashboard).


## The Dashboard App in Action

<iframe src="https://d3fu8oi3wk1rz4.cloudfront.net/kendo-vue/dashboard/" frameborder="0" width="100%" height="800"></iframe>

> To test the above example in a separate window you can follow [this link](https://d3fu8oi3wk1rz4.cloudfront.net/kendo-vue/dashboard/).

## How to Run the Demo Locally

To to see the demo implementation and how the different Native components are configured to interact with each other, you can run the `GitHub Dashboard` application locally, by following the below steps:

1. Clone or download the [kendo-vue GitHub repository](https://github.com/telerik/kendo-vue/).
1. In the folder that contains the `kendo-vue` repository, navigate to the `examples-standalone/dashboard` folder.
1. Run `npm install` to install all dependencies needed by the component.
1. Use `npm run dev` command to start the application.
1. Open the link that appears in the console to open the project in a browser.

## Styling the Kendo UI for Vue Native components

The Kendo UI for Vue Native components come with customizable Kendo Themes that can style your application in different ways. The Kendo Themes are shipped as a part of the Kendo UI for Vue library. Details about the usage of the different themes, you can find in our [Styling]({% slug themesandstyles %}) documentation article. 

The `GitHub Dashboard` application shows how we can dynamically switch between the different Kendo Themes. The following line in the template of the `App.vue` file controls the Kendo Theme that will be applied to each component in the application.

```js-no-run
  <link rel="stylesheet" :href="themeLink" />
```

## Suggested Links

* [Kendo UI for Vue Dashboard sample application](https://d3fu8oi3wk1rz4.cloudfront.net/kendo-vue/dashboard/)
* [Kendo UI for Vue Native Data Grid]({% slug overview_grid %})
* [Kendo UI for Vue Native Charts]({% slug overview_charts %})
* [Kendo UI for Vue Native Dialog]({% slug overview_dialogs %})
* [Kendo UI for Vue Native Card]({% slug overview_card %})
* [Kendo UI for Vue Native Switch]({% slug overview_switch %})
* [Kendo UI for Vue Native Button]({% slug overview_button %})