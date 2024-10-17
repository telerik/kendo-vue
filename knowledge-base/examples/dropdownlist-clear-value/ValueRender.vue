<template>
    <span
      style="
        position: relative;
        display: inline-block;
        width: 100%;
        margin-left: 10px;
        transform: translateY(3px);
      "
    >
      <span>{{ value }}</span>
  
      <span
        :style="{
          position: 'absolute',
          right: '0',
          top: '50%',
          transform: 'translateY(-60%)',
          color: '#333',
          cursor: 'pointer',
          fontSize: '14px',
          marginRight: '10px',
        }"
        @click="resetValue"
      >
        X
      </span>
    </span>
  </template>
  
  <script>
  export default {
    props: {
      value: String,
    },
    methods: {
      resetValue() {
        this.$emit('reset');
      },
    },
  };
  </script>
  