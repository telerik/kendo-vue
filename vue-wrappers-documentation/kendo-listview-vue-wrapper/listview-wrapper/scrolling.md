---
title: Scrolling
page_title: Scrolling - ListView - Kendo UI for Vue
description: "Get started with the Vue ListView by Kendo UI and learn how to configure its scrolling functionality."
slug: scrolling_listview_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/listview/scroll-modes"
position: 5
---

<div><WrapperBanner link="/kendo-vue-ui/components/listview/scroll-modes"></WrapperBanner></div>

# Scrolling

By default, the scrolling functionality of the Kendo UI ListView is disabled.

To control scrolling in the ListView, use the `scrollable` property. If set to `true` and if the content of the ListView exceeds the its `height`, the wrapper will display a scrollbar.

The ListView provides the endless scrolling functionality and is able to display large amounts of data by appending additional pages of data on demand. The loading of the new items happens when the scrollbar of the ListView reaches its end. When the data is returned, only the new items are rendered and appended to the old ones.

The endless scrolling of the ListView works with both local and remote data. When you use endless scrolling with local data, all the data is serialized on the client and when the user scrolls to the end of the scrollbar, the ListView displays the new items.

The following example demonstrates how to implement endless scrolling with local data.

{% meta height:660 %}
{% embed_file listview/scrolling/basic/main.vue preview %}
{% embed_file listview/scrolling/basic/main.js %}
{% endmeta %}

The following example demonstrates how to integrate endless scrolling with remote data.

{% meta height:660 %}
{% embed_file listview/scrolling/endless/main.vue preview %}
{% embed_file listview/scrolling/endless/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI ListView for jQuery](https://docs.telerik.com/kendo-ui/controls/data-management/listview/overview)
* [API Reference of the ListView Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/listview)
