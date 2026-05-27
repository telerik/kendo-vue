<template>
  <div class="example">
    <div class="example-wrap">
      <div :style="{ width: '50%' }">
        <Label :editor-id="editorId">Pick the animation:&nbsp;</Label>
        <DropDownList
          :style="{ width: '230px' }"
          :id="editorId"
          :value="type"
          :data-items="types"
          @change="onTypeChange"
        />
      </div>
      <br />
      <div :class="'row'" :style="{ width: '50%' }">
        <div class="col-4">
          <Loader size="small" :type="type" />
        </div>
        <div class="col-4">
          <Loader :type="type" />
        </div>
        <div class="col-4">
          <Loader size="large" :type="type" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Loader } from '@progress/kendo-vue-indicators';
import { Label } from '@progress/kendo-vue-labels';
import { DropDownList } from '@progress/kendo-vue-dropdowns';

const type = ref('pulsing');
const editorId = 'changeAnimation';
const types = ['pulsing', 'infinite-spinner', 'converging-spinner'];

function onTypeChange(e) {
    type.value = e.value;
}
</script>
