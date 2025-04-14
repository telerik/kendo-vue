<template>
<td v-bind="navAttrs">
    <kbutton
        :class="editButtonClass"
        :type="'button'"
        :primary="true"
        @click="editHandler">
        {{editText}}
    </kbutton>
    <kbutton
        :class="removeButtonClass"
        @click="removeHandler">
        {{removeText}}
    </kbutton>
</td>
</template>
<script>
import { Button } from '@progress/kendo-vue-buttons';
export default {
    components: {
        kbutton: Button
    },
    props: {
        id: String,
        field: String,
        dataItem: Object,
        format: String,
        className: String,
        columnIndex: Number,
        columnsCount: Number,
        rowType: String,
        level: Number,
        expanded: Boolean
    },
    inject: {
        kendoIntlService: { default: null },
        getKeyboardNavigationAttributes: { default: ()=>{} }
    },
    data(){
        return {
            navAttrs: {}
        };
    },
    mounted (){
        this.navAttrs = this.getKeyboardNavigationAttributes(this.$props.id);
    },
    computed: {
        editText(){
            if (this.$props.dataItem['inEdit']){
                return this.$props.dataItem.ProductID? 'Update' : 'Add'
            } else {
                return 'Edit';
            }
        },
        removeText(){
            if (this.$props.dataItem['inEdit']){
                return this.$props.dataItem.ProductID? 'Cancel' : 'Discard'
            } else {
                return 'Remove';
            }
        },
        editButtonClass(){
            return this.$props.dataItem['inEdit'] ? 'k-grid-save-command' : 'k-grid-edit-command';
        },
        removeButtonClass(){
            return this.$props.dataItem['inEdit'] ? 'k-grid-cancel-command' : 'k-grid-remove-command';
        }
    },
    methods: {
        editHandler: function() {
            const command = this.$props.dataItem['inEdit'] ? 'save' : 'edit';
            this.$emit(command, {dataItem:this.dataItem});
        },
        removeHandler: function() {
            const command = this.$props.dataItem['inEdit'] ? 'cancel' : 'remove';
            this.$emit(command, {dataItem:this.dataItem});
        },
    }
}
</script>
