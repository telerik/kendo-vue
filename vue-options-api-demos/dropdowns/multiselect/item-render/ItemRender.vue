<template>
<li class="k-item" @click="handleClick">
    <span :style="{ color: '#00F' }">
            {{dataItem}} {{index}}
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
        selected: Boolean,
    },
    methods: {
      handleClick: function(e){
        this.$emit('click', e);
      }
    }
}
</script>
