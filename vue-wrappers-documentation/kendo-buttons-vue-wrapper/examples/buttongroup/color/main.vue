<template>
<div>
    <buttongroup :index="1">
        <buttongroup-button style="background-color: green">First option</buttongroup-button>
        <buttongroup-button style="background-color: red">Second option</buttongroup-button>
        <buttongroup-button style="background-color: blue">Third option</buttongroup-button>
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
