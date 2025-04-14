<template>
  <div>
    <div class="row">
      <div class="col-md-3">
        <h4>Office</h4>
        <ColorPalette :tile-size="16" :palette="'office'" />
      </div>
      <div class="col-md-3">
        <h4>Apex</h4>
        <ColorPalette :tile-size="16" :palette="'apex'" />
      </div>
      <div class="col-md-3">
        <h4>Austin</h4>
        <ColorPalette :tile-size="16" :palette="'austin'" />
      </div>
      <div class="col-md-3">
        <h4>Clarity</h4>
        <ColorPalette :tile-size="16" :palette="'clarity'" />
      </div>
    </div>
    <div class="row">
      <div class="col-md-3">
        <h4>Slipstream</h4>
        <ColorPalette :tile-size="16" :palette="'slipstream'" />
      </div>
      <div class="col-md-3">
        <h4>Metro</h4>
        <ColorPalette :tile-size="16" :palette="'metro'" />
      </div>
      <div class="col-md-3">
        <h4>Flow</h4>
        <ColorPalette :tile-size="16" :palette="'flow'" />
      </div>
      <div class="col-md-3">
        <h4>Hardcover</h4>
        <ColorPalette :tile-size="16" :palette="'hardcover'" />
      </div>
    </div>
    <div class="row">
      <div class="col-md-3">
        <h4>Trek</h4>
        <ColorPalette :tile-size="16" :palette="'trek'" />
      </div>
      <div class="col-md-3">
        <h4>Verve</h4>
        <ColorPalette :tile-size="16" :palette="'verve'" />
      </div>
      <div class="col-md-3">
        <h4>Basic</h4>
        <ColorPalette :tile-size="16" :palette="'basic'" />
      </div>
      <div class="col-md-3">
        <h4>Monochrome</h4>
        <ColorPalette :tile-size="16" :palette="'monochrome'" />
      </div>
    </div>
  </div>
</template>
<script>
import { ColorPalette } from "@progress/kendo-vue-inputs";

export default {
  components: {
    ColorPalette,
  },
};
</script>
