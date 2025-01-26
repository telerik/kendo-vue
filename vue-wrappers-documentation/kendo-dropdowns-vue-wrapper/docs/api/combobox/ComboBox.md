---
title: ComboBox API
description: "API Index | ComboBox"
api_reference: true
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/dropdowns/api/ComboBoxProps/"
slug: api_comboboxcomponent_wrapper
---

# ComboBox

## Directive

`kendo-combobox`

## Props

### animation `Object`

Configures the opening and closing animations of the suggestion popup ([`animation` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/combobox/configuration/animation)). Setting the `animation` option to `false` disables the opening and closing animations. As a result, the suggestion popup will open and close instantly. The supported composite props are available in [`AnimationProps`]({% slug api_combobox_animationprops_wrapper %}).

### auto-bind `Boolean`

Defines whether to bind the widget to the data source upon its initialization ([`autoBind` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/combobox/configuration/autobind)).

### auto-width `Boolean`

If `auto-width` is set to `true`, the ComboBox automatically adjusts the width of the popup element and does not wrap up the item label ([`autoWidth` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/combobox/configuration/autowidth)).

### cascade-from `String`

Sets the `id` of the parent ComboBox ([`cascadeFrom` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/combobox/configuration/cascadefrom)).

### cascade-from-field `String`

Defines the field for filtering the data source ([`cascadeFromField` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/combobox/configuration/cascadefromfield)). If `cascade-from-field` is not defined, the parent `dataValueField` option will be used.

### cascade-from-parent-field `String`

Defines the parent field for retaining the `from` value ([`cascadeFromParentField` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/combobox/configuration/cascadefromparentfield)). The value will also be used to filter the data source. If `cascade-from-parent-field` is not defined, the value from the parent `dataValueField` will be used.

### clear-button `Boolean`

If `clear-button` is set to `true`, the ComboBox renders a button on hover over the widget ([`clearButton` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/combobox/configuration/clearbutton)). Clicking that button resets the value of the ComboBox and triggers the `change` event.

### data-source `Object | Array`

The data source of the ComboBox which is used to display a list of values ([`dataSource` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/combobox/configuration/datasource)).

The supported values are:

* A JavaScript object which represents any valid data source configuration.
* A JavaScript array.
* An existing `kendo.data.DataSource` instance.

If the `dataSource` option is set to a JavaScript object or an array, the ComboBox initializes a new `kendo.data.DataSource` instance by using that value as the data source configuration. If the `dataSource` option is an existing `kendo.data.DataSource` instance, the ComboBox uses that instance and will not initialize a new one.

### data-text-field `String`

The field of the data item which provides the text content of the list items ([`dataTextField` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/combobox/configuration/datatextfield)). Based on the data-text filed, the ComboBox filters its data source.

### data-value-field `String`

The field of the data item that provides the value of the widget ([`dataValueField` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/combobox/configuration/datavaluefield)).

### delay `Number`

The delay (in milliseconds) between a keystroke and the display of the popup ([`delay` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/combobox/configuration/delay)).

### enable `Boolean`

If `enable` is set to `false`, the ComboBox will be disabled and will prevent user input ([`enable` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/combobox/configuration/enable)). By default, the ComboBox is enabled and allows user input.

### enforce-min-length `Boolean`

If `enforce-min-length` is set to `true`, the ComboBox will hide part of its items when the text of the search input is cleared ([`enforceMinLength` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/combobox/configuration/enforceminlength)). By default, the ComboBox shows all items when the text of the search input is cleared. Works together with `minLength`.

### filter `String`

Determines the suggestions for the current value ([`filter` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/combobox/configuration/filter)). By default, filtering is disabled and can be performed over string values only&mdash;the data has to be an array of strings or configured in the `dataTextField` option.

The supported filter values are:

* `startswith`
* `endswith`
* `contains`

### fixed-group-template `String | Function`

The template for rendering the fixed header group ([`fixedGroupTemplate` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/combobox/configuration/fixedgrouptemplate)). By default, the ComboBox displays only the value of the current group.

### footer-template `String | Function`

The template for rendering the footer template ([`footerTemplate` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/combobox/configuration/footertemplate)). Receives the ComboBox itself as part of the data argument. The fields of the ComboBox have to be used directly in the template.

### group-template `String | Function`

The template for rendering the groups ([`groupTemplate` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/combobox/configuration/grouptemplate)). By default, the ComboBox displays only the value of the group.

### height `Number`

The height (in pixels) of the suggestion popup ([`height` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/combobox/configuration/height)). Defaults to 200px.

### highlight-first `Boolean`

If `highlight-first` is set to `true`, the first suggestion will be automatically highlighted ([`highlightFirst` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/combobox/configuration/highlightfirst)).

### ignore-case `Boolean`

If `ignore-case` is set to `false`, the performed search for finding suggestions will be case-sensitive ([`ignoreCase` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/combobox/configuration/ignorecase)). By default, the ComboBox performs case-insensitive search.

### index `Number`

The index of the initially selected item which is zero-based ([`index` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/combobox/configuration/index)).

### min-length `Number`

The minimum number of characters which the user must type before a search is performed ([`minLength` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/combobox/configuration/minlength)). If you set `min-length` to a value higher than one, the search might match too many items.

### no-data-template `String | Function`

The template for rendering the no-data template which is displayed if no results are found or if the underlying data source is empty ([`noDataTemplate` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/combobox/configuration/nodatatemplate)). The no-data template receives the widget itself as part of the data argument. The template will be evaluated each time `databound` is triggered.

### placeholder `String`

The hint which is displayed when the widget is empty ([`placeholder` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/combobox/configuration/placeholder)). By default, `placeholder` is not set.

### popup `Object`

The options for initializing the popup ([`popup` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/combobox/configuration/popup)). The supported composite props are available in [`PopupProps`]({% slug api_combobox_popupprops_wrapper %}).

### suggest `Boolean`

If `suggest` is set to `true`, the ComboBox uses the first suggestion as its value ([`suggest` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/combobox/configuration/suggest)).

### sync-value-and-text `Boolean`

When `sync-value-and-text` is set to `true`, the widget sets the selected value to the typed custom text ([`syncValueAndText` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/combobox/configuration/syncvalueandtext)). To clear the selected value while keeping the custom text, set `sync-value-and-text` to `false`.

### header-template `String | Function`

Specifies static HTML content which will be rendered as a header of the popup element ([`headerTemplate` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/combobox/configuration/headertemplate)).

### template `String | Function`

The template for rendering the items ([`template` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/combobox/configuration/template)). By default, the ComboBox displays only the text of the data item which is configured over `dataTextField`.

### text `String`

The text of the widget which is used when the `autoBind` is set to `false` ([`text` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/combobox/configuration/text)).

### value `String`

The value of the widget ([`value` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/combobox/configuration/value)).

### value-primitive `Boolean`

Specifies the value-binding behavior for the widget when the initial model value is `null` ([`valuePrimitive` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/combobox/configuration/valueprimitive)).

* If `value-primitive` is set to `true`, the `View-Model` field is updated with the selected item text field.
* If `value-primitive` is set to `false`, the `View-Model` field is updated with the selected item.

### virtual `Boolean | Object`

Enables the virtualization feature of the widget ([`virtual` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/combobox/configuration/virtual)). You can set `virtual` to an object which contains the `itemHeight` and `valueMapper` properties. For more information, refer to the article on virtualization. The supported composite props are available in [`VirtualProps`]({% slug api_combobox_virtualprops_wrapper %}).

## Events

### change: `Function`

Fires when the user changes the value of the widget ([`change` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/combobox/events/change)). As of 2015 Q3 SP1, a cascading ComboBox triggers the `change` event when its value is changed due to an update in the parent ComboBox. The event handler function context (available through the this keyword) will be set to the ComboBox instance.

### close: `Function`

Fires when the user closes the popup of the widget ([`close` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/combobox/events/close)). The event handler function context (available through the this keyword) will be set to the ComboBox instance.

### databound: `Function`

Fires when the widget is bound to data from its data source ([`dataBound` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/combobox/events/databound)). The event handler function context (available through the this keyword) will be set to the ComboBox instance.

### filtering: `Function`

Fires when the widget is about to filter the data source ([`filtering` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/combobox/events/filtering)). The event handler function context (available through the this keyword) will be set to the ComboBox instance.

### open: `Function`

Fires when the user opens the popup of the widget ([`open` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/combobox/events/open)). The event handler function context (available through the this keyword) will be set to the ComboBox instance.

### select: `Function`

Fires when the user selects an item from the popup ([`select` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/combobox/events/select)).

### cascade: `Function`

Fires when the value of the widget is changed over the API or by user interaction ([`cascade` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/combobox/events/cascade)).

## Methods

For more details about the methods available in the component's API please check [its Kendo UI for jQuery API documentation](https://docs.telerik.com/kendo-ui/api/javascript/ui/combobox#methods). 

### kendoWidget

##### returns

Returns the Kendo UI ComboBox instance.
