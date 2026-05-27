---
title: ScrollView
description: "Learn how to build custom functionality when working with the Vue Scrollview by Kendo UI with the help of the ScrollView."
api_reference: true
type: inner_api
slug: api_scrollview_scrollview
---

# ScrollView
Represents the [Kendo UI for Vue Native ScrollView component]({% slug overview_scrollview %}).

 ```jsx
 <template>
   <div>
     <ScrollView
       :style="{
         width: '512px',
         height: '384px',
       }"
       :data-items="items"
       :content="'content'"
     >
       <template v-slot:content="{ props }">
         <div class="image-with-text">
           <img
             :src="props.item.url"
             :alt="`Photo ${props.item.position}`"
             :style="{
               width: '512px',
               height: '384px',
             }"
             :draggable="false"
           />
         </div>
       </template>
     </ScrollView>
   </div>
 </template>

 <script>
 import { ScrollView } from '@progress/kendo-vue-scrollview';

 export default {
   components: {
     ScrollView,
   },
   data() {
     return {
       items: [
         {
           url: 'https://www.telerik.com/kendo-vue-ui/components/layout/assets/card/kukeri.jpg',
         },
         {
           url: 'https://www.telerik.com/kendo-vue-ui/components/layout/assets/card/martenitsa.jpg',
         },
         {
           url: 'https://www.telerik.com/kendo-vue-ui/components/layout/assets/card/rose_festival.jpg',
         },
       ],
     };
   },
 };
 </script>
 ```



