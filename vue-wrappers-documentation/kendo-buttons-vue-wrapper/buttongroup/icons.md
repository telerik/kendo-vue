---
title: Icon ButtonGroup
page_title: Icon ButtonGroup - ButtonGroup - Kendo UI for Vue
description: "Add images or predefined and custom icons to the Kendo UI ButtonGroup wrapper for Vue."
slug: icons_buttongroup_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/buttons/buttongroup/"
position: 3
---

<div><WrapperBanner link="/kendo-vue-ui/components/buttons/buttongroup"></WrapperBanner></div>

# Icon ButtonGroup

You can enhance the meaning of the context by adding an icon to the buttons within the ButtonGroup.

The ButtonGroup allows the use of:
* [Predefined icons](#toc-predefined-icons)
* [Icon-only buttons](#toc-icon-only-buttons)

## Predefined Icons

You can use a set of ready-to-use Kendo UI font icons. For the full list of predefined font icons, refer to [this article](https://docs.telerik.com/kendo-ui/styles-and-layout/icons-web).

To set a Button icon, either:
* Add an `img` element inside the `<li>` element of the Button, or
* Set a `data-icon` attribute to the `<li>` element of the Button.

The following example demonstrates how to implement font icons by using the `data-icon` attribute.

{% meta height:350 %}
{% embed_file buttongroup/icon/predefined/main.vue preview %}
{% embed_file buttongroup/icon/predefined/main.js %}
{% endmeta %}

## Icon-Only Buttons

To implement icon-only buttons within a ButtonGroup, do not set any text to the component.

{% meta height:350 %}
{% embed_file buttongroup/icon/icon-only/main.vue preview %}
{% embed_file buttongroup/icon/icon-only/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI ButtonGroup for jQuery](https://demos.telerik.com/kendo-ui/buttongroup/index)
* [API Reference of the ButtonGroup Widget](https://docs.telerik.com/kendo-ui/api/javascript/mobile/ui/buttongroup)
