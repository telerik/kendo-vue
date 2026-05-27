<template>
  <ul class="web-components-icons">
    <li>
      <span class="k-icon k-font-icon k-i-notification"></span>
      .k-i-notification<br />
      .k-i-bell
    </li>
    <li>
      <span class="k-icon k-font-icon k-i-information"></span>
      .k-i-information<br />
      .k-i-info
    </li>
    <li>
      <span class="k-icon k-font-icon k-i-question"></span> .k-i-question<br />
      .k-i-help
    </li>
    <li>
      <span class="k-icon k-font-icon k-i-warning"></span> .k-i-warning<br />
      .k-i-exception
    </li>
  </ul>
</template>

<script setup>
// No setup needed, component is purely presentational
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
