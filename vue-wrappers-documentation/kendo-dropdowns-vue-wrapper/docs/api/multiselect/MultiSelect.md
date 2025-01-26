---
title: MultiSelect API
description: "API Index | MultiSelect"
api_reference: true
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/dropdowns/api/MultiSelectProps/"
slug: api_multiselectcomponent_wrapper
---


# MultiSelect

## Directive

`kendo-multiselect`

## Props

### animation `Boolean | Object`

Configures the opening and closing animations of the suggestion popup ([`animation` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/multiselect/configuration/animation)). Setting the `animation` option to `false` disables the opening and closing animations. As a result, the suggestion popup will open and close instantly. The supported composite props are available in [`AnimationProps`]({% slug api_multiselect_animationprops_wrapper %}).

### auto-bind `Boolean`

Defines whether to bind the widget to the data source upon its initialization ([`autoBind` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/multiselect/configuration/autobind)).

### auto-close `Boolean`

Indicates whether to close the suggestion list on item selection ([`autoClose` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/multiselect/configuration/autoclose)).

### auto-width `Boolean`

If `auto-width` is set to `true`, the MultiSelect automatically adjusts the width of the popup element and does not wrap up the item label ([`autoWidth` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/multiselect/configuration/autowidth)).

### clear-button `Boolean`

If `clear-button` is set to `true`, the MultiSelect renders a button on hover over the widget ([`clearButton` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/multiselect/configuration/clearbutton)). Clicking that button resets the value of the AutoComplete and triggers the `change` event.

### data-source `Object | Array`

The data source of the MultiSelect which is used to display a list of values ([`dataSource` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/multiselect/configuration/datasource)).

The supported values are:

* A JavaScript object which represents any valid data source configuration.
* A JavaScript array.
* An existing `kendo.data.DataSource` instance.

If the `dataSource` option is set to a JavaScript object or an array, the MultiSelect initializes a new `kendo.data.DataSource` instance by using that value as the data source configuration. If the `dataSource` option is an existing `kendo.data.DataSource` instance, the MultiSelect uses that instance and will not initialize a new one.

### data-text-field `String`

The field of the data item which provides the text content of the list items ([`dataTextField` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/multiselect/configuration/datatextfield)). Based on the data-text filed, the MultiSelect filters its data source.

### data-value-field `String`

The field of the data item that provides the value of the widget ([`dataValueField` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/multiselect/configuration/datavaluefield)).

### delay `Number`

The delay (in milliseconds) before the MultiSelect starts to filter its data source ([`delay` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/multiselect/configuration/delay)).

### enable `Boolean`

If `enable` is set to `false`, the MultiSelect will be disabled and will prevent user input ([`enable` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/multiselect/configuration/enable)). By default, the MultiSelect is enabled and allows user input.

### enforce-min-length `Boolean`

If `enforce-min-length` is set to `true`, the MultiSelect will hide part of its items when the text of the search input is cleared ([`enforceMinLength` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/multiselect/configuration/enforceminlength)). By default, the AutoComplete shows all items when the text of the search input is cleared. Works together with `minLength`.

### filter `String`

Determines the suggestions for the current value ([`filter` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/multiselect/configuration/filter)). By default, filtering is disabled and can be performed over string values only&mdash;the data has to be an array of strings or configured in the `dataTextField` option.

The supported filter values are:

* `startswith`
* `endswith`
* `contains`

### fixed-group-template `String | Function`

The template for rendering the fixed header group ([`fixedGroupTemplate` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/multiselect/configuration/fixedgrouptemplate)). By default, the MultiSelect displays only the value of the current group.

### footer-template `String | Function`

The template for rendering the footer template ([`footerTemplate` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/multiselect/configuration/footertemplate)). Receives the MultiSelect itself as part of the data argument. The fields of the MultiSelect have to be used directly in the template.

### group-template `String | Function`

The template for rendering the groups ([`groupTemplate` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/multiselect/configuration/grouptemplate)). By default, the MultiSelect displays only the value of the group.

### height `Number`

The height (in pixels) of the suggestion popup ([`height` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/multiselect/configuration/height)). Defaults to 200px.

### highlight-first `Boolean`

If `highlight-first` is set to `true`, the first suggestion will be automatically highlighted ([`highlightFirst` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/multiselect/configuration/highlightfirst)).

### ignore-case `Boolean`

If `ignore-case` is set to `false`, the performed search for finding suggestions will be case-sensitive ([`ignoreCase` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/multiselect/configuration/ignorecase)). By default, the MultiSelect performs case-insensitive search.

### min-length `Number`

The minimum number of characters which the user must type before a search is performed ([`minLength` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/multiselect/configuration/minlength)). If you set `min-length` to a value higher than one, the search might match too many items. If you set a zero value, the MultiSelect will make a request as soon as the user focuses the widget.

### max-selected-items `Number`

Defines the limit of the selected items ([`maxSelectedItems` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/multiselect/configuration/maxselecteditems). If `max-selected-items` is set to `null`, the widget will not limit number of the selected items.

### no-data-template `String | Function`

The template for rendering the no-data template which is displayed if no results are found or if the underlying data source is empty ([`noDataTemplate` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/multiselect/configuration/nodatatemplate)). The no-data template receives the widget itself as part of the data argument. The template will be evaluated each time `databound` is triggered.

### placeholder `String`

The hint which is displayed when the widget is empty ([`placeholder` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/multiselect/configuration/placeholder)). By default, `placeholder` is not set.

### popup `Object`

The options for initializing the popup ([`popup` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/multiselect/configuration/popup)). The supported composite props are available in [`PopupProps`]({% slug api_multiselect_popupprops_wrapper %}).

### header-template `String | Function`

Specifies static HTML content which will be rendered as a header of the popup element ([`headerTemplate` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/multiselect/configuration/headertemplate)).

### item-template `String | Function`

The template for rendering the items in the popup list ([`itemTemplate` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/multiselect/configuration/itemtemplate)).

### tag-template `String | Function`

The template for rendering the tags ([`tagTemplate` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/multiselect/configuration/tagtemplate)).

### tag-mode `String`

The mode for rendering the selected tags ([`tagMode` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/multiselect/configuration/tagmode)).

The supported modes are:

* `multiple`&mdash;Renders a tag for every selected value.
* `single`&mdash;Renders only one tag that shows the number of the selected values.

### value `Array`

The value of the widget ([`value` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/multiselect/configuration/value)).

### value-primitive `Boolean`

Specifies the value-binding behavior for the widget when the initial model value is `null` ([`valuePrimitive` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/multiselect/configuration/valueprimitive)).

* If `value-primitive` is set to `true`, the `View-Model` field is updated with the selected item text field.
* If `value-primitive` is set to `false`, the `View-Model` field is updated with the selected item.

### virtual `Boolean | Object`

Enables the virtualization feature of the widget ([`virtual` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/multiselect/configuration/virtual)). You can set `virtual` to an object which contains the `itemHeight` and `valueMapper` properties. For more information, refer to the article on virtualization. The supported composite props are available in [`VirtualProps`]({% slug api_multiselect_virtualprops_wrapper %}).

## Events

### change: `Function`

Fires when the user changes the value of the widget ([`change` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/multiselect/events/change)). The event handler function context (available through the this keyword) will be set to the MultiSelect instance.

### close: `Function`

Fires when the user closes the popup of the widget ([`close` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/multiselect/events/close)). The event handler function context (available through the this keyword) will be set to the MultiSelect instance.

### databound: `Function`

Fires when the widget is bound to data from its data source ([`dataBound` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/multiselect/events/databound)). The event handler function context (available through the this keyword) will be set to the MultiSelect instance.

### filtering: `Function`

Fires when the widget is about to filter the data source ([`filtering` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/multiselect/events/filtering)). The event handler function context (available through the this keyword) will be set to the MultiSelect instance.

### open: `Function`

Fires when the user opens the popup of the widget ([`open` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/multiselect/events/open)). The event handler function context (available through the this keyword) will be set to the MultiSelect instance.

### select: `Function`

Fires when the user selects an item from the popup ([`select` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/multiselect/events/select)).

### deselect: `Function`

Fires when the user deselects an item or removes a tag ([`deselect` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/multiselect/events/deselect)).

## Methods

For more details about the methods available in the component's API please check [its Kendo UI for jQuery API documentation](https://docs.telerik.com/kendo-ui/api/javascript/ui/multiselect#methods). 

### kendoWidget

##### returns

Returns the Kendo UI MultiSelect instance.
