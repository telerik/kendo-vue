<template>
  <kendo-listbox :data-source=dataSourceArray
                   :data-text-field="'name'"
                   :data-value-field="'name'"
                   :template="template"       
                   :toolbar-tools="['moveUp', 'moveDown', 'remove']">
    </kendo-listbox>
</template>
<script>
import { ListBox } from '@progress/kendo-listbox-vue-wrapper';
export default {
  components: {
    'kendo-listbox': ListBox
  },
   methods: {
        template: function (e) {
            var template = kendo.template('<h5 style="color:#=color#">#=name#</h5>');
            return template(e);
        }
    },
    data: function() {
        return {
            dataSourceArray: [
                { name: "Orange", color: "orange" },
                { name: "Violet", color: "violet" },
                { name: "Green", color: "green" }
            ],

        }
    }
}
</script>
