---
title: Position
page_title: Position - Window - Kendo UI for Vue
description: "Handle the position and open the Kendo UI Window wrapper in Vue projects."
slug: position_window_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/dialogs/window/positioning-dragging/"
position: 2
---

<div><WrapperBanner link="/kendo-vue-ui/components/dialogs/window/positioning-dragging"></WrapperBanner></div>    

# Position

The Window is usually opened as a result of a user action and, basically, can be initialized as a non-visible component and then opened when it is needed.

It is recommended to center the Window rather than open it near the HTML element that is used to define its content. If the Window content is loaded with AJAX, the centering of its position occurs after the request completes. For more information on how to handle the positioning and opening, refer to the [API reference of the Window](https://docs.telerik.com/kendo-ui/api/javascript/ui/window).

{% meta height:370 %}
{% embed_file position/main.vue preview %}
{% embed_file position/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI Window for jQuery](https://docs.telerik.com/kendo-ui/controls/layout/window/overview)
* [API Reference of the Window Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/window)
