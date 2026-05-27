---
title: Adaptive Rendering
description: 'Enable adaptive rendering for the Kendo UI for Vue Toolbar in Vue projects.'
slug: adaptive_rendering_toolbar
position: 4
---

# Adaptive Rendering

The Toolbar provides options for enabling adaptive rendering for its tools. This functionality allows the component to adapt to the screen size by adjusting the rendering of the overflowing tools.

By default, the ToolBar allows you to choose from three different overflow modes for smaller screen sizes:

-   [Scroll Mode](#toc-scroll-mode)
-   [Section Mode](#toc-section-mode)

## Scroll Mode

The Toolbar allows you to scroll through its tools when they cannot fit in the component boundaries. It provides a rich API for customizing the scroll logic and the Toolbar appearance based on your preference.

To enable the scroll overflow mode, set the [`overflow`]({% slug api_buttons_toolbarprops %}#toc-overflow) property of the Toolbar to `scroll`.

The Toolbar further enables you to configure the following options:

-   `scrollButtons`&mdash;Determines the visibility behavior of the scroll buttons in the tab list. The default value is `auto`.
-   `scrollButtonsPosition`&mdash;Allows customizing the position of the scroll buttons. The default value is `split`.
-   `buttonScrollSpeed`&mdash;Sets the toolbar tools scroll speed in pixels when clicking the scroll buttons. The default value is `100px`.
-   `prevButton`&mdash;Allows specifying a custom component for the `previous` scroll button.
-   `nextButton`&mdash;Allows specifying a custom component for the `next` scroll button.

The following example demonstrates how to make the ToolBar tools scrollable.

{% meta height:350 %}
{% embed_file toolbar/overflow-scroll/main.vue preview %}
{% embed_file toolbar/overflow-scroll/main.js %}
{% embed_file toolbar/overflow-scroll/ToolbarScrollConfigurator.vue %}
{% endmeta %}

## Section Mode

The Toolbar enables you to hide the tools that do not fit its boundaries in an overflow section. To enable the section overflow mode, set the [`overflow`]({% slug api_buttons_toolbarprops %}#toc-overflow) property of the Toolbar to `section`.

The following example demonstrates how to render overflowing ToolBar tools in a popup using their initial components and layout.

{% meta height:400 %}
{% embed_file toolbar/overflow-section/main.vue preview %}
{% embed_file toolbar/overflow-section/main.js %}
{% endmeta %}

## Suggested Links

-   [API Reference of the ToolBarProps]({% slug api_buttons_toolbarprops %})
-   [ToolBar `size` options]({% slug appearance_toolbar %}#toc-size)
-   [ToolBar `fillMode` options]({% slug appearance_toolbar %}#toc-fillmode)
