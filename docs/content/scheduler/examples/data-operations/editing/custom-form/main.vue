<template>
  <Scheduler
    :data-items="data"
    :default-date="displayDate"
    :views="views"
    :view="view"
    :editable="editable"
    @datachange="handleDataChange"
    :form="'formRender'"
  >
    <template #formRender="{ props }">
      <CustomEditForm @cancel="props.onCancel" />
    </template>
  </Scheduler>
</template>
<script setup>
import { ref } from 'vue';
import { Scheduler } from '@progress/kendo-vue-scheduler';
import { guid } from '@progress/kendo-vue-common';
import { displayDate, sampleData } from './events-utc';
import CustomEditForm from './CustomEditForm.vue';

const data = ref(sampleData);
const view = ref('day');
const editable = ref({
    add: true,
    remove: true,
    edit: true,
});
const views = ref([
    { name: 'day' },
    { name: 'timeline' },
    { name: 'week' },
    { name: 'agenda' },
]);

function handleDataChange({ created, updated, deleted }) {
    const newData = [...data.value]
        .filter(
            (item) =>
                deleted.find((current) => current.id === item.id) === undefined
        )
        .map(
            (item) =>
                updated.find((current) => current.id === item.id) || item
        )
        .concat(
            created.map((item) =>
                Object.assign({}, item, {
                    id: guid(),
                })
            )
        );

    data.value = newData;
}
</script>
