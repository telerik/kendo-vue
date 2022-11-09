<template>
   <div class="row">
      <div class="col-6 example-col">
        <p>Horizontal ProgressBar</p>
        <ProgressBar :value="50" />
      </div>

      <div class="col-6 example-col">
        <p>Vertical ProgressBar</p>
        <ProgressBar :value="50" :orientation="'vertical'" />
      </div>
    </div>
</template>

<script>
import { ProgressBar } from "@progress/kendo-vue-progressbars";

export default {
    components: {
       ProgressBar
    }
};
</script>

