<template>
 <div class="col-xs-12 col-sm-6 example-col">
        <p>AutoComplete</p>
        <kendo-autocomplete :data-source="dataSourceArray"
                            :placeholder="'Your favorite sport'"
                            :separator="', '"
                            :filter="'contains'">
        </kendo-autocomplete>
    </div>

    <div class="col-xs-12 col-sm-6 example-col">
        <p>ComboBox</p>
        <kendo-combobox :data-source="dataSourceArray"
                        :filter="'contains'"
                        :index="0">
        </kendo-combobox>
    </div>

    <div class="col-xs-12 col-sm-6 example-col">
        <p>DropDownList</p>
        <kendo-dropdownlist :data-source="dataSourceArray"
                            :index="0">
        </kendo-dropdownlist>
    </div>

    <div class="col-xs-12 col-sm-6 example-col">
        <p>MultiSelect</p>
        <kendo-multiselect :data-source="dataSourceArray"
                           :filter="'contains'">
        </kendo-multiselect>
    </div>

    <div class="col-xs-12 col-sm-6 example-col">
        <p>MultiColumnComboBox</p>
        <kendo-multicolumncombobox :data-source="multiColumnArray"
                                   :filter="'contains'"
                                   :filter-fields="['name']"
                                   :data-text-field="'name'"
                                   :data-value-field="'name'"
                                   :columns="columnsDefinitions">
        </kendo-multicolumncombobox>
    </div>
</template>
<script>
import { AutoComplete, ComboBox, DropDownList, MultiColumnComboBox, MultiSelect } from '@progress/kendo-dropdowns-vue-wrapper';
export default {
  components: {
    'kendo-autocomplete': AutoComplete,
    'kendo-combobox': ComboBox,
    'kendo-dropdownlist': DropDownList,
    'kendo-multicolumncombobox': MultiColumnComboBox,
    'kendo-multiselect': MultiSelect
  },
  data: function() {
        return {
            dataSourceArray: [
                'Football',
                'Tennis',
                'Basketball',
                'Baseball',
                'Cricket',
                'Field Hockey',
                'Volleyball'
            ],
            multiColumnArray: [{
                name: 'Andrew Fuller',
                company: 'Progress'
            },{
                name: 'Nancy Davolio',
                company: 'Progress'
            },{
                name: 'Sirma Franks',
                company: 'Progress'
            },{
                name: 'John Waltham',
                company: 'Telerik'
            },{
                name: 'Fritz Dong',
                company: 'Progress'
            }],
            columnsDefinitions: [{
                field: 'name'
            },{
                field: 'company'
            }]
        }
    }
}
</script>
