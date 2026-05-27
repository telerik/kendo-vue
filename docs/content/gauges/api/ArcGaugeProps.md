---
title: ArcGaugeProps
description: "Learn how to build custom functionality when working with the Vue Gauges by Kendo UI with the help of the ArcGaugeProps."
api_reference: true
type: inner_api
slug: api_gauges_arcgaugeprops
---

# ArcGaugeProps
Represents the props of the [Kendo UI for Vue ArcGauge component]({% slug overview_arcgauge_gauges %}).


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


#### centerRender?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A function that renders the center template of the Gauge.


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


The color of the value pointer. Accepts a valid CSS color string, including hex and rgb.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### colors?


</td>
<td type class="table-cell-type">


<code>


[ColorRange]({% slug api_gauges_colorrange %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The color ranges of the value pointer
([see example]({% slug colorranges_arcgauge %})).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### dir?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the `dir` HTML attribute.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onRender?


</td>
<td type class="table-cell-type">


<code>


(event: any) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The event handler that is called when the component is rendered.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### opacity?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The opacity of the value pointer.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### pointer?


</td>
<td type class="table-cell-type">


<code>


object


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">





</td>
</tr>
<tr>
<td class="table-cell-name">


#### renderAs?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the preferred rendering engine. If not supported by the browser, the Gauge switches to the first available mode.

The supported values are:
- `"svg"`&mdash;If available, renders the component as an inline `.svg` file.
- `"canvas"`&mdash;If available, renders the component as a `canvas` element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### scale?


</td>
<td type class="table-cell-type">


<code>


[ArcScale]({% slug api_gauges_arcscale %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The scale options of the ArcGauge.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### transitions?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


If set to `true`, the Gauge plays animations when it displays the series. By default, animations are enabled.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### value


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The value of the Gauge.


</td>
</tr>
</tbody>
</table>



