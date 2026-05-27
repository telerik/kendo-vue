<template>
  <div>
    <div class="example-config">
      <input
        id="animate"
        type="checkbox"
        class="k-checkbox k-checkbox-md k-rounded-md"
        v-model="animate"
      />
      <label for="animate" class="k-checkbox-label">Animate</label>
      <hr />
      <NumericTextBox
        id="animationDuration"
        :min="0"
        :disabled="!animate"
        v-model.number="animationDuration"
        :style="{ width: '100px' }"
      />
      <label for="animationDuration" class="k-label"
        >&nbsp;Animation duration</label
      >
      <hr />
    </div>
    <KButton @click="onClick" ref="button">
      {{ buttonText }}
    </KButton>
    <Popup
      :anchor="'button'"
      :show="show"
      :animate="computedAnimate"
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
import { NumericTextBox } from '@progress/kendo-vue-inputs';

const show = ref(false);
const animate = ref(true);
const animationDuration = ref(300);

const buttonText = computed(() => (show.value ? 'Hide' : 'Show'));
const computedAnimate = computed(() =>
    animate.value
        ? {
            openDuration: animationDuration.value,
            closeDuration: animationDuration.value,
        }
        : false
);

function onClick() {
    show.value = !show.value;
}
</script>
