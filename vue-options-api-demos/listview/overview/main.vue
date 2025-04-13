<template>
  <ListView
    :style="{ width: '100%' }"
    :data-items="contacts"
    :item="'myItem'"
    :header="'myHeader'"
    :footer="'myFooter'"
  >
    <template v-slot:myItem="{ props }">
      <div class="row p-2 border-bottom align-middle" :style="{ margin: 0 }">
        <div class="col-2">
          <Avatar type="image" :rounded="'full'">
            <img
              :src="`${contactsBaseUrl}${props.dataItem.id}.png`"
              :alt="'Avatar Image'"
            />
          </Avatar>
        </div>
        <div class="col-6">
          <h2
            :style="{
              'font-size': '14px',
              color: '#454545',
              marginBottom: '0px',
            }"
            class="text-uppercase"
          >
            {{ props.dataItem.name }}
          </h2>
          <div :style="{ 'font-size': '12px', color: '#a0a0a0' }">
            {{ props.dataItem.email }}
          </div>
        </div>
        <div class="col-4">
          <div
            class="k-chip k-chip-md k-rounded-md k-chip-solid k-chip-solid-base"
          >
            <div class="k-chip-content">
              {{ props.dataItem.messagesCount }} new messages
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-slot:myHeader>
      <ListViewHeader
        :style="{ color: 'rgb(160, 160, 160)', 'font-size': '14px' }"
        class="pl-3 pb-2 pt-2"
      >
        Contact list
      </ListViewHeader>
    </template>
    <template v-slot:myFooter>
      <ListViewFooter
        :style="{ color: 'rgb(160, 160, 160)', 'font-size': '14px' }"
        class="pl-3 pb-2 pt-2"
      >
        {{ messages }} unread messages in total
      </ListViewFooter>
    </template>
  </ListView>
</template>
<script>
import {
  ListView,
  ListViewFooter,
  ListViewHeader,
} from '@progress/kendo-vue-listview';
import { Avatar } from '@progress/kendo-vue-layout';
import contacts from './contacts.json';

const contactsBaseUrl = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/listview/contacts/';

export default {
  components: {
    ListView,
    ListViewFooter,
    ListViewHeader,
    Avatar,
  },
  computed: {
    messages() {
      return this.contacts.reduce((acc, el) => {
        acc = acc + el.messagesCount;
        return acc;
      }, 0);
    },
  },
  data() {
    return {
      contactsBaseUrl,
      contacts: contacts,
    };
  },
};
</script>
