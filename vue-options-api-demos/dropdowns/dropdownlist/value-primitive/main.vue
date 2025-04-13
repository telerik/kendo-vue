<template>
  <div>
    <div class="example-config">Selected Value: {{ value }}</div>
    <div :style="{ display: 'inline-block', 'padding-right': '20px' }">
      value and change
      <br />
      <DropDownList
        :style="{ width: '230px' }"
        :data-items="sports"
        :text-field="'text'"
        :data-item-key="'id'"
        :value-field="'id'"
        :value-primitive="true"
        :value="value"
        @change="handleChange"
      >
      </DropDownList>
    </div>
    <div :style="{ display: 'inline-block' }">
      v-model
      <br />
      <DropDownList
        :style="{ width: '230px' }"
        :data-items="sports"
        :text-field="'text'"
        :data-item-key="'id'"
        :value-field="'id'"
        :value-primitive="true"
        v-model="value"
      >
      </DropDownList>
    </div>
  </div>
</template>
<script>
import { DropDownList } from '@progress/kendo-vue-dropdowns';

export default {
  components: {
    DropDownList,
  },
  data: function () {
    return {
      // Since the reference of the initial value is not from the 'sports' collection,
      // 'dataItemKey' have to be set.
      value: 2,
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
      this.value = event.value;
    },
  },
};
</script>
