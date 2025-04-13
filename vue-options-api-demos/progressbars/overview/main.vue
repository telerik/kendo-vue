<template>
  <div class="container">
    <div class="row">
      <div class="col-sm mb-2">ProgressBar</div>
      <div class="col-sm mb-2">
          Chunk ProgressBar
        </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <ProgressBar :value="value" />
      </div>
      <div class="col-sm">
        <ChunkProgressBar :value="value" :chunkCount="chunkCount" />
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <div>
          Value: <strong>{{ value }}</strong>
        </div>
        <div>
          Chunks: <strong>{{ chunkCount }}</strong>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ProgressBar, ChunkProgressBar } from "@progress/kendo-vue-progressbars";

export default {
  components: {
    ProgressBar,
    ChunkProgressBar
  },
  data() {
    return {
      value: 55,
      chunkCount: 20
    };
  },
};
</script>
