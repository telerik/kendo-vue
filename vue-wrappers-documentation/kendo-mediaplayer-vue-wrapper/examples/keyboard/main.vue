<template>
   <kendo-mediaplayer style="max-width: 750px;height:360px;"
                :auto-play='true'
                :navigatable='true'
                :media-title="'Recap of Progress Ringing The Bell at Nasdaq (2016)'"
                :media-source="'https://www.youtube.com/watch?v=tc3xhD24iTU'">

  </kendo-mediaplayer>
</template>
<script>
import { MediaPlayer } from '@progress/kendo-mediaplayer-vue-wrapper';

export default {
  components: {
    'kendo-mediaplayer': MediaPlayer
  }
}
</script>

