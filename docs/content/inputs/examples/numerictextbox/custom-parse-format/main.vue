<template>
  <div class="example-wrapper row">
    <div class="col-xs-12 col-sm-12 example-col">
      <KLabel>
        <CustomProviderHex :locale="'en'">
          <NumericTextBox :style="{ width: '230px' }" v-model="value" />
          HEX
        </CustomProviderHex>
      </KLabel>
    </div>
    <div class="col-xs-12 col-sm-12 example-col">
      <KLabel>
        <NumericTextBox
          :style="{ width: '230px' }"
          :format="'n0'"
          v-model="value"
        />
        DEC
      </KLabel>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { NumericTextBox } from "@progress/kendo-vue-inputs";
import { Label as KLabel } from "@progress/kendo-vue-labels";
import { IntlProvider } from "@progress/kendo-vue-intl";

const value = ref(11256099);

const CustomProviderHex = {
    ...IntlProvider,
    methods: {
        ...IntlProvider.methods,
        getChildContext() {
            const childContext = {
                kendoIntlService: this.getIntlService(),
            };
            childContext.kendoIntlService.formatNumber = function (dec) {
                return dec !== null ? Math.floor(dec).toString(16) : "";
            };
            childContext.kendoIntlService.parseNumber = function (hex) {
                return parseInt(hex, 16);
            };
            return childContext;
        },
    },
};
</script>
