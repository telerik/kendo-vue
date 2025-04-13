<template>
      <div class="example">
        <div>
            <dl>
                <dt>
                    Animate:
                </dt>
                <dd>
                     <kbutton @click="animate">Animate</kbutton>
                </dd>
            </dl>
            <Animation :appear="show"
                    :transition-name="'custom-animation'">
                <div class="content">CONTENT</div>
            </Animation>
        </div>
    </div>
</template>
<script>
import './styles.css';
import { Button } from '@progress/kendo-vue-buttons';
import { Animation } from '@progress/kendo-vue-animation';

export default {
    components: {
      'Animation': Animation,
      'kbutton': Button
    },
     data: function () {
        return {
             show: true
        };
    },
    methods:{
        animate(){
             this.show = !this.show;
        }
    }
}
</script>
