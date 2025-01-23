---
title: draggableProps API
description: "API Index | draggableProps"
api_reference: true
slug: api_window_draggableprops_wrapper
---

# DraggableProps

### draggable-containment `String | jQuery`

The element in which the Window will be able to move and to which is appended thus overriding the `appendTo` setting. Accepts either a selector or an element. The container element has to be positioned, that is, to have its `position` CSS attribute set to `relative`, `absolute`, or `fixed`.

### draggable-axis `String`

Constrains the dragging along the horizontal (`x`) or vertical (`y`) axis.

The supported values are:

* `x`
* `y`

### draggable-drag-handle `String`

Restricts the dragging of the window through the specified element which has to be part of the Window content. Accepts either a selector or an element.

## Suggested Links

* [`Draggable` in Kendo UI Window for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/window/configuration/draggable)
