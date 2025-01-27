---
title: virtualProps API
description: "API Index | virtualProps"
api_reference: true
slug: api_multiselect_virtualprops_wrapper
---

# VirtualProps

### virtual-item-height `Number`

The height of the virtual item. All items in the virtualized list must have the same height. If `virtual-item-height` is not specified, the framework will automatically set `itemHeight` based on the current theme and font size.

### virtual-map-value-to `String`

As of the Kendo UI R3 2016 release, you can determine if the `valueMapper` will resolve a value to an index or to a data item by using the `mapValueTo` option.

The supported values by `mapValueTo` are:

* (Default) `index`&mdash;Does not affect the current virtualization process. For more information, refer to the article on virtualization.
* `dataItem`

### virtual-value-mapper `Function`

The MultiSelect calls the `valueMapper` function when it receives a value which is not fetched from the remote server yet. The MultiSelect will then pass the selected values in the `valueMapper` function and, in turn, the `valueMapper` implementation will return the indices of the respective data items.

> As of the Kendo UI R3 2016 release, the implementation of the `valueMapper` function is optional and is only required if the MultiSelect contains an initial value or uses the `value` method.

## Suggested Links

* [`Virtual` in Kendo UI MultiSelect for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/multiselect/configuration/virtual)
