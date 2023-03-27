---
title: Using Wrapper Components in Vite
page_title: Kendo UI for Vue Wrapper Components - How to use them with Vite?
description: "Learn how to use the Kendo UI for Vue Wrapper components when working with Vite."
slug: wrappers_vite
position: 970
---

# Using the Kendo UI for Vue Wrapper Components in Vite

With the development of the Vue framework, [Vite](https://vitejs.dev/) is getting more and more popular displacing the Vue CLI as a recommended build tool. As the Wrapper components use Kendo UI for jQuery under the hood, there are some specifics that should be followed when working with the Wrapper components in Vite. 

## Configuration Specifics
The current article lists the configurations you need to apply to your Vite project to have the Wrapper components work correctly. The discussed below details are related to the following: 
* [How to import the Wrapper components in your application](#toc-importing-the-wrapper-components-in-vite)
* [How to add the jQuery library to your project](#toc-importing-jquery-to-your-vite-project)

### Importing the Wrapper Components in Vite

As the Kendo UI for Vue Wrapper components use Kendo UI for jQuery under the hood, one of the required packages needed to initialize all Wrapper components is the `@progress/kendo-ui` package. 

To be able to load a Wrapper component on Vite you should import only this part of the `@progress/kendo-ui` package that is related to the specific component you need. If, for example, we want to initialize the Wrapper ListBox component then we need the following imports: 

```js-no-run
import "@progress/kendo-ui/js/kendo.listbox"
import { ListBox } from '@progress/kendo-listbox-vue-wrapper';
```

To summarize the above, to initialize a Wrapper component you need two imports per component:
1. One that adds the specific component-related code part of the `@progress/kendo-ui package`
1. Second that adds the component itself from the `specific Wrapper component package`

### Importing jQuery to Your Vite Project

Together with the `@progress/kendo-ui` package, the `jQuery` library is the second must-have thing to load a Kendo UI for Vue Wrapper component.

To load the jQuery library you need to configure the **vite.config.js** file of your project by providing the `viteCommonjs` plugin and injecting the `jQuery` library. Here is an example of a basic **vite.config.js** configuration needed to initialize a Kendo UI for Vue Wrapper component:

```js-no-run
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteCommonjs } from '@originjs/vite-plugin-commonjs';
import inject from '@rollup/plugin-inject'

export default defineConfig({
  plugins: [
    viteCommonjs(),
    vue(),
    inject({
      jQuery: 'jquery',
    }),
  ],
  optimizeDeps: {
    force: true,
    include: ["jquery"],
  }
})
```

## Suggested Links

* [Kendo UI Components for Vue](https://www.telerik.com/kendo-vue-ui/components/)
