<template>
  <div>
    <div class="example-config">
      <RadioGroup v-model="value" :data-items="tasks" :layout="'horizontal'" />
    </div>
    <TextArea
      :style="{ width: '230px' }"
      :flow="value"
      :inputPrefix="'prefix'"
      :rows="5"
      :placeholder="'Type some text...'"
    >
      <template v-slot:prefix>
        <InputIcons />
      </template>
    </TextArea>
  </div>
</template>
<script>
import { TextArea, RadioGroup } from '@progress/kendo-vue-inputs';
import InputIcons from './InputIcons.vue';

export default {
  components: {
    TextArea,
    InputIcons,
    RadioGroup,
  },
  data() {
    return {
      value: 'vertical',
      tasks: [
        {
          label: 'Vertical',
          value: 'vertical',
        },
        {
          label: 'Horizontal',
          value: 'horizontal',
        },
      ],
    };
  },
};
</script>
