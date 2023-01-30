<template>
  <div class="example-wrapper">
   <ExpansionPanel
         :title="'Colombia'"
         :expanded="expanded"
         @action="handleAction"
       >
         <Reveal :appear="expanded">
             <ExpansionPanelContent>
               <input/>
               The name “Colombia” is derived from the last name of the Italian
               navigator Christopher Columbus. It was conceived by the Venezuelan
               revolutionary Francisco de Miranda as a reference to all of the
               New World, but especially to those portions under Spanish law. The
               name was later adopted by the Republic of Colombia of 1819, formed
               from the territories of the old Viceroyalty of New Granada
               (modern-day Colombia, Panama, Venezuela, Ecuador, and northwest
               Brazil).
               <input/>
 
             </ExpansionPanelContent>
         </Reveal>
       </ExpansionPanel>
  </div>
 </template>
 <script>
 import {
   ExpansionPanel, ExpansionPanelContent
 } from "@progress/kendo-vue-layout";
 
 import {
   Reveal
 } from "@progress/kendo-vue-animation";
 
 export default {
     components: {
       ExpansionPanel,
       ExpansionPanelContent,
       Reveal
     },
     data() {
       return {
         expanded: false
       };
     },
     methods: {
       handleAction(ev) {
         this.expanded = !ev.expanded;
       }
     }
 };
 
 </script>
 
 