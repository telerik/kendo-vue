<template>
  <div class="demo">
    <span class="wrapper">
      <div>
        Signature value binding using <b>value</b> prop and <b>change</b> event
      </div>
      <Signature :value="value" @change="handleOnChange" :popup-scale="2" />
    </span>
    <span class="wrapper">
      <div>Signature value binding using <b>v-model</b></div>
      <Signature v-model="value" :popup-scale="2" />
    </span>
  </div>
  <div class="demo">
    <span class="wrapper">
      <div style="margin-top: 1em">
        <img
          alt="Exported image"
          :src="value"
          :style="{ border: '1px solid', padding: '10px',  width: '600px' }"
        />
      </div>
    </span>
  </div>
</template>
<script>
import { Signature } from "@progress/kendo-vue-inputs";
import { sampleSignature } from "./sample-signature";

export default {
  components: {
    Signature,
  },
  data() {
    return {
      value: sampleSignature,
    };
  },

  methods: {
    handleOnChange(e) {
      this.value = e.value;
    },
  },
};
</script>
<style>
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
