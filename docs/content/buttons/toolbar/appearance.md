---
title: Appearance
description: 'Change the appearance of Kendo UI for Vue Toolbar in a Vue project.'
slug: appearance_toolbar
position: 3
---

# Appearance

The Kendo UI for Vue Toolbar allows selecting a predefined size and fill mode options that changes its appearance.

## Size

To change the default size of the Toolbar, set its [`size`]({% slug api_buttons_toolbarprops %}#toc-size) property which will change the padding of the Toolbar element. The available size options are:

-   `small`&mdash;sets the padding of the component to 4px 4px
-   `medium`&mdash;sets the padding of the component to 8px 8px
-   `large`&mdash;sets the padding of the component to 10px 10px

The following example demonstrates how to define the Toolbar size:

{% meta height:250 %}
{% embed_file toolbar/size/main.vue preview %}
{% embed_file toolbar/size/main.js %}
{% endmeta %}

## Fill Mode

To change the default fill mode of the Toolbar, set its [`fillMode`]({% slug api_buttons_toolbarprops %}#toc-fillMode) property. It accepts the following values:

-   `solid`&mdash;Applies a `background` color and `solid borders`.
-   `flat`&mdash;Sets a `transparent background` and `solid bottom border`.
-   `outline`&mdash;Sets a `transparent background` and `solid borders`.

> The `fillMode` property only affects the appearance of the ToolBar component and does not propagate to the [`ToolBar tools`]({% slug content_toolbar %}). Each ToolBar tool has a dedicated `fillMode` property that can be defined individually.

The following example demonstrates how to set `fillMode` only for the Toolbar component itself and how to set `fillMode` for both Toolbar and it's underlying tools.

{% meta height:500 %}
{% embed_file toolbar/fill-mode/main.vue preview %}
{% embed_file toolbar/fill-mode/main.js %}
{% endmeta %}

## Suggested Links

-   [API Reference of the ToolbarProps]({% slug api_buttons_toolbarprops %})
