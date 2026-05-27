---
title: Visibility
description: "Show or hide the Kendo UI for Vue Native Dialog in Vue projects."
slug: visibilitty_dialog
position: 2
---

# Visibility

By default, the Dialog is visible.

To control its visibility, use a `v-if` and a variable to show or hide the Dialog.

```jsx-no-run
    <k-dialog v-if="visible"/>
```

The following example demonstrates how to show and hide the Dialog based on its state.

{% meta height:450 %}
{% embed_file dialog/visibility/main.vue preview %}
{% embed_file dialog/visibility/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the Dialog]({% slug api_dialogs_dialogprops %})
