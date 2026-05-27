---
title: Resizing
description: "Learn more about the resizing options supported by the Kendo UI for Vue Native Editor and how to configure them in your Vue application."
slug: resizing_editor
position: 11
---

# Resizing

The Editor component provides a resizing feature that you can enable by setting the `resizable` prop. You can also allow the resizing of images by using the provided built-in plugin.

## Editor Resizing

To enable the Editor resizing, set the [`resizable`]({% slug api_editor_editorprops %}#toc-resizable) prop to `true`. To restrict the Editor width and height, set the desired `minWidth`, `minHeight`, `maxWidth`, and `maxHeight` values through Editor's `style` prop. You can configure the resize direction through the Editor's [`resize`](https://developer.mozilla.org/en-US/docs/Web/CSS/resize) `style` prop.

The following example shows how to enable and configure the resizing.

{% meta height:460 %}
{% embed_file resizing/editor/main.vue preview %}
{% embed_file resizing/editor/main.js %}
{% embed_file shared/content.js %}
{% endmeta %}

## Images Resizing

To enable the resizing of images, add the image resizing plugin to the plugins collection.

{% meta height:460 %}
{% embed_file resizing/images/main.vue preview %}
{% embed_file resizing/images/main.js %}
{% embed_file shared/content-overview.js %}
{% endmeta %}
