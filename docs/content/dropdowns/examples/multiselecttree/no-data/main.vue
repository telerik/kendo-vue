<template>
  <div>
    <MultiSelectTree :style="{ width: '300px' }" :listNoData="'listNoData'" :textField="textField"
      :dataItemKey="dataItemKey">
      <template #listNoData>
        <div class="k-nodata">
          <div :style="{ fontSize: '1em', textAlign: 'center' }">
                  <SvgIcon :icon="warningCircleIcon" :size="'large'" />
            <br /><br />
            No data here
          </div>
        </div>
      </template>
    </MultiSelectTree>
  </div>
</template>

<script setup>
import { SvgIcon } from '@progress/kendo-vue-common';
import { warningCircleIcon } from '@progress/kendo-svg-icons';
import { MultiSelectTree } from '@progress/kendo-vue-dropdowns';

const dataItemKey = 'id';
const textField = 'text';
</script>
