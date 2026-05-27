---
title: Custom Validation Messages
description: "Learn how to customize the validation messages in the Kendo UI for Vue Native Scheduler edit form."
slug: editing_scheduler_custom_validation_messages
position: 30
---

# Custom Validation Messages

The Scheduler provides a functionality where you can define your own custom validation messages. The validation messages for each field can be defined through the [validator]({% slug api_scheduler_schedulerprops %}#toc-validator) property of the component. The validator property can be used in scenarios with both:
* [Default Edit Form](#toc-customize-the-default-editing-form)
* [Custom Edit Form](#toc-create-custom-editing-form-from-scratch)

By defining a validation message for selected field, you are making it required in the Edit Form.

## Validation messages with the default Edit Form

The following example demonstrates how we can define custom validation messages for the `Description` and `Rooms` fields in the Edit Form.

{% meta height:700 %}
{% embed_file data-operations/editing/validation/using-default-form/main.vue preview %}
{% embed_file data-operations/editing/validation/using-default-form/main.js %}
{% embed_file shared/events-utc.js  %}
{% endmeta %}

The example uses the following `validator` method that is passed to the [validator]({% slug api_scheduler_schedulerprops %}#toc-validator) prop of the `Native Scheduler`.

```jsx-no-run
validator(formValueGetter) {
    const desc = formValueGetter('description');
    const roomId = formValueGetter('roomId');
    return {
    description: desc ? undefined : 'Please add event description',
    roomId: roomId ? undefined : 'Please select a room for the event',
    };
}
```

## Validation messages with a custom Edit Form

The Scheduler gives us the freedom to define custom messages in scenarios with [custom Edit Form]({% slug editing_scheduler_custom %}#toc-create-custom-editing-form-from-scratch). The validation messages in such scenarios are set in a similar way to the scenarios with the built-in Edit Form.

In the following example, you can see how the `Event Title` and `Event Description` fields are set as required ones and have custom validation messages.


{% meta height:700 %}
{% embed_file data-operations/editing/validation/using-custom-form/main.vue preview %}
{% embed_file data-operations/editing/validation/using-custom-form/FormInput.vue %}
{% embed_file data-operations/editing/validation/using-custom-form/FormSwitch.vue %}
{% embed_file data-operations/editing/validation/using-custom-form/FormDateTimePicker.vue %}
{% embed_file data-operations/editing/validation/using-custom-form/FormTextArea.vue %}
{% embed_file data-operations/editing/validation/using-custom-form/CustomEditForm.vue %}
{% embed_file data-operations/editing/validation/using-custom-form/main.js %}
{% embed_file shared/events-utc.js  %}
{% endmeta %}

The the example uses the [validator]({% slug api_scheduler_schedulerprops %}#toc-validator) property to which we pass the following method:
```jsx-no-run
validator(formValueGetter) {
    const desc = formValueGetter('description');
    const title = formValueGetter('title');
    return {
    title: title ? undefined : 'The event should have a title',
    description: desc ? undefined : 'Please add event description',
    };
},
```

## Suggested Links

* [Native Scheduler Editing - Basic configuration]({% slug editing_scheduler %})
* [Native Scheduler - Custom Edit Form]({% slug editing_scheduler_custom %})
* [Native Scheduler - Set Edit Form initial values]({% slug editing_scheduler_default_values %})
* [API Reference of the SchedulerFormEditor]({% slug api_scheduler_schedulerformeditorprops %})
* [Kendo UI for Vue Native Form]({% slug overview_form %})
