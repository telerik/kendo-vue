<template>
   <div class="row example-wrapper">
            <div class="col-xs-12 col-sm-6 offset-sm-3 example-col">
                <div class="card">
                    <div class="card-block">
                        <form class="k-form" @submit="handleSubmit">
                            <fieldset>
                                <legend>Please fill in the fields:</legend>
                                <div class="mb-3">
                                    <k-input 
                                        name="firstName"
                                        :label="'First Name'"
                                        :default-value="'John'"
                                        :pattern="'[A-Za-z]+'"
                                        :min-length='2'
                                        :required='true'
                                    ></k-input>
                                </div>
                                <div class="mb-3">
                                    <k-input 
                                        name="lastName"
                                        :label="'Last Name'"
                                        :default-value="'Smith'"
                                        :pattern="'[A-Za-z]+'"
                                        :mi-length='2'
                                        :required="true"
                                    ></k-input>
                                </div>
                                <div>
                                    <maskedtextbox 
                                        name="postcode"
                                        :label="'Postcode (A9 9AA)'"
                                        :required="true"
                                        :mask="'A9 9AA'"
                                    ></maskedtextbox>
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
import { MaskedTextBox, Input } from '@progress/kendo-vue-inputs';
import { Button } from '@progress/kendo-vue-buttons';

export default {
    components: {
        'maskedtextbox': MaskedTextBox,
        'k-input': Input,
      'kbutton': Button
    },
    data: function(){
        return {
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
