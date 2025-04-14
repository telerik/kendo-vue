<template>
  <div class="k-list-group-sticky-header">
    <span
      :style="{
        color: 'orange',
        fontWeight: 900,
        width: '100%',
        fontSize: '1.5em',
        textAlign: 'center',
      }"
    >
    {{ group }}
    </span>
  </div>
</template>
<script>
export default {
  props: {
    group: String,
  },
};
</script>
