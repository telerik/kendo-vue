<template>
<div>
  <div class="vue-app k-rtl">
      <div class="row">
          <buttongroup>
              <buttongroup-button data-icon="globe">Option A</buttongroup-button>
              <buttongroup-button data-icon="user">Option B</buttongroup-button>
              <buttongroup-button>Option C</buttongroup-button>
          </buttongroup>
      </div>
  </div>
</div>
</template>

<script>
import { ButtonGroup, ButtonGroupButton } from '@progress/kendo-buttons-vue-wrapper';

export default {
  name: 'App',
  components: {
    'buttongroup': ButtonGroup,
    'buttongroup-button': ButtonGroupButton
  }
}
</script>
