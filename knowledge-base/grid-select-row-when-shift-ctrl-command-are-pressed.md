---
title: Select Native Grid Rows When Specific Buttons are Pressed.
description: An example demonstrating how the rows' selection inside the Native Grid component can be controlled and based on specific keyboard keys. 
type: how-to
page_title: Select Grid rows when Shift, Ctrl or Command(for Mac) buttons are pressed | Kendo UI for Vue Native Grid
slug: grid-select-row-when-shift-ctrl-command-are-pressed
tags: grid, selection, specific key, shift, ctrl, command, key, press, kendovue, native
res_type: kb
category: knowledge-base
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>3.10.0</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® Kendo UI for Vue Native</td>
	    </tr>
    </tbody>
</table>


## Description

This KB article demonstrates how you can limit the rows' selection of the Native Grid by pressing specific keyboard keys. In the following example the rows of the Native Grid can be selected or deselected only when the Shift, Ctrl or Command(for Mac) keyboard buttons are pressed.

**KB sections**

* [Solution description](#toc-solution-description)
* [Runnable example](#toc-runnable-example)

## Solution description
To achieve the following scenario, we use the [onRowClick]({% slug api_grid_gridprops %}#toc-onrowclick) event of the Native Grid and the following code:
```
onRowClick(event) {
    if (event.event.metaKey || event.event.ctrlKey || event.event.shiftKey) {
    event.dataItem[this.selectedField] =
        !event.dataItem[this.selectedField];
    }
}
```

### Runnable example

To test the following example press `Ctrl`, `Shift` or `Command(for Mac)` buttons and click on selected Grid row.

{% meta id:index height:600 %}
{% embed_file grid-select-row-when-shift-ctrl-command-are-pressed/main.vue preview %}
{% embed_file grid-select-row-when-shift-ctrl-command-are-pressed/main.js %}
{% endmeta %}
