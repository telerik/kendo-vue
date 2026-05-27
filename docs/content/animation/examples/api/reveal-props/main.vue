<template>
    <div class="row">
                <div class="col-md-6">
                    <dl>
                        <dt>
                            Reveal: {{direction}}
                        </dt>
                        <dd>
                            <KButton @click="onClick">Animate</KButton>
                        </dd>
                    </dl>
                  <Reveal :appear="show" :direction="direction">
                         <div class="content">
                            Content
                            </div >
                    </Reveal>
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
import { Reveal } from '@progress/kendo-vue-animation';
import { Button } from "@progress/kendo-vue-buttons";;

export default {
    components: {
        'Reveal': Reveal,
        'KButton': Button
    },
    data: function () {
        return {
            show: false,
            direction: 'vertical'
        };
    },
    methods:{
        onClick () {
            this.show = !this.show;
        },
        onChange (e) {
            this.direction = e.target.value;
        }
    }
}
</script>
