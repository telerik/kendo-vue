<template>
   <div class="example-config">
          <kbutton
                    @click="handleDomEvent"
                    @mousedown="handleDomEvent"
                    @mouseup="handleDomEvent"
                    @focus="handleDomEvent"
                    @blur="handleDomEvent"
                    @keypress="handleDomEvent"
                    >
                    My Button
          </kbutton>
        <h5>{{title}}</h5>
        <ul class="event-log">
          <li v-for="log in logs" :key="log">{{log}}</li>
        </ul>
      </div>
</template>
<script>
import { Button } from '@progress/kendo-vue-buttons';

export default {
    components: {
        'kbutton': Button
    },
    data () {
      return {
        logs: []
      };
    },
    methods: {
       handleDomEvent (event) {
        this.logs.unshift(event.type);
      }
    }
}
</script>

