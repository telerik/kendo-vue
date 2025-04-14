<template>
    <div class="k-d-grid k-grid-cols-sm-1 k-grid-cols-md-2 k-gap-4 k-max-w-fit">
        <div class="k-col-span-1">
            <div>
                inputmode=text <i>(default)</i>
            </div>
            <textbox
                :placeholder="'Type your message here...'"
                :input-attributes="{ inputMode: 'text' }"
                :style="{ width: '300px' }"
            />
        </div>
        <div class="k-col-span-1">
            <div>inputmode=tel</div>
            <textbox
                :placeholder="'(999) 000-00-00-00'"
                :input-attributes="{ inputMode: 'tel' }"
                :input-suffix="'suffix'"
                :style="{ width: '300px' }"
            >
                <template v-slot:suffix>
                    <svgicon :icon="bookIcon" />
                </template>
            </textbox>
        </div>
        <div class="k-col-span-1">
            <div>inputmode=email</div>
            <textbox
                :placeholder="'Type your email here...'"
                :input-attributes="{ inputMode: 'email' }"
                :input-prefix="'prefix'"
                :style="{ width: '300px' }"
            >
                <template v-slot:prefix>
                    <svgicon :icon="envelopeIcon" />
                </template>
            </textbox>
        </div>
        <div class="k-col-span-1">
            <div>inputmode=search</div>
            <textbox
                :placeholder="'Search here...'"
                :input-attributes="{ inputMode: 'search' }"
                :input-suffix="'suffix'"
                :style="{ width: '300px' }"
            >
                <template v-slot:suffix>
                    <svgicon :icon="searchIcon" />
                </template>
            </textbox>
        </div>
        <div class="k-col-span-1">
            <div>inputmode=url</div>
            <textbox
                :placeholder="'Type here...'"
                :input-attributes="{ inputMode: 'url' }"
                :input-prefix="'prefix'"
                :style="{ width: '300px' }"
            >
                <template v-slot:prefix>
                    <kbutton :disabled="true" :fill-mode="'clear'">
                        https://
                    </kbutton>
                </template>
            </textbox>
        </div>
    </div>
</template>
<script>
import { TextBox } from '@progress/kendo-vue-inputs';
import { SvgIcon } from "@progress/kendo-vue-common";
import { bookIcon, envelopeIcon, searchIcon } from "@progress/kendo-svg-icons";
import { Button as KButton } from '@progress/kendo-vue-buttons';

export default {
    components: {
        'textbox': TextBox,
        'svgicon': SvgIcon,
        'kbutton': KButton
    },
    data() {
        return {
            bookIcon,
            envelopeIcon,
            searchIcon
        };
    }
};

</script>
