<template>
  <div>
    <div class="demo">
      <span class="wrapper">
        <div>
          Roundness:
          <b>small</b>
        </div>
        <Signature :maximizable="false" :rounded="'small'" />
      </span>
      <span class="wrapper">
        <div>
          Roundness:
          <b>medium</b>
        </div>
        <Signature :maximizable="false" :rounded="'medium'" />
      </span>
      <span class="wrapper">
        <div>
          Roundness:
          <b>large</b>
        </div>
        <Signature :maximizable="false" :rounded="'large'" />
      </span>
    </div>
    <div class="demo">
      <span class="wrapper">
        <div>
          Roundness:
          <b>full</b>
        </div>
        <Signature :maximizable="false" :rounded="'full'" />
      </span>
      <span class="wrapper">
        <div>
          Roundness:
          <b>custom</b>
        </div>
        <Signature
          :class="'custom-input'"
          :maximizable="false"
          :roundness="null"
        />
      </span>
    </div>
  </div>
</template>

<script setup>
import { Signature } from "@progress/kendo-vue-inputs";
</script>

<style>
.k-signature {
  min-width: 150px;
}

.custom-input {
  min-height: 100px;
  border-bottom-right-radius: 15px;
  border-top-left-radius: 15px;
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
