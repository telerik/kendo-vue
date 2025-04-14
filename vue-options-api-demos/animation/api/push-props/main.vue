<template>
    <div class="row">
                <div class="col-md-6">
                    <dl>
                        <dt>
                            Push: {{direction}}
                        </dt>
                        <dd>
                            <kbutton @click="onClick">Animate</kbutton>
                        </dd>
                    </dl>
                  <Push :appear="index%2" :direction="direction" :stack-children="true">
                       <div class="content" key='key'>{{index}}</div>
                    </Push>
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
import { Push } from '@progress/kendo-vue-animation';
import { Button } from '@progress/kendo-vue-buttons';

export default {
    components: {
      'Push': Push,
      'kbutton': Button
    },
    data: function () {
        return {
            index: 1,
            direction: 'down'
        };
    },
    methods:{
        onClick (e) {
            this.index = this.index + 1;
        },
        onChange (e) {
            this.direction = e.target.value;
        }
    }
}
</script>
