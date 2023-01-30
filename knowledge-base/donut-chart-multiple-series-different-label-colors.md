---
title: Customize the Label Colors of a Donut Chart with Multiple Series  
description: An example on how to customize the labels of the a Kendo UI for Vue Native Donut Chart with multiple series.  
type: how-to
page_title: Customize the Labels of a Donut Chart with Multiple Series - Kendo UI for Vue Native Chart
slug: donut-chart-multiple-series-different-label-colors
tags: chart, charts, native chart, donut, label, color, customize, kendovue, native
res_type: kb
category: knowledge-base
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>3.3.2</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® Kendo UI for Vue Native</td>
	    </tr>
    </tbody>
</table>


## Description

The current Knowledge base article uses this [Donut Chart - Displaying Multiple Series](slug:donut_seriestypes_charts#toc-displaying-multiple-series) demo as a basis and shows how you can customize the labels of a Donut Chart with multiple series. 


**KB sections**

* [Solution description](#toc-solution-description)
* [Runnable example](#toc-runnable-example)

## Solution description

The customization of the `Donut Chart` series is based on the following function:
```js
labelVisual(e) {
  const defaultLabel = e.createVisual();
  const bbox = defaultLabel.bbox();
  const group = new Group();

  group.append(
    new Text(e.dataItem.value, [bbox.origin.x, bbox.origin.y], {
      font: `bold 15px Arial`,
      fill: {
        color: e.dataItem.labelColor,
      },
    })
  );
  return group;
}
```
The `labelColor` property defined in the dataItem of a Chart series item holds the color value we want for the Chart labels. 

In addition, we have the following `seriesLabels` data property to which the above method is passed.  
```js
seriesLabels: {
  visible: true,
  visual: this.labelVisual,
}
```

### Runnable example
{% meta height:500 %}
{% embed_file donut-chart-multiple-series-different-label-colors/main.vue preview %}
{% embed_file donut-chart-multiple-series-different-label-colors/main.js %}
{% embed_file donut-chart-multiple-series-different-label-colors/donut-series-data.json %}
{% endmeta %}
