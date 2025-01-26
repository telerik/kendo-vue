<template>
  <kendo-datasource ref="datasource1"
                      :auto-sync="true"
                      :sort="defaultSort"
                      :schema-model-id="'ProductID'"
                      :schema-model-fields="schemaModelFields"
                      :schema-data="'data'"
                      v-on:error="onError"
                      :transport-push="onPush"
                      :transport-read="onRead"
                      :transport-update="onUpdate"
                      :transport-destroy="onDestroy"
                      :transport-create="onCreate">
    </kendo-datasource>

    <kendo-grid ref="grid"
                :height="550"
                :data-source-ref="'datasource1'"
                :auto-bind="false"
                :editable="true"
                :sortable="true"
                :toolbar="['create']">
        <kendo-grid-column :field="'ProductName'" :title="'Product Name'"></kendo-grid-column>
        <kendo-grid-column :field="'UnitPrice'"
                           :title="'Unit Price'"
                           :width="120"
                           :format="'{0:c}'"></kendo-grid-column>
        <kendo-grid-column :command="['destroy']"
                           :title="'&nbsp;'"
                           :width="100"></kendo-grid-column>
    </kendo-grid>
</template>
<script>
import { Grid, GridColumn } from '@progress/kendo-grid-vue-wrapper';
import { KendoDataSource } from '@progress/kendo-datasource-vue-wrapper';

export default {
    components: {
        'kendo-grid': Grid,
        'kendo-grid-column': GridColumn,
        'kendo-datasource': KendoDataSource
    },
   created: function() {
        var that = this;
        var host = "wss://kendoui-ws-demo.herokuapp.com";
        that.ws = new WebSocket(host);

        //Bind the grid when the socket connects
        that.ws.onopen = function() {
          that.$refs.grid.kendoWidget().dataSource.read();
        };

        //Close the socket when the browser window is closed.
        window.onbeforeunload = function() {
          that.ws.close();
        }
    },
    data: function (){
        return {
            ws: null,
            schemaModelFields: {
                ProductID: { editable: false, nullable: true },
                CreatedAt: { type: "date" },
                UnitPrice: { type: "number" }
            },
            defaultSort: [{
                field: "CreatedAt", dir: "desc"
            }]
        };
    },
    methods: {
        onPush: function(options) {
            var that = this;

            //Listen to the "message" event fired when the server pushes data
            that.ws.addEventListener("message", function(e) {
                var result = JSON.parse(e.data);

                //Check what the push type is and invoke the corresponding callback.
                if (result.type == "push-update") {
                    options.pushUpdate(result);
                } else if (result.type == "push-destroy") {
                    options.pushDestroy(result);
                } else if (result.type == "push-create") {
                    options.pushCreate(result);
                }
            });
        },
        onRead: function(options) {
            var that = this;
            var request = { type: "read" };

            that.send(that.ws, request, function(result) {
                options.success(result);
            });
        },
        onUpdate: function(options) {
            var that = this;
            var request = { type: "update", data: [options.data] };

            that.send(that.ws, request, options.success);
        },
        onDestroy: function(options) {
            var that = this;
            var request = { type: "destroy", data: [options.data] };

            that.send(that.ws, request, options.success);
        },
        onCreate: function(options) {
            var that = this;
            var request = { type: "create", data: [options.data] };

            that.send(that.ws, request, options.success);
        },
        onError: function(err) {
            alert(JSON.stringify(err));
        },
        send: function(ws, request, callback) {
            var that = this;

            if (that.ws.readyState != 1) {
                alert("Socket was closed. Please reload the page.");
                return;
            }

            //Assign unique id to the request. Will use that to distinguish the response.
            request.id = kendo.guid();

            //Listen to the "message" event to get server response
            that.ws.addEventListener("message", function(e) {
                var result = JSON.parse(e.data);

                //Check if the response is for the current request
                if (result.id == request.id) {
                    //Stop listening
                    that.ws.removeEventListener("message", that.ws);

                    //Invoke the callback with the result
                    callback(result);
                }
            });

            //Send the data to the server
            that.ws.send(JSON.stringify(request));
        }
    }
}
</script>