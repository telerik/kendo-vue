---
title: Row Reordering
page_title: Vue Grid - Row Reorder Using Cell Template - Kendo UI Native DataGrid
description: "Learn how to implement row reorder in the Kendo UI for Vue Native Grid."
slug: rowreorder_grid
position: 20
---

# Row Reorder

The current article discussed how the rows of the Kendo UI for Vue Native Grid component can be reordered.

Two examples are provided below, each demonstrating a different approach to styling the line that indicates where a given row will be moved.
* [Use separate component to style the drop line](#toc-use-separate-component-to-style-the-drop-line-inside-the-grid), or
* [Use CSS to style the drop line](#toc-use-css-to-style-the-drop-line-inside-the-grid).

## Use separate component to style the drop line inside the Grid

The below example uses the `DragPointer` component to visualize where the moved row will be dropped.

{% meta height:590 %}
{% embed_file rowreorder/component/main.vue preview %}
{% embed_file rowreorder/component/CustomCell.vue %}
{% embed_file rowreorder/component/DragClue.vue %}
{% embed_file rowreorder/component/DragPointer.vue %}
{% embed_file rowreorder/component/common.js %}
{% embed_file rowreorder/component/main.js %}
{% endmeta %}


## Use CSS to style the drop line inside the Grid

The drop position of the moved Grid row in the below example is styled only with CSS. In the template of the `CustomCell` component there is the following Grid cell definition. Each of the `td` elements in the below code has a `tdClass` class that is used to visualize the drop line.

```jsx-no-run
<td :data-itemid="dataItem.ProductID" :class="tdClass">
    <span class="k-icon k-i-reorder"
            :style="{cursor: 'move'}">
    </span>
</td>

<td v-else :data-itemid="dataItem.ProductID" :class="tdClass">
{{ getNestedValue(field, dataItem) }}
</td>
```

The `tdClass` is a computed property controlled by `dropPosition` prop passed from the parent component.

{% meta height:590 %}
{% embed_file rowreorder/css/main.vue preview %}
{% embed_file rowreorder/css/CustomCell.vue %}
{% embed_file rowreorder/css/DragClue.vue %}
{% embed_file rowreorder/css/common.js %}
{% embed_file rowreorder/css/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the Grid]({% slug api_grid_gridprops %})
* [API Index of the Grid]({% slug api_grid %})
* [Grid - Drag and Drop Rows Between Two Grids]({% slug grid-drag-and-drop-rows-between-two-grids %})
* [Add Style to a Dragged Row in the Native Grid]({% slug grid-style-dragged-row-on-row-reorder %})
