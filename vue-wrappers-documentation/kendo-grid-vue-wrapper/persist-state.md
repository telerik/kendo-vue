---
title: Persisting the State
page_title: Vue Grid Wrapper - Persisting the State - Kendo UI for Vue
description: "Get started with the Vue Grid by Kendo UI and learn how to persist its current state."
slug: persist_state_grid_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/grid/"
position: 12
---

<div><WrapperBanner link="/kendo-vue-ui/components/grid"></WrapperBanner></div>

# Persisting the State

You can save the customizations and settings of the user and then restore them when the user logs back later on.

The Kendo UI Grid wrapper for Vue enables you to save and restore the settings that were previously applied to its structure by using the `getOptions()` and `setOptions()` methods from its API. These methods allow you to serialize the current state of the Grid when needed and recover it at a certain point in time. The following example demonstrates how to use the `localStorage` key/value pair to save and load the Kendo UI Data Grid wrapper for Vue settings.

{% meta height:660 %}
{% embed_file grid/persist/main.vue preview %}
{% embed_file grid/persist/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI Grid for jQuery](https://docs.telerik.com/kendo-ui/controls/data-management/grid/overview)
* [API Reference of the Grid Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid)
