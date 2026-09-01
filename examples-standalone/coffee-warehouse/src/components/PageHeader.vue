<template>
  <header class="page-header">
    <div><h1>{{ title }}</h1><p>{{ subtitle }}</p></div>
    <span v-if="updated" class="updated">{{ updated }}</span>
  </header>
</template>
<script>
export default { props: { title: String, subtitle: String, updated: String } };
</script>
