---
title: DropDownTree API
description: "API Index | DropDownTree"
api_reference: true
slug: api_dropdowntreecomponent_wrapper
---

# DropDownTree

## Directive

`kendo-dropdowntree`

## Props

### animation `Boolean | Object`

Configures the opening and closing animations of the suggestion popup ([`animation` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdowntree/configuration/animation)). Setting the `animation` option to `false` disables the opening and closing animations. As a result, the suggestion popup will open and close instantly. The supported composite props are available in [`AnimationProps`]({% slug api_dropdowntree_animationprops_wrapper %}).

### auto-bind `Boolean`

Defines whether to bind the widget to the data source upon its initialization ([`autoBind` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdowntree/configuration/autobind)).

### auto-close `Boolean`

Defines whether to close the popup when the user selects or checks an item ([`autoClose` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdowntree/configuration/autoclose)).

### auto-width `Boolean`

If `auto-width` is set to `true`, the DropDownTree automatically adjusts the width of the popup element and does not wrap up the item label ([`autoWidth` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdowntree/configuration/autowidth)).

### check-all `Boolean`

If `check-all` is set to `true` and the checkboxes are enabled, a tri-state checkbox appears above the embedded tree-view ([`checkAll` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdowntree/configuration/checkall)). Clicking the checkbox checks or unchecks all enabled items of the tree-view that are loaded.

### check-all-template `String | Function`

The template for rendering the `checkAll` label ([`checkAllTemplate` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdowntree/configuration/checkalltemplate)). By default, the widget displays only a `span` element with **Check all** text in it.

### checkboxes `Boolean | Object`

If `checkboxes` is set to `true` or is an object, the DropDownTree renders the checkboxes next to each node ([`checkboxes` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdowntree/configuration/checkboxes)). The supported composite props are available in [`CheckboxesProps`]({% slug api_dropdowntree_checkboxesprops_wrapper %}).

### clear-button `Boolean`

If `clear-button` is set to `true`, the DropDownTree renders a button on hover over the widget ([`clearButton` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdowntree/configuration/clearbutton)). Clicking that button resets the value of the DropDownTree and triggers the `change` event.

### data-image-url-field `String`

Sets the field of the data item that provides the image URL of the DropDownTree nodes ([`dataImageUrlField` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdowntree/configuration/dataimageurlfield)).

### data-source `Object | Array`

The data source of the DropDownTree which is used to render the nodes ([`dataSource` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdowntree/configuration/datasource)).

The supported values are:

* A JavaScript object which represents any valid data source configuration.
* A JavaScript array.
* An existing `kendo.data.HierarchicalDataSource` instance.

If the `dataSource` option is set to a JavaScript object or an array, the DropDownTree initializes a new `kendo.data.HierarchicalDataSource` instance by using that value as the data source configuration. If the `dataSource` option is an existing `kendo.data.HierarchicalDataSource` instance, the DropDownTree uses that instance and will not initialize a new one.

### data-sprite-css-class-field `String`

The field of the data item that provides the sprite CSS class of the nodes ([`dataSpriteCssClassField` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdowntree/configuration/dataspritecssclassfield)). If `data-sprite-css-class-field` is an array, each level uses the field that is at the same index in the array or the last item in the array.

### data-text-field `String | Array`

The field of the data item which provides the text content of the nodes ([`dataTextField` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdowntree/configuration/datatextfield)). If `data-text-field` is an array, each level uses the field that is at the same index in the array or the last item in the array.

### data-url-field `String`

The field of the data item that provides the link URL of the nodes ([`dataUrlField` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdowntree/configuration/dataurlfield)).

### data-value-field `String | Array`

The field of the data item that provides the value of the widget ([`dataValueField` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdowntree/configuration/datavaluefield)). f `data-value-field` is an array, each level uses the field that is at the same index in the array or the last item in the array.

### delay `Number`

The delay (in milliseconds) after which the DropDownTree starts filtering its data source ([`delay` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdowntree/configuration/delay)).

### enable `Boolean`

If `enable` is set to `false`, the DropDownTree will be disabled and will prevent user input ([`enable` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdowntree/configuration/enable)). By default, the DropDownTree is enabled and allows user input.

### enforce-min-length `Boolean`

If `enforce-min-length` is set to `true`, the DropDownTree will hide part of its items when the text of the search input is cleared ([`enforceMinLength` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdowntree/configuration/enforceminlength)). By default, the DropDownTree shows all items when the text of the search input is cleared. Works together with `minLength`.

### filter `String`

Determines the suggestions for the current value ([`filter` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdowntree/configuration/filter)). By default, filtering is disabled and can be performed over string values only&mdash;the data has to be an array of strings or configured in the `dataTextField` option.

The supported filter values are:

* `startswith`
* `endswith`
* `contains`

### footer-template `String | Function`

The template for rendering the footer template ([`footerTemplate` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdowntree/configuration/footertemplate)). Receives the DropDownTree itself as part of the data argument. The fields of the DropDownTree have to be used directly in the template.

### height `String | Number`

The maximum height (in pixels) of the embedded tree-view ([`height` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdowntree/configuration/height)). Defaults to 200px. If `height` is set to `auto`, the height of the popup will depend on the height of the tree-view.

### ignore-case `Boolean`

If `ignore-case` is set to `false`, the performed search for finding suggestions will be case-sensitive ([`ignoreCase` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdowntree/configuration/ignorecase)). By default, the DropDownTree performs case-insensitive search.

### load-on-demand `Boolean`

Indicates whether the child data sources will be fetched lazily when parent groups are expanded ([`loadOnDemand` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdowntree/configuration/loadondemand)). Setting `load-on-demand` to `true` results in loading of the child data sources when
the parent node expands.

### messages `Object`

The text messages which are displayed in the widget and which are used for customizing and localizing the messages ([`messages` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdowntree/configuration/messages)). The supported composite props are available in [`VirtualProps`]({% slug api_dropdowntree_messagesprops_wrapper %}).

### min-length `Number`

The minimum number of characters which the user must type before a search is performed ([`minLength` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdowntree/configuration/minlength)). If you set `min-length` to a value higher than one, the search might match too many items.

### no-data-template `String | Function`

The template for rendering the no-data template which is displayed if no results are found or if the underlying data source is empty ([`noDataTemplate` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdowntree/configuration/nodatatemplate)). The no-data template receives the widget itself as part of the data argument. The template will be evaluated each time `databound` is triggered.

### placeholder `String`

The hint which is displayed when the widget is empty ([`placeholder` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdowntree/configuration/placeholder)). By default, `placeholder` is not set.

### popup `Object`

The options for initializing the popup ([`popup` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdowntree/configuration/popup)). The supported composite props are available in [`PopupProps`]({% slug api_dropdowntree_popupprops_wrapper %}).

### header-template `String | Function`

Specifies static HTML content which will be rendered as a header of the popup element ([`headerTemplate` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdowntree/configuration/headertemplate)).

### value-template `String | Function`

The template for rendering the value or the selected tags ([`valueTemplate` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdowntree/configuration/valuetemplate)).

### tag-mode `String`

The mode for rendering the selected tags when the checkboxes are enabled ([`tagMode` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdowntree/configuration/tagmode)).

The supported modes are:

* `multiple`&mdash;Renders a tag for every selected value.
* `single`&mdash;Renders only one tag that shows the number of the selected values.

### template `String | Function`

The template for rendering each node ([`template` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdowntree/configuration/template)).

### text `String`

The text of the widget which is used when `autoBind` is set to `false` ([`text` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdowntree/configuration/text)).

### value `String | Array`

The value of the widget ([`value` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdowntree/configuration/value)).

* When the DropDownTree is in the single selection mode, `value` accepts string values.
* When the DropDownTree is in the multiple selection mode that is enabled over the `checkboxes` property, `value` accepts an array.

### value-primitive `Boolean`

Specifies the value-binding behavior for the widget ([`valuePrimitive` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdowntree/configuration/valueprimitive)).

* If `value-primitive` is set to `true`, the `View-Model` field is updated with the selected item text field.
* If `value-primitive` is set to `false`, the `View-Model` field is updated with the selected item.

## Events

### change: `Function`

Fires when the user changes the value of the widget ([`change` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdowntree/events/change)). The event handler function context (available through the this keyword) will be set to the DropDownTree instance.

### close: `Function`

Fires when the user closes the suggestion popup of the widget ([`close` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdowntree/events/close)). The event handler function context (available through the this keyword) will be set to the DropDownTree instance.

### databound: `Function`

Fires when the widget is bound to data from its data source ([`dataBound` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdowntree/events/databound)). The event handler function context (available through the this keyword) will be set to the DropDownTree instance.

### filtering: `Function`

Fires when the widget is about to filter the data source ([`filtering` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdowntree/events/filtering)). The event handler function context (available through the this keyword) will be set to the DropDownTree instance.

### open: `Function`

Fires when the user opens the popup of the widget ([`open` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdowntree/events/open)). The event handler function context (available through the this keyword) will be set to the DropDownTree instance.

### select: `Function`

Fires when the user selects a node ([`select` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdowntree/events/select)). The event can be cancelled.

## Methods

For more details about the methods available in the component's API please check [its Kendo UI for jQuery API documentation](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdowntree#methods). 

### kendoWidget

##### returns

Returns the Kendo UI DropDownTree instance.
