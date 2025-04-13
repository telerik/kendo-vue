<template>
  <form-element :style="{ maxWidth: '650px' }">
    <fieldset class="k-form-fieldset">
      <div class="col-xs-12 col-md-6 example-col">
        <field
          :id="'sendInvitation'"
          :name="'sendInvitation'"
          :label="'Send Invitation:'"
          :component="'myTemplate'"
          :max="200"
          :validator="addressValidator"
          :hint="'Hint: Enter your text here'"
        >
          <template v-slot:myTemplate="{ props }">
            <formtextarea
              v-bind="props"
              @change="props.onChange"
              @blur="props.onBlur"
              @focus="props.onFocus"
            ></formtextarea>
          </template>
        </field>
      </div>
      <div class="col-xs-12 col-md-6 example-col">
        <field
          :id="'invitationDetails'"
          :name="'invitationDetails'"
          :label="'Details:'"
          :component="'myTemplate'"
          :max="200"
          :hint="'Hint: Enter Invitation details here'"
          :icon-name="gearIcon"
        >
          <template v-slot:myTemplate="{ props }">
            <formtextarea
              v-bind="props"
              @change="props.onChange"
              @blur="props.onBlur"
              @focus="props.onFocus"
            ></formtextarea>
          </template>
        </field>
      </div>
      <div class="k-form-buttons">
        <kbutton
          :theme-color="'primary'"
          :type="'submit'"
          :disabled="!kendoForm.allowSubmit"
        >
          Submit
        </kbutton>
        <kbutton @click="clear"> Clear </kbutton>
      </div>
    </fieldset>
  </form-element>
</template>
<script>
import { Field, FormElement } from "@progress/kendo-vue-form";
import { gearIcon } from "@progress/kendo-svg-icons";
import FormTextArea from "./FormTextArea.vue";
import { Button } from "@progress/kendo-vue-buttons";

export default {
  components: {
    field: Field,
    "form-element": FormElement,
    formtextarea: FormTextArea,
    kbutton: Button,
  },
  inject: {
    kendoForm: { default: {} },
  },
  data() {
    return {
      gearIcon,
    };
  },
  methods: {
    clear() {
      this.kendoForm.onFormReset();
    },
  },
};
</script>
