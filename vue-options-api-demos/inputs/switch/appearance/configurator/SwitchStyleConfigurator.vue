<template>
  <div :style="{ margin: '-30px -30px 30px -30px' }">
    <div :style="{ display: 'flex', justifyContent: 'center' }">
      <span
        class="k-color-primary"
        :style="{ textTransform: 'uppercase', padding: '4px 0' }"
        >Configurator</span
      >
    </div>
    <div
      class="example-config"
      :style="{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
      }"
    >
      <span class="k-form-field">
        <k-label>
          Size
          <div class="k-form-field-wrap">
             <dropdownlist
              :data-items="sizeOptions"
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
          Track Rounded Mode
          <div class="k-form-field-wrap">
             <dropdownlist
              :data-items="trackRoundedOptions"
              :value="trackRounded"
              :style="{
                'min-width': '120px',
              }"
              @change="handleTrackRoundedChange"
            />
          </div>
        </k-label>
      </span>
      <span class="k-form-field">
        <k-label>
          Thumb Rounded Radius
          <div class="k-form-field-wrap">
             <dropdownlist
              :data-items="thumbRoundedOptions"
              :value="thumbRounded"
              :style="{
                'min-width': '120px',
              }"
              @change="handleThumbRoundedChange"
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
    thumbRounded: String,
    trackRounded: String,
  },
  emits: ["sizechange", "trackroundedchange", "thumbroundedchange"],
  data() {
    return {
      sizeOptions: ["small", "medium", "large"],
      trackRoundedOptions: ["small", "medium", "large", "full"],
      thumbRoundedOptions: ["small", "medium", "large", "full"],
    };
  },
  methods: {
    handleSizeChange(event) {
      this.$emit("sizechange", event);
    },
    handleTrackRoundedChange(event) {
      this.$emit("trackroundedchange", event);
    },
    handleThumbRoundedChange(event) {
      this.$emit("thumbroundedchange", event);
    },
  },
};
</script>
