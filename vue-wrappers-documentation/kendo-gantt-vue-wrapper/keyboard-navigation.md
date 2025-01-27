---
title: Keyboard Navigation
page_title: Keyboard Navigation - Gantt - Kendo UI for Vue
description: "Explore the keyboard navigation options provided by the Kendo UI Gantt wrapper for Vue."
slug: keyboard_navigation_gantt
position: 7
---

<div><WrapperBanner></WrapperBanner></div>

# Keyboard Navigation

The keyboard navigation of the Gantt is always available.

The toolbar of the Gantt supports the following keyboard shortcuts:

| SHORTCUT                   |  DESCRIPTION |
|:---                        |:---  |
| `F10`                      | Focuses the toolbar.|
| `Tab`                      | Focuses the next toolbar item.|
| `Shift`+`Tab`              | Focuses the previous toolbar item.|
| `Enter` or `Space`         | Activates the toolbar item.|
| `Right Arrow`              | Focuses the next view when the focus is over the views container.|
| `Left Arrow`               | Focuses the previous view when the focus is over the views container.|

The timeline of the Gantt supports the following keyboard shortcuts:

| SHORTCUT                   |  DESCRIPTION |
|:---                        |:---  |
| `Delete`                   | Deletes the currently selected task or dependency.|

The tree-list header of the Gantt supports the following keyboard shortcuts:

| SHORTCUT                   |  DESCRIPTION |
|:---                        |:---  |
| `Enter`                    | Sorts by column.|

The tree-list data table of the Gantt supports the following keyboard shortcuts:

| SHORTCUT                   |  DESCRIPTION |
|:---                        |:---  |
| `Arrow Keys`               | Navigate over the cells.|
| `Enter`                    | Opens the cell editor.|
| `Esc`                      | Closes the cell editor.|
| `Space`                    | Selects the row of the currently highlighted cell.|
| `Delete`                   | Deletes the currently selected task.|
| `1`, `2`, or `3`           | Switch between the available views.|
| `Alt`+`Arrow Keys`         | Scrolls the timeline.|
| `Ctrl`+`Arrow Keys`        | Expands or collapses the summary row.|

The **Add Task** drop-down list of the Gantt supports the following keyboard shortcuts:

| SHORTCUT                   |  DESCRIPTION |
|:---                        |:---  |
| `Up Arrow`                 | Highlights the previous item.|
| `Down Arrow`               | Highlights the next item.|
| `Enter`                    | Selects the highlighted item.|
| `Esc`                      | Closes the drop-down list.|

{% meta height:750 %}
{% embed_file keyboard-navigation/main.vue preview %}
{% embed_file keyboard-navigation/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI Gantt for jQuery](https://docs.telerik.com/kendo-ui/controls/scheduling/gantt/overview)
* [API Reference of the Gantt Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/gantt)
