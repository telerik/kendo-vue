<template>
    <div>
      <div v-for="(color, index) in themeColors" :key="index">
          <avatar :type="'text'" :theme-color="color" style="margin: 10px" >
              {{color.substr(0, 2)}}
          </avatar>
          <span> - {{color}}</span>
      </div>
    </div>
</template>

<script>
import { Avatar } from "@progress/kendo-vue-layout";

const themeColors = [
  "primary",
  "secondary",
  "tertiary",
  "inherit",
  "info",
  "success",
  "error",
  "warning",
  "dark",
  "light",
  "inverse",
];

export default {
  components:{
    'avatar': Avatar
  },
  data: function(){
    return {
        themeColors: themeColors
    }
  }
}

</script>
