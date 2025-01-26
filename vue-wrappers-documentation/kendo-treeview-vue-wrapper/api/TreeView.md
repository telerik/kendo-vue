---
title: TreeView API
description: "API Index | TreeView"
api_reference: true
slug: api_treeviewcomponent_wrapper
---

# TreeView

## Directive

`kendo-treeview`

## Child Components

* [`kendo-treeview-item`]({% slug api_treeviewitemcomponent_wrapper %})

## Props

### animation `Boolean | Object`

A collection of visual animations that are displayed when TreeView items are expanded or collapsed through user interaction ([`animation` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/treeview/configuration/animation)). Setting `animation` to `false` disables all animations. The supported composite props are available in [`AnimationProps`]({% slug api_treeview_animationprops_wrapper %}).

### auto-bind `Boolean`

If `auto-bind` is set to `false`, the TreeView will not bind to the data source during initialization ([`autoBind` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/treeview/configuration/autobind)). In such scenarios data binding will occur when the `change` event of the `dataSource` instance is fired. By default, `auto-bind` is set to `true` and the TreeView will bind to the data source that is specified in the configuration.

### auto-scroll `Boolean`

If `auto-scroll` is set to `true`, the TreeView will automatically scroll the containing element when the mouse or user finger is close to its top or bottom ([`autoScroll` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/treeview/configuration/autoscroll)).

### checkboxes `Boolean | Object`

If `checkboxes` is set to `true` or to an object, the TreeView renders checkboxes next to each node ([`checkboxes` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/treeview/configuration/checkboxes)). The supported composite props are available in [`CheckboxesProps`]({% slug api_treeview_checkboxesprops_wrapper %}).

### data-image-url-field `String`

The field of the data item that provides the image URL of the TreeView nodes ([`dataImageUrlField` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/treeview/configuration/dataimageurlfield)).

### data-source `Object | Array`

The data source of the TreeView for rendering the nodes ([`dataSource` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/treeview/configuration/datasource)).

You can set `data-source` to:

* A JavaScript object which represents any valid data source configuration.
* A JavaScript array.
* An existing `kendo.data.HierarchicalDataSource` instance.

If the `dataSource` option is set to a JavaScript object or an array, the TreeView will initialize a new `kendo.data.HierarchicalDataSource` instance by using that value as a data source configuration. If the `dataSource` option is an existing `kendo.data.HierarchicalDataSource` instance, the TreeView will use that instance and will not initialize a new one.

### data-sprite-css-class-field `String`

The field of the data item that provides the sprite CSS class of the nodes ([`dataSpriteCssClassField` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/treeview/configuration/dataspritecssclassfield)). If `data-sprite-css-class-field` is set to an array, each level uses either the field which is at the same index in the array or the last item in the array.

### data-text-field `String | Array`

The field of the data item that provides the textual content of the nodes ([`dataTextField` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/treeview/configuration/datatextfield)). If `data-text-field` is set to an array, each level either uses the field which is at the same index in the array or the last item in the array.

### data-url-field `String`

The field of the data item that provides the URL of the node links ([`dataUrlField` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/treeview/configuration/dataurlfield)).

### drag-and-drop `Boolean`

If `drag-and-drop` is set to `false`, the dragging and dropping of the nodes is disabled ([`dragAndDrop` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/treeview/configuration/draganddrop)).

### load-on-demand `Boolean`

Indicates whether the child DataSources will be fetched lazily when the parent groups are expanded ([`loadOnDemand` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/treeview/configuration/loadondemand)). Setting `load-on-demand` to `false` loads all child DataSources at the time of initialization.

### messages `Object`

The text messages that are displayed in the TreeView ([`messages` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/treeview/configuration/messages)). Used for customization or localization of messages. The supported composite props are available in [`MessagesProps`]({% slug api_treeview_messagesprops_wrapper %}).

### template `String | Function`

The template for rendering each node ([`template` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/treeview/configuration/template)).

## Events

### change: `Function`

Fires when the selection was changed either by the user or through the `select` method ([`change` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/treeview/events/change)).

### check: `Function`

(Available in internal builds as of 2014.2.828) Fires after the user checked or unchecked a checkbox ([`check` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/treeview/events/check)). If `checkChildren` is set to `true`, the `check` event is triggered after all checked states are updated.

### collapse: `Function`

Fires before a subgroup gets collapsed ([`collapse` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/treeview/events/collapse)). Can be cancelled.

### databound: `Function`

Fires after the `change` event of the data source was processed by adding or removing items ([`dataBound` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/treeview/events/databound)).

### drag: `Function`

Fires while a node is being dragged ([`drag` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/treeview/events/drag)).

### dragend: `Function`

Fires after a node was dropped ([`dragEnd` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/treeview/events/dragend)).

### dragstart: `Function`

Fires before the dragging of a node starts ([`dragStart` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/treeview/events/dragstart))

### drop: `Function`

Fires while a node is being dropped ([`drop` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/treeview/events/drop)).

### expand: `Function`

Fires before a subgroup is expanded ([`expand` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/treeview/events/expand)).

### navigate: `Function`

Fires when the user moves the focus to another node ([`navigate` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/treeview/events/navigate)).

### select: `Function`

Fires when a node is being selected by the user ([`select` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/treeview/events/select)). Can be cancelled.

## Methods

For more details about the methods available in the component's API please check [its Kendo UI for jQuery API documentation](https://docs.telerik.com/kendo-ui/api/javascript/ui/treeview#methods). 

### kendoWidget

##### returns

Returns the Kendo UI TreeView instance.
