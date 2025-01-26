<template>
    <ganttdatasource ref="ganttdatasource1"
                           :transport-read-url="serviceRoot + '/GanttTasks'"
                           transport-read-data-type="jsonp"
                           :transport-update-url="serviceRoot + '/GanttTasks/update'"
                           transport-update-data-type="jsonp"
                           :transport-create-url="serviceRoot + '/GanttTasks/create'"
                           transport-create-data-type="jsonp"
                           :transport-destroy-url="serviceRoot + '/GanttTasks/destroy'"
                           transport-destroy-data-type="jsonp"
                           :transport-parameter-map="parameterMap"
                           :schema-model-fields="fields"
                           :resources="resources"
                           :assignments="assignments">
    </ganttdatasource>

    <ganttdependencydatasource ref="ganttdependencydatasource1"
                                     :transport-read-url="serviceRoot + '/GanttDependencies'"
                                     transport-read-data-type="jsonp"
                                     :transport-update-url="serviceRoot + '/GanttDependencies/update'"
                                     transport-update-data-type="jsonp"
                                     :transport-create-url="serviceRoot + '/GanttDependencies/create'"
                                     transport-create-data-type="jsonp"
                                     :transport-destroy-url="serviceRoot + '/GanttDependencies/destroy'"
                                     transport-destroy-data-type="jsonp"
                                     :transport-parameter-map="parameterMap"
                                     schema-model-id="id"
                                     :schema-model-fields="dependencyfields">
    </ganttdependencydatasource>

    <gantt id="gantt"
                 data-source-ref="ganttdatasource1"
                 dependencies-data-source-ref="ganttdependencydatasource1"
                 :show-work-hours="false"
                 :show-work-days="false"
                 :snap="false"
                 :height="'700'"
                 :resources="resources"
                 :assignments="assignments"
                 :row-height="64"
                 :task-template="getTaskTemplate">
        <gantt-view :type="'day'"></gantt-view>
        <gantt-view :type="'week'" :selected="true"></gantt-view>
        <gantt-view :type="'month'"></gantt-view>
        <gantt-column :field="'title'" :title="'Title'" :editable="true" :sortable="true"></gantt-column>
        <gantt-column :field="'resources'" :title="'Assigned Resources'" :editable="true" :sortable="true"></gantt-column>
    </gantt>
</template>
<script>
import { GanttDataSource, GanttDependencyDataSource} from '@progress/kendo-datasource-vue-wrapper';
import { Gantt, GanttColumn, GanttView} from '@progress/kendo-gantt-vue-wrapper';

export default {
    name: 'App',
    components: {
      'gantt': Gantt,
      'gantt-view': GanttView,
      'gantt-column':GanttColumn,
      'ganttdatasource': GanttDataSource,
      'ganttdependencydatasource': GanttDependencyDataSource
    },
    data: function() {
        return {
           serviceRoot: "https://demos.telerik.com/kendo-ui/service",
           resources: {
             field: "resources",
             dataColorField: "Color",
             dataTextField: "Name",
             dataSource: {
                 transport: {
                     read: {
                         url: "https://demos.telerik.com/kendo-ui/service/GanttResources",
                         dataType: "jsonp"
                     }
                 },
                 schema: {
                     model: {
                         id: "id",
                         fields: {
                             id: { from: "ID", type: "number" }
                         }
                     }
                 }
             }
           },
           assignments: {
             dataTaskIdField: "TaskID",
             dataResourceIdField: "ResourceID",
             dataValueField: "Units",
             dataSource: {
                 transport: {
                     read: {
                         url: "https://demos.telerik.com/kendo-ui/service/GanttResourceAssignments",
                         dataType: "jsonp"
                     },
                     update: {
                         url: "https://demos.telerik.com/kendo-ui/service/GanttResourceAssignments/Update",
                         dataType: "jsonp"
                     },
                     destroy: {
                         url: "https://demos.telerik.com/kendo-ui/service/GanttResourceAssignments/Destroy",
                         dataType: "jsonp"
                     },
                     create: {
                         url: "https://demos.telerik.com/kendo-ui/service/GanttResourceAssignments/Create",
                         dataType: "jsonp"
                     },
                     parameterMap: function(options, operation) {
                         if (operation !== "read") {
                             return { models: kendo.stringify(options.models || [options]) };
                         }
                     }
                 },
                 schema: {
                     model: {
                         id: "ID",
                         fields: {
                             ID: { type: "number" },
                             ResourceID: { type: "number" },
                             Units: { type: "number" },
                             TaskID: { type: "number" }
                         }
                     }
                 }
             }
           },
           fields: {
               id: { from: 'ID', type: 'number' },
               orderId: { from: 'OrderID', type: 'number', validation: { required: true } },
               parentId: { from: 'ParentID', type: 'number', defaultValue: null, validation: { required: true } },
               start: { from: 'Start', type: 'date' },
               end: { from: 'End', type: 'date' },
               title: { from: 'Title', defaultValue: '', type: 'string' },
               percentComplete: { from: 'PercentComplete', type: 'number' },
               summary: { from: 'Summary', type: 'boolean' },
               expanded: { from: 'Expanded', type: 'boolean', defaultValue: true }
           },
           dependencyfields: {
               id: { from: 'ID', type: 'number' },
               predecessorId: { from: 'PredecessorID', type: 'number' },
               successorId: { from: 'SuccessorID', type: 'number' },
               type: { from: 'Type', type: 'number' }
           }
        }
    },
    methods: {
        parameterMap: function(options, operation) {
           if (operation !== 'read') {
               return {models: kendo.stringify(options.models || [options])}
           }
        },
        getTaskTemplate: function (data) {
          return kendo.template(` # if (resources[0]) { #
        <div class="template" style="background-color: #= resources[0].color #;">
            <img class="resource-img" src="https://demos.telerik.com/kendo-ui/content/web/gantt/resources/#:resources[0].id#.jpg" alt="#: resources[0].id #" />
            <div class="wrapper">
                <strong class="title">#= title # </strong>
                <span class="resource">#= resources[0].name #</span>
            </div>
            <div class="progress" style="width:#= (100 * parseFloat(percentComplete)) #%"> </div>
        </div>
        # } else { #
        <div class="template">
            <div class="wrapper">
                <strong class="title">#= title # </strong>
                <span class="resource">no resource assigned</span>
            </div>
            <div class="progress" style="width:#= (100 * parseFloat(percentComplete)) #%"> </div>
        </div>
        # } #`)(data);
        }
    }
}
</script>
<style>
      /*center treelist cell content vertically*/
      .k-gantt .k-treelist td
      {
          vertical-align: middle;
      }

      /*hide the resource labels, as they are present in the task template*/
      .k-gantt .k-resource
      {
          display: none;
      }

      /*style the task template*/
      .k-task-template {
          height: 100%;
          padding: 0 !important;
      }

      .template {
          height: 100%;
          overflow: hidden;
      }

      .resource-img {
          float: left;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          margin: 8px;
      }

      .wrapper {
          padding: 8px;
          color: #fff;
      }

      .k-task-template .wrapper > * {
          display: block;
          overflow: hidden;
          text-overflow: ellipsis;
      }

      .title {
          font-weight: bold;
          font-size: 13px;
      }

      .resource {
          text-transform: uppercase;
          font-size: 9px;
          margin-top: .5em;
      }

      .progress
      {
          position: absolute;
          left: 0;
          bottom: 0;
          width: 0%;
          height: 4px;
          background: rgba(0, 0, 0, .3);
      }
    </style>
