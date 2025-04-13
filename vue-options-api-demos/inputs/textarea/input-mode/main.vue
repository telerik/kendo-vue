<template>
    <div class="k-d-grid k-grid-cols-sm-1 k-grid-cols-md-2 k-gap-4 k-max-w-fit">
        <div class="k-col-span-1">
            <div>
                inputmode=text <i>(default)</i>
            </div>
            <ktextarea
                :placeholder="'Type your message here...'"
                :input-attributes="{ inputMode: 'text' }"
                :style="{ width: '300px' }"
            />
        </div>
        <div class="k-col-span-1">
            <div>inputmode=email</div>
            <ktextarea
                :placeholder="'Type your email here...'"
                :input-attributes="{ inputMode: 'email' }"
                :input-prefix="'prefix'"
                :style="{ width: '300px' }"
            >
                <template v-slot:prefix>
                    <svgicon :icon="envelopeIcon" />
                </template>
            </ktextarea>
        </div>
        <div class="k-col-span-1">
            <div>inputmode=search</div>
            <ktextarea
                :placeholder="'Search here...'"
                :input-attributes="{ inputMode: 'search' }"
                :input-suffix="'suffix'"
                :style="{ width: '300px' }"
            >
                <template v-slot:suffix>
                    <svgicon :icon="searchIcon" />
                </template>
            </ktextarea>
        </div>
        <div class="k-col-span-1">
            <div>inputmode=url</div>
            <ktextarea
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
            </ktextarea>
        </div>
    </div>
</template>
<script>
import { TextArea } from '@progress/kendo-vue-inputs';
import { SvgIcon } from "@progress/kendo-vue-common";
import { bookIcon, envelopeIcon, searchIcon } from "@progress/kendo-svg-icons";
import { Button as KButton } from '@progress/kendo-vue-buttons';

export default {
    components: {
        'ktextarea': TextArea,
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
