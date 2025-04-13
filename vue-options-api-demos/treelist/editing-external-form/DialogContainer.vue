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
        <KLabel :editor-id="'FullTime'" class="'k-checkbox-label'"> FullTime </KLabel>
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
    <DialogActionsBar :layout="'start'">
      <KButton :theme-color="'primary'" @click="save" :svg-icon="saveIcon"> Save </KButton>
      <KButton @click="cancel" :svg-icon="cancelIcon"> Cancel </KButton>
    </DialogActionsBar>
  </KDialog>
</template>
<script>
import { Dialog as KDialog, DialogActionsBar } from '@progress/kendo-vue-dialogs';
import { Input as KInput, Checkbox } from '@progress/kendo-vue-inputs';
import { Label } from '@progress/kendo-vue-labels';
import { Button } from '@progress/kendo-vue-buttons';
import { cancelIcon, saveIcon } from '@progress/kendo-svg-icons';

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
      cancelIcon, saveIcon,
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
      this.$emit('save');
    },
  },
};
</script>