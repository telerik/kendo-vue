<template>
 <div>
      <button
        class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"
        @click="onToggle('success')"
      >
        {{(success ? "hide " : "show ") + "Success"}}
      </button>
      &nbsp;
      <button
        class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"
        @click="onToggle('error')"
      >
        {{(error ? "hide " : "show ") + "Error"}}
      </button>
      &nbsp;
      <button
        class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"
        @click="onToggle('warning')"
      >
        {{(warning ? "hide " : "show ") + "Warning"}}
      </button>
      &nbsp;
      <button
        class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"
        @click="onToggle('info')"
      >
        {{(info ? "hide " : "show ") + "Info"}}
      </button>
      <button
        class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"
        @click="onToggle('none')"
      >
        {{(none ? "hide " : "show ") + "Unstyled"}}
      </button>
      <NotificationGroup
        :style="{
          right: 0,
          bottom: 0,
          alignItems: 'flex-start',
          flexWrap: 'wrap-reverse',
        }"
      >
            <Fade :appear="success">
            <Notification
              :type="{
                style: 'success',
                icon: true,
              }"
              :closable="true"
              @close="onClose('success')"
            >
              <span>Your data has been saved.</span>
            </Notification>
            </Fade>
            <Notification v-if="error"
              :type="{
                style: 'error',
                icon: true,
              }"
              :closable="true"
              @close="onClose('error')"
            >
              <span>Oops! Something went wrong ...</span>
            </Notification>
            <Notification v-if="warning"
              :type="{
                style: 'warning',
                icon: true,
              }"
              :closable="true"
              @close="onClose('warning')"
            >
              <span>Your password will expire in 2 days!</span>
            </Notification>
            <Notification v-if="info"
              :type="{
                style: 'info',
                icon: true,
              }"
              :closable="true"
              @close="onClose('info')"
            >
              <span>You have 1 new message!</span>
            </Notification>
            <Notification v-if="none"
              :type="{
                style: 'none',
                icon: false,
              }"
              :closable="true"
              @close="onClose('none')"
              :style="{
                overflow: 'visible',
              }"
            >
              <span>Hanna Moos likes your status.</span>
            </Notification>
      </NotificationGroup>
      </div>
</template>

<script lang="ts">
import { Fade } from '@progress/kendo-vue-animation';
import {
 Notification, NotificationGroup
    } from '@progress/kendo-vue-notification';

export default {
    components: {
      Fade,
      Notification,
      NotificationGroup
    },
    data(){
      return {
         success: false,
          error: false,
          warning: false,
          info: false,
          none: false,
      };
    },
    methods: {
      onToggle(flag){
         this[flag] = !this[flag];
      },
      onClose(flag){
         this[flag] = false;
      }
    }
};

</script>

