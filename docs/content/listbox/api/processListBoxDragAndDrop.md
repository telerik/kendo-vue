---
title: processListBoxDragAndDrop
description: "Learn how to build custom functionality when working with the Vue Listbox by Kendo UI with the help of the processListBoxDragAndDrop."
api_reference: true
type: inner_api
slug: api_listbox_processlistboxdraganddrop
---

# processListBoxDragAndDrop
Process the data collection/s based on the dragged and drop item.




#### Parameters
##### listBoxOneData
<code>


any[]


</code>
The first data collection.

##### listBoxTwoData
<code>


any[]


</code>
The second data collection. Pass an empty array if there is only one ListBox.

##### dragItem
<code>


any


</code>
The item that was dragged.

##### dropItem
<code>


any


</code>
The drop target item.

##### valueField
<code>


string


</code>
The field which points to the unique value of each data item.

#### Returns
<code>


{ listBoxOneData: any[]; listBoxTwoData: any[]; }


</code>
 - The object that contains the new data collections.
