<template>
  <div>
    <div class="col-xs-12 col-md-6 example-col">
      <KLabel>
        <NumericTextBox
          :style="{ width: '230px' }"
          :placeholder="'please enter value'"
          v-model="value"
        />
        Kilometers
      </KLabel>
    </div>
    <div class="col-xs-12 col-md-6 example-col">
      <KLabel>
        <NumericTextBox
          :style="{ width: '230px' }"
          :placeholder="'please enter value'"
          :icon-name="'gear'"
          :value="computedValue"
          @change="changeMiles"
        />
        Miles
      </KLabel>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { Label as KLabel } from "@progress/kendo-vue-labels";
import { NumericTextBox } from "@progress/kendo-vue-inputs";

const value = ref(null);

const computedValue = computed(() =>
    value.value == null ? null : value.value / 1.609344
);

function changeMiles(e) {
    value.value = e.value !== null ? e.value * 1.609344 : null;
}
</script>
