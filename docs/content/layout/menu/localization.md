---
title: Localization
description: "Learn how to use the LocalizationProvider component to change the language of the Menu component."
slug: localization_menu
position: 65
---

# Menu Localization

You can dynamically change the Menu language when changing the language of your application. 

## Basic configuration

To implement the Menu translation, use the following steps:
1. Wrap the `Menu` in the `LocalizationProvider` component.
1. Import the `Menu` texts for the different languages and load them using the `loadMessages` function.
1. Define the all single `Menu` items as a computed property and refer each of them in the definition of the `items` array as it is demonstrated in the following demo.


{% meta height:250 %}
{% embed_file menu/localization/main.vue preview %}
{% embed_file menu/localization/main.js %}
{% embed_file menu/localization/Menu.vue %}
{% embed_file menu/localization/en-US.js %}
{% embed_file menu/localization/es.js %}
{% embed_file menu/localization/fr.js %}
{% endmeta %}


## Suggested Links

* [API Reference of the Menu]({% slug api_layout_menuprops %})
* [Layout Components Globalization]({% slug rtl_layout %})
* [Kendo UI for Vue Globalization]({% slug overview_globalization %})
