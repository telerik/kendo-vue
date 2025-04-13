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
                    :transition-name="'custom-animation'"
                    :component-child-class-name="'child'">
                <div class="content">CONTENT</div>
            </Animation>
        </div>
    </div>
</template>
<script>
import './styles.css';
import { Animation } from '@progress/kendo-vue-animation';
import { Button } from '@progress/kendo-vue-buttons';

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
