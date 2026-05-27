---
title: TextBoxProps
description: "Learn how to build custom functionality when working with the Vue Inputs by Kendo UI with the help of the TextBoxProps."
api_reference: true
type: inner_api
slug: api_inputs_textboxprops
---

# TextBoxProps
Represents the props of the [Kendo UI for Vue TextBox component]({% slug overview_textbox %}).
Extends the [native input props](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTextBoxElement).


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


Defines the built-in [aria-label](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute) property of the input element inside the TextBox.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### defaultValue?


</td>
<td type class="table-cell-type">


<code>


string | number | string[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">





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





</td>
</tr>
<tr>
<td class="table-cell-name">


#### fillMode?


</td>
<td type class="table-cell-type">


<code>


"flat" | "solid" | "outline"


</code>


</td>
<td class="table-cell-default">


<code>


undefined


</code>


</td>
<td class="table-cell-comment">


Configures the `fillMode` of the TextBox.

The available options are:
- solid
- outline
- flat





</td>
</tr>
<tr>
<td class="table-cell-name">


#### iconName?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines a string prop that controls the input icon. This property works only with the Kendo UI for Vue FontIcons.
Check the [Icons]({% slug icons %}) article for more information about how the Font Icon can be loaded to your project.


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


Renders a floating label for the TextBox component.


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


#### inputClass?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines additional class to the input element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### inputPrefix?


</td>
<td type class="table-cell-type">


<code>


string | boolean | Object | Function


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">








</td>
</tr>
<tr>
<td class="table-cell-name">


#### inputSuffix?


</td>
<td type class="table-cell-type">


<code>


string | boolean | Object | Function


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">








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





</td>
</tr>
<tr>
<td class="table-cell-name">


#### maxlength?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the built-in [maxlength](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/maxlength) property of the text inputs.
* As the property is directly passed to the internal [input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) element, when defining it, it should be written as it is - `maxlength`. Camel-case and kebap-case won't work in this scenario.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### minlength?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the built-in [minlength](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/minlength) property of the text inputs.
* As the property is directly passed to the internal [input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) element, when defining it, it should be written as it is - `minlength`. Camel-case and kebap-case won't work in this scenario.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### modelValue?


</td>
<td type class="table-cell-type">


<code>


string | number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">





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


(event: any) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the input is blurred.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onChange?


</td>
<td type class="table-cell-type">


<code>


(event: [TextBoxChangeEvent]({% slug api_inputs_textboxchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the `change` event of the input is triggered.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onFocus?


</td>
<td type class="table-cell-type">


<code>


(event: any) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the input is focused.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onKeydown?


</td>
<td type class="table-cell-type">


<code>


(event: any) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the 'keydown' input event is triggered.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onKeypress?


</td>
<td type class="table-cell-type">


<code>


(event: any) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the 'keypress' input event is triggered.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onKeyup?


</td>
<td type class="table-cell-type">


<code>


(event: any) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the 'keyup' input event is triggered.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onTextBox?


</td>
<td type class="table-cell-type">


<code>


(event: any) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the `input` event of the input is triggered.


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


Specifies the placeholder of an `input` element. Used to define if the input is empty.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### prefix?


</td>
<td type class="table-cell-type">


<code>


string | boolean | Object | Function


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines if the inputPrefix will be shown. Accepts a slot name, a `render` function, or a Vue component.


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


#### role?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the role of the input element inside the TextBox.


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


undefined


</code>


</td>
<td class="table-cell-comment">


Configures the `roundness` of the TextBox.

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


#### showClearButton?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines a boolean prop that controls whether to show the clear icon. Defaults to 'false'.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### showLoadingIcon?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines a boolean prop that controls whether to show the loading icon. Defaults to 'false'.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### showValidationIcon?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines a boolean prop that controls whether to show the validation icon. Defaults to 'false'.


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


undefined


</code>


</td>
<td class="table-cell-comment">


Configures the `size` of the TextBox.

The available options are:
- small
- medium
- large





</td>
</tr>
<tr>
<td class="table-cell-name">


#### suffix?


</td>
<td type class="table-cell-type">


<code>


string | boolean | Object | Function


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines if the inputSuffix will be shown. Accepts a slot name, a `render` function, or a Vue component.


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


Defines the built-in [tabindex](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) property of the input element inside the TextBox.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### title?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the built-in [title](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/title) property of the input element inside the TextBox.


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


string | number | string[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">





</td>
</tr>
<tr>
<td class="table-cell-name">


#### wrapperClass?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines additional class to the wrapper element.


</td>
</tr>
</tbody>
</table>



