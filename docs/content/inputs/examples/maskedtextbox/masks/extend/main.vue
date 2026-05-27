<template>
  <div class="row example-wrapper">
    <div>
      <div class="example-config">
        <p>{{ mask }}</p>
        <ul>
          <li>Y - cyrillic only</li>
          <li>L - latin only</li>
        </ul>
      </div>
      <MaskedTextBox
        :style="{ width: '230px' }"
        :mask="mask"
        :default-value="'абвг abcd'"
        :rules="rules"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { MaskedTextBox } from "@progress/kendo-vue-inputs";

const mask = ref("YYYY LLLL");
const rules = ref({
    L: /[a-zA-Z]/,
    Y: /[\u0400-\u0481\u048A-\u04FF]/,
});
</script>
