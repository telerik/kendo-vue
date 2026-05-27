---
title: TextAreaProps
description: "Learn how to build custom functionality when working with the Vue Inputs by Kendo UI with the help of the TextAreaProps."
api_reference: true
type: inner_api
slug: api_inputs_textareaprops
---

# TextAreaProps
Represents the props of the [Kendo UI for Vue TextArea component]({% slug overview_textarea %}).


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


#### autoSize?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies if the textarea element will resize its height automatically ([see example]({% slug sizing_textarea %})).
Defaults to `false`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### className?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies a list of CSS classes that will be added to the TextArea.


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


The default value of the TextArea ([see example]({% slug default_textarea %})).


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


Specifies if the TextArea is disabled ([see example]({% slug disabled_textarea %})).


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


Configures the `fillMode` of the NumericTextBox.

The available options are:
- solid
- outline
- flat





</td>
</tr>
<tr>
<td class="table-cell-name">


#### flow?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the flow direction of the TextArea sections.


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


Sets the `id` of the TextArea.


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


Defines if the inputPrefix will be shown. Accepts a slot name, a `render` function, or a Vue component.


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


Defines if the inputSuffix will be shown. Accepts a slot name, a `render` function, or a Vue component.


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


Specifies the `name` property of the `textarea` DOM element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onBlur?


</td>
<td type class="table-cell-type">


<code>


(event: [TextAreaBlurEvent]({% slug api_inputs_textareablurevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The event handler that will be fired when TextArea is blurred.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onChange?


</td>
<td type class="table-cell-type">


<code>


(event: [TextAreaChangeEvent]({% slug api_inputs_textareachangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The event handler that will be fired when the changes the selected value.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onFocus?


</td>
<td type class="table-cell-type">


<code>


(event: [TextAreaFocusEvent]({% slug api_inputs_textareafocusevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The event handler that will be fired when TextArea is focused.


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


The hint that is displayed when the TextArea is empty.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### readOnly?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the read-only state of the TextArea.


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


#### resizable?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the way the TextArea will resize.


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


Configures the `roundness` of the NumericTextBox.

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


#### rows?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies an exact height size for the TextArea to take ([see example]({% slug sizing_textarea %})).


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


Configures the `size` of the NumericTextBox.

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


Sets the `tabIndex` property of the TextArea.
Defaults to `0`.


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


Identifies the title of the TextArea component.


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


<code>


true


</code>


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


Sets the value to be submitted ([see example]({% slug controlled_textarea %})).


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



