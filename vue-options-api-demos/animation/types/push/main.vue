<template>
    <div class="row">
                <div class="col-md-6">
                    <dl>
                        <dd>
                            <kbutton @click="onClick">Animate</kbutton>
                        </dd>
                    </dl>
                  <Push :appear="show">
                       <div class="content" >CONTENT</div>
                    </Push>
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
            show: false
        };
    },
    methods:{
        onClick (e) {
            this.show = !this.show;
        },
    }
}
</script>
