<template>
  <div>
    <div class="example-config">
      {{ view }}
      <RadioGroup
        :data-items="dataItems"
        :default-value="'gradient'"
        @change="onChange"
      />
    </div>
    <div>
      <ColorPicker :default-value="value" :view="view" />
    </div>
  </div>
</template>
<script>
import { ColorPicker, RadioGroup } from "@progress/kendo-vue-inputs";

export default {
  components: {
    ColorPicker,
    RadioGroup,
  },
  methods: {
    onChange(e) {
      this.view = e.value;
    },
  },
  data() {
    return {
      view: "gradient",
      value: "rgba(237, 126, 50, 1)",
      dataItems: [
        {
          label: "Gradient",
          value: "gradient",
        },
        {
          label: "Palette",
          value: "palette",
        },
      ],
    };
  },
};
</script>
