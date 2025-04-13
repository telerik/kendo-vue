<template>
  <div class="example-wrapper">
        <div>
            <multiselect 
                :style="{ width: '400px'}"
                :data-items="sizes"
                :tag-render="tagRender"
            >
            <template v-slot:myTemplate="{props}">
                <li class="k-chip">
                    <span class="custom-tag">{{sizes.indexOf(props.tagData.data[0])}}</span> - {{props.tagData.text}}
                </li>
            </template>
        </multiselect>
        </div>
    </div>
</template>
<script>
import { MultiSelect } from '@progress/kendo-vue-dropdowns';

export default {
   components: {
        'multiselect': MultiSelect
    },
    data () {
        return {
            sizes: ["X-Small", "Small", "Medium", "Large", "X-Large", "2X-Large"],
            tagRender: 'myTemplate'
        };
    }
};

</script>
