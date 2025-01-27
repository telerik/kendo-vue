---
title: Keyboard Navigation
page_title: Keyboard Navigation - ListBox - Kendo UI for Vue
description: "Explore the keyboard navigation options provided by the Kendo UI ListBox wrapper for Vue."
slug: keyboard_navigation_listbox_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/listbox/globalization"
position: 6
---

<div><WrapperBanner link="/kendo-vue-ui/components/listbox/globalization"></WrapperBanner></div>    

# Keyboard Navigation

The keyboard navigation of the ListBox is always available.

To prevent the keyboard navigation, set `navigatable` to `false`. The `selectable` prop indicates whether the selection is single or multiple and is `single` by default.

The ListBox supports the following keyboard shortcuts:

| SHORTCUT      | DESCRIPTION |
|:---           |:--- |
| `Alt`+`w`     | Focuses the ListBox.|
| `Up Arrow`    | Selects the previous item.|
| `Down Arrow`  | Selects the next item.|
| `Del`         | Deletes the selected items.|
| `Ctrl`+`Space`| Selects or deselects an item.|
| `Shift`+`Up Arrow`    | Adds the previous item to the selected items.|
| `Shift`+`Down Arrow`  | Adds the next item to the selected items.|
| `Ctrl`+`Right Arrow`  | Adds the selected items to the connected ListBox.|
| `Ctrl`+`Left Arrow`   | Adds the selected items from the connected ListBox to the current.|
| `Ctrl`+`Up Arrow`     | Moves the focus to the previous item.|
| `Ctrl`+`Down Arrow`   | Moves the focus to the next item.|
| `Ctrl`+`Shift`+`Up Arrow`     | Shifts the selected items upwards.|
| `Ctrl`+`Shift`+`Down Arrow`   | Shifts the selected items downwards.|
| `Ctrl`+`Shift`+`Left Arrow`   | Transfers all items to the connected ListBox.|
| `Ctrl`+`Shift`+`Right Arrow`  | Transfers all items from the connected ListBox.|

{% meta height:400 %}
{% embed_file keyboard/main.vue preview %}
{% embed_file keyboard/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI Editor for jQuery](https://docs.telerik.com/kendo-ui/controls/editors/editor/overview)
* [API Reference of the Editor Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/editor)
