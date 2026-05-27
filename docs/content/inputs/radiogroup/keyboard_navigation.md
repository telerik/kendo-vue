---
title: Keyboard Navigation
description: "Use the Kendo UI for Vue RadioGroup keyboard navigation in Vue projects."
slug: keyboard_navigation_radiogroup
position: 6
---

# Keyboard Navigation

The keyboard navigation of the RadioGroup is always available.

The RadioGroup supports the following keyboard shortcuts:

| SHORTCUT                            | DESCRIPTION         |
|:---                                 |:---                 |
| `Tab`                               | If any radio button is checked, focus is set on the checked button. If none of the radio buttons are checked, focus is set on the first radio button in the group. |
| `Space`                             | Checks the focused radio button if it is not already checked. |
| `Right Arrow` and `Down Arrow`      | Move focus and check the next radio button in the group. |
| `Left Arrow` and `Up Arrow`         | Move focus and check the previous radio button in the group. |


{% meta height:165 %}
{% embed_file radiogroup/keyboard/main.vue preview %}
{% embed_file radiogroup/keyboard/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the RadioGroupProps]({% slug api_inputs_radiogroupprops %})
* [Accessibility]({% slug accessibility_radiogroup %})
