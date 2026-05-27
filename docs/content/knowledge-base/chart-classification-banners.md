---
title: Add Classification Banners to Charts and Exported Images
description: Learn how to add classification labels (like UNCLASSIFIED) to Kendo UI for Vue Charts and include them in exported images.
type: how-to
page_title: Add Classification Banners to Charts and Exported Images - Kendo UI for Vue Native Chart
slug: chart-classification-banners
tags: chart, export, classification, banner, label, image-export
res_type: kb
category: knowledge-base
ticketid: 1709507
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>8.0.1</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® Kendo UI for Vue Native</td>
	    </tr>
    </tbody>
</table>

## Description

I need to add classification banners (such as "UNCLASSIFIED") to charts, pages, and exported images. The classification labels should appear at the top left and bottom right of the chart, and must be included when exporting the chart to an image.

## Solution

To add classification banners to Kendo UI for Vue Charts that persist in exported images, display the labels using HTML elements in the UI, then use the `@progress/kendo-drawing` API to add them to the exported image. Use `exportVisual()` to get the chart's drawing visual and calculate positions based on the chart's bounding box (`bbox()`). Append `Text` elements for top-left and bottom-right labels, insert a solid background using `Path.fromRect()`, then export with `exportImage()` and save using `@progress/kendo-file-saver`.

The following example demonstrates adding "UNCLASSIFIED" labels that appear both on screen and in the exported image:

<demo metaUrl="knowledge-base/chart-classification-banners/" height="600"></demo>

## See Also

* [Chart Export](slug://export_chart_charts)
* [Chart API](slug://api_charts)
* [Drawing API](https://www.telerik.com/kendo-vue-ui/components/drawing/)
