<template>
<div>
    <buttongroup :selection="'single'">
        <buttongroup-button data-icon="align-left">Option A</buttongroup-button>
        <buttongroup-button data-icon="align-center">Option B</buttongroup-button>
        <buttongroup-button data-icon="align-right">Option C</buttongroup-button>
    </buttongroup>
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
