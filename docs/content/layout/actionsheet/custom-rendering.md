---
title: Custom Rendering
description: "Learn more about the ActionSheet custom rendering options and customize the appearance of the items in Vue projects."
slug: custom_rendering_actionsheet
position: 2
---

# Custom Rendering

The ActionSheet component has the following building blocks:

* `Header`— Rendered on top of the content. By default, it includes a [`title`]({% slug api_layout_actionsheetprops %}#toc-title) and a [`subTitle`]({% slug api_layout_actionsheetprops %}#toc-subtitle).
* `Content`— Renders the main content area of the ActionSheet. By default, it contains a list of items that you can split into two groups. The content can be completely customized.
* `Footer`— Rendered below the content area of the ActionSheet.

The ActionSheet allows you to use custom components to customize the appearance of its building blocks.

To render custom content, you can use the following properties in a combination with a slot template:

* [`header`]({% slug api_layout_actionsheetprops %}#toc-header) — Specifies the template that will be used in the header section of the ActionSheet.
* [`content`]({% slug api_layout_actionsheetprops %}#toc-content) — Specifies the template that overrides the `Content` building block section.
* [`footer`]({% slug api_layout_actionsheetprops %}#toc-footer) — Specifies the template that will be displayed in the footer area of the ActionSheet.

## Header Customization

Use the `header` property to customize the header section of the ActionSheet.

>The `header` prop definition overrides the ActionSheet's `title` and `subTitle` options.

The following example demonstrates the usage of the `header` property in action.

{% meta height:400 %}
{% embed_file actionsheet/custom-rendering/header/main.vue preview %}
{% embed_file actionsheet/custom-rendering/header/main.js %}
{% endmeta %}

## Content Customization

The `content` property allows you to completely customize the main content area of the ActionSheet. This enables you to render custom content even when an [`items`]({% slug api_layout_actionsheetprops %}#toc-items) collection is not provided.

The following example demonstrates the usage of the `component` property in action.

{% meta height:400 %}
{% embed_file actionsheet/custom-rendering/content/main.vue preview %}
{% embed_file actionsheet/custom-rendering/content/main.js %}
{% endmeta %}

## Footer Customization

Use the `footer` property to render a footer below the `Content` ActionSheet area.

The following example demonstrates the the usage of the `footer` property in action.

{% meta height:400 %}
{% embed_file actionsheet/custom-rendering/footer/main.vue preview %}
{% embed_file actionsheet/custom-rendering/footer/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the ActionSheet]({% slug api_layout_actionsheetprops %})
* [API Reference of the ActionSheetItem]({% slug api_layout_actionsheetitemprops %})
