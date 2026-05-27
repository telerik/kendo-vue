<template>
    <div class="row">
                <div class="col-md-6">
                    <dl>
                        <dt>
                            Fade: {{direction}}
                        </dt>
                        <dd>
                            <KButton @click="onClick">Animate</KButton>
                        </dd>
                    </dl>
                  <Fade :appear="index%2" :direction="direction" :stack-children="true">
                       <div class="content" key='key'>{{index}}</div>
                    </Fade>
                </div>
            </div>
</template>
<script>
import './styles.css';
import { Fade } from '@progress/kendo-vue-animation';
import { Button } from "@progress/kendo-vue-buttons";;

export default {
    components: {
        'Fade': Fade,
        'KButton': Button
    },
    data: function () {
        return {
            index: 1,
        };
    },
    methods:{
        onClick () {
            this.index = this.index + 1;
        }
    }
}
</script>
