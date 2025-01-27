---
title: Keyboard Navigation
page_title: Keyboard Navigation - DatePicker - Kendo UI for Vue
description: "Explore the keyboard navigation options provided by the Kendo UI DatePicker wrapper for Vue."
slug: keyboardnavigation_datepicker_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/dateinputs/datepicker/keyboard-navigation/"
position: 6
---

<div><WrapperBanner link="/kendo-vue-ui/components/dateinputs/datepicker/keyboard-navigation"></WrapperBanner></div>


# Keyboard Navigation

The keyboard support of the DatePicker is always available.

The DatePicker supports the following keyboard shortcuts:

| SHORTCUT | DESCRIPTION |
|:--- |:--- |
| `Access Key`+`w` | Focuses the DatePicker.|

When the popup is opened, the DatePicker supports the following keyboard shortcuts:

| SHORTCUT | DESCRIPTION |
|:--- |:--- |
| `Left Arrow` | Highlights the previous day part.|
| `Right Arrow` | Highlights the next day part.|
| `Up Arrow` | Highlights the same day from the previous week.|
| `Down Arrow` | Highlights the same day from the next week.|
| `Ctrl`+`Left Arrow` | Navigates to the previous month.|
| `Ctrl`+`Right Arrow` | Navigates to the next month.|
| `Ctrl`+`Up Arrow` | Navigates to the previous view.|
| `Ctrl`+`Down Arrow` | Navigates to the next view.|
| `Home` | Highlights the first day of the month.|
| `End` | Highlights the last day of the month.|
| `Enter` or `Space` | If in the `month` view, selects the highlighted day. In other views, navigates to lower view.|

When the popup is closed, the DatePicker supports the following keyboard shortcuts:

| SHORTCUT | DESCRIPTION |
|:--- |:--- |
| `Enter` | Triggers the `change` event.|
| `Esc` | Closes the popup.|
| `Alt`+`Up Arrow` | Closes the popup.|
| `Alt`+`Down Arrow` | Opens the popup.|


{% meta height:450 %}
{% embed_file datepicker/keyboard/main.vue preview %}
{% embed_file datepicker/keyboard/main.js %}
{% endmeta %}
```

## Suggested Links

* [Kendo UI DatePicker for jQuery](https://docs.telerik.com/kendo-ui/controls/editors/datepicker/overview)
* [API Reference of the DatePicker](https://docs.telerik.com/kendo-ui/api/javascript/ui/datepicker)
