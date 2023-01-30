<template>
    <KDialog @close="cancel">
      <div class="k-form k-form-horizontal">
        <div class="k-form-field">
          <label for="Employee" class="k-form-label">Employee Name</label>
          <div class="k-form-field-wrap">
            <KInput
              :style="{ width: '230px' }"
              :name="'Employee'"
              v-model="employeeInEdit.name"
            ></KInput>
          </div>
        </div>
        <div class="k-form-field">
          <label for="Position" class="k-form-label">Position</label>
          <div class="k-form-field-wrap">
            <KInput
              :style="{ width: '230px' }"
              :name="'Position'"
              v-model="employeeInEdit.position"
            ></KInput>
          </div>
        </div>
        <div class="k-form-field">
          <KLabel :editor-id="'FullTime'"> FullTime </KLabel>
          <div class="k-form-field-wrap">
            <span>
              <checkbox
                :name="'FullTime'"
                :id="'fullTime'"
                v-model="employeeInEdit.fullTime"
              />
            </span>
          </div>
        </div>
      </div>
      <DialogActionsBar>
        <KButton @click="cancel"> Cancel </KButton>
        <KButton :theme-color="'primary'" @click="save"> Save </KButton>
      </DialogActionsBar>
    </KDialog>
  </template>
  <script>
  import { Dialog as KDialog, DialogActionsBar } from '@progress/kendo-vue-dialogs';
  import { Input as KInput, Checkbox } from '@progress/kendo-vue-inputs';
  import { Label } from '@progress/kendo-vue-labels';
  import { Button } from '@progress/kendo-vue-buttons';
  
  export default {
    components: {
      KInput,
      KDialog,
      DialogActionsBar,
      KButton: Button,
      checkbox: Checkbox,
      KLabel: Label,
    },
    props: {
      dataItem: Object,
    },
    data: function () {
      return {
        employeeInEdit: {
          name: '',
          position: 0,
          fullTime: false,
        },
      };
    },
    created: function () {
      if (this.$props.dataItem) {
        this.employeeInEdit = this.$props.dataItem;
      }
    },
    methods: {
      cancel() {
        this.$emit('cancel');
      },
      save() {
        this.$emit('save', this.employeeInEdit);
      },
    },
  };
  </script>