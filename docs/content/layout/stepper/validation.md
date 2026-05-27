---
title: "Validation"
description: "Get started with the Kendo UI for Vue Stepper and configure steps validity in Vue projects."
slug: validation_stepper
position: 5
---

# Validation

The Stepper enables you to set validation logic for each step. Based on it, a success or error icon will be rendered. Validation icons are rendered either in the step indicator or as part of the step label, depending on the current Stepper configuration options.

## Setup

To set the step validation, use the [`isValid`]({% slug api_layout_stepprops %}#toc-isValid) property.

{% meta height:260 %}
{% embed_file stepper/validation/basic/main.vue preview %}
{% embed_file stepper/validation/basic/main.js %}
{% endmeta %}


## Custom Validation Icons

The Stepper allows you to customize the rendered validation icons. To achieve this specify the [`successSvgIcon`]({% slug api_layout_stepprops %}#toc-successsvgicon) and [`errorSvgIcon`]({% slug api_layout_stepprops %}#toc-errorsvgicon) properties of the StepperItem and provide the SVG icon that should be applied to each step.

{% meta height:260 %}
{% embed_file stepper/validation/icons/main.vue preview %}
{% embed_file stepper/validation/icons/main.js %}
{% endmeta %}


## Suggested Links

* [API Reference of the Stepper Props]({% slug api_layout_stepperprops %})
* [API Reference of the Step Props]({% slug api_layout_stepprops %})
