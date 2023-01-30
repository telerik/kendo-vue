<template>
  <div class="row">
      <div class="col-md-3">
        <button class="k-button" @click="handleToggleSwitch">
          Toggle
        </button>
      </div>
      <div class="col-md-3">
        <kSwitch @change="handleChange" :checked="checked" />
      </div>
       <div class="col-md-3">
           v-model
        <kSwitch v-model="checked" />
      </div>
    </div>
</template>

<script lang="ts">
import { Switch } from "@progress/kendo-vue-inputs";

export default {
    components: {
       kSwitch: Switch
    },
    data() {
        return {
            checked: true
        };
    },
    methods: {
        handleToggleSwitch (){
            this.checked = !this.checked;
        },
        handleChange (event)  {
             this.checked =(event.target.value); 
        }
    }
};
</script>

