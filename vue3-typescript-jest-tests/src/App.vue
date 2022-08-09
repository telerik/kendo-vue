<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  <div class="col-xs-12 col-sm-7 example-col">
    <p>DropDownList</p>
    <dropdownlist :data-items='sports' :default-value="'Basketball'"></dropdownlist>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import {
  DropDownList
} from '@progress/kendo-vue-dropdowns';

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    'dropdownlist': DropDownList,
  },
  data() {
    return {
      sports: ["Baseball", "Basketball", "Cricket", "Field Hockey", "Football", "Table Tennis", "Tennis", "Volleyball"]
    }
  }
} as any);
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
