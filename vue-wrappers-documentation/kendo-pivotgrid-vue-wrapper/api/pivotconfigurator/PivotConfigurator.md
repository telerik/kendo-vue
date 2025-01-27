---
title: PivotConfigurator API
description: "API Index | PivotConfigurator"
api_reference: true
slug: api_pivotconfiguratorcomponent
---

# PivotConfigurator

## Directive

`kendo-pivotconfigurator`

## Props

### data-source `Object`

The data source of the PivotConfigurator which is used to display values ([`dataSource` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/pivotconfigurator/configuration/datasource)).

You can set `data-source` to:

* A JavaScript object which represents any valid data source configuration.
* A JavaScript array.
* An existing `kendo.data.PivotDataSource` instance.

If the `dataSource` option is set to a JavaScript object or an array, the PivotConfigurator will initialize a new `kendo.data.PivotDataSource` instance by using that value as a data source configuration. If the `dataSource` option is an existing `kendo.data.PivotDataSource` instance, the PivotConfigurator will use that instance and will not initialize a new one.

### filterable `Boolean`

If `filterable` is set to `true`, the user will be able to filter the PivotConfigurator by using the **Field** menu ([`filterable` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/pivotconfigurator/configuration/filterable)).

### sortable `Boolean | Object`

If `sortable` is set to `true`, the user is able to sort the PivotConfigurator by clicking the **Dimension** fields ([`sortable` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/pivotconfigurator/configuration/sortable)). By default, sorting is disabled. Can be set to a JavaScript object which represents the sorting configuration. The supported composite props are available in [`SortableProps`]({% slug api_pivotconfigurator_sortableprops %}).

### height `Number | String`

The height of the PivotConfigurator ([`height` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/pivotconfigurator/configuration/height)). Numeric values are treated as pixels.

### messages `Object`

The text messages that are displayed in the **Fields** sections ([`messages` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/pivotconfigurator/configuration/messages)). The supported composite props are available in [`MessagesProps`]({% slug api_pivotconfigurator_messagesprops %}).

## Methods

For more details about the methods available in the component's API please check [its Kendo UI for jQuery API documentation](https://docs.telerik.com/kendo-ui/api/javascript/ui/pivotconfigurator#methods). 

### kendoWidget

##### returns

Returns the Kendo UI PivotConfigurator instance.
