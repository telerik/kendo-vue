<template>
  <div class="example-wrapper" >
    <div id="aaa" />
    <div id="testref">
      <div>
        <datepicker
        :popupSettings="{appendTo: 'aaa'}"
         />
          <dropdownlist
            :style="{ width: '230px' }" 
            :data-items='sports'
            :default-item="'Select sport ...'"
            :popupSettings="{appendTo: 'testref'}"
        >
        </dropdownlist>
      </div>
    </div>
  </div>
</template>
<script>
import { DatePicker } from '@progress/kendo-vue-dateinputs';
import { DropDownList } from '@progress/kendo-vue-dropdowns';

export default {
    components: {
      'datepicker': DatePicker,
       'dropdownlist': DropDownList
    },
    data: function () {
        return {
            sports: [ 'Basketball', 'Football', 'Tennis', 'Volleyball' ],
        };
    }
};

</script>
