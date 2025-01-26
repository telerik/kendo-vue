<template>
   <kendo-dialog ref="dialog" :modal="false"
				  :width="800"
					:visible="false"
				  :title="'Members'"
					:closable="false"
					@initopen="initOpen">

			<kendo-treelist id="treeelist" ref="treelist"
							:data-source="dataSource"
							:filterable="true"
							:sortable="true"
							:height="380"
							:toolbar="['create']"
							@databound="dataBound">
				<kendo-treelist-column :width="40" :header-template="headerTemplate"
														:template="template"
														:filterable="true"></kendo-treelist-column>
				<kendo-treelist-column :field="'FirstName'" :title="'First Name'" :width="170" :expandable="true"></kendo-treelist-column>
				<kendo-treelist-column :field="'LastName'" :title="'Last Name'"></kendo-treelist-column>
				<kendo-treelist-column :field="'Position'"></kendo-treelist-column>
				<kendo-treelist-column :title="'E'" :command="[ 'edit', 'destroy' ]" :width="250" :attributes="{ style: 'text-align: center;' }"></kendo-treelist-column>
			</kendo-treelist>

			<kendo-dialog-action :text="'Cancel'"></kendo-dialog-action>
			<kendo-dialog-action :text="'OK'"
								:primary="true"
								:action="actionMethod">
			</kendo-dialog-action>
    </kendo-dialog>

		<p class="title">Members: </p>
		<div id="result">{{ result }}</div>
		<button class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary" @click="openDialog">Pick members</button>
</template>
<script>
import { markRaw } from 'vue';
import { TreeList, TreeListColumn } from '@progress/kendo-treelist-vue-wrapper';
import { Dialog, DialogAction } from '@progress/kendo-dialog-vue-wrapper';

window.crudServiceBaseUrl = "https://demos.telerik.com/kendo-ui/service";

window.toggleAll = function (e) {
	 if (e.target.checked) {
				kendo.jQuery("#treelist [role='row'] .checkbox").each(function () {
						this.checked = "checked";
				});
		}
		else {
				kendo.jQuery("#treelist [role='row'] .checkbox").removeAttr("checked");
		}

		kendo.jQuery("#treelist [role='row'] .checkbox").trigger("change");
}

export default {
  components: {
	'kendo-treelist': TreeList,
	'kendo-treelist-column': TreeListColumn,
    'kendo-dialog': Dialog,
    'kendo-dialog-action': DialogAction
  },
 data () {
	  return {
			dialogContent: 'Some content',
			headerTemplate: '<input type="checkbox" onclick="toggleAll(event)" />',
			template: '<input type="checkbox" class="checkbox" data-bind="checked: checked" />',
			result: [],
			dataSource: markRaw(new kendo.data.TreeListDataSource({
            transport: {
                read: {
                    url: crudServiceBaseUrl + "/EmployeeDirectory/All",
                    dataType: "jsonp"
                },
                update: {
                    url: crudServiceBaseUrl + "/EmployeeDirectory/Update",
                    dataType: "jsonp"
                },
                destroy: {
                    url: crudServiceBaseUrl + "/EmployeeDirectory/Destroy",
                    dataType: "jsonp"
                },
                create: {
                    url: crudServiceBaseUrl + "/EmployeeDirectory/Create",
                    dataType: "jsonp"
                },
                parameterMap: function (options, operation) {
                    if (operation !== "read" && options.models) {
                        return { models: kendo.stringify(options.models) };
                    }
                }
            },
            batch: true,
            schema: {
                model: {
                    id: "EmployeeId",
                    parentId: "ReportsTo",
                    fields: {
                        EmployeeId: { type: "number", editable: false, nullable: false },
                        ReportsTo: { nullable: true, type: "number" },
                        FirstName: { validation: { required: true } },
                        LastName: { validation: { required: true } },
                        HireDate: { type: "date" },
                        Phone: { type: "string" },
                        HireDate: { type: "date" },
                        BirthDate: { type: "date" },
                        Extension: { type: "number", validation: { min: 0, required: true } },
                        Position: { type: "string" }
                    },
                    expanded: true
                }
            }
        }))
	  }
	},
	methods: {
		openDialog: function (e) {
			this.$refs.dialog.kendoWidget().open();
		},
	  actionMethod: function (e) {
	    var treelist = this.$refs.treelist.kendoWidget();
			var items = treelist.element.find(".k-state-selected");
			this.updateResult(items, treelist);
		},
		updateResult: function (items, treelist) {
        if (items.length > 0) {
            var result = [];
            for (var i = 0; i < items.length; i++) {
								var dataItem = treelist.dataItem(items[i]);
								result.push(dataItem.FirstName + " " + dataItem.LastName);
            }
        } else {
            result = [];
        }

        this.result = result;
    },
		initOpen: function () {
			var treelist = this.$refs.treelist;
			setTimeout(function () {
					treelist.kendoWidget().refresh();
			})
		},
		dataBound: function (e) {
			kendo.jQuery(".checkbox").bind("change", function (e) {
					var row = kendo.jQuery(e.target).closest("tr");
					this.checked ? row.addClass("k-state-selected") : row.removeClass("k-state-selected");
			});
		}
	}
}
</script>
