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

      chat.renderAttachments({
        attachments: [{
            contentType: "heroCard",
            content: {
                title: "Attachment Title",
                subtitle: "Attachment Subtitle",
                text: "Sample text"
            }
        }],
        attachmentLayout: "carousel"
      }, chat.getUser())
    }
}
</script>
