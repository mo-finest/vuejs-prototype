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
      <div id="RevenueRetention"></div>
    </figure>
  </div>
</template>

<script>
// import Highcharts from "highcharts";
export default {
  name: "RevenueRetention",
  data() {
    return {

    };
  },
  mounted() {
    this.waterFallChart()
  },
  methods: {
    waterFallChart() {
      window.Highcharts.chart('RevenueRetention', {
        title: {
          text: "Revenue Retention by cohort",
          align: "left",
          style: { "font-family": "Gill sans", "font-size": "18px" }
        },
        "yAxis": {
          "title": {
            "text": "Percent Retention"
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
        "plotOptions": {
          "series": {
            "label": {
              "enabled": false
            },
            "turboThreshold": 0,
            "showInLegend": true,
            "boderWidth": 0,
            "dataLabels": {
              "enabled": true,
              "format": "{point.percent}%"
            }
          },
          "treemap": {
            "layoutAlgorithm": "squarified"
          },
          "scatter": {
            "marker": {
              "symbol": "circle"
            }
          }
        },
        "series": [
          {
            "name": "2018",
            "data": [
              {
                "cohort_date": "2018-01-01",
                "order_month": "2018-01-01",
                "value": 2266495.63,
                "percent": 100,
                "period": 0,
                "cohort": "2018",
                "x": 0,
                "y": 100
              },
              {
                "cohort_date": "2018-01-01",
                "order_month": "2019-01-01",
                "value": 1929216.16,
                "percent": 85.1,
                "period": 1,
                "cohort": "2018",
                "x": 1,
                "y": 85.1
              },
              {
                "cohort_date": "2018-01-01",
                "order_month": "2020-01-01",
                "value": 1279815.88,
                "percent": 56.5,
                "period": 2,
                "cohort": "2018",
                "x": 2,
                "y": 56.5
              },
              {
                "cohort_date": "2018-01-01",
                "order_month": "2021-01-01",
                "value": 240159.45,
                "percent": 10.6,
                "period": 3,
                "cohort": "2018",
                "x": 3,
                "y": 10.6
              }
            ],
            "type": "spline"
          },
          {
            "name": "2019",
            "data": [
              {
                "cohort_date": "2019-01-01",
                "order_month": "2019-01-01",
                "value": 1357207.15,
                "percent": 100,
                "period": 0,
                "cohort": "2019",
                "x": 0,
                "y": 100
              },
              {
                "cohort_date": "2019-01-01",
                "order_month": "2020-01-01",
                "value": 626448.99,
                "percent": 46.2,
                "period": 1,
                "cohort": "2019",
                "x": 1,
                "y": 46.2
              },
              {
                "cohort_date": "2019-01-01",
                "order_month": "2021-01-01",
                "value": 102016.96,
                "percent": 7.5,
                "period": 2,
                "cohort": "2019",
                "x": 2,
                "y": 7.5
              }
            ],
            "type": "spline"
          },
          {
            "name": "2020",
            "data": [
              {
                "cohort_date": "2020-01-01",
                "order_month": "2020-01-01",
                "value": 1290751.78,
                "percent": 100,
                "period": 0,
                "cohort": "2020",
                "x": 0,
                "y": 100
              },
              {
                "cohort_date": "2020-01-01",
                "order_month": "2021-01-01",
                "value": 149330.2,
                "percent": 11.6,
                "period": 1,
                "cohort": "2020",
                "x": 1,
                "y": 11.6
              }
            ],
            "type": "spline"
          },
          {
            "name": "2021",
            "data": [
              {
                "cohort_date": "2021-01-01",
                "order_month": "2021-01-01",
                "value": 104706.09,
                "percent": 100,
                "period": 0,
                "cohort": "2021",
                "x": 0,
                "y": 100
              }
            ],
            "type": "spline"
          }
        ],
        "xAxis": {
          "type": "linear",
          "title": {
            "text": "Years Since Joining"
          }
        },
        "chart": {
          "zoomType": "xy"
        },
        "boost": {
          "useGPUTranslations": true,
          "usePreAllocated": true
        }
      });

    }

  },
};
</script>

<style>



</style>
