---
title: handleTreeViewCheckChange
description: "Learn how to build custom functionality when working with the Vue Treeview by Kendo UI with the help of the handleTreeViewCheckChange."
api_reference: true
type: inner_api
slug: api_treeview_handletreeviewcheckchange
---

# handleTreeViewCheckChange
A helper function which updates the check descriptor.

{% meta height:650 %}
{% embed_file checkbox/checkbox-helper/main.vue preview %}
{% embed_file checkbox/checkbox-helper/main.js %}
{% endmeta %}

 #### Parameters
 ##### event <span class='code'>[TreeViewExpandChangeEvent]({% slug api_treeview_treeviewexpandchangeevent %})</span>
 The event that triggered the change.

 ##### check <span class='code'>string[] | [TreeViewCheckDescriptor]({% slug api_treeview_treeviewcheckdescriptor %})</span>
 The check descriptor that will be updated.

 ##### data? <span class='code'>any[] | null</span>
 The TreeView items.

 ##### settings <span class='code'>[TreeViewCheckChangeSettings]({% slug api_treeview_treeviewcheckchangesettings %})</span>
 The additional settings that configure the update of the check descriptor.

 ##### childrenField? <span class='code'>string</span>
 The field that points to the dataItem sub items. Defaults to `items`.
 The default behavior allows the selection of multiple items.

 #### Returns
 <span class='code'>any</span> - The updated copy of the input check descriptor.

#### Parameters
##### event
<code>


[TreeViewCheckChangeEvent]({% slug api_treeview_treeviewcheckchangeevent %})


</code>


##### check
<code>


string[] | [TreeViewCheckDescriptor]({% slug api_treeview_treeviewcheckdescriptor %})


</code>


##### data?
<code>


any[]


</code>


##### settings
<code>


[TreeViewCheckChangeSettings]({% slug api_treeview_treeviewcheckchangesettings %})


</code>


##### childrenField?
<code>


string


</code>


#### Returns
<code>


any


</code>

