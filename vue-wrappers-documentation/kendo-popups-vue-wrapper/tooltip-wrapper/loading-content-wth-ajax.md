---
title: Loading Content with AJAX
page_title: Loading Content with AJAX - Tooltip - Kendo UI for Vue
description: "Load the content of the Kendo UI Tooltip wrapper for Vue over AJAX."
slug: loading_content_ajax_tooltip_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/tooltip/"
position: 4
---

<div><WrapperBanner link="/kendo-vue-ui/components/tooltip/"></WrapperBanner></div>    

# Loading Content with AJAX

The Tooltip provides the built-in option for asynchronously loading content from a URL.

The URL is expected to return an HTML fragment that can be loaded in the content area of the Tooltip. If the content which is passed to the Tooltip includes scripts, the scripts are executed.

```html-no-run
<div id="vueapp" class="vue-app">
    <kendo-tooltip id="target"
        :width="'250'"
        :height="'250'"
        :content-url="'https://demos.telerik.com/kendo-ui/content/web/tooltip/ajax/ajaxContent3.html'">
        Gorgonzola Telino
    </kendo-tooltip>
</div>
```

## Suggested Links

* [Kendo UI Tooltip for jQuery](https://docs.telerik.com/kendo-ui/controls/layout/tooltip/overview)
* [API Reference of the Tooltip Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/tooltip)
