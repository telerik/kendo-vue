<template>
<div>
  <chat ref="chat" id="chat" @toolclick="onToolClick" :toolbar-toggleable="true">
    <chat-toolbar-button name="sendimage" icon-class="k-icon k-i-image" text="Send Image"></chat-toolbar-button>
  </chat>

  <upload
      ref="upload"
      :async-save-url="'https://demos.telerik.com/kendo-ui/upload/async/save'"
      :async-remove-url="'https://demos.telerik.com/kendo-ui/upload/async/remove'"
      :async-auto-upload="true"
      :async-with-credentials="false"
      :drop-zone="'#chat'"
      :show-file-list="false"
      :validation-allowed-extensions="['.jpg', '.jpeg', '.png', '.bmp', '.gif']"
      :validation-min-file-size="500"
      @upload="onSuccess">
  </upload>

  <span>You can use the Image tool in the toolbar to send an image. Or drop an image on the Chat component.</span>
</div>
</template>
<script>
import { Chat, ChatToolbarButton } from '@progress/kendo-chat-vue-wrapper';
import { Upload } from '@progress/kendo-upload-vue-wrapper';


export default {
    name: 'App',
    components: {
        'chat': Chat,
        'chat-toolbar-button': ChatToolbarButton,
        'upload': Upload
    },
    mounted () {
      this.$refs.upload.kendoWidget().wrapper.hide()
      var IMAGE_CARD_TEMPLATE = kendo.template(
        `<div class="k-card k-card-type-rich">
        <div class="k-card-body quoteCard">
        <img class="image-attachment" src="#: image #" style="max-height: 120px;" />
        </div>
        </div>`
      )
      kendo.chat.registerTemplate('image_card', IMAGE_CARD_TEMPLATE)
    },
    methods: {
      onToolClick (ev) {
        if (ev.name === 'sendimage') {
          this.$refs.upload.kendoWidget().element.click()
        }
      },
      onSuccess (e) {
        var that = this
        e.preventDefault()
        for (var i = 0; i < e.files.length; i++) {
          var file = e.files[i].rawFile
          if (file) {
            var reader = new FileReader()
            reader.onloadend = function () {
              that.$refs.chat.kendoWidget().renderAttachments({
                attachments: [{
                  contentType: 'image_card',
                  content: {
                    image: this.result
                  }
                }],
                attachmentLayout: 'list'
              }, that.$refs.chat.kendoWidget().getUser())
            }
            reader.readAsDataURL(file)
          }
        }
      }
    }
}
</script>
