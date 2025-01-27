<template>
<div>
    <buttongroup :selection="'multiple'">
        <buttongroup-button data-icon="bold"></buttongroup-button>
        <buttongroup-button data-icon="italic"></buttongroup-button>
        <buttongroup-button data-icon="underline"></buttongroup-button>
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
