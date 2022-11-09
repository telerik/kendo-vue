---
title: Add a Tooltip to the TreeView Component
description: An example about how to add the Native Toolbar to the Kendo UI for Vue Native TreeView component.
type: how-to
page_title: Add a Tooltip to the TreeView Component - Kendo UI for Vue Native Tooltip - Kendo UI for Vue Native TreeView
slug: add-tooltip-to-treeview
tags: tooltip, treeview, kendovue, native
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

Learn how to add the [Tooltip](slug:overview_tooltip) component to the [TreeView](slug:overview_tooltip) in the Kendo UI for Vue Native suite. 

**KB sections**

* [Solution description](#toc-solution-description)
* [Runnable example](#toc-runnable-example)

## Solution description

To display the Native `Tooltip` when hovering a node in the Native `TreeView`, you have to define a custom template for the TreeView items. The custom template of the TreeView can be defined through its [item](slug:api_treeview_treeviewprops#toc-item) property. 

The runnable example in the next section below, uses the following template which is passed to the `item` prop of the TreeView. 

```js
<template v-slot:item="{ props }">
  <span :title="props.item.description">
    <span :class="iconClassName(props.item)" key="0" />
    {{ props.item.text }}
  </span>
</template>
```
In the above template you can see that we are passing the value of the `description` dataItem field to the `title` attribute of the span element rendered in each item. Once we have a `title` attribute definition for each TreeView node, we only have to initialize the Tooltip as follows:

```js
    <Tooltip :position="'right'" :anchor-element="'target'">
      .............
	  TreeView definition
      .............
    </Tooltip>
```

### Runnable example
{% meta id:index height:460 %}
{% embed_file add-tooltip-to-treeview/main.vue preview %}
{% embed_file add-tooltip-to-treeview/main.js %}
{% endmeta %}
