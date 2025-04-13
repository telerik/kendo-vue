<template>
  <div class="row">
    <div class="col-md-5">
      <span> Control with <i>v-model</i>: </span>
      <radiogroup :data-items="dataItems"
          :disabled="disabled"
          v-model="checked"
          :layout="'horizontal'" />
      <span> Control with <i>value</i> and <i>change</i>: </span>
      <radiogroup :data-items="dataItems"
          :disabled="disabled"
          :value="checked"
          @change="handleChange" />
    </div>
    <div class="col-md-4">
  
      <span>
        Current checked value is <strong>{{checked}}</strong>
      </span>
      <kbutton @click="handleClick">
        Toggle disabled state
      </kbutton>
      </div>
    </div>
</template>
<script>
import { RadioGroup } from '@progress/kendo-vue-inputs';
import { Button } from '@progress/kendo-vue-buttons'

export default {
    components: {
        radiogroup: RadioGroup,
        kbutton: Button
    },
    data() {
      return {
        checked: 'female',
        disabled: false,
        dataItems: [
          {
            label: "Female",
            value: "female",
          },
          {
            label: "Male",
            value: "male",
          },
          {
            label: "Other",
            value: "other",
          },
        ]
      };
    },
    methods: {
      handleClick() {
        this.disabled = !this.disabled;
      },
      handleChange (e) {
        this.checked = e.value;
      }
    }
};

</script>
