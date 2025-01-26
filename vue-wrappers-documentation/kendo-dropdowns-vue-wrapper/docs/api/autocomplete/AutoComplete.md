---
title: AutoComplete API
description: "API Index | AutoComplete"
api_reference: true
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/dropdowns/api/AutoCompleteProps/"
slug: api_autocompletecomponent_wrapper
---

# AutoComplete

## Directive

`kendo-autocomplete`

## Props

### animation `Boolean | Object`

Configures the opening and closing animations of the suggestion popup ([`animation` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/autocomplete/configuration/animation)). Setting the `animation` option to `false`, disables the opening and closing animations. As a result, the suggestion popup will open and close instantly. The supported composite props are available in [`AnimationProps`]({% slug api_autocomplete_animationprops_wrapper %}).

### auto-width `Boolean`

If `auto-width` is set to `true`, the AutoComplete automatically adjusts the width of the popup element and does not wrap up the item label ([`autoWidth` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/autocomplete/configuration/autowidth)).

### data-source `Object | Array`

The data source of the AutoComplete which is used to display suggestions for the current value ([`dataSource` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/autocomplete/configuration/datasource)).

The supported values are:

* A JavaScript object which represents any valid data source configuration.
* A JavaScript array.
* An existing `kendo.data.DataSource` instance.

If the `dataSource` option is set to a JavaScript object or an array, the AutoComplete initializes a new `kendo.data.DataSource` instance by using that value as the data source configuration. If the `dataSource` option is an existing `kendo.data.DataSource` instance, the AutoComplete uses that instance and will not initialize a new one.

### clear-button `Boolean`

If `clear-button` is set to `true`, the AutoComplete renders a button on hover over the widget ([`clearButton` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/autocomplete/configuration/clearbutton)). Clicking that button resets the value of the AutoComplete and triggers the `change` event.

### data-text-field `String`

The field of the data item which is used when the user searches for suggestions ([`dataTextField` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/autocomplete/configuration/datatextfield)). Represents the text that will be displayed in the list of the matched results.

### delay `Number`

The delay (in milliseconds) between a keystroke and the display of the suggestion popup ([`delay` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/autocomplete/configuration/delay)).

### enable `Boolean`

If `enable` is set to `false`, the AutoComplete will be disabled and will prevent user input ([`enable` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/autocomplete/configuration/enable)). By default, the AutoComplete is enabled and allows user input.

### enforce-min-length `Boolean`

If `enforce-min-length` is set to `true`, the AutoComplete will hide part of its items when the text of the search input is cleared ([`enforceMinLength` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/autocomplete/configuration/enforceminlength)). By default, the AutoComplete shows all items when the text of the search input is cleared. Works together with `minLength`.

### filter `String`

Determines the suggestions for the current value ([`filter` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/autocomplete/configuration/filter)). Defaults to  `startswith`&mdash;all data items which begin with the current AutoComplete value are displayed in the suggestion popup.

The supported filter values are:

* `startswith`
* `endswith`
* `contains`

### fixed-group-template `String | Function`

The template for rendering the fixed header group ([`fixedGroupTemplate` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/autocomplete/configuration/fixedgrouptemplate)). By default, the AutoComplete displays only the value of the current group.

### footer-template `String | Function`

The template for rendering the footer template ([`footerTemplate` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/autocomplete/configuration/footertemplate)). Receives the AutoComplete itself as part of the data argument. The fields of the AutoComplete have to be used directly in the template.

### group-template `String | Function`

The template for rendering the groups ([`groupTemplate` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/autocomplete/configuration/grouptemplate)). By default, the AutoComplete displays only the value of the group.

### height `Number`

The height (in pixels) of the suggestion popup ([`height` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/autocomplete/configuration/height)). Defaults to 200px.

### highlight-first `Boolean`

If `highlight-first` is set to `true`, the first suggestion will be automatically highlighted ([`highlightFirst` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/autocomplete/configuration/highlightfirst)).

### ignore-case `Boolean`

If `ignore-case` is set to `false`, the performed search for finding suggestions will be case-sensitive ([`ignoreCase` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/autocomplete/configuration/ignorecase)). By default, the AutoComplete performs case-insensitive search.

### min-length `Number`

The minimum number of characters which the user must type before a search is performed ([`minLength` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/autocomplete/configuration/minlength)). If you set `min-length` to a value higher than one, the search might match too many items.

### no-data-template `String | Function`

The template for rendering the no-data template which is displayed if no results are found or if the underlying data source is empty ([`noDataTemplate` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/autocomplete/configuration/nodatatemplate)). The no-data template receives the widget itself as part of the data argument. The template will be evaluated each time `databound` is triggered.

### placeholder `String`

The hint which is displayed when the widget is empty ([`placeholder` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/autocomplete/configuration/placeholder)). By default, `placeholder` is not set.

### popup `Object`

The options for initializing the popup ([`popup` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/autocomplete/configuration/popup)). For more details on the available options, refer to the documentation of the Popup.

### separator `String | Array`

The character for separating multiple values ([`separator` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/autocomplete/configuration/separator)). By default, `separator` is empty.

### suggest `Boolean`

If `suggest` is set to `true`, the AutoComplete uses the first suggestion as its value ([`suggest` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/autocomplete/configuration/suggest)).

### header-template `String | Function`

Specifies static HTML content which will be rendered as a header of the popup element ([`headerTemplate` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/autocomplete/configuration/headertemplate)).

### template `String | Function`

The template for rendering the suggestions ([`template` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/autocomplete/configuration/template)). By default, the AutoComplete displays only the text of the suggestion which is configured over `dataTextField`.

### value `String`

The value of the widget ([`value` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/autocomplete/configuration/value)).

### value-primitive `Boolean`

Specifies the value-binding behavior for the widget when the initial model value is `null` ([`valuePrimitive` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/autocomplete/configuration/valueprimitive)).

* If `value-primitive` is set to `true`, the `View-Model` field is updated with the selected item text field.
* If `value-primitive` is set to `false`, the `View-Model` field is updated with the selected item.

### virtual `Boolean | Object`

Enables the virtualization feature of the widget ([`virtual` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/autocomplete/configuration/virtual)). You can set `virtual` to an object which contains the `itemHeight` and `valueMapper` properties. For more information, refer to the article on virtualization. The supported composite props are available in [`VirtualProps`]({% slug api_autocomplete_virtualprops_wrapper %}).

## Events

### change: `Function`

Fires when the user changes the value of the widget ([`change` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/autocomplete/events/change)). The event handler function context (available through the this keyword) will be set to the AutoComplete instance.

### close: `Function`

Fires when the user closes the suggestion popup of the widget ([`close` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/autocomplete/events/close)). The event handler function context (available through the this keyword) will be set to the AutoComplete instance.

### databound: `Function`

Fires when the widget is bound to data from its data source ([`dataBound` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/autocomplete/events/databound)). The event handler function context (available through the this keyword) will be set to the AutoComplete instance.

### filtering: `Function`

Fires when the widget is about to filter the data source ([`filtering` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/autocomplete/events/filtering)). The event handler function context (available through the this keyword) will be set to the AutoComplete instance.

### open: `Function`

Fires when the user opens the suggestion popup of the widget ([`open` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/autocomplete/events/open)). The event handler function context (available through the this keyword) will be set to the AutoComplete instance.

### select: `Function`

Fires when the user selects an item from the suggestion popup ([`select` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/autocomplete/events/select)).

## Methods

For more details about the methods available in the component's API please check [its Kendo UI for jQuery API documentation](https://docs.telerik.com/kendo-ui/api/javascript/ui/autocomplete#methods). 

### kendoWidget

##### returns

Returns the Kendo UI AutoComplete instance.
