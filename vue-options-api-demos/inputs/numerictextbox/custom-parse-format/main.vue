<template>
  <div class="example-wrapper row">
                <div class="col-xs-12 col-sm-12 example-col">
                    <label>
                        <custom-provider-hex :locale="'en'">
                            <numerictextbox :style="{ width: '230px' }" v-model="value">
                            </numerictextbox>
                             HEX
                        </custom-provider-hex>
                    </label>
                </div>
                <div class="col-xs-12 col-sm-12 example-col">
                    <label>
                        <numerictextbox :style="{ width: '230px' }" :format="'n0'" v-model="value"></numerictextbox>
                        DEC
                    </label>
                </div>
            </div>
</template>
<script>
import { NumericTextBox } from '@progress/kendo-vue-inputs';
import { IntlProvider } from '@progress/kendo-vue-intl'

let CustomProviderHEX = {
        ...IntlProvider,
        methods: {
            ...IntlProvider.methods,
            getChildContext() {
                const childContext = {
                    kendoIntlService: this.getIntlService()
                };
                childContext.kendoIntlService.formatNumber = function (dec) {
                    return (dec !== null) ? Math.floor(dec).toString(16) : '';
                };
                childContext.kendoIntlService.parseNumber = function (hex) {
                    return parseInt(hex, 16);
                };
                return childContext;
            }
    }
};

export default {
    components: {
        'numerictextbox': NumericTextBox,
        'custom-provider-hex': CustomProviderHEX
    },
    data: function(){
        return {
            value: 11256099
        };
    }
};

</script>
