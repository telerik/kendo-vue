<template>
  <Scheduler
    :data-items="sampleDataRef"
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
const sampleDataRef = ref(sampleData);

function handleDataChange({ created, updated, deleted }) {
    const newData = [...sampleDataRef.value]
        .filter((item) => !deleted.find((current) => current.id === item.id))
        .map((item) => updated.find((current) => current.id === item.id) || item)
        .concat(
            created.map((item) => ({
                ...item,
                id: guid(),
            }))
        );

    sampleDataRef.value = newData;
}
</script>
