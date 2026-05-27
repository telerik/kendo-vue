<template>
  <div>
    <Pager
      :skip="skip"
      :take="take"
      :total="total"
      :button-count="buttonCount"
      :info="info"
      :type="type"
      :page-sizes="pageSizes"
      :previous-next="previousNext"
      @pagechange="handlePageChange"
      @pagesizechange="handlePageSizeChange"
    />
    <br />
    <div class="example-config">
      <h5>{{ title }}</h5>
      <ul class="event-log">
        <li v-for="(event, index) in events" :key="index">{{ event }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Pager } from '@progress/kendo-vue-data-tools';

const skip = ref(0);
const take = ref(5);
const buttonCount = ref(5);
const type = ref("numeric");
const info = ref(true);
const pageSizes = ref([5, 10, 20, 50, 100]);
const previousNext = ref(true);
const total = ref(200);
const title = ref("Event log");
const events = ref([]);

function handlePageChange(event) {
    log("pageChange", event);
    skip.value = event.skip;
    take.value = event.take;
}

function handlePageSizeChange(event) {
    log("pageSizeChange", event);
    skip.value = event.skip;
    take.value = event.take;
}

function log(event, arg) {
    events.value.unshift(
        `event: ${event}, event data: ${arg ? JSON.stringify(arg) : ""}`
    );
}
</script>
