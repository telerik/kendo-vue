<template>
  <div>
    <Pager
      :skip="skip"
      :take="take"
      :total="total"
      :page-sizes="pageSizeValues"
      @pagechange="handlePageChange"
      @pagesizechange="handlePageSizeChange"
    />
    <Dialog v-if="show" :title="'Please confirm'" @close="close('cancel')">
      <p :style="{ margin: '25px', textAlign: 'center' }">
        Are you sure you want to proceed with this page size?
      </p>
      <DialogActionsBar>
        <KButton @click="close('no')">No</KButton>
        <KButton @click="close('yes')">Yes</KButton>
      </DialogActionsBar>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Pager } from '@progress/kendo-vue-data-tools';
import { Dialog, DialogActionsBar } from '@progress/kendo-vue-dialogs';
import { Button as KButton } from "@progress/kendo-vue-buttons";;

const skip = ref(0);
const take = ref(10);
const total = ref(100);
const show = ref(false);
const pageSizeValues = ref([5, 10, 20, 50, 100]);
const newPageSize = ref(undefined);

const handlePageChange = (e) => {
    skip.value = e.skip;
    take.value = e.take;
};

const handlePageSizeChange = (e) => {
    if (e.take >= 50) {
        newPageSize.value = e.take;
        show.value = true;
    } else {
        skip.value = e.skip;
        take.value = e.take;
    }
};

const close = (status) => {
    if (status === "yes") {
        take.value = newPageSize.value;
    }

    show.value = false;
};
</script>
