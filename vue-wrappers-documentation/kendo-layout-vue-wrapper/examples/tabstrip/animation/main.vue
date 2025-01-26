<template>
    <kendo-tabstrip :animation-open-effects="'expand:vertical fadeIn'"
                    :animation-open-duration="500"
                    :animation-close-effects="hide"
                    :animation-close-duration="100">
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
