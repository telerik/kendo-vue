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
    </div>
  </div>
</template>

<script setup>
import { Label as KLabel } from "@progress/kendo-vue-labels";
import { DropDownList } from "@progress/kendo-vue-dropdowns";

defineProps({
    size: String,
});

const emit = defineEmits(["sizechange"]);

const sizeOptions = ["small", "medium", "large"];

function handleSizeChange(event) {
    emit("sizechange", event);
}
</script>
