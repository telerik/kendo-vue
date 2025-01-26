---
title: Dimensions
page_title: Dimensions - Window - Kendo UI for Vue
description: "Set the dimensions of the Kendo UI Window wrapper in Vue projects."
slug: dimensions_window_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/dialogs/window/dimensions-resizing/"
position: 1
---

<div><WrapperBanner link="/kendo-vue-ui/components/dialogs/window/dimensions-resizing"></WrapperBanner></div>    

# Dimensions

By default, the size of the Window depends on its content and the component does not provide preset dimensions.

If the Window uses an `iframe` element, it does not resize automatically according to the iframe content, because no relationship exists between the content and the size of the iframe. However, iOS devices do not support iframe scrolling and expand iframes according to their content. This behavior might increase the Window height too much. That is why it is not recommended to use the Window in an `iframe` mode on Apple touch devices.

If the component contains horizontally expandable block-level elements (including Kendo UI components such as the Grid, Editor, and others), it can expand horizontally until it touches the right edge of the browser viewport. In such cases, the component sticks to the right viewport edge and cannot be separated from it. This issue occurs because the Window is absolutely positioned with CSS. To avoid such behavior, set an appropriate width to the component or a (max-)width to its content. The lack of restrictions over the dimensions for the vertical expanding of the Window and its content might result in undesired behavior&mdash;for example, the rendition of a popup which is higher than the browser viewport.

{% meta height:470 %}
{% embed_file dimensions/main.vue preview %}
{% embed_file dimensions/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI Window for jQuery](https://docs.telerik.com/kendo-ui/controls/layout/window/overview)
* [API Reference of the Window Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/window)
