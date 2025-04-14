<template>
    <div>
        <pager 
            :skip="skip" 
            :take="take" 
            :total="total" 
            :page-sizes="pageSizeValues"
            @pagechange="handlePageChange" 
            @pagesizechange="handlePageSizeChange" 
            >
        </pager>
          <k-dialog v-if="show" :title="'Please confirm'" @close="close('cancel')">
            <p :style="{ margin: '25px', textAlign: 'center' }"> 
            Are you sure you want to proceed with this page size?</p>
            <dialog-actions-bar>
                <kbutton @click="close('no')">No</kbutton>
                <kbutton @click="close('yes')">Yes</kbutton>
            </dialog-actions-bar>
        </k-dialog>
    </div>
</template>

<script>
import { Pager } from '@progress/kendo-vue-data-tools';
import { Dialog, DialogActionsBar } from '@progress/kendo-vue-dialogs';
import { Button } from '@progress/kendo-vue-buttons';

export default {
    components: {
        "pager": Pager,
        'k-dialog': Dialog,
        'dialog-actions-bar': DialogActionsBar,
        'kbutton': Button
    },
    data: function(){
        return {
             skip: 0,
             take: 10,
             total: 100,
             show: false,
             pageSizeValues: [5, 10, 20, 50, 100],
             newPageSize: undefined
        }
    },
    methods:{
        handlePageChange(e) {
            this.skip = e.skip;
            this.take = e.take;
        },
        handlePageSizeChange(e) {
            if (e.take >= 50) {
                this.newPageSize = e.take;
                this.show = true;
            } else {
                this.skip = e.skip;
                this.take = e.take;
            }
        },
        close(status) {
            if (status === "yes") {
                this.skip = this.skip;
                this.take = this.newPageSize;
            }

            this.show = false;
        }
    }
};

</script>