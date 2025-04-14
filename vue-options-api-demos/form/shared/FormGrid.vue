<template>
    <div>
      <error v-if="visited && validationMessage">{{validationMessage}}</error>
      <grid :data-items="value" :columns="columns">
            <template v-slot:myTemplate="{props}">
            <custom :data-item="props.dataItem" 
                    @remove="onRemove"/>
        </template>
        <grid-toolbar>
          <kbutton
            title="Add new"
            :theme-color="'primary'"
            @click="onAdd"
          >
            Add new
          </kbutton>
        </grid-toolbar>
      </grid>
    </div>
</template>
<script>
import { Field } from '@progress/kendo-vue-form';
import CommandCell from './CommandCell.vue';
import { Input } from "@progress/kendo-vue-inputs";
import { Error } from "@progress/kendo-vue-labels";
import { Grid, GridToolbar } from "@progress/kendo-vue-grid";
import { Button } from '@progress/kendo-vue-buttons';

export default {
    props: {
         touched: Boolean,
         label: String,
         validationMessage: String,
         hint: String,
         id: String,
         valid: Boolean,
         value: Array,
         visited: Boolean
    },
    components: {
      error: Error,
      grid: Grid,
    'grid-toolbar': GridToolbar,
    field: Field,
     'custom': CommandCell,
      'kbutton': Button
    },
    data() {
        return {
            input: Input,
            columns: [
                { field: 'name', title:'Name'},
                { cell: 'myTemplate', width:'240px'}
            ]
        }
    },
    methods: {
        onAdd (e) {
            e.preventDefault();
            this.$emit('unshift', { value: { name: "new item" } });
        },
        onRemove (cellProps){
          this.$emit('remove', { index: cellProps.dataIndex });
        }
    }
}
</script>
