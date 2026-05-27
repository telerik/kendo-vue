<template>
  <div class="example-config">
         <KButton
                   @click="handleDomEvent"
                   @mousedown="handleDomEvent"
                   @mouseup="handleDomEvent"
                   @focus="handleDomEvent"
                   @blur="handleDomEvent"
                   @keypress="handleDomEvent"
                   >
                   My Button
         </KButton>
       <h5>{{title}}</h5>
       <ul class="event-log">
         <li v-for="log in logs" :key="log">{{log}}</li>
       </ul>
     </div>
</template>

<script setup>
import { Button as KButton } from '@progress/kendo-vue-buttons';
import { ref } from 'vue';

const logs = ref([]);
const title = ref('');

function handleDomEvent(event) {
    logs.value.unshift(event.type);
}
</script>
