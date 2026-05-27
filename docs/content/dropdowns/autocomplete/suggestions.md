---
title: Suggestions
description: "Enable the suggestions of the Kendo UI for Vue AutoComplete during user input in Vue projects."
slug: suggestions_autocomplete
position: 4
---

# Suggestions

The AutoComplete provides suggestions that appear while the user types in its input field.

To turn them on, set the [`suggest`]({% slug api_dropdowns_autocompleteprops %}#toc-suggest) property to `true`. Whenever the user modifies the input value, the AutoComplete automatically completes the user input with the first text match. If the first text match does not begin with the current user input, the AutoComplete does not display any suggestions.

{% meta height:350 %}
{% embed_file autocomplete/suggest/main.vue preview %}
{% embed_file autocomplete/suggest/main.js %}
{% embed_file shared/countries.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the AutoComplete]({% slug api_dropdowns_autocompleteprops %})
