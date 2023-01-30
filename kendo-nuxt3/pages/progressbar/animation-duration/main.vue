<template>
  <div class="container">
      <div class="row mb-4">
        <div class="col-sm">Duration: {{duration}}ms</div>
      </div>
      <div class="row mb-4">
        <div class="col-sm">
          <ProgressBar
            :value="animatedValue"
            :animation="{
              duration: duration,
            }"
          />
        </div>
        <div class="col-sm">
          <button class="k-button" @click="changeProgress">
            {{animatedValue === 0 ? "Start progress" : "Reset progress"}}
          </button>
        </div>
      </div>
    </div>
</template>

<script>
import { ProgressBar } from "@progress/kendo-vue-progressbars";
import { Checkbox } from "@progress/kendo-vue-inputs";

export default {
    components: {
       ProgressBar, Checkbox
    },
    data () {
      return {
        duration: 1000,
        animatedValue: 0
      }
    },
    methods: {
      changeProgress () {
         const newValue = this.animatedValue === 100 ? 0 : 100;
         this.animatedValue = newValue;
      }
    }
};
</script>
 <style>
 .row { align-items: center; }
 </style>