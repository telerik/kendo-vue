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
        justifyContent: 'space-between',
        flexWrap: 'wrap',
      }"
    >
      <span class="k-form-field">
        <KLabel>
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
        </KLabel>
      </span>
      <span v-if="shape !== undefined" class="k-form-field">
        <KLabel>
          Shape
          <div class="k-form-field-wrap">
            <ButtonGroup>
              <KButton
                v-for="(shapeElelement, index) in shapes"
                :key="index"
                :togglable="true"
                :selected="shapeElelement === shape"
                @click="handleShapeChange(shapeElelement)"
              >{{ shapeElelement || 'None' }}</KButton>
            </ButtonGroup>
          </div>
        </KLabel>
      </span>
      <span class="k-form-field">
        <KLabel>
          Roundness
          <div class="k-form-field-wrap">
            <DropDownList
              :data-items="roundedOptions"
              :value="rounded"
              :style="{
                'min-width': '120px',
              }"
              @change="handleRoundedChange"
            />
          </div>
        </KLabel>
      </span>
      <span class="k-form-field">
        <KLabel>
          Theme Color
          <div class="k-form-field-wrap">
            <DropDownList
              :data-items="themeColors"
              :value="themeColor"
              item-render="colorItemRender"
              :style="{
                'min-width': '150px',
              }"
              @change="handleThemeColorChange"
            >
              <template #colorItemRender="{ props }">
                <li
                  :class="props.itemClass"
                  @click="(ev) => props.onClick(ev)"
                  :style="{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }"
                >
                  {{ props.dataItem }}{{ ' ' }}
                  <span
                    :style="{
                      width: '16px',
                      height: '16px',
                      background: 'currentColor',
                      display: 'inline-block',
                    }"
                    :class="['k-color-' + props.dataItem]"
                  ></span>
                </li>
              </template>
            </DropDownList>
          </div>
        </KLabel>
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Label as KLabel } from '@progress/kendo-vue-labels';
import { ButtonGroup, Button as KButton } from '@progress/kendo-vue-buttons';
import { DropDownList } from '@progress/kendo-vue-dropdowns';

defineProps({
    shape: String,
    size: String,
    themeColor: String,
    rounded: String,
});

const emit = defineEmits(['shapechange', 'sizechange', 'themecolorchange', 'roundedchange']);

const shapes = ref(['rectangle', 'square']);
const sizes = ref(['small', 'medium', 'large']);
const themeColors = ref([
    'base',
    'primary',
    'secondary',
    'tertiary',
    'info',
    'success',
    'warning',
    'error',
    'inverse',
]);
const roundedOptions = ref(['none', 'small', 'medium', 'large', 'full']);

const handleShapeChange = (shape) => {
    emit('shapechange', shape);
};

const handleSizeChange = (event) => {
    emit('sizechange', event);
};

const handleThemeColorChange = (event) => {
    emit('themecolorchange', event);
};

const handleRoundedChange = (event) => {
    emit('roundedchange', event);
};
</script>
