<template>
   <div class="row">
      <div class="m-3">
       <span :style="{ color: value }">Selected color: {{ value }}</span>
       <br />
       <ColorPalette :value="value" @change="handleOnChange" :palette="'basic'" />
    </div>
    <div class="m-3">
      <span :style="{ color: value }">Selected color: {{ value }}</span>
      <br />
      <ColorPalette v-model="value" :palette="'basic'" />
    </div>
   </div> 
</template>
<script>
import { ColorPalette } from '@progress/kendo-vue-inputs';

export default {
  components: {
    ColorPalette,
  },
  data() {
    return {
      value: 'none',
    };
  },
  methods: {
    handleOnChange(e) {
      this.value = e.value;
    },
  },
};
</script>
