<template>
  <div>
    <MultiSelect
      :style="{ width: '230px' }"
      :data-items="subsetData"
      :data-item-key="'id'"
      :text-field="'name'"
      :group-field="'title'"
      :virtual="virtual"
      @pagechange="pageChange"
      :popup-settings="popupSettings"
    ></MultiSelect>
  </div>
</template>
<script>
import { MultiSelect } from "@progress/kendo-vue-dropdowns";
import { groupBy } from "@progress/kendo-data-query";

const total = 500;
const pageSize = 30;

function createRandomData(count) {
  const firstNames = [
    "Nancy",
    "Andrew",
    "Janet",
    "Margaret",
    "Steven",
    "Michael",
    "Robert",
    "Anne",
    "Nige",
  ];
  const lastNames = [
    "Davolio",
    "Fuller",
    "Leverling",
    "Peacock",
    "Buchanan",
    "Suyama",
    "King",
    "Callahan",
    "Dodsworth",
    "White",
  ];
  const titles = [
    "Accountant",
    "Vice President, Sales",
    "Sales Representative",
    "Technical Support",
    "Sales Manager",
    "Web Designer",
    "Software Developer",
    "QA",
    "Project Manager",
  ];

  return Array(count)
    .fill({})
    .map((_, idx) => ({
      id: idx,
      name:
        firstNames[Math.floor(Math.random() * firstNames.length)] +
        " " +
        lastNames[Math.floor(Math.random() * lastNames.length)],
      title: titles[Math.floor(Math.random() * titles.length)],
    }));
}
const employees = groupBy(createRandomData(total), [{ field: "title" }]).reduce(
  (res, group) => [...res, ...group.items],
  []
);

export default {
  components: {
    MultiSelect,
  },
  data: function () {
    return {
      skip: 0,
      pageSize: pageSize,
      popupSettings: {
        height: "250px",
      },
      employees: employees,
    };
  },
  computed: {
    virtual: function () {
      return {
        total: total,
        pageSize: pageSize,
        skip: this.skip,
      };
    },
    subsetData() {
      return employees.slice(this.skip, this.skip + this.pageSize);
    },
  },
  methods: {
    pageChange(event) {
      console.log("Page change")
      this.skip = event.page.skip;
    },
  },
};
</script>
