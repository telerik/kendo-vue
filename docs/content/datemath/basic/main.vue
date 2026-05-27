<template>
  <div>
    The new date is {{ resultDate.toLocaleDateString() }}
    <div class="row example-config">
      <div class="col-sm-12 col-md-6 example-col">
        <p>Start Date</p>
        <Calendar :value="resultDate" @change="changeStartDate" />
      </div>
      <div>
        <div class="row">
          <div class="col-sm-4" v-for="(label, key) in datePartsLabels" :key="key">
            <p>{{ label }}</p>
            <NumericTextBox
              :name="key"
              :format="'N0'"
              :width="'80'"
              :value="dateParts[key]"
              @change="changePart"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { Calendar } from '@progress/kendo-vue-dateinputs';
import { NumericTextBox } from '@progress/kendo-vue-inputs';
import {
    addDays,
    addWeeks,
    addMonths,
    addYears,
    addDecades,
    addCenturies,
} from '@progress/kendo-date-math';

const startDate = ref(new Date());
const resultDate = ref(new Date());
const dateParts = reactive({
    days: 0,
    weeks: 0,
    months: 0,
    years: 0,
    decades: 0,
    centuries: 0,
});

const datePartsLabels = {
    days: 'Days',
    weeks: 'Weeks',
    months: 'Months',
    years: 'Years',
    decades: 'Decades',
    centuries: 'Centuries',
};

function changeStartDate({ value }) {
    startDate.value = value;
    resultDate.value = value;
    Object.keys(dateParts).forEach((key) => (dateParts[key] = 0));
}

function changePart({ value, target }) {
    const part = target.name;

    switch (part) {
        case 'days':
            resultDate.value = addDays(startDate.value, value);
            break;
        case 'weeks':
            resultDate.value = addWeeks(startDate.value, value);
            break;
        case 'months':
            resultDate.value = addMonths(startDate.value, value);
            break;
        case 'years':
            resultDate.value = addYears(startDate.value, value);
            break;
        case 'decades':
            resultDate.value = addDecades(startDate.value, value);
            break;
        case 'centuries':
            resultDate.value = addCenturies(startDate.value, value);
            break;
        default:
            resultDate.value = startDate.value;
    }

    dateParts[part] = value;
}
</script>
