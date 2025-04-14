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
                                            :label="'Departure Country'"
                                            :name="'departureCountry'"
                                            :data-items="countries"
                                            :required="true"
                                        >
                                        </autocomplete>
                                    </div>
                                    <div>
                                        <autocomplete 
                                            :label="'Arrival Country'"
                                            :name="'arrivalCountry'"
                                            :data-items="countries"
                                            :required="true"
                                        >
                                        </autocomplete>
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
import { AutoComplete } from '@progress/kendo-vue-dropdowns';
import { Button } from '@progress/kendo-vue-buttons';

export default {
    components: {
        'autocomplete': AutoComplete,
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
            success: false,
              countries: [ 'Albania', 'Andorra', 'Armenia', 'Austria', 'Azerbaijan', 
               'Belarus', 'Belgium', 'Bosnia & Herzegovina',  'Bulgaria', 'Croatia',  
               'Cyprus', 'Czech Republic', 'Denmark', 'Estonia', 'Finland', 'France', 
               'Georgia', 'Germany', 'Greece', 'Hungary', 'Iceland', 'Ireland', 'Italy',
                'Kosovo', 'Latvia', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macedonia',
                 'Malta', 'Moldova', 'Monaco', 'Montenegro', 'Netherlands', 'Norway', 'Poland',
                  'Portugal', 'Romania', 'Russia', 'San Marino', 'Serbia', 'Slovakia',
                   'Slovenia', 'Spain', 'Sweden', 'Switzerland', 'Turkey', 'Ukraine', 
                   'United Kingdom', 'Vatican City' ]
        };
    }
};

</script>
