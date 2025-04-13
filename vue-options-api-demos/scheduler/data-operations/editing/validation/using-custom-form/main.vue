<template>
  <Scheduler
    :data-items="sampleData"
    :default-date="displayDate"
    :views="views"
    :view="view"
    :editable="editable"
    @datachange="handleDataChange"
    :validator="validator"
    :form="'formRender'"
  >
    <template v-slot:formRender="{ props }">
      <customEditForm @cancel="props.onCancel" />
    </template>
  </Scheduler>
</template>
<script>
import { displayDate, sampleData } from './events-utc';
import { guid } from '@progress/kendo-vue-common';
import { Scheduler } from '@progress/kendo-vue-scheduler';
import CustomEditForm from './CustomEditForm.vue';

export default {
  components: {
    Scheduler,
    customEditForm: CustomEditForm,
  },
  data() {
    return {
      view: 'day',
      editable: {
        add: true,
        remove: true,
        edit: true,
      },
      views: [
        { name: 'day' },
        { name: 'timeline' },
        { name: 'week' },
        { name: 'agenda' },
      ],
      sampleData,
      displayDate,
    };
  },
  methods: {
    validator(formValueGetter) {
      const desc = formValueGetter('description');
      const title = formValueGetter('title');
      return {
        title: title ? undefined : 'The event should have a title',
        description: desc ? undefined : 'Please add event description',
      };
    },
    handleDataChange({ created, updated, deleted }) {
      const newData = [...this.sampleData] // Filter the deleted items
        .filter(
          (item) =>
            deleted.find((current) => current.id === item.id) === undefined
        ) // Find and replace the updated items
        .map(
          (item) => updated.find((current) => current.id === item.id) || item
        ) // Add the newly created items and assign an `id`.
        .concat(
          created.map((item) =>
            Object.assign({}, item, {
              id: guid(),
            })
          )
        );

      this.sampleData = newData;
    },
  },
};
</script>
