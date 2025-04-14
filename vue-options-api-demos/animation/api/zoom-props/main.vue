<template>
    <div class="row">
                <div class="col-md-6">
                    <dl>
                        <dt>
                            Zoom: {{direction}}
                        </dt>
                        <dd>
                            <kbutton @click="onClick">Animate</kbutton>
                        </dd>
                    </dl>
                  <Zoom :appear="index%2" :direction="direction" :stack-children="true">
                       <div class="content" key='key'>{{index}}</div>
                    </Zoom>
                </div>
                <div class="col-md-6">
                    <dl>
                        <dt>
                            Direction:
                        </dt>
                        <dd>
                           <div class="example-config">
                                <label>
                                    <input type="radio" name="direction" :value="'in'" 
                                      :checked="direction === 'in'" @click="onChange"/>
                                    &nbsp;In
                                </label>
                                <br />
                                <label>
                                    <input type="radio" name="direction" :value="'out'" 
                                        :checked="direction === 'out'" @click="onChange"/>
                                    &nbsp;Out
                                </label>
                            </div>
                        </dd>
                    </dl>
                </div>
            </div>
</template>
<script>
import './styles.css';
import { Zoom } from '@progress/kendo-vue-animation';
import { Button } from '@progress/kendo-vue-buttons';

export default {
    components: {
      'Zoom': Zoom,
      'kbutton': Button
    },
    data: function () {
        return {
            index: 1,
            direction: 'in'
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
