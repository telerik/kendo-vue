<template>
  <div>
      <k-dialog >
        <div :style='{ textAlign: "center", margin: "30px" }'>
            <h4>Enter your e-mail below to unlock.</h4>
            <p>
                <kinput placeholder="Your e-mail here" 
                :style='{ width: "300px" }' />
            </p>
            <p>
                <kbutton :theme-color="'primary'" 
                :style='{ width: "300px" }'>GET MY $10 OFF</kbutton>
            </p>
            <a href="#">No thanks!</a>
        </div>
      </k-dialog>
  </div>
</template>
<script>
import { Dialog } from '@progress/kendo-vue-dialogs';
import { Button } from '@progress/kendo-vue-buttons';
import { Input } from '@progress/kendo-vue-inputs';

export default {
    components: {
      'k-dialog': Dialog,
      'kbutton': Button,
      'kinput': Input
    }
};

</script>
