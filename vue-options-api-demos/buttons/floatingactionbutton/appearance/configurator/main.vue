<template>
  <div>
    <FloatingActionButtonConfigurator
      :size="size"
      @sizechange="setSize"
      :theme-color="themeColor"
      @themecolorchange="setThemeColor"
      :rounded="rounded"
      @roundedchange="setRounded"
    />
    <floatingactionbutton
      :size="size"
      :theme-color="themeColor"
      :rounded="rounded"
      :svg-icon="shareIcon"
      :text="'Floating Action Button'"
      :align="{ horizontal: 'center', vertical: 'middle' }"
    >
    </floatingactionbutton>
  </div>
</template>

<script>
import { FloatingActionButton } from "@progress/kendo-vue-buttons";
import { shareIcon } from "@progress/kendo-svg-icons";
import FloatingActionButtonConfigurator from "./FloatingActionButtonConfigurator.vue";

export default {
  components: {
    FloatingActionButtonConfigurator,
    floatingactionbutton: FloatingActionButton,
  },
  data() {
    return {
      shareIcon,
      size: "medium",
      themeColor: "primary",
      rounded: "medium",
    };
  },
  methods: {
    setSize(event) {
      this.size = event.value;
    },
    setThemeColor(event) {
      this.themeColor = event.value;
    },
    setRounded(event) {
      this.rounded = event.value;
    },
  },
};
</script>
