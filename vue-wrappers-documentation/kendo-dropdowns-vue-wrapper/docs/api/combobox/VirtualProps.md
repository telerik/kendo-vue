---
title: virtualProps API
description: "API Index | virtualProps"
api_reference: true
slug: api_combobox_virtualprops_wrapper
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

The ComboBox calls the `valueMapper` function when it receives a value which is not fetched from the remote server yet. The ComboBox will then pass the selected values in the `valueMapper` function and, in turn, the `valueMapper` implementation will return the indices of the respective data items.

## Suggested Links

* [`Virtual` in Kendo UI ComboBox for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/combobox/configuration/virtual)
