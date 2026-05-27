---
title: Globalization
description: "Globalize the Kendo UI for Vue Native Editor in Vue projects by adapting to specific cultures, loading translated messages, or using the RTL support."
slug: globalization_editor
position: 50
---

# Globalization

The globalization process combines the translation of component messages with adapting them to specific locales.

For more information on how globalization practices are implemented in Kendo UI for Vue Native, refer to the [overview article]({% slug overview_globalization %}). For more information on the globalization aspects which are available for each component.

## Internationalization

The internationalization process applies specific culture formats to a web application.

For more information, refer to:
* [Kendo UI for Vue Native documentation on internationalization]({% slug overview_intl %})
* [kendo-intl (the base Internationalization package on GitHub)](https://github.com/telerik/kendo-intl)

## Messages

The Editor supports the localization of its messages by utilizing the [Kendo UI for Vue Native Internationalization package]({% slug overview_intl %}).

The following table lists the built-in message keys and their default values.

|Message Key                                  |Default Value                                                           |
|:--------------------------------------------|:---------------------------------------------------------------------- |
|`editor.bold`                                | `Bold`                                                                 |
|`editor.italic`                              | `Italic`                                                               |
|`editor.underline`                           | `Underline`                                                            |
|`editor.strikethrough`                       | `Strikethrough`                                                        |
|`editor.subscript`                           | `Subscript`                                                            |
|`editor.superscript`                         | `Superscript`                                                          |
|`editor.hyperlink`                           | `Insert hyperlink`                                                     |
|`editor.hyperlink-dialog-title`              | `Insert hyperlink`                                                     |
|`editor.hyperlink-dialog-content-address`    | `Web address`                                                          |
|`editor.hyperlink-dialog-content-title`      | `Title`                                                                |
|`editor.hyperlink-dialog-content-newwindow`  | `Open link in new window`                                              |
|`editor.hyperlink-dialog-cancel`             | `Cancel`                                                               |
|`editor.hyperlink-dialog-insert`             | `Insert`                                                               |
|`editor.insertFile`                          | `Insert file`                                                          |
|`editor.insertfile-dialog-title`             | `Insert file`                                                          |
|`editor.insertfile-dialog-content-address`   | `Web address`                                                          |
|`editor.insertfile-dialog-content-title`     | `Title`                                                                |
|`editor.insertfile-dialog-cancel`            | `Cancel`                                                               |
|`editor.insertfile-dialog-insert`            | `Insert`                                                               |
|`editor.image`                               | `Insert image`                                                         |
|`editor.image-dialog-title`                  | `Insert image`                                                         |
|`editor.image-address`                       | `Web address`                                                          |
|`editor.image-title`                         | `Title`                                                                |
|`editor.image-altText`                       | `Alternate text`                                                       |
|`editor.image-width`                         | `Width (px)`                                                           |
|`editor.image-height`                        | `Height (px)`                                                          |
|`editor.image-cancel`                        | `Cancel`                                                               |
|`editor.image-insert`                        | `Insert`                                                               |
|`editor.viewHtml`                            | `View HTML`                                                            |
|`editor.viewHtml-dialog-title`               | `View HTML`                                                            |
|`editor.viewHtml-cancel`                     | `Cancel`                                                               |
|`editor.viewHtml-update`                     | `Update`                                                               |
|`editor.unlink`                              | `Remove hyperlink`                                                     |
|`editor.print`                               | `Print`                                                                |
|`editor.pdf`                                 | `Export to PDF`                                                        |
|`editor.foregroundColor`                     | `Color`                                                                |
|`editor.backgroundColor`                     | `Background color`                                                     |
|`editor.selectAll`                           | `Select All`                                                           |
|`editor.cleanFormatting`                     | `Clean formatting`                                                     |
|`editor.undo`                                | `Undo`                                                                 |
|`editor.redo`                                | `Redo`                                                                 |
|`editor.fontSize`                            | `Font Size`                                                            |
|`editor.fontName`                            | `Font Name`                                                            |
|`editor.format`                              | `Format`                                                               |
|`editor.alignLeft`                           | `Align text left`                                                      |
|`editor.alignCenter`                         | `Center text`                                                          |
|`editor.alignRight`                          | `Align text right`                                                     |
|`editor.alignJustify`                        | `Justify`                                                              |
|`editor.indent`                              | `Indent`                                                               |
|`editor.outdent`                             | `Outdent`                                                              |
|`editor.orderedList`                         | `Insert ordered list`                                                  |
|`editor.bulletList`                          | `Insert unordered list`                                                |
|`editor.createTable`                         | `Create a table`                                                       |
|`editor.insertTableHint`                     | `Create a {0} x {1} table`                                             |
|`editor.addRowBefore`                        | `Add row above`                                                        |
|`editor.addRowAfter`                         | `Add row below`                                                        |
|`editor.addColumnBefore`                     | `Add column on the left`                                               |
|`editor.addColumnAfter`                      | `Add column on the right`                                              |
|`editor.deleteRow`                           | `Delete row`                                                           |
|`editor.deleteColumn`                        | `Delete column`                                                        |
|`editor.deleteTable`                         | `Delete table`                                                         |
|`editor.mergeCells`                          | `Merge cells`                                                          |
|`editor.splitCell`                           | `Split cell`                                                           |
|`editor.findReplace-tool-title`              | `Find and Replace`                                                     |
|`editor.findReplace-dialog-title`            | `Find and Replace`                                                     |
|`editor.findReplace-tab-find`                | `Find`                                                                 |
|`editor.findReplace-tab-replace`             | `Replace`                                                              |
|`editor.findReplace-findWhat`                | `Find What:`                                                           |
|`editor.findReplace-replaceWith`             | `Replace With`                                                         |
|`editor.findReplace-replace`                 | `Replace`                                                              |
|`editor.findReplace-replaceAll`              | `Replace All`                                                          |
|`editor.findReplace-matchCase`               | `Match Case`                                                           |
|`editor.findReplace-matchWord`               | `Match whole word only`                                                |
|`editor.findReplace-matchCyclic`             | `Match cyclic (Wrap around)`                                           |
|`editor.findReplace-useRegExp`               | `Regular Expression`                                                   |
|`editor.findReplace-invalidRegExp`           | `Invalid regular expression.`                                          |
|`editor.findReplace-prevMatch`               | `Prev`                                                                 |
|`editor.findReplace-nextMatch`               | `Next`                                                                 |
|`editor.findReplace-matches`                 | `{0} of {1} matches`                                                   |

The following example demonstrates how to load and apply the messages.



{% meta height:490 %}
{% embed_file globalization/main.vue preview %}
{% embed_file globalization/main.js %}
{% embed_file globalization/deMessages.js %}
{% embed_file shared/content.js %}
{% endmeta %}


## Right-to-Left Support

The following example demonstrates how to utilize the RTL support for the Editor.



{% meta height:540 %}
{% embed_file rtl/main.vue preview %}
{% embed_file rtl/main.js %}
{% embed_file shared/content.js %}
{% endmeta %}


## Suggested Links

* [Globalization]({% slug overview_globalization %})
* [Internationalization]({% slug overview_intl %})
* [Localization]({% slug localization_intl %})
