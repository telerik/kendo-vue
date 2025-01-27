<template>
  	<div class="k-rtl">
        <kendo-splitter id="vertical" :orientation="'vertical'">
            <div id="top-pane">
                <kendo-splitter :orientation="'horizontal'">
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
            <div id="middle-pane">
                <div class="pane-content">
                    <h3>Outer splitter / middle pane</h3>
                    <p>Resizable only.</p>
                </div>
            </div>
            <div id="bottom-pane">
                <div class="pane-content">
                    <h3>Outer splitter / bottom pane</h3>
                    <p>Non-resizable and non-collapsible.</p>
                </div>
            </div>
        </kendo-splitter>
    </div>
</template>
<script>
import { Splitter } from '@progress/kendo-layout-vue-wrapper';
export default {
  components: {
    'kendo-splitter': Splitter
  }
}
</script>
<style>
    #vertical {
        height: 380px;
        margin: 0 auto;
    }
    #middle-pane {
        background-color: rgba(60, 70, 80, 0.10);
    }
    #bottom-pane {
        background-color: rgba(60, 70, 80, 0.15);
    }
    #left-pane {
        background-color: rgba(60, 70, 80, 0.05);
    }
    #center-pane {
        background-color: rgba(60, 70, 80, 0.05);
    }
    #right-pane {
        background-color: rgba(60, 70, 80, 0.05);
    }
    .pane-content {
        padding: 0 10px;
    }
</style>
