<template>
    <div class="issues">
        <Grid ref="grid" :data-items="issues" :detail="cellTemplate" :columns="columns" :pageable="pageable"
            :filterable="true" :loader="loader" :skip="skip" :take="take" :total="total" :page-size="pageSize"
            @pagechange="pageChangeHandler" @datastatechange="dataStateChange" @expandchange="expandChange"
            :expand-field="'expanded'">
            <template v-slot:myTemplate="{ props }">
                <custom :data-item="props.dataItem" />
            </template>
            <template v-slot:IDTemplate="{ props }">
                <IDTemplate :data-item="props.dataItem" />
            </template>
            <template v-slot:TitleTemplate="{ props }">
                <TitleTemplate :data-item="props.dataItem" />
            </template>
            <template v-slot:LabelsTemplate="{ props }">
                <LabelsTemplate :data-item="props.dataItem" />
            </template>
            <template v-slot:MilestoneTemplate="{ props }">
                <MilestoneTemplate :data-item="props.dataItem" />
            </template>
            <template v-slot:AssigneeTemplate="{ props }">
                <AssigneeTemplate :data-item="props.dataItem" />
            </template>
        </Grid>
    </div>
</template>
<script>
import { markRaw } from "vue";
import { Grid } from '@progress/kendo-vue-grid';
import DetailComponent from './DetailComponent.vue';
import { filterBy } from '@progress/kendo-data-query';


import { IssuesProcessor } from '../shared/issues-processor'
import IDTemplate from './IssuesTemplates/IDTemplate.vue';
import TitleTemplate from './IssuesTemplates/TitleTemplate.vue';
import LabelsTemplate from './IssuesTemplates/LabelsTemplate.vue';
import MilestoneTemplate from './IssuesTemplates/MilestoneTemplate.vue';
import AssigneeTemplate from './IssuesTemplates/AssigneeTemplate.vue';

window.ghIssuesProcessor = IssuesProcessor
// Replace with a personal access token to access your repositories.
// See https://github.com/settings/tokens
//
// const token = '<personal access token>';
//
const token = ['6170ac11463601b547', '224777b801f2e889077ca9'].join('');

export default {
    components: {
        "Grid": Grid,
        custom: DetailComponent,
        IDTemplate: markRaw(IDTemplate),
        TitleTemplate: markRaw(TitleTemplate),
        LabelsTemplate: markRaw(LabelsTemplate),
        MilestoneTemplate: markRaw(MilestoneTemplate),
        AssigneeTemplate: markRaw(AssigneeTemplate),
    },
    created() {
        fetch('https://api.github.com/repos/telerik/kendo-ui-core/issues?' + new URLSearchParams({
            state: 'all',
            page: 1,
            per_page: 100
        }), {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `token ${token}`,
            },
        }).then((response) => response.json())
            .then((data) => {
                this.response = data;
                this.loaded = true;
            })
    },
    data: function () {
        return {
            loader: false,
            response: [],
            cellTemplate: 'myTemplate',
            expandedItems: [],
            columns: [
                { field: 'number', title: 'ID', width: 100, filterable: false, cell: IDTemplate },
                { field: 'title', title: 'Title', cell: TitleTemplate },
                { field: 'labels', title: 'Labels', filterable: false, width: 200, cell: LabelsTemplate },
                { field: 'milestone', title: 'Milestone', filterable: false, width: 150, cell: MilestoneTemplate },
                { field: 'assignee', title: 'Assignee', filterable: false, width: 150, cell: AssigneeTemplate },
            ],
            pageSize: 10,
            skip: 0,
            take: 10,
            pageable: {
                buttonCount: 5,
                info: true,
                type: 'numeric',
                pageSizes: [10, 15, 20, 'all'],
                previousNext: true,
            },
        };
    },
    computed: {
        issues() {
            return this.response.slice(this.skip, this.take + this.skip);
        },
        total() {
            return this.response ? this.response.length : 0;
        },
    },
    methods: {
        createAppState: function (dataState) {
            this.take = dataState.take;
            this.skip = dataState.skip;
            this.sort = dataState.sort;
            this.filter = dataState.filter;
            this.getData(this.employees);
        },
        dataStateChange: function (event) {
            this.createAppState(event.data);
        },
        expandChange: function (event) {
            event.dataItem[event.target.$props.expandField] = !event.dataItem.expanded;
        },
        getFilteredProducts(catId) {
            const result = filterBy(products, { field: 'Category.CategoryID', operator: 'eq', value: catId });

            return result;
        },
        pageChangeHandler: function (event) {
            this.loader = true;
            // The idea behind using the following setTimeout method is to
            // demonstrate how we can show a loader while fetching data.
            // In a real-life scenarios with remote data binding, the 'loader'
            // property should be updated before making a server request
            // and after the request completes.
            setTimeout(() => {
                this.loader = false;
                this.skip = event.page.skip;
                this.take = event.page.take;
            }, 300);
        },
    }
};

</script>