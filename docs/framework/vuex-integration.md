---
title: Vuex Integration
page_title: Vuex Integration - Kendo UI for Vue
description: "Learn how to integrate Kendo UI for Vue with Vuex."
slug: vuex_integration
use_runner: true
position: 4
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components"
toc: true
---

<WrapperBanner link="/kendo-vue-ui/components"></WrapperBanner>

# Vuex Integration

The reactivity of the Kendo UI for Vue wrapper components enables you to use them in combination with the [Vuex library](https://vuex.vuejs.org/guide/).

Out of the box, the Vue components by Kendo UI support the native Vue reactivity through the usage of their API methods. As a result, the Vuex library is able to automatically propagate changes to the Kendo UI components and to update them along with any data and state changes. This implementation logic makes the Kendo UI for Vue suite fully integrable within Vuex scenarios. As a result, you only have to sync the events of the components with the mutation feature in Vuex because Vuex Store does not provide an automation for linking an event with its corresponding state changes.

For the full comprehensive tutorial on using Kendo UI for Vue with Vuex in applications, refer to the [Get More Out of Vue and Kendo UI Using Vuex](https://www.telerik.com/blogs/get-more-out-of-vue-kendo-ui-using-vuex) blog post.

The following example is the output of the sample application available in [kendo-with-vuex](https://github.com/telerik/kendo-with-vuex) on GitHub and demonstrates how to use the Kendo UI Grid for Vue with Vuex.

<iframe src="https://telerik.github.io/kendo-with-vuex/#/customers-view" width="100%" height="800px" class="bf_frame_init" style="padding: 15px; background-color: white; border: 0px"></iframe>

## Suggested Links

* [Official Vue Loader Documentation](https://vue-loader.vuejs.org/)
* [Model Binding of the Kendo UI Wrappers for Vue](slug:modelbinding_wrappers_vue)
* [Getting Started with Kendo UI for Vue](slug:getting_started)
