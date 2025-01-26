<template>
  <kendo-grid ref="grid"
                :data-source="localDataSource"
                :height="600"
                :scrollable-virtual="true"
                :editable="'inline'"
                :toolbar="['create']"
                :pageable-numeric="false"
                :pageable-previous-next="false"
                :pageable-messages-display="'Showing {2} data items'">
        <kendo-grid-column :field="'Id'"
                           :title="'ID'"
                           :width="110"></kendo-grid-column>
        <kendo-grid-column :field="'FirstName'"
                           :title="'First Name'"></kendo-grid-column>
        <kendo-grid-column :field="'LastName'"
                           :title="'last Name'"></kendo-grid-column>
        <kendo-grid-column :field="'City'"></kendo-grid-column>
        <kendo-grid-column :field="'Title'"></kendo-grid-column>
        <kendo-grid-column :command="['edit', 'destroy']"
                           :title="'&nbsp;'"
                           :width="200"></kendo-grid-column>
    </kendo-grid>
</template>
<script>
import { Grid, GridColumn } from '@progress/kendo-grid-vue-wrapper';

export default {
    components: {
        'kendo-grid': Grid,
        'kendo-grid-column': GridColumn
    },
  data () {
        return {
            localDataSource: this.generatedData(),
            nextId: 100001
        }
    },
    methods: {
        generatedData: function() {
            var that = this;

            return new kendo.data.DataSource({
                pageSize: 20,
                transport: {
                    read: function(e) {
                        e.success(that.generatePeople(100000));
                    },
                    create: function(e) {
                        e.data.Id = that.nextId++;
                        e.success(e.data);
                    },
                    update: function(e) {
                        e.success(e.data);
                    },
                    destroy: function(e) {
                        e.success(e.data);
                    }
                },
                schema: {
                    model: {
                        id: "Id",
                        fields: {
                            Id: { type: "number", editable: false, nullable: true },
                            FirstName: { type: "string", validation: { required: true } },
                            LastName: { type: "string" },
                            City: { type: "string" },
                            Title: { type: "string" }
                        }
                    }
                }
            });
        },
        generatePeople: function(itemCount) {
            var data = [];
            var now = new Date();
            var firstNames = ["Nancy", "Andrew", "Janet", "Margaret", "Steven", "Michael", "Robert", "Laura", "Anne", "Nige"];
            var lastNames = ["Davolio", "Fuller", "Leverling", "Peacock", "Buchanan", "Suyama", "King", "Callahan", "Dodsworth", "White"];
            var cities = ["Seattle", "Tacoma", "Kirkland", "Redmond", "London", "Philadelphia", "New York", "Seattle", "London", "Boston"];
            var titles = ["Accountant", "Vice President, Sales", "Sales Representative", "Technical Support", "Sales Manager", "Web Designer",
    "Software Developer", "Inside Sales Coordinator", "Chief Techical Officer", "Chief Execute Officer"];
            var birthDates = [new Date("1948/12/08"), new Date("1952/02/19"), new Date("1963/08/30"), new Date("1937/09/19"), new Date("1955/03/04"), new Date("1963/07/02"), new Date("1960/05/29"), new Date("1958/01/09"), new Date("1966/01/27"), new Date("1966/03/27")];

            for(var i = 0; i < itemCount; i++) {
                var firstName = firstNames[Math.floor(Math.random() * firstNames.length)],
                    lastName = lastNames[Math.floor(Math.random() * lastNames.length)],
                    city = cities[Math.floor(Math.random() * cities.length)],
                    title = titles[Math.floor(Math.random() * titles.length)],
                    birthDate = birthDates[Math.floor(Math.random() * birthDates.length)],
                    age = now.getFullYear() - birthDate.getFullYear();

                data.push({
                    Id: i + 1,
                    FirstName: firstName,
                    LastName: lastName,
                    City: city,
                    Title: title,
                    BirthDate: birthDate,
                    Age: age
                });
            }

            return data;
        }
    }
}
</script>