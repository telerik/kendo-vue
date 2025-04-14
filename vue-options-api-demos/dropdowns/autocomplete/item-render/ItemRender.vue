<template>
  <li class="k-item" @click="handleClick">
    <span
      :style="{ color: '#00F' }"
      role="option"
      :aria-selected="focused"
      :class="itemClass"
    >
      {{ dataItem }} {{ index }}
    </span>
  </li>
</template>
<script>
export default {
  emits: {
    click: null
  },
  props: {
    id: String,
    index: Number,
    dataItem: [Object, String, Number],
    textField: String,
    focused: Boolean,
    selected: Boolean
  },
  computed: {
    itemClass() {
      return {
        "k-item": true,
        "k-state-focused": this.$props.focused
      };
    }
  },
  methods: {
    handleClick: function(e) {
      this.$emit("click", e);
    }
  }
};
</script>
