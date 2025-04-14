<template>
  <div>
         <dropdownlist
          :style="{ width: '230px' }"
            :data-items="dataItems"
            :value="value"
            @change="onChange"
            :data-item-key="dataItemKey"
            :text-field="textField"
            :default-item="defaultItem"
            :filterable="true"
            @filterchange="onFilterChange"
            :virtual="virtual"
            @pagechange="pageChange"
        >
        </dropdownlist>
    </div>
</template>
<script>
import { DropDownList } from '@progress/kendo-vue-dropdowns';
const textField = 'ContactName';
const keyField = 'CustomerID';
const defaultItem = { [textField]: 'Select customer...', [keyField]: null };
const emptyItem = { [textField]: 'loading ...' };
const pageSize = 10;

const loadingData = [];
while (loadingData.length < pageSize) {
    loadingData.push({ ...emptyItem });
}

export default {
    components: {
        'dropdownlist': DropDownList
    },
      data: function () {
        return { 
            baseUrl: `https://odatasampleservices.azurewebsites.net/V4/Northwind/Northwind.svc/`,
            init: { method: 'GET', accept: 'application/json', headers: [] },
            dataCaching: [],
            pendingRequest: undefined,
            requestStarted: false,
            dataItems: [],
            skip: 0,
            tempSkip: null,
            total: 0,
            value: null,
            filter: '',
            textField: 'ContactName',
            dataItemKey: 'CustomerID',
            defaultItem: defaultItem,
            emptyItem: emptyItem,
            pageSize: 10,
            allData: [],
            subsetData: [],
            popupSettings: {
                height: '250px'
            }
         };
    },
    computed: {
        virtual: function() {
            return {
                pageSize: pageSize,
                  // @ts-ignore
                skip: this.skip,
                  // @ts-ignore
                total: this.total
            };
        }
    },
    mounted() {
        this.requestData(0, this.filter);
    },
    destroyed() {
        this.resetCach();
    },
    methods: {
        requestData(skip, filter) {
        if (this.requestStarted) {
        clearTimeout(this.pendingRequest);
        this.pendingRequest = setTimeout(() => {
          this.requestData(skip, filter);
        }, 50);
        return;
      }
      this.tempSkip = skip;
      const encodedFilter = encodeURIComponent(filter);
      const url =
        this.baseUrl +
        `Customers?$filter=contains(ContactName,'${encodedFilter}')&$skip=${skip}&$top=${pageSize}&$count=true`;

      this.requestStarted = true;

      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then(this.afterFetch);
    },
        afterFetch(json) {
            const total = json['@odata.count'];
            const items= [];
            json.value.forEach((element, index) => {
                const { CustomerID, ContactName } = element;
                const item = { [this.dataItemKey]: CustomerID, [textField]: ContactName };
                items.push(item);
                this.dataCaching[index + this.tempSkip] = item;
            });
            if (this.tempSkip === this.skip) {
                this.dataItems = items;
                this.total = total;
            }
            this.requestStarted = false;
        },
        onFilterChange(event) {
            const filter = event.filter.value;
            this.resetCach();
            this.requestData(0, filter);
            this.dataItems = loadingData;
            this.skip = 0;
            this.filter = filter;
        },
        pageChange(event) {
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
                this.requestData(skip, filter);
            }
            const data = this.getCachedData(skip);
            this.dataItems = data;
            this.skip = skip;
        },
        onChange(event) {
            const value = event.value;
            if (value && value[textField] === emptyItem[textField]) {
                return;
            }
            this.value = value;
        },
        getCachedData(skip) {
            const data = [];
            for (let i = 0; i < pageSize; i++) {
                data.push(this.dataCaching[i + skip] || { ...emptyItem });
            }
            return data;
        },
        resetCach() {
            this.dataCaching.length = 0;
        }
    }
};

</script>
