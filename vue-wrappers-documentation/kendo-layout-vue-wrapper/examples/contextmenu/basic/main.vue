<template>
  <div id="target">Target</div>
	<kendo-contextmenu :target="target">
    <li>News
        <ul>
            <li>Sport</li>
            <li>Weather</li>
        </ul>
    </li>
    <li>Countries
        <ul>
            <li>Italy</li>
            <li>Spain</li>
            <li>Slovakia</li>
        </ul>
    </li>
	</kendo-contextmenu>
</template>
<script>
import { ContextMenu } from '@progress/kendo-layout-vue-wrapper';
export default {
  components: {
    'kendo-contextmenu': ContextMenu
  },
  data () {
	  return {
		  target: "#target"
	  }
  }
}
</script>
