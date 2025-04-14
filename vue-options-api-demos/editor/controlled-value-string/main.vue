<template>
  <Editor
    :tools="tools"
    :content-style="{ height: '100px' }"
    @change="onChange"
    :value="value"
  />
</template>

<script>
import {
  Editor
} from "@progress/kendo-vue-editor";

export default {
  components: {
    Editor,
  },
  data() {
    return {
      tools: [["Bold", "Italic"]],
      value: "<p>Editor sample content</p>",
    };
  },
  methods: {
    onChange(event) {
      this.value = event.html;
    },
  },
};
</script>
