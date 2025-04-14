<template>
  <div>
     <multiselect 
        :style="{ width: '300px'}"
        @open="onOpen"
        @close="onClose"
        @focus="onFocus"
        @blur="onBlur"
        @change="onChange"
        @filterchange="onFilterChange"
        :filterable="true"
        :data-items="countries"
    ></multiselect>
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
import { MultiSelect } from '@progress/kendo-vue-dropdowns';
import countries from './countries';

export default {
    components: {
        'multiselect': MultiSelect
    },
    data () {
        return {
            countries: countries,
            value: [],
            events: []
        };
    },
    methods: {
        onOpen() {
            this.log('open');
        },
        onClose() {
            this.log('close');
        },
        onFocus() {
            this.log('focus');
        },
        onBlur() {
            this.log('blur');
        },
        onChange() {
            this.log('change');
        },
        onFilterChange(event) {
            this.log('filterchange', event.filter.value);
        },
        log(event, arg) {
            const events = this.events;
            events.unshift(`${event} ${arg || ""}`);
        }
    }
};

</script>
