---
title: Modes
page_title: Modes - Editor - Kendo UI for Vue
description: "Use the editing modes of the Kendo UI Editor wrapper component for Vue."
slug: modes_editor_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/editor/rendering-mode/"
position: 1
---

<div><WrapperBanner link="/kendo-vue-ui/components/editor/rendering-mode/"></WrapperBanner></div>    

# Modes

Depending on the element from which you create the Editor, the component assumes either its [classic mode](#toc-classic-mode) or the [inline mode](#toc-inline-mode).

## Classic Mode

By default, the Kendo Editor is initialized in its classic mode. A hidden `<textarea>` element is placed on the page and holds the widget value. You can type in the `contenteditable iframe` that is created.

The classic Editor posts its value automatically because it is based on a `form` element. The tools of the Editor are always visible. Its content does not reside on the main web page and the styling of the page does not influence the editable content. To apply custom styles to the editable content, [inject them through the configuration of the Editor](https://docs.telerik.com/kendo-ui/api/javascript/ui/editor#configuration-stylesheets).

{% meta height:400 %}
{% embed_file modes/classic/main.vue preview %}
{% embed_file modes/classic/main.js %}
{% endmeta %}


## Inline Mode

When in inline mode, the Editor uses a content-editable `<div>` element to display and return its value.

The inline Editor does not post its value. Posting the value of an inline Editor is a matter that you need to take care of. The tools of the Editor are only visible when the widget is focused. Its content resides on the main web page and the styling of the page influences the editable content.

> It is recommended to use the inline Editor mode on iOS devices because the iOS Safari browser provides limited `iframe` support.

{% meta height:400 %}
{% embed_file modes/inline/main.vue preview %}
{% embed_file modes/inline/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI Editor for jQuery](https://docs.telerik.com/kendo-ui/controls/editors/editor/overview)
* [API Reference of the Editor Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/editor)
