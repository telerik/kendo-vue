<template>
  <div>
    <div class="demo">
      <span class="wrapper">
        <div>
          Size:
          <b>small</b>
        </div>
        <Signature :maximizable="false" :size="'small'" />
      </span>
      <span class="wrapper">
        <div>
          Size:
          <b>medium</b>
        </div>
        <Signature :maximizable="false" :size="'medium'" />
      </span>
      <span class="wrapper">
        <div>
          Size:
          <b>large</b>
        </div>
        <Signature :maximizable="false" :size="'large'" />
      </span>
    </div>
    <div class="demo">
      <span class="wrapper">
        <span>Custom size: </span>
        <Signature :class="'custom-input'" :maximizable="false" :size="null" />
      </span>
    </div>
  </div>
</template>
<script>
import { Signature } from "@progress/kendo-vue-inputs";

export default {
  components: {
    Signature,
  },
};
</script>

<style>
.k-signature {
  min-width: 150px;
}

.custom-input {
  min-height: 150px;
  width: 450px;
}

.wrapper {
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.demo {
  display: flex;
  flex-direction: row;
}
</style>
