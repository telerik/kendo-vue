<template>
 <div class="example-wrapper" :style="{ minHeight: '400px' }">
        <div class="col-xs-12 col-sm-7 example-col">
            <p>AutoComplete</p>
            <autocomplete :data-items='sports' :placeholder="'Your favorite sport'" ></autocomplete>
        </div>
          <div class="col-xs-12 col-sm-7 example-col">
            <p>ComboBox</p>
            <combobox :data-items='sports' :default-value="'Basketball'" ></combobox>
        </div>
        <div class="col-xs-12 col-sm-7 example-col">
            <p>DropDownList</p>
            <dropdownlist :data-items='sports' :default-value="'Basketball'" ></dropdownlist>
        </div>
         <div class="col-xs-12 col-sm-7 example-col">
            <p>DropDownList</p>
            <multiselect :data-items='sports' :default-value="['Basketball']" ></multiselect>
        </div>
    </div>
</template>
<script>
import { AutoComplete, ComboBox, DropDownList, MultiSelect } from '@progress/kendo-vue-dropdowns';


export default {
    components: {
        'autocomplete': AutoComplete,
        'combobox': ComboBox,
        'dropdownlist': DropDownList,
         'multiselect': MultiSelect
    },
    data: function () {
        return {
            sports: ["Baseball", "Basketball", "Cricket", "Field Hockey", "Football", "Table Tennis", "Tennis", "Volleyball" ],
        };
    }
};

</script>
