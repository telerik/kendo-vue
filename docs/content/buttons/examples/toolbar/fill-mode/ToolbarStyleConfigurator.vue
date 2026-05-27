<template>
  <div>
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
        <Label>
          Fill Mode
          <div class="k-form-field-wrap">
            <DropDownList
              :data-items="fillModes"
              :value="fillMode"
              :style="{
                'min-width': '120px',
              }"
              @change="handleFillModeChange"
            />
          </div>
        </Label>
      </span>
    </div>
  </div>
</template>

<script setup>
import { Label } from "@progress/kendo-vue-labels";
import { DropDownList } from "@progress/kendo-vue-dropdowns";

defineProps({
    fillMode: String
});

const emit = defineEmits([
    "fillmodechange",
]);

const fillModes = ["solid", "outline", "flat"];

function handleFillModeChange(event) {
    emit("fillmodechange", event);
}
</script>
