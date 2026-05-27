<template>
  <ul class="web-components-icons">
    <li>
      <span class="k-icon k-font-icon k-i-globe-outline"></span>
      .k-i-globe-outline
    </li>
    <li><span class="k-icon k-font-icon k-i-globe"></span> .k-i-globe</li>
    <li>
      <span class="k-icon k-font-icon k-i-marker-pin"></span> .k-i-marker-pin
    </li>
    <li>
      <span class="k-icon k-font-icon k-i-marker-pin-target"></span>
      .k-i-marker-pin-target
    </li>
    <li><span class="k-icon k-font-icon k-i-pin"></span> .k-i-pin</li>
    <li><span class="k-icon k-font-icon k-i-unpin"></span> .k-i-unpin</li>
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
