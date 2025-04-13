<template>
    <div class="row example-wrapper">
            <div class="col-xs-12 col-sm-6 offset-sm-3 example-col">
                <div class="card">
                    <div class="card-block">
                        <form class="k-form" @submit="handleSubmit">
                            <fieldset>
                                <legend>Add products to your basket:</legend>
                                <div class="mb-3">
                                    <multiselect 
                                        :style="{ width: '100%' }"
                                        :label="'Foods'"
                                        name="foods"
                                        :data-items="foods"
                                        :required="true"
                                    ></multiselect>
                                </div>
                                <div>
                                    <multiselect
                                        :style="{ width: '100%' }"
                                        :label="'Drinks'"
                                        name="drinks"
                                        :data-items="drinks"
                                        :required="true"
                                    ></multiselect>
                                </div>
                            </fieldset>
                            <kbutton type="submit" :theme-color="'primary'">Add to basket</kbutton>
                        </form>
                    </div>
                </div>
            </div>
                <div v-if="success"
                    :class="'alert alert-success'"
                    :style="{ position: 'absolute' }"
                >
                    Form submitted!
                </div>
        </div>
</template>
<script>
import { MultiSelect } from '@progress/kendo-vue-dropdowns';
import { foods, drinks } from './shop';
import { Button } from '@progress/kendo-vue-buttons';

export default {
    components: {
        'multiselect': MultiSelect,
      'kbutton': Button
    },
    data () {
        return {
            success: false,
            foods: foods,
            drinks: drinks
        };
    },
    methods: {
        handleSubmit (event) {
            event.preventDefault();
            this.success = true ;
            setTimeout(() => { this.success = false; }, 3000);
        }
    }
};

</script>
