---
title: Steps validation
page_title: Kendo UI for Vue Wizard functionality | Kendo UI for Vue Native
description: "Learn how to position the Wizard content."
slug: wizard_validation
position: 10
---

# Wizard Steps validation

The main scenarios of the usage of the Wizard functionality are two:
* Validating the user input on submit(on the last step of the Wizard)
* Validating the user input on every step

Below you will find two examples that cover each of the above scenarios. 

## Validating Wizard inputs on submit

The following example demonstrates a multi-step form with a validation of the controls on submit:

{% meta height:630 %}
{% embed_file wizard/validation/submit/main.vue preview %}
{% embed_file wizard/validation/submit/main.js %}
{% embed_file wizard/validation/submit/AccountDetails.vue %}
{% embed_file wizard/validation/submit/CardSelector.vue %}
{% embed_file wizard/validation/submit/FormAutoComplete.vue %}
{% embed_file wizard/validation/submit/FormCheckbox.vue %}
{% embed_file wizard/validation/submit/FormDateInput.vue %}
{% embed_file wizard/validation/submit/FormDatePicker.vue %}
{% embed_file wizard/validation/submit/FormInput.vue %}
{% embed_file wizard/validation/submit/FormMaskedTextBox.vue %}
{% embed_file wizard/validation/submit/FormNumericTextBox.vue %}
{% embed_file wizard/validation/submit/FormRadioGroup.vue %}
{% embed_file wizard/validation/submit/FormTextArea.vue %}
{% embed_file wizard/validation/submit/FormUpload.vue %}
{% embed_file wizard/validation/submit/PaymentDetails.vue %}
{% embed_file wizard/validation/submit/PersonalDetails.vue %}
{% embed_file wizard/validation/submit/ErrorSummary.vue %}
{% embed_file wizard/validation/submit/validators.js %}
{% endmeta %}


## Validating Wizard inputs on each step

The following example demonstrates a multi-step form with a validation of the controls on each step:

{% meta height:630 %}
{% embed_file wizard/validation/step/main.vue preview %}
{% embed_file wizard/validation/step/AccountDetails.vue %}
{% embed_file wizard/validation/step/PersonalDetails.vue %}
{% embed_file wizard/validation/step/PaymentDetails.vue %}
{% embed_file wizard/validation/step/main.js %}
{% embed_file wizard/validation/step/CardSelector.vue %}
{% embed_file wizard/validation/step/FormAutoComplete.vue %}
{% embed_file wizard/validation/step/FormCheckbox.vue %}
{% embed_file wizard/validation/step/FormDateInput.vue %}
{% embed_file wizard/validation/step/FormDatePicker.vue %}
{% embed_file wizard/validation/step/FormInput.vue %}
{% embed_file wizard/validation/step/FormMaskedTextBox.vue %}
{% embed_file wizard/validation/step/FormNumericTextBox.vue %}
{% embed_file wizard/validation/step/FormRadioGroup.vue %}
{% embed_file wizard/validation/step/FormTextArea.vue %}
{% embed_file wizard/validation/step/FormUpload.vue %}
{% embed_file wizard/validation/step/ErrorSummary.vue %}
{% embed_file wizard/validation/step/validators.js %}
{% endmeta %}

## Suggested Links
* [Using the Wizard functionality with router]({% slug wizard_router %})
* [Content positioning]({% slug wizard_positioning %})
* [Getting started with the Form component]({% slug overview_form %})
* [API Reference of the Form]({% slug api_form %})
* [Getting started with the Stepper component]({% slug overview_stepper %})
* [API Reference of the Stepper]({% slug api_layout_stepper %})