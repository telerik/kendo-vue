<template>
  <div class="example">
    <div>
        <dl>
            <dt>
                <dl>
                    <input
                    type="checkbox"
                    id="enter"
                    class="k-checkbox k-checkbox-md k-rounded-md"
                    name="animation"
                    v-model="animation"
                    />
                    <label for="animation" class="k-checkbox-label">
                    Animation&nbsp;
                    </label>
                </dl>
            </dt>
            <dt>
                Slide:
            </dt>
            <dd>
                    <kbutton @click="animate">Animate</kbutton>
            </dd>
        </dl>
             <Slide :appear="show" :enter="animation" :exit="animation">
                         <div class="content">
                            CONTENT
                            </div >
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
            show: false,
            animation: true
        };
    },
    methods:{
        animate(){
             this.show = !this.show;
        }
    }
}
</script>
