---
title: Events
description: "Learn how to use the Kendo UI for Vue Native TreeView events"
slug: treeview_events
position: 79
---

# Events

This article provides details about the event available in the TreeView API.

## List of available TreeView events
* [TreeViewCheckChangeEvent]({% slug api_treeview_treeviewcheckchangeevent %}) - Triggered when a node in the TreeView is checked or unchecked.
* [TreeViewItemClickEvent]({% slug api_treeview_treeviewitemclickevent %}) - Triggered when a node in the TreeView is selected.
* [TreeViewExpandChangeEvent]({% slug api_treeview_treeviewexpandchangeevent %}) - Triggered when a parent node in the TreeView is expanded/collapsed.
* [TreeViewItemDragStartEvent]({% slug api_treeview_treeviewitemdragstartevent %}) - Triggered when a drag of node in the TreeView is started.
* [TreeViewItemDragEndEvent]({% slug api_treeview_treeviewitemdragendevent %}) - Triggered when a drag of node in the TreeView ends.
* [TreeViewItemDragOverEvent]({% slug api_treeview_treeviewitemdragoverevent %}) - Triggered when a node in the TreeView is dragged.

## CheckChange, ItemClick and ExpandChange events demo

The below example demonstrates the usage of the `TreeViewItemDragStartEvent`, `TreeViewItemDragEndEvent` and `TreeViewItemDragOverEvent` events.

{% meta height:560 %}
{% embed_file events/select-check/main.vue preview %}
{% embed_file events/select-check/Logger.vue %}
{% embed_file events/select-check/main.js %}
{% endmeta %}

## Dragging events demo

The below example demonstrates the usage of the `TreeViewCheckChangeEvent`, `TreeViewItemClickEvent` and `TreeViewExpandChangeEvent` events.

{% meta height:560 %}
{% embed_file events/drag/main.vue preview %}
{% embed_file events/drag/Logger.vue %}
{% embed_file events/drag/main.js %}
{% endmeta %}

## Suggested Links

* [Get Started with the TreeView]({% slug get_started_treeview %})
