<template>
    <div>
        <div class="example-config">
            <dropdownlist :style="{ width: '230px' }" class="localeDropDownList" :value="currentLocale"
                :text-field="'language'" @change="localeChange" :data-items="locales">
            </dropdownlist>
        </div>
        <kendo-menu :items="items" />
    </div>
</template>
  
<script>
import { Menu } from '@progress/kendo-vue-layout';
import { DropDownList } from '@progress/kendo-vue-dropdowns';
import { provideLocalizationService } from '@progress/kendo-vue-intl';

export default {
    name: 'App',
    components: {
        dropdownlist: DropDownList,
        'kendo-menu': Menu,
    },
    inject: {
        kendoLocalizationService: { default: null },
    },
    data: function () {
        return {
            currentLocale: {
                language: 'English',
                locale: 'en',
            },
            locales: [
                {
                    language: 'English',
                    locale: 'en',
                },
                {
                    language: 'French',
                    locale: 'fr',
                },
                {
                    language: 'Spanish',
                    locale: 'es',
                },
            ],
            localizationLanguage: 'English',
        };
    },
    computed: {
        items() {
            return [
                {
                    text: this.item1,
                    items: [
                        { text: this.item11 },
                        {
                            text: this.item12,
                            items: [{ text: 'Item1.2.1' }, { text: 'Item1.2.2' }],
                        },
                    ],
                },
                {
                    text: this.item2,
                    items: [{ text: this.item21 }, { text: this.item22 }],
                },
            ];
        },
        locale() {
            if (this.localizationLanguage === 'Spanish') {
                return 'es';
            }

            if (this.localizationLanguage === 'French') {
                return 'fr';
            }

            return 'en';
        },
        item1() {
            return provideLocalizationService(this).toLanguageString('item1');
        },
        item11() {
            return provideLocalizationService(this).toLanguageString('item11');
        },
        item12() {
            return provideLocalizationService(this).toLanguageString('item12');
        },
        item2() {
            return provideLocalizationService(this).toLanguageString('item2');
        },
        item21() {
            return provideLocalizationService(this).toLanguageString('item21');
        },
        item22() {
            return provideLocalizationService(this).toLanguageString('item22');
        },
    },
    methods: {
        localeChange(e) {
            this.currentLocale = e.target.value;
            this.localizationLanguage = e.target.value.language;
            this.$emit('localizationLanguageChange', this.localizationLanguage);
        },
    },
};
</script>
  