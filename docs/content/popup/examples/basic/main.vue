<template>
  <div>
    <KButton
      @click="onClick"
      ref="button"
    >
      {{ buttonText }}
    </KButton>
    <Popup
      :anchor="'button'"
      :show="show"
      popup-class="popup-content"
    >
      Popup content.
    </Popup>
  </div>
</template>

<script setup>
import './styles.css';
import { ref, computed } from 'vue';
import { Popup } from '@progress/kendo-vue-popup';
import { Button as KButton } from "@progress/kendo-vue-buttons";;

const show = ref(false);

const buttonText = computed(() => (show.value ? 'Hide' : 'Show'));

function onClick() {
    show.value = !show.value;
}
</script>
