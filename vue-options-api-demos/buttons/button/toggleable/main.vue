<template>
    <div>
        <p>
            <KButton :togglable="true">
            Togglable Button
            </KButton>
        </p>
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
