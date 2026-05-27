---
title: ChartSeriesItemTooltipProps
description: "Learn how to build custom functionality when working with the Vue Charts by Kendo UI with the help of the ChartSeriesItemTooltipProps."
api_reference: true
type: inner_api
slug: api_charts_chartseriesitemtooltipprops
---

# ChartSeriesItemTooltipProps
Represents the props of the Kendo UI for Vue ChartSeriesItemTooltip component ([see example]({% slug tooltips_chart_charts %})).


<table class="api-table api-table-properties">
<thead>
<tr>
<th class="th-name">Name</th>
<th class="th-type">Type</th>
<th class="th-default">Default</th>
<th class="th-desc">Description</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td class="table-cell-name">


#### background?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The background color of the tooltip. Accepts a valid CSS color string, including hex and rgb.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### border?


</td>
<td type class="table-cell-type">


<code>


[Border]({% slug api_charts_border %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The border configuration options.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### color?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The text color of the tooltip. Accepts a valid CSS color string, including hex and rgb.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### font?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The font of the tooltip.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### format?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The format of the labels. Uses the [`format`]({% slug api_intl_intlservice %}#toc-format) method of IntlService.

The available format placeholders are:
- Area, Bar, Column, Line, Funnel, Pyramid, Pie, radarArea, radarColumn and radarLine: {0} - value.
- Bubble: {0} - x value, {1} - y value, {2} - size value, {3} - category name.
- Scatter, scatterLine: {0} - x value, {1} - y value.
- PolarArea, polarLine and polarScatterL: {0} - x value (degrees), {1} - y value.
- Candlestick and OHLC: {0} - open value, {1} - high value, {2} - low value, {3} - close value, {4} - category name.
- RangeArea, rangeBar, rangeColumn: {0} - from value, {1} - to value.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### padding?


</td>
<td type class="table-cell-type">


<code>


number | [Padding]({% slug api_charts_padding %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The padding of the tooltip. A numeric value sets all paddings.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### render?


</td>
<td type class="table-cell-type">


<code>


string | object | Function


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">





</td>
</tr>
<tr>
<td class="table-cell-name">


#### visible?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


If set to `true`, the Chart displays the series tooltip. By default, the series tooltip is not displayed.


</td>
</tr>
</tbody>
</table>



