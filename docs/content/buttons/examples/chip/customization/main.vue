<template>
  <div>
    Simple:
    <ChipList :data-items="people" :selection="'multiple'" @datachange="handleDataChange">
    </ChipList>
    <hr />
    Custom:
    <ChipList :data-items="people" :selection="'multiple'" @datachange="handleDataChange" :chip="chip">
      <template #myTemplate="{ props }">
        <CustomChip :data-item="props.dataItem" :value="props.value" :text="props.text"
          :imageUrl="props.dataItem.avatar.imageUrl" />
      </template>
    </ChipList>
  </div>
</template>

<script setup>
import { ChipList } from '@progress/kendo-vue-buttons';
import CustomChip from './CustomChip.vue';
import { shallowRef } from 'vue';

const PedroAfonsoImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/dropdowns/contacts/SPLIR.jpg';
const ThomasHardyImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/dropdowns/contacts/RICSU.jpg';
const ChristinaBergImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/dropdowns/contacts/BERGS.jpg';
const PaulaWilsonImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/dropdowns/contacts/RATTC.jpg';

const people = shallowRef([
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
]);

const chip = 'myTemplate';

function handleDataChange(event) {
    people.value = event.value;
}
</script>
