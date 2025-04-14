<template>
        <pager
            :skip="skip"
            :take="take"
            :total="total"
            @pagechange="handlePageChange"
            :button-count="5"
            :info="true"
            :previous-next="true"
            :type="'numeric'"
            :page-sizes="[5, 10, 20]"
            :pager-render="pagerRender"
            :responsive="false"
          >
            <template v-slot:myTemplate={props}>
                    <custom 
                     :current-page="props.current" 
                     :skip="props.skip" 
                     :total-pages="props.total" />
                </template>
          </pager>
</template>
<script>
import { Pager } from '@progress/kendo-vue-data-tools';
import PagerTemplate from './PagerTemplate.vue';

export default {
    components: {
       pager: Pager,
       custom: PagerTemplate
    },
    data: function () {
        return { 
          pagerRender: 'myTemplate',
          total: 200,
          skip: 0, take: 5 };
    },
    methods: {
      handlePageChange(event) {
          this.skip= event.skip;
          this.take = event.take;
      }
    }
};

</script>
