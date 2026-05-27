<template>
  <div>
    <div style="margin-bottom: 1em">
      <h5>String "11/6/2000" to parse</h5>
      <div style="font-size: 1.2em">
        Result:
        <strong>
          <em>{{ enDate ? enDate.toString() : "Invalid date" }}</em>
        </strong>
      </div>
    </div>

    <div>
      <h5>String "2000-11-06T10:30Z" to parse</h5>
      <div style="font-size: 1.2em">
        Result:
        <strong>
          <em>{{ utcDate ? utcDate.toString() : "Invalid date" }}</em>
        </strong>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { provideIntlService } from "@progress/kendo-vue-intl";

const enDate = ref(null);
const utcDate = ref(null);

const intl = provideIntlService({});
enDate.value = intl.parseDate("11/6/2000", "M/d/yyyy");
utcDate.value = intl.parseDate("2000-11-06T10:30Z");
</script>
