---
title: Show the list of the parent nodes of a selected TreeView node. 
description: A sample project that shows how to list the parent nodes of a selected TreeView node. 
type: how-to
page_title: Learn how to display the parent nodes(path) of a selected TreeView node.
slug: treeview-show-parent-nodes-path
tags: treeview, path, parent, nodes, selected, kendovue, native
res_type: kb
category: knowledge-base
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>3.6.3</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® Kendo UI for Vue Native</td>
	    </tr>
    </tbody>
</table>


## Description

This Knowledge base(KB) article shows how you can display the list of the parent nodes above the selected TreeView node. With the demonstrated approach you can get the 'path' from the root of the TreeView to the selected node. 


**KB sections**

* [Solution description](#toc-solution-description)
* [Runnable example](#toc-runnable-example)

## Solution description

To get the `path` from the root element to the select node we are using the following method which is called every time a TreeView node is selected.

```js-no-run
getParents(indexArray, index, tree) {
  if (tree[indexArray[index]]) {
    if (index + 1 !== indexArray.length) {
      this.currentPath += tree[indexArray[index]].text + ' > ';
    } else {
      this.currentPath += tree[indexArray[index]].text;
    }
  }

  if (index < indexArray.length && tree[indexArray[index]].items) {
    this.getParents(indexArray, index + 1, tree[indexArray[index]].items);
  }
},
```

### Runnable example
{% meta id:index height:620 %}
{% embed_file treeview-show-parent-nodes-path/main.vue preview %}
{% embed_file treeview-show-parent-nodes-path/main.js %}
{% endmeta %}
