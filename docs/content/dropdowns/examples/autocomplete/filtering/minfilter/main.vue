<template>
  <div class="example-wrapper">
    <p>Type 'Aus':</p>
    <AutoComplete
      :style="{ width: '230px' }"
      :data-items="countries"
      :value="value"
      @change="onChange"
      :opened="opened"
      :placeholder="'e.g. Austria'"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { AutoComplete } from '@progress/kendo-vue-dropdowns';
import { filterBy } from '@progress/kendo-data-query';

const source = ["Albania", "Andorra", "Armenia", "Austria", "Azerbaijan"];

const countries = ref(source);
const value = ref('');
const opened = ref(false);

const onChange = (e) => {
    const newValue = e.target.value;
    const stateData = newValue.length < 3 ?
        { data: source, opened: false } :
        { data: filterData(newValue), opened: true };

    const eventType = e.event.type;
    const valueSelected = eventType === 'click' ||
    (eventType === 'keydown' && e.event.keyCode === 13);

    if (valueSelected && stateData.data.includes(newValue)) {
        stateData.opened = false;
    }

    value.value = newValue;
    countries.value = stateData.data;
    opened.value = stateData.opened;
};

const filterData = (searchValue) => {
    const data = source;
    const filter = {
        value: searchValue,
        operator: 'startswith',
        ignoreCase: true
    };
    return searchValue ? filterBy(data, filter) : data;
};
</script>
