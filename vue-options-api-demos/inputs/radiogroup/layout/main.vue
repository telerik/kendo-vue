<template>
  <div>
     <p>Change the layout:</p>
         <dropdownlist
          :style="{ width: '230px' }" 
            :data-items='layoutItems'
            :text-field="'label'"
            :data-item-key="'value'"
            :value="layoutSelectorValue"
            @change="handleChange"
        >
        </dropdownlist>
      <hr />
    <div class="col-md-8">
      <radiogroup :data-items="tasks" :layout="layout" />
    </div>
   
    </div>
</template>
<script>
import { RadioGroup } from '@progress/kendo-vue-inputs';
import { DropDownList } from "@progress/kendo-vue-dropdowns";

export default {
    components: {
      radiogroup: RadioGroup,
      dropdownlist: DropDownList
    },
    data() {
      return {
        layoutItems: [
          {
            value: 'horizontal',
            label: 'Horizontal'
          },
           {
            value: 'vertical',
            label: 'Vertical'
          }
        ],
        layout: 'vertical',
        layoutSelectorValue: {
            value: 'vertical',
            label: 'Vertical'
        },
        tasks: [
          {
            label: "To Do",
            value: "to do",
            className: "task red",
          },
          {
            label: "In Progress",
            value: "in progress",
            className: "task orange",
          },
          {
            label: "Ready for Test",
            value: "ready for test",
            className: "task blue",
          },
          {
            label: "Done",
            value: "done",
            className: "task green",
          },
        ]
      };
    },
    methods: {
      handleChange (e) {
        this.layout = e.value.value;
        this.layoutSelectorValue = e.value;
      }
    }
};

</script>

