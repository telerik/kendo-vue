<template>
  <div>
    <div class="example-config">Selected Value: {{ multiSelectValues }}</div>
    <div :style="{ display: 'inline-block', 'padding-right': '20px' }">
      value and change
      <br />
      <MultiSelect
        :style="{ width: '230px' }"
        :data-items="sports"
        :text-field="'text'"
        :data-item-key="'id'"
        :value-field="'id'"
        :value-primitive="true"
        :value="multiSelectValues"
        @change="handleChange"
      >
      </MultiSelect>
    </div>
    <div :style="{ display: 'inline-block' }">
      v-model
      <br />
      <MultiSelect
        :style="{ width: '230px' }"
        :data-items="sports"
        :text-field="'text'"
        :data-item-key="'id'"
        :value-field="'id'"
        :value-primitive="true"
        v-model="multiSelectValues"
      >
      </MultiSelect>
    </div>
  </div>
</template>
<script>
import { MultiSelect } from '@progress/kendo-vue-dropdowns';

export default {
  components: {
    MultiSelect,
  },
  data: function () {
    return {
      // Since the reference of the initial value is not from the 'sports' collection,
      // 'dataItemKey' have to be set.
      multiSelectValues: [2],
      sports: [
        { text: 'Basketball', id: 1 },
        { text: 'Football', id: 2 },
        { text: 'Tennis', id: 3 },
        { text: 'Volleyball', id: 4 },
      ],
    };
  },
  methods: {
    handleChange(event) {
      this.multiSelectValues = event.value;
    },
  },
};
</script>
