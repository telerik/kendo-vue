---
title: Keyboard Navigation
page_title: Keyboard Navigation - DateRangePicker - Kendo UI for Vue
description: "Use the keyboard navigation in a Kendo UI DateRangePicker Vue wrapper."
slug: keyboard_navigation_daterangepicker_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/dateinputs/daterangepicker/keyboard-navigation/"
position: 6
---

<div><WrapperBanner link="/kendo-vue-ui/components/dateinputs/daterangepicker/keyboard-navigation"></WrapperBanner></div>

# Keyboard Navigation

The keyboard support of the DateRangePicker is always available.

The DateRangePicker supports the following keyboard shortcuts:

| SHORTCUT | DESCRIPTION |
|:--- |:--- |
| `Access Key`+`w` | Focuses the DateRangePicker.|

When the popup is opened, the DateRangePicker supports the following keyboard shortcuts:

| SHORTCUT | DESCRIPTION |
|:--- |:--- |
| `Left Arrow`  | Highlights the previous day part.|
| `Right Arrow` | Highlights the next day part.|
| `Up Arrow`    | Highlights the same day from the previous week.|
| `Down Arrow`  | Highlights the same day from the next week.|
| `Ctrl`+`Left Arrow`   | Navigates to the previous month.|
| `Ctrl`+`Right Arrow`  | Navigates to the next month.|
| `Ctrl`+`Up Arrow`     | Navigates to the previous view.|
| `Ctrl`+`Down Arrow`   | Navigates to the next view.|
| `Home`                | Highlights the first day of the month.|
| `End`                 | Highlights the last day of the month.|
| `Enter` or `Space`    | If in the `month` view, selects the highlighted day. In other views, navigates to lower view.|

When the popup is closed, the DateRangePicker supports the following keyboard shortcuts:

| SHORTCUT | DESCRIPTION |
|:--- |:--- |
| `Enter` | Triggers the `change` event.  |
| `Esc`   | Closes the popup.             |
| `Alt`+`Up Arrow`    | Closes the popup. |
| `Alt`+`Down Arrow`  | Opens the popup.  |

{% meta height:450 %}
{% embed_file daterangepicker/keyboard/main.vue preview %}
{% embed_file daterangepicker/keyboard/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI DateRangePicker for jQuery](https://docs.telerik.com/kendo-ui/controls/editors/daterangepicker/overview)
* [API Reference of the DateRangePicker](https://docs.telerik.com/kendo-ui/api/javascript/ui/daterangepicker)
