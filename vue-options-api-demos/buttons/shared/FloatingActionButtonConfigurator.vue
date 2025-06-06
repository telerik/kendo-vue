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
      <span v-if="shape !== undefined" class="k-form-field">
        <k-label>
          Shape
          <div class="k-form-field-wrap">
            <kbuttongroup>
              <kbutton
                v-for="(shapeElelement, index) in shapes"
                :key="index"
                :togglable="true"
                :selected="shapeElelement === shape"
                @click="handleShapeChange(shapeElelement)"
              >{{ shapeElelement || 'None' }}</kbutton>
            </kbuttongroup>
          </div>
        </k-label>
      </span>
      <span class="k-form-field">
        <k-label>
          Roundness
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
      <span class="k-form-field">
        <k-label>
          Theme Color
          <div class="k-form-field-wrap">
            <dropdownlist
              :data-items="themeColors"
              :value="themeColor"
              :item-render="'colorItemRender'"
              :style="{
                'min-width': '150px',
              }"
              @change="handleThemeColorChange"
            >
              <template v-slot:colorItemRender="{ props }">
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
            </dropdownlist>
          </div>
        </k-label>
      </span>
    </div>
  </div>
</template>

<script>
import { Label } from '@progress/kendo-vue-labels';
import { ButtonGroup, Button } from '@progress/kendo-vue-buttons';
import { DropDownList } from '@progress/kendo-vue-dropdowns';

export default {
  components: {
    'k-label': Label,
    kbutton: Button,
    kbuttongroup: ButtonGroup,
    dropdownlist: DropDownList,
  },
  props: {
    shape: String,
    size: String,
    themeColor: String,
    rounded: String,
  },
  emits: ['shapechange', 'sizechange', 'themecolorchange', 'roundedchange'],
  data() {
    return {
      shapes: ['rectangle', 'square'],
      sizes: ['small', 'medium', 'large'],
      themeColors: [
        'base',
        'primary',
        'secondary',
        'tertiary',
        'info',
        'success',
        'warning',
        'error',
        'dark',
        'light',
        'inverse',
      ],
      roundedOptions: ['small', 'medium', 'large', 'full'],
    };
  },
  methods: {
    handleShapeChange(shape) {
      this.$emit('shapechange', shape);
    },
    handleSizeChange(event) {
      this.$emit('sizechange', event);
    },
    handleThemeColorChange(event) {
      this.$emit('themecolorchange', event);
    },
    handleRoundedChange(event) {
      this.$emit('roundedchange', event);
    },
  },
};
</script>
