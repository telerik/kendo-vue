<template>
    <span style='display: block'>
      {{message}}
    </span>
</template>

<script>
import { provideLocalizationService } from "@progress/kendo-vue-intl";

export default {
  name: "MessageComponent",
  props: {
    messageKey: String,
    defaultMessage: String
  },
  inject: {
    kendoLocalizationService: { default: null },
  },
  computed: {
        message(){
          return  provideLocalizationService(this).toLanguageString(this.messageKey, this.defaultMessage);
        }
  }
}
</script>