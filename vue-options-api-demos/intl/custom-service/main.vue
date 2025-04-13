<template>
      <custom>
        <dateFormatter :date="date" />
      </custom>
</template>

<script>
import { CustomFormatIntlProvider } from "./CustomFormatIntlProvider";
import DateFormatter from "./DateFormatter.vue";


export default {
    components: {
      "custom": CustomFormatIntlProvider,
      "dateFormatter": DateFormatter
      },
    data: function () {
        return {
            date: new Date()
        }
    }
};

</script>
