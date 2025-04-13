<template>
    <div>Custom item</div>
    <Rating :defaultValue="2" :item="'customItem'">
      <template v-slot:customItem="{ props }" >
        <CustomItem v-bind="props"/>
      </template>
    </Rating>
</template>

<script>
import { Rating } from '@progress/kendo-vue-inputs';
import CustomItem from './customItem.vue';

export default {
    components: {
        Rating,
        CustomItem
    }
};
</script>