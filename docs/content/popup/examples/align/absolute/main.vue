<template>
  <Popup
    :offset="offset"
    :show="true"
    popup-class="popup-content"
  >
    Popup content.
  </Popup>
</template>

<script setup>
import './styles.css';
import { ref } from 'vue';
import { Popup } from '@progress/kendo-vue-popup';

const offset = ref({ left: 150, top: 50 });
</script>
