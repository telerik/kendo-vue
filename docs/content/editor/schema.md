---
title: Modifying the Schema
description: "Get started with the Kendo UI for Vue Native Editor by customizing the built-in schema which describes the nodes and marks that can be included in the document."
slug: schema_editor
position: 9
---

# Modifying the Schema

Each document of the Editor conforms to a specific [schema](http://prosemirror.net/docs/ref/#model.Document_Schema) which describes the [nodes](http://prosemirror.net/docs/ref/#model.NodeSpec) and the [marks](https://prosemirror.net/docs/ref/#model.MarkSpec) that the document may contain.

The nodes conform to the HTML elements such as paragraphs, headings, lists, tables, images, and so on. The marks conform to the inline formatting options such as Bold, Italic, FontSize, and so on. By modifying the default, built-in schema, you can add additional types of nodes and marks as well as edit and remove the existing ones.

## Modifying the Default Schema

The following example demonstrates how to:
- Add a new node to nodes object of the schema.
- Add a new mark to marks object of the schema.
- Add a custom attribute to the existing nodes.



{% meta height:550 %}
{% embed_file schema-edit/main.vue preview %}
{% embed_file schema-edit/main.js %}
{% embed_file schema-edit/new-node.js %}
{% embed_file schema-edit/new-mark.js %}
{% endmeta %}


## Creating Custom Schema

The following example demonstrates how to implement a custom Editor schema.



{% meta height:450 %}
{% embed_file schema-custom/main.vue preview %}
{% embed_file schema-custom/main.js %}
{% embed_file schema-custom/schema.js %}
{% embed_file schema-custom/schema-utils.js %}
{% embed_file shared/content.js %}
{% endmeta %}


## Suggested Links

* [API Reference of the Editor]({% slug api_editor_editor %})
* [ProseMirror Document Schema](http://prosemirror.net/docs/ref/#model.Document_Schema)
