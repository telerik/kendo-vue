<template>
  <div class="k-rtl">
    <kendo-dialog :modal="false"
				  :width="180"
				  :title="'Hello Dialog'">
		{{dialogContent}}
		<kendo-dialog-action :text="'Push!'"></kendo-dialog-action>
		<kendo-dialog-action :text="'Push Now!'"
							 :primary="true"
							 :action="actionMethod">
		</kendo-dialog-action>
    </kendo-dialog>
</div>
</template>
<script>
import { Dialog, DialogAction } from '@progress/kendo-dialog-vue-wrapper';
export default {
  components: {
    'kendo-dialog': Dialog,
    'kendo-dialog-action': DialogAction
  },
 data () {
	  return {
	    dialogContent: 'Some content'
	  }
	},
	methods: {
	  actionMethod (e) {
	    console.log('You chose to Push Now!')
	  }
	}
}
</script>
