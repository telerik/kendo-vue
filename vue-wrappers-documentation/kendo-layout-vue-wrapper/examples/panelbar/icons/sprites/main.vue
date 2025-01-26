<template>
     <kendo-panelbar id="panelbar-sprites">
        <kendo-panelbar-item text="Brazil" sprite-css-class="brazilFlag" :items="[
            { text: 'History', spriteCssClass: 'historyIcon' },
            { text: 'Geography', spriteCssClass: 'geographyIcon' }
        ]" ></kendo-panelbar-item>
        <kendo-panelbar-item text="India" sprite-css-class="indiaFlag" :items="[
            { text: 'History', spriteCssClass: 'historyIcon' },
            { text: 'Geography', spriteCssClass: 'geographyIcon' }
        ]" ></kendo-panelbar-item>
        <kendo-panelbar-item text="Netherlands" sprite-css-class="netherlandsFlag" :items="[
            { text: 'History', spriteCssClass: 'historyIcon' },
            { text: 'Geography', spriteCssClass: 'geographyIcon' }
        ]" ></kendo-panelbar-item>
    </kendo-panelbar>
</template>
<script>
import { PanelBar, PanelBarItem } from '@progress/kendo-layout-vue-wrapper';
export default {
  components: {
    'kendo-panelbar': PanelBar,
    'kendo-panelbar-item': PanelBarItem
  }
}
</script>
<style>
    .k-panel {
        -webkit-transform: translatez(0);
    }
    #panelbar-sprites .k-sprite {
        background-image: url("https://demos.telerik.com/kendo-ui/content/shared/styles/flags.png");
    }
    .brazilFlag {
        background-position: 0 0;
    }
    .indiaFlag {
        background-position: 0 -32px;
    }
    .netherlandsFlag {
        background-position: 0 -64px;
    }
    .historyIcon {
        background-position: 0 -96px;
    }
    .geographyIcon {
        background-position: 0 -128px;
    }
</style>
