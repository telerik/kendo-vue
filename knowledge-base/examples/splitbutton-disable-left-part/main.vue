<template>
    <div><splitbutton :items="items" :text="'Enabled Button'" /> &nbsp;</div>
  </template>
  
  <script>
  import { SplitButton } from '@progress/kendo-vue-buttons';
  
  export default {
    components: {
      splitbutton: SplitButton,
    },
    data: function () {
      return {
        items: ['Item1', 'Item2', 'Item3'],
      };
    },
  };
  </script>
  
  <style>
  .k-button-group > .k-button:first-child:not(:only-child) {
    pointer-events: none;
  }
  </style>
  