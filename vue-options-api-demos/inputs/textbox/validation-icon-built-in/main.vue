<template>
    <div>
        Valid Input Icon:
        <br />
        <KTextBox :style="{ width: '230px' }" :show-validation-icon="true"  />
        <br />
        <br />
        Invalid Input Icon:
        <br />
        <KTextBox :style="{ width: '230px' }" :show-validation-icon="true" :valid="false" />
    </div>
</template>
<script>
import { TextBox as KTextBox } from '@progress/kendo-vue-inputs';

export default {
    components: {
        KTextBox
    }
};

</script>
