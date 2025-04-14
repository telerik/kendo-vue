<template>
 <div>
        <div>T-shirt size:</div>
         <dropdownlist
          :style="{ width: '230px' }" :data-items='sizes' ></dropdownlist>
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
            sizes: [ "X-Small", "Small", "Medium", "Large", "X-Large", "2X-Large" ],
        };
    }
};

</script>
