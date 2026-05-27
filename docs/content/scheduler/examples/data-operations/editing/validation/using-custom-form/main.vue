<template>
  <Scheduler
    :data-items="data"
    :default-date="displayDate"
    :views="views"
    :view="view"
    :editable="editable"
    @datachange="handleDataChange"
    :validator="validator"
    :form="'formRender'"
  >
    <template #formRender="{ props }">
      <CustomEditForm @cancel="props.onCancel" />
    </template>
  </Scheduler>
</template>

<script setup>
import { displayDate, sampleData } from './events-utc';
import { guid } from '@progress/kendo-vue-common';
import { Scheduler } from '@progress/kendo-vue-scheduler';
import CustomEditForm from './CustomEditForm.vue';
import { ref } from 'vue';

const data = ref(sampleData);
const view = ref('day');
const editable = {
    add: true,
    remove: true,
    edit: true,
};
const views = [
    { name: 'day' },
    { name: 'timeline' },
    { name: 'week' },
    { name: 'agenda' },
];

function validator(formValueGetter) {
    const desc = formValueGetter('description');
    const title = formValueGetter('title');
    return {
        title: title ? undefined : 'The event should have a title',
        description: desc ? undefined : 'Please add event description',
    };
}

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
