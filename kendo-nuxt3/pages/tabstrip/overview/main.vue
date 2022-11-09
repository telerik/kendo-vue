<template>
<div> no animation
    <tabstrip key="1" :tabs="tabs" :animation="false" :selected="selectedTab1" @select="onTabSelect1">
       <template v-slot:first>
          <Component1 :key="1"></Component1>
        </template>
       <template v-slot:second>
          <Component2 :key="2"></Component2>
        </template>
        <template v-slot:third>
        <Component3 :key="3"></Component3>
      </template>
    </tabstrip>
        <tabstrip key="2"  :animation="false" :selected="selectedTab2" @select="onTabSelect2">
      <tabstripTab :title="'Tarefas Recebidas'">
        <Component1></Component1>
      </tabstripTab>
      <tabstripTab :title="'Tarefas Enviadas'">
        <Component2></Component2>
      </tabstripTab>
      <tabstripTab :title="'Todas as Tarefas'">
        <Component3></Component3>
      </tabstripTab>
    </tabstrip>
  </div>
  <div>
    animation
    <tabstrip key="3"  :tabs="tabs" :selected="selectedTab1" @select="onTabSelect1">
       <template v-slot:first>
          <Component1 :key="1"></Component1>
        </template>
       <template v-slot:second>
          <Component2 :key="2"></Component2>
        </template>
        <template v-slot:third>
        <Component3 :key="3"></Component3>
      </template>
    </tabstrip>
        <tabstrip key="4"  :selected="selectedTab2" @select="onTabSelect2">
      <tabstripTab :title="'Tarefas Recebidas'">
        <Component1></Component1>
      </tabstripTab>
      <tabstripTab :title="'Tarefas Enviadas'">
        <Component2></Component2>
      </tabstripTab>
      <tabstripTab :title="'Todas as Tarefas'">
        <Component3></Component3>
      </tabstripTab>
    </tabstrip>
  </div>
</template>

<script lang="ts">
 import { TabStrip, TabStripTab } from '@progress/kendo-vue-layout';
 import Component1 from './Component1.vue';
 import Component2 from './Component2.vue';
 import Component3 from './Component3.vue';

 export default {
   components: {
     'tabstrip': TabStrip,
     'tabstripTab': TabStripTab,
     Component1,
     Component2,
     Component3
   },
   data() {
     return {
       selectedTab1: 0,
       selectedTab2: 0,
       tabs: [
         { title: 'Tarefas Recebidas', content: 'first'},
         { title: 'Tarefas Enviadas', content: 'second'},
         { title: 'Todas as Tarefas', content: 'third'}
       ]
     }
   },
    methods: {
        onTabSelect1 (e) {
          this.selectedTab1 = e.selected;
        },
        onTabSelect2 (e) {
          this.selectedTab2 = e.selected;
        }
    }
 };
</script>
