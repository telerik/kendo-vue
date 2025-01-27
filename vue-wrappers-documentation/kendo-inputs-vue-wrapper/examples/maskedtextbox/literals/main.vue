<template>
    <kendo-maskedtextbox title="phone number" mask="000-000-0000">
    </kendo-maskedtextbox>
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
