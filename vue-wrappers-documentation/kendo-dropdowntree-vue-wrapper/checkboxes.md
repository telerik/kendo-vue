---
title: Checkboxes
page_title: Checkboxes - DropDownTree - Kendo UI for Vue
description: "Use the checkboxes functionality that enables multiple selection in the Kendo UI DropDownTree wrapper for Vue."
slug: checkboxes_dropdowntree_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/dropdowns/dropdowntree/"
position: 2
---

<div><WrapperBanner link="/kendo-vue-ui/components/dropdowns/dropdowntree"></WrapperBanner></div>

# Checkboxes

The checkboxes functionality enables multiple selection in the DropDownTree wrapper for Vue.

Once the `checkboxes` option is set to `true`, the DropDownTree provides the multiple selection functionality by rending each checked item as a `tag` in its input. You can remove the tags (items) through their **X** button which will automatically uncheck them in the drop-down.

Along with the standard checkbox support, the DropDownTree allows you to manage the checked state of all nodes. To enable this functionality, set the `checkAll` option to `true`.

The following example demonstrates how to enable the `checkboxes` and the multiple selection for the DropDownTree.

{% meta height:750 %}
{% embed_file checkboxes/main.vue preview %}
{% embed_file checkboxes/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI DropDownTree for jQuery](https://docs.telerik.com/kendo-ui/controls/editors/dropdowntree/overview)
* [API Reference of the DropDownTree Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdowntree)
