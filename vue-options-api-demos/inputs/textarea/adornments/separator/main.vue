<template>
    <div>
        <TextArea :style="{ width: '230px' }" :inputPrefix="'prefix'" :rows="4">
            <template v-slot:prefix>
                <div>
                    &nbsp; &nbsp; &nbsp;
                    <InputSeparator />
                </div>
            </template>
        </TextArea>
    </div>
</template>
<script>
import { TextArea, InputSeparator } from '@progress/kendo-vue-inputs';

export default {
    components: {
        TextArea, InputSeparator
    }
};

</script>
