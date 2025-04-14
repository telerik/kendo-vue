<template>
  <div class="row">
    <div class="col-12 mb-5">
      <kinput :style="{ width: '230px' }" :value="value" @input="handleInputChange" />
    </div>
    <div class="col-12 mb-5">
      <ProgressBar
        :value="value.length"
        :max="max"
        :progress-style="progressStyles"
        :empty-style="emptyStyles"
        :label-render="'labelTemplate'"
      >
        <template v-slot:labelTemplate>
          <strong style="padding: 0 0.5em">{{ customText }}</strong>
        </template>
      </ProgressBar>
    </div>
    <div class="col-12">
      <kbutton @click="resetPassword" :theme-color="'primary'">
        Reset Password
      </kbutton>
    </div>
  </div>
</template>

<script>
import { ProgressBar } from "@progress/kendo-vue-progressbars";
import { Input } from "@progress/kendo-vue-inputs";
import { Button } from '@progress/kendo-vue-buttons';

export default {
  components: {
    ProgressBar,
    kinput: Input,
    'kbutton': Button
  },
  data() {
    return {
      value: "",
      customText: "Empty",
      emptyStyles: {
        color: "",
        background: "",
      },
      progressStyles: {
        background: "",
      },
      max: 9,
    };
  },
  methods: {
    handleInputChange(e) {
      if (e.value.length <= 9) {
        this.value = e.value;
      }

      switch (e.value.length) {
        case 0:
          this.updateAppearance("Empty", "", "", "");
          break;

        case 1:
          this.updateAppearance("Weak", "red", "#ee9f05", "#ff000014");
          break;

        case 5:
          this.updateAppearance("Good", "#428bca", "#428bca", "#428bca1f");
          break;

        case 9:
          this.updateAppearance("Strong", "#8EBC00", "#8EBC00", "#8ebc0021");
          break;

        default:
      }
    },
    updateAppearance(text, textColor, progressBackground, emptyBackground) {
      this.customText = text;
      this.emptyStyles = {
        color: textColor,
        background: emptyBackground,
      };
      this.progressStyles = {
        background: progressBackground,
      };
    },
    resetPassword() {
      this.value = "";
      this.customText = "Empty";
      this.emptyStyles = {
        color: "",
        background: "",
      };
      this.progressStyles = {
        background: "",
      };
    },
  },
};
</script>
