---
title: Notes
description: "Display metadata for the series points or a specific part of an axis in the Kendo UI for Vue Chart."
slug: notes_chart_charts
---

# Notes

The Chart notes provide a way to display metadata for series points or for a specific part of an axis.

## Series Notes

To display additional information for series points, set the [`noteTextField`]({% slug api_charts_chartseriesitemprops %}#toc-notetextfield) of the series to a field from the data which contains the information.

### Setup

The following example demonstrates how to display notes for specific points.



{% meta height:465 %}
{% embed_file elements/notes/overview/main.vue preview %}
{% embed_file elements/notes/overview/main.js %}
{% endmeta %}


### Appearance

To change the way the notes are displayed, use the [`series.notes`]({% slug api_charts_chartseriesitemprops %}#toc-notes) options.

The following example demonstrates how to customize the appearance of the notes.

{% meta height:465 %}
{% embed_file elements/notes/appearance/main.vue preview %}
{% embed_file elements/notes/appearance/main.js %}
{% endmeta %}

## Axis Notes

To display additional information for a point of an axis, use the `notes` configuration of the axis. To specify the positions at which the notes will be displayed, use the `data.value` configuration. The value has to be a value on the axis or the index for category axis. To set the textual content of the notes, use the `data.label.text` option. Alternatively, set the `notes.labels.content` option to a function that returns the content of each note.

The following example demonstrates how to display notes for the axes.

{% meta height:465 %}
{% embed_file elements/notes/axis-notes/main.vue preview %}
{% embed_file elements/notes/axis-notes/main.js %}
{% endmeta %}

## Suggested Links

* [Axes]({% slug axes_chart_charts %})
* [Chart Area]({% slug chartarea_chart_charts %})
* [Crosshairs]({% slug crosshairs_chart_charts %})
* [Error Bars]({% slug crosshairs_chart_charts %})
* [Labels]({% slug labels_chart_charts %})
* [Legend]({% slug legend_chart_charts %})
* [Panes]({% slug panes_chart_charts %})
* [Plot Area]({% slug plotarea_chart_charts %})
* [Plot Bands]({% slug plotbands_chart_charts %})
* [Selection]({% slug selection_chart_charts %})
* [Series]({% slug series_chart_charts %})
* [Title]({% slug title_chart_charts %})
* [Tooltip]({% slug tooltips_chart_charts %})
* [API Reference of the Chart]({% slug api_charts %})
