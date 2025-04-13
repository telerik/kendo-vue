<template>
    <div>
        <KButton :theme-color="'primary'">Primary Button</KButton>
    </div>
</template>
<script>
import { Button as KButton } from '@progress/kendo-vue-buttons';

export default {
    components: {
        KButton
    }
}
</script>
