---
title: Controlled Mode
description: "Control the value of the Kendo UI for Vue Native Editor in Vue projects."
slug: controlled_editor
position: 4
---

# Controlled Mode

By default, the Editor is in an uncontrolled mode.

## Controlling the Value

To manage the value of the Editor:

1. Use its [`value`]({% slug api_editor_editorprops %}#toc-value) property.
1. Handle the [`onChange`]({% slug api_editor_editorprops %}#toc-onchange) event.
1. Pass the new value through the props.



{% meta height:225 %}
{% embed_file controlled-value-doc/main.vue preview %}
{% embed_file controlled-value-doc/main.js %}
{% endmeta %}


## Using String Value

The Editor's [`value`]({% slug api_editor_editorprops %}#toc-value) property can also be a string. The HTML representation of the Editor's document needs to be obtained by the [`html`]({% slug api_editor_editorchangeevent %}#toc-html) getter of the onChange event object.

The following example demonstates how to use a string value of the Editor.



{% meta height:225 %}
{% embed_file controlled-value-string/main.vue preview %}
{% embed_file controlled-value-string/main.js %}
{% endmeta %}


## Using Uncontrolled Mode

To utilize the Editor in uncontrolled mode, use its [`defaultContent`]({% slug api_editor_editorprops %}#toc-defaultcontent) prop to set initial HTML and the editor's instance to get the edited HTML. [See example]({% slug content_editor %}).

## Suggested Links

* [API Reference of the Editor]({% slug api_editor_editorprops %})
* [Editor's value/document object](https://prosemirror.net/docs/guide/#doc)
