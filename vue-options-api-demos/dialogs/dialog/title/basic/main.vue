<template>
  <div>
    <k-dialog :title="'Awesome title goes here'" >
    </k-dialog>
</div>
</template>
<script>
import { Dialog } from '@progress/kendo-vue-dialogs';

export default {
    components: {
      'k-dialog': Dialog
    }
};

</script>
