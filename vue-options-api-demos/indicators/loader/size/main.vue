<template>
   <div class="row col-6">
      <div class="col-4">
        <Loader :size="'small'" />
      </div>
      <div class="col-4">
        <Loader :size="'medium'" />
      </div>
      <div class="col-4">
        <Loader :size="'large'"  />
      </div>
    </div>
</template>

<script>
import { Loader } from "@progress/kendo-vue-indicators";
export default {
    components: {
       Loader
    }
};
</script>
