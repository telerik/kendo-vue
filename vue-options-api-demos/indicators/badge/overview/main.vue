<template>
  <div class="example">
    <div class="example-wrap"><Contacts /> <SocialApps /><Status /></div>
  </div>
</template>

<script>
import Contacts from './Contacts.vue';
import SocialApps from './SocialApps.vue';
import Status from './Status.vue';

export default {
  components: {
    Contacts,
    SocialApps,
    Status,
  },
};
</script>

<style>
.example {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.example-wrap {
  border: 1px solid #ccc;
  width: 230px;
}
</style>
