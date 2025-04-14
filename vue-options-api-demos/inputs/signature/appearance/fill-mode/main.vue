<template>
  <div class="example-config">
    <div class="demo">
      <span class="wrapper">
        <div>FillMode: <b>flat</b></div>
        <Signature :maximizable="false" :fill-mode="'flat'" />
      </span>
      <span class="wrapper">
        <div>FillMode: <b>solid</b></div>
        <Signature :maximizable="false" :fill-mode="'solid'" />
      </span>
      <span class="wrapper">
        <div>FillMode: <b>outline</b></div>
        <Signature :maximizable="false" :fill-mode="'outline'" />
      </span>
    </div> 
    <div class="demo">
      <span class="wrapper">
        <span>Custom fill mode: </span>
        <Signature :class="'custom-input'" :maximizable="false" :size="null" />
      </span>
    </div>
  </div>
</template>
<script>
import { Signature } from "@progress/kendo-vue-inputs";

export default {
  components: {
    Signature,
  },
};
</script>

<style>
.k-signature {
  min-width: 150px;
}

.custom-input {
  background-color: #00aead;
  border: 2px solid #bfd843;
}

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
