---
title: "Display Modes"
description: "Get started with the Kendo UI for Vue Stepper and set its steps modes in Vue projects."
slug: display_modes_stepper
position: 2
---

# Display Modes

The Stepper enables you to specify steps layout.

## Steps Layout

To specify if the steps will be displayed with or without an indicator, use the [`mode`]({% slug api_layout_stepperprops %}#toc-mode) property. The possible values are:
* (Default) `steps`. Render step indicator and optional label.
* `labels`. Render labels only.

To configure the layout of the Step indicators, use the following properties:
* [`svgIcon`]({% slug api_layout_stepprops %}#toc-svgicon) &mdash; Sets an icon inside the Step indicator.
* [`text`]({% slug api_layout_stepprops %}#toc-text) &mdash; Sets custom text inside the Step indicator.

If neither of the two properties is provided, the steps indicators will render numbers in a sequence order.



{% meta height:450 %}
{% embed_file stepper/display-modes/main.vue preview %}
{% embed_file stepper/display-modes/main.js %}
{% endmeta %}


## Steps Types

The Stepper provides various step types. For example, disabled, optional steps as well as steps with validation applied.



{% meta height:150 %}
{% embed_file stepper/types/main.vue preview %}
{% embed_file stepper/types/main.js %}
{% endmeta %}


## Suggested Links

* [API Reference of the Stepper Props]({% slug api_layout_stepperprops %})
* [API Reference of the Step Props]({% slug api_layout_stepprops %})
