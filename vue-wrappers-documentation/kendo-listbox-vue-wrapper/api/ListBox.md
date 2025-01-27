---
title: ListBox API
description: "API Index | ListBox"
api_reference: true
slug: api_listboxcomponent_wrapper
---

# ListBox

## Directive

`kendo-listbox`

## Props

### auto-bind `Boolean`

If `auto-bind` is set to `false`, the ListBox will not bind to the data source during initialization ([`autoBind` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/listbox/configuration/autobind)). In this case, data binding will occur when the `change` event of the data source is fired. By default, the ListBox will bind to the data source that is specified in the configuration.

### connect-with `String`

The `id` of the target ListBox to which items from the source ListBox will be transferred and vice versa ([`connectWith` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/listbox/configuration/connectwith)). To transfer items from the target ListBox over its toolbar, set its `connectWith` option too.

### data-source `Object | Array`

The data source of the ListBox which is used for rendering the ListBox items ([`dataSource` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/listbox/configuration/datasource)).

You can set `data-source` to:

* A JavaScript object which represents any valid data source configuration.
* A JavaScript array.
* An existing `kendo.data.DataSource` instance.

If the `dataSource` option is set to a JavaScript object or an array, the ListBox will initialize a new `kendo.data.DataSource` instance by using that value as a data source configuration. If the `dataSource` option is an existing `kendo.data.DataSource` instance, the ListBox will use that instance and will not initialize a new one.

### data-text-field `String`

The field of the data item that provides the text content of the list items ([`dataTextField` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/listbox/configuration/datatextfield)). Based on this field, the ListBox filters the data source.

### data-value-field `String`

The field of the data item that provides the value of the ListBox ([`dataValueField` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/listbox/configuration/datavaluefield)).

### draggable `Boolean | Object`

Indicates whether the ListBox items can be dragged and dropped ([`draggable` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/listbox/configuration/draggable)). The supported composite props are available in [`DraggableProps`]({% slug api_listbox_draggableprops_wrapper %}).

### drop-sources `Array`

An array of `id` strings which determines the ListBoxes that can drag and drop their items to the current ListBox ([`dropSources` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/listbox/configuration/dropsources)). The `drop-sources` option describes a one-way relationship. To establish a two-way connection, then set the `dropSources` option on both ListBoxes.

### navigatable `Boolean`

Indicates whether the keyboard navigation is enabled or disabled ([`navigatable` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/listbox/configuration/navigatable)).

### messages `Object`

The localization texts for the ListBox ([`messages` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/listbox/configuration/messages)). Used primarily for localization. The supported composite props are available in [`MessagesProps`]({% slug api_listbox_messagesprops_wrapper %}).

### selectable `String`

Indicates whether the selection is single or multiple ([`selectable` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/listbox/configuration/selectable)).

The supported values are:

* `single`&mdash;A single-item selection.
* `multiple`&mdash;A multiple-item selection.

### template `String | Function`

The item template of the ListBox ([`template` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/listbox/configuration/template)).

### toolbar `Object`

The settings for displaying the toolbar of the ListBox ([`toolbar` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/listbox/configuration/toolbar)). The toolbar allows you to execute a set of predefined actions. By default, the toolbar is not displayed. If the tools array is populated, then the toolbar and the corresponding tools are displayed. The supported composite props are available in [`ToolbarProps`]({% slug api_listbox_toolbarprops_wrapper %}).

## Events

### add: `Function`

Fires before an item is added to the ListBox ([`add` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/listbox/events/add)). The function context of the event handler (available through the `this` keyword) that will be set to the ListBox instance.

### change: `Function`

Fires when the ListBox selection was changed ([`change` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/listbox/events/change)). The function context of the event handler (available through the `this` keyword) that will be set to the ListBox instance.

### databound: `Function`

Fires when the ListBox received data from the data source and is already rendered ([`dataBound` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/listbox/events/databound)). The function context of the event handler (available through the `this` keyword) that will be set to the ListBox instance.

### dragstart: `Function`

Fires when the dragging of the ListBox items starts ([`dragStart` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/listbox/events/dragstart)).

### drag: `Function`

Fires when the placeholder of the ListBox changes its position ([`drag` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/listbox/events/drag)).

### drop: `Function`

Fires when a ListBox item is dropped over one of the drop targets ([`drop` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/listbox/events/drop)).

### dragend: `Function`

Fires when the dragging of the item ends and before its position is changed in the DOM ([`dragEnd` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/listbox/events/dragend)).

### remove: `Function`

Fires before an item is removed from the ListBox ([`remove` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/listbox/events/remove)). The function context of the event handler (available through the `this` keyword) that will be set to the ListBox instance.

### reorder: `Function`

Fires when ListBox items are reordered ([`reorder` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/listbox/events/reorder)).

## Methods

For more details about the methods available in the component's API please check [its Kendo UI for jQuery API documentation](https://docs.telerik.com/kendo-ui/api/javascript/ui/listbox#methods). 

### kendoWidget

##### returns

Returns the Kendo UI ListBox instance.
