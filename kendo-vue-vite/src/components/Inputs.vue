<template>
 <div class="row example-wrapper" :style='{ minHeight: "250px" }'>
         <div class="col-12 col-md-6 example-col">
                    <p>Input</p>
                    <k-input :label="'First name'"></k-input>
                </div>
                <div class="col-12 col-md-6 example-col">
                    <p>NumericTextBox</p>
                    <numerictextbox
                        :default-value="123.45"
                        :format="'c2'"
                    >
                    </numerictextbox>
                </div>
                 <div class="col-12 col-md-6 example-col">
                    <p>MaskedTextBox</p>
                    <maskedtextbox
                        :mask="'9-000'"
                        :default-value="'_-___'"
                    >
                    </maskedtextbox>
                </div>
                   <div class="col-12 col-md-6 example-col">
                     <p>Slider</p>
                        <slider
                            :buttons="true"
                            :step="1"
                            :default-value="7"
                            :min="1"
                            :max="10"
                        >
                        </slider>
                </div>
    </div>
</template>
<script>
import { NumericTextBox, Input, MaskedTextBox, Slider } from '@progress/kendo-vue-inputs';

export default {
    components: {
        'k-input': Input,
        'numerictextbox': NumericTextBox,
        'maskedtextbox': MaskedTextBox,
        'slider': Slider
    }
};

</script>