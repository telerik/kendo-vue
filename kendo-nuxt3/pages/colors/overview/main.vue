<template>
      <div>
          <div class="row">
          <div class="m-3">
            <p>ColorPicker with predefined colors</p>
            <ColorPicker :view="'palette'" :value="value" @change="handleChange" />
          </div>
          <div class="m-3">
            <p>ColorPicker with gradient</p>
            <ColorPicker :view="'gradient'" :default-value="value"  />
          </div>
            <div class="m-3">
            <p>ColorPicker with combo</p>
            <ColorPicker :view="'combo'" :selectedView="selectedView" @viewchange="handleViewChange" :value="value" @change="handleChange" />
          </div>
        </div>
        <hr />
      <FlatColorPicker :value="value" @change="handleChange" />
      <hr />
      <p >no value</p>
        <FlatColorPicker/>
      <hr />
       <ColorGradient :value="value" @change="handleChange" />
       <hr />
         <ColorPalette
          :palette="['#37399b', '#a81c85', '#0ab3cc', '#2f7d20', '#a21616']"

          :tileSize="40"
        />
        <hr />
       
    </div>
</template>
<script lang="ts">
import { FlatColorPicker, ColorGradient, ColorPalette, ColorPicker } from '@progress/kendo-vue-inputs';

export default {
    components: {
      FlatColorPicker,
      ColorGradient, 
      ColorPalette,
      ColorPicker
    },
    data() {
      return {
        value: 'rgba(237, 126, 50, 1)',
        selectedView: 1
      };
    },
    methods: {
      handleChange(event) {
        console.log(event.value);
        this.value = event.value;
      },
      handleViewChange(event){
        this.selectedView = event.view;
      }
    }
};

</script>
