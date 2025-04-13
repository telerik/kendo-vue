<template>
    <div>
        <div class="k-d-flex k-align-items-center">
        <kbutton class="k-mr-4" @click="handleClick">
            Change state
        </kbutton>
        <checkbox
            v-model="checked"
            :label="'Controlled value'"
        />
        &nbsp&nbsp
        <checkbox
            :checked="checked"
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
            checked: true
        }
    },
    methods: {
        handleClick: function(){
            this.checked = !this.checked;
        },
        handleChange: function(e){
            this.checked = e.value;
        }
    }
}
</script>

