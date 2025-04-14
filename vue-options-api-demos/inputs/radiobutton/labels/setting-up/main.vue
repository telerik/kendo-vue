<template>
    <div>
      <radiobutton
        :label="'RadioButton label'"
        :name="'group1'"
        :value="'default label'"
        :checked="true"
      />
      <radiobutton
        :label="'RadioButton label before'"
        :label-placement="'before'"
        :name="'group1'"
        :value="'label before'"
      />
    </div>
</template>
<script>
import { RadioButton } from "@progress/kendo-vue-inputs";

export default {
    components: {
        radiobutton: RadioButton,
    }
}
</script>

