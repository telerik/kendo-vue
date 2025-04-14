<template>
      <div>
        <span>
          {{" "}}
          {{formattedDate}}
        </span>
      </div>
</template>

<script>
    import {
      provideIntlService,
    } from "@progress/kendo-vue-intl";

export default {
  name: "DateFormatter",
  props: {
    date: Date
  },
  inject: {
    kendoIntlService: { default: null },
  },
  computed: {
      formattedDate: function(){
        return provideIntlService(this).formatDate(this.date, "EEEE, d.MM.y")
      }
  }
}

</script>
