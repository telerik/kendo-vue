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
            <label style="margin: 7px 3em 7px 0px; line-height: 1.2"  class="k-radio-label"
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
            <label style="margin: 7px 3em 7px 0px; line-height: 1.2" class="k-radio-label" for="input">
              Input&nbsp;
            </label>
          </dd>
        </dl>
        <dl>
          <dt>Max. number of buttons:</dt>
          <dd>
            <numerictextbox :style="{ width: '230px' }"
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
          <label htmlFor="showInfo" class="k-checkbox-label">
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
            checked="previousNext"
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

<script>
import { NumericTextBox } from '@progress/kendo-vue-inputs'

export default {
    components: {
        'numerictextbox': NumericTextBox
    },
    props:{
      type: String,
      buttonCount: Number,
      info: Boolean,
      pageSizes: Boolean
    },
    methods:{
      onTypeChange: function(e){
          this.$emit("typeChange", e.target.id)
      },
      onButtonCountChange: function(e){
          this.$emit("buttonCountChange", e.target.value)
      },
      onShowInfoChange: function(e){
          this.$emit("showInfoChange", e.target.checked)
      },
      onPageSizeChange: function(e){
          this.$emit("pageSizeChange", e.target.checked)
      },
      onPreviousNextChange: function(e){
          this.$emit("previousNextChange", e.target.checked)
      }
    }
  }
</script>