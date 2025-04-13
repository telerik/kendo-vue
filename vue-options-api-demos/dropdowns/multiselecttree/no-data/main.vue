<template>
  <div>
    <MultiSelectTree
      :style="{ width: '300px' }"
      :listNoData="'listNoData'"
      :textField="textField"
      :dataItemKey="dataItemKey"
    >
      <template v-slot:listNoData>
        <div class="k-nodata">
          <div>
            <h4 :style="{ fontSize: '1em' }">
              <span class="k-icon k-i-warning" :style="{ fontSize: '2.5em' }" />
              <br />
              <br />
            </h4>
          </div>
        </div>
      </template>
    </MultiSelectTree>
  </div>
</template>
<script>
import {
  MultiSelectTree,
} from '@progress/kendo-vue-dropdowns';

const dataItemKey = 'id';
const textField = 'text';

export default {
  components: {
    MultiSelectTree,
  },
  data: function () {
    return {
      textField,
      dataItemKey,
    };
  },
  methods: {},
};
</script>
