<template>
    <div>
      <kbutton @click="toggleDialog"
        >{{ visible ? 'Close' : 'Open' }} Window</kbutton
      >
      <div style="border: 1px solid #ccc; width: 450px; height: 400px">
        <window
          v-if="visible"
          :title="'Status'"
          @close="toggleDialog"
          :top="top"
          :left="left"
          @move="move"
        >
          <p>Move me around!</p>
        </window>
      </div>
    </div>
  </template>
  
  <script>
  import { Window } from '@progress/kendo-vue-dialogs';
  import { Button } from '@progress/kendo-vue-buttons';
  import { Input } from '@progress/kendo-vue-inputs';
  
  export default {
    components: {
      window: Window,
      kbutton: Button,
      kinput: Input,
    },
    data() {
      return {
        visible: true,
        top: 60,
        left: 30,
      };
    },
    methods: {
      toggleDialog() {
        this.visible = !this.visible;
      },
      move(e) {
        if (e.left < 30 || e.left > 180) {
        } else {
          this.left = e.left;
        }
  
        if (e.top < 60 || e.top > 160) {
        } else {
          this.top = e.top;
        }
      },
    },
  };
  </script>
  