<template>
  <div class="row">
    <div class="col-md-3">
      <kbutton @click="handleToggleSwitch">Toggle</kbutton>
    </div>
    <div class="col-md-3">
      <k-switch @change="onChange" :checked="checked" />
    </div>
  </div>
</template>

<script>
import { Switch } from "@progress/kendo-vue-inputs";
import { Button } from '@progress/kendo-vue-buttons';

export default {
  components: {
    "k-switch": Switch,
      'kbutton': Button
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
    handleToggleSwitch(e) {
      this.checked = !this.checked;
    },
  },
};
</script>
