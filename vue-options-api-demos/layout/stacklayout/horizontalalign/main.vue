<template>
  <div>
    <DropDownList
      :style="{ marginBottom: '15px' }"
      :data-items="orientations"
      :value="orientation"
      @change="handleOrientationChange"
    />
    <DropDownList
      :style="{ marginBottom: '15px' }"
      :data-items="hAligns"
      :value="hAlign"
      @change="handleAlignChange"
    />
    <div class="example-wrapper">
      <div class="page">
        <div class="content">
          <StackLayout
            :orientation="orientation"
            :align="{
              horizontal: hAlign,
            }"
          >
            <div class="box first">Box</div>
            <div class="box second">Box</div>
            <div class="box third">Box</div>
            <div class="box fourth">Box</div>
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
      hAlign: 'stretch',
      orientation: 'horizontal',
      orientations: ['horizontal', 'vertical'],
      hAligns: ['start', 'center', 'end', 'stretch'],
    };
  },
  methods: {
    handleOrientationChange(e) {
      this.orientation = e.value;
    },
    handleAlignChange(e) {
      this.hAlign = e.value;
    },
  },
};
</script>
