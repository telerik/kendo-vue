---
title: MultiSelectProps
description: "Learn how to build custom functionality when working with the Vue Dropdowns by Kendo UI with the help of the MultiSelectProps."
api_reference: true
type: inner_api
slug: api_dropdowns_multiselectprops
---

# MultiSelectProps
Represents the props of the [Kendo UI for Vue MultiSelect component]({% slug overview_multiselect %}).


<table class="api-table api-table-properties">
<thead>
<tr>
<th class="th-name">Name</th>
<th class="th-type">Type</th>
<th class="th-default">Default</th>
<th class="th-desc">Description</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td class="table-cell-name">


#### accessKey?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the `accessKey` of the MultiSelect.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### adaptive?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Provides different rendering of the popup element based on the screen dimensions.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### adaptiveTitle?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the text that is rendered as title in the adaptive popup.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### allowCustom?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies whether the MultiSelect allows user-defined values that are not present in the dataset ([see example]({% slug custom_values_multiselect %})). Defaults to `false`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### ariaDescribedBy?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Identifies the element(s) which will describe the component, similar to [HTML aria-describedby attribute](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-describedby_attribute).
For example these elements could contain error or hint message.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### ariaLabel?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the [aria-label](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) attribute of the component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### ariaLabelledBy?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Identifies the element(s) which will label the component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### autoClose?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">


<code>


true


</code>


</td>
<td class="table-cell-comment">


Determines whether to close the options list of the MultiSelect after the item selection is finished.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### dataItemKey?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the key for comparing the data items of the MultiSelect ([see example]({% slug binding_multiselect %}#toc-datasets-of-objects)). If `dataItemKey` is not set, the MultiSelect compares the items by reference.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### dataItems?


</td>
<td type class="table-cell-type">


<code>


any[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the data of the MultiSelect ([see example]({% slug binding_multiselect %})).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### defaultValue?


</td>
<td type class="table-cell-type">


<code>


any[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the default value of the MultiSelect. Similar to the native `select` HTML element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### dir?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the `dir` HTML attribute.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### disabled?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the disabled state of the MultiSelect.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### fillMode?


</td>
<td type class="table-cell-type">


<code>


"flat" | "link" | "solid" | "outline"


</code>


</td>
<td class="table-cell-default">


<code>


`undefined`


</code>


</td>
<td class="table-cell-comment">


Configures the `fillMode` of the MultiSelect.

The available options are:
- solid
- outline
- flat
- link





</td>
</tr>
<tr>
<td class="table-cell-name">


#### filter?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the value of filtering input. Useful for making the filtering input a controlled component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### filterable?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Enables the filtering functionality of the MultiSelect ([more information and examples]({% slug filtering_multiselect %})).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### focusedItemIndex?


</td>
<td type class="table-cell-type">


<code>


(data: any, inputText: string, textField?: string) => number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


If set, the MultiSelect will use it to get the focused item index.

Default functionality returns the first item which starts with the input text.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### footer?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the footer component of the MultiSelect ([see example]({% slug customrendering_multiselect %}#toc-headers-and-footers)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### groupField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the data item field that represents the start of a group. Applicable to objects data.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### groupHeaderItemRender?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when a MultiSelect group header item is about to be rendered. Used to override the default appearance of the group's headers.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### groupStickyHeaderItemRender?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when a MultiSelect sticky group header item is about to be rendered. Used to override the default appearance of the sticky group header of the component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### header?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the header component of the MultiSelect ([see example]({% slug customrendering_multiselect %}#toc-headers-and-footers)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### id?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the id of the component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### inputAttributes?


</td>
<td type class="table-cell-type">


<code>


Object


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the built-in HTML attributes of the inner focusable input element.
Attributes which are essential for certain component functionalities cannot be changed.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### itemRender?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when a MultiSelect item is about to be rendered ([see example]({% slug customrendering_multiselect %}#toc-items)). Used to override the default appearance of the list items.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### label?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Renders a floating label for the MultiSelect.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### listNoDataRender?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the element which indicates no data in the popup is about to be rendered ([see example]({% slug customrendering_multiselect %}#toc-no-data)). Used to override the default appearance of the element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### loading?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the loading state of the MultiSelect ([see example]({% slug filtering_multiselect %}#toc-basic-configuration)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### name?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the `name` property of the `input` DOM element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onBlur?


</td>
<td type class="table-cell-type">


<code>


(event: [MultiSelectBlurEvent]({% slug api_dropdowns_multiselectblurevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time the MultiSelect gets blurred.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onChange?


</td>
<td type class="table-cell-type">


<code>


(event: [MultiSelectChangeEvent]({% slug api_dropdowns_multiselectchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time the value of the MultiSelect is about to change ([see examples]({% slug binding_multiselect %})).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onClose?


</td>
<td type class="table-cell-type">


<code>


(event: [MultiSelectCloseEvent]({% slug api_dropdowns_multiselectcloseevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time the popup of the MultiSelect is about to close.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onFilterchange?


</td>
<td type class="table-cell-type">


<code>


(event: [MultiSelectFilterChangeEvent]({% slug api_dropdowns_multiselectfilterchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time the user types in the filter input ([see example]({% slug filtering_multiselect %}#toc-basic-configuration)). You can filter the source based on the passed filtration value.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onFocus?


</td>
<td type class="table-cell-type">


<code>


(event: [MultiSelectFocusEvent]({% slug api_dropdowns_multiselectfocusevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time the user focuses the MultiSelect.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onOpen?


</td>
<td type class="table-cell-type">


<code>


(event: [MultiSelectOpenEvent]({% slug api_dropdowns_multiselectopenevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time the popup of the MultiSelect is about to open.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onPagechange?


</td>
<td type class="table-cell-type">


<code>


(event: [MultiSelectPageChangeEvent]({% slug api_dropdowns_multiselectpagechangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when both the virtual scrolling of the MultiSelect is enabled and when the component requires data for another page ([see example]({% slug virtualization_multiselect %})).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### opened?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the opened and closed state of the MultiSelect.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### placeholder?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The hint that is displayed when the MultiSelect is empty.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### popupSettings?


</td>
<td type class="table-cell-type">


<code>


[DropDownsPopupSettings]({% slug api_dropdowns_dropdownspopupsettings %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Configures the popup of the MultiSelect.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### removeTagIcon?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the close icon of the tag items.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### required?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies if `null` is a valid value for the component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### rounded?


</td>
<td type class="table-cell-type">


<code>


"small" | "medium" | "large" | "full" | "none"


</code>


</td>
<td class="table-cell-default">


<code>


`undefined`


</code>


</td>
<td class="table-cell-comment">


Configures the `roundness` of the MultiSelect.

The available options are:
- none
- small
- medium
- large
- full





</td>
</tr>
<tr>
<td class="table-cell-name">


#### size?


</td>
<td type class="table-cell-type">


<code>


"small" | "medium" | "large"


</code>


</td>
<td class="table-cell-default">


<code>


`undefined`


</code>


</td>
<td class="table-cell-comment">


Configures the `size` of the MultiSelect.

The available options are:
- small
- medium
- large





</td>
</tr>
<tr>
<td class="table-cell-name">


#### tabIndex?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the `tabIndex` of the MultiSelect.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### tagRender?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when a tag element is about to be rendered ([see example]({% slug customrendering_multiselect %}#toc-tags)). Used to override the default appearance of the element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### tags?


</td>
<td type class="table-cell-type">


<code>


[TagData]({% slug api_dropdowns_tagdata %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the tags of the MultiSelect ([see example]({% slug customtags_multiselect %})).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### tagsRounded?


</td>
<td type class="table-cell-type">


<code>


"small" | "medium" | "large" | "full" | "none"


</code>


</td>
<td class="table-cell-default">


<code>


`undefined`


</code>


</td>
<td class="table-cell-comment">


Configures the `roundness` of the tags in MultiSelect.

The available options are:
- none
- small
- medium
- large
- circle
- full





</td>
</tr>
<tr>
<td class="table-cell-name">


#### textField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the data item field that represents the item text ([see example]({% slug binding_multiselect %}#toc-datasets-of-objects)). If the data contains only primitive values, do not define it.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### valid?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the validity state of the component.
If `valid` is set, the `required` property will be ignored.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### validate?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the validate of the input.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### validationMessage?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Controls the form error message of the component. If set to an empty string, no error will be thrown.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### validityStyles?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


If set to `false`, no visual representation of the invalid state of the component will be applied.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### value?


</td>
<td type class="table-cell-type">


<code>


any[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the value of the MultiSelect ([see example]({% slug binding_multiselect %})). It can either be of the primitive (string, numbers) or of the complex (objects) type.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### valueField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the data item field that represents the item value.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### valuePrimitive?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the type of the selected value. If set to true, the selected value has to be of a primitive value.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### virtual?


</td>
<td type class="table-cell-type">


<code>


[VirtualizationSettings]({% slug api_dropdowns_virtualizationsettings %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Configures the virtual scrolling of the MultiSelect ([see example]({% slug virtualization_multiselect %})).


</td>
</tr>
</tbody>
</table>



