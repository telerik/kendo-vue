---
title: processTreeViewItems
description: "Learn how to build custom functionality when working with the Vue Treeview by Kendo UI with the help of the processTreeViewItems."
api_reference: true
type: inner_api
slug: api_treeview_processtreeviewitems
---

# processTreeViewItems
A helper function which applies the specified operation descriptors to the data.
[Expanding and collapsing items]({% slug expansion_ways_treeview %}#toc-using-a-helper-function)
[Selecting and deselecting items]({% slug selection_ways_treeview %}#toc-using-a-helper-function)
[Checking and unchecking items]({% slug check_helper_funcs_treeview %})

{% meta height:350 %}
{% embed_file select/selection-update-helper-function/main.vue preview %}
{% embed_file select/selection-update-helper-function/main.js %}
{% endmeta %}

#### Parameters
##### data <span class='code'>any[] | null | undefined</span>
The data that will be processed.

##### operations <span class='code'>[TreeViewOperationDescriptors]({% slug api_treeview_treeviewoperationdescriptors %})</span>
The operation descriptors that will be applied to the data.

#### Returns
<span class='code'>any[]</span> - The processed copy of the input data.

#### Parameters
##### data
<code>


any[]


</code>


##### operations
<code>


[TreeViewOperationDescriptors]({% slug api_treeview_treeviewoperationdescriptors %})


</code>


#### Returns
<code>


any[]


</code>

