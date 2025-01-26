---
title: ListView API
description: "API Index | ListView"
api_reference: true
slug: api_listviewcomponent_wrapper
---

# ListView

## Directive

`kendo-listview`

## Props

### auto-bind `Boolean`

If `auto-bind` is set to `false`, the ListView will not bind to the data source during initialization ([`autoBind` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/listview/configuration/autobind)). In this case, data binding will occur when the `change` event of the data source is fired. By default, the ListView will bind to the data source that is specified in the configuration.

### data-source `Object | Array`

The data source of the ListView for rendering the table rows ([`dataSource` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/listview/configuration/datasource)).

You can set `data-source` to:

* A JavaScript object which represents any valid data source configuration.
* A JavaScript array.
* An existing `kendo.data.DataSource` instance.

If the `dataSource` option is set to a JavaScript object or an array, the ListView will initialize a new `kendo.data.DataSource` instance by using that value as a data source configuration. If the `dataSource` option is an existing `kendo.data.DataSource` instance, the ListView will use that instance and will not initialize a new one.

### edit-template `Function`

The template for the ListView items in the edit mode ([`editTemplate` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/listview/configuration/edittemplate)).

### navigatable `Boolean`

Indicates whether the keyboard navigation is enabled or disabled ([`navigatable` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/listview/configuration/navigatable)).

### selectable `Boolean | String`

Indicates whether the selection is enabled or disabled ([`selectable` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/listview/configuration/selectable)).

### template `Function`

The template for the ListView items ([`template` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/listview/configuration/template)).

### alt-template `Function`

The template for rendering the alternate items in the ListView ([`altTemplate` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/listview/configuration/alttemplate)).

## Events

### cancel: `Function`

Fires when the user clicks the **Cancel** button ([`cancel` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/listview/events/cancel)). The event handler function context (available through the `this` keyword) will be set to the ListView instance.

### change: `Function`

Fires when the selection of the ListView changes ([`change` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/listview/events/change)). The event handler function context (available through the `this` keyword) will be set to the ListView instance.

### databound: `Function`

Fires when the ListView received data from the DataSource when it is already rendered ([`dataBound` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/listview/events/databound)). The event handler function context (available through the `this` keyword) will be set to the ListView instance.

### databinding: `Function`

Fires when the ListView is about to be bound ([`dataBinding` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/listview/events/databinding)). The event handler function context (available through the `this` keyword) will be set to the ListView instance.

### edit: `Function`

Fires when the ListView enters the edit mode ([`edit` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/listview/events/edit)). The event handler function context (available through the `this` keyword) will be set to the ListView instance.

### remove: `Function`

Fires before the list view item is put in the edit mode ([`remove` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/listview/events/remove)). If the event is not prevented, the ListView will call the DataSource sync method.The event handler function context (available through the `this` keyword) will be set to the ListView instance.

### save: `Function`

Fires when a data item is saved ([`save` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/listview/events/save)). The event handler function context (available through the `this` keyword) will be set to the ListView instance.

## Methods

For more details about the methods available in the component's API please check [its Kendo UI for jQuery API documentation](https://docs.telerik.com/kendo-ui/api/javascript/ui/listview#methods). 

### kendoWidget

##### returns

Returns the Kendo UI ListView instance.
