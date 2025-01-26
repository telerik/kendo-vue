---
title: groupableProps API
description: "API Index | groupableProps"
api_reference: true
slug: api_grid_groupableprops_wrapper
---

# GroupableProps

### groupable-enabled `Boolean`

If `groupable-enabled` is set to `false`, grouping is disabled.

### groupable-show-footer `Boolean`

When `groupable-show-footer` is enabled, the group footer rows will remain visible when the corresponding group is collapsed.

### groupable-sort-compare `Function`

A JavaScript function for comparing the groups. `groupable-sort-compare` has the same signature as the `compare` function that is accepted by `Array.sort`. For more information, refer to the article on sorting items of the groups.

### groupable-sort-dir `String`

The sort order of the groups according to the group field.

The supported values are:

* `asc`&mdash;Ascending order.
* `desc`&mdash;Descending order.

### groupable-messages-empty `String`

The text which is displayed in the grouping drop area.

## Suggested Links

* [`Groupable` in Kendo UI Grid for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid/configuration/groupable)
