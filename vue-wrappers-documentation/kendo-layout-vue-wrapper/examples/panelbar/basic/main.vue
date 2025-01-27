<template>
    <kendo-panelbar>
       <li>
           Baseball
           <ul>
               <li>Top News</li>
               <li>Radio Records</li>
           </ul>
       </li>
       <li>
           Golf
           <ul>
               <li>Top News</li>
               <li>Radio Records</li>
           </ul>
       </li>
    </kendo-panelbar>
</template>
<script>
import { PanelBar } from '@progress/kendo-layout-vue-wrapper';
export default {
  components: {
    'kendo-panelbar': PanelBar
  }
}
</script>
