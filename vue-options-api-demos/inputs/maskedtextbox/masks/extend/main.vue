<template>
   <div class="row example-wrapper">
        <div>
            <div class="example-config">
                <p>{{mask}}</p>
                <ul>
                    <li>Y - cyrillic only</li>
                    <li>L - latin only</li>
                </ul>
            </div>
            <maskedtextbox :style="{ width: '230px' }"
                :mask="mask"
                :default-value="'абвг abcd'"
                :rules="rules"
            >
            </maskedtextbox>
        </div>
    </div>
</template>
<script>
import { MaskedTextBox } from '@progress/kendo-vue-inputs';

export default {
    components: {
        'maskedtextbox': MaskedTextBox
    },
    data: function(){
        return {
            mask: 'YYYY LLLL',
            rules: {
                "L": /[a-zA-Z]/,
                "Y": /[\u0400-\u0481\u048A-\u04FF]/
            }
        }
    }
};

</script>
