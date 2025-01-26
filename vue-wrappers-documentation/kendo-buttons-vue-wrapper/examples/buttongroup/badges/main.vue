<template>
<div>
    <buttongroup :index="1">
        <buttongroup-button :data-badge="25">First option</buttongroup-button>
        <buttongroup-button :data-badge="50">Second option</buttongroup-button>
        <buttongroup-button :data-badge="75">Third option</buttongroup-button>
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
