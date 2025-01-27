<template>
  <kendo-switch name="switch" :messages="messages">
    </kendo-switch>
</template>
<script>
import { Switch } from '@progress/kendo-inputs-vue-wrapper';
export default {
  components: {
    'kendo-switch': Switch,
  },
  data () {
    return {
      checked: false,
      messages: {
        checked: 'YES',
        unchecked: 'NO'
      }
    }
  }
}
</script>
