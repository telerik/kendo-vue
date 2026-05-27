---
title: Controlled Mode
description: "Control the checked and unchecked state of the Kendo UI for Vue Switch in Vue projects."
slug: controlled_switch
position: 3
---

# Controlled Mode

By default, the Switch is in an uncontrolled state.

To manage the state of the Switch, use its [`checked`]({% slug api_inputs_switchprops %}#toc-checked) property, handle the [`onChange`]({% slug api_inputs_switchprops %}#toc-onchange) event, and pass the new value through the props.

{% meta height:150 %}
{% embed_file switch/controlled/overview/main.vue preview %}
{% embed_file switch/controlled/overview/main.js %}
{% endmeta %}

## Manual Switch Toggle

The following example demonstrates how to manually toggle the Switch.

{% meta height:150 %}
{% embed_file switch/controlled/manual/main.vue preview %}
{% embed_file switch/controlled/manual/main.js %}
{% endmeta %}

## Read-Only Switch

The following example demonstrates how to implement a read-only Switch.

{% meta height:150 %}
{% embed_file switch/controlled/readonly/main.vue preview %}
{% embed_file switch/controlled/readonly/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the Switch]({% slug api_inputs_switchprops %})
