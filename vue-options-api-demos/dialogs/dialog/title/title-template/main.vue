<template>
    <div>
      <k-dialog :title-render="customTitleBar" >
        <p :style='{ margin: "30px", textAlign: "center" }'>A sample print dialog.</p>
          <template v-slot:myTemplate="{props, listeners}">
            <div class="custom-title" :style="{ fontSize: '18px', lineHeight: '1.3em' }">
              <span class="k-icon k-i-print" />Print this page
          </div>
        </template>
      </k-dialog>
  </div>
</template>
<script>
import { Dialog } from '@progress/kendo-vue-dialogs';

export default {
    components: {
      'k-dialog': Dialog
    },
    data: function () {
        return {
            customTitleBar: 'myTemplate'
        };
    }
};

</script>
