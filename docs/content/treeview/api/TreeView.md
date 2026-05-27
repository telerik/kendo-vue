---
title: TreeView
description: "Learn how to build custom functionality when working with the Vue Treeview by Kendo UI with the help of the TreeView."
api_reference: true
type: inner_api
slug: api_treeview_treeview
---

# TreeView
Represents the [Kendo UI for Vue Native TreeView component]({% slug overview_treeview %}).

 ```jsx
 <template>
   <div>
     <TreeView :dataItems="tree" />
   </div>
 </template>

 <script>
 import { TreeView } from '@progress/kendo-vue-treeview';

 export default {
   components: {
     TreeView,
   },
   data() {
     return {
       tree: [
         {
           text: 'Furniture',
           expanded: true,
           items: [
             {
               text: 'Tables & Chairs',
             },
             {
               text: 'Sofas',
             },
             {
               text: 'Occasional Furniture',
             },
           ],
         },
         {
           text: 'Decor',
           expanded: true,
           items: [
             {
               text: 'Bed Linen',
             },
             {
               text: 'Curtains & Blinds',
             },
             {
               text: 'Carpets',
             },
           ],
         },
       ],
     };
   },
 };
 </script>
 ```



 ### props <span class='code'>Readonly&lt;[TreeViewProps]({% slug api_treeview_treeviewprops %})&gt;</span>
 The props of the TreeView component.

 ### guid <span class='code'>string</span>
 Returns the `guid` which is associated with the TreeView.



