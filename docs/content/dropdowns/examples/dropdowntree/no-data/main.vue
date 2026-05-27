<template>
  <div>
    <DropDownTree
      :style="{ width: '300px' }"
      :data-items="dataItems"
      :list-no-data="'listNoData'"
      :text-field="textField"
      :data-item-key="dataItemKey"
    >
      <template #listNoData>
        <div class="k-nodata">
          <div>
            <h4 :style="{ fontSize: '1em' }">
                      <br />
              <br />
              <p>No Data</p>
            </h4>
          </div>
        </div>
      </template>
    </DropDownTree>
  </div>
</template>

<script setup>
import { DropDownTree } from '@progress/kendo-vue-dropdowns';
import { ref } from 'vue';

const dataItemKey = 'id';
const textField = 'text';

const dataItems = ref([]);
</script>
