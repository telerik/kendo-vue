<template>
  <ul>
      <li v-for="file in files" :key="file.name">{{file.name}}</li>
  </ul>
</template>
<script>
export default {
    props: {
        files: Array,
        disabled: Boolean,
        async: Object
    },
}
</script>

