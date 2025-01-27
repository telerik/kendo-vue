---
title: DropDownList API
description: "API Index | DropDownList"
api_reference: true
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/dropdowns/api/DropDownListProps/"
slug: api_dropdownlistcomponent_wrapper
---


# DropDownList

## Directive

`kendo-dropdownlist`

## Props

### animation `Boolean | Object`

Configures the opening and closing animations of the suggestion popup ([`animation` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdownlist/configuration/animation)). Setting the `animation` option to `false` disables the opening and closing animations. As a result, the suggestion popup will open and close instantly. The supported composite props are available in [`AnimationProps`]({% slug api_dropdownlist_animationprops_wrapper %}).

### auto-bind `Boolean`

Defines whether to bind the widget to the data source upon its initialization ([`autoBind` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdownlist/configuration/autobind)).

### auto-width `Boolean`

If `auto-width` is set to `true`, the DropDownList automatically adjusts the width of the popup element and does not wrap up the item label ([`autoWidth` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdownlist/configuration/autowidth)).

### cascade-from `String`

Sets the `id` of the parent DropDownList ([`cascadeFrom` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdownlist/configuration/cascadefrom)).

### cascade-from-field `String`

Defines the field for filtering the data source ([`cascadeFromField` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdownlist/configuration/cascadefromfield)). If `cascade-from-field` is not defined, the parent `dataValueField` option will be used.

### cascade-from-parent-field `String`

Defines the parent field for retaining the `from` value ([`cascadeFromParentField` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdownlist/configuration/cascadefromparentfield)). The value will also be used to filter the data source. If `cascade-from-parent-field` is not defined, the value from the parent `dataValueField` will be used.

### data-source `Object | Array`

The data source of the DropDownList which is used to display a list of values ([`dataSource` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdownlist/configuration/datasource)).

The supported values are:

* A JavaScript object which represents any valid data source configuration.
* A JavaScript array.
* An existing `kendo.data.DataSource` instance.

If the `dataSource` option is set to a JavaScript object or an array, the DropDownList initializes a new `kendo.data.DataSource` instance by using that value as the data source configuration. If the `dataSource` option is an existing `kendo.data.DataSource` instance, the DropDownList uses that instance and will not initialize a new one.

### data-text-field `String`

The field of the data item which provides the text content of the list items ([`dataTextField` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdownlist/configuration/datatextfield)). Based on the data-text filed, the DropDownList filters its data source.

### data-value-field `String`

The field of the data item that provides the value of the widget ([`dataValueField` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdownlist/configuration/datavaluefield)).

### delay `Number`

The delay (in milliseconds) before the search text typed by the user is cleared ([`delay` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdownlist/configuration/delay)).

### enable `Boolean`

If `enable` is set to `false`, the DropDownList will be disabled and will prevent user input ([`enable` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdownlist/configuration/enable)). By default, the DropDownList is enabled and allows user input.

### enforce-min-length `Boolean`

If `enforce-min-length` is set to `true`, the DropDownList will hide part of its items when the text of the search input is cleared ([`enforceMinLength` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdownlist/configuration/enforceminlength)). By default, the AutoComplete shows all items when the text of the search input is cleared. Works together with `minLength`.

### filter `String`

Determines the suggestions for the current value ([`filter` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdownlist/configuration/filter)). By default, filtering is disabled and can be performed over string values only&mdash;the data has to be an array of strings or configured in the `dataTextField` option.

The supported filter values are:

* `startswith`
* `endswith`
* `contains`

### fixed-group-template `String | Function`

The template for rendering the fixed header group ([`fixedGroupTemplate` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdownlist/configuration/fixedgrouptemplate)). By default, the DropDownList displays only the value of the current group.

### footer-template `String | Function`

The template for rendering the footer template ([`footerTemplate` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdownlist/configuration/footertemplate)). Receives the DropDownList itself as part of the data argument. The fields of the DropDownList have to be used directly in the template.

### group-template `String | Function`

The template for rendering the groups ([`groupTemplate` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdownlist/configuration/grouptemplate)). By default, the DropDownList displays only the value of the group.

### height `Number`

The height (in pixels) of the suggestion popup ([`height` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdownlist/configuration/height)). Defaults to 200px.

### ignore-case `Boolean`

If `ignore-case` is set to `false`, the performed search for finding suggestions will be case-sensitive ([`ignoreCase` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdownlist/configuration/ignorecase)). By default, the DropDownList performs case-insensitive search.

### index `Number`

The index of the initially selected item which is zero-based ([`index` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdownlist/configuration/index)).

### min-length `Number`

The minimum number of characters which the user must type before a search is performed ([`minLength` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdownlist/configuration/minlength)). If you set `min-length` to a value higher than one, the search might match too many items.

### no-data-template `String | Function`

The template for rendering the no-data template which is displayed if no results are found or if the underlying data source is empty ([`noDataTemplate` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdownlist/configuration/nodatatemplate)). The no-data template receives the widget itself as part of the data argument. The template will be evaluated each time `databound` is triggered.

### popup `Object`

The options for initializing the popup ([`popup` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdownlist/configuration/popup)). The supported composite props are available in [`PopupProps`]({% slug api_dropdownlist_popupprops_wrapper %}).

### option-label `String | Object`

Defines the text of the default empty item ([`optionLabel` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdownlist/configuration/optionlabel)). If the value of `option-label` is an object, then the widget will use it as any valid data item. If the widget is empty, the `optionLabel` is not available.

### option-label-template `String | Function`

The template for rendering the option label ([`optionLabelTemplate` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdownlist/configuration/optionlabeltemplate)).

### header-template `String | Function`

Specifies static HTML content which will be rendered as a header of the popup element ([`headerTemplate` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdownlist/configuration/headertemplate)).

### template `String | Function`

The template for rendering the items ([`template` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdownlist/configuration/template)). By default, the DropDownList displays only the text of the data item which is configured over `dataTextField`.

### value-template `String | Function`

The value template for rendering the selected value ([`valueTemplate` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdownlist/configuration/valuetemplate)). By default, the widget displays only the text of the data item which is configured over `dataTextField`.

### text `String`

The text of the widget which is used when the `autoBind` is set to `false` ([`text` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdownlist/configuration/text)).

### value `String`

The value of the widget ([`value` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdownlist/configuration/value)).

### value-primitive `Boolean`

Specifies the value-binding behavior for the widget when the initial model value is `null` ([`valuePrimitive` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdownlist/configuration/valueprimitive)).

* If `value-primitive` is set to `true`, the `View-Model` field is updated with the selected item text field.
* If `value-primitive` is set to `false`, the `View-Model` field is updated with the selected item.

### virtual `Boolean | Object`

Enables the virtualization feature of the widget ([`virtual` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdownlist/configuration/virtual)). You can set `virtual` to an object which contains the `itemHeight` and `valueMapper` properties. For more information, refer to the article on virtualization. The supported composite props are available in [`VirtualProps`]({% slug api_dropdownlist_virtualprops_wrapper %}).

## Events

### change: `Function`

Fires when the user changes the value of the widget ([`change` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdownlist/events/change)). As of 2015 Q3 SP1, a cascading DropDownList triggers the `change` event when its value is changed due to an update in the parent DropDownList. The event handler function context (available through the this keyword) will be set to the DropDownList instance.

### close: `Function`

Fires when the user closes the popup of the widget ([`close` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdownlist/events/close)). The event handler function context (available through the this keyword) will be set to the DropDownList instance.

### databound: `Function`

Fires when the widget is bound to data from its data source ([`dataBound` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdownlist/events/databound)). The event handler function context (available through the this keyword) will be set to the DropDownList instance.

### filtering: `Function`

Fires when the widget is about to filter the data source ([`filtering` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdownlist/events/filtering)). The event handler function context (available through the this keyword) will be set to the DropDownList instance.

### open: `Function`

Fires when the user opens the popup of the widget ([`open` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdownlist/events/open)). The event handler function context (available through the this keyword) will be set to the DropDownList instance.

### select: `Function`

Fires when the user selects an item from the popup ([`select` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdownlist/events/select)).

### cascade: `Function`

Fires when the value of the widget is changed over the API or by user interaction ([`cascade` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdownlist/events/cascade)).

## Methods

For more details about the methods available in the component's API please check [its Kendo UI for jQuery API documentation](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdownlist#methods). 

### kendoWidget

##### returns

Returns the Kendo UI DropDownList instance.
