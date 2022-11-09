<template>
  <div class="example-wrapper">
       <div class="page">
         <div class="content"></div>
         <BottomNavigation
           :positionMode="'sticky'"
           :items="computedItems"
           @select="onSelect"
         />
       </div>
       {{selected}}
  </div>
 </template>
 <script>
 import {
   BottomNavigation
 } from "@progress/kendo-vue-layout";
 
 export default {
     components: {
       BottomNavigation
     },
     computed: {
       computedItems() {
         return this.items.map((item, index) => ({
             ...item,
             selected: index === this.selected,
           }))
         }
     },
     data() {
       return {
         selected: 0,
         items: [
           {
             text: "Inbox",
             id: 1,
             icon: "email",
             route: "/",
             selected: true,
           },
           {
             text: "Calendar",
             id: 2,
             icon: "calendar",
             route: "/calendar",
           },
           {
             text: "Profile",
             id: 3,
             icon: "user",
             route: "/profile",
           },
         ]
       };
     },
     methods: {
       onSelect(ev) {
         this.selected = ev.itemIndex;
       },
       setSelectedItem (pathName) {
         let currentPath = this.items.find((item) => item.route === pathName);
 
         if (currentPath && currentPath.text) {
           return currentPath.text;
         }
       }
     }
 };
 
 </script>
 
 