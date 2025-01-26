<template>
<div>
    <buttongroup :index="0">
        <buttongroup-button data-icon="globe">Option 1</buttongroup-button>
        <buttongroup-button data-icon="user">Option 2</buttongroup-button>
        <li>Ordinary LI item</li>
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
