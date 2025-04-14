<template>
    <div class="k-d-grid k-grid-cols-sm-1 k-grid-cols-md-2 k-gap-4 k-max-w-fit">
        <div class="k-col-span-1">
            <div>inputmode=text <i>(default)</i></div>
            <maskedtextbox
                :mask="lettersMask"
                :rules="rules"
                :placeholder="'Enter text...'"
                :input-attributes="{ inputMode: 'text' }"
                :style="{ width: '300px' }"
            />
        </div>
        <div class="k-col-span-1">
            <div>inputmode=tel</div>
            <maskedtextbox
                :mask="'(999) 000-00-00-00'"
                :placeholder="'(___) ___-__-__-__'"
                :input-attributes="{ inputMode: 'tel' }"
                :input-suffix="'suffix'"
                :style="{ width: '300px' }"
            >
                <template v-slot:suffix>
                    <svgicon :icon="bookIcon" />
                </template>
            </maskedtextbox>
        </div>
        <div class="k-col-span-1">
            <div>inputmode=email</div>
            <maskedtextbox
                :placeholder="'example@email.com'"
                :input-attributes="{ inputMode: 'email' }"
                :input-prefix="'prefix'"
                :style="{ width: '300px' }"
            >
                <template v-slot:prefix>
                    <svgicon :icon="envelopeIcon" />
                </template>
            </maskedtextbox>
        </div>
        <div class="k-col-span-1">
            <div>inputmode=numeric</div>
            <maskedtextbox
                :mask="numbersMask"
                :rules="rules"
                :placeholder="'Enter a number...'"
                :input-attributes="{ inputMode: 'numeric' }"
                :style="{ width: '300px' }"
            />
        </div>
    </div>
</template>
<script>
import { MaskedTextBox } from '@progress/kendo-vue-inputs';
import { SvgIcon } from "@progress/kendo-vue-common";
import { bookIcon, envelopeIcon } from "@progress/kendo-svg-icons";

export default {
    components: {
        'maskedtextbox': MaskedTextBox,
        'svgicon': SvgIcon,
    },
    data() {
        return {
            lettersMask: 'LLLLL',
            numbersMask: 'NNNNN',
            rules: {
                "L": /[a-zA-Z]/,
                "N": /[0-9]/
            },
            bookIcon,
            envelopeIcon
        };
    }
};

</script>
