---
title: Visibility
description: "Show or hide the Kendo UI for Vue Window in Vue projects."
slug: visibility_window
position: 4
---

# Visibility

By default, the Window is visible.

To control its visibility, use a variable based on which the Window will be shown or hidden.

```js
    <window v-if="visible"/>
```

The following example demonstrates how to show and hide the Window based on its state.

{% meta height:450 %}
{% embed_file window/basic/main.vue preview %}
{% embed_file window/basic/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the Window]({% slug api_dialogs_windowprops %})
