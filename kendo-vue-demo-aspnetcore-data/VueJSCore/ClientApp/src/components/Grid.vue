<template>
    <Grid ref="grid"
          :data-items="result"
          :edit-field="'inEdit'"
          :sortable="true"
          :pageable="true"
          :filterable="true"
          :filter="filter"
          :groupable="false"
          :sort="sort"
          :take="take"
          :skip="skip"
          :total="total"
          @itemchange="itemChange"
          @datastatechange="dataStateChange"
          :columns="columns">
        <template v-slot:myTemplate="{props}">
            <custom :data-item="props.dataItem"
                    @edit="handleCRUD"
                    @save="handleCRUD"
                    @remove="handleCRUD"
                    @cancel="handleCRUD" />
        </template>
        <grid-toolbar>
            <kendo-button 
                    class="k-button"
                    title="Add new record"
                    :primary="true"
                    @click='addNew'>
                Add new
            </kendo-button>
        </grid-toolbar>
        <grid-norecords>
            There is no data available custom
        </grid-norecords>
    </Grid>
</template>


<script>
    import { Grid, GridToolbar, GridNoRecords } from '@progress/kendo-vue-grid';
    import { Button } from '@progress/kendo-vue-buttons';
    import { toDataSourceRequestString } from '@progress/kendo-data-query';
    import CommandCell from './CommandCell';

    export default {
        components: {
            'Grid': Grid,
            'grid-toolbar': GridToolbar,
            'grid-norecords': GridNoRecords,
            'kendo-button': Button,
            'custom': CommandCell
        },
        data: function () {
            return {
                filter: null,
                sort: null,
                result: [],
                skip: 0,
                take: 2,
                total: 100,
                updatedData: [],
                itemInEdit: null,
                editedRowOriginalData: null,
                columns: [
                    { field: 'id', filterable: false, editable: false, title: 'Employee Id', width: '80px' },
                    { field: 'name', title: 'Name' },
                    { field: 'gender', title: 'Gender' },
                    { field: 'salary', filter: 'numeric', title: 'Salary' },
                    { cell: 'myTemplate', filterable: false, width: '210px' }
                ]
            }
        },
        mounted: function () {
            this.fetchData({skip: this.skip, take: this.take});
        },

        methods: {
            addNew: function() {
                const data = this.result;
                data.unshift({ "_command": true, inEdit: true });
                this.result = data;
            },
            addItem: function () {
                const queryStr = this.serialize(this.result[0]); // Serialize the state
                const base_url = 'api/Employee';
                const init = { method: 'POST', accept: 'application/json', headers: {} };
                fetch(`${base_url}?${queryStr}&${toDataSourceRequestString({ skip: this.skip, take: this.take })}`, init)
                    .then(response => response.json())
                    .then(json => { this.result = json.data })
            },
            enterEdit: function (item) {
                this.editedRowOriginalData = item;

                this.itemInEdit = item;
                this.itemInEdit.inEdit = true;

                const currentResult = this.result.map((currentItem) => {
                    let result;

                    if (currentItem.id === this.itemInEdit.id) {
                        result = this.itemInEdit;
                    } else {
                        result = currentItem;
                    }
                    return result;
                })
                this.result = currentResult;
            },
            updateItem: function (item) {
                const queryStr = this.serialize(item); // Serialize the state
                const base_url = 'api/Employee';
                const init = { method: 'PUT', accept: 'application/json', headers: {} };
                fetch(`${base_url}?${queryStr}&${toDataSourceRequestString({ skip: this.skip, take: this.take })}`, init)
                    .then(response => response.json())
                    .then(json => { this.result = json.data })
            },
            deleteItem: function (item) {
                const queryStr = this.serialize(item); // Serialize the state
                const base_url = 'api/Employee';
                const init = { method: 'DELETE', accept: 'application/json', headers: {} };
                fetch(`${base_url}?${queryStr}&${toDataSourceRequestString({ skip: this.skip, take: this.take })}`, init)
                    .then(response => response.json())
                    .then(json => { this.result = json.data })
            },
            cancelEdit: function () {
                this.itemInEdit = {};
                this.itemInEdit = {};
                let data = this.result;
                let mappedData = data.map(record => {
                    if (record.id === this.editedRowOriginalData.id) {
                        record = this.editedRowOriginalData;
                        record.inEdit = false
                    } else {
                        record.inEdit = false;
                    }
                    return record
                });
                let filteredData = mappedData.filter(obj => Object.keys(obj).includes("id"));

                this.result = filteredData;
            },
            handleCRUD: function (event) {
                switch (event.operation) {
                    case "edit":
                        this.enterEdit(event.dataItem)
                        break;
                    case "delete":
                        this.deleteItem(event.dataItem)
                        break;
                    case "update":
                        if (event.dataItem.id) {
                            this.updateItem(event.dataItem)
                        } else {
                            this.addItem(event.dataItem)
                        }
                        break;
                    case "cancel":
                        this.cancelEdit(event.dataItem)
                        break;
                }
            },
            itemChange: function (event) {
                const data = this.result.slice();
                const index = data.findIndex(d => d.id === event.dataItem.id);
                data[index] = { ...data[index], [event.field]: event.value };
                this.result = data;
            },
            dataStateChange: function (event) {
                this.sort = event.data.sort;
                this.filter = event.data.filter;
                this.skip = event.data.skip;
                this.take = event.data.take;
                this.fetchData(event.data);
            },
            serialize: function (obj) {
                var str = [];
                for (var p in obj)
                    if (Object.prototype.hasOwnProperty.call(obj, p)) {
                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                    }
                return str.join("&");
            },
            fetchData: function (dataState) {
                const queryStr = `${toDataSourceRequestString(dataState)}`; // Serialize the state

                const base_url = 'api/Employee';
                const init = { method: 'GET', accept: 'application/json', headers: {} };

                fetch(`${base_url}?${queryStr}`, init)
                    .then(response => response.json())
                    .then(({ data, total }) => {
                        this.result = data;
                        this.total = total;
                    });
            }
        },
    }
</script>