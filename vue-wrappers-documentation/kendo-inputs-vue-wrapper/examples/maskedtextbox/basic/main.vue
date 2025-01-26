<template>
   <kendo-maskedtextbox title="phone number"
						 v-model="phoneNumber"
						 mask="(999) 000-0000">
    </kendo-maskedtextbox>
    phone number: <span v-text="phoneNumber"></span>
</template>
<script>
import { MaskedTextBox } from '@progress/kendo-inputs-vue-wrapper';
export default {
  components: {
    'kendo-maskedtextbox': MaskedTextBox,
  },
   data: function() {
        return {
            phoneNumber: ""
        }
    }
}
</script>
