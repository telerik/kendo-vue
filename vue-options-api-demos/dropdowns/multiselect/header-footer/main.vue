<template>
  <div class="example-wrapper">
            <div>
                <multiselect
                    :style="{ width: '400px'}"
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
                </multiselect>
            </div>
        </div>
</template>
<script>
import { MultiSelect } from '@progress/kendo-vue-dropdowns';
import countries from './countries';
import HeaderRender from './HeaderRender.vue';
import FooterRender from './FooterRender.vue';

export default {
    components: {
        'multiselect': MultiSelect,
        'header1': HeaderRender,
        'footer1': FooterRender
    },
    data () {
        return {
            countries: countries.slice(),
            header: 'myHeader',
            footer: 'myFooter'
        };
    }
};

</script>
