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
                                    />
                                </label>
                                <label class="k-form-field">
                                    <span>Arrival</span>
                                    <timepicker 
                                        :name="'arrival'"
                                        :required="true"
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
import { TimePicker } from '@progress/kendo-vue-dateinputs';
import { Button } from '@progress/kendo-vue-buttons';

export default {
    components: {
      'timepicker': TimePicker,
      'kbutton': Button
    },
    data () {
        return {
            success: false
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
