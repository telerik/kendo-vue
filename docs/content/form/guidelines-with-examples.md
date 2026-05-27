---
title: Form Guidelines
description: "Kendo UI for Vue makes building web forms easy: just use the feature-rich Vue Form component and follow these design guidelines with examples and best practices."
slug: forms_guideline
position: 1
---

# Vue Form Guidelines

We created this Form Guidelines document to help Vue developers build gorgeous and functional forms. The knowledge we are sharing here comes from years of experience with building forms, interacting with other developers building forms, and keeping up with industry best practices.

Some concepts that we cover include how to structure horizontal or vertical form layouts, how to handle form validation, how to automatically display content based on the state of a form element, and many, many more.

These examples showcase how to build forms not only with Kendo UI for Vue components, but also with native HTML elements, so the guidance provided here can be used by anyone.

We hope that you will find this guide useful! Now, let's start by diving into various form controls.

## Form Components
Forms consist of form components (such as inputs, buttons, checkboxes, dropdowns, color pickers), their labels, hints and error messages. Kendo UI for Vue provides comprehensive support for building forms with the [`Form`]({% slug overview_form %}), and [`Labels`]({% slug overview_labels %}) packages. In this article we share valuable best practices.

Here’s an example of the Form and Labels packages in action, so you can get an idea of how they work.

{% meta height:850 %}
{% embed_file guideline/formcomponents/main.vue preview %}
{% embed_file guideline/formcomponents/FormContent.vue %}
{% embed_file shared/FormCheckbox.vue %}
{% embed_file shared/FormDatePicker.vue %}
{% embed_file shared/FormInput.vue %}
{% embed_file shared/FormMaskedTextBox.vue %}
{% embed_file shared/FormNumericTextBox.vue %}
{% embed_file shared/FormTextArea.vue %}
{% embed_file guideline/formcomponents/main.js %}
{% embed_file shared/validators.js %}
{% endmeta %}

### Kendo UI for Vue Form Package
The Vue Form package provides components for form state management, form validation and form layout creation. For form state management, the `Form` package uses the following components:
* [`Form component`]({% slug api_form_formprops %}) and [KendoForm Injected Property]({% slug api_form_fieldinjectedprops %}).
* [`Field component`]({% slug api_form_fieldprops %}).
* [`FieldArray component`]({% slug api_form_fieldarrayprops %}).

For creating form layouts, the `Form` package provides following components:
* [`FormElement component`]({% slug api_form_formelementprops %}) enables creating horizontal and vertical form layouts. It's designed to work with the `FieldWrapper` component, components from the [`Labels`]({% slug overview_labels %}) package and any editor.
* [`FieldWrapper component`]({% slug api_form_fieldwrapperprops %}) enable you to group, align, and control form-related content, such as Kendo UI for Vue components, or HTML input elements.

> Except for components representing a group (such as radio buttons), each `FieldWrapper` component can contain a single component element, a label, and multiple hint or error messages.

### Vue Form Inputs

The following example demonstrates the Kendo UI for Vue Inputs within a form in action:

{% meta height:650 %}
{% embed_file guideline/inputs/main.vue preview %}
{% embed_file guideline/inputs/FormContent.vue %}
{% embed_file shared/FormInput.vue %}
{% embed_file shared/FormMaskedTextBox.vue %}
{% embed_file shared/FormNumericTextBox.vue %}
{% embed_file shared/FormTextArea.vue %}
{% embed_file shared/FormSlider.vue %}
{% embed_file guideline/inputs/main.js %}
{% embed_file shared/validators.js %}
{% endmeta %}

<div class="spacer"></div>

### Checkboxes & RadioButtons

The following example demonstrates the Kendo UI for Vue Checkbox and RadioGroup components within a form in action:

{% meta height:400 %}
{% embed_file guideline/checkboxes/main.vue preview %}
{% embed_file guideline/checkboxes/FormContent.vue %}
{% embed_file shared/FormCheckbox.vue %}
{% embed_file shared/FormRadioGroup.vue %}
{% embed_file guideline/checkboxes/main.js %}
{% embed_file shared/validators.js %}
{% embed_file shared/data.js %}
{% endmeta %}

<div class="spacer"></div>

### Uploads

The following example demonstrates the Kendo UI for Vue Upload within a form in action:

{% meta height:400 %}
{% embed_file guideline/uploads/main.vue preview %}
{% embed_file guideline/uploads/FormContent.vue %}
{% embed_file shared/FormUpload.vue %}
{% embed_file guideline/uploads/main.js %}
{% endmeta %}

<div class="spacer"></div>

### DropDowns

The following example demonstrates how to use the Kendo UI for Vue Native DropDowns([AutoComplete](slug:overview_autocomplete), [ComboBox](slug:overview_combobox), [DropDownList](slug:overview_dropdownlist) and [MultiSelect](slug:overview_multiselect)) within the Form component.

{% meta height:610 %}
{% embed_file guideline/dropdowns/main.vue preview %}
{% embed_file guideline/dropdowns/FormContent.vue %}
{% embed_file shared/FormAutoComplete.vue %}
{% embed_file shared/FormComboBox.vue %}
{% embed_file shared/FormDropDownList.vue %}
{% embed_file shared/FormMultiSelect.vue %}
{% embed_file guideline/dropdowns/main.js %}
{% embed_file shared/data.js %}
{% embed_file shared/validators.js %}
{% endmeta %}

<div class="spacer"></div>

### DateInputs

The following example demonstrates the Kendo UI for Vue DateInputs within a form in action:

{% meta height:620 %}
{% embed_file guideline/datepickers/main.vue preview %}
{% embed_file guideline/datepickers/FormContent.vue %}
{% embed_file shared/FormDatePicker.vue %}
{% embed_file shared/FormDateTimePicker.vue %}
{% embed_file shared/FormDateInput.vue %}
{% embed_file shared/FormTimePicker.vue %}
{% embed_file guideline/datepickers/main.js %}
{% embed_file shared/validators.js %}
{% endmeta %}

<div class="spacer"></div>

### Sizing

By default, all form components nested in a `FormElement` will take `100%` of their parent element’s width, except for the ColorPicker, Switch and Slider components.

## Labeling

Labels are associated with form elements not only visually but also programmatically. Assistive technologies will read the label content when the form element is focused. Additionally, on label click, the form element will receive focus and click, providing an increased hit area to activate it.

### Labels

The [`Label`]({% slug api_labels_labelprops %}) component associates a label with a component using its props. When the form component is a plain HTML element or simple component like `Input`, only the `editorId` prop of the `Label` and `id` prop of the editor is used to associate the pair. For complex components without a form element, additional properties are required to enable screen readers to correctly read the label, transfer the focus, and click events. Refer to the [Label overview]({% slug label_labels %}) for further details and runnable demos.

### Floating Labels

Тhe [`FloatingLabel`]({% slug api_labels_floatinglabelprops %}) is an inline label that moves above the input when the user focuses the form field or enters a value. One of its benefits is that it looks good, and the resolved animation when moving to the next field gives users a sense of completion.

{% meta height:340 %}
{% embed_file guideline/floating/main.vue preview %}
{% embed_file guideline/floating/FormContent.vue %}
{% embed_file shared/FormFloatingNumericTextBox.vue %}
{% embed_file guideline/floating/main.js %}
{% embed_file shared/validators.js %}
{% endmeta %}

<div class="spacer"></div>

### Optional Labels

The way we visualize a form field has a strong implication for how users perceive and complete forms. As an example, instead of marking every field as required, you can only mark the optional fields. This results in less visual noise, since there will be fewer red marks across your user interface. This will lead to users completing the form faster.

Both the `Label` and `FloatingLabel` components have an `optional` Boolean property. When set to `true`, it renders “(Optional)” text inside the label element of the form component. The text is localizable via the Kendo UI for Vue Localization package. Refer to the [article on Globalization]({% slug overview_intl %}) for further details and runnable demos.

{% meta height:340 %}
{% embed_file guideline/optional/main.vue preview %}
{% embed_file guideline/optional/FormContent.vue %}
{% embed_file shared/FormFloatingNumericTextBox.vue %}
{% embed_file shared/FormMaskedTextBox.vue %}
{% embed_file guideline/optional/main.js %}
{% embed_file shared/validators.js %}
{% endmeta %}

<div class="spacer"></div>

### Placeholder Texts

The lighter color treatment of the placeholder text indicates a suggestion for the type of valid input.

{% meta height:200 %}
{% embed_file guideline/placeholder/main.vue preview %}
{% embed_file guideline/placeholder/FormContent.vue %}
{% embed_file shared/FormInput.vue %}
{% embed_file guideline/placeholder/main.js %}
{% embed_file shared/validators.js %}
{% endmeta %}

### Hint Messages

Hint messages provide additional context about the expected value of a form component. For example, in a registration form where users have to provide a password containing minimum 3 characters, a hint message aligned under the input could avoid any confusion. To associate the `Hint` message with the editor for screen readers, set the `id` property of the component to the `ariaDescribedBy` property of the editor.

{% meta height:450 %}
{% embed_file guideline/hints/main.vue preview %}
{% embed_file guideline/hints/FormContent.vue %}
{% embed_file shared/FormInput.vue %}
{% embed_file shared/FormDatePicker.vue %}
{% embed_file guideline/hints/main.js %}
{% embed_file shared/validators.js %}
{% endmeta %}

<div class="spacer"></div>

## Vue Form Validation

We use form validation to ensure that users provide correct information related to format, content length, and other criteria. For example, is the phone number a valid number, did the user fill in the required fields, and so on.

### How it Works?

Kendo UI for Vue supports handling user input in the UI, and displays useful validation messages using the `Form`, `Field`, and `Error` components. Refer to the [article on form validation]({% slug validation_form %}) for further details and runnable demos.

### Field-level Form Validation

Field-level validation ensures that the value entered in the field is per the application requirements. If the validation rules are not satisfied, error messages for each field are displayed.

To keep the form UI clean, error messages for an invalid component are usually not shown until specific user interaction. Different states of the edited field can be used to display a validation message:

* The Form field was edited&mdash;[`modifiedByField`]({% slug api_form_fieldinjectedprops %}#toc-modifiedbyfield) state
* The Form field was focused&mdash;[`visitedByField`]({% slug api_form_fieldinjectedprops %}#toc-visitedbyfield) state
* The component was blurred&mdash;[`touchedByField`]({% slug api_form_fieldinjectedprops %}#toc-touchedbyfield) state
* Aways&mdash;Show error messages regardless of user interaction

The [Field]({% slug api_form_formprops %}) component and the [KendoForm Injected Property]({% slug api_form_fieldinjectedprops %}) enable you to control when and how to show validation messages.

#### Error Messages

For instant validation, error messages are the best way to alert users that they have made a mistake while filling out a form. Applying only error-specific styles does not convey what the user needs to do to provide valid data. Error messages must specify why the user input is not accepted. Error messages for different fields must appear one by one. Kendo UI for Vue provides an [`Error`]({% slug api_labels_errorprops %}) component for that use. To associate it with the editor for screen readers, set the `id` property of the component to the `ariaDescribedBy` property of the editor.

{% meta height:320 %}
{% embed_file guideline/errormessages/main.vue preview %}
{% embed_file guideline/errormessages/FormContent.vue %}
{% embed_file shared/FormInput.vue %}
{% embed_file guideline/errormessages/main.js %}
{% embed_file shared/validators.js %}
{% endmeta %}

<div class="spacer"></div>

### Form-level Validation

Form-level validation is used to show validation summary of all fields or complex validation constraints between multiple fields. The validation summary usually appears when the user is ready to move to another step or clicks the Submit button.

#### Validation Summary

The validation summary displays a list of all validation errors in a single place. You can also use it to display complex validations messages. This approach can be useful when dealing with large forms if they contain parts that are temporarily hidden.

{% meta height:570 %}
{% embed_file guideline/formvalidation/main.vue preview %}
{% embed_file guideline/formvalidation/FormContent.vue %}
{% embed_file shared/FormInput.vue %}
{% embed_file shared/FormCheckbox.vue %}
{% embed_file guideline/formvalidation/main.js %}
{% embed_file shared/validators.js %}
{% endmeta %}

<div class="spacer"></div>

### Read-only & Disabled Components

Rendering the component in a `readonly` state makes it immutable and the user cannot edit it. The read-only components are responsive to interaction, take part in constraint validation, and can be focused.

Rendering the component in a `disabled` state makes it immutable. The disabled components are not responsive to user interaction and do not take part in constraint validation.

Defining a disabled component can be accomplished in Kendo UI for Vue components by adding `disabled` property. Making the component `readonly` can done via `readonly` property of the component.

{% meta height:360 %}
{% embed_file guideline/disabled/main.vue preview %}
{% embed_file guideline/disabled/FormContent.vue %}
{% embed_file shared/FormInput.vue %}
{% embed_file shared/FormMaskedTextBox.vue %}
{% embed_file guideline/disabled/main.js %}
{% endmeta %}

<div class="spacer"></div>

## Form Layout

When it comes to filling out a form, users want to move through it as quickly as possible without having to overthink anything. A great form layout leads to seamless completion and improves the speed of the submission process. Using a single-column layout results in greatly improved user understanding, fewer errors, and higher conversion rates.

### Horizontal & Vertical

By default, most Kendo UI for Vue components are `100%` wide when placed inside the `FieldWrapper`. As a result, components inside Kendo UI for Vue `FormElement` are stacked vertically.

To make a horizontal form layout and position form components along with their labels on the same row, set the `horizontal` option of the `FormElement` component to `true`. Additionally, if you use the `Label` component to label the editor, you need to wrap the editor and error messages in a `div` element with a `k-form-field-wrap` CSS class.

{% meta height:420 %}
{% embed_file guideline/horizontal/main.vue preview %}
{% embed_file guideline/horizontal/FormContent.vue %}
{% embed_file shared/FormInput.vue %}
{% embed_file shared/FormMaskedTextBox.vue %}
{% embed_file guideline/horizontal/main.js %}
{% embed_file shared/validators.js %}
{% endmeta %}

<div class="spacer"></div>

### Groups & Separators

Grouping form components in a meaningful way makes for a cleaner and more concise form content. Using the `legend` and `fieldset` structures allows showing a relation between form components, which is useful when it comes to large and complex forms.

Separators add a line break to the layout and improve the form conversion rate. The separation of sections allows you to make compound forms more approachable. To add a separator, add the `k-form-separator` class on a `span` element.

{% meta height:500 %}
{% embed_file guideline/groups/main.vue preview %}
{% embed_file guideline/groups/FormContent.vue %}
{% embed_file shared/FormInput.vue %}
{% embed_file shared/FormCheckbox.vue %}
{% embed_file guideline/groups/main.js %}
{% embed_file shared/validators.js %}
{% endmeta %}

<div class="spacer"></div>

### Form Buttons

By default, the buttons placed inside `div` elements with `k-form-buttons` are aligned to the left side of the form. Adding the `k-buttons-end` class to the buttons' wrapper element allows positioning them on the right.

{% meta height:540 %}
{% embed_file guideline/formbuttons/main.vue preview %}
{% embed_file guideline/formbuttons/FormContent.vue %}
{% embed_file shared/FormInput.vue %}
{% embed_file shared/FormCheckbox.vue %}
{% embed_file guideline/formbuttons/main.js %}
{% embed_file shared/validators.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the Form]({% slug api_form_formprops %}) and [KendoForm Injected Property]({% slug api_form_fieldinjectedprops %})
* [API Reference of the Field]({% slug api_form_fieldprops %})
* [API Reference of the FormElement]({% slug api_form_formelementprops %})
* [API Reference of the FieldWrapper]({% slug api_form_fieldwrapperprops %})
* [Labels package]({% slug overview_labels %})
