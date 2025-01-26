<template>
<div>
    <div class="row">
        <buttongroup :index="1" @select="onSelect">
            <buttongroup-button>First option</buttongroup-button>
            <buttongroup-button>Second option</buttongroup-button>
            <buttongroup-button>Third option</buttongroup-button>
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
  },
  methods: {
        onSelect: function (e) {
            console.log("Selected button index: " + e.indices);
        }
    }
}
</script>
