---
title: Tabs
description: "Instantiate and set the configuration options for the Kendo UI for Vue Native TabStrip tabs in Vue projects."
slug: tabs_tabstrip
position: 30
---

# Tabs

The Kendo UI for Vue Native Tabstrip provides configuration options for:

* [Setting the titles of its tabs](#toc-titles)
* [Displaying tabs on initial loading](#toc-tabs-on-initial-loading)
* [Setting the tabs position](#tab-position)
* [Setting the tabs alignment](#tab-alignment)
* [Enabling and disabling its tabs](#toc-disabled-state)
* [Implementing closable tabs](#toc-closable-tabs)

## Titles

You can handle the title of each TabStrip tab by using the [`title`]({% slug api_layout_tabstriptabproperties %}#toc-title) attribute of the tab and render plain text in it.

{% meta height:300 %}
{% embed_file tabstrip/tabs/titles/main.vue preview %}
{% embed_file tabstrip/tabs/titles/main.js %}
{% endmeta %}

## Tabs on Initial Loading

The TabStrip displays no tabs upon its initial loading. To change this behavior, set the [`selected`]({% slug api_layout_tabstripprops %}#toc-selected) property of the TabStrip component.

{% meta height:300 %}
{% embed_file tabstrip/tabs/initial/main.vue preview %}
{% embed_file tabstrip/tabs/initial/main.js  %}
{% endmeta %}

## Tab Position

The [`tabPosition`]({% slug api_layout_tabstripprops %}#toc-tabposition) property allows placing the `TabStripNavigation` on different positions around the content.

{% meta height:440 %}
{% embed_file tabstrip/tabs/position/main.vue preview %}
{% embed_file tabstrip/tabs/position/main.js  %}
{% endmeta %}

## Tab Alignment

The [`tabAlignment`]({% slug api_layout_tabstripprops %}#toc-tabalignment) property allows aligning the tabs to `start`, `center`, `end`, `justify`, or `stretched`.

{% meta height:600 %}
{% embed_file tabstrip/tabs/alignment/main.vue preview %}
{% embed_file tabstrip/tabs/alignment/main.js %}
{% endmeta %}

## Disabled State

You can disable a specific TabStrip tab by setting the [`disabled`]({% slug api_layout_tabstriptabproperties %}#toc-disabled) property to `true`.

{% meta height:300 %}
{% embed_file tabstrip/tabs/disabled/main.vue preview %}
{% embed_file tabstrip/tabs/disabled/main.js %}
{% endmeta %}

## Closable Tabs

You can enable the user to close specific TabStrip tabs. The implementation of the closable tabs functionality requires you to use a custom component and render a title with a button for closing the tab.

{% meta height:300 %}
{% embed_file tabstrip/tabs/closable-tabs/main.vue preview %}
{% embed_file tabstrip/tabs/closable-tabs/Title.vue %}
{% embed_file tabstrip/tabs/closable-tabs/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the Tabstrip]({% slug api_layout_tabstripprops %})
