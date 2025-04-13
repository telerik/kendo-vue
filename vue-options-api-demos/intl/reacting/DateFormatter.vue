<template>
      <div class="col-xs-12 col-sm-6 example-col">
        <label>Locale date:</label>{{" "}}
        {{formattedDate}}
      </div>
</template>

<script>
import { provideIntlService } from "@progress/kendo-vue-intl";

export default {
  name: "DateFormatter",
  inject: {
    kendoIntlService: { default: null },
  },
  computed: {
      formattedDate: function(){
        return provideIntlService(this).formatDate(new Date(2000, 10, 6), "EEEE, d.MM.y")
      }
  }
}
</script>
