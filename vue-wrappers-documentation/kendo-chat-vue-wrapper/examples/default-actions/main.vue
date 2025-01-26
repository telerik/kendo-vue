<template>
<div>
    <chat ref="chat"></chat>
</div>
</template>
<script>
import { Chat } from '@progress/kendo-chat-vue-wrapper';

export default {
    name: 'App',
    components: {
        'chat': Chat,
    },
    mounted () {
      var chat = this.$refs.chat.kendoWidget()

      chat.renderSuggestedActions([{
        title: "Option 1",
        value: "Value 1"
      }, {
        title: "Option 2",
        value: "Value 2"
      }])
    }
}
</script>
