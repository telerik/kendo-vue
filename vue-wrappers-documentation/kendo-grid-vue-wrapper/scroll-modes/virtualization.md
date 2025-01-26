---
title: Virtualization
page_title: Vue Grid Wrapper - Virtualization - Kendo UI for Vue
description: "Get started with the Vue Grid by Kendo UI and learn how to configure its virtualization functionality."
slug: virtualization_grid_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/grid/scroll-modes/#toc-virtual-scrolling/"
position: 2
---

<div><WrapperBanner link="/kendo-vue-ui/components/grid/scroll-modes/#toc-virtual-scrolling"></WrapperBanner></div>

# Virtualization

Virtual scrolling is an alternative to paging and optimizes the Kendo UI Grid wrapper for Vue performance when it displays huge volumes of data.

> To enable virtual scrolling in the native Vue Grid by Kendo UI, refer to the [native Vue Grid by Kendo UI documentation]({% slug scrollmmodes_grid %}#toc-virtual-scrolling).

To enable the virtualization, use the `scrollable->virtual` configuration option. As a result, the grid displays a vertical scrollbar for its content and renders only the number of items which are set through the `pageSize` property of its data source. When the user drags the scrollbar and exceeds the `pageSize`, the Kendo UI Data Grid wrapper for Vue makes automatic requests to retrieve and render the next set of rows. The virtual scrolling of the Grid works with both local and remote data.

The following example demonstrates how to apply virtual scrolling with local data.

{% meta height:660 %}
{% embed_file grid/scroll-modes/virtual/main.vue preview %}
{% embed_file grid/scroll-modes/virtual/main.js %}
{% endmeta %}

The following example demonstrates how to implement virtual scrolling with remote data.

{% meta height:660 %}
{% embed_file grid/scroll-modes/virtual-remote/main.vue preview %}
{% embed_file grid/scroll-modes/virtual-remote/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI Grid for jQuery](https://docs.telerik.com/kendo-ui/controls/data-management/grid/overview)
* [API Reference of the Grid Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid)
* [Virtual Scrolling in the Native Vue Grid by Kendo UI]({% slug scrollmmodes_grid %}#toc-virtual-scrolling)
