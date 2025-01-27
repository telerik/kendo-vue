---
title: Loading Content with AJAX
page_title: Loading Content with AJAX - Window - Kendo UI for Vue
description: "Load the content of the Kendo UI Window wrapper for Vue over AJAX."
slug: loading_content_ajax_window_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/dialogs/window/"
position: 3
---

<div><WrapperBanner link="/kendo-vue-ui/components/dialogs/window"></WrapperBanner></div>    

# Loading Content with AJAX

The Window provides the built-in option for asynchronously loading content from a URL.

The URL is expected to return an HTML fragment that can be loaded in the content area of the Window. If the content which is passed to the Window includes scripts, the scripts are executed.

> * Loading full pages inside the Window with AJAX (pages with a `DOCTYPE`, `html`, `head`, and `body` tags) causes various undesired side-effects&mdash;breaking of the DOM tree, deletion of component instances, and throwing of Javascript errors.
> * If the Window has no set dimensions, it is expected to resize after the AJAX content is loaded and the position of the component on the screen gets changed. To center the Window, either [`center`](https://docs.telerik.com/kendo-ui/api/javascript/ui/window#methods-center) it in the [`refresh`](https://docs.telerik.com/kendo-ui/api/javascript/ui/window#events-refresh) event handler, or set some explicit [dimensions](https://docs.telerik.com/kendo-ui/api/javascript/ui/window#configuration-height).

{% meta height:370 %}
{% embed_file ajax/main.vue %}
{% embed_file ajax/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI Window for jQuery](https://docs.telerik.com/kendo-ui/controls/layout/window/overview)
* [API Reference of the Window Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/window)
