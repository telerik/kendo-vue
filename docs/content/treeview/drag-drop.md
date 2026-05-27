---
title: Dragging and Dropping
description: "Use the drag-and-drop functionality of the Kendo UI for Vue Native TreeView in Vue projects."
slug: dragdrop_treeview
position: 7
---

# Dragging and Dropping

The drag-and-drop functionality enables the user to move the TreeView items by dragging and dropping them within a single tree or across multiple trees.

## Basics

To implement dragging and dropping in the TreeView:

1. Set the [`draggable`]({% slug api_treeview_treeviewprops %}#toc-draggable) property to `true`.
1. Handle the dispatched `drag` events.

To ease the event handling, the TreeView provides the following utilities:
* [The `moveTreeViewItem` function]({% slug api_treeview_movetreeviewitem %})&mdash;A helper function which moves a TreeView item in an immutable way.
* [The `TreeViewDragAnalyzer` class]({% slug api_treeview_treeviewdraganalyzer %})&mdash;An API for analyzing the `drag` events of the TreeView.
* [The `TreeViewDragClue` component]({% slug api_treeview_treeviewdragclue %})&mdash;A component which renders a clue when an item is dragged.

## Moving Items within a Single Tree

The following example demonstrates how to:
* Implement the drag-and-drop functionality within a single TreeView by using all drag-and-drop utilities.
* Update the `expanded` and `selected` item fields by using the [`processTreeViewItems`]({% slug api_treeview_processtreeviewitems %}) function.



{% meta height:480 %}
{% embed_file drag/single/main.vue preview %}
{% embed_file drag/single/main.js %}
{% endmeta %}


## Moving Items across Multiple Trees

The following example demonstrates how to:
* Implement the drag-and-drop functionality across two TreeViews by using all drag-and-drop utilities.
* Directly update the `expanded` and `selected` item fields.

{% meta height:600 %}
{% embed_file drag/multiple/main.vue preview %}
{% embed_file drag/multiple/main.js %}
{% endmeta %}

## Suggested Links

* [`moveTreeViewItem`]({% slug api_treeview_movetreeviewitem %})
* [`TreeViewDragAnalyzer`]({% slug api_treeview_treeviewdraganalyzer %})
* [`TreeViewDragClue`]({% slug api_treeview_treeviewdragclue %})
* [`onItemDragOver`]({% slug api_treeview_treeviewitemdragoverevent %})
* [`onItemDragEnd`]({% slug api_treeview_treeviewitemdragendevent %})
* [`processTreeViewItems`]({% slug api_treeview_processtreeviewitems %})
* [API Reference of the TreeView]({% slug api_treeview_treeviewprops %})
