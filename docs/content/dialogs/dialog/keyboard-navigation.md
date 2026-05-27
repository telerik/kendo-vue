---
title: Keyboard Navigation
description: "Use the KendoVue Dialog keyboard navigation in Vue projects."
slug: keyboard_navigation_dialog
position: 6
---

# Keyboard Navigation

The keyboard navigation of the Dialog is always available.

When the Dialog is opened, the initial focus is set on the `Dialog` element. This approach enables the user to immediately select or navigate between the action buttons by using the `Tab` and `Shift`+`Tab` keys, and to close the Dialog with the `Esc` button.

| SHORTCUT                            | DESCRIPTION                                        |
|:---                                 |:---                                                |
| `Esc`                               | Calls the `onClose` event handler.                 |
| `Shift`+`Tab`                       | Moves the focus to the previous focusable element. |
| `Tab`                               | Moves the focus to the next focusable element.     |


The following example is based on the official [accessibility standard](https://www.w3.org/TR/wai-aria-practices/examples/dialog-modal/dialog.html) for a modal dialog.


{% meta height:580 %}
{% embed_file dialog/keyboard/main.vue preview %}
{% embed_file dialog/keyboard/main.js %}
{% endmeta %}

## Suggested Links

* [Get Started with the Dialog]({% slug overview_dialog %})
* [API Reference of the Dialog]({% slug api_dialogs_dialogprops %})
