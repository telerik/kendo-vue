---
title: Vue 2 End of Support
page_title: "Kendo UI for Vue Native Components - Vue 2 End of Support in 2024"
description: "Kendo UI for Vue will end support for Vue 2 and Nuxt 2 in November, 2024. Learn how to make a smooth transition to Vue 3 and how the suite will evolve in the future"
slug: vue2-end-of-support
---


# Vue 2 End of Life
At Progress we are committed to staying at the forefront of technology, be compatible with the latest trends, and develop our products in sync with the lifecycle paths of the frameworks we support. Having the previous in mind, probably most of you know that[the official EOL(End of Life) support for Vue 2 is Dec 31, 2023](https://v2.vuejs.org/lts/). 

## Vue 2 and Nuxt 2 End of Support in Kendo UI for Vue
With the above in mind, we bid adieu to Vue 2 and Nuxt 2 support in November, 2024 to open up new opportunities and build future-proof products.

> With the official EOL of Vue 2, we also end its support in Kendo UI for Vue. We understand that transitions take time and will continue support of Vue 2 till November, 2024. In the meantime, it is business as usual - new functionality, bug fixes and support will be available for Vue 2.

## Why do We do it? 
While some of you may not be happy with the deprecation announcement, it is important to note that the official end of life of Vue 2 is a significant step forward for the framework itself, its community, and the Kendo UI for Vue suite. The deprecation of the Vue 2 support in the Kendo UI for Vue components will let us optimize the implementation of our components, focus the development efforts only on one version of Vue, diminish the introduction of bugs related to specific Vue 2 requirements and incompatibilities with Vue 3. 

## How does the Vue 2 Deprecation Affect Me? 
Except for the Vue 2 deprecation, everything with the Kendo UI for Vue suite continues to be the same. `If you are worried about the future of the Vue components, don’t be!` The development of the suite continues. Our components can be used both with the Options and Composition APIs, and support Nuxt 3. We are periodically testing our suite for compatibility with new trends in the Vue world. New components are on the horizon for 2024 and we continue our effort to keep the high levels of support satisfaction you are used to.  

## Should You Update to Vue 3? 

We recommend the upgrade from Vue 2 to Vue 3 for the following reasons:
* Vue 3 has better overall performance, compared to Vue 2.
* Vue 2 will no longer receive security updates after its EOL date.
* Migrating to Vue 3 will give you the freedom to add new tools and improvements to your projects in the future.
* The more you wait for the migration, the more complex, the migration will be in the future.
* The implementation of new features could be easier in Vue 3.
* If you need better Typescript support, Vue 3 is what you need.
* Vue 3 is already widely spread among the community, and everyone can find support online.


## FAQs - Vue 3 vs Vue 2 in the context of Kendo UI for Vue suite
* **Is the configuration of the Kendo UI for Vue components different in Vue 2 and Vue 3?**

    The short answer is `No`. The configuration of the Kendo UI for Vue components is similar for both Vue 2 and Vue 3 with very minor exceptions related to the use of Vue.set in some specific scenarios. In almost all of the cases, a Kendo UI for Vue component configured to work in Vue 2 will work the same way in Vue 3.
* **Will the Vue 2 components get updates, bug fixes and will new components be released for Vue2?** 
    
    New components, features, bug fixes, and component improvements released after our last release for 2024 will no longer support Vue 2. Everything released before the mentioned period will be available for both Vue 2 and Vue 3.

* **Will the Support Service answer Vue 2-related tickets?**
    
    Nothing will be changed in our support service until the end of 2024. After this milestone, we will be happy to give advices related to previous versions of our components, but, in general, after the deprecation date, all support questions raised in Vue 2 context, won’t be handled.

* **Transition period**
    * The transition period is not long enough - we know that part of you, our clients, still use Vue 2 and we are aware that you could have issues with the deprecation of Vue 2. We believe that one year for migration is enough time if planned in advance, and because of this, our support is one year longer than the official Vue 2 EOL.
    * Vue 2 and Vue 3 compatibility during the period - All Kendo UI for Vue packages released before the Vue 2 support depreciation date will support both Vue 2 and Vue 3. 
    * Support service - we will keep the ongoing support for both Vue 2 and Vue 3 during the transition period.
* **Do you really need to deprecate the Vue 2 support?**
    
    The deprecation of not supported product versions is a normal product lifecycle milestone. The depreciation of Vue 2 will let us be in sync with the latest innovations related to the Vue framework and thus provide better components and features in the future. 

## Migration Guide

Before starting the Vue 2 to Vue 3 migration process, we recommend you to check the following:

* [The official Vue 2 to Vue 3 Migration guide](https://v3-migration.vuejs.org/).
* [The official list of breaking changes between the two Vue versions](https://v3-migration.vuejs.org/breaking-changes/ ).

### Framework Requirements and Changes

Vue 3 has the following requirements/changes compared to Vue 2:
* **The build tool** - in Vue 3, the build tool is [Vite](https://vitejs.dev/) and while one can still use Vue CLI, Vite is the recommended one.
* **The state management** – Moved from VueX to [Pinia](https://pinia.vuejs.org/)
* **IDE Support** – now is [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) instead of Vetur
* **JSX support** - The `@vue/babel-preset-jsx` package should be changed with `@vue/babel-plugin-jsx`
* **There are new versions of Router, Devtools & test utils w/ Vue 3 support**

> If there is a topic related to the Vue 2 deprecation and how it affects the Kendo UI for Vue suite, that is not addressed above, please submit a support ticket and we will be happy to provide additional details


* [Getting Started with Kendo UI for Vue - JavaScript (Online Guide)](slug:getting_started_javascript_composition_api)
* [Getting Started with Kendo UI for Vue - TypeScript (Online Guide)](slug:getting_started_typescript_composition_api)
* [Getting Started with Kendo UI for Vue - JavaScript + Options API (Online Guide)](slug:getting_started_javascript_options_api)
* [Getting Started with Kendo UI for Vue - TypeScript + Options API (Online Guide)](slug:getting_started_typescript_options_api)
* [Getting Started with Kendo UI for Vue - Nuxt 3 (Online Guide)](slug:getting_started_nuxt_3)