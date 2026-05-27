---
title: Title
description: "Display a title in the Kendo UI for Vue Native Dialog and customize its behavior."
slug: title_dialog
position: 1
---

# Title

The Kendo UI for Vue Native Dialog provides options for displaying a title and customizing its behavior.

To set a title to the Dialog, use its [`title`]({% slug api_dialogs_dialogprops %}#toc-title) property.

{% meta height:450 %}
{% embed_file dialog/title/basic/main.vue preview %}
{% embed_file dialog/title/basic/main.js %}
{% endmeta %}

To customize the title, add components, functions, or HTML elements you can use the `title-render` prop.

{% meta height:450 %}
{% embed_file dialog/title/title-template/main.vue preview %}
{% embed_file dialog/title/title-template/main.js %}
{% endmeta %}

If `title` is not specified, the Dialog will not display a title.

{% meta height:450 %}
{% embed_file dialog/title/no-title/main.vue preview %}
{% embed_file dialog/title/no-title/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the Dialog]({% slug api_dialogs_dialogprops %})
