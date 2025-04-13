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
                                    <timepicker 
                                        :name="'departure'"
                                        :required="true"
                                        :spinners="true"
                                        :min="now"
                                        :value="departure"
                                        @change="handleChange"
                                        :validation-message="departure === null
                                            ? 'Departure time is required!'
                                            : 'Departure time cannot be in the past!'"
                                    />
                                </label>
                                <label class="k-form-field">
                                    <span>Arrival</span>
                                    <timepicker
                                        :name="'arrival'"
                                        :required="true"
                                        :spinners="true"

                                        :valid="(departure !== null && arrival !== null)
                                            && (departure.getTime() < arrival.getTime())"

                                        :value="arrival"
                                        @change="handleChange"
                                        :validation-message="arrival === null
                                            ? 'Arrival time is required!'
                                            : 'Arrival time cannot be before Departure time!'"
                                    />
                                </label>
                                <label class="k-form-field">
                                    <span>Additional Comments</span>
                                    <textarea
                                        class="k-textarea"
                                        :style="{ width: '100%' }"
                                        name="additionalComments"
                                        :value="additionalComments"
                                        @change="handleChange"
                                    ></textarea>
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
import { TimePicker } from '@progress/kendo-vue-dateinputs';
import { Button } from '@progress/kendo-vue-buttons';

export default {
    components: {
      'timepicker': TimePicker,
      'kbutton': Button
    },
    data () {
        return {
            departure: null,
            arrival: null,
            additionalComments: '',
            success: false,
            now: new Date()
        };
    },
    methods: {
        handleSubmit (event) {
            event.preventDefault();
            this.success = true ;
            setTimeout(() => { this.success= false; }, 3000);
        },
        handleChange (event) {
            this[event.target.name] = event.target.value;
        }
    }
};

</script>
