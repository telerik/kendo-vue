<template>
  <Signature :value="value" :read-only="true" />
</template>

<script setup>
import { ref } from "vue";
import { Signature } from "@progress/kendo-vue-inputs";
import { sampleSignature } from "./sample-signature";

const value = ref(sampleSignature);
</script>
