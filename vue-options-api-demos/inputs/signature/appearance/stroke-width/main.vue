<template>
    <h6 class="wrapper">
      To see the Stroke width difference, draw something in the different Signature
      components.
    </h6>
    <div class="demo">
      <span class="wrapper">
        <div>
          Stroke Width value:
          <b>1.5</b>
        </div>
        <Signature :stroke-width="1.5" :maximizable="false" />
      </span>
      <span class="wrapper">
        <div>
          Stroke Width value:
          <b>3.5</b>
        </div>
        <Signature :stroke-width="3.5" :maximizable="false" />
      </span>
      <span class="wrapper">
        <div>
          Stroke Width value:
          <b>6</b>
        </div>
        <Signature :stroke-width="6" :maximizable="false" />
      </span>
    </div>
  </template>
  <script>
  import { Signature } from '@progress/kendo-vue-inputs';
  
  export default {
    components: {
      Signature,
    },
  };
  </script>
  
  <style>
  .wrapper {
    padding: 20px;
    display: flex;
    flex-direction: column;
  }
  
  .demo {
    display: flex;
    flex-direction: row;
  }
  </style>
  