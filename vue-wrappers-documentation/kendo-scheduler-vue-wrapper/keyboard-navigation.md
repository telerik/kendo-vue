---
title: Keyboard Navigation
page_title: Keyboard Navigation - Scheduler - Kendo UI for Vue
description: "Use the keyboard in order to perform selection and navigation in Kendo UI Scheduler wrapper for Vue."
slug: keyboard_navigation_scheduler_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/scheduler/keyboard-navigation/"
position: 8
---

<div><WrapperBanner link="/kendo-vue-ui/components/scheduler"></WrapperBanner></div> 

# Keyboard Navigation

The keyboard navigation of the Scheduler is always available.

The toolbar of the Scheduler supports the following keyboard shortcuts:

| SHORTCUT                   |DESCRIPTION |
|:---                        |:---  |
| `F10`                      | Focuses the toolbar.|
| `Tab`                      | Focuses the next toolbar item.|
| `Shift`+`Tab`              | Focuses the previous toolbar item.|
| `Enter` or `Space`         | Activates the toolbar item.|
| `Right Arrow`              | Focuses the next view when the focus is on the view container.|
| `Left Arrow`               | Focuses the previous view when the focus is on the view container.|

The table of the Scheduler supports the following keyboard shortcuts:

| SHORTCUT                   |DESCRIPTION |
|:---                        |:---  |
| `Arrow Keys`               | Changes the selected cell.|
| `Enter`                    | <ul><li>Creates a new event on the selected cells.</li> <li>Opens the **Edit** window for the selected event.</li></ul>|
| `Tab`                      | Focuses the next available event.|
| `Shift`+`Tab`              | Focuses the previous available event.|
| `1` to `5`                 | Switches between the available views.|
| `Esc`                      | Closes the **Edit** popup window.|
| `Shift`+`Arrow Keys`       | Selects multiple cells.|

The following example demonstrates how to implement the `Enter` and `Space` keyboard shortcuts.

{% meta height:665 %}
{% embed_file keyboard/main.vue preview %}
{% embed_file keyboard/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI Button for jQuery](https://docs.telerik.com/kendo-ui/controls/navigation/button/overview)
* [API Reference of the Button Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/button)
