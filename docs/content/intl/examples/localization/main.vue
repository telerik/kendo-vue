<template>
  <div>
    <Chooser
      label="Select language"
      :options="languages"
      :value="language"
      @change="onChange"
    />
    <LocalizationProvider :language="language">
      <div>
        <MessageComponent
          :messageKey="yesterdaysMessageKey"
          :defaultMessage="defaultMessages['yesterdaysMessageKey']"
        />
        <MessageComponent
          :messageKey="todaysMessages"
          :defaultMessage="defaultMessages['todaysMessages']"
        />
        <MessageComponent
          :messageKey="tomorrowsMessageKey"
          :defaultMessage="defaultMessages['tomorrowsMessageKey']"
        />
      </div>
    </LocalizationProvider>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Chooser from "./Chooser.vue";
import MessageComponent from "./MessageComponent.vue";
import {
    messages,
    todaysMessages,
    yesterdaysMessageKey,
    tomorrowsMessageKey,
} from "./messages";
import { loadMessages, LocalizationProvider } from "@progress/kendo-vue-intl";

loadMessages(messages["es"], "es");
loadMessages(messages["bg"], "bg");

const language = ref("en");
const languages = ["en", "es", "bg"];
const defaultMessages = {
    yesterdaysMessageKey: "Yesterday was a good day!",
    todaysMessages: "Today is a good day as well!",
    tomorrowsMessageKey: "Tomorrow will be even better!",
};

function onChange(e) {
    language.value = e.target.value;
}
</script>
