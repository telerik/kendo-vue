<template>
    <kendo-tabstrip :tab-position="'left'">
        <ul>
            <li class="k-state-active">
                Paris
            </li>
            <li>
                New York
            </li>
        </ul>
        <div>
            <div>
                <p>Rainy weather in Paris.</p>
            </div>
        </div>
        <div>
            <div>
                <p>Sunny weather in New York.</p>
            </div>
        </div>
    </kendo-tabstrip>
</template>
<script>
import { TabStrip } from '@progress/kendo-layout-vue-wrapper';
export default {
  components: {
    'kendo-tabstrip': TabStrip
  }
}
</script>
