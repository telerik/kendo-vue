<template>
  <div>
    <DropDownList
      :style="{ marginBottom: '20px' }"
      :data-items="orientations"
      :value="orientation"
      @change="toggleOrientation"
    />
    <div class="example-wrapper">
      <div class="page">
        <div class="content">
          <StackLayout :orientation="orientation" :gap="15">
            <div class="box first k-flex-40" />
            <div class="box second k-flex-20" />
            <div class="box third k-flex-10" />
            <div class="box fourth k-flex-30" />
          </StackLayout>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { DropDownList } from '@progress/kendo-vue-dropdowns';
import { StackLayout } from '@progress/kendo-vue-layout';

import './styles.css';

export default {
  components: {
    StackLayout,
    DropDownList,
  },
  data() {
    return {
      orientation: 'horizontal',
      orientations: ['horizontal', 'vertical'],
    };
  },
  methods: {
    toggleOrientation(orientation) {
      this.orientation = orientation.value;
    },
  },
};
</script>
