---
title: Immutable Elements
page_title: Immutable Elements - Editor - Kendo UI for Vue
description: "Prevent editing of predefined elements in the content area of the Kendo UI Editor wrapper for Vue"
slug: immutables_editor_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/editor/"
position: 6
---

<div><WrapperBanner link="/kendo-vue-ui/components/editor/"></WrapperBanner></div>    

# Immutable Elements

The Editor enables you to predefine elements in the content area that cannot be edited by the end user.

You can define the immutable elements in the content area by using the `contenteditable="false"` attribute.

The following example demonstrates how to use the [`immutables.serialization`](https://docs.telerik.com/kendo-ui/api/javascript/ui/editor/configuration/immutables#immutables.serialization) and [`immutables.deserialization`](https://docs.telerik.com/kendo-ui/api/javascript/ui/editor/configuration/immutables#immutables.deserialization) options to change the data which is displayed in the `viewHtml` dialog.

{% meta height:820 %}
{% embed_file immutable/main.vue preview %}
{% embed_file immutable/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI Editor for jQuery](https://docs.telerik.com/kendo-ui/controls/editors/editor/overview)
* [API Reference of the Editor Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/editor)
