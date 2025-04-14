import { IntlProvider } from '@progress/kendo-vue-intl';
import { CustomFormatIntlService } from './CustomFormatIntlService';

const CustomFormatIntlProvider = {
    ...IntlProvider,
    methods: {
        ...IntlProvider.methods,
        getIntlService() {
            return new CustomFormatIntlService(this.$props.locale);
        }
    }
};

export { CustomFormatIntlProvider };
