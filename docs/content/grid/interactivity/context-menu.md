---
title: Context Menu
description: 'Get started with the Kendo UI for Vue Data Grid which supports a built-in Context Menu.'
slug: context_menu_grid
position: 30
tag: new
---

# Context Menu

The Kendo UI for Vue Data Grid enables you to display a context menu by using the built-in Context Menu component. The **onContextMenu** event is fired when grid cells are rendered and the context menu is triggered on a right click.

The built-in context menu of the Grid allows you to control the rows selection and the column sorting. To enable it you should:

1. Set the [`contextMenu`]({% slug api_grid_gridprops %}#contextMenu) prop of the Grid to `true` to enable the ContextMenu component.

1. Enable the [`selectable`]({% slug api_grid_gridprops %}#selectable) prop to allow rows selection.

1. (Optional) Set the [`sortable`]({% slug api_grid_gridprops %}#toc-sortable) prop to true to allow column sorting, and take care of the built-in `sort` state.

1. (Optional) Add a column with `columnType="checkbox"` to render a checkbox selection column.

```html
<Grid
    :context-menu="true"
    :sortable="true"
    :selectable="{ enabled: true }"
    :columns="columns"
>
</Grid>
```

You can see the default Context menu of the Grid in action in the demo below.

{% meta height:570 %}
{% embed_file context-menu-basic/main.vue preview %}
{% embed_file context-menu-basic/main.js %}
{% endmeta %}

## Cell Operations

The following example demonstrates how to copy cell's content to clipboard.

{% meta height:630 %}
{% embed_file context-menu-copy-cell/main.vue preview %}
{% embed_file context-menu-copy-cell/main.js %}
{% endmeta %}

## Suggested Links
- [Vue Data Grid Excel Export]({% slug exporting_grid %})
- [Vue Data Grid PDF Export]({% slug overview_pdfexport_grid %})
- [API Reference of the Grid]({% slug api_grid_gridprops %})
