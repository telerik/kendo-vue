<template>
 <div id="target">Target</div>
	<kendo-contextmenu :target="target" :scrollable="true">
    <li>News
        <ul>
            <li>Sport</li>
            <li>Weather</li>
        </ul>
    </li>
    <li>Countries
        <ul>
            <li>Andorra</li>
            <li>Austria</li>
            <li>Bulgaria</li>
            <li>Croatia</li>
            <li>Cyprus</li>
            <li>Czechia</li>
            <li>Denmark</li>
            <li>Estonia</li>
            <li>Finland</li>
            <li>Georgia</li>
            <li>Germany</li>
            <li>Greece</li>
            <li>Hungary</li>
            <li>Ireland</li>
            <li>Italy</li>
            <li>Latvia</li>
            <li>Lithuania</li>
            <li>Malta</li>
            <li>Moldova</li>
            <li>Montenegro</li>
            <li>Norway</li>
            <li>Poland</li>
            <li>Portugal</li>
            <li>Romania</li>
            <li>Serbia</li>
            <li>Slovenia</li>
            <li>Slovakia</li>
            <li>Slovakia</li>
            <li>Spain</li>
            <li>Sweden</li>
            <li>Switzerland</li>
            <li>Turkey</li>
            <li>Ukraine</li>
            <li>UK</li>
            <li>Vatican City</li>
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
