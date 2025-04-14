<template>
  <div>
         <p>Type the name of a European country:</p>
         <combobox
          :style="{ width: '230px' }"
            :data-items="countries"
            :header="header"
            :footer="footer"
        >
         <template v-slot:myHeader="{props}">
            <header1  />
        </template>
         <template v-slot:myFooter="{props}">
            <footer1 />
        </template>
        </combobox>
    </div>
</template>
<script>
import countries from './countries';
import { ComboBox } from '@progress/kendo-vue-dropdowns';
import HeaderRender from './HeaderRender.vue';
import FooterRender from './FooterRender.vue';

export default {
    components: {
        'combobox': ComboBox,
        'header1': HeaderRender,
        'footer1': FooterRender
    },
    data: function () {
        return {
            header: 'myHeader',
            footer: 'myFooter',
            countries: countries
        };
    }
};

</script>
