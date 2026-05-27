---
title: Multi-row Selection
description: 'Get started with the Kendo UI for Vue Data Grid supporting selection of a single row or multiple rows.'
components: ["datagrid"]
slug: multi_row_selection_grid
position: 40
subject: Multi-row Selection feature of the Grid
tag: new
---

# Multi-row Selection

Multiple row selection can be enabled by setting [`enabled`](slug:api_grid_gridselectablesettings#enabled) prop of the [`GridSelectableSettings`](slug:api_grid_gridselectablesettings) to `true` and its [`mode`](slug:api_grid_gridselectablesettings#mode) prop to `multiple`.

The following example demonstrates multiple-row selection with enabled drag selection where the `select` state is handled internally by the Grid.

{% meta height:520 %}
{% embed_file selection/multi-row-selection/built-in/main.vue preview %}
{% embed_file selection/multi-row-selection/built-in/main.js %}
{% endmeta %}

## Multiple Checkbox Selection

The checkbox selection enables selection upon a checkbox click and implements a master checkbox in the header that selects and deselects all items.

1. Configure the [`GridSelectableSettings`](slug:api_grid_gridselectablesettings) as follows:

    ```html-no-run
    <Grid
        :selectable="{
            enabled: true,
            drag: false,
            cell: false,
            mode: 'multiple'
        }"
    >
    ```

1. Handle the [`GridSelectionChangeEvent`]({% slug api_grid_gridselectionchangeevent %}) and the [`onHeaderSelectionChange`]({% slug api_grid_gridheaderselectionchangeevent %}) events which will be fired once the user clicks a checkbox.
1. Update the built-in `select` in the events handled above.

The following example demonstrates how to implement multiple selection both on row click and with checkboxes.

{% meta height:470 %}
{% embed_file selection/multiple-checkboxes/main.vue preview %}
{% embed_file selection/multiple-checkboxes/main.js %}
{% endmeta %}

## Combining Selection with Data Operations (filtering, sorting, paging, etc.)

The following example demonstrates how to integrate checkbox selection with enabled grouping, filtering, sorting and paging. The main idea is to apply the selected state to the dataItems before or after processing the filter, group, and sort expressions.

{% meta height:550 %}
{% embed_file selection/data-operations/main.vue preview %}
{% embed_file selection/data-operations/main.js %}
{% endmeta %}

## Persisting Multiple Rows Selection

To persist the selection state and restore it later, follow these steps:

1. Set the [`selectable`](slug:api_grid_gridprops#selectable) option.
2. Store the selection object in `localStorage`.

{% meta height:530 %}
{% embed_file selection/multi-row-selection/persisting-selection/main.vue preview %}
{% embed_file selection/multi-row-selection/persisting-selection/main.js %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Grid]({% slug api_grid_gridprops %})
-   [API Index of the Grid]({% slug api_grid %})
