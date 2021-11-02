import { process } from '@progress/kendo-data-query';
import { computed, reactive } from 'vue';

const useInlineEditGrid = function(sampleProducts) {
    const initData = reactive({
        gridData: [],
        skip: 0,
        take: 10,
        total: 4,
        updatedData: sampleProducts,
        editID: null,
        columns: [
            { field: 'ProductID', editable: false, title: 'ID', width: '75px' },
            { field: 'ProductName', title: 'Name' },
            { field: 'FirstOrderedOn', editor: 'date', title: 'First Ordered', format: '{0:d}' },
            { field: 'UnitPrice', filter: 'numeric', title: 'Unit Price' },
            { field: 'UnitsInStock', title: 'Units', filter: 'numeric', width: '150px', editor: 'numeric' },
            { cell: 'myTemplate', width: '180px' }
        ]
    });

    const hasItemsInEdit = computed(() => initData.gridData.filter(p => p.inEdit).length > 0);

    const itemChange = (e) => {
        if (e.dataItem.ProductID) {
          let index = initData.gridData.findIndex(p => p.ProductID === e.dataItem.ProductID);
          let updated = Object.assign({},initData.gridData[index], {[e.field]:e.value});
          initData.gridData.splice(index, 1, updated);
        } else {
          e.dataItem[e.field] = e.value;
        }
    };
    const insert = () => {
        const dataItem = { inEdit: true };
        initData.gridData.splice(0, 0, dataItem)
    };
    const edit = (e) => {
        if(e.dataItem.ProductID){
            let index = initData.gridData.findIndex(p => p.ProductID === e.dataItem.ProductID);

            initData.gridData[index].inEdit = true;
        }
    };
    const save = (e) => {
        let index = initData.gridData.findIndex(p => p.ProductID === e.dataItem.ProductID);
        let item = initData.gridData[index];
        let updated = update(initData.gridData.slice(), item);
        update(initData.updatedData, item);
        initData.gridData[index] = updated;
        initData.gridData[index].inEdit = undefined;
        let updateDataIndex = initData.updatedData.findIndex(p => p.ProductID === e.dataItem.ProductID);
        initData.updatedData[updateDataIndex] = updated;
    };
    const update = (data, item, remove) => {
        let updated;
        let index = data.findIndex(p => item.ProductID && p.ProductID === item.ProductID);
        if (index >= 0) {
            updated = Object.assign({}, item);
            data[index] = updated;
        } else {
            let id = 1;
            initData.updatedData.forEach(p => { if (p.ProductID) { 
                id = Math.max(p.ProductID + 1, id);
             } });
            updated = Object.assign({}, item, { ProductID: id });
            data.unshift(updated);
            index = 0;
        }

        if (remove) {
            data = data.splice(index, 1);
        }
        return data[index];
    };
    const cancel = (e) => {
        if (e.dataItem.ProductID) {
            let index = initData.gridData.findIndex(p => p.ProductID === e.dataItem.ProductID);
            let updateDataIndex = initData.updatedData.findIndex(p => p.ProductID === e.dataItem.ProductID);
            let updated = initData.updatedData[updateDataIndex];
            updated.inEdit = undefined;
            initData.gridData.splice(index, 1, updated);
        } else {
          let index = initData.gridData.findIndex(p => JSON.stringify(e.dataItem) === JSON.stringify(p));
           
          initData.gridData.splice(index, 1);
        }
    };
    const remove = (e) => {
        if (e.dataItem.ProductID) {
            e.dataItem.inEdit = undefined;
            update(initData.gridData, e.dataItem, true);
            update(initData.updatedData, e.dataItem, true);
        }
     
    };
    const cancelChanges = () => {
        let editedItems = initData.updatedData.filter(p => p.inEdit === true);
        if(editedItems.length){
           editedItems.forEach(
               item => {
                  item['inEdit'] = undefined;
                });
        }
       getData();
   };
     const getData = () => {
        initData.gridData = process( 
          initData.updatedData,
         {
           take: initData.take,
           skip: initData.skip, 
           sort: initData.sort, 
           filter: initData.filter
        }).data;
    };
    const createAppState = (dataState) => {
        initData.take = dataState.take;
        initData.skip = dataState.skip;
        initData.filter = dataState.filter;
        initData.sort = dataState.sort;
        getData();
    };
    const dataStateChange = (event) => {
        createAppState(event.data);
    };

    getData();
  
    return {
        initData,
        itemChange,
        insert,
        edit,
        save,
        cancel,
        remove,
        cancelChanges,
        getData,
        createAppState,
        dataStateChange,
        hasItemsInEdit
    };
}

export { useInlineEditGrid };