<template>
  	   <kendo-splitter :orientation="'vertical'">
        <div id="top-pane">
            <kendo-splitter ref="horizontal" :orientation="'horizontal'">
                <div id="left-pane">
                    <div class="pane-content">
                        <h3>Inner splitter / left pane</h3>
                        <p>Resizable and collapsible.</p>
                    </div>
                </div>
                <div id="center-pane">
                    <div class="pane-content">
                        <h3>Inner splitter / center pane</h3>
                        <p>Resizable only.</p>
                    </div>
                </div>
                <div id="right-pane">
                    <div class="pane-content">
                        <h3>Inner splitter / right pane</h3>
                        <p>Resizable and collapsible.</p>
                    </div>
                </div>
            </kendo-splitter>
        </div>
        <div id="bottom-pane">
            <div class="pane-content">
                <h3>Outer splitter / bottom pane</h3>
                <p>Non-resizable and non-collapsible.</p>
            </div>
        </div>
    </kendo-splitter>
</template>
<script>
import { Splitter } from '@progress/kendo-layout-vue-wrapper';
export default {
  components: {
    'kendo-splitter': Splitter
  },
   mounted() {
        var vm = this;
        window.addEventListener('keydown', (e) => {
            if (e.altKey && e.keyCode == 87) {
                $(vm.$refs.horizontal.$el).focus();
            }
        });
    }
}
</script>
