<template>
  <div :class="'avatar-container'">
    <div :class="'contact-list'">Contacts</div>
    <div :class="'contacts-wrapper'">
      <div v-for="(contact, index) in contactInitials" :key="index">
        <div class="k-hbox">
          <avatar :rounded="'full'" :type="'icon'">
            {{ contact.avatar }}
          </avatar>
          <div style="margin-left: 10px">
            <h2 :class="'contact-name'">
              {{ contact.name }}
            </h2>
            <p :class="'contact-position'">
              {{ contact.position }}
            </p>
          </div>
        </div>
      </div>

      <div v-for="(contact, index) in contactImages" :key="index">
        <div class="k-hbox">
          <avatar :rounded="'full'" :type="'image'">
            <img :src="contact.avatar" :eager="true" :alt="'Avatar Image'" />
          </avatar>
          <div style="margin-left: 10px">
            <h2 :class="'contact-name'">
              {{ contact.name }}
            </h2>
            <p :class="'contact-position'">
              {{ contact.position }}
            </p>
          </div>
        </div>
      </div>

      <div class="k-hbox">
        <avatar :rounded="'full'" :type="'icon'">
          <SvgIcon :icon="userIcon"></SvgIcon>
        </avatar>
        <div style="margin-left: 10px">
          <h2 :class="'contact-name'">Unknown</h2>
          <p :class="'contact-position'">Not specified</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

import { Avatar } from '@progress/kendo-vue-layout';
import { SvgIcon } from '@progress/kendo-vue-common';
import { userIcon } from '@progress/kendo-svg-icons';

const firstContactImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/dropdowns/contacts/RICSU.jpg';
const secondContactImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/dropdowns/contacts/GOURL.jpg';

const contactImages = [
  {
    avatar: firstContactImage,
    name: 'Michael Holz',
    position: 'Manager',
  },
  {
    avatar: secondContactImage,
    name: 'André Stewart',
    position: 'Product Manager',
  },
];
const contactInitials = [
  {
    avatar: 'JS',
    name: 'Jason Smith',
    position: 'UX Designer',
  },
  {
    avatar: 'GP',
    name: 'George Porter',
    position: 'Software Engineer',
  },
];

export default {
  components: {
    avatar: Avatar,
    SvgIcon,
  },
  data: function () {
    return {
      userIcon,
      contactImages: contactImages,
      contactInitials: contactInitials,
    };
  },
};
</script>

<style>
.avatar-container {
  width: 280px;
  margin: auto;
  padding: 4px 10px;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.26),
    0px 2px 2px 0px rgba(0, 0, 0, 0.12), 0px 3px 1px -2px rgba(0, 0, 0, 0.08);
}

.contact-position {
  margin: 0px;
  font-size: 0.8em;
}

.contact-name {
  font-size: 1.3em;
  font-weight: normal;
  margin: 0px;
}

.contact-list {
  text-align: center;
  padding: 4px;
  font-size: 20px;
}

.contacts-wrapper {
  padding: 8px 14px;
  margin-bottom: 4px;
  box-shadow: 0px 1px 2px #ccc;
}
</style>
