<template>
  <div class="example-wrapper">
    <div>
      <div>Favorite sports:</div>

      <dropdownlist
        aria-label="Select a Customer"
        :fill-mode="'outline'"
        :data-items="allData"
        :text-field="'text'"
        :data-item-key="'id'"
        :defaultValue="customerInfo"
        :filterable="true"
        :popup-settings="{
          height: '250px',
        }"
        @scroll="handleScroll"
      />
<br />
<br />
<br />
<br />
       <combobox
        aria-label="Select a Customer"
        :fill-mode="'outline'"
        :data-items="allData"
        :text-field="'text'"
        :data-item-key="'id'"
        :defaultValue="customerInfo"
        :filterable="true"
        :popup-settings="{
          height: '250px',
        }"
        @scroll="handleScroll"
      />
    </div>
  </div>
</template>
<script>
import { MultiSelect, DropDownList, ComboBox } from "@progress/kendo-vue-dropdowns";

export default {
  components: {
    multiselect: MultiSelect,
    dropdownlist: DropDownList,
    combobox: ComboBox,
  },
  data: function () {
    return {
      total: 105,
      pageSize: 100,
      skip: 0,
      take: undefined,
      popupSettings: {
        height: "250px",
      },
      customerInfo: { id: 1, text: "Item 1" },
    };
  },
  computed: {
    allData() {
      const allData = [];
      for (let i = 0; i < this.total; i++) {
        allData.push({ id: i, text: "Item " + i });
      }
      return allData;
    },
  },
  methods: {
    handleScroll(e) {
      if (
        e.target.scrollTop + 10 >=
        e.target.scrollHeight - e.target.clientHeight
      ) {
        this.total = this.total + 20;
      }
    },
  },
};
</script>
