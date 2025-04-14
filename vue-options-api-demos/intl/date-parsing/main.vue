<template>
  <div>
    <div style="margin-bottom: 1em">
      <h5>String "11/6/2000" to parse</h5>
      <div style="font-size: 1.2em">
        Result:
        <strong>
          <em>{{ enDate ? enDate.toString() : "Invalid date" }}</em>
        </strong>
      </div>
    </div>

    <div>
      <h5>String "2000-11-06T10:30Z" to parse</h5>
      <div style="font-size: 1.2em">
        Result:
        <strong>
          <em>{{ utcDate ? utcDate.toString() : "Invalid date" }}</em>
        </strong>
      </div>
    </div>
  </div>
</template>

<script>
import { provideIntlService } from "@progress/kendo-vue-intl";

export default {
  name: "App",
  data() {
    return {
      enDate: null,
      utcDate: null,
    };
  },
  created() {
    const intl = provideIntlService(this);
    this.enDate = intl.parseDate("11/6/2000", "M/d/yyyy");
    this.utcDate = intl.parseDate("2000-11-06T10:30Z");
  },
};
</script>
