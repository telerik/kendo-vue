import { IntlService } from '@progress/kendo-vue-intl';

class CustomFormatIntlService extends IntlService {
    formatDate(value, format) {
        return `custom format: ${super.formatDate(value, format)}`;
    }
}

export { CustomFormatIntlService };
