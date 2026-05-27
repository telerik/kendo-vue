<template>
  <KDialog @close="cancel">
    <div class="k-form k-form-horizontal">
      <div class="k-form-field">
        <label for="Employee" class="k-form-label">Employee Name</label>
        <div class="k-form-field-wrap">
          <KInput
            :style="{ width: '230px' }"
            name="Employee"
            v-model="employeeInEdit.name"
          />
        </div>
      </div>
      <div class="k-form-field">
        <label for="Position" class="k-form-label">Position</label>
        <div class="k-form-field-wrap">
          <KInput
            :style="{ width: '230px' }"
            name="Position"
            v-model="employeeInEdit.position"
          />
        </div>
      </div>
      <div class="k-form-field">
        <KLabel editor-id="FullTime" class="k-checkbox-label"> FullTime </KLabel>
        <div class="k-form-field-wrap">
          <span>
            <Checkbox
              name="FullTime"
              id="fullTime"
              v-model="employeeInEdit.fullTime"
            />
          </span>
        </div>
      </div>
    </div>
    <DialogActionsBar layout="start">
      <KButton theme-color="primary" @click="save" :svg-icon="saveIcon">
        Save
      </KButton>
      <KButton @click="cancel" :svg-icon="cancelIcon"> Cancel </KButton>
    </DialogActionsBar>
  </KDialog>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue';
import { Dialog as KDialog, DialogActionsBar } from '@progress/kendo-vue-dialogs';
import { Input as KInput, Checkbox } from '@progress/kendo-vue-inputs';
import { Label as KLabel } from '@progress/kendo-vue-labels';
import { Button as KButton } from "@progress/kendo-vue-buttons";;
import { cancelIcon, saveIcon } from '@progress/kendo-svg-icons';

const props = defineProps({
    dataItem: Object,
});

const emit = defineEmits(['cancel', 'save']);

const employeeInEdit = ref(null);
onBeforeMount(() => {
    if (props.dataItem) {
        employeeInEdit.value = { ...props.dataItem };
    }
});

function cancel() {
    emit('cancel');
}

function save() {
    emit('save', employeeInEdit.value);
}
</script>
