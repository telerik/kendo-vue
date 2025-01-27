<template>
 <div class="k-rtl">
    <kendo-maskedtextbox title="phone number" mask="000-000-0000">
    </kendo-maskedtextbox>
</div>
</template>
<script>
import { MaskedTextBox } from '@progress/kendo-inputs-vue-wrapper';
export default {
  components: {
    'kendo-maskedtextbox': MaskedTextBox,
  }
}
</script>
