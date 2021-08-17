<template>
  <div class="bg-white rounded shadow p-1 py-5 px-4">
    <div class="font-gillSans text-left pl-10 flex space-x-4">
      <div class="pt-1">
        <div class="rounded-100 w-8 h-8 grid place-items-center bg-1b text-white">
          <i class="far fa-chart-line text-xl"></i>
        </div>
      </div>
      <div>
        <span class="text-2xl">Historic Repeat Purchase Behaviour</span>
        <br />
        <span class="text-xl">Simple Description</span>
      </div>
    </div>
    <figure class="highcharts-figure">
      <div id="container"></div>
    </figure>
  </div>
</template>

<script>
// import Highcharts from "highcharts";
export default {
  name: "HistoricalRepeat",
  data() {
    return {

    };
  },
  mounted() {
    this.waterFallChart()
  },
  methods: {
    waterFallChart() {
      window.Highcharts.chart('container', {
        title: {
          "text": [
            "Repeat Purchase Behavior"
          ]
        },
        title: {
          text: 'Repeat Purchase Behavior',
          align: 'left',
          style: { "font-family": "Gill sans", "font-size": "18px" }
        },

        subtitle: {
          text: 'This measures the stickiness of the product.',
          align: 'left',
          style: { "font-family": "Gill sans", "font-size": "14px" }
        },
        "yAxis": {
          "title": {
            "text": "% of Customers"
          },
          "type": "linear",
          "min": 0,
          "max": 100
        },
        "credits": {
          "enabled": true,
          "text": [
            "Source: R E T I N A"
          ]
        },
        "exporting": {
          "enabled": true,
          "buttons": {
            "contextButton": {
              "menuItems": [
                "viewFullscreen",
                "downloadPNG",
                "downloadPDF",
                "separator",
                "downloadCSV"
              ]
            }
          }
        },
        "plotOptions": {
          "series": {
            "color": '#4B4BE6',
            "label": {
              "enabled": false
            },
            "turboThreshold": 0,
            "showInLegend": true
          },
          "treemap": {
            "layoutAlgorithm": "squarified"
          },
          "scatter": {
            "marker": {
              "symbol": "circle"
            }
          },
          "line": {
            "dataLabels": {
              "enabled": true
            }
          }
        },
        "series": [
          {
            "name": "Historical",
            "data": [
              {
                "num_orders": 1,
                "n": 34447,
                "pct": 34.2,
                "high": 34.2,
                "low": 0,
                "type": "Historical",
                "x": 1,
                "name": 34.2
              },
              {
                "num_orders": 2,
                "n": 18323,
                "pct": 18.2,
                "high": 52.4,
                "low": 34.2,
                "type": "Historical",
                "x": 2,
                "name": 18.2
              },
              {
                "num_orders": 3,
                "n": 11023,
                "pct": 11,
                "high": 63.4,
                "low": 52.4,
                "type": "Historical",
                "x": 3,
                "name": 11
              },
              {
                "num_orders": 4,
                "n": 8089,
                "pct": 8,
                "high": 71.4,
                "low": 63.4,
                "type": "Historical",
                "x": 4,
                "name": 8
              },
              {
                "num_orders": 5,
                "n": 6029,
                "pct": 6,
                "high": 77.4,
                "low": 71.4,
                "type": "Historical",
                "x": 5,
                "name": 6
              },
              {
                "num_orders": 6,
                "n": 4723,
                "pct": 4.7,
                "high": 82.1,
                "low": 77.4,
                "type": "Historical",
                "x": 6,
                "name": 4.7
              },
              {
                "num_orders": 7,
                "n": 3811,
                "pct": 3.8,
                "high": 85.9,
                "low": 82.1,
                "type": "Historical",
                "x": 7,
                "name": 3.8
              },
              {
                "num_orders": 8,
                "n": 2679,
                "pct": 2.7,
                "high": 88.6,
                "low": 85.9,
                "type": "Historical",
                "x": 8,
                "name": 2.7
              },
              {
                "num_orders": 9,
                "n": 2336,
                "pct": 2.3,
                "high": 90.9,
                "low": 88.6,
                "type": "Historical",
                "x": 9,
                "name": 2.3
              },
              {
                "num_orders": 10,
                "n": 9171,
                "pct": 9.1,
                "high": 100,
                "low": 90.9,
                "type": "Historical",
                "x": 10,
                "name": 9.1
              }
            ],
            "type": "columnrange",
            "dataLabels": {
              "enabled": false,
              "format": "{point.pct}%"
            }
          },
          {
            "name": "Historical",

            "data": [
              {
                "num_orders": 1,
                "n": 34447,
                "pct": 34.2,
                "high": 34.2,
                "low": 0,
                "type": "Historical",
                "x": 1,
                "y": 34.2
              },
              {
                "num_orders": 2,
                "n": 18323,
                "pct": 18.2,
                "high": 52.4,
                "low": 34.2,
                "type": "Historical",
                "x": 2,
                "y": 52.4
              },
              {
                "num_orders": 3,
                "n": 11023,
                "pct": 11,
                "high": 63.4,
                "low": 52.4,
                "type": "Historical",
                "x": 3,
                "y": 63.4
              },
              {
                "num_orders": 4,
                "n": 8089,
                "pct": 8,
                "high": 71.4,
                "low": 63.4,
                "type": "Historical",
                "x": 4,
                "y": 71.4
              },
              {
                "num_orders": 5,
                "n": 6029,
                "pct": 6,
                "high": 77.4,
                "low": 71.4,
                "type": "Historical",
                "x": 5,
                "y": 77.4
              },
              {
                "num_orders": 6,
                "n": 4723,
                "pct": 4.7,
                "high": 82.1,
                "low": 77.4,
                "type": "Historical",
                "x": 6,
                "y": 82.1
              },
              {
                "num_orders": 7,
                "n": 3811,
                "pct": 3.8,
                "high": 85.9,
                "low": 82.1,
                "type": "Historical",
                "x": 7,
                "y": 85.9
              },
              {
                "num_orders": 8,
                "n": 2679,
                "pct": 2.7,
                "high": 88.6,
                "low": 85.9,
                "type": "Historical",
                "x": 8,
                "y": 88.6
              },
              {
                "num_orders": 9,
                "n": 2336,
                "pct": 2.3,
                "high": 90.9,
                "low": 88.6,
                "type": "Historical",
                "x": 9,
                "y": 90.9
              },
              {
                "num_orders": 10,
                "n": 9171,
                "pct": 9.1,
                "high": 100,
                "low": 90.9,
                "type": "Historical",
                "x": 10,
                "y": 100
              }
            ],
            "type": "line",
            "lineWidth": 0,
            "dataLabels": {
              "enabled": true,
              "format": "{point.pct}%"
            }
          }
        ],
        "xAxis": {
          "type": "linear",
          "title": {
            "text": "Number of Transactions"
          }
        },
        // "subtitle": {
        //   "text": "This measures the stickiness of the product. ",
        //   "align": "left"
        // },
        "boost": {
          "enabled": true,
          "useGPUTranslations": true,
          "usePreAllocated": true
        },
        "chart": {
          "zoomType": "xy"
        },
        "legend": {
          "enabled": false
        },
        "tooltip": {
          "crosshairs": true,
          "shared": false,
          "useHTML": true,
          "headerFormat": "",
          "pointFormat": "Repeat Rate: {point.n} customers purchase {point.x} times"
        }
      });
    }

  },
};
</script>

<style>
.highcharts-figure, .highcharts-data-table table {
   width: 100%;
    margin: 1em auto;
}

.highcharts-data-table table {
	font-family: Verdana, sans-serif;
	border-collapse: collapse;
	border: 1px solid #EBEBEB;
	margin: 10px auto;
	text-align: center;
	width: 100%;

}
.highcharts-data-table caption {
    padding: 1em 0;
    font-size: 1.2em;
    color: #555;
}
.highcharts-data-table th {
	font-weight: 600;
    padding: 0.5em;
}
.highcharts-data-table td, .highcharts-data-table th, .highcharts-data-table caption {
    padding: 0.5em;
}
.highcharts-data-table thead tr, .highcharts-data-table tr:nth-child(even) {
    background: #f8f8f8;
}
.highcharts-data-table tr:hover {
    background: #f1f7ff;
}
</style>
