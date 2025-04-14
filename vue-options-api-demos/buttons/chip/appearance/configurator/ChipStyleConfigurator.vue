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
      <span class="k-form-field">
        <k-label>
          Fill Mode
          <div class="k-form-field-wrap">
             <dropdownlist
              :data-items="fillModes"
              :value="fillMode"
              :style="{
                'min-width': '120px',
              }"
              @change="handleFillModeChange"
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
import { ButtonGroup, Button } from "@progress/kendo-vue-buttons";
import { DropDownList } from "@progress/kendo-vue-dropdowns";

export default {
  components: {
    "k-label": Label,
    "kbutton": Button,
    "k-buttongroup": ButtonGroup,
    dropdownlist: DropDownList,
  },
  props: {
    size: String,
    themeColor: String,
    fillMode: String,
    rounded: String,
  },
  emits: [
    "sizechange",
    "themecolorchange",
    "fillmodechange",
    "roundedchange",
  ],
  data() {
    return {
      sizes: ["small", "medium", "large"],
      themeColors: [
        "base",
        "info",
        "success",
        "warning",
        "error",
      ],
      fillModes: ["solid", "outline"],
      roundedOptions: ["small", "medium", "large", "full"],
    };
  },
  methods: {
    handleSizeChange(event) {
      this.$emit("sizechange", event);
    },
    handleThemeColorChange(event) {
      this.$emit("themecolorchange", event);
    },
    handleFillModeChange(event) {
      this.$emit("fillmodechange", event);
    },
    handleRoundedChange(event) {
      this.$emit("roundedchange", event);
    },
  },
};
</script>
