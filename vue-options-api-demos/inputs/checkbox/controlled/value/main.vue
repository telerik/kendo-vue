<template>
    <div>
        <div class="k-d-flex k-align-items-center">
        <kbutton class="k-mr-4" @click="handleClick">
            Change state
        </kbutton>
        <checkbox
            v-model="value"
            :label="'v-model value '"
        />
        &nbsp&nbsp
        <checkbox
            :value="value"
            @change="handleChange"
            :label="'Controlled value'"
        />
        </div>
    </div>
</template>
<script>
import { Checkbox } from "@progress/kendo-vue-inputs";
import { Button } from "@progress/kendo-vue-buttons";

export default {
    components: {
        checkbox: Checkbox,
        kbutton: Button
    },
    data: function(){
        return {
            value: true
        }
    },
    methods: {
        handleClick: function(){
            this.value = !this.value;
        },
        handleChange: function(e){
            this.value = e.value;
        }
    }
}
</script>

