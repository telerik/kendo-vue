<template>
    <div id="spreadsheet" style="width: 100%"></div>
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
                // The following is automatically removed by the meta scripts and is not visible in public examples
                const kendoLicense = document.createElement('script');
                kendoLicense.text = `KendoLicensing.setScriptKey("141j044b041h541j4i1d542e58285k264c22502j5f465d3857365b3359385c365c45304a28321f5g1f0820161k145i1825195k3h4i05280a1i0j20165k3h4k49500f1d0h1g182216243e22161e115e415g472j412804550a3k264d2057331e4022103e0f2f523j01335d0156155f01380c3g2f51015f3e145i0a5j1h4f4a5j3h0b1k3d2b61125c283i2e5e1940073j1j4d3h195e2k3e04512e0d55234g3j165e1g3a21532g341d5c064d2b59195b245g3d2c53305k2h4b284a2b562e0d4j2j551f182942254h0f544b0d4d1j332335121i582k531k0g3710310e4a0a48193k014305340a4f0k5k143i2j3b0g340a2i5c16452b422e5h11592g53044i1g531a422h54452g5k0h4k27502h3c1k162537094f1h10470f3b5f2b581f490g40104i253212542d561g562b5d3009312056114717422h5d1746265j1j591342223c30582b4a1h5j101g0h4b0b452a5f224d3i19461a224e2b5i0j491i31581j5i2832084h18542a063h1g375b1d4k28582e0e38204j18380g3b1h612131572i521d0g3a1e4i0i481357183k0026054b133j2k591h561144173e5j2844101i60044a29510j454c3f175a2i0e5b043123501b5b2j05592h4654012d4c2b3k00512b331k184h2b362j421g0h4i10541f603a2e3329312d4e105g210i3008310d5g15591h364k073g61084e013g2310470c3b1c3b0e56143d2f3f233b1d3i4c12352842055c14522014431e165g23335d145k042a572i5k2b055c0g61392f4a1k372a5g205j1k4f474k2e492g52371f3c163a20331c4j0h320538002e562h0b48561e32145h3d0a300d4a5a2i044001264h0752273k0i304a5647185e2b5f1k1a1k5k12571947082i3a2f0b552g5i01350b5k193g2060164a534b09331j4i113h2c3f5e1g104h400g340k59025a015416532c0252032a325c06264f07440a2i550a5g235k1a39094h41542e5i2737103d1c3d10381a3i2114480h42284d3d132b370k1d42023j215b2h3j054k2i0b491a5j2e4b0b4d1132285e265a2h5b2k064b274k4b064k21452a004b0j361k4k2h422d455523182217472j5d0k335b23465f1g5f");`;
                document.head.appendChild(kendoLicense);
                // the above is removed by meta scripts

                $(document).ready(
                    $('#spreadsheet').kendoSpreadsheet({
                        excel: {
                            // Required to enable saving files in older browsers
                            proxyURL: 'https://demos.telerik.com/service/v2/core/export',
                        },
                        pdf: {
                            proxyURL: 'https://demos.telerik.com/service/v2/core/export',
                        },
                        sheets: [
                            {
                                name: 'Food Order',
                                mergedCells: ['A1:G1', 'C15:E15'],
                                rows: [
                                    {
                                        height: 70,
                                        cells: [
                                            {
                                                index: 0,
                                                value: 'Invoice #52 - 06/23/2015',
                                                fontSize: 32,
                                                background: 'rgb(96,181,255)',
                                                textAlign: 'center',
                                                color: 'white',
                                            },
                                        ],
                                    },
                                    {
                                        height: 25,
                                        cells: [
                                            {
                                                value: 'ID',
                                                background: 'rgb(167,214,255)',
                                                textAlign: 'center',
                                                color: 'rgb(0,62,117)',
                                            },
                                            {
                                                value: 'Product',
                                                background: 'rgb(167,214,255)',
                                                textAlign: 'center',
                                                color: 'rgb(0,62,117)',
                                            },
                                            {
                                                value: 'Quantity',
                                                background: 'rgb(167,214,255)',
                                                textAlign: 'center',
                                                color: 'rgb(0,62,117)',
                                            },
                                            {
                                                value: 'Price',
                                                background: 'rgb(167,214,255)',
                                                textAlign: 'center',
                                                color: 'rgb(0,62,117)',
                                            },
                                            {
                                                value: 'Tax',
                                                background: 'rgb(167,214,255)',
                                                textAlign: 'center',
                                                color: 'rgb(0,62,117)',
                                            },
                                            {
                                                value: 'Amount',
                                                background: 'rgb(167,214,255)',
                                                textAlign: 'center',
                                                color: 'rgb(0,62,117)',
                                            },
                                            {
                                                background: 'rgb(167,214,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                        ],
                                    },
                                    {
                                        cells: [
                                            {
                                                value: 216321,
                                                textAlign: 'center',
                                                background: 'rgb(255,255,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                            {
                                                value: 'Calzone',
                                                background: 'rgb(255,255,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                            {
                                                value: 1,
                                                textAlign: 'center',
                                                background: 'rgb(255,255,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                            {
                                                value: 12.39,
                                                format: '$#,##0.00',
                                                background: 'rgb(255,255,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                            {
                                                formula: 'C3*D3*0.2',
                                                format: '$#,##0.00',
                                                background: 'rgb(255,255,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                            {
                                                formula: 'C3*D3+E3',
                                                format: '$#,##0.00',
                                                background: 'rgb(255,255,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                            {
                                                background: 'rgb(255,255,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                        ],
                                    },
                                    {
                                        cells: [
                                            {
                                                value: 546897,
                                                textAlign: 'center',
                                                background: 'rgb(229,243,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                            {
                                                value: 'Margarita',
                                                background: 'rgb(229,243,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                            {
                                                value: 2,
                                                textAlign: 'center',
                                                background: 'rgb(229,243,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                            {
                                                value: 8.79,
                                                format: '$#,##0.00',
                                                background: 'rgb(229,243,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                            {
                                                formula: 'C4*D4*0.2',
                                                format: '$#,##0.00',
                                                background: 'rgb(229,243,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                            {
                                                formula: 'C4*D4+E4',
                                                format: '$#,##0.00',
                                                background: 'rgb(229,243,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                            {
                                                background: 'rgb(229,243,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                        ],
                                    },
                                    {
                                        cells: [
                                            {
                                                value: 456231,
                                                textAlign: 'center',
                                                background: 'rgb(255,255,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                            {
                                                value: 'Pollo Formaggio',
                                                background: 'rgb(255,255,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                            {
                                                value: 1,
                                                textAlign: 'center',
                                                background: 'rgb(255,255,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                            {
                                                value: 13.99,
                                                format: '$#,##0.00',
                                                background: 'rgb(255,255,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                            {
                                                formula: 'C5*D5*0.2',
                                                format: '$#,##0.00',
                                                background: 'rgb(255,255,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                            {
                                                formula: 'C5*D5+E5',
                                                format: '$#,##0.00',
                                                background: 'rgb(255,255,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                            {
                                                background: 'rgb(255,255,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                        ],
                                    },
                                    {
                                        cells: [
                                            {
                                                value: 455873,
                                                textAlign: 'center',
                                                background: 'rgb(229,243,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                            {
                                                value: 'Greek Salad',
                                                background: 'rgb(229,243,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                            {
                                                value: 1,
                                                textAlign: 'center',
                                                background: 'rgb(229,243,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                            {
                                                value: 9.49,
                                                format: '$#,##0.00',
                                                background: 'rgb(229,243,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                            {
                                                formula: 'C6*D6*0.2',
                                                format: '$#,##0.00',
                                                background: 'rgb(229,243,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                            {
                                                formula: 'C6*D6+E6',
                                                format: '$#,##0.00',
                                                background: 'rgb(229,243,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                            {
                                                background: 'rgb(229,243,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                        ],
                                    },
                                    {
                                        cells: [
                                            {
                                                value: 456892,
                                                textAlign: 'center',
                                                background: 'rgb(255,255,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                            {
                                                value: 'Spinach and Blue Cheese',
                                                background: 'rgb(255,255,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                            {
                                                value: 3,
                                                textAlign: 'center',
                                                background: 'rgb(255,255,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                            {
                                                value: 11.49,
                                                format: '$#,##0.00',
                                                background: 'rgb(255,255,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                            {
                                                formula: 'C7*D7*0.2',
                                                format: '$#,##0.00',
                                                background: 'rgb(255,255,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                            {
                                                formula: 'C7*D7+E7',
                                                format: '$#,##0.00',
                                                background: 'rgb(255,255,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                            {
                                                background: 'rgb(255,255,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                        ],
                                    },
                                    {
                                        cells: [
                                            {
                                                value: 546564,
                                                textAlign: 'center',
                                                background: 'rgb(229,243,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                            {
                                                value: 'Rigoletto',
                                                background: 'rgb(229,243,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                            {
                                                value: 1,
                                                textAlign: 'center',
                                                background: 'rgb(229,243,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                            {
                                                value: 10.99,
                                                format: '$#,##0.00',
                                                background: 'rgb(229,243,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                            {
                                                formula: 'C8*D8*0.2',
                                                format: '$#,##0.00',
                                                background: 'rgb(229,243,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                            {
                                                formula: 'C8*D8+E8',
                                                format: '$#,##0.00',
                                                background: 'rgb(229,243,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                            {
                                                background: 'rgb(229,243,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                        ],
                                    },
                                    {
                                        cells: [
                                            {
                                                value: 789455,
                                                textAlign: 'center',
                                                background: 'rgb(255,255,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                            {
                                                value: 'Creme Brulee',
                                                background: 'rgb(255,255,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                            {
                                                value: 5,
                                                textAlign: 'center',
                                                background: 'rgb(255,255,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                            {
                                                value: 6.99,
                                                format: '$#,##0.00',
                                                background: 'rgb(255,255,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                            {
                                                formula: 'C9*D9*0.2',
                                                format: '$#,##0.00',
                                                background: 'rgb(255,255,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                            {
                                                formula: 'C9*D9+E9',
                                                format: '$#,##0.00',
                                                background: 'rgb(255,255,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                            {
                                                background: 'rgb(255,255,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                        ],
                                    },
                                    {
                                        cells: [
                                            {
                                                value: 123002,
                                                textAlign: 'center',
                                                background: 'rgb(229,243,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                            {
                                                value: 'Radeberger Beer',
                                                background: 'rgb(229,243,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                            {
                                                value: 4,
                                                textAlign: 'center',
                                                background: 'rgb(229,243,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                            {
                                                value: 4.99,
                                                format: '$#,##0.00',
                                                background: 'rgb(229,243,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                            {
                                                formula: 'C10*D10*0.2',
                                                format: '$#,##0.00',
                                                background: 'rgb(229,243,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                            {
                                                formula: 'C10*D10+E10',
                                                format: '$#,##0.00',
                                                background: 'rgb(229,243,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                            {
                                                background: 'rgb(229,243,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                        ],
                                    },
                                    {
                                        cells: [
                                            {
                                                value: 564896,
                                                textAlign: 'center',
                                                background: 'rgb(255,255,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                            {
                                                value: 'Budweiser Beer',
                                                background: 'rgb(255,255,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                            {
                                                value: 3,
                                                textAlign: 'center',
                                                background: 'rgb(255,255,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                            {
                                                value: 4.49,
                                                format: '$#,##0.00',
                                                background: 'rgb(255,255,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                            {
                                                formula: 'C11*D11*0.2',
                                                format: '$#,##0.00',
                                                background: 'rgb(255,255,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                            {
                                                formula: 'C11*D11+E11',
                                                format: '$#,##0.00',
                                                background: 'rgb(255,255,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                            {
                                                background: 'rgb(255,255,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                        ],
                                    },
                                    {
                                        index: 11,
                                        cells: [
                                            {
                                                background: 'rgb(229,243,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                            {
                                                background: 'rgb(229,243,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                            {
                                                background: 'rgb(229,243,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                            {
                                                background: 'rgb(229,243,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                            {
                                                background: 'rgb(229,243,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                            {
                                                background: 'rgb(229,243,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                            {
                                                background: 'rgb(229,243,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                        ],
                                    },
                                    {
                                        index: 12,
                                        cells: [
                                            {
                                                background: 'rgb(255,255,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                            {
                                                background: 'rgb(255,255,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                            {
                                                background: 'rgb(255,255,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                            {
                                                background: 'rgb(255,255,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                            {
                                                background: 'rgb(255,255,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                            {
                                                background: 'rgb(255,255,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                            {
                                                background: 'rgb(255,255,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                        ],
                                    },
                                    {
                                        height: 25,
                                        index: 13,
                                        cells: [
                                            {
                                                background: 'rgb(193,226,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                            {
                                                background: 'rgb(193,226,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                            {
                                                background: 'rgb(193,226,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                            {
                                                background: 'rgb(193,226,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                            {
                                                value: 'Tip:',
                                                background: 'rgb(193,226,255)',
                                                color: 'rgb(0,62,117)',
                                                textAlign: 'right',
                                                verticalAlign: 'bottom',
                                            },
                                            {
                                                formula: 'SUM(F3:F11)*0.1',
                                                background: 'rgb(193,226,255)',
                                                color: 'rgb(0,62,117)',
                                                format: '$#,##0.00',
                                                bold: 'true',
                                                verticalAlign: 'bottom',
                                            },
                                            {
                                                background: 'rgb(193,226,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                        ],
                                    },
                                    {
                                        height: 50,
                                        index: 14,
                                        cells: [
                                            {
                                                index: 0,
                                                background: 'rgb(193,226,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                            {
                                                index: 1,
                                                background: 'rgb(193,226,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                            {
                                                index: 2,
                                                fontSize: 20,
                                                value: 'Total Amount:',
                                                background: 'rgb(193,226,255)',
                                                color: 'rgb(0,62,117)',
                                                textAlign: 'right',
                                            },
                                            {
                                                index: 5,
                                                fontSize: 20,
                                                formula: 'SUM(F3:F14)',
                                                background: 'rgb(193,226,255)',
                                                color: 'rgb(0,62,117)',
                                                format: '$#,##0.00',
                                                bold: 'true',
                                            },
                                            {
                                                index: 6,
                                                background: 'rgb(193,226,255)',
                                                color: 'rgb(0,62,117)',
                                            },
                                        ],
                                    },
                                ],
                                columns: [
                                    {
                                        width: 100,
                                    },
                                    {
                                        width: 215,
                                    },
                                    {
                                        width: 115,
                                    },
                                    {
                                        width: 115,
                                    },
                                    {
                                        width: 115,
                                    },
                                    {
                                        width: 155,
                                    },
                                ],
                            },
                        ],
                    })
                );
            }
        };

        loadJQueryAndKendo()
    },
};
</script>
