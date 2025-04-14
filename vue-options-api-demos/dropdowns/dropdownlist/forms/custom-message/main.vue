<template>
    <div class="row example-wrapper">
         <div class="col-xs-12 col-sm-6 offset-sm-3 example-col">
                    <div class="card">
                        <div class="card-block">
                            <form class="k-form" @submit="handleSubmit">
                                <fieldset>
                                    <legend>Select your flight route:</legend>
                                    <div class="mb-3">
                                         <dropdownlist
                                            :style="{ width: '100%' }"
                                            :label="'Departure Country'"
                                            :name="'departureCountry'"
                                            :data-items="countries"
                                            :required="true"
                                            :validation-message="departureValidationMessage"
                                        >
                                        </dropdownlist>
                                    </div>
                                    <div>
                                         <dropdownlist
                                            :style="{ width: '100%' }"
                                            :label="'Arrival Country'"
                                            :name="'arrivalCountry'"
                                            :data-items="countries"
                                            :required="true"
                                            :validation-message="arrivalValidationMessage"
                                        >
                                        </dropdownlist>
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
import countries from './countries';
import { DropDownList } from '@progress/kendo-vue-dropdowns';
import { Button } from '@progress/kendo-vue-buttons';

export default {
    components: {
        'dropdownlist': DropDownList,
      'kbutton': Button
    },
     methods: {
         handleSubmit (event) {
            event.preventDefault();
            this.success = true;
            setTimeout(() => { this.success = false; }, 3000);
        }
    },
     data: function () {
        return {
            departureValidationMessage: 'Please select a departure country!',
            arrivalValidationMessage: 'Please select an arrival country!',
            success: false,
            countries: countries
        };
    }
};

</script>
