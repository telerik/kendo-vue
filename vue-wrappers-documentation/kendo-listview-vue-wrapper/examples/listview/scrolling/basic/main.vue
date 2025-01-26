<template>
 <kendo-listview ref="listView"
                :data-source="localDataSource"
                :height="280"
                :scrollable="'endless'"
                :template="itemTemplate">
    </kendo-listview>
</template>
<script>
import { ListView, Pager } from '@progress/kendo-listview-vue-wrapper';
import { DataSource } from '@progress/kendo-datasource-vue-wrapper';
export default {
  components: {
    'kendo-listview': ListView,
    'kendo-pager': Pager,
    'kendo-datasource': DataSource
  },
   data () {
        return {
            localDataSource: this.generatedData(),
            itemTemplate: `<div class="product-view k-widget">
            <dl>
                <dt>FirstName</dt>
                <dd>#:FirstName#</dd>
                <dt>LastName</dt>
                <dd>#:LastName#</dd>
                <dt>City</dt>
                <dd>#:City#</dd>
                <dt>BirthDate</dt>
                <dd>#:kendo.toString(BirthDate, "D")#</dd>
            </dl>
        </div>`
        }
    },
    methods: {
        generatedData: function() {
            var that = this;

            return new kendo.data.DataSource({
                pageSize: 20,
                data: that.generatePeople(2000),
                schema: {
                    model: {
                        id: "Id",
                        fields: {
                            Id: { type: "number", editable: false, nullable: true },
                            FirstName: { type: "string", validation: { required: true } },
                            LastName: { type: "string" },
                            City: { type: "string" }
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
            var birthDates = [new Date("1948/12/08"), new Date("1952/02/19"), new Date("1963/08/30"), new Date("1937/09/19"), new Date("1955/03/04"), new Date("1963/07/02"), new Date("1960/05/29"), new Date("1958/01/09"), new Date("1966/01/27"), new Date("1966/03/27")];

            for(var i = 0; i < itemCount; i++) {
                var firstName = firstNames[Math.floor(Math.random() * firstNames.length)],
                    lastName = lastNames[Math.floor(Math.random() * lastNames.length)],
                    city = cities[Math.floor(Math.random() * cities.length)],
                    birthDate = birthDates[Math.floor(Math.random() * birthDates.length)];

                data.push({
                    Id: i + 1,
                    FirstName: firstName,
                    LastName: lastName,
                    City: city,
                    BirthDate: birthDate,
                });
            }

            return data;
        }
    }
}
</script>
<style>
        .product-view
        {
            float: left;
            width: 50%;
            height: 300px;
            box-sizing: border-box;
            border-top: 0;
            position: relative;
        }
        .product-view:nth-child(even) {
            border-left-width: 0;
        }
        .product-view dl
        {
            margin: 10px 10px 0;
            padding: 0;
            overflow: hidden;
        }
        .product-view dt, dd
        {
            margin: 0;
            padding: 0;
            width: 100%;
            line-height: 24px;
            font-size: 18px;
        }
        .product-view dt
        {
            font-size: 11px;
            height: 16px;
            line-height: 16px;
            text-transform: uppercase;
            opacity: 0.5;
        }

        .product-view dd
        {
            height: 46px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;

        }

        .product-view dd .k-widget,
        .product-view dd .k-textbox {
            font-size: 14px;
        }
        #example .k-listview
        {
            border-width: 1px 0 0;
            padding: 0;
        }
    </style>