<template>
    <div>
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
      </div>
    </div>
</template>

<script>
  import { Label } from "@progress/kendo-vue-labels";
  import { DropDownList } from "@progress/kendo-vue-dropdowns";

  export default {
      components: {
          KLabel: Label,
          DropDownList,
      },
      props: {
          size: String,
      },
      emits: [
          "sizechange",
      ],
      data() {
          return {
              sizes: ["small", "medium", "large"],
          };
      },
      methods: {
          handleSizeChange(event) {
              this.$emit("sizechange", event);
          },
      },
  };
</script>
