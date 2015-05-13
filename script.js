$(function () {
    
    var houseSize=1;

    var costHigh=[];

    for(i=0; i<41; i++){
        costHigh.push(300 + (i*(9.344*houseSize)));
    };

    var costTrad=[];

    for(i=0; i<41; i++){
        costTrad.push(i*(38.325*houseSize));
    };

    
    $('#container').highcharts({
        chart: {
            type: 'area'
        },
        title: {
            text: 'Low-Flush vs Traditional Toilets'
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            allowDecimals: false,
            labels: {
                formatter: function () {
                    return this.value + ' years'; // clean, unformatted number for year
                }
            }
        },
        yAxis: {
            title: {
                text: 'Cost (US Dollars)'
            },
            labels: {
                formatter: function () {
                    // return this.value / 1000 + 'k';
                    return '$' + this.value;
                }
            }
        },
        tooltip: {
            pointFormat: '{series.name} toilet will cost $<b>{point.y:,.0f}</b><br/>in {point.x} years'
        },
        plotOptions: {
            area: {
                pointStart: 0,
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    radius: 2,
                    states: {
                        hover: {
                            enabled: true
                        }
                    }
                }
            }
        },
        series: [{
            name: 'Low-Flush',
        //     data: [309.34, 318.68, 328.03, 337.38, 346.72, 356.06, 365.41, 374.75, 384.10, 393.44, 402.78, 412.13,
        //         421.47, 430.82, 440.16, 449.50, 458.85, 468.19, 477.54, 486.88, 496.22, 505.57,
        //         514.91, 524.26, 533.60, 542.94, 552.29, 561.63, 570.98, 580.32, 589.664,
        //         599.01, 608.35, 617.696, 627.04, 636.38, 645.73, 655.07, 664.42, 673.76]
        // }, {
            data: costHigh
        },{
            name: 'Traditional',
            // data: [38.325, 76.65, 114.98, 153.30, 191.63, 229.95, 268.28, 306.60, 344.93, 383.25,
            //     421.58, 459.9, 498.225, 536.55, 574.86, 613.20, 651.53, 689.85, 728.18, 766.50, 804.83, 843.15, 881.48,
            //     919.80, 958.13, 996.45, 1034.78, 1073.10, 1111.43, 1149.75, 1188.08, 1226.40, 1264.73,
            //     1303.05, 1341.38, 1379.70, 1418.03, 1456.35, 1494.68, 1533]
            data: costTrad
        }]
    });



    //input event
    $('.form-control').change(function(){
        var houseSize = $(this).val();


    // var houseSize = 2;

    // $('.form-control').change(function(){
    // var houseSize = $(this).val();

        var costHigh=[];

        for(i=0; i<41; i++){
            costHigh.push(300 + (i*(9.344*houseSize)));
        };

        var costTrad=[];

        for(i=0; i<41; i++){
            costTrad.push(i*(38.325*houseSize));
        };

// $('.form-control').change(function(){
//     var houseSize = $(this).val();
    
// });



        $('#container').highcharts({
            chart: {
                type: 'area'
            },
            title: {
                text: 'Low-Flush vs Traditional Toilets'
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                allowDecimals: false,
                labels: {
                    formatter: function () {
                        return this.value + ' years'; // clean, unformatted number for year
                    }
                }
            },
            yAxis: {
                title: {
                    text: 'Cost (US Dollars)'
                },
                labels: {
                    formatter: function () {
                        // return this.value / 1000 + 'k';
                        return '$' + this.value;
                    }
                }
            },
            tooltip: {
                pointFormat: '{series.name} toilet will cost $<b>{point.y:,.0f}</b><br/>in {point.x} years'
            },
            plotOptions: {
                area: {
                    pointStart: 0,
                    marker: {
                        enabled: false,
                        symbol: 'circle',
                        radius: 2,
                        states: {
                            hover: {
                                enabled: true
                            }
                        }
                    }
                }
            },
            series: [{
                name: 'Low-Flush',
            //     data: [309.34, 318.68, 328.03, 337.38, 346.72, 356.06, 365.41, 374.75, 384.10, 393.44, 402.78, 412.13,
            //         421.47, 430.82, 440.16, 449.50, 458.85, 468.19, 477.54, 486.88, 496.22, 505.57,
            //         514.91, 524.26, 533.60, 542.94, 552.29, 561.63, 570.98, 580.32, 589.664,
            //         599.01, 608.35, 617.696, 627.04, 636.38, 645.73, 655.07, 664.42, 673.76]
            // }, {
                data: costHigh
            },{
                name: 'Traditional',
                // data: [38.325, 76.65, 114.98, 153.30, 191.63, 229.95, 268.28, 306.60, 344.93, 383.25,
                //     421.58, 459.9, 498.225, 536.55, 574.86, 613.20, 651.53, 689.85, 728.18, 766.50, 804.83, 843.15, 881.48,
                //     919.80, 958.13, 996.45, 1034.78, 1073.10, 1111.43, 1149.75, 1188.08, 1226.40, 1264.73,
                //     1303.05, 1341.38, 1379.70, 1418.03, 1456.35, 1494.68, 1533]
                data: costTrad
            }]
        });
    });
});