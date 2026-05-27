---
title: Templates
description: "Display custom content and customize the appearance of the header and footer of the Kendo UI for Vue Drawer."
slug: templates_drawer
position: 5
---

# Templates

The Drawer allows you to use templates to customize its appearance.

To customize the appearance of the items, use one of the following properties of the Drawer:

* [`navigationHeader`]({% slug api_layout_drawerprops %}#toc-navigationheader)&mdash;Specifies the contents above the rendered items.
* [`navigationFooter`]({% slug api_layout_drawerprops %}#toc-navigationfooter)&mdash;Specifies the contents below the rendered items.
* [`navigationContent`]({% slug api_layout_drawerprops %}#toc-navigationcontent)&mdash;Completely overrides the contents of the Drawer. Allows full customization of its appearance.

## Header and Footer Templates

You can add custom content above and under the rendered items of the Drawer by using the `navigationHeader` and the `navigationFooter` properties.

{% meta height:400 %}
{% embed_file drawer/templates/header-footer/main.vue preview %}
{% embed_file drawer/templates/header-footer/index.js %}
{% embed_file drawer/templates/header-footer/main.js %}
{% embed_file drawer/templates/header-footer/Inbox.vue %}
{% embed_file drawer/templates/header-footer/Notifications.vue %}
{% embed_file drawer/templates/header-footer/Calendar.vue %}
{% embed_file drawer/templates/header-footer/Attachments.vue %}
{% embed_file drawer/templates/header-footer/Favourites.vue %}
{% embed_file drawer/templates/header-footer/styles.css %}
{% endmeta %}

## Drawer Content Template

To display custom content inside the navigation of the Drawer, use the `navigationContent` property.

{% meta height:400 %}
{% embed_file drawer/templates/content/main.vue preview %}
{% embed_file drawer/templates/content/index.js %}
{% embed_file drawer/templates/content/main.js %}
{% endmeta %}


## Suggested Links

* [API Reference of the DrawerProps]({% slug api_layout_drawerprops %})
* [API Reference of the DrawerItemProps]({% slug api_layout_draweritemprops %})
