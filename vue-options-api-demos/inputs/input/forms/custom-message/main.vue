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
                                             :minlength="2"
                                             :required="true"
                                             :validation-message="usernameValidationMessage"
                                         >
                                         </k-input>
                                     </div>
                                     <div class="mb-3">
                                         <k-input 
                                             :name="'password'"
                                             type="password"
                                             :label="'Password'"
                                             :required="true"
                                             :minlength="6"
                                             :maxlength="18"
                                             :validation-message="passwordValidationMessage"
                                         />
                                     </div>
                                     <div class="mb-3">
                                         <k-input 
                                             :name="'confirmPassword'"
                                             :type="'password'"
                                             :label="'Confirm Password'"
                                             :minlength="6"
                                             :maxlength="18"
                                             :validation-message="passwordValidationMessage"
                                         />
                                     </div>
                                     <div class="mb-3">
                                         <k-input 
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
            success: false
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
