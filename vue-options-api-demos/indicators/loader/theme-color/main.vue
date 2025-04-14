<template>
  <div>
    <div class="wrap">
      <span
        v-for="(color, index) in themeColors"
        :key="index"
        class="k-d-inline-flex k-flex-col k-align-items-center"
      >
        <span class="title">{{ color.toUpperCase() }}</span>
        <Loader :theme-color="color" />
      </span>
    </div>
  </div>
</template>

<script>
import { Loader } from "@progress/kendo-vue-indicators";
const themeColors = [
  "primary",
  "secondary",
  "tertiary",
  "info",
  "success",
  "error",
  "warning",
  "dark",
  "light",
  "inverse",
];

export default {
  components: {
    Loader,
  },
  data() {
    return {
      themeColors,
    };
  },
};
</script>
<style>
.title {
  color: #6c757d;
  padding: 6px 15px;
}
.wrap {
  margin-top: 15px;
  text-align: center;
}
</style>
