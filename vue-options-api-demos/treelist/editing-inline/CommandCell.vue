<template>
    <td class="k-command-cell">
        <kbutton v-if="!isInEdit"
            @click="addChildHandler"
            :type="'button'"
          >
            Add Employee
          </kbutton>
        <kbutton
            :class="editButtonClass"
            :type="'button'"
            :theme-color="'primary'"
            @click="editHandler">
            {{editText}}
        </kbutton>
        <kbutton
            :type="'button'"
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
            expanded: Boolean,
            editField: String
        },
        data(){
            return {
                navAttrs: {}
            };
        },
        computed: {
            isInEdit() {
                return this.$props.dataItem['inEdit'];
            },
            isNew() {
                return this.$props.dataItem.isNew;
            },
            editText(){
                if (this.isInEdit){
                    return this.isNew ? 'Add' : 'Update';
                } else {
                    return 'Edit';
                }
            },
            removeText(){
                if (this.isInEdit){
                    return this.isNew ? 'Discard' : 'Cancel';
                } else {
                    return 'Remove';
                }
            },
            editButtonClass(){
                return this.isInEdit ? 'k-grid-save-command' : 'k-grid-edit-command';
            },
            removeButtonClass(){
                return this.isInEdit ? 'k-grid-cancel-command' : 'k-grid-remove-command';
            }
        },
        methods: {
            addChildHandler() {
                this.$emit('addchild', this.dataItem);
            },
            editHandler: function() {
                const command = this.isInEdit ? 'save' : 'edit';
                this.$emit(command, this.dataItem);
            },
            removeHandler: function() {
                const command = this.isInEdit ? 'cancel' : 'remove';
                this.$emit(command, this.dataItem);
            }
        }
    }
    </script>