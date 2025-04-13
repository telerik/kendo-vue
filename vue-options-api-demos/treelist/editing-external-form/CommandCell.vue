<template>
    <td class="k-command-cell">
        <kbutton
            :theme-color="'primary'"
            class="k-grid-edit-command"
            @click="editHandler"
        >
            Edit
        </kbutton>
    
        <kbutton
            class="k-grid-remove-command"
            @click="removeHandler"
        >
            Remove
        </kbutton>
    </td>
    </template>
    <script>
    import { Button } from '@progress/kendo-vue-buttons';
    
    export default {
        components: {
          'kbutton': Button
        },
       props: {
            field: String,
            dataItem: Object,
            format: String,
            className: String,
            columnIndex: Number,
            columnsCount: Number,
            rowType: String,
            level: Number,
            expanded: Boolean,
            editor: String
        },
        methods: {
            editHandler: function() {
                this.$emit('edit', this.dataItem);
            },
            removeHandler: function() {
                if(confirm('Confirm deleting: ' + this.dataItem.ProductName)){
                   this.$emit('remove', this.dataItem);
                }
            }
        }
    }
    </script>