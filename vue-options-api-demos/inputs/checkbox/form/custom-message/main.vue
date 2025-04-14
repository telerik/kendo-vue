<template>
   <div class="row example-wrapper">
       <div class="row example-wrapper">
      <div class="col-xs-12 col-sm-8 offset-sm-2 example-col">
        <form class="k-form" @submit="handleSubmit">
          <fieldset class="k-form-fieldset">
            <legend class="k-form-legend">Create new account:</legend>
            <div class="mb-3">
              <kinput 
                :name="'username'"
                :label="'First Name'"
                :pattern="'[A-Za-z]+'"
                :minLength="2"
                :required="true"
                :validation-message="usernameValidationMessage"
              />
            </div>
            <div class="mb-3">
              <kinput 
                :name="'password'"
                :type="'password'"
                :label="'Password'"
                :required="true"
                :minLength="6"
                :maxLength="18"
                :validation-message="passwordValidationMessage"
              />
            </div>
            <div class="mb-3">
                <checkbox :id="'ch'" :name="'checkbox'"
                :required="true"
                 :label-render="'myTemplate'"
                :validation-message="checkboxTermsAndConditionsMessage"
                >
                <template v-slot:myTemplate>
                  <span>
                      By clicking <a href="#">Sign Up</a>, you agree to our <a href="#">Terms and Conditions</a>.
                      </span>
                </template>
                </checkbox>
            </div>
          </fieldset>
          <kbutton type="submit" :theme-color="'primary'">Sign up</kbutton>
        </form>
      </div>
               <div v-if="success"
                        class="alert alert-success"
                        :style="{ position: 'absolute' }"
                    >
                        Form submitted!
                </div>
            </div>
    </div>
</template>
<script>
import { Input, Checkbox } from '@progress/kendo-vue-inputs';
import { Button } from '@progress/kendo-vue-buttons';

export default {
    components: {
        'kinput': Input,
        checkbox: Checkbox,
      'kbutton': Button
    },
    data: function(){
        return {
            success: false,
            usernameValidationMessage: 'Your username should contain only letters',
            passwordValidationMessage: "Please enter password between 6 and 16 characters",
            checkboxTermsAndConditionsMessage: "Please indicate that you accept the Terms and Conditions",
            checkboxsignUpToNewsletterMessage : "Please sign up to the Newsletter"
        }
    },
    methods: {
        handleSubmit (event) {
            event.preventDefault();
            this.success = true;
            setTimeout(() => { this.success = false; }, 3000);
        }
    }
};

</script>
