<template>
<div>
   <p>Change the orientation:</p>
      <DropDownList
        :data-items="['horizontal', 'vertical']"
        :value="orientation"
        @change="handleOrientationChange"
      />
      <hr />
      <Stepper
        :value="value"
        @change="handleChange"
        :items="items"
        :orientation="orientation"
      />
</div>
</template>

<script lang="ts">
import { DropDownList } from '@progress/kendo-vue-dropdowns';
import { Stepper } from '@progress/kendo-vue-layout';

export default {
    components: {
       Stepper,
       DropDownList
    },
    data () {
      return {
        value: 1,
        orientation: 'horizontal',
        items: [
            {
                icon: "k-i-lock",
                label: "Account Info",
            },
            {
                icon: "k-i-user",
                label: "Personal Info",
            },
            {
                icon: "k-i-myspace",
                label: "Membership",
            },
            {
                icon: "k-i-track-changes",
                label: "Verification",
            },
        ]
      }
    },
    methods: {
      handleChange (e) {
        this.value = e.value;
      },
        handleOrientationChange (e) {
            this.orientation = e.target.value;
        }
    }
};
</script>
