<template>
<div>
    <buttongroup :index="3">
        <buttongroup-button data-icon="play"></buttongroup-button>
        <buttongroup-button data-icon="rewind"></buttongroup-button>
        <buttongroup-button data-icon="forward"></buttongroup-button>
        <li data-icon="globe"></li>
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
