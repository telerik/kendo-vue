---
title: Custom Templates
description: "Learn how to customize the content cells of the Kendo UI for Vue Native TreeList."
slug: cells_content_treelist
position: 70
---

# TreeList Custom Templates

The Kendo UI for Vue `Native TreeList` provides an option for customizing the content of its data cells by passing separate templates to each column.

## Getting Started

To define a cell template in the Native TreeList you should use its [`cell`]({% slug api_treelist_treelistcolumnprops %}#toc-cell) column property and pass a slot template name to it.

## Basic usage

The following example demonstrates how to define a custom cell template in the TreeList.

{% meta height:580 %}
{% embed_file cells-custom/main.vue preview %}
{% embed_file cells-custom/main.js %}
{% embed_file shared/data.js %}
{% endmeta %}

The above example uses two different `slot` templates that format and style the `Name` and `Full Time` columns. The two slot templates are defined as follows and demonstrate how you can customize both the regular TreeList columns and these that control the expanding/collapsing of its rows:
* Styling the `Name` column
```html
<template #zeroColumnCellTemplate="{ props }">
  <td
    :class="props.class"
    :colspan="props.colSpan"
    :aria-colindex="props['aria-colindex']"
    :aria-expanded="props['aria-expanded']"
    :aria-selected="props['aria-selected']"
    :role="props.role"
    :data-grid-col-index="props['data-grid-col-index']"
  >
    <span
      class="k-icon k-i-none"
      v-for="(iteration, index) in props.level.slice(1)"
    ></span>
    <span
      :class="[
        'k-icon',
        props['aria-expanded']
          ? 'k-i-chevron-down'
          : props.dataItem['employees']
          ? 'k-i-chevron-right'
          : '',
      ]"
      @click="
        onExpandChange({
          dataItem: props.dataItem,
          value: props['aria-expanded'],
        })
      "
      :data-prevent-selection="true"
    ></span>
    <b style="color: brown">{{ props.value }}</b>
  </td>
</template>
```
* Styling the `Full Time` column
```html
<template #myCellTemplate="{ props }">
  <td>
    <span
      :style="{
        color: props.value ? 'green' : 'red',
      }"
    >
      {{ props.value }}
    </span>
  </td>
</template>
```


## Suggested Links

* [API Reference of the TreeList]({% slug api_treelist_treelistprops %})
* [API Reference of the TreeListColumnProps]({% slug api_treelist_treelistcolumnprops %})
