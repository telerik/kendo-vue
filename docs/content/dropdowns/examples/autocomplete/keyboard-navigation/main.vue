<template>
  <div class="example-wrapper">
    <p>Type the name of a European country:</p>
    <AutoComplete
      :style="{ width: '230px' }"
      :data-items="countries"
      :value="value"
      @change="onChange"
      :placeholder="'e.g. Andorra'"
    />
  </div>
</template>

<script setup>
import { AutoComplete } from '@progress/kendo-vue-dropdowns'
import { ref } from 'vue'

const countries = ["Albania", "Andorra", "Armenia", "Austria", "Azerbaijan"]
const value = ref('')

const onChange = (event) => {
    value.value = event.target.value
}
</script>
