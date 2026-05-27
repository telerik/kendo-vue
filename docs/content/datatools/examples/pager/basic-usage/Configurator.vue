<template>
  <div class="example-config row">
    <div class="col-md-6">
      <dl>
        <dt>Pager type:</dt>
        <dd>
          <input
            type="radio"
            name="pager"
            id="numeric"
            class="k-radio k-radio-md"
            value="numeric"
            :checked="type === 'numeric'"
            @change="onTypeChange"
          />
          <label
            style="margin: 7px 3em 7px 0px; line-height: 1.2"
            class="k-radio-label"
            for="numeric"
          >
            Numeric&nbsp;
          </label>

          <input
            type="radio"
            name="pager"
            id="input"
            class="k-radio k-radio-md"
            value="input"
            :checked="type === 'input'"
            @change="onTypeChange"
          />
          <label
            style="margin: 7px 3em 7px 0px; line-height: 1.2"
            class="k-radio-label"
            for="input"
          >
            Input&nbsp;
          </label>
        </dd>
      </dl>
      <dl>
        <dt>Max. number of buttons:</dt>
        <dd>
          <NumericTextBox
            :style="{ width: '230px' }"
            :value="buttonCount"
            @change="onButtonCountChange"
          />
        </dd>
      </dl>
    </div>
    <div class="col-md-6 row">
      <div class="col-md-12">
        <input
          class="k-checkbox k-checkbox-md k-rounded-md"
          :checked="info"
          id="showInfo"
          type="checkbox"
          @change="onShowInfoChange"
        />
        <label for="showInfo" class="k-checkbox-label">
          Show info
        </label>
      </div>
      <div class="col-md-12">
        <input
          class="k-checkbox k-checkbox-md k-rounded-md"
          :checked="pageSizes"
          id="pageSize"
          type="checkbox"
          @change="onPageSizeChange"
        />
        <label for="pageSize" class="k-checkbox-label">
          Show page sizes
        </label>
      </div>
      <div class="col-md-12">
        <input
          class="k-checkbox k-checkbox-md k-rounded-md"
          :checked="previousNext"
          id="previousNext"
          type="checkbox"
          @change="onPreviousNextChange"
        />
        <label for="previousNext" class="k-checkbox-label">
          Show previous / next buttons
        </label>
      </div>
    </div>
  </div>
</template>

<script setup>
import { NumericTextBox } from '@progress/kendo-vue-inputs';

defineProps({
    type: String,
    buttonCount: Number,
    info: Boolean,
    pageSizes: Boolean,
    previousNext: Boolean,
});

const emit = defineEmits([
    'typeChange',
    'buttonCountChange',
    'showInfoChange',
    'pageSizeChange',
    'previousNextChange',
]);

function onTypeChange(e) {
    emit('typeChange', e.target.id);
}

function onButtonCountChange(e) {
    emit('buttonCountChange', e.target.value);
}

function onShowInfoChange(e) {
    emit('showInfoChange', e.target.checked);
}

function onPageSizeChange(e) {
    emit('pageSizeChange', e.target.checked);
}

function onPreviousNextChange(e) {
    emit('previousNextChange', e.target.checked);
}
</script>
