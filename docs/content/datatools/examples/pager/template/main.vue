<template>
  <Pager
    :skip="skip"
    :take="take"
    :total="total"
    @pagechange="handlePageChange"
    :button-count="5"
    :info="true"
    :previous-next="true"
    :type="'numeric'"
    :page-sizes="[5, 10, 20]"
    :pager-render="'myTemplate'"
    :responsive="false"
  >
    <template #myTemplate="props">
      <PagerTemplate
        :current-page="props.props.current"
        :skip="props.props.skip"
        :total-pages="props.props.total"
      />
    </template>
  </Pager>
</template>

<script setup>
import { ref } from 'vue';
import { Pager } from '@progress/kendo-vue-data-tools';
import PagerTemplate from './PagerTemplate.vue';

const total = ref(200);
const skip = ref(0);
const take = ref(5);

const handlePageChange = (event) => {
    skip.value = event.skip;
    take.value = event.take;
};
</script>
