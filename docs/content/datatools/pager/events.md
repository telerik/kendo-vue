---
title: Events
page_title: Kendo UI for Vue Native Pager Component Events | Kendo UI for Vue Native
description: "Get started with the Kendo UI for Vue Native Pager component and use its events in Vue projects."
slug: pager_events
position: 30
---
# Events

The Pager emits [`pageChange`]({% slug api_data-tools_pagechangeevent %}) and [`pageSizeChange`]({% slug api_data-tools_pagerprops %}#toc-pagesizechange) events.

## Handling the Events

To process the data when the Pager current page is changed, handle the [`pageChange`]({% slug api_data-tools_pagechangeevent %}) event that exposes the `skip` and `take` values, necessary for obtaining the desired items.

The [`pageSizeChange`]({% slug api_data-tools_pagerprops %}#toc-pagesizechange) event is triggered when selecting a new value from the PageSizes dropdown.

{% meta height:350 %}
{% embed_file pager/events/handling/main.vue preview %}
{% embed_file pager/events/handling/main.js %}
{% endmeta %}

## Preventing the PageSizeChange Event

In some scenarios it may prove useful to prevent the Pager [`pageSizeChange` event]({% slug api_data-tools_pagerprops %}#toc-pagesizechange), and perform some custom logic.

The following example demonstrates how to open a confirmation dialog when the page size is greater than some arbitrary value, set by the developer, as displaying so many items could cause performance issues.

{% meta height:300 %}
{% embed_file pager/events/prevent/main.vue preview %}
{% embed_file pager/events/prevent/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the Pager Props]({% slug api_data-tools_pagerprops %})
