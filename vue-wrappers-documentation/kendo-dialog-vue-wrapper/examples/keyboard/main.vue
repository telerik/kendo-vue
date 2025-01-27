<template>
    <kendo-dialog ref="dialog" :modal="false"
				  :width="180"
				  :title="'Hello Dialog'">
		{{dialogContent}}
		<kendo-dialog-action :text="'Push!'"></kendo-dialog-action>
		<kendo-dialog-action :text="'Push Now!'"
							 :primary="true"
							 :action="actionMethod">
		</kendo-dialog-action>
    </kendo-dialog>
</template>
<script>
import { Dialog, DialogAction } from '@progress/kendo-dialog-vue-wrapper';
export default {
  components: {
    'kendo-dialog': Dialog,
    'kendo-dialog-action': DialogAction
  },
  created: function() {
			window.addEventListener('keydown', this.down);
	},
	data () {
	  return {
	    dialogContent: 'Some content'
	  }
	},
	methods: {
	  actionMethod (e) {
	    console.log('You chose to Push Now!')
		},
		down (ev) {
				if (ev.altKey && ev.keyCode === 87 /* w */) {
						this.$refs.dialog.kendoWidget().element.focus();
				}
		}
	}
}
</script>
