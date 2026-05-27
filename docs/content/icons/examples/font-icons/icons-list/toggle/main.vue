<template>
  <ul class="web-components-icons">
    <li>
      <span class="k-icon k-font-icon k-i-heart-outline"></span>
      .k-i-heart-outline<br />
      .k-i-fav-outline<br />
      .k-i-favorite-outline
    </li>
    <li>
      <span class="k-icon k-font-icon k-i-heart"></span> .k-i-heart<br />
      .k-i-fav<br />
      .k-i-favorite
    </li>
    <li>
      <span class="k-icon k-font-icon k-i-star-outline"></span>
      .k-i-star-outline<br />
      .k-i-bookmark-outline
    </li>
    <li>
      <span class="k-icon k-font-icon k-i-star"></span> .k-i-star<br />
      .k-i-bookmark
    </li>
    <li>
      <span class="k-icon k-font-icon k-i-checkbox"></span> .k-i-checkbox<br />
      .k-i-shape-rect
    </li>
    <li>
      <span class="k-icon k-font-icon k-i-checkbox-checked"></span>
      .k-i-checkbox-checked
    </li>
    <li>
      <span class="k-icon k-font-icon k-i-tri-state-indeterminate"></span>
      .k-i-tri-state-indeterminate
    </li>
    <li>
      <span class="k-icon k-font-icon k-i-tri-state-null"></span>
      .k-i-tri-state-null
    </li>
    <li><span class="k-icon k-font-icon k-i-circle"></span> .k-i-circle</li>
    <li>
      <span class="k-icon k-font-icon k-i-radiobutton"></span>
      .k-i-radiobutton<br />
      .k-i-shape-circle
    </li>
    <li>
      <span class="k-icon k-font-icon k-i-radiobutton-checked"></span>
      .k-i-radiobutton-checked
    </li>
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
