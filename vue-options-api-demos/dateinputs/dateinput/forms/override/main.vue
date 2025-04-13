<template>
 <div class="row example-wrapper">
        <div class="col-xs-12 col-sm-6 offset-sm-3 example-col">
            <div class="card">
                <div class="card-block">
                    <form class="k-form"  @submit="handleSubmit">
                        <fieldset>
                            <legend>Please select dates of your stay:</legend>
                            <label class="k-form-field">
                                <span>Check-In</span>
                                <dateinput 
                                    :name="'checkin'"
                                    :required="true"
                                    :format="'dd-MMM-yyyy'"
                                    :spinners="true"
                                    :min="today"

                                    :value="checkin"
                                    @change='handleChange'
                                    :validation-message="checkin === null
                                        ? 'Check-In date is required!'
                                        : 'Check-In date cannot be in the past!'"
                                ></dateinput>
                            </label>
                            <label class="k-form-field">
                                <span>Check-Out</span>
                                <dateinput
                                    :name="'checkout'"
                                    :required="true"
                                    :format="'dd-MMM-yyyy'"
                                    :spinners="true"

                                    :valid="(checkin !== null && checkout !== null)
                                        && (checkin.getTime() < checkout.getTime())"

                                    :value="checkout"
                                    @change="handleChange"
                                    :validation-message="checkout === null
                                        ? 'Check-Out date is required!'
                                        : 'Check-Out date cannot be before Check-In date!'"
                                ></dateinput>
                            </label>
                            <label class="k-form-field">
                                <span>Additional Comments</span>
                                <textarea
                                    class="k-textarea"
                                    :style="{ width: '100%' }"
                                    :name="'additionalComments'"
                                    :value="additionalComments"
                                    @change="handleChange"
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
import { DateInput } from '@progress/kendo-vue-dateinputs';
import { Button } from '@progress/kendo-vue-buttons';

export default {
    components: {
      'dateinput': DateInput,
      'kbutton': Button
    },
     data: function() {
        return {
            checkin: null,
            checkout: null,
            additionalComments: '',
            success: false,
            today: new Date()
        };
    },
    methods: {
        handleChange (event) {
            this[event.target.name]= event.target.value;
        },
        handleSubmit (event) {
            event.preventDefault();
            this.success= true;
            setTimeout(() => { this.success = false; }, 3000);
        }
    }
};

</script>
