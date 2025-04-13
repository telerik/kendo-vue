<template>
  <div>
    <JapaneseFood />
    <ItalianFood />
  </div>
</template>
<script>
import JapaneseFood from "./JapaneseFood.vue";
import ItalianFood from "./ItalianFood.vue";
export default {
  components: {
    JapaneseFood,
    ItalianFood,
  },
};
</script>
