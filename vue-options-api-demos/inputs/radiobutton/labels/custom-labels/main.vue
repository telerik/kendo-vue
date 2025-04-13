<template>
    <div>
      <radiobutton
        :name="'group1'"
        :value="'default label'"
        :checked="true"
        :label-render="'myTemplate'">
            <template v-slot:myTemplate>
                  <span>
                     Right-to-left support
                  <strong
                    :style="{
                      color: 'green'
                    }"
                  >
                    on
                  </strong>
              </span>
          </template>
      </radiobutton>
      <radiobutton
        :label="'RadioButton label before'"
        :name="'group1'"
        :value="'label before'"
        :label-render="'myTemplate'">
            <template v-slot:myTemplate>
                  <span>
                     Right-to-left support
                  <strong
                    :style="{
                      color: 'red'
                    }"
                  >
                    off
                  </strong>
              </span>
          </template>
      </radiobutton>
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

