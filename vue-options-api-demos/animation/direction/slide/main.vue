<template>
    <div class="row">
                <div class="col-md-6">
                    <dl>
                        <dt>
                            Slide: {{direction}}
                        </dt>
                        <dd>
                            <kbutton @click="onClick">Animate</kbutton>
                        </dd>
                    </dl>
                  <Slide :appear="show" :direction="direction">
                         <div class="content">
                            Content
                            </div >
                    </Slide>
                </div>
                <div class="col-md-6">
                    <dl>
                        <dt>
                            Direction:
                        </dt>
                        <dd>
                           <div class="example-config">
                                <label>
                                    <input type="radio" name="direction" :value="'up'" 
                                      :checked="direction === 'up'" @click="onChange"/>
                                    &nbsp;Up
                                </label>
                                <br />
                                <label>
                                    <input type="radio" name="direction" :value="'down'" 
                                        :checked="direction === 'down'" @click="onChange"/>
                                    &nbsp;Down
                                </label>
                                <br />
                                <label>
                                    <input type="radio" name="direction" :value="'left'" 
                                        :checked="direction === 'left'" @click="onChange"/>
                                    &nbsp;Left
                                </label>
                                <br />
                                <label>
                                    <input type="radio" name="direction" :value="'right'" 
                                     :checked="direction === 'right'" @click="onChange"/>
                                    &nbsp;Right
                                </label>
                            </div>
                        </dd>
                    </dl>
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
            direction: 'down'
        };
    },
    methods:{
        onClick (e) {
            this.show = !this.show;
        },
        onChange (e) {
            this.direction = e.target.value;
        }
    }
}
</script>
