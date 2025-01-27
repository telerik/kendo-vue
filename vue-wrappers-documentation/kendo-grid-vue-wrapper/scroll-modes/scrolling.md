---
title: Scrolling Basics
page_title: Vue Grid Wrapper - Scrolling Basics - Kendo UI for Vue
description: "Get started with the Vue Grid by Kendo UI and learn how to configure its scrolling functionality."
slug: scrolling_grid_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/grid/scroll-modes/"
position: 1
---

<div><WrapperBanner link="/kendo-vue-ui/components/grid/scroll-modes"></WrapperBanner></div>

# Scrolling Basics

The available scrolling modes of the Kendo UI Grid wrapper for Vue allow you to optimize its performance.

> To configure the scrolling functionality of the native Vue Grid by Kendo UI, refer to the [native Vue Grid by Kendo UI documentation]({% slug scrollmmodes_grid %}).

## Endless Scrolling

The endless scrolling functionality enables the Kendo UI Data Grid wrapper for Vue to display large amounts of data by appending additional pages of data on demand. The loading of new items happens when the scrollbar of the Grid reaches its end. When the data is returned, only the new items are rendered and appended to the old ones. The endless scrolling of the Grid works with both local and remote data.
When you use endless scrolling with local data, all the data is serialized on the client and when the user scrolls to the end, the Grid displays the new items.

The endless scrolling is compatible with the grouping, hierarchy, and editing features of the Grid.

The following example demonstrates how to implement endless scrolling of local data.

{% meta height:660 %}
{% embed_file grid/scroll-modes/basic/main.vue preview %}
{% embed_file grid/scroll-modes/basic/main.js %}
{% endmeta %}

The following example demonstrates how to integrate endless scrolling with remote data.

{% meta height:660 %}
{% embed_file grid/scroll-modes/endless/main.vue %}
{% embed_file grid/scroll-modes/endless/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI Grid for jQuery](https://docs.telerik.com/kendo-ui/controls/data-management/grid/overview)
* [API Reference of the Grid Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid)
* [Scrolling in the Native Vue Grid by Kendo UI]({% slug scrollmmodes_grid %})
