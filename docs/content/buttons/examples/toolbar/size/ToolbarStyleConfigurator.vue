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
          Size
          <div class="k-form-field-wrap">
            <DropDownList
              :data-items="sizes"
              :value="size"
              :style="{
                'min-width': '120px',
              }"
              @change="handleSizeChange"
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
    size: String,
});

const emit = defineEmits(["sizechange"]);

const sizes = ["small", "medium", "large"];

const handleSizeChange = (event) => {
    emit("sizechange", event);
};
</script>
