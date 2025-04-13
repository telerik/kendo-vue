<template>
<div>
      <dropdownlist
        :style="{ width: '230px' }"
        :data-items="source"
        @open="onOpen"
        @close="onClose"
        @focus="onFocus"
        @blur="onBlur"
        @change="onChange"
        @filterchange="onFilterChange"
        :filterable="true"
    >
    </dropdownlist>
    <br />
    <br />
    <div class="example-config">
        <h5>Event log</h5>
        <ul class="event-log" :style="{ textAlign: 'right' }">
            <li v-for="(event, index) in events">
                {{ event }}
            </li>
        </ul>
    </div>
</div>
</template>
<script>
import { DropDownList } from '@progress/kendo-vue-dropdowns';

export default {
    components: {
        'dropdownlist': DropDownList
    },
    data: function () {
        return {
            source: [ "Albania", "Andorra", "Armenia", "Austria", "Azerbaijan" ],
            events: []
        };
    },
    methods: {
        onOpen() { this.log('open'); },
        onClose() { this.log('close'); },
        onFocus() { this.log('focus'); },
        onBlur() { this.log('blur'); },
        onChange(event) { 
            this.log('change', event.target.value);
         },
        onFilterChange(event) { 
            this.log('filterChange', event.filter.value);
        },
        log(event, arg) {
            const events = this.events;
            events.unshift(`${event} ${arg || ""}`);
        }
    }
};

</script>
