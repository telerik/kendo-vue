---
title: Appearance
description: 'Get started with styling the Kendo UI for Vue Native Editor content.'
slug: styling_editor
position: 7
---

# Styling the Editor Content

The Editor content can be styled via CSS and the styles needs to be added in the application or the page. If the Editor is in [Iframe Edit Mode]({% slug api_editor_editorprops %}#toc-defaulteditmode), the styles needs to be inserted in the editor's iframe document.

## Styling the Content in Iframe Edit Mode

By default, the Editor content is render inside an iframe and its styles are encapsulated inside that iframe. In this case the application styles will not affect the editor's content. To add custom styles for the Editor's content, we need to add a [style element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style) to the iframe document. This can be achieved using the [onLoaded]({% slug api_editor_editorprops %}#toc-onLoaded) event of the Editor.

The following example shows how to add custom styles to Editor's iframe document:



{% meta height:425 %}
{% embed_file styling-iframe/main.vue preview %}
{% embed_file styling-iframe/main.js %}
{% embed_file shared/content.js %}
{% endmeta %}


## Styling the Content in DIV Edit Mode

In [Div Edit Mode]({% slug api_editor_editorprops %}#toc-defaulteditmode) we can directly style the Editor content using CSS.

```jsx-no-run
<style>
    .k-editor .k-editor-content p {
        color: #53d2fa;
    }
</style>
```

## Suggested Links

* [API Reference of the Editor Component]({% slug api_editor_editor %})
* [API Reference of the Editor Props]({% slug api_editor_editorprops %})
* [Creating Custom Styles with ThemeBuilder]({% slug themebuilder %})
