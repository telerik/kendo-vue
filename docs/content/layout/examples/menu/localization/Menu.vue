<template>
  <div>
    <div class="example-config">
      <DropDownList
        :style="{ width: '230px' }"
        class="localeDropDownList"
        :value="currentLocale"
        :text-field="'language'"
        @change="localeChange"
        :data-items="locales"
      />
    </div>
    <Menu :items="items" />
  </div>
</template>

<script setup>
import { ref, computed, inject } from 'vue';
import { Menu } from '@progress/kendo-vue-layout';
import { DropDownList } from '@progress/kendo-vue-dropdowns';
import { provideLocalizationService } from '@progress/kendo-vue-intl';

const kendoLocalizationService = inject('kendoLocalizationService', null);
const emit = defineEmits(['localizationLanguageChange']);

const currentLocale = ref({
    language: 'English',
    locale: 'en',
});

const locales = [
    { language: 'English', locale: 'en' },
    { language: 'French', locale: 'fr' },
    { language: 'Spanish', locale: 'es' },
];

const localizationLanguage = ref('English');

const items = computed(() => [
    {
        text: item1.value,
        items: [
            { text: item11.value },
            {
                text: item12.value,
                items: [{ text: 'Item1.2.1' }, { text: 'Item1.2.2' }],
            },
        ],
    },
    {
        text: item2.value,
        items: [{ text: item21.value }, { text: item22.value }],
    },
]);

const item1 = computed(() =>
    provideLocalizationService({kendoLocalizationService}).toLanguageString('item1')
);
const item11 = computed(() =>
    provideLocalizationService({kendoLocalizationService}).toLanguageString('item11')
);
const item12 = computed(() =>
    provideLocalizationService({kendoLocalizationService}).toLanguageString('item12')
);
const item2 = computed(() =>
    provideLocalizationService({kendoLocalizationService}).toLanguageString('item2')
);
const item21 = computed(() =>
    provideLocalizationService({kendoLocalizationService}).toLanguageString('item21')
);
const item22 = computed(() =>
    provideLocalizationService({kendoLocalizationService}).toLanguageString('item22')
);

function localeChange(e) {
    currentLocale.value = e.target.value;
    localizationLanguage.value = e.target.value.language;
    emit('localizationLanguageChange', localizationLanguage.value);
}
</script>
