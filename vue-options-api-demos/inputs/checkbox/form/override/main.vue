<template>
 <div class="row example-wrapper">
                 <div class="col-xs-12 col-sm-6 offset-sm-3 example-col">
                     <div class="card">
                         <div class="card-block">
                             <form class="k-form" @submit="handleSubmit">
                                 <fieldset>
                                     <legend>Create new account:</legend>
                                     <div class="mb-3">
                                         <k-input
                                             :name="'username'"
                                             :label="'First Name'"
                                             :pattern="'[A-Za-z]+'"
                                             :min-length="2"
                                             :required="true"
                                             :validation-message="usernameValidationMessage"
                                         >
                                         </k-input>
                                     </div>
                                     <div class="mb-3">
                                         <k-input 
                                             v-model="possword"
                                             :name="'password'"
                                             type="password"
                                             :label="'Password'"
                                             :required="true"
                                             :min-length="6"
                                             :max-length="18"
                                             :validation-message="passwordValidationMessage"
                                         />
                                     </div>
                                     <div class="mb-3">
                                         <k-input 
                                             v-model="confirmPassword"
                                             :name="'confirmPassword'"
                                             :type="'password'"
                                             :style="{ width: '100%' }"
                                             :label="'Confirm Password'"
                                             :valid="confirmValid"
                                             :min-length="6"
                                             :max-length="18"
                                             :validation-message="passwordValidationMessage"
                                         />
                                     </div>
                                     <div class="mb-3">
                                         <k-input :style="{ width: '230px' }"
                                             :name="'email'"
                                             :type="'email'"
                                             :label="'Email address'"
                                             :required='true'
                                         />
                                     </div>
                                 </fieldset>
                                 <kbutton type="submit" :theme-color="'primary'">Search</kbutton>
                             </form>
                         </div>
                     </div>
                 </div>
                <div v-if="success"
                         class="alert alert-success"
                         :style="{ position: 'absolute' }"
                     >
                         Form submitted!
                 </div>
             </div>
</template>
<script>
import { Input } from '@progress/kendo-vue-inputs';
import { Button } from '@progress/kendo-vue-buttons';

export default {
    components: {
        'k-input': Input,
      'kbutton': Button
    },
    data: function(){
        return {
            usernameValidationMessage: "Your username should contain only letters!",
            passwordValidationMessage: "Please enter password between 6 and 16 characters!",
            confirmPasswordValidationMessage: "Passwords does not match!",
            password: '',
            confirmPassword: '',
            success: false
        }
    },
    computed: {
        confirmValid: function(){
            return this.password && this.password === this.confirmPassword;
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
