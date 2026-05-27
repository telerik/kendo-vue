---
title: Controlled Mode
description: "Control the value of the Kendo UI for Vue Rating in Vue projects."
slug: controlled_rating
position: 8
---

# Controlled Mode

By default, the Rating is in an uncontrolled state.

Set the [defaultValue]({% slug api_inputs_ratingprops %}#toc-defaultValue) property if you want to stay in uncontrolled mode.

To control the state of the Rating:

1. Use its [`value`]({% slug api_inputs_ratingprops %}#toc-value) property.
1. Handle the [`onChange`]({% slug api_inputs_ratingprops %}#toc-onchange) event.
1. Pass the new value through the props.



{% meta height:130 %}
{% embed_file rating/controlled/main.vue preview %}
{% embed_file rating/controlled/main.js %}
{% endmeta %}


## Suggested Links

* [API Reference of the Rating Component]({% slug api_inputs_ratingprops %})
