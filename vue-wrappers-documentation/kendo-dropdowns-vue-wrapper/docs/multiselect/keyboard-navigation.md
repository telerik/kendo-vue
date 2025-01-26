---
title: Keyboard Navigation
page_title: Keyboard Navigation - MultiSelect - Kendo UI for Vue
description: "Explore the keyboard navigation options provided by the Kendo UI MultiSelect wrapper for Vue."
slug: keyboard_navigation_multiselect_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/dropdowns/multiselect/keyboard-navigation/"
position: 9
---

<div><WrapperBanner link="/kendo-vue-ui/components/dropdowns/multiselect/keyboard-navigation"></WrapperBanner></div>

# Keyboard Navigation

The keyboard support of the MultiSelect is always available.

To apply the keyboard shortcuts, focus the MultiSelect by clicking the example area and pressing the `Tab` key.

When the popup is closed, the MultiSelect supports the following keyboard shortcuts:

| SHORTCUT  | DESCRIPTION |
|:---       |:--- |
| `Left Arrow`  | Highlights the previously selected item.|
| `Right Arrow` | Highlights the next selected item.|
| `Home`        | Selects the first selected item.|
| `End`         | Selects the last selected item.|
| `Delete`      | Removes the highlighted item from the selection.|
| `Backspace`   | Removes the previously selected item from the selection.|
| `Down Arrow`  | Opens the popup.|
| `Esc`         | Clears all selected items.|

When the popup is opened, the MultiSelect supports the following keyboard shortcuts:

| SHORTCUT    | DESCRIPTION |
|:---         |:--- |
| `Up Arrow`          | <ul><li>Highlights the previous item.</li> <li>Closes the popup if the first item is highlighted.</li></ul> |
| `Shift`+`Up Arrow`  | Selects the previous item.|
| `Down Arrow`        | Highlights the next item.|
| `Shift`+`Down Arrow`| Selects the next item.|
| `Home`              | Highlights the first item in the list.|
| `Ctrl`+`Shift`+`Home`| Selects all items from the beginning.|
| `End`               | Highlights the last item in the list.|
| `Ctrl`+`Shift`+`End`| Selects all items to the end.|
| `Page Up`           | Scrolls the popup up.|
| `Page Down`         | Scrolls the popup down.|
| `Enter`             | Selects the highlighted item.|
| `Ctrl`+`Space`      | Selects the highlighted item.|
| `Ctrl`+`A`          | Selects all items.|
| `Esc`               | Closes the popup.|

{% meta height:350 %}
{% embed_file multiselect/keyboard/main.vue preview %}
{% embed_file multiselect/keyboard/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI MultiSelect for jQuery](https://docs.telerik.com/kendo-ui/controls/editors/multiselect/overview)
* [API Reference of the MultiSelect Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/multiselect)
