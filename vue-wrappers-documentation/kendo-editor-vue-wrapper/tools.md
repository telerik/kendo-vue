---
title: Tools
page_title: Tools - Editor - Kendo UI for Vue
description: "Utilize the complete set of the editing tools when using the Kendo UI Editor wrapper component for Vue."
slug: tools_editor_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/editor/tools/"
position: 2
---

<div><WrapperBanner link="/kendo-vue-ui/components/editor/tools/"></WrapperBanner></div>    

# Tools

The Editor provides a rich set of tools that can be used for editing the content through the `<kendo-editor-tool>` component.

## Available Tools

If you do not define any tools for the Editor, it applies a default toolset for text formatting. For more information on the `tools` property, refer to the [API of the Kendo UI Editor widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/editor#configuration-tools).

{% meta height:400 %}
{% embed_file tools/available/main.vue preview %}
{% embed_file tools/available/main.js %}
{% endmeta %}

## Custom Tools

The Editor allows you to add custom tools which are defined in the `tools` array and, in this way, to extend the `tools` functionality.

{% meta height:400 %}
{% embed_file tools/custom-tools/main.vue preview %}
{% embed_file tools/custom-tools/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI Editor for jQuery](https://docs.telerik.com/kendo-ui/controls/editors/editor/overview)
* [API Reference of the Editor Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/editor)
