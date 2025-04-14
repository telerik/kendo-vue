<template>
<div class="row example-wrapper">
        <div class="col-xs-12 col-sm-6 offset-sm-3 example-col">
            <div class="card">
                <div class="card-block">
                    <form class="k-form" @submit="handleSubmit">
                        <fieldset>
                            <legend>Please select dates of your stay:</legend>
                            <label class="k-form-field">
                                <span>Check-In</span>
                                <datepicker 
                                    :name="'checkin'"
                                    :default-value="new Date(2018, 1, 20)"
                                    :required="true"
                                    :min="today"
                                    :validation-message="checkInValidationMessage"
                                ></datepicker>
                            </label>
                            <label class="k-form-field">
                                <span>Check-Out</span>
                                <datepicker 
                                    :name="'checkout'"
                                    :required="true"
                                    :min="today"
                                    :validation-message="checkOutValidationMessage"
                                />
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
import { DatePicker } from '@progress/kendo-vue-dateinputs';
import { Button } from '@progress/kendo-vue-buttons';

export default {
    components: {
      'datepicker': DatePicker,
      'kbutton': Button
    },
    data: function() {
        return {
            success: false,
            today: new Date(),
            checkInValidationMessage: "Dates in the past are not valid Check-In dates.",
            checkOutValidationMessage: "The Check-Out date is required."
        };
    },
    methods: {
        handleSubmit (event) {
            event.preventDefault();
            this.success= true ;
            setTimeout(() => { this.success= false; }, 3000);
        }
    }
};

</script>
