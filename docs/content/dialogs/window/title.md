---
title: Title
description: "Display a title in the Kendo UI for Vue Window and customize its behavior."
slug: title_window
position: 3
---

# Title

The Window provides options for displaying a title and customizing its behavior.

To set a title to the Window, use its [`title`]({% slug api_dialogs_windowprops %}#toc-title) property.

{% meta height:450 %}
{% embed_file window/title-basic/main.vue preview %}
{% embed_file window/title-basic/main.js %}
{% endmeta %}

To customize the title, add а component.

{% meta height:450 %}
{% embed_file window/title-component/main.vue preview %}
{% embed_file window/title-component/Title.vue  %}
{% embed_file window/title-component/main.js %}
{% endmeta %}

If `title` is not specified, instead of a title, the Window will display a title bar with the default actions.

{% meta height:450 %}
{% embed_file window/title-no/main.vue preview %}
{% embed_file window/title-no/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the Window]({% slug api_dialogs_windowprops %})
