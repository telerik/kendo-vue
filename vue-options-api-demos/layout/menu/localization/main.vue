<template>
  <div>
    <LocalizationProvider :language="localizationLanguage">
      <Menu @localizationLanguageChange="onLocalizationLanguageChange"></Menu>
    </LocalizationProvider>
  </div>
</template>

<script>
import Menu from './Menu.vue';
import {
  LocalizationProvider,
  loadMessages,
} from '@progress/kendo-vue-intl';

import { enCustomMessages } from './en-US';
import { esCustomMessages } from './es';
import { frCustomMessages } from './fr';

loadMessages(enCustomMessages, 'English');
loadMessages(esCustomMessages, 'Spanish');
loadMessages(frCustomMessages, 'French');

export default {
  components: {
    Menu: Menu,
    LocalizationProvider,
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
  methods: {
    onLocalizationLanguageChange(e) {
      this.localizationLanguage = e;
    },
  },
};
</script>

<style></style>
