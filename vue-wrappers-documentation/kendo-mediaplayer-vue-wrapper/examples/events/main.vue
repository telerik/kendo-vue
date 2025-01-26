<template>
 <kendo-mediaplayer v-on:kendoready="kendoready"
                       v-on:timechange="timechange"
                       :media-title="'Recap of Progress Ringing The Bell at Nasdaq (2016)'"
                       :media-source="'https://www.youtube.com/watch?v=tc3xhD24iTU'">
  </kendo-mediaplayer>
</template>
<script>
import { MediaPlayer } from '@progress/kendo-mediaplayer-vue-wrapper';

export default {
  components: {
    'kendo-mediaplayer': MediaPlayer
  },
   methods: {
        kendoready: function () {
            console.log('kendoready');
        },
        timechange: function () {
            console.log('timechange');
        }
    }
}
</script>

