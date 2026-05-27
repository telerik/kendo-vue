---
title: Opening and Closing
description: "Customize the opening and closing behavior of the Kendo UI for Vue ContextMenu in Vue projects."
slug: opening_closing_contextmenu
position: 50
---

# Opening and Closing

By default, the ContextMenu opens and closes the items which contain children on `mouseover` and `mouseleave` with a small delay.

To customize its opening and closing behavior, utilize the following options:

* [Configuring the hover delay](#toc-delay-on-hover)

## Delay on Hover

To prevent the accidental opening or closing of the ContextMenu items, the component waits for 100 milliseconds before performing the action. To change the default delay, use the [`hoverOpenDelay`]({% slug api_layout_menuprops %}#toc-hoveropendelay) and [`hoverCloseDelay`]({% slug api_layout_menuprops %}#toc-hoverclosedelay) properties of the Menu.



{% meta height:270 %}
{% embed_file context-menu/open-close/main.vue preview %}
{% embed_file context-menu/open-close/main.js %}
{% endmeta %}


## Suggested Links

* [API Reference of the Menu]({% slug api_layout_menuprops %})
