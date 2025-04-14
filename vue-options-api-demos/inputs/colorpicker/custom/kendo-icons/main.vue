<template>
  <div>
    <ColorPicker :view="'gradient'" :svg-icon="editToolsIcon" />
  </div>
</template>
<script>
import { ColorPicker } from "@progress/kendo-vue-inputs";
import { editToolsIcon } from "@progress/kendo-svg-icons";


export default {
  components: {
    ColorPicker,
  },
  data() {
    return {
      editToolsIcon
    }
  }
};
</script>
