<template>
  <combobox
          :style="{ width: '230px' }"
            :data-items="items"
            :value="value"
            @change="onChange"
            :text-field="textField"
            :data-item-key="dataItemKey"
            :placeholder="placeholder"
            :filterable="true"
            @filterchange="onFilterChange"
            :virtual="virtual"
            @pagechange="pageChange"
            ></combobox>
</template>
<script>
import { ComboBox } from '@progress/kendo-vue-dropdowns';
const textField = 'ContactName';
const dataItemKey = 'CustomerID';
const placeholder = 'Select customer';
const pageSize = 10;
const emptyItem = { [textField]: 'loading ...' };

const loadingData = [];
while (loadingData.length < pageSize) {
    loadingData.push({...emptyItem});
}
export default {
    components: {
        'combobox': ComboBox
    },
    data: function () {
        return { 
            items: [],
            skip: 0,
            total: 0,
            value: null,
            filter: '',
            textField: textField,
            dataItemKey: dataItemKey,
            placeholder: placeholder,
            pageSize: pageSize,
            emptyItem: emptyItem,
            loadingData: loadingData
         };
    },
    created(){
        this.baseUrl = `https://odatasampleservices.azurewebsites.net/V4/Northwind/Northwind.svc/`;
        this.init = { method: 'GET', accept: 'application/json', headers: [] };
        this.dataCaching = [];
        this.pendingRequest;
        this.requestStarted = false;
    },
    mounted(){
        this.requestData(0, '');
    },
    destroyed() {
        this.resetCach();
    },
    computed: {
        virtual: function() {
            return {
                pageSize: pageSize,
                skip: this.skip,
                total: this.total
            };
        }
    },
    methods: {
        requestData(skip, filter) {
            if (this.requestStarted) {
                clearTimeout(this.pendingRequest);
                this.pendingRequest = setTimeout(() => { this.requestData(skip, filter); }, 50);
                return;
            }
    
            const url = this.baseUrl +
                `Customers?$filter=contains(ContactName,'${filter}')&$skip=${skip}&$top=${pageSize}&$count=true`;
    
            this.requestStarted = true;
            fetch(url, this.init)
                .then(response => response.json())
                .then(json => {
                    const total = json['@odata.count'];
                    const items = [];
                    json.value.forEach((element, index) => {
                        const { CustomerID, ContactName } = element;
                        const item = { [dataItemKey]: CustomerID, [textField]: ContactName };
                        items.push(item);
                        this.dataCaching[index + skip] = item;
                    });
    
                    if (skip === this.skip) {
                        this.items = items;
                        this.total = total;
                    }
                    this.requestStarted = false;
                });
        },
        onFilterChange(event) {
            const filter = event.filter.value;
    
            this.resetCach();
            this.requestData(0, filter);
    
            this.items= loadingData;
            this.skip= 0;
            this. filter = filter;
        },
        pageChange(event){
            const skip = event.page.skip;
            const filter = this.filter;
    
            let makeRequest = false;
            for (let i = 0; i < pageSize; i++) {
                if (!this.dataCaching[skip + i]) {
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
        onChange (event) {
            const value = event.target.value;
            if (value && value[textField] === emptyItem[textField]) {
                return;
            }
            this.value = value;
        },
        getCachedData(skip) {
            const data = [];
            for (let i = 0; i < pageSize; i++) {
                data.push(this.dataCaching[i + skip] || {...emptyItem});
            }
            return data;
        },
        resetCach() {
            this.dataCaching.length = 0;
        }
    }
};

</script>
