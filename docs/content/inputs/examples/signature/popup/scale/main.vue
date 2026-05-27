<template>
  <Signature :value="value" :popup-scale="2.2" @change="onChange" />
</template>

<script setup>
import { ref } from "vue";
import { Signature } from "@progress/kendo-vue-inputs";
import { sampleSignature } from "./sample-signature";

const value = ref(sampleSignature);

function onChange(e) {
    value.value = e.value;
}
</script>
