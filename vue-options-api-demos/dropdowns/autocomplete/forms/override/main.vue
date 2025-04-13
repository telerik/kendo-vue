<template>
   <div class="row example-wrapper">
         <div class="col-xs-12 col-sm-6 offset-sm-3 example-col">
                    <div class="card">
                        <div class="card-block">
                            <form class="k-form" @submit="handleSubmit">
                                <fieldset>
                                    <legend>Select your flight route:</legend>
                                    <div class="mb-3">
                                        <autocomplete 
                                            :style="{ width: '100%' }"
                                            :label="'Departure Country'"
                                            :value="departureCountry"
                                            @change="handleChange"
                                            :name="'departureCountry'"
                                            :data-items="countries"
                                            :required="true"
                                        >
                                        </autocomplete>
                                    </div>
                                    <div>
                                        <autocomplete 
                                            :style="{ width: '100%' }"
                                            :label="'Arrival Country'"
                                            :value="arrivalCountry"
                                            @change="handleChange"
                                            :name="'arrivalCountry'"
                                            :data-items="countries"
                                            :required="true"
                                            :valid="valid"
                                            :validation-message="validationMessage"
                                        >
                                        </autocomplete>
                                    </div>
                                    <label class="k-form-field">
                                        <span>Additional Comments</span>
                                        <textarea
                                            class="k-textarea"
                                            :style="{ width: '100%' }"
                                            name="additionalComments"
                                            v-model="additionalComments"
                                        >
                                        </textarea>
                                    </label>
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
import countries from './countries';
import { AutoComplete } from '@progress/kendo-vue-dropdowns';
import { Button } from '@progress/kendo-vue-buttons';

export default {
    components: {
        'autocomplete': AutoComplete,
      'kbutton': Button
    },
     computed: {
        valid: function(){
            return this.departureCountry !== null && this.arrivalCountry !== null;
        },
        validationMessage: function(){
            return this.departureCountry === null
            ? 'Please select a Departure Country first!'
            : 'Please select an Arrival Country';
        }     
    },
    methods: {
        handleChange(event) {
            this[event.target.name] = event.value;
        },
         handleSubmit (event) {
            event.preventDefault();
            this.success = true;
            setTimeout(() => { this.success = false; }, 3000);
        }
    },
     data: function () {
        return {
            departureCountry: null,
            arrivalCountry: null,
            additionalComments: '',
            success: false,
            countries: countries
        };
    }
};

</script>
