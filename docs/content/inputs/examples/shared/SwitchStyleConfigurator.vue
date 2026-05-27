<template>
  <div :style="{ margin: '-30px -30px 30px -30px' }">
    <div :style="{ display: 'flex', justifyContent: 'center' }">
      <span
        class="k-color-primary"
        :style="{ textTransform: 'uppercase', padding: '4px 0' }"
      >
        Configurator
      </span>
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
        <KLabel>
          Size
          <div class="k-form-field-wrap">
            <DropDownList
              :data-items="sizeOptions"
              :value="size"
              :style="{ minWidth: '120px' }"
              @change="handleSizeChange"
            />
          </div>
        </KLabel>
      </span>
      <span class="k-form-field">
        <KLabel>
          Track Rounded Mode
          <div class="k-form-field-wrap">
            <DropDownList
              :data-items="trackRoundedOptions"
              :value="trackRounded"
              :style="{ minWidth: '120px' }"
              @change="handleTrackRoundedChange"
            />
          </div>
        </KLabel>
      </span>
      <span class="k-form-field">
        <KLabel>
          Thumb Rounded Radius
          <div class="k-form-field-wrap">
            <DropDownList
              :data-items="thumbRoundedOptions"
              :value="thumbRounded"
              :style="{ minWidth: '120px' }"
              @change="handleThumbRoundedChange"
            />
          </div>
        </KLabel>
      </span>
    </div>
  </div>
</template>

<script setup>
import { Label as KLabel } from "@progress/kendo-vue-labels";
import { DropDownList } from "@progress/kendo-vue-dropdowns";

defineProps({
    size: String,
    thumbRounded: String,
    trackRounded: String,
});

const emit = defineEmits(["sizechange", "trackroundedchange", "thumbroundedchange"]);

const sizeOptions = ["small", "medium", "large"];
const trackRoundedOptions = ["none", "small", "medium", "large", "full"];
const thumbRoundedOptions = ["none", "small", "medium", "large", "full"];

function handleSizeChange(event) {
    emit("sizechange", event);
}

function handleTrackRoundedChange(event) {
    emit("trackroundedchange", event);
}

function handleThumbRoundedChange(event) {
    emit("thumbroundedchange", event);
}
</script>
