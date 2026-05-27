---
title: SankeyEvent
description: "Learn how to build custom functionality when working with the Vue Charts by Kendo UI with the help of the SankeyEvent."
api_reference: true
type: inner_api
slug: api_charts_sankeyevent
---

# SankeyEvent
The Kendo UI for Vue Sankey event object.


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


#### dataItem


</td>
<td type class="table-cell-type">


<code>


[SankeyNodeDataItem]({% slug api_charts_sankeynodedataitem %}) | [SankeyLinkDataItem]({% slug api_charts_sankeylinkdataitem %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The dataItem of the related element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### originalEvent


</td>
<td type class="table-cell-type">


<code>


Event


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The native DOM event.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### sender


</td>
<td type class="table-cell-type">


<code>


Sankey


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The Sankey component instance.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### target


</td>
<td type class="table-cell-type">


<code>


DefineComponent&lt;ExtractPropTypes&lt;{ dataLinks: { required: "true"; type: PropType&lt;[SankeyLink]({% slug api_charts_sankeylink %})[]&gt;; }; dataNodes: { required: "true"; type: PropType&lt;[SankeyNode]({% slug api_charts_sankeynode %})[]&gt;; }; dir: PropType&lt;string&gt;; disableAutoLayout: PropType&lt;boolean&gt;; disableKeyboardNavigation: PropType&lt;boolean&gt;; labels: PropType&lt;[SankeyLabelDefaults]({% slug api_charts_sankeylabeldefaults %})&gt;; legend: PropType&lt;[SankeyLegend]({% slug api_charts_sankeylegend %})&gt;; links: PropType&lt;[SankeyLinkDefaults]({% slug api_charts_sankeylinkdefaults %})&gt;; nodes: PropType&lt;[SankeyNodeDefaults]({% slug api_charts_sankeynodedefaults %})&gt;; title: PropType&lt;[SankeyTitle]({% slug api_charts_sankeytitle %})&gt;; tooltip: PropType&lt;[SankeyTooltip]({% slug api_charts_sankeytooltip %})&gt;; }&gt;&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The `Sankey` component that triggered the event.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### targetType


</td>
<td type class="table-cell-type">


<code>


"link" | "node"


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The target element type.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### type


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The event type.


</td>
</tr>
</tbody>
</table>



## Methods

<table class="api-table api-table-methods">
<thead class="api-table-methods-head">
<tr>
<th>


#### isDefaultPrevented


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Indicates whether the default action has been prevented.


</td>
</tr>

<tr class="nested-table">
<td>
<table class="api-table api-table-returns">
<thead class="api-table-returns-head">
<tr>
<th class="th-type">Returns</th>
<th class="th-desc"></th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td type>


<code>


boolean


</code>


</td>
<td>





</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>

<table class="api-table api-table-methods">
<thead class="api-table-methods-head">
<tr>
<th>


#### preventDefault


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Prevents the default action.


</td>
</tr>

</tbody>
</table>



