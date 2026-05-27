---
title: Using Plugins
description: "Get started with the Kendo UI for Vue Native Editor and extend its functionality by using plugins."
slug: plugins_editor
position: 8
---

# Using Plugins

The Editor allows you to extend and customize its functionality and features by using plugins.
<!--
## Popup Tools

You can implement a plugin that renders a popup in the Editor and shows additional tools or supplementary information based on user selection.



{% meta height:300 %}
{% embed_file plugins/selection-tools/func/main.tsx preview %}
{% embed_file plugins/selection-tools/class/main.tsx preview %}
{% endmeta %} -->


## Placeholders

You can use a plugin to provide a placeholder functionality for the Editor which is similar to the [placeholder](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#The_placeholder_attribute) attribute of the HTML `input` element.



{% meta height:330 %}
{% embed_file plugins/placeholder/main.vue preview %}
{% embed_file plugins/placeholder/placeholder.js %}
{% embed_file plugins/placeholder/main.js %}
{% endmeta %}


## Read Only

A Read-Only functionality can be implemented using a plugin as well.

The following example demonstrates how to implement a plugin which provides Read-Only functionality.



{% meta height:330 %}
{% embed_file plugins/readonly/main.vue preview %}
{% embed_file plugins/readonly/main.js %}
{% embed_file shared/content-basic.js %}
{% endmeta %}


<!-- ## Input Rules

Input rules provide an option for modifying the input of the user on the fly and represent pairs of matches and corresponding actions. When the user input matches an input rule, the typed text is transformed based on the action of that rule.

The following example demonstrates how to implement input rules and attach them to the Editor.

Input rules in the example:

- Converts '- ' or '+ ' to a bullet list.
- Converts '1. ' or another number to an ordered list.
- Converts '# ', '## ', '### ', '#### ', '##### ', '###### ' into heading 1, 2, 3, 4, 5, and 6, according to the '#' characters count.
- Converts three backticks '\`\`\`' to a code block.
- Converts '> ' into a blockquote.
- Converts double dashes to an emdash.
- Converts three dots to an ellipsis character.
- Converts an URL to a link.
- Converts '!image[https://image-path/something.png]' to image.


{% meta height:430 %}
{% embed_file plugins/input-rules/func/main.tsx preview %}
{% endmeta %} -->


## Suggested Links

* [API Reference of the Editor]({% slug api_editor_editor %})
* [ProseMirror Plugin System](http://prosemirror.net/docs/ref/#state.Plugin_System)
