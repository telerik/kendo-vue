---
title: draggableProps API
description: "API Index | draggableProps"
api_reference: true
slug: api_listbox_draggableprops_wrapper
---

# DraggableProps

### draggable-enabled `Boolean`

Indicates whether dragging is enabled.

### draggable-hint `Function | String | jQuery`

Provides an option to customize the draggable item hint. If the supplied value is a function, the function receives the jQuery object of the draggable element as a single argument. If `draggable-hint` is not provided, the ListBox clones the dragged item and uses it as a hint.

### draggable-placeholder `Function | String | jQuery`

Provides an option to customize the item placeholder of the ListBox. If the supplied value is a function, the function receives the jQuery object of the draggable element as a single argument. If `draggable-placeholder` is not provided, the ListBox clones the dragged item, removes its `id` attribute, sets its visibility to `hidden`, and uses it as a placeholder.

## Suggested Links

* [`Draggable` in Kendo UI ListBox for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/listbox/configuration/draggable)
