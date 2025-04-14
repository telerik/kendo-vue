<template>
    <div :style="{ display: 'flex' }">
      <navbutton
        :class="'k-pager-first' + (current === 1 ? ' k-disabled' : '')"
        :page="1"
        :title="'First Page'"
        :svg-icon="caretAltToLeftIcon"
        @pagechange="buttonPageChange"
      />
      <navbutton
        :class="current === 1 ? ' k-disabled' : ''"
        :page="current - 1"
        :title="'Previous Page'"
        :svg-icon="caretAltLeftIcon"
        @pagechange="buttonPageChange"
      />
      <slider
        :show-buttons="false"
        :tick-placement="'none'"
        :max="totalPages"
        :min="1"
        @change="sliderChange"
        :value="current"
      >
      </slider>
      <navbutton
        :class="current === totalPages ? ' k-disabled' : ''"
        :page="current + 1"
        :title="'Next Page'"
        :svg-icon="caretAltRightIcon"
        @pagechange="buttonPageChange"
      />
      <navbutton
        :class="'k-pager-last' + (current === totalPages ? ' k-disabled' : '')"
        :page="totalPages"
        :title="'Last Page'"
        :svg-icon="caretAltToRightIcon"
        @pagechange="buttonPageChange"
      />
      <pagerinfo :total-pages="totalPages" :skip="skip" :current-page="current">
      </pagerinfo>
    </div>
  </template>
  <script>
  import { Slider } from "@progress/kendo-vue-inputs";
  import {
    PagerInfo,
    PagerNavigationButton,
  } from "@progress/kendo-vue-data-tools";
  import {
    caretAltToLeftIcon,
    caretAltToRightIcon,
    caretAltLeftIcon,
    caretAltRightIcon,
  } from "@progress/kendo-svg-icons";
  
  export default {
    components: {
      slider: Slider,
      navbutton: PagerNavigationButton,
      pagerinfo: PagerInfo,
    },
    props: {
      currentPage: Number,
      totalPages: Number,
      skip: Number,
    },
    data() {
      return {
        caretAltToLeftIcon,
        caretAltToRightIcon,
        caretAltLeftIcon,
        caretAltRightIcon,
        size: 5,
        selected: undefined,
      };
    },
    computed: {
      current() {
        return this.selected || this.$props.currentPage;
      },
    },
    methods: {
      sliderChange(event) {
        this.selected = Math.round(event.value);
      },
      buttonPageChange(newPage) {
        this.selected = newPage;
      },
    },
  };
  </script>