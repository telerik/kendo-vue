<template>
    <kendo-maskedtextbox :rules=rules mask="~^">
    </kendo-maskedtextbox>
</template>
<script>
import { MaskedTextBox } from '@progress/kendo-inputs-vue-wrapper';
export default {
  components: {
    'kendo-maskedtextbox': MaskedTextBox,
  },
    data () {
        return {
            rules: {
				"~": /[+-]/,
				"^": function (char) {
					return char === "^"; //allow only "^" symbol
				}
			}
        }
    }
}
</script>
