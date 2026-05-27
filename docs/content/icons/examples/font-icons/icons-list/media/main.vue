<template>
  <ul class="web-components-icons">
    <li><span class="k-icon k-font-icon k-i-play"></span> .k-i-play</li>
    <li><span class="k-icon k-font-icon k-i-pause"></span> .k-i-pause</li>
    <li><span class="k-icon k-font-icon k-i-stop"></span> .k-i-stop</li>
    <li><span class="k-icon k-font-icon k-i-rewind"></span> .k-i-rewind</li>
    <li><span class="k-icon k-font-icon k-i-forward"></span> .k-i-forward</li>
    <li>
      <span class="k-icon k-font-icon k-i-volume-down"></span> .k-i-volume-down
    </li>
    <li>
      <span class="k-icon k-font-icon k-i-volume-up"></span> .k-i-volume-up
    </li>
    <li>
      <span class="k-icon k-font-icon k-i-volume-off"></span> .k-i-volume-off
    </li>
    <li><span class="k-icon k-font-icon k-i-hd"></span> .k-i-hd</li>
    <li>
      <span class="k-icon k-font-icon k-i-subtitles"></span> .k-i-subtitles
    </li>
    <li><span class="k-icon k-font-icon k-i-playlist"></span> .k-i-playlist</li>
    <li><span class="k-icon k-font-icon k-i-audio"></span> .k-i-audio</li>
  </ul>
</template>

<script setup>
// No script logic is required for this file.
</script>

<style>
@import "https://unpkg.com/@progress/kendo-font-icons@5/dist/index.css";

.web-components-icons li {
  margin: 10px;
  padding: 10px;
  display: block;
  float: left;
  vertical-align: top;
  text-align: center;
  width: 160px;
  height: 92px;
  font-size: 12px;
  line-height: 1em;
  font-weight: 300;
  color: #999;
}

.web-components-icons li:before {
  display: none;
}

.web-components-icons .k-icon {
  display: block;
  clear: both;
  margin: 0 auto 10px;
  color: #656565;
  font-size: 32px;
}
</style>
