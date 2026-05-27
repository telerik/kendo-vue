<template>
  <div>
    <Checkbox :id="'chb1'">
      <KLabel
        class="k-checkbox-label"
        :for="'chb1'"
        :style="{ display: 'inline-block' }"
      >
        By clicking <a href="#">Sign Up</a>, you agree to our Terms and
        Conditions.
      </KLabel>
    </Checkbox>
  </div>
</template>

<script setup>
import { Checkbox } from "@progress/kendo-vue-inputs";
</script>

