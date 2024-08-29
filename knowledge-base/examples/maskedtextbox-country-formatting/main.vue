<template>
  <div>
    <div style="display: flex; align-items: center; gap: 10px">
      <DropDownList
        :style="{ width: '100px' }"
        :data-items="countries"
        :value="selectedCountry"
        text-field="code"
        value-field="code"
        @change="handleCountryChange"
      />
      <MaskedTextBox
        :style="{ width: '300px' }"
        :mask="mask"
        :value="value"
        @change="handleOnChange"
      />
    </div>
    <div v-if="formattedValue">
      <p>Formatted Value: {{ formattedValue }}</p>
    </div>
  </div>
</template>

<script>
import { MaskedTextBox } from "@progress/kendo-vue-inputs";
import { DropDownList } from "@progress/kendo-vue-dropdowns";

export default {
  components: {
    MaskedTextBox,
    DropDownList,
  },
  data() {
    return {
      countries: [
        { name: "Andorra", code: "🇦🇩", mask: "000-000-000", prefix: "+376" },
        { name: "Germany", code: "🇩🇪", mask: "0000-0000000", prefix: "+49" },
      ],
      selectedCountry: null,
      mask: "",
      value: "",
      formattedValue: "",
    };
  },
  created() {
    this.selectedCountry = this.countries[0];
    this.mask = this.selectedCountry.mask;
  },
  methods: {
    handleCountryChange(event) {
      this.selectedCountry = event.target.value;
      this.mask = this.selectedCountry ? this.selectedCountry.mask : "";
      this.value = "";
      this.formattedValue = "";
    },
    handleOnChange(event) {
      const newValue = event.target.value;
      this.value = newValue;
      const cleanValue = newValue.replace(/[^0-9]/g, "");
      if (this.selectedCountry) {
        this.formattedValue = `${this.selectedCountry.prefix}${cleanValue}`;
      } else {
        this.formattedValue = newValue;
      }
    },
  },
};
</script>
