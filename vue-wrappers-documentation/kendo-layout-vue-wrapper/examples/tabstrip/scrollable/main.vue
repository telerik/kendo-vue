<template>
   <div style="width:400px;">
        <kendo-tabstrip :scrollable-distance="100">
            <ul>
                <li class="k-state-active">
                    Tab 1 with long text
                </li>
                <li>
                    Tab 2 with long text
                </li>
                <li>
                    Tab 3 with long text
                </li>
                <li>
                    Tab 4 with long text
                </li>
            </ul>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer felis libero, lobortis ac rutrum quis, varius a velit.</p>
            </div>
            <div>
                <p>Donec lacus erat, cursus sed porta quis, adipiscing et ligula. Duis volutpat, sem pharetra accumsan pharetra, mi ligula cursus felis, ac aliquet leo diam eget risus.</p>
            </div>
            <div>
                <p>Integer facilisis, justo cursus venenatis vehicula, massa nisl tempor sem, in ullamcorper neque mauris in orci.</p>
            </div>
            <div>
                <p>Ut orci ligula, varius ac consequat in, rhoncus in dolor. Mauris pulvinar molestie accumsan. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.</p>
            </div>
        </kendo-tabstrip>
    </div>
</template>
<script>
import { TabStrip } from '@progress/kendo-layout-vue-wrapper';
export default {
  components: {
    'kendo-tabstrip': TabStrip
  }
}
</script>
