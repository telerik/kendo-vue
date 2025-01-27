---
title: serializationProps API
description: "API Index | serializationProps"
api_reference: true
slug: api_editor_serializationprops_wrapper
---

# SerializationProps

### serialization-custom `Function`

Defines custom serialization for the editable content. The `serialization-custom` method accepts a single parameter as a string and is expected to return a string.

### serialization-entities `Boolean`

Indicates whether the characters outside the ASCII range will be encoded as HTML entities. By default, they are encoded.

### serialization-scripts `Boolean`

Indicates whether inline scripts will be serialized and posted to the server.

### serialization-semantic `Boolean`

Indicates whether the font styles will be saved as semantic tags (`strong`, `em`, `span`) or as presentational tags (`b`, `i`, `u`, `font`). Used for outputting content for legacy systems.

## Suggested Links

* [`Serialization` in Kendo UI Editor for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/editor/configuration/serialization)
