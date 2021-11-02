<template>
  <form-element :horizontal="true" :style="{ width: '700px' }">
    <fieldset class="k-form-fieldset">
      <field :id="'avatar'" :name="'avatar'" :component="'myTemplate'">
        <template v-slot:myTemplate="{ props }">
          <formupload
            v-bind="props"
            @change="props.onChange"
            @blur="props.onBlur"
            @focus="props.onFocus"
          ></formupload>
        </template>
      </field>
      <field
        :name="'firstName'"
        :component="'myTemplate'"
        :label="firstNameMessage"
        :validator="firstNameValidator"
      >
        <template v-slot:myTemplate="{ props }">
          <forminput
            v-bind="props"
            @change="props.onChange"
            @blur="props.onBlur"
            @focus="props.onFocus"
          />
        </template>
      </field>
      <field
        :name="'lastName'"
        :component="'myTemplate'"
        :label="lastNameMessage"
        :validator="lastNameValidator"
      >
        <template v-slot:myTemplate="{ props }">
          <forminput
            v-bind="props"
            @change="props.onChange"
            @blur="props.onBlur"
            @focus="props.onFocus"
          />
        </template>
      </field>
      <field
        :name="'email'"
        :type="'email'"
        :validation-message="'Error: Email is required'"
        :component="'myTemplate'"
        :label="emailMessage"
        :validator="emailValidator"
      >
        <template v-slot:myTemplate="{ props }">
          <forminput
            v-bind="props"
            @change="props.onChange"
            @blur="props.onBlur"
            @focus="props.onFocus"
          />
        </template>
      </field>
      <field
        :id="'phoneNumber'"
        :name="'phoneNumber'"
        :label="phoneNumberMessage"
        :mask="'(+9) 0000-000-00-00'"
        :component="'myTemplate'"
        :validator="phoneValidator"
      >
        <template v-slot:myTemplate="{ props }">
          <formmaskedtextbox
            v-bind="props"
            @change="props.onChange"
            @blur="props.onBlur"
            @focus="props.onFocus"
          ></formmaskedtextbox>
        </template>
      </field>
      <field
        :id="'countryselected'"
        :name="'countryselected'"
        :label="countryMessage"
        :component="'myTemplate'"
        :data="countries"
        :validator="requiredValidator"
      >
        <template v-slot:myTemplate="{ props }">
          <formautocomplete
            v-bind="props"
            @change="props.onChange"
            @blur="props.onBlur"
            @focus="props.onFocus"
          ></formautocomplete>
        </template>
      </field>

      <field
        :id="'biography'"
        :name="'biography'"
        :label="biographyMessage"
        :component="'myTemplate'"
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
      <field
        :id="'team'"
        :name="'team'"
        :label="teamMessage"
        :layout="'horizontal'"
        :component="'myTemplate'"
        :data-items="teams"
      >
        <template v-slot:myTemplate="{ props }">
          <formradiogroup
            v-bind="props"
            @change="props.onChange"
            @blur="props.onBlur"
            @focus="props.onFocus"
          ></formradiogroup>
        </template>
      </field>
    </fieldset>
    <hr />
    <div class="k-form-buttons">
      <button type="button" class="k-button" @click="clear">
        {{ cancelMessage }}
      </button>
      <button
        type="submit"
        class="k-button k-primary"
        :disabled="!kendoForm.allowSubmit"
      >
        {{ saveChangesMessage }}
      </button>
    </div>
  </form-element>
</template>
<script>
import { Field, FormElement } from "@progress/kendo-vue-form";
import FormInput from "./FormInput.vue";
import FormMaskedTextBox from "./FormMaskedTextBox.vue";
import FormAutoComplete from "./FormAutoComplete.vue";
import FormTextArea from "./FormTextArea.vue";
import FormRadioGroup from "./FormRadioGroup.vue";
import FormUpload from "./FormUpload.vue";
import { provideLocalizationService } from "@progress/kendo-vue-intl";

import { countries, teams } from "../../assets/data.js";
import {
  emailValidator,
  phoneValidator,
  requiredValidator,
  firstNameValidator,
  lastNameValidator,
} from "../../assets/validators";
export default {
  components: {
    field: Field,
    "form-element": FormElement,
    forminput: FormInput,
    formmaskedtextbox: FormMaskedTextBox,
    formautocomplete: FormAutoComplete,
    formtextarea: FormTextArea,
    formradiogroup: FormRadioGroup,
    formupload: FormUpload,
  },
  inject: {
    kendoForm: { default: {} },
    kendoLocalizationService: { default: null },
  },
  data: function () {
    return {
      countries: countries,
      teams: teams,
      emailValidator: emailValidator,
      phoneValidator: phoneValidator,
      requiredValidator: requiredValidator,
      firstNameValidator: firstNameValidator,
      lastNameValidator: lastNameValidator,
    };
  },
  computed: {
    firstNameMessage() {
      return provideLocalizationService(this).toLanguageString(
        "firstName",
        "First Name"
      );
    },
    lastNameMessage() {
      return provideLocalizationService(this).toLanguageString(
        "lastName",
        "Last Name"
      );
    },
    emailMessage() {
      return provideLocalizationService(this).toLanguageString(
        "email",
        "Email"
      );
    },
    phoneNumberMessage() {
      return provideLocalizationService(this).toLanguageString(
        "phoneNumber",
        "Phone Number"
      );
    },
    countryMessage() {
      return provideLocalizationService(this).toLanguageString(
        "country",
        "Country"
      );
    },
    biographyMessage() {
      return provideLocalizationService(this).toLanguageString(
        "biography",
        "Biography"
      );
    },
    teamMessage() {
      return provideLocalizationService(this).toLanguageString("team", "Team");
    },
    cancelMessage() {
      return provideLocalizationService(this).toLanguageString(
        "cancel",
        "Cancel"
      );
    },
    saveChangesMessage() {
      return provideLocalizationService(this).toLanguageString(
        "saveChanges",
        "Save Changes"
      );
    },
  },
  methods: {
    clear() {
      this.kendoForm.onFormReset();
    },
  },
};
</script>
<style scoped>
.k-form-buttons {
  justify-content: center;
}
</style>