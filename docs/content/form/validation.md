---
title: Validation
description: "Get started with the Kendo UI for Vue Native Form and validation."
slug: validation_form
position: 4
tag: updated
---

# Validation

The Kendo UI for Vue Form provides comprehensive validation capabilities through different approaches:

- [Validation with errors and onChange](#validation-with-errors-and-onchange)
- [Async Validation with Debouncing](#async-validation-with-debouncing)
- [Field Validation](#field-validation)
- [FieldArray Validation](#fieldarray-validation)
- [Form Validation](#form-validation)

## Validation with errors and onChange

The [`errors`]({% slug api_form_formprops %}#toc-errors) and [`onChange`]({% slug api_form_formprops %}#toc-onchange) props provide a flexible validation approach for various scenarios:

- Client-side validation
- Server-side validation
- Async validation with debouncing
- Cross-field validation
- Progressive validation states (loading, error, success)

The `errors` prop accepts an object mapping field names to error messages and takes precedence over all other validation mechanisms. The `onChange` prop provides a centralized handler that fires whenever any field value changes, receiving the field name, new value, and a function to access other field values.

To use validation with `errors` and `onChange`, follow these steps:

1. Define a reactive object to store validation errors.
1. Set the [`errors`]({% slug api_form_formprops %}#toc-errors) prop of the Form to pass the validation errors.
1. Handle the [`onChange`]({% slug api_form_formprops %}#toc-onchange) event to clear errors as users modify fields.
1. Perform validation in your submit handler and update the errors object with results from server or client validation.

The following example demonstrates both client-side and server-side validation using the `errors` and `onChange` props. To trigger server-side validation, enter `admin` in the username field and `test@blocked.com` in the email field.

{% meta height:600 %}
{% embed_file client-server-validation/main.vue preview %}
{% embed_file client-server-validation/FormContent.vue %}
{% embed_file client-server-validation/FormValidatedInput.vue %}
{% embed_file client-server-validation/main.js %}
{% endmeta %}

## Async Validation with Debouncing

The `errors` and `onChange` props enable asynchronous validation patterns without modifying the existing validator system. This is particularly useful for:

- Real-time availability checks (usernames, email addresses)
- API-based validation that requires network calls
- Debounced validation to reduce server load
- Progressive validation states (loading, error, success)

To implement async validation with debouncing, follow these steps:

1. Create a reactive object to store validation errors and a variable to track the debounce timer.
1. Handle the [`onChange`]({% slug api_form_formprops %}#toc-onchange) event and check if the changed field requires async validation.
1. Clear any existing debounce timer to reset the delay on subsequent changes.
1. Set a new timer using `setTimeout` to delay the validation call.
1. Perform the async validation (API call) when the timer expires.
1. Update the [`errors`]({% slug api_form_formprops %}#toc-errors) prop with the validation results.

The following example demonstrates async validation with debouncing for username availability checks.

{% meta height:380 %}
{% embed_file async-validators-with-debounce/main.vue preview %}
{% embed_file async-validators-with-debounce/FormContent.vue %}
{% embed_file async-validators-with-debounce/FormUsernameInput.vue %}
{% embed_file async-validators-with-debounce/main.js %}
{% endmeta %}

## Field validation

Field level validation is useful for simple validation of single field value (for example.: field is valid email). The validation function receives `value` as first argument and expects validation message to be returned if value is not valid.

{% meta height:260 %}
{% embed_file fieldvalidation/main.vue preview %}
{% embed_file fieldvalidation/FormContent.vue %}
{% embed_file shared/FormInput.vue %}
{% embed_file fieldvalidation/main.js %}
{% endmeta %}

> For async validation or server-side validation scenarios, see [Validation with errors and onChange](#validation-with-errors-and-onchange).

## FieldArray validation

Field array level validation is useful for simple validation of arrays, such as ensuring the array contains a minimum number of records. The validation function receives `value` as first argument and expects validation message to be returned if value is not valid.

{% meta height:360 %}
{% embed_file fieldarrayvalidation/main.vue preview %}
{% embed_file fieldarrayvalidation/FormContent.vue %}
{% embed_file shared/FormGrid.vue %}
{% embed_file shared/CommandCell.vue %}
{% embed_file fieldarrayvalidation/main.js %}
{% endmeta %}

> For async validation or server-side validation scenarios, see [Validation with errors and onChange](#validation-with-errors-and-onchange).

## Form validation

Form validation can be used for complex validation between more fields, where using the field level validation is not convenient.

{% meta height:400 %}
{% embed_file formvalidation/main.vue preview %}
{% embed_file formvalidation/FormContent.vue %}
{% embed_file shared/FormInput.vue %}
{% embed_file formvalidation/main.js %}
{% endmeta %}

> The `validator` prop only supports synchronous validation. For async validation or server-side validation, see [Validation with errors and onChange](#validation-with-errors-and-onchange).

## Suggested Links

* [API Reference of the Form]({% slug api_form_formprops %})
* [FormProps API - errors property]({% slug api_form_formprops %}#toc-errors)
* [FormProps API - onChange property]({% slug api_form_formprops %}#toc-onchange)

