<template>
<li :id="id" role="group" class="k-list-group-item" style="position: unset;">
  <b
      :style="{
        color: '#00F',
      }"
      role="option"
    >
     {{group}}
    </b>
  </li>
</template>
<script>
export default {
  props: {
    group: String,
    id: String,
    index: Number,
  },
};
</script>
