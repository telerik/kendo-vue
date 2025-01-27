<template>
<div>
    <buttongroup :index="3">
        <buttongroup-button>Option 1</buttongroup-button>
        <buttongroup-button>Option 2</buttongroup-button>
        <buttongroup-button>Option 3</buttongroup-button>
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
