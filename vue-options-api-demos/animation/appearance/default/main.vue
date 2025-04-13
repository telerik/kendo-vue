<template>
  <div class="example">
        <div>
            <dl>
                <dt>
                    Slide:
                </dt>
                <dd>
                     <kbutton @click="animate">Animate</kbutton>
                </dd>
            </dl>
            <Slide :appear="show">
                <div class="content">CONTENT</div>
            </Slide>
        </div>
    </div>
</template>
<script>
import './styles.css';
import { Slide } from '@progress/kendo-vue-animation';
import { Button } from '@progress/kendo-vue-buttons';

export default {
    components: {
      'Slide': Slide,
      'kbutton': Button
    },
    data: function () {
        return {
             show: false
        };
    },
    methods:{
        animate(){
             this.show = !this.show;
        }
    }
}
</script>
