<template>
  <div class="example">
    <div class="row">
      <div class="col-2">
        <div>Text</div>
      </div>
      <div class="col-10">
        <Skeleton
          :shape="'text'"
          :style="{
            width: '300px',
          }"
        />
      </div>
    </div>
    <div class="row">
      <div class="col-2">
        <div>Circle</div>
      </div>
      <div class="col-10">
        <Skeleton
          :shape="'circle'"
          :style="{
            width: '50px',
            height: '50px',
          }"
        />
      </div>
    </div>
    <div class="row">
      <div class="col-2">
        <div>Rectangle</div>
      </div>
      <div class="col-10">
        <Skeleton
          :shape="'rectangle'"
          :style="{
            width: '300px',
            height: '100px',
          }"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { Skeleton } from '@progress/kendo-vue-indicators';

export default {
  components: {
    Skeleton,
  },
};
</script>
