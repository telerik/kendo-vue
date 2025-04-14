<template>
      <div class="col-xs-12 col-sm-6 example-col">
        <label>Locale currency:</label>{{" "}}
        {{formattedNumber}}
      </div>
</template>

<script>
import { provideIntlService } from "@progress/kendo-vue-intl";

export default {
  name: "CurrencyFormatter",
  inject: {
    kendoIntlService: { default: null },
  },
  computed: {
    formattedNumber: function(){
        return provideIntlService(this).formatNumber(100, "c")
    }
  }
}

</script>
