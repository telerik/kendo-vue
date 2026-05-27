---
title: Keyboard Navigation
description: "Get started with the Kendo UI for Vue Native Editor and use the Keyboard Navigation functionality."
slug: keyboard_navigation_editor
position: 15
---

# Keyboard Navigation

The Editor keyboard navigation functionality is enabled by default.

The navigatable elements are the Editor's Toolbar and content area. Switching the focus to Editor's Toolbar or content happens through `Tab` and `Shift + Tab` keys. The navigation in the toolbar happens using the arrow keys. To activate a tool, use `enter` or `space` key. To disable the toolbar navigation, set [`keyboardNavigation`]({% slug api_editor_editorprops %}#toc-keyboardnavigation) property to `false`. For additional information, see the [toolbar keyboard navigation]({% slug keyboard_navigation_toolbar %}) article.

### Actions applied to Editor content area:

| Shortcut | Behavior |
| -------- | -------- |
| `Ctrl/Cmd(Mac)+B` | Executes bold command. |
| `Ctrl/Cmd(Mac)+I` | Executes italic command. |
| `Ctrl/Cmd(Mac)+U` | Executes underline command. |
| `Ctrl/Cmd(Mac)+Z` | Executes undo command. |
| `Ctrl/Cmd(Mac)+Y` | Executes redo command. |
| `Shift+Enter` | Adds `<br/>` to content. |
| `Enter` | Adds `<p>` to content. |

{% meta height:890 %}
{% embed_file overview/main.vue preview %}
{% embed_file overview/main.js %}
{% embed_file shared/content-overview.js %}
{% endmeta %}


## Suggested Links

* [API Reference of the Editor]({% slug api_editor_editor %})
* [Toolbar keyboard navigation]({% slug keyboard_navigation_toolbar %})
