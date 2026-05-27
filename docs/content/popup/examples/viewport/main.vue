<template>
  <div>
    <KButton
      class="anchor"
      @click="onClick"
      ref="button"
    >
      {{ buttonText }}
    </KButton>
    <Popup
      :anchor="'button'"
      :show="show"
      popup-class="popup-content"
      :collision="collision"
    >
      <div class="popup-inner-content">
        Popup
      </div>
    </Popup>
  </div>
</template>

<script setup>
import './styles.css';
import { ref, computed } from 'vue';
import { Popup } from '@progress/kendo-vue-popup';
import { Button as KButton } from "@progress/kendo-vue-buttons";;

const show = ref(false);
const collision = ref({
    horizontal: 'fit',
    vertical: 'flip',
});

const buttonText = computed(() => (show.value ? 'Hide' : 'Show'));

function onClick() {
    show.value = !show.value;
}
</script>
