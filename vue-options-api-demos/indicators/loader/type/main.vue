<template>
   <div class="row col-6">
      <div class="col-4">
        <Loader :type="'pulsing'" />
      </div>
      <div class="col-4">
        <Loader :type="'infinite-spinner'" />
      </div>
      <div class="col-4">
        <Loader :type="'converging-spinner'" />
      </div>
    </div>
     
</template>

<script>
import { Loader } from "@progress/kendo-vue-indicators";

export default {
    components: {
       Loader
    },
    
};
</script>
