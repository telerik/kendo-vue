<template>
  <div>
    <Signature :value="value" @change="onChange" />
    <div v-if="value" class="signature-preview">
      <h4>Signature Preview:</h4>
      <img :src="value" alt="Signature Preview" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Signature } from "@progress/kendo-vue-inputs";

const value = ref(null);

function onChange(e) {
    value.value = e.value;
}
</script>

<style>
.signature-preview img {
  max-width: 100%;
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
