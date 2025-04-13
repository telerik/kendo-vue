<template>
  <div>
    Simple:
    <chiplist :data-items="people" :selection="'multiple'" @datachange="handleDataChange">
    </chiplist>
    <hr />
    Custom:
    <chiplist :data-items="people" :selection="'multiple'" @datachange="handleDataChange" :chip="chip">
      <template v-slot:myTemplate="{ props }">
        <custom :data-item="props.dataItem" :value="props.value" :text="props.text"
          :imageUrl="props.dataItem.avatar.imageUrl" />
      </template>
    </chiplist>
  </div>
</template>
<script>
import { ChipList } from '@progress/kendo-vue-buttons';
import CustomChip from './CustomChip.vue';

const PedroAfonsoImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/dropdowns/contacts/SPLIR.jpg';
const ThomasHardyImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/dropdowns/contacts/RICSU.jpg';
const ChristinaBergImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/dropdowns/contacts/BERGS.jpg';
const PaulaWilsonImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/dropdowns/contacts/RATTC.jpg';

export default {
  components: {
    'chiplist': ChipList,
    'custom': CustomChip
  },
  data() {
    return {
      people: [
        {
          text: 'Pedro Afonso',
          value: 'pedro',
          avatar: {
            imageUrl: PedroAfonsoImage,
          },
        },
        {
          text: 'Thomas Hardy',
          value: 'thomas',
          avatar: {
            imageUrl: ThomasHardyImage,
            imageAlt: 'custmer'
          }
        },
        {
          text: 'Christina Berg',
          value: 'christina',
          avatar: {
            imageUrl: ChristinaBergImage,
            imageAlt: 'custmer'
          }
        },
        {
          text: 'Paula Wilson',
          value: 'paula',
          avatar: {
            imageUrl: PaulaWilsonImage,
            imageAlt: 'custmer'
          }
        },
      ],
      chip: 'myTemplate'
    };
  },
  methods: {
    handleDataChange(event) {
      this.people = event.value
    }
  }
}
</script>
