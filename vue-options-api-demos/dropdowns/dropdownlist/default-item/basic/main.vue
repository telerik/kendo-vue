<template>
  <div>
         <dropdownlist
            :style="{ width: '230px' }" 
            :data-items='sports'
            :default-item="'Select sport ...'"
        >
        </dropdownlist>
    </div>
</template>
<script>
import { DropDownList } from '@progress/kendo-vue-dropdowns';

export default {
    components: {
        'dropdownlist': DropDownList
    },
    data: function () {
        return {
            sports: [ 'Basketball', 'Football', 'Tennis', 'Volleyball' ],
        };
    }
};

</script>
