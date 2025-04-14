<template>
    <div class="row">
                <div class="col-md-6">
                    <dl>
                        <dt>
                            Expand: {{direction}}
                        </dt>
                        <dd>
                            <kbutton @click="onClick">Animate</kbutton>
                        </dd>
                    </dl>
                  <Expand :appear="show" :direction="direction">
                         <div class="content">
                            Content
                            </div >
                    </Expand>
                </div>
                <div class="col-md-6">
                    <dl>
                        <dt>
                            Direction:
                        </dt>
                        <dd>
                            <div class="example-config">
                                <label>
                                    <input
                                         type="radio"
                                         name="direction"
                                         :value="'vertical'"
                                         :checked="direction === 'vertical'"
                                         @click="onChange"
                                     />
                                    &nbsp;Vertical
                                </label>
                                <br />
                                <label>
                                    <input
                                         type="radio"
                                         name="direction"
                                         :value="'horizontal'"
                                         :checked="direction === 'horizontal'"
                                         @click="onChange"
                                     />
                                    &nbsp;Horizontal
                                </label>
                            </div>
                        </dd>
                    </dl>
                </div>
            </div>
</template>
<script>
import './styles.css';
import { Expand } from '@progress/kendo-vue-animation';
import { Button } from '@progress/kendo-vue-buttons';

export default {
    components: {
      'Expand': Expand,
      'kbutton': Button
    },
    data: function () {
        return {
             show: false,
            direction: 'vertical'
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
