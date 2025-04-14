<template>
    <div v-if="half"
        class="k-rating-precision-complement"
        :style="{ width: '12px', [props.dir === 'rtl' ? 'right' : 'left']: '50%'}"
    >
        <SvgIcon
        :icon="heartIcon"
        :class="{[`${heartIcon.name}-outline`]: heartIcon.name}"
        />
    </div>
    <div v-if="half"
        class="k-rating-precision-part"
        :style="{ width: '12px' }"
    >
        <SvgIcon :icon="heartIcon" />
    </div>
    <div v-if="half"
        :style="{ width: '24px', height: '24px', display: 'block' }"
    />
    <SvgIcon v-if="!half"
        :icon="heartIcon"
        :class="{[`${heartIcon.name}`]: heartIcon.name}"
    />
</template>

<script>
import { SvgIcon } from '@progress/kendo-vue-common';
import { heartIcon } from '@progress/kendo-svg-icons';

export default {
    components: {
        SvgIcon
    },
    data() {
        return {
            heartIcon: heartIcon
        }
    }
};
</script>
