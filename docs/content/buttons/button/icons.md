---
title: Icon Button
description: "Enhance the visual content of the Kendo UI for Vue Button by adding images, or predefined and custom icons to it in Vue projects."
slug: icons_button
position: 3
---

# Icon Button

You can enhance the textual content of the Button by adding image, predefined, or custom icons to it.

With a view to the web standards, it is better to use a background image because icons are used for decoration and not for representing structural content.

The Button provides options for:

* Using the [built-in Kendo UI for Vue icons]({% slug icons %}). The built-in icons are applied through the [`icon`]({% slug api_buttons_buttonprops %}#toc-icon) property and displayed as a background for the Button. To see the full list of the web font icons in Kendo UI for Vue, refer to the article on [styles and layout](slug:icons).
* Adding image icons. They are applied through the [`imageUrl`]({% slug api_buttons_buttonprops %}#toc-imageurl) property of the component.
* Adding FontAwesome and other font icons. They are implemented by setting the required third-party CSS classes through the [`iconClass`]({% slug api_buttons_buttonprops %}#toc-iconclass) property.

The following example demonstrates how to use the different types of icons in a Button.

{% meta height:150 %}
{% embed_file button/icon/main.vue preview %}
{% embed_file button/icon/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the Button]({% slug api_buttons_buttonprops %})
* [Disabled Button]({% slug disabled_button %})
* [Primary Button]({% slug primary_button %})
* [Toggleable Button]({% slug toggleable_button %})
