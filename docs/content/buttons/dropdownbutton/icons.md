---
title: Icon DropDownButton
description: "Add image, predefined, or custom icons to the Kendo UI for Vue Native DropDownButton in Vue projects."
slug: icons_dropdownbutton
position: 3
---

# Icon DropDownButton

You can enhance the textual content of the Kendo UI for Vue Native DropDownButton by adding image, predefined, or custom icons to it.

Considering web standards, using a background image is preferable because icons are intended for decoration, not for representing structural content.

The DropDownButton provides options for:

* Using the [built-in Kendo UI for Vue icons]({% slug icons %}). They are applied through the [`icon`]({% slug api_buttons_dropdownbuttonprops %}#toc-icon) property and displayed as a background for the DropDownButton. To see the full list of the web font icons in Kendo UI for Vue, refer to the article on [styles and layout](slug:icons).
* Adding FontAwesome and other font icons. They are implemented by setting the required third-party CSS classes through the [`iconClass`]({% slug api_buttons_dropdownbuttonprops %}#toc-iconclass) property.
* Adding image icons. They are applied through the [`imageUrl`]({% slug api_buttons_dropdownbuttonprops %}#toc-imageurl) property of the component.

The following example demonstrates how to use the different types of icons in a DropDownButton.

{% meta height:400 %}
{% embed_file dropdownbutton/icons/main.vue preview %}
{% embed_file dropdownbutton/icons/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the DropDownButton]({% slug api_buttons_dropdownbuttonprops %})
