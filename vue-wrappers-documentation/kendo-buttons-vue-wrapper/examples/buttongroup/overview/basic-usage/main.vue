<template>
<div>
    <div class="row">
        <buttongroup>
            <buttongroup-button>Option A</buttongroup-button>
            <buttongroup-button>Option B</buttongroup-button>
            <buttongroup-button>Option C</buttongroup-button>
        </buttongroup>
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
