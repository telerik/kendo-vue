<template>
  <div
    :style="{
      display: 'flex',
    }"
  >
    <div :style="{ paddingTop: '5px', paddingRight: '40px' }">{{ title }}</div>
    <KButton
      @click="hidecolumn(field)"
      :theme-color="'primary'"
      style="float: right"
    >
      Hide
    </KButton>
  </div>
</template>
<script>
import { Button as KButton } from '@progress/kendo-vue-buttons';

export default {
  components: {
    KButton,
  },
  props: {
    field: String,
    title: String,
    sortable: [Boolean, Object],
  },
  methods: {
    hidecolumn: function (e) {
      this.$emit('hidecolumn', e);
    },
  },
};
</script>
