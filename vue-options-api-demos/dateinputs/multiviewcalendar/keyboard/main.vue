<template>
    <div>
        <Calendar :views="3" />
    </div>
</template>
<script>
import { Calendar } from '@progress/kendo-vue-dateinputs';

export default {
    components: {
        Calendar
    }
};

</script>
