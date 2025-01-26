<template>
<div>
    <div class="row">
        <div class="col-xs-12 col-sm-6 col-lg-3 example-col">
            <p>Default Disabled Button</p>
            <p class="k-block">
                <k-button :disabled="true" @kendoclick="onClick">Apply</k-button>
                <k-button :disabled="true" @kendoclick="onClick">Cancel</k-button>
            </p>
        </div>

        <div class="col-xs-12 col-sm-6 col-lg-3 example-col">
            <p>Bare Disabled Button</p>
            <p class="k-block">
                <k-button :disabled="true" @kendoclick="onClick">Apply</k-button>
                <k-button :disabled="true" @kendoclick="onClick">Cancel</k-button>
            </p>
        </div>

        <div class="col-xs-12 col-sm-6 col-lg-3 example-col">
            <p>Flat Disabled Button</p>
            <p class="k-block">
                <k-button :disabled="true" @kendoclick="onClick">Apply</k-button>
                <k-button :disabled="true" @kendoclick="onClick">Cancel</k-button>
            </p>
        </div>

        <div class="col-xs-12 col-sm-6 col-lg-3 example-col">
            <p>Outline Disabled Button</p>
            <p class="k-block">
                <k-button :disabled="true" @kendoclick="onClick">Apply</k-button>
                <k-button :disabled="true" @kendoclick="onClick">Cancel</k-button>
            </p>
        </div>
    </div>
</div>
</template>

<script>
import { Button } from '@progress/kendo-buttons-vue-wrapper';

export default {
  name: 'App',
  components: {
    'k-button': Button,
  }
}
</script>
