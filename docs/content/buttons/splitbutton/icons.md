---
title: Icon SplitButton
description: "Add image, predefined, or custom icons to the Kendo UI for Vue SplitButton in Vue projects."
slug: icons_splitbutton
position: 3
---

# Icon SplitButton

You can enhance the textual content of the SplitButton by adding image, predefined, or custom icons to it.

With a view to the web standards, it is better to use a background image because icons are used for decoration and not for representing structural content.

The SplitButton provides options for:

* Using the [built-in Kendo UI for Vue icons]({% slug icons %}). They are applied through the [`icon`]({% slug api_buttons_splitbuttonprops %}#toc-icon) property and displayed as a background for the SplitButton. To see the full list of the web font icons in Kendo UI for Vue, refer to the article on [styles and layout](slug:icons).
* Adding FontAwesome and other font icons. They are implemented by setting the required third-party CSS classes through the [`iconClass`]({% slug api_buttons_splitbuttonprops %}#toc-iconclass) property.
* Adding image icons. They are applied through the [`imageUrl`]({% slug api_buttons_splitbuttonprops %}#toc-imageurl) property of the component.

The following example demonstrates how to use the different types of icons in a SplitButton.

{% meta height:350 %}
{% embed_file splitbutton/icons/main.vue preview %}
{% embed_file splitbutton/icons/main.js %}
{% endmeta %}


## Suggested Links

* [API Reference of the SplitButton]({% slug api_buttons_splitbuttonprops %})
