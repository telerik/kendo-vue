---
title: moveTreeViewItem
description: "Learn how to build custom functionality when working with the Vue Treeview by Kendo UI with the help of the moveTreeViewItem."
api_reference: true
type: inner_api
slug: api_treeview_movetreeviewitem
---

# moveTreeViewItem
A helper function which moves a TreeView item in an immutable way.

{% meta height:400 %}
{% embed_file drag/single/main.vue preview %}
{% embed_file drag/single/main.js %}
{% endmeta %}
 
 #### Parameters
 ##### sourceItemHierarchicalIndex <span class='code'>string</span>
 The hierarchical index of the item that will be moved.
 
 ##### sourceData <span class='code'>any[] | null | undefined</span>
 The tree which contains the item that will be moved.
 
 ##### operation <span class='code'>"before" | "after" | "child"</span>
 The specific move operation.
 
 The available options are:
  * `before`&mdash;Indicates that the source item will become the previous sibling of the target item.
  * `after`&mdash;Indicates that the source item will become the next sibling of the target item.
  * `child`&mdash;Indicates that the source item will become a child of the target item.
 
 ##### targetItemHierarchicalIndex <span class='code'>string</span>
 The hierarchical index of the item next to which the source item will be moved.
 
 ##### targetData? <span class='code'>any[] | null</span>
 The tree which contains the target item.
 If the argument is skipped, then the move operation will be executed within the same tree.
 Setting the `sourceData` and `targetData` arguments to the same tree is also supported.
 
 ##### childrenField? <span class='code'>string</span>
 The field that points to the dataItem sub items. Defaults to `items`.
 
 #### Returns
 <span class='code'>any[] | { sourceData: any[]; targetData: any[]; }</span> - The updated copies of the `sourceData` and `targetData` input arguments.
 If `targetData` is not passed, then only the updated copy of the `sourceData` will be returned.

#### Parameters
##### sourceItemHierarchicalIndex
<code>


string


</code>


##### sourceData
<code>


any[]


</code>


##### operation
<code>


"after" | "before" | "child"


</code>


##### targetItemHierarchicalIndex
<code>


string


</code>


##### targetData?
<code>


any[]


</code>


##### childrenField?
<code>


string


</code>


#### Returns
<code>


any[] | { sourceData: any[]; targetData: any[]; }


</code>

