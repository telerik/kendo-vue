<template>
  <div>
    <LocalizationProvider :language="localizationLanguage">
      <Menu @localizationLanguageChange="onLocalizationLanguageChange" />
    </LocalizationProvider>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Menu from "./Menu.vue";
import { LocalizationProvider, loadMessages } from "@progress/kendo-vue-intl";
import { enCustomMessages } from "./en-US";
import { esCustomMessages } from "./es";
import { frCustomMessages } from "./fr";

loadMessages(enCustomMessages, "English");
loadMessages(esCustomMessages, "Spanish");
loadMessages(frCustomMessages, "French");

const localizationLanguage = ref("English");

const onLocalizationLanguageChange = (e) => {
    localizationLanguage.value = e;
};
</script>

<style></style>
