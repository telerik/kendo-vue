<template>
    <div class="row example-wrapper">
            <div class="col-xs-12 col-sm-6 offset-sm-3 example-col">
                <div class="card">
                    <div class="card-block">
                        <form class="k-form" @submit="handleSubmit">
                            <fieldset>
                                <legend>Please select the time of your flight:</legend>
                                <label class="k-form-field">
                                    <span>Departure</span>
                                    <datetimepicker 
                                        :name="'departure'"
                                        :required="true"
                                        :min="today"
                                        :validation-message="checkInValidationMessage"
                                    />
                                </label>
                                <label class="k-form-field">
                                    <span>Arrival</span>
                                    <datetimepicker 
                                        :name="'arrival'"
                                        :required="true"
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
import { DateTimePicker } from '@progress/kendo-vue-dateinputs';
import { Button } from '@progress/kendo-vue-buttons';

export default {
    components: {
      'datetimepicker': DateTimePicker,
      'kbutton': Button
    },
     data () {
        return {
            success: false,
            today: new Date(),
            checkInValidationMessage: 'Times in the past are not valid Departure times.',
            checkOutValidationMessage: 'The Arrival time is required.'
        };
    },  
    methods: {
        handleSubmit (event) {
            event.preventDefault();
            this.success = true ;
            setTimeout(() => { this.success= false; }, 3000);
        }
    }
};

</script>
