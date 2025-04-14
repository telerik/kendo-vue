<template>
  <div :style="{ margin: '-30px -30px 30px -30px' }">
    <div :style="{ display: 'flex', justifyContent: 'center' }">
      <span
        class="k-color-primary"
        :style="{ textTransform: 'uppercase', padding: '4px 0' }"
      >Configurator</span>
    </div>
    <div
      class="example-config"
      :style="{
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
      }"
    >
      <span class="k-form-field">
        <k-label>
          Size
          <div class="k-form-field-wrap">
            <dropdownlist
              :data-items="sizes"
              :value="size"
              :style="{
                'min-width': '120px',
              }"
              @change="handleSizeChange"
            />
          </div>
        </k-label>
      </span>
      <span class="k-form-field">
        <k-label>
          Border Radius
          <div class="k-form-field-wrap">
            <dropdownlist
              :data-items="roundedOptions"
              :value="rounded"
              :style="{
                'min-width': '120px',
              }"
              @change="handleRoundedChange"
            />
          </div>
        </k-label>
      </span>
    </div>
  </div>
</template>

<script>
import { Label } from "@progress/kendo-vue-labels";
import { DropDownList } from "@progress/kendo-vue-dropdowns";

export default {
  components: {
    "k-label": Label,
    dropdownlist: DropDownList,
  },
  props: {
    size: String,
    rounded: String,
  },
  emits: ["sizechange", "roundedchange"],
  data() {
    return {
      sizes: ["small", "medium", "large"],
      roundedOptions: ["small", "medium", "large"],
    };
  },
  methods: {
    handleSizeChange(event) {
      this.$emit("sizechange", event);
    },
    handleRoundedChange(event) {
      this.$emit("roundedchange", event);
    },
  },
};
</script>
