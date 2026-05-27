<template>
    <div id="gantt"></div>
</template>
<script>
export default {
    mounted() {
        const loadJQueryAndKendo = () => {
            const jqueryScript = document.createElement('script');
            jqueryScript.src = "https://code.jquery.com/jquery-3.7.0.min.js";
            jqueryScript.async = true;
            jqueryScript.onload = checkScriptsLoaded;
            document.head.appendChild(jqueryScript);

            const kendoScript = document.createElement('script');
            kendoScript.src = "https://kendo.cdn.telerik.com/2024.4.1112/js/kendo.all.min.js";
            kendoScript.async = true;
            kendoScript.onload = checkScriptsLoaded;
            document.head.appendChild(kendoScript);
        };

        const checkScriptsLoaded = () => {
            if (window.$ && window.kendo) {
                $(document).ready(function () {
                    // The following is automatically removed by the meta scripts and is not visible in public examples
                    const kendoLicense = document.createElement('script');
                    kendoLicense.text = `KendoLicensing.setScriptKey("141j044b041h541j4i1d542e58285k264c22502j5f465d3857365b3359385c365c45304a28321f5g1f0820161k145i1825195k3h4i05280a1i0j20165k3h4k49500f1d0h1g182216243e22161e115e415g472j412804550a3k264d2057331e4022103e0f2f523j01335d0156155f01380c3g2f51015f3e145i0a5j1h4f4a5j3h0b1k3d2b61125c283i2e5e1940073j1j4d3h195e2k3e04512e0d55234g3j165e1g3a21532g341d5c064d2b59195b245g3d2c53305k2h4b284a2b562e0d4j2j551f182942254h0f544b0d4d1j332335121i582k531k0g3710310e4a0a48193k014305340a4f0k5k143i2j3b0g340a2i5c16452b422e5h11592g53044i1g531a422h54452g5k0h4k27502h3c1k162537094f1h10470f3b5f2b581f490g40104i253212542d561g562b5d3009312056114717422h5d1746265j1j591342223c30582b4a1h5j101g0h4b0b452a5f224d3i19461a224e2b5i0j491i31581j5i2832084h18542a063h1g375b1d4k28582e0e38204j18380g3b1h612131572i521d0g3a1e4i0i481357183k0026054b133j2k591h561144173e5j2844101i60044a29510j454c3f175a2i0e5b043123501b5b2j05592h4654012d4c2b3k00512b331k184h2b362j421g0h4i10541f603a2e3329312d4e105g210i3008310d5g15591h364k073g61084e013g2310470c3b1c3b0e56143d2f3f233b1d3i4c12352842055c14522014431e165g23335d145k042a572i5k2b055c0g61392f4a1k372a5g205j1k4f474k2e492g52371f3c163a20331c4j0h320538002e562h0b48561e32145h3d0a300d4a5a2i044001264h0752273k0i304a5647185e2b5f1k1a1k5k12571947082i3a2f0b552g5i01350b5k193g2060164a534b09331j4i113h2c3f5e1g104h400g340k59025a015416532c0252032a325c06264f07440a2i550a5g235k1a39094h41542e5i2737103d1c3d10381a3i2114480h42284d3d132b370k1d42023j215b2h3j054k2i0b491a5j2e4b0b4d1132285e265a2h5b2k064b274k4b064k21452a004b0j361k4k2h422d455523182217472j5d0k335b23465f1g5f");`;
                    document.head.appendChild(kendoLicense);
                    // the above is removed by meta scripts

                    var serviceRoot = "https://demos.telerik.com/service/v2/core";
                    var tasksDataSource = new kendo.data.GanttDataSource({
                        transport: {
                            read: {
                                url: serviceRoot + "/GanttTasks",
                                dataType: "jsonp"
                            },
                            update: {
                                url: serviceRoot + "/GanttTasks/Update",
                                dataType: "jsonp",
                                timeout: 5000
                            },
                            destroy: {
                                url: serviceRoot + "/GanttTasks/Destroy",
                                dataType: "jsonp",
                                timeout: 5000
                            },
                            create: {
                                url: serviceRoot + "/GanttTasks/Create",
                                dataType: "jsonp",
                                timeout: 5000
                            },
                            parameterMap: function (options, operation) {
                                if (operation !== "read") {
                                    return { models: kendo.stringify(options.models || [options]) };
                                }
                            }
                        },
                        schema: {
                            model: {
                                id: "id",
                                fields: {
                                    id: { from: "ID", type: "number" },
                                    orderId: { from: "OrderID", type: "number", validation: { required: true } },
                                    parentId: { from: "ParentID", type: "number", defaultValue: null, nullable: true },
                                    start: { from: "Start", type: "date" },
                                    end: { from: "End", type: "date" },
                                    title: { from: "Title", defaultValue: "", type: "string" },
                                    percentComplete: { from: "PercentComplete", type: "number" },
                                    summary: { from: "Summary", type: "boolean" },
                                    expanded: { from: "Expanded", type: "boolean", defaultValue: true }
                                }
                            }
                        },
                        error: function (ev) {
                            ev.sender.cancelChanges();
                            kendo.alert("Task was not Created, Updated or Destroyed properly!</br></br>" +
                                "If you are using this service for local demo or in dojo consider <a href='https://github.com/telerik/kendo-ui-demos-service/tree/master/demos-and-odata-v3'>downloading and running the service locally</a>.</br>" +
                                "And make sure to set the <a href='https://github.com/telerik/kendo-ui-demos-service/blob/master/demos-and-odata-v3/KendoCRUDService/Models/Gantt/GanttTaskRepository.cs#L12'>UpdateDatabase</a> flag to true.");
                        }
                    });

                    var dependenciesDataSource = new kendo.data.GanttDependencyDataSource({
                        transport: {
                            read: {
                                url: serviceRoot + "/GanttDependencies",
                                dataType: "jsonp"
                            },
                            update: {
                                url: serviceRoot + "/GanttDependencies/Update",
                                dataType: "jsonp"
                            },
                            destroy: {
                                url: serviceRoot + "/GanttDependencies/Destroy",
                                dataType: "jsonp"
                            },
                            create: {
                                url: serviceRoot + "/GanttDependencies/Create",
                                dataType: "jsonp"
                            },
                            parameterMap: function (options, operation) {
                                if (operation !== "read") {
                                    return { models: kendo.stringify(options.models || [options]) };
                                }
                            }
                        },
                        schema: {
                            model: {
                                id: "id",
                                fields: {
                                    id: { from: "ID", type: "number" },
                                    predecessorId: { from: "PredecessorID", type: "number" },
                                    successorId: { from: "SuccessorID", type: "number" },
                                    type: { from: "Type", type: "number" }
                                }
                            }
                        }
                    });

                    var gantt = $("#gantt").kendoGantt({
                        dataSource: tasksDataSource,
                        dependencies: dependenciesDataSource,
                        views: [
                            "day",
                            { type: "week", selected: true },
                            "month"
                        ],
                        columns: [
                            { field: "id", title: "ID", width: 60 },
                            { field: "title", title: "Title", editable: true, sortable: true },
                            {
                                title: "Timings",
                                columns: [
                                    { field: "start", title: "Start Time", format: "{0:MM/dd/yyyy}", width: 100, editable: true, sortable: true },
                                    { field: "end", title: "End Time", format: "{0:MM/dd/yyyy}", width: 100, editable: true, sortable: true }
                                ]
                            }
                        ],
                        height: 700,
                        showWorkHours: false,
                        showWorkDays: false,
                        snap: false
                    }).data("kendoGantt");

                    $(document).bind("kendo:skinChange", function () {
                        gantt.refresh();
                    });
                });
            }
        };
        loadJQueryAndKendo()
    }
};
</script>
