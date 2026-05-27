<template>
  <div>
    <div style="margin-bottom: 1em">
      <h5>String "12.22" to parse</h5>
      <div style="font-size: 1.2em">
        Result:
        <strong>
          <em>{{ floatNumber !== null ? floatNumber.toString() : "Invalid number" }}</em>
        </strong>
      </div>
    </div>

    <div style="margin-bottom: 1em">
      <h5>String "1.212,22 €" to parse</h5>
      <div style="font-size: 1.2em">
        Result:
        <strong>
          <em>{{ currency !== null ? currency.toString() : "Invalid number" }}</em>
        </strong>
      </div>
    </div>

    <div style="margin-bottom: 1em">
      <h5>String "10.26 %" to parse</h5>
      <div style="font-size: 1.2em">
        Result:
        <strong>
          <em>{{ percentage !== null ? percentage.toString() : "Invalid number" }}</em>
        </strong>
      </div>
    </div>

    <div>
      <h5>String "1,0000123e+4" to parse</h5>
      <div style="font-size: 1.2em">
        Result:
        <strong>
          <em>{{ exponential !== null ? exponential.toString() : "Invalid number" }}</em>
        </strong>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { IntlService } from "@progress/kendo-vue-intl";

const floatNumber = ref(null);
const currency = ref(null);
const percentage = ref(null);
const exponential = ref(null);

onMounted(() => {
    const intl = new IntlService("en");

    floatNumber.value = intl.parseNumber("12.22");
    currency.value = intl.parseNumber("1.212,22 €", "de");
    percentage.value = intl.parseNumber("10.26 %");
    exponential.value = intl.parseNumber("1,0000123e+4", "bg");
});
</script>
