---
title: FormProps
description: "Learn how to build custom functionality when working with the Vue Form by Kendo UI with the help of the FormProps."
api_reference: true
type: inner_api
slug: api_form_formprops
---

# FormProps
Represents the props of the Kendo U for Vue Form component.


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


#### errors?


</td>
<td type class="table-cell-type">


<code>


{[name: string]: string}


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Validation errors that override field and form validators.

Provides validation errors directly as an object, unlike the `validator` prop which expects a callback.
When both `validator` and `errors` exist for a field, the `errors` prop takes precedence.

```vue
<Form :errors="serverErrors" @submit="handleSubmit" :render-form="renderForm" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### ignoreModified?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Set this to `true` to allow the form submit without modified fields.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### initialValues?


</td>
<td type class="table-cell-type">


<code>


{[name: string]: any}


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The initial field values of the Form.

> When you initialize the Form fields, set initial values to them. Otherwise, some
components might throw errors related to switching from uncontrolled to controlled mode.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onChange?


</td>
<td type class="table-cell-type">


<code>


(fieldName: string, value: any, valueGetter: (name: string) => any) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time any field value changes.

The third parameter `valueGetter` allows accessing other field values,
useful for cross-field validation or clearing related errors.

```vue
<Form :on-change="handleChange" :render-form="renderForm" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onSubmit?


</td>
<td type class="table-cell-type">


<code>


(values: {[name: string]: any}, event?: any) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The submission handler for the Form.
Called when at least one field has been modified, the user pressed
 the **Submit** button,  and the form validation was successful.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onSubmitclick?


</td>
<td type class="table-cell-type">


<code>


(event: [FormSubmitClickEvent]({% slug api_form_formsubmitclickevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Called every time the user presses the **Submit** button.
Useful in advanced scenarios when you need to handle every
submit event, even when the form is invalid or not modified state.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### renderForm?


</td>
<td type class="table-cell-type">


<code>


(props: [FormRenderProps]({% slug api_form_formrenderprops %})) => any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The Form content that will be rendered.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### validator?


</td>
<td type class="table-cell-type">


<code>


[FormValidatorType]({% slug api_form_formvalidatortype %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The validation function for the Form level.
Should return key-value pair where the key is the field path and the value is the error message.
Nested fields are supported, e.g.: 'users[0].name'.
You can use the same field path to access the value from the
values object using the `getter` function from the `kendo-vue-common` package.
Currently, `validator` supports only synchronous functions.


</td>
</tr>
</tbody>
</table>



