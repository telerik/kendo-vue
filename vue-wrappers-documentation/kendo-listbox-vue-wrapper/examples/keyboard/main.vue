<template>
    <kendo-listbox ref="listbox"
                    id="optional"
                   :draggable="true"
                   :connect-with="'selected'"
                   :drop-sources="['selected']"
                   :toolbar-tools="['moveUp', 'moveDown', 'transferTo', 'transferFrom', 'transferAllTo', 'transferAllFrom', 'remove']"
                   style="height:280px;">
        <option>Steven White</option>
        <option>Nancy King</option>
        <option>Nancy Davolio</option>
        <option>Robert Davolio</option>
        <option>Michael Leverling</option>
        <option>Andrew Callahan</option>
        <option>Michael Suyama</option>
    </kendo-listbox>
    <kendo-listbox id="selected"
                   :draggable="true"
                   :connect-with="'optional'"
                   :drop-sources="['optional']"
                   style="height:280px;">
    </kendo-listbox>
</template>
<script>
import { ListBox } from '@progress/kendo-listbox-vue-wrapper';
export default {
  components: {
    'kendo-listbox': ListBox
  },
   mounted: function() {
      window.addEventListener('keydown', this.down);
  },
  methods: {
      down (ev) {
          if (ev.altKey && ev.keyCode === 87 /* w */) {
              this.$refs.listbox.kendoWidget().focus();
          }
      }
  }
}
</script>
