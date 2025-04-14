<template>
    <chiplist
        :data-items="people"
        :selection="'multiple'"
        @datachange="handleDataChange"
        :chip="chip">
         <template v-slot:myTemplate="{props}">
            <custom
            :data-item="props.dataItem"
            :value="props.value"
            :text="props.text"
            :imageUrl="props.dataItem.imageUrl"/>
        </template>
    </chiplist>
</template>
<script>
import { ChipList } from '@progress/kendo-vue-buttons';
import CustomChip from './CustomChip.vue';


const PedroAfonsoImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/dropdowns/contacts/SPLIR.jpg';
const ThomasHardyImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/dropdowns/contacts/RICSU.jpg';
const ChristinaBergImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/dropdowns/contacts/BERGS.jpg';
const PaulaWilsonImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/dropdowns/contacts/RATTC.jpg';

const people = [
  {
    text: 'Pedro Afonso',
    value: 'pedro',
    imageUrl: PedroAfonsoImage,
  },
  {
    text: 'Thomas Hardy',
    value: 'thomas',
    imageUrl: ThomasHardyImage,
  },
  {
    text: 'Christina Berg',
    value: 'christina',
    imageUrl: ChristinaBergImage,
  },
  {
    text: 'Paula Wilson',
    value: 'paula',
    imageUrl: PaulaWilsonImage,
  },
];

export default {
    components: {
        'chiplist': ChipList,
        'custom': CustomChip
    },
    data () {
        return {
            people,
            chip: 'myTemplate'
        };
    },
    methods: {
        handleDataChange (event) {
            this.people = event.value
        }
    }
}
</script>
