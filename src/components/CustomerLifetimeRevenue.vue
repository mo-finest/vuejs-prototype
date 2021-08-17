<template>
  <div class="bg-white rounded shadow p-1 py-5 px-4">
    <div class="font-gillSans text-left pl-10 flex space-x-4">
      <div class="pt-1">
        <div class="rounded-100 w-8 h-8 grid place-items-center bg-1b text-white">
          <i class="far fa-chart-line text-xl"></i>
        </div>
      </div>
      <div>
        <span class="text-2xl">Bottoms Up Profit Predictive CLV Metrics</span>
        <br />
        <span class="text-xl">Simple Description</span>
      </div>
    </div>
    <figure class="highcharts-figure">
      <div id="CustomerLifetimeRevenue"></div>
    </figure>
  </div>
</template>

<script>
// import Highcharts from "highcharts";
export default {
  name: "CustomerLifetimeRevenue",
  data() {
    return {

    };
  },
  mounted() {
    this.waterFallChart()
  },
  methods: {
    waterFallChart() {
      window.Highcharts.chart('CustomerLifetimeRevenue', {
        title: {
          text: 'Sales / Customer Concentration Chart',
          align: 'left',
          style: { "font-family": "Gill sans", "font-size": "18px" }
        },
        // "color": '#4B4BE6',            "color": '#BD10E0',
        subtitle: {
          text: 'Lifetime Revenue (5 Yr) & Revenue concentration plots, 20% of customer account for 55.4% of LTV and 59% of Revenue',
          align: 'left',
          style: { "font-family": "Gill sans", "font-size": "14px" }
        },

        "yAxis": {
          "title": {
            "text": " "
          },
          "type": "linear"
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
        plotOptions: {
          spline: {
            lineWidth: 4,
            states: {
              hover: {
                lineWidth: 5
              }
            },
            marker: {
              enabled: false
            },
          }
        },
        // "plotOptions": {
        //   "series": {
        //     "label": {
        //       "enabled": false
        //     },
        //     "turboThreshold": 0,
        //     "showInLegend": true
        //   },
        //   "treemap": {
        //     "layoutAlgorithm": "squarified"
        //   },
        //   // "scatter": {
        //   //   "marker": {
        //   //     "symbol": "circle"
        //   //   }
        //   // },
        //   "spline": {
        //     "dataLabels": {
        //       "enabled": false,
        //       // "formatter": "function () {\n          // if last point\n          if(this.point === this.series.data[this.series.data.length-1]) {\n            return this.series.name + \" = $\" + this.y;\n          }\n        }"
        //     }
        //   }
        // },
        "series": [
          {
            "name": "mean",
            "color": '#4B4BE6',
            "data": [
              {
                "mon_year": "2018-05-01",
                "Statistic": "mean",
                "pLTV": 113,
                "num": 1.5,
                "x": 1525132800000,
                "y": 113
              },
              {
                "mon_year": "2018-06-01",
                "Statistic": "mean",
                "pLTV": 101.5,
                "num": 3.5,
                "x": 1527811200000,
                "y": 101.5
              },
              {
                "mon_year": "2018-07-01",
                "Statistic": "mean",
                "pLTV": 86.1,
                "num": 5.5,
                "x": 1530403200000,
                "y": 86.1
              },
              {
                "mon_year": "2018-08-01",
                "Statistic": "mean",
                "pLTV": 74.2,
                "num": 7.5,
                "x": 1533081600000,
                "y": 74.2
              },
              {
                "mon_year": "2018-09-01",
                "Statistic": "mean",
                "pLTV": 72.3,
                "num": 9.5,
                "x": 1535760000000,
                "y": 72.3
              },
              {
                "mon_year": "2018-10-01",
                "Statistic": "mean",
                "pLTV": 67.5,
                "num": 11.5,
                "x": 1538352000000,
                "y": 67.5
              },
              {
                "mon_year": "2018-11-01",
                "Statistic": "mean",
                "pLTV": 63.1,
                "num": 13.5,
                "x": 1541030400000,
                "y": 63.1
              },
              {
                "mon_year": "2018-12-01",
                "Statistic": "mean",
                "pLTV": 64.1,
                "num": 15.5,
                "x": 1543622400000,
                "y": 64.1
              },
              {
                "mon_year": "2019-01-01",
                "Statistic": "mean",
                "pLTV": 66.8,
                "num": 17.5,
                "x": 1546300800000,
                "y": 66.8
              },
              {
                "mon_year": "2019-02-01",
                "Statistic": "mean",
                "pLTV": 63.2,
                "num": 19.5,
                "x": 1548979200000,
                "y": 63.2
              },
              {
                "mon_year": "2019-03-01",
                "Statistic": "mean",
                "pLTV": 62.6,
                "num": 21.5,
                "x": 1551398400000,
                "y": 62.6
              },
              {
                "mon_year": "2019-04-01",
                "Statistic": "mean",
                "pLTV": 60.1,
                "num": 23.5,
                "x": 1554076800000,
                "y": 60.1
              },
              {
                "mon_year": "2019-05-01",
                "Statistic": "mean",
                "pLTV": 60.3,
                "num": 25.5,
                "x": 1556668800000,
                "y": 60.3
              },
              {
                "mon_year": "2019-06-01",
                "Statistic": "mean",
                "pLTV": 61.6,
                "num": 27.5,
                "x": 1559347200000,
                "y": 61.6
              },
              {
                "mon_year": "2019-07-01",
                "Statistic": "mean",
                "pLTV": 64.5,
                "num": 29.5,
                "x": 1561939200000,
                "y": 64.5
              },
              {
                "mon_year": "2019-08-01",
                "Statistic": "mean",
                "pLTV": 59.8,
                "num": 31.5,
                "x": 1564617600000,
                "y": 59.8
              },
              {
                "mon_year": "2019-09-01",
                "Statistic": "mean",
                "pLTV": 59.7,
                "num": 33.5,
                "x": 1567296000000,
                "y": 59.7
              },
              {
                "mon_year": "2019-10-01",
                "Statistic": "mean",
                "pLTV": 61.6,
                "num": 35.5,
                "x": 1569888000000,
                "y": 61.6
              },
              {
                "mon_year": "2019-11-01",
                "Statistic": "mean",
                "pLTV": 65,
                "num": 37.5,
                "x": 1572566400000,
                "y": 65
              },
              {
                "mon_year": "2019-12-01",
                "Statistic": "mean",
                "pLTV": 61.6,
                "num": 39.5,
                "x": 1575158400000,
                "y": 61.6
              },
              {
                "mon_year": "2020-01-01",
                "Statistic": "mean",
                "pLTV": 64.2,
                "num": 41.5,
                "x": 1577836800000,
                "y": 64.2
              },
              {
                "mon_year": "2020-02-01",
                "Statistic": "mean",
                "pLTV": 66.5,
                "num": 43.5,
                "x": 1580515200000,
                "y": 66.5
              },
              {
                "mon_year": "2020-03-01",
                "Statistic": "mean",
                "pLTV": 68.7,
                "num": 45.5,
                "x": 1583020800000,
                "y": 68.7
              },
              {
                "mon_year": "2020-04-01",
                "Statistic": "mean",
                "pLTV": 71.4,
                "num": 47.5,
                "x": 1585699200000,
                "y": 71.4
              },
              {
                "mon_year": "2020-05-01",
                "Statistic": "mean",
                "pLTV": 75.4,
                "num": 49.5,
                "x": 1588291200000,
                "y": 75.4
              },
              {
                "mon_year": "2020-06-01",
                "Statistic": "mean",
                "pLTV": 72.8,
                "num": 51.5,
                "x": 1590969600000,
                "y": 72.8
              },
              {
                "mon_year": "2020-07-01",
                "Statistic": "mean",
                "pLTV": 240.9,
                "num": 53.5,
                "x": 1593561600000,
                "y": 240.9
              },
              {
                "mon_year": "2020-08-01",
                "Statistic": "mean",
                "pLTV": 76.2,
                "num": 55.5,
                "x": 1596240000000,
                "y": 76.2
              },
              {
                "mon_year": "2020-09-01",
                "Statistic": "mean",
                "pLTV": 59.5,
                "num": 57.5,
                "x": 1598918400000,
                "y": 59.5
              },
              {
                "mon_year": "2020-10-01",
                "Statistic": "mean",
                "pLTV": 69.8,
                "num": 59.5,
                "x": 1601510400000,
                "y": 69.8
              },
              {
                "mon_year": "2020-11-01",
                "Statistic": "mean",
                "pLTV": 74.2,
                "num": 61.5,
                "x": 1604188800000,
                "y": 74.2
              },
              {
                "mon_year": "2020-12-01",
                "Statistic": "mean",
                "pLTV": 77.7,
                "num": 63.5,
                "x": 1606780800000,
                "y": 77.7
              },
              {
                "mon_year": "2021-01-01",
                "Statistic": "mean",
                "pLTV": 76,
                "num": 65.5,
                "x": 1609459200000,
                "y": 76
              },
              {
                "mon_year": "2021-02-01",
                "Statistic": "mean",
                "pLTV": 80.1,
                "num": 67.5,
                "x": 1612137600000,
                "y": 80.1
              },
              {
                "mon_year": "2021-03-01",
                "Statistic": "mean",
                "pLTV": 79.9,
                "num": 69.5,
                "x": 1614556800000,
                "y": 79.9
              },
              {
                "mon_year": "2021-04-01",
                "Statistic": "mean",
                "pLTV": 75.3,
                "num": 71.5,
                "x": 1617235200000,
                "y": 75.3
              }
            ],
            "type": "spline"
          },
          {
            "name": "median",
            "color": '#BD10E0',
            "data": [
              {
                "mon_year": "2018-05-01",
                "Statistic": "median",
                "pLTV": 71.6,
                "num": 1.5,
                "x": 1525132800000,
                "y": 71.6
              },
              {
                "mon_year": "2018-06-01",
                "Statistic": "median",
                "pLTV": 66,
                "num": 3.5,
                "x": 1527811200000,
                "y": 66
              },
              {
                "mon_year": "2018-07-01",
                "Statistic": "median",
                "pLTV": 56.2,
                "num": 5.5,
                "x": 1530403200000,
                "y": 56.2
              },
              {
                "mon_year": "2018-08-01",
                "Statistic": "median",
                "pLTV": 46.2,
                "num": 7.5,
                "x": 1533081600000,
                "y": 46.2
              },
              {
                "mon_year": "2018-09-01",
                "Statistic": "median",
                "pLTV": 44.3,
                "num": 9.5,
                "x": 1535760000000,
                "y": 44.3
              },
              {
                "mon_year": "2018-10-01",
                "Statistic": "median",
                "pLTV": 40.8,
                "num": 11.5,
                "x": 1538352000000,
                "y": 40.8
              },
              {
                "mon_year": "2018-11-01",
                "Statistic": "median",
                "pLTV": 35.7,
                "num": 13.5,
                "x": 1541030400000,
                "y": 35.7
              },
              {
                "mon_year": "2018-12-01",
                "Statistic": "median",
                "pLTV": 36.9,
                "num": 15.5,
                "x": 1543622400000,
                "y": 36.9
              },
              {
                "mon_year": "2019-01-01",
                "Statistic": "median",
                "pLTV": 34.9,
                "num": 17.5,
                "x": 1546300800000,
                "y": 34.9
              },
              {
                "mon_year": "2019-02-01",
                "Statistic": "median",
                "pLTV": 33,
                "num": 19.5,
                "x": 1548979200000,
                "y": 33
              },
              {
                "mon_year": "2019-03-01",
                "Statistic": "median",
                "pLTV": 33.6,
                "num": 21.5,
                "x": 1551398400000,
                "y": 33.6
              },
              {
                "mon_year": "2019-04-01",
                "Statistic": "median",
                "pLTV": 32,
                "num": 23.5,
                "x": 1554076800000,
                "y": 32
              },
              {
                "mon_year": "2019-05-01",
                "Statistic": "median",
                "pLTV": 34.2,
                "num": 25.5,
                "x": 1556668800000,
                "y": 34.2
              },
              {
                "mon_year": "2019-06-01",
                "Statistic": "median",
                "pLTV": 34.3,
                "num": 27.5,
                "x": 1559347200000,
                "y": 34.3
              },
              {
                "mon_year": "2019-07-01",
                "Statistic": "median",
                "pLTV": 34.5,
                "num": 29.5,
                "x": 1561939200000,
                "y": 34.5
              },
              {
                "mon_year": "2019-08-01",
                "Statistic": "median",
                "pLTV": 33.7,
                "num": 31.5,
                "x": 1564617600000,
                "y": 33.7
              },
              {
                "mon_year": "2019-09-01",
                "Statistic": "median",
                "pLTV": 34.2,
                "num": 33.5,
                "x": 1567296000000,
                "y": 34.2
              },
              {
                "mon_year": "2019-10-01",
                "Statistic": "median",
                "pLTV": 33.9,
                "num": 35.5,
                "x": 1569888000000,
                "y": 33.9
              },
              {
                "mon_year": "2019-11-01",
                "Statistic": "median",
                "pLTV": 38.5,
                "num": 37.5,
                "x": 1572566400000,
                "y": 38.5
              },
              {
                "mon_year": "2019-12-01",
                "Statistic": "median",
                "pLTV": 38.9,
                "num": 39.5,
                "x": 1575158400000,
                "y": 38.9
              },
              {
                "mon_year": "2020-01-01",
                "Statistic": "median",
                "pLTV": 39,
                "num": 41.5,
                "x": 1577836800000,
                "y": 39
              },
              {
                "mon_year": "2020-02-01",
                "Statistic": "median",
                "pLTV": 40.1,
                "num": 43.5,
                "x": 1580515200000,
                "y": 40.1
              },
              {
                "mon_year": "2020-03-01",
                "Statistic": "median",
                "pLTV": 44.2,
                "num": 45.5,
                "x": 1583020800000,
                "y": 44.2
              },
              {
                "mon_year": "2020-04-01",
                "Statistic": "median",
                "pLTV": 47.3,
                "num": 47.5,
                "x": 1585699200000,
                "y": 47.3
              },
              {
                "mon_year": "2020-05-01",
                "Statistic": "median",
                "pLTV": 45.5,
                "num": 49.5,
                "x": 1588291200000,
                "y": 45.5
              },
              {
                "mon_year": "2020-06-01",
                "Statistic": "median",
                "pLTV": 49.3,
                "num": 51.5,
                "x": 1590969600000,
                "y": 49.3
              },
              {
                "mon_year": "2020-07-01",
                "Statistic": "median",
                "pLTV": 56.3,
                "num": 53.5,
                "x": 1593561600000,
                "y": 56.3
              },
              {
                "mon_year": "2020-08-01",
                "Statistic": "median",
                "pLTV": 56.5,
                "num": 55.5,
                "x": 1596240000000,
                "y": 56.5
              },
              {
                "mon_year": "2020-09-01",
                "Statistic": "median",
                "pLTV": 37.7,
                "num": 57.5,
                "x": 1598918400000,
                "y": 37.7
              },
              {
                "mon_year": "2020-10-01",
                "Statistic": "median",
                "pLTV": 51.7,
                "num": 59.5,
                "x": 1601510400000,
                "y": 51.7
              },
              {
                "mon_year": "2020-11-01",
                "Statistic": "median",
                "pLTV": 58.1,
                "num": 61.5,
                "x": 1604188800000,
                "y": 58.1
              },
              {
                "mon_year": "2020-12-01",
                "Statistic": "median",
                "pLTV": 62.3,
                "num": 63.5,
                "x": 1606780800000,
                "y": 62.3
              },
              {
                "mon_year": "2021-01-01",
                "Statistic": "median",
                "pLTV": 65.5,
                "num": 65.5,
                "x": 1609459200000,
                "y": 65.5
              },
              {
                "mon_year": "2021-02-01",
                "Statistic": "median",
                "pLTV": 75,
                "num": 67.5,
                "x": 1612137600000,
                "y": 75
              },
              {
                "mon_year": "2021-03-01",
                "Statistic": "median",
                "pLTV": 75.1,
                "num": 69.5,
                "x": 1614556800000,
                "y": 75.1
              },
              {
                "mon_year": "2021-04-01",
                "Statistic": "median",
                "pLTV": 61.5,
                "num": 71.5,
                "x": 1617235200000,
                "y": 61.5
              }
            ],
            "type": "spline"
          }
        ],
        "xAxis": {
          "type": "datetime",
          "title": {
            "text": " "
          }
        },
        "boost": {
          "enabled": true,
          "useGPUTranslations": true,
          "usePreAllocated": true
        },
        "chart": {
          "zoomType": "xy"
        }

      });

    }

  },
};
</script>

<style>



</style>
