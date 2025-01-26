---
title: Editing
page_title: Editing - Diagram - Kendo UI for Vue
description: "Get an overview of the editing functionality of the Kendo UI Diagram wrapper for Vue."
slug: editing_diagram
position: 2
---

<div><WrapperBanner></WrapperBanner></div>

# Editing

The Diagram enables you to add tools and shape forms and utilize its layout options.

## Setup

* [Enabling the editing functionality](#toc-enable-editing)
* [Adding records](#toc-adding-records)
* [Deleting records](#toc-deleting-records)
* [Configuring the shape model fields](#configuring-the-shape-model-fields)
* [Configuring the connection model fields](#configuring-the-connection-model-fields)

For more information, refer to the [article on editing the Kendo UI Diagram](https://docs.telerik.com/kendo-ui/controls/diagrams-and-maps/diagram/editing).

### Enabling Editing

To enable the editing of the Diagram widget:
1. Configure the DataSource for the remote CRUD operations.
1. Configure the `connectionsDataSource` for the remote CRUD operations. If you skip setting the `connectionsDataSource`, the editing support of the Diagram will be turned off.
1. Declare the `Fields Definition: dataSource` schema.
1. Declare the `Fields Definition: connectionsDataSource` schema.

### Adding Records

To enable the insertion of new records, configure the toolbar of the Diagram. The `createShape` tool is added by default.

### Deleting Records

To enable the deletion of records, add a `delete` tool.

### Configuring the Shape Model Fields

Each shape model field is updated upon user interaction.

The shape model provides the following fields:
* (Mandatory) `id`&mdash;Accepts numbers. Represents the unique identifier of the shape. A shape without an `id` field will not be connected.
* (Optional) `type`&mdash;Accepts strings. Represents the shape type.
* (Optional) `text`&mdash;Accepts strings. Represents the shape text.
* (Optional) `x`&mdash;Accepts numbers. Represents the `x` position of the shape.
* (Optional) `y`&mdash;Accepts numbers. Represents the `y` position of the shape.
* (Optional) `width`&mdash;Accepts numbers. Represents the width of the shape.
* (Optional) `height`&mdash;Accepts numbers. Represents the height of the shape.

### Configuring the Connection Model Fields

Each connection model field is updated upon user interaction.

The connection model provides the following fields:
* (Mandatory) `id`&mdash;Accepts numbers. Represents the unique identifier of the connection.
* (Optional) `text`&mdash;Accepts strings. Represents the text of the connection.
* (Optional) `from`&mdash;Accepts numbers. Represents the `id` shape of the from connection.
* (Optional) `to`&mdash;Accepts numbers. Represents the `id` shape of the to connection.
* (Optional) `fromX`&mdash;Accepts numbers. Represents the `x` position of the `from` connection. If `from` is set, this position is not applied.
* (Optional) `fromY`&mdash;Accepts numbers. Represents the `y` position of the `from` connection. If `from` is set, this position is not applied.
* (Optional) `toX`&mdash;Accepts numbers. Represents the `x` position of the `to` connection. If `from` is set, this position is not applied.
* (Optional) `toY`&mdash;Accepts numbers. Represents the `y` position of the `to` connection. If `from` is set, this position is not applied.
* (Optional) `fromConnector`&mdash;Accepts strings. Represents the name of the source shape connector.
* (Optional) `toConnector`&mdash;Accepts strings. Represents the name of the target shape connector.

{% meta height:660 %}
{% embed_file editing/main.vue preview %}
{% embed_file editing/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI Diagram for jQuery](https://docs.telerik.com/kendo-ui/controls/diagrams-and-maps/diagram/overview)
* [API Reference of the Diagram Widget](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/diagram)
