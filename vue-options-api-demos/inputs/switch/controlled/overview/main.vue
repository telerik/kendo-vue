<template>
  <div>
    <k-switch @change="onChange" :checked="checked" />
  </div>
</template>

<script>
import { Switch } from "@progress/kendo-vue-inputs";

export default {
  components: {
    "k-switch": Switch,
  },
  data() {
    return {
      checked: true,
    };
  },
  methods: {
    onChange(e) {
      this.checked = e.target.value;
    },
  },
};
</script>
