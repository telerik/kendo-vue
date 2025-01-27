---
title: groupProps API
description: "API Index | groupProps"
api_reference: true
slug: api_datasource_groupprops
---

# GroupProps

### group-aggregates `String`

The aggregates which are calculated during grouping.

The supported aggregates are:

* `average`
* `count`
* `max`
* `min`
* `sum`

### group-compare `Function`

A JavaScript function for comparing the groups. For comparing the items of the group, refer to `sort.compare`. `group-compare` has the same signature as the `compare` function which is accepted by `Array.sort`.

### group-dir `String`

The sorting order of the group.

The supported values are:

* (Default) `asc`&mdash;Ascending order.
* `desc`&mdash;Descending order.

### group-field `String`

The data item field to group by.

## Suggested Links

* [`Group` in Kendo UI DataSource for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/data/datasource/configuration/group)
