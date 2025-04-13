<template>
    <div>
         <p>Type the name of a European country:</p>
        <autocomplete :style="{ width: '230px' }"
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
        </autocomplete>
    </div>
</template>
<script>
import countries from './countries';
import { AutoComplete } from '@progress/kendo-vue-dropdowns';
import HeaderRender from './HeaderRender.vue';
import FooterRender from './FooterRender.vue';

export default {
    components: {
        'autocomplete': AutoComplete,
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
