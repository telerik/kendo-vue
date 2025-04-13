<template>
    <div>
        Valid Input Icon:
        <br />
        <TextArea :style="{ width: '230px' }" :show-validation-icon="true" :input-class="'k-valid'" :rows="4" />
        <br />
        <br />
        Invalid Input Icon:
        <br />
        <TextArea :style="{ width: '230px' }" :show-validation-icon="true" :valid="false" :rows="4" />
    </div>
</template>
<script>
import { TextArea } from '@progress/kendo-vue-inputs';

export default {
    components: {
        TextArea
    }
};

</script>
