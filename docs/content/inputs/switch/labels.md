---
title: Labels
description: "Set the labels of the Kendo UI for Vue Switch in Vue projects."
slug: labels_switch
position: 5
---

# Labels

The Switch enables you to control the title of its labels.

## Setting Up the Titles

To set the behavior of the labels, use the [`onLabel`]({% slug api_inputs_switchprops %}#toc-onlabel) and [`offLabel`]({% slug api_inputs_switchprops %}#toc-offlabel) properties, which accept `string` parameters. Note that the Switch does not support long custom labels.



{% meta height:110 %}
{% embed_file switch/labels/main.vue preview %}
{% embed_file switch/labels/main.js %}
{% endmeta %}


## Styling the Labels

By design, the Switch does not render any labels when the component is styled with the Kendo UI for Vue Bootstrap or Material theme. To change the default setup and achieve any of the additional predefined layouts, refer to the article on [changing the Switch layout](https://github.com/telerik/kendo-themes/wiki/Change-the-Switch-Layout) in the kendo-themes Wiki. For more information, refer to [issue #567](https://github.com/telerik/kendo-themes/issues/567).

## Suggested Links

* [API Reference of the Switch]({% slug api_inputs_switchprops %})
