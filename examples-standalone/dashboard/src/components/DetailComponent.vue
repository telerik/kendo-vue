<template>
    <div class="row my-4">
        <div class="col-sm-12">
            <span :class="['badge', dataItem.state === 'open' ? 'badge-success' : 'badge-danger']">
                {{ dataItem.state }}
            </span>
            <h3 class=" h1">
                {{ dataItem.title }}
                <span class="text-muted">#{{ dataItem.number }}</span>
            </h3>
        </div>
    </div>
    <div class="row my-4">
        <div class="col-sm-2">
            <span class="small d-block text-muted">Created on</span>
            {{ (new Date(dataItem.created_at)).toDateString() }}
        </div>
        <div v-if="dataItem.closed_at" class="col-sm-2">
            <span class="small d-block text-muted">Closed on</span>
            {{ (new Date(dataItem.closed_at)).toDateString() }}
        </div>
        <div class="col-sm-2">
            <span class="small d-block text-muted">Milestone</span>
            {{ dataItem.milestone ? dataItem.milestone.title : '' }}
        </div>
        <div class="col-sm-2">
            <span class="small d-block text-muted">Author</span>
            {{ dataItem.user.login }}
        </div>
        <div v-if="dataItem.assignee" class="col-sm-2">
            <span class="small d-block text-muted">Assignee</span>
            <img :src="dataItem.assignee.avatar_url" style=' width: 30px; height: 30px' class='img-circle' />
            {{ dataItem.assignee ? dataItem.assignee.login : '' }}
        </div>
    </div>
    <div class="row my-4">
        <div class="col-sm-3">
            <h4 class="small text-muted">Labels</h4>
            <span v-for="(label, index) in dataItem.labels" class="badge"
                :style="{ 'background-color': getColor(dataItem.labels[index].name) }"> {{
                        dataItem.labels[index].name
                }}</span>
        </div>
        <div class="col-sm-9">
            <h4 class="small text-muted">Description</h4>
            <div v-html="mdText">
            </div>
        </div>
    </div>
</template>
<script>
import { marked } from 'marked'
import { IssuesProcessor } from '../shared/issues-processor'

export default {
    props: {
        dataItem: Object
    },
    computed: {
        colors(){
            return IssuesProcessor.getColors();
        },
        mdText() {
            return marked.parse(this.dataItem.body);
        }
    },
    methods: {
        getColor(colorName) {
            return this.colors[colorName.toUpperCase()] || this.colors.OTHER
        }
    }
}
</script>