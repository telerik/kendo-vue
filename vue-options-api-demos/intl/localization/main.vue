<template>
      <div>
        <Chooser
          :label="'Select language'"
          :options="languages"
          :value="language"
          @change="onChange"
        />
        <localization :language="language">
          <div>
            <MessageComponent :messageKey="yesterdaysMessageKey" :defaultMessage="defaultMessages['yesterdaysMessageKey']" />
            <MessageComponent
              :messageKey="todaysMessages"
              :defaultMessage="defaultMessages['todaysMessages']"
            />
            <MessageComponent
              :messageKey="tomorrowsMessageKey"
              :defaultMessage="defaultMessages['tomorrowsMessageKey']"
            />
          </div>
        </localization>
      </div>
</template>

<script>
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

export default {
    components: {
      'MessageComponent': MessageComponent,
      'localization': LocalizationProvider,
      'Chooser': Chooser
      },
    data: function () {
        return {
            language: "en",
            languages: ["en", "es", "bg"],
            messages: messages,
            todaysMessages: todaysMessages,
            yesterdaysMessageKey: yesterdaysMessageKey,
            tomorrowsMessageKey: tomorrowsMessageKey,
            defaultMessages: {
              ["yesterdaysMessageKey"]: "Yesterday was a good day!",
              ["todaysMessages"]: "Today is a good day as well!",
              ["tomorrowsMessageKey"]: "Tomorrow will be even better!",
            }
        }
    },
    methods: {
      onChange: function(e){
        this.language = e.target.value;
      }
    }
};

</script>
