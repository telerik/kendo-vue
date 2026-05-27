---
title: Custom Editing Form 
description: "Learn how to customize the Kendo UI for Vue Native Scheduler component edit form."
slug: editing_scheduler_custom
position: 2
---

# Custom Edit Form

The Scheduler enables you to customize the `Form` and `Inputs` that let you create, update, and delete its events. There are the following custom Form scenarios you can apply for the Scheduler:
* [Customize selected fields of the default editing Form](#toc-customize-the-default-editing-form)
* [Create your own custom Form for the events' editing](#toc-create-custom-editing-form-from-scratch)

## Customize the default editing Form

The default editing Form of the Scheduler can be customized using the [SchedulerFormEditor]({% slug api_scheduler_schedulerformeditorprops %}) component and its multiple properties. Using this approach, we can customize only selected Form editors and keep the default editing configuration for the other fields.   

The following example demonstrates how we can define custom editors for the **title** and **allDay** fields of each task. For more details about the other properties available, you can check [this link]({% slug api_scheduler_schedulerformeditorprops %}).

{% meta height:700 %}
{% embed_file data-operations/editing/customize-default/main.vue preview %}
{% embed_file data-operations/editing/customize-default/FormInput.vue %}
{% embed_file data-operations/editing/customize-default/FormSwitch.vue %}
{% embed_file data-operations/editing/customize-default/CustomEditForm.vue %}
{% embed_file data-operations/editing/customize-default/main.js %}
{% embed_file shared/events-utc.js  %}
{% endmeta %}

## Create custom editing Form from scratch

The Scheduler also provides an option to define a fully tailor-made editing Form when such is needed. Below you will see an example in which we are using a fully customized Form to edit the Scheduler's events. 


{% meta height:700 %}
{% embed_file data-operations/editing/custom-form/main.vue preview %}
{% embed_file data-operations/editing/custom-form/FormInput.vue %}
{% embed_file data-operations/editing/custom-form/FormSwitch.vue %}
{% embed_file data-operations/editing/custom-form/FormDateTimePicker.vue %}
{% embed_file data-operations/editing/custom-form/FormTextArea.vue %}
{% embed_file data-operations/editing/custom-form/CustomEditForm.vue %}
{% embed_file data-operations/editing/custom-form/main.js %}
{% embed_file shared/events-utc.js  %}
{% endmeta %}


## Suggested Links

* [Native Scheduler Editing - Basic configuration]({% slug editing_scheduler %})
* [Native Scheduler - Set Edit Form initial values]({% slug editing_scheduler_default_values %})
* [Native Scheduler - Custom validation messages]({% slug editing_scheduler_custom_validation_messages %})
* [API Reference of the SchedulerFormEditor]({% slug api_scheduler_schedulerformeditorprops %})
* [Kendo UI for Vue Native Form]({% slug overview_form %})
