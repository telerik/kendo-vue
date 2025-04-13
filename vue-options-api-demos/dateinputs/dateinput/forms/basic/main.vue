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
                                <dateinput 
                                    :name="'checkin'"
                                    :required="true"
                                    :min="today"
                                />
                            </label>
                            <label class="k-form-field">
                                <span>Check-Out</span>
                                <dateinput
                                    :name="'checkout'"
                                    :required="true"
                                    :min="today"
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
import { Button } from '@progress/kendo-vue-buttons';
import { DateInput } from '@progress/kendo-vue-dateinputs';

export default {
    components: {
      'dateinput': DateInput,
      'kbutton': Button
    },
    data: function() {
        return {
            success: false,
            today: new Date()
        };
    },
    methods: {
        handleSubmit (event) {
            event.preventDefault();
            this.success = true;
            setTimeout(
                () => { 
                    this.success= false; 
                }, 
                3000);
        }
    }
};

</script>
