<template>
  <div>
    <MaskedTextBox
      :style="{ width: '300px' }"
      :disabled="true"
      :inputIconName="'gear'"
      :showValidationIcon="true"
      :inputPrefix="'prefix'"
      :inputSuffix="'suffix'"
      :showClearButton="true"
      :mask="mask"
      :default-value="defaultValue"
    >
      <template v-slot:prefix>
        <InputIcons />
      </template>
      <template v-slot:suffix>
        <SvgIcon :icon="gearIcon" />
      </template>
    </MaskedTextBox>
  </div>
</template>
<script>
import { MaskedTextBox } from '@progress/kendo-vue-inputs';
import InputIcons from './InputIcons.vue';
import { SvgIcon } from '@progress/kendo-vue-common';
import { gearIcon } from '@progress/kendo-svg-icons';

export default {
    components: {
        MaskedTextBox,
        InputIcons,
        SvgIcon
    },
    data: function () {
        return {
            mask: '(999) 000-00-00-00',
            defaultValue: '(359) 555-55-55-55',
            gearIcon
        };
    },
};
</script>
