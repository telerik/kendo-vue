<template>
    <div>
            <p>Customers</p>
            <multiselect 
                :data-items="items"
                :text-field="textField"
                :data-item-key="dataItemKey"
                :placeholder="placeholder"
                :filterable="true"
                @filterchange="onFilterChange"
                :virtual="virtual"
                @pagechange="pageChange"
                :style="{ width: '300px' }"
            ></multiselect>
        </div>
</template>
<script>
import { MultiSelect } from '@progress/kendo-vue-dropdowns';
const textField = 'ContactName';
const dataItemKey = 'CustomerID';
const placeholder = 'Select customer';
const pageSize = 10;
const emptyItem = { [textField]: 'loading ...' };

const loadingData = [];
while (loadingData.length < pageSize) {
    loadingData.push({...emptyItem});
}

let baseUrl = `https://odatasampleservices.azurewebsites.net/V4/Northwind/Northwind.svc/`;
let init = { method: 'GET', accept: 'application/json', headers: [] };
let dataCaching = [];
let pendingRequest;
let requestStarted = false;


export default {
    components: {
        'multiselect': MultiSelect
    },
    data () {
        return {
            items: [],
            skip: 0,
            total: 0,
            filter: '',
            textField: textField,
            dataItemKey: dataItemKey,
            placeholder: placeholder,
            pageSize: pageSize
        };
    },
    mounted() {
        this.requestData(0, '');
    },
    unmounted() {
        this.resetCach();
    },
    computed: {
        virtual () {
            return {
                pageSize: this.pageSize,
                skip: this.skip,
                total: this.total
            };
        }
    },
    methods: {
        requestData(skip, filter) {
            if (requestStarted) {
                clearTimeout(pendingRequest);
                pendingRequest = setTimeout(() => { this.requestData(skip, filter); }, 50);
                return;
            }
    
            const url = baseUrl +
                `Customers?$filter=contains(ContactName,'${filter}')&$skip=${skip}&$top=${pageSize}&$count=true`;
    
            requestStarted = true;
            fetch(url, init)
                .then(response => response.json())
                .then(json => {
                    const total = json['@odata.count'];
                    const items = [];
                    json.value.forEach((element, index) => {
                        const { CustomerID, ContactName } = element;
                        const item = { [dataItemKey]: CustomerID, [textField]: ContactName };
                        items.push(item);
                        dataCaching[index + skip] = item;
                    });
    
                    if (skip === this.skip) {
                        this.items = items;
                        this.total = total;
                    }
                    requestStarted = false;
                });
        },
        onFilterChange(event) {
            const filter = event.filter.value;
    
            this.resetCach();
            this.requestData(0, filter);
    
            this.items = loadingData;
            this.skip = 0;
            this.filter = filter;
        },
        pageChange (event) {
            const skip = event.page.skip;
            const filter = this.filter;
    
            let makeRequest = false;
            for (let i = 0; i < pageSize; i++) {
                if (!dataCaching[skip + i]) {
                    makeRequest = true;
                    break;
                }
            }
    
            if (makeRequest) {
                this.requestData(skip, filter || '');
            }
    
            const data = this.getCachedData(skip);
    
            this.items = data;
            this.skip = skip;
        },
        getCachedData(skip) {
            const data = [];
            for (let i = 0; i < pageSize; i++) {
                data.push(dataCaching[i + skip] || {...emptyItem});
            }
            return data;
        },
        resetCach() {
            dataCaching.length = 0;
        }
    }
};

</script>
