<template>
<div>
    <GridColumnMenuCheckboxFilter
      :column="column"
      :filter="filter"
      :filterable="filterable"
      :unique-data="true"
      :item="'item'"
      :search-box="false"
      :data-items="products" :expanded="true"
      @filterchange="filterChange"
      @expandchange="expandChange"
      @closemenu="closeMenu">
      <template v-slot:item="{props, listeners}">
      <li class="k-item" :key="props.index">
                 aaa
                 <Checkbox
                            :label="String(props.item)"
                            @change="listeners.onChange"
                            :checked="props.checked"
                        />
        </li>
      </template>
      </GridColumnMenuCheckboxFilter>
</div>
</template>
<script>
import { Checkbox } from '@progress/kendo-vue-inputs';
import { GridColumnMenuCheckboxFilter } from '@progress/kendo-vue-grid';
import { products } from './products';

export default {
    props: {
        column: Object,
        filter: Object,
        filterable: Boolean,
        uniqueData: {
            type: Boolean,
            default: true
        }
    },
    data () {
        return {
            products: products
        };
    },
    components: {
        'GridColumnMenuCheckboxFilter': GridColumnMenuCheckboxFilter,
        Checkbox
    },
    methods: {
        expandChange () {
            this.$emit('expandchange');
        },
        closeMenu () {
            this.$emit('closemenu');
        },
        filterChange (newDescriptor, e) {
            this.$emit('filterchange', newDescriptor, e);
        }
    }
}
</script>