<template>
  <div class="row">
    <div class="col-12 mb-5">
      <KInput :style="{ width: '230px' }" :value="value" @input="handleInputChange" />
    </div>
    <div class="col-12 mb-5">
      <ProgressBar
        :value="value.length"
        :max="max"
        :progress-style="progressStyles"
        :empty-style="emptyStyles"
        label-render="labelTemplate"
      >
        <template #labelTemplate>
          <strong style="padding: 0 0.5em">{{ customText }}</strong>
        </template>
      </ProgressBar>
    </div>
    <div class="col-12">
      <KButton @click="resetPassword" theme-color="primary">
        Reset Password
      </KButton>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ProgressBar } from "@progress/kendo-vue-progressbars";
import { Input as KInput } from "@progress/kendo-vue-inputs";
import { Button as KButton } from "@progress/kendo-vue-buttons";

const value = ref("");
const customText = ref("Empty");
const emptyStyles = ref({
    color: "",
    background: "",
});
const progressStyles = ref({
    background: "",
});
const max = ref(9);

const handleInputChange = (e) => {
    if (e.value.length <= 9) {
        value.value = e.value;
    }

    switch (e.value.length) {
        case 0:
            updateAppearance("Empty", "", "", "");
            break;
        case 1:
            updateAppearance("Weak", "red", "#ee9f05", "#ff000014");
            break;
        case 5:
            updateAppearance("Good", "#428bca", "#428bca", "#428bca1f");
            break;
        case 9:
            updateAppearance("Strong", "#8EBC00", "#8EBC00", "#8ebc0021");
            break;
        default:
    }
};

const updateAppearance = (text, textColor, progressBackground, emptyBackground) => {
    customText.value = text;
    emptyStyles.value = {
        color: textColor,
        background: emptyBackground,
    };
    progressStyles.value = {
        background: progressBackground,
    };
};

const resetPassword = () => {
    value.value = "";
    customText.value = "Empty";
    emptyStyles.value = {
        color: "",
        background: "",
    };
    progressStyles.value = {
        background: "",
    };
};
</script>
