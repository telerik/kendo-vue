---
title: Templates
description: "Customize the default content that is displayed by the Kendo UI for Vue Native Tooltip."
slug: templates_tooltip
position: 5
---

# Templates

You can provide a custom rendering for the content of the Tooltip.

By default, the Tooltip shows the `title` attribute value of the anchor element. To customize the default content, set the [`content`]({% slug api_tooltip_tooltipprops %}#toc-content) property of the Tooltip. `content` can accept a JSX element or another component and the `title` property of the anchor element will be received as props.



{% meta height:450 %}
{% embed_file templates/main.vue preview %}
{% embed_file templates/main.js %}
{% endmeta %}


## Suggested Links

* [API Reference of the Tooltip]({% slug api_tooltip %})
