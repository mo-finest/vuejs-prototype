<template>
  <div class="bg-white rounded shadow p-1 py-5 px-4">
    <div class="font-gillSans text-left pl-10 flex space-x-4">
      <div class="pt-1">
        <div class="rounded-100 w-8 h-8 grid place-items-center bg-1b text-white">
          <i class="far fa-chart-line text-xl"></i>
        </div>
      </div>
      <div>
        <span class="text-2xl">SalesConcentration</span>
        <br />
        <span class="text-xl">Simple Description</span>
      </div>
    </div>
    <figure class="highcharts-figure">
      <div id="salesConcentration"></div>
    </figure>
  </div>
</template>

<script>
// import Highcharts from "highcharts";
export default {
  name: "salesConcentration",
  data() {
    return {

    };
  },
  mounted() {
    this.waterFallChart()
  },
  methods: {
    waterFallChart() {
      window.Highcharts.chart('salesConcentration', {
        title: {
          text: 'Sales / Customer Concentration Chart',
          align: 'left',
          style: { "font-family": "Gill sans", "font-size": "18px" }
        },

        subtitle: {
          text: 'Lifetime Revenue (5 Yr) & Revenue concentration plots, 20% of customer account for 55.4% of LTV and 59% of Revenue',
          align: 'left',
          style: { "font-family": "Gill sans", "font-size": "14px" }
        },

        "yAxis": {
          "title": {
            "text": "% of Value/Revenue"
          },
          "type": "linear",
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
          }
        },
        "series": [
          {
            "name": "LTV",
            "color": '#4B4BE6',
            "data": [
              {
                "cumpct_pct": 6.2,
                "cumpct_cust": 0.1,
                "metric_type": "LTV",
                "x": 0.1,
                "y": 6.2
              },
              {
                "cumpct_pct": 8.1,
                "cumpct_cust": 0.4,
                "metric_type": "LTV",
                "x": 0.4,
                "y": 8.1
              },
              {
                "cumpct_pct": 8.3,
                "cumpct_cust": 0.4,
                "metric_type": "LTV",
                "x": 0.4,
                "y": 8.3
              },
              {
                "cumpct_pct": 8.9,
                "cumpct_cust": 0.5,
                "metric_type": "LTV",
                "x": 0.5,
                "y": 8.9
              },
              {
                "cumpct_pct": 9.6,
                "cumpct_cust": 0.6,
                "metric_type": "LTV",
                "x": 0.6,
                "y": 9.6
              },
              {
                "cumpct_pct": 10.3,
                "cumpct_cust": 0.7,
                "metric_type": "LTV",
                "x": 0.7,
                "y": 10.3
              },
              {
                "cumpct_pct": 10.5,
                "cumpct_cust": 0.7,
                "metric_type": "LTV",
                "x": 0.7,
                "y": 10.5
              },
              {
                "cumpct_pct": 11,
                "cumpct_cust": 0.8,
                "metric_type": "LTV",
                "x": 0.8,
                "y": 11
              },
              {
                "cumpct_pct": 11,
                "cumpct_cust": 0.8,
                "metric_type": "LTV",
                "x": 0.8,
                "y": 11
              },
              {
                "cumpct_pct": 11.1,
                "cumpct_cust": 0.9,
                "metric_type": "LTV",
                "x": 0.9,
                "y": 11.1
              },
              {
                "cumpct_pct": 11.4,
                "cumpct_cust": 0.9,
                "metric_type": "LTV",
                "x": 0.9,
                "y": 11.4
              },
              {
                "cumpct_pct": 12.5,
                "cumpct_cust": 1.1,
                "metric_type": "LTV",
                "x": 1.1,
                "y": 12.5
              },
              {
                "cumpct_pct": 13,
                "cumpct_cust": 1.2,
                "metric_type": "LTV",
                "x": 1.2,
                "y": 13
              },
              {
                "cumpct_pct": 13.4,
                "cumpct_cust": 1.3,
                "metric_type": "LTV",
                "x": 1.3,
                "y": 13.4
              },
              {
                "cumpct_pct": 13.7,
                "cumpct_cust": 1.4,
                "metric_type": "LTV",
                "x": 1.4,
                "y": 13.7
              },
              {
                "cumpct_pct": 13.7,
                "cumpct_cust": 1.4,
                "metric_type": "LTV",
                "x": 1.4,
                "y": 13.7
              },
              {
                "cumpct_pct": 14.5,
                "cumpct_cust": 1.6,
                "metric_type": "LTV",
                "x": 1.6,
                "y": 14.5
              },
              {
                "cumpct_pct": 14.8,
                "cumpct_cust": 1.7,
                "metric_type": "LTV",
                "x": 1.7,
                "y": 14.8
              },
              {
                "cumpct_pct": 15.1,
                "cumpct_cust": 1.7,
                "metric_type": "LTV",
                "x": 1.7,
                "y": 15.1
              },
              {
                "cumpct_pct": 15.1,
                "cumpct_cust": 1.7,
                "metric_type": "LTV",
                "x": 1.7,
                "y": 15.1
              },
              {
                "cumpct_pct": 15.2,
                "cumpct_cust": 1.8,
                "metric_type": "LTV",
                "x": 1.8,
                "y": 15.2
              },
              {
                "cumpct_pct": 15.3,
                "cumpct_cust": 1.8,
                "metric_type": "LTV",
                "x": 1.8,
                "y": 15.3
              },
              {
                "cumpct_pct": 15.9,
                "cumpct_cust": 1.9,
                "metric_type": "LTV",
                "x": 1.9,
                "y": 15.9
              },
              {
                "cumpct_pct": 16.1,
                "cumpct_cust": 2,
                "metric_type": "LTV",
                "x": 2,
                "y": 16.1
              },
              {
                "cumpct_pct": 16.9,
                "cumpct_cust": 2.2,
                "metric_type": "LTV",
                "x": 2.2,
                "y": 16.9
              },
              {
                "cumpct_pct": 17.2,
                "cumpct_cust": 2.3,
                "metric_type": "LTV",
                "x": 2.3,
                "y": 17.2
              },
              {
                "cumpct_pct": 17.3,
                "cumpct_cust": 2.3,
                "metric_type": "LTV",
                "x": 2.3,
                "y": 17.3
              },
              {
                "cumpct_pct": 17.4,
                "cumpct_cust": 2.3,
                "metric_type": "LTV",
                "x": 2.3,
                "y": 17.4
              },
              {
                "cumpct_pct": 18,
                "cumpct_cust": 2.5,
                "metric_type": "LTV",
                "x": 2.5,
                "y": 18
              },
              {
                "cumpct_pct": 18.3,
                "cumpct_cust": 2.6,
                "metric_type": "LTV",
                "x": 2.6,
                "y": 18.3
              },
              {
                "cumpct_pct": 18.9,
                "cumpct_cust": 2.7,
                "metric_type": "LTV",
                "x": 2.7,
                "y": 18.9
              },
              {
                "cumpct_pct": 19.5,
                "cumpct_cust": 2.9,
                "metric_type": "LTV",
                "x": 2.9,
                "y": 19.5
              },
              {
                "cumpct_pct": 19.6,
                "cumpct_cust": 2.9,
                "metric_type": "LTV",
                "x": 2.9,
                "y": 19.6
              },
              {
                "cumpct_pct": 19.8,
                "cumpct_cust": 3,
                "metric_type": "LTV",
                "x": 3,
                "y": 19.8
              },
              {
                "cumpct_pct": 20.2,
                "cumpct_cust": 3.1,
                "metric_type": "LTV",
                "x": 3.1,
                "y": 20.2
              },
              {
                "cumpct_pct": 20.4,
                "cumpct_cust": 3.2,
                "metric_type": "LTV",
                "x": 3.2,
                "y": 20.4
              },
              {
                "cumpct_pct": 20.8,
                "cumpct_cust": 3.3,
                "metric_type": "LTV",
                "x": 3.3,
                "y": 20.8
              },
              {
                "cumpct_pct": 21,
                "cumpct_cust": 3.4,
                "metric_type": "LTV",
                "x": 3.4,
                "y": 21
              },
              {
                "cumpct_pct": 21.1,
                "cumpct_cust": 3.4,
                "metric_type": "LTV",
                "x": 3.4,
                "y": 21.1
              },
              {
                "cumpct_pct": 21.2,
                "cumpct_cust": 3.4,
                "metric_type": "LTV",
                "x": 3.4,
                "y": 21.2
              },
              {
                "cumpct_pct": 21.2,
                "cumpct_cust": 3.4,
                "metric_type": "LTV",
                "x": 3.4,
                "y": 21.2
              },
              {
                "cumpct_pct": 21.5,
                "cumpct_cust": 3.5,
                "metric_type": "LTV",
                "x": 3.5,
                "y": 21.5
              },
              {
                "cumpct_pct": 21.5,
                "cumpct_cust": 3.5,
                "metric_type": "LTV",
                "x": 3.5,
                "y": 21.5
              },
              {
                "cumpct_pct": 21.9,
                "cumpct_cust": 3.7,
                "metric_type": "LTV",
                "x": 3.7,
                "y": 21.9
              },
              {
                "cumpct_pct": 22.5,
                "cumpct_cust": 3.9,
                "metric_type": "LTV",
                "x": 3.9,
                "y": 22.5
              },
              {
                "cumpct_pct": 22.6,
                "cumpct_cust": 3.9,
                "metric_type": "LTV",
                "x": 3.9,
                "y": 22.6
              },
              {
                "cumpct_pct": 23.1,
                "cumpct_cust": 4,
                "metric_type": "LTV",
                "x": 4,
                "y": 23.1
              },
              {
                "cumpct_pct": 23.4,
                "cumpct_cust": 4.1,
                "metric_type": "LTV",
                "x": 4.1,
                "y": 23.4
              },
              {
                "cumpct_pct": 24,
                "cumpct_cust": 4.3,
                "metric_type": "LTV",
                "x": 4.3,
                "y": 24
              },
              {
                "cumpct_pct": 24.6,
                "cumpct_cust": 4.5,
                "metric_type": "LTV",
                "x": 4.5,
                "y": 24.6
              },
              {
                "cumpct_pct": 24.8,
                "cumpct_cust": 4.6,
                "metric_type": "LTV",
                "x": 4.6,
                "y": 24.8
              },
              {
                "cumpct_pct": 25.8,
                "cumpct_cust": 5,
                "metric_type": "LTV",
                "x": 5,
                "y": 25.8
              },
              {
                "cumpct_pct": 26.1,
                "cumpct_cust": 5.1,
                "metric_type": "LTV",
                "x": 5.1,
                "y": 26.1
              },
              {
                "cumpct_pct": 26.3,
                "cumpct_cust": 5.1,
                "metric_type": "LTV",
                "x": 5.1,
                "y": 26.3
              },
              {
                "cumpct_pct": 26.3,
                "cumpct_cust": 5.1,
                "metric_type": "LTV",
                "x": 5.1,
                "y": 26.3
              },
              {
                "cumpct_pct": 27,
                "cumpct_cust": 5.4,
                "metric_type": "LTV",
                "x": 5.4,
                "y": 27
              },
              {
                "cumpct_pct": 27.2,
                "cumpct_cust": 5.4,
                "metric_type": "LTV",
                "x": 5.4,
                "y": 27.2
              },
              {
                "cumpct_pct": 27.4,
                "cumpct_cust": 5.5,
                "metric_type": "LTV",
                "x": 5.5,
                "y": 27.4
              },
              {
                "cumpct_pct": 27.8,
                "cumpct_cust": 5.7,
                "metric_type": "LTV",
                "x": 5.7,
                "y": 27.8
              },
              {
                "cumpct_pct": 27.8,
                "cumpct_cust": 5.7,
                "metric_type": "LTV",
                "x": 5.7,
                "y": 27.8
              },
              {
                "cumpct_pct": 28,
                "cumpct_cust": 5.7,
                "metric_type": "LTV",
                "x": 5.7,
                "y": 28
              },
              {
                "cumpct_pct": 28,
                "cumpct_cust": 5.7,
                "metric_type": "LTV",
                "x": 5.7,
                "y": 28
              },
              {
                "cumpct_pct": 28.1,
                "cumpct_cust": 5.8,
                "metric_type": "LTV",
                "x": 5.8,
                "y": 28.1
              },
              {
                "cumpct_pct": 28.1,
                "cumpct_cust": 5.8,
                "metric_type": "LTV",
                "x": 5.8,
                "y": 28.1
              },
              {
                "cumpct_pct": 28.2,
                "cumpct_cust": 5.8,
                "metric_type": "LTV",
                "x": 5.8,
                "y": 28.2
              },
              {
                "cumpct_pct": 28.3,
                "cumpct_cust": 5.9,
                "metric_type": "LTV",
                "x": 5.9,
                "y": 28.3
              },
              {
                "cumpct_pct": 28.5,
                "cumpct_cust": 6,
                "metric_type": "LTV",
                "x": 6,
                "y": 28.5
              },
              {
                "cumpct_pct": 29.1,
                "cumpct_cust": 6.2,
                "metric_type": "LTV",
                "x": 6.2,
                "y": 29.1
              },
              {
                "cumpct_pct": 29.4,
                "cumpct_cust": 6.3,
                "metric_type": "LTV",
                "x": 6.3,
                "y": 29.4
              },
              {
                "cumpct_pct": 29.8,
                "cumpct_cust": 6.4,
                "metric_type": "LTV",
                "x": 6.4,
                "y": 29.8
              },
              {
                "cumpct_pct": 29.8,
                "cumpct_cust": 6.4,
                "metric_type": "LTV",
                "x": 6.4,
                "y": 29.8
              },
              {
                "cumpct_pct": 29.9,
                "cumpct_cust": 6.5,
                "metric_type": "LTV",
                "x": 6.5,
                "y": 29.9
              },
              {
                "cumpct_pct": 30.1,
                "cumpct_cust": 6.6,
                "metric_type": "LTV",
                "x": 6.6,
                "y": 30.1
              },
              {
                "cumpct_pct": 30.6,
                "cumpct_cust": 6.7,
                "metric_type": "LTV",
                "x": 6.7,
                "y": 30.6
              },
              {
                "cumpct_pct": 30.8,
                "cumpct_cust": 6.8,
                "metric_type": "LTV",
                "x": 6.8,
                "y": 30.8
              },
              {
                "cumpct_pct": 31.3,
                "cumpct_cust": 7,
                "metric_type": "LTV",
                "x": 7,
                "y": 31.3
              },
              {
                "cumpct_pct": 31.8,
                "cumpct_cust": 7.2,
                "metric_type": "LTV",
                "x": 7.2,
                "y": 31.8
              },
              {
                "cumpct_pct": 32.2,
                "cumpct_cust": 7.4,
                "metric_type": "LTV",
                "x": 7.4,
                "y": 32.2
              },
              {
                "cumpct_pct": 32.4,
                "cumpct_cust": 7.5,
                "metric_type": "LTV",
                "x": 7.5,
                "y": 32.4
              },
              {
                "cumpct_pct": 32.9,
                "cumpct_cust": 7.7,
                "metric_type": "LTV",
                "x": 7.7,
                "y": 32.9
              },
              {
                "cumpct_pct": 33,
                "cumpct_cust": 7.7,
                "metric_type": "LTV",
                "x": 7.7,
                "y": 33
              },
              {
                "cumpct_pct": 33.1,
                "cumpct_cust": 7.8,
                "metric_type": "LTV",
                "x": 7.8,
                "y": 33.1
              },
              {
                "cumpct_pct": 33.2,
                "cumpct_cust": 7.8,
                "metric_type": "LTV",
                "x": 7.8,
                "y": 33.2
              },
              {
                "cumpct_pct": 33.3,
                "cumpct_cust": 7.9,
                "metric_type": "LTV",
                "x": 7.9,
                "y": 33.3
              },
              {
                "cumpct_pct": 33.4,
                "cumpct_cust": 7.9,
                "metric_type": "LTV",
                "x": 7.9,
                "y": 33.4
              },
              {
                "cumpct_pct": 33.9,
                "cumpct_cust": 8.1,
                "metric_type": "LTV",
                "x": 8.1,
                "y": 33.9
              },
              {
                "cumpct_pct": 34,
                "cumpct_cust": 8.1,
                "metric_type": "LTV",
                "x": 8.1,
                "y": 34
              },
              {
                "cumpct_pct": 34.5,
                "cumpct_cust": 8.4,
                "metric_type": "LTV",
                "x": 8.4,
                "y": 34.5
              },
              {
                "cumpct_pct": 34.6,
                "cumpct_cust": 8.4,
                "metric_type": "LTV",
                "x": 8.4,
                "y": 34.6
              },
              {
                "cumpct_pct": 34.6,
                "cumpct_cust": 8.4,
                "metric_type": "LTV",
                "x": 8.4,
                "y": 34.6
              },
              {
                "cumpct_pct": 34.7,
                "cumpct_cust": 8.5,
                "metric_type": "LTV",
                "x": 8.5,
                "y": 34.7
              },
              {
                "cumpct_pct": 35.1,
                "cumpct_cust": 8.6,
                "metric_type": "LTV",
                "x": 8.6,
                "y": 35.1
              },
              {
                "cumpct_pct": 35.2,
                "cumpct_cust": 8.7,
                "metric_type": "LTV",
                "x": 8.7,
                "y": 35.2
              },
              {
                "cumpct_pct": 35.5,
                "cumpct_cust": 8.8,
                "metric_type": "LTV",
                "x": 8.8,
                "y": 35.5
              },
              {
                "cumpct_pct": 35.6,
                "cumpct_cust": 8.8,
                "metric_type": "LTV",
                "x": 8.8,
                "y": 35.6
              },
              {
                "cumpct_pct": 35.6,
                "cumpct_cust": 8.8,
                "metric_type": "LTV",
                "x": 8.8,
                "y": 35.6
              },
              {
                "cumpct_pct": 35.8,
                "cumpct_cust": 8.9,
                "metric_type": "LTV",
                "x": 8.9,
                "y": 35.8
              },
              {
                "cumpct_pct": 36.6,
                "cumpct_cust": 9.3,
                "metric_type": "LTV",
                "x": 9.3,
                "y": 36.6
              },
              {
                "cumpct_pct": 36.8,
                "cumpct_cust": 9.4,
                "metric_type": "LTV",
                "x": 9.4,
                "y": 36.8
              },
              {
                "cumpct_pct": 36.9,
                "cumpct_cust": 9.4,
                "metric_type": "LTV",
                "x": 9.4,
                "y": 36.9
              },
              {
                "cumpct_pct": 36.9,
                "cumpct_cust": 9.4,
                "metric_type": "LTV",
                "x": 9.4,
                "y": 36.9
              },
              {
                "cumpct_pct": 36.9,
                "cumpct_cust": 9.4,
                "metric_type": "LTV",
                "x": 9.4,
                "y": 36.9
              },
              {
                "cumpct_pct": 37.1,
                "cumpct_cust": 9.5,
                "metric_type": "LTV",
                "x": 9.5,
                "y": 37.1
              },
              {
                "cumpct_pct": 37.2,
                "cumpct_cust": 9.6,
                "metric_type": "LTV",
                "x": 9.6,
                "y": 37.2
              },
              {
                "cumpct_pct": 37.2,
                "cumpct_cust": 9.6,
                "metric_type": "LTV",
                "x": 9.6,
                "y": 37.2
              },
              {
                "cumpct_pct": 37.4,
                "cumpct_cust": 9.7,
                "metric_type": "LTV",
                "x": 9.7,
                "y": 37.4
              },
              {
                "cumpct_pct": 37.6,
                "cumpct_cust": 9.7,
                "metric_type": "LTV",
                "x": 9.7,
                "y": 37.6
              },
              {
                "cumpct_pct": 37.7,
                "cumpct_cust": 9.8,
                "metric_type": "LTV",
                "x": 9.8,
                "y": 37.7
              },
              {
                "cumpct_pct": 37.8,
                "cumpct_cust": 9.8,
                "metric_type": "LTV",
                "x": 9.8,
                "y": 37.8
              },
              {
                "cumpct_pct": 38,
                "cumpct_cust": 9.9,
                "metric_type": "LTV",
                "x": 9.9,
                "y": 38
              },
              {
                "cumpct_pct": 38.1,
                "cumpct_cust": 10,
                "metric_type": "LTV",
                "x": 10,
                "y": 38.1
              },
              {
                "cumpct_pct": 38.1,
                "cumpct_cust": 10,
                "metric_type": "LTV",
                "x": 10,
                "y": 38.1
              },
              {
                "cumpct_pct": 38.3,
                "cumpct_cust": 10.1,
                "metric_type": "LTV",
                "x": 10.1,
                "y": 38.3
              },
              {
                "cumpct_pct": 38.3,
                "cumpct_cust": 10.1,
                "metric_type": "LTV",
                "x": 10.1,
                "y": 38.3
              },
              {
                "cumpct_pct": 38.8,
                "cumpct_cust": 10.3,
                "metric_type": "LTV",
                "x": 10.3,
                "y": 38.8
              },
              {
                "cumpct_pct": 38.9,
                "cumpct_cust": 10.4,
                "metric_type": "LTV",
                "x": 10.4,
                "y": 38.9
              },
              {
                "cumpct_pct": 39.2,
                "cumpct_cust": 10.5,
                "metric_type": "LTV",
                "x": 10.5,
                "y": 39.2
              },
              {
                "cumpct_pct": 39.5,
                "cumpct_cust": 10.7,
                "metric_type": "LTV",
                "x": 10.7,
                "y": 39.5
              },
              {
                "cumpct_pct": 39.6,
                "cumpct_cust": 10.7,
                "metric_type": "LTV",
                "x": 10.7,
                "y": 39.6
              },
              {
                "cumpct_pct": 40,
                "cumpct_cust": 10.9,
                "metric_type": "LTV",
                "x": 10.9,
                "y": 40
              },
              {
                "cumpct_pct": 40,
                "cumpct_cust": 10.9,
                "metric_type": "LTV",
                "x": 10.9,
                "y": 40
              },
              {
                "cumpct_pct": 40.2,
                "cumpct_cust": 11,
                "metric_type": "LTV",
                "x": 11,
                "y": 40.2
              },
              {
                "cumpct_pct": 40.2,
                "cumpct_cust": 11,
                "metric_type": "LTV",
                "x": 11,
                "y": 40.2
              },
              {
                "cumpct_pct": 40.3,
                "cumpct_cust": 11.1,
                "metric_type": "LTV",
                "x": 11.1,
                "y": 40.3
              },
              {
                "cumpct_pct": 40.8,
                "cumpct_cust": 11.3,
                "metric_type": "LTV",
                "x": 11.3,
                "y": 40.8
              },
              {
                "cumpct_pct": 40.8,
                "cumpct_cust": 11.3,
                "metric_type": "LTV",
                "x": 11.3,
                "y": 40.8
              },
              {
                "cumpct_pct": 41,
                "cumpct_cust": 11.4,
                "metric_type": "LTV",
                "x": 11.4,
                "y": 41
              },
              {
                "cumpct_pct": 41.3,
                "cumpct_cust": 11.6,
                "metric_type": "LTV",
                "x": 11.6,
                "y": 41.3
              },
              {
                "cumpct_pct": 41.6,
                "cumpct_cust": 11.7,
                "metric_type": "LTV",
                "x": 11.7,
                "y": 41.6
              },
              {
                "cumpct_pct": 41.7,
                "cumpct_cust": 11.8,
                "metric_type": "LTV",
                "x": 11.8,
                "y": 41.7
              },
              {
                "cumpct_pct": 42.2,
                "cumpct_cust": 12,
                "metric_type": "LTV",
                "x": 12,
                "y": 42.2
              },
              {
                "cumpct_pct": 42.3,
                "cumpct_cust": 12.1,
                "metric_type": "LTV",
                "x": 12.1,
                "y": 42.3
              },
              {
                "cumpct_pct": 42.6,
                "cumpct_cust": 12.2,
                "metric_type": "LTV",
                "x": 12.2,
                "y": 42.6
              },
              {
                "cumpct_pct": 42.6,
                "cumpct_cust": 12.2,
                "metric_type": "LTV",
                "x": 12.2,
                "y": 42.6
              },
              {
                "cumpct_pct": 42.7,
                "cumpct_cust": 12.3,
                "metric_type": "LTV",
                "x": 12.3,
                "y": 42.7
              },
              {
                "cumpct_pct": 43.1,
                "cumpct_cust": 12.5,
                "metric_type": "LTV",
                "x": 12.5,
                "y": 43.1
              },
              {
                "cumpct_pct": 43.1,
                "cumpct_cust": 12.5,
                "metric_type": "LTV",
                "x": 12.5,
                "y": 43.1
              },
              {
                "cumpct_pct": 43.3,
                "cumpct_cust": 12.6,
                "metric_type": "LTV",
                "x": 12.6,
                "y": 43.3
              },
              {
                "cumpct_pct": 43.4,
                "cumpct_cust": 12.7,
                "metric_type": "LTV",
                "x": 12.7,
                "y": 43.4
              },
              {
                "cumpct_pct": 43.5,
                "cumpct_cust": 12.7,
                "metric_type": "LTV",
                "x": 12.7,
                "y": 43.5
              },
              {
                "cumpct_pct": 43.5,
                "cumpct_cust": 12.7,
                "metric_type": "LTV",
                "x": 12.7,
                "y": 43.5
              },
              {
                "cumpct_pct": 43.6,
                "cumpct_cust": 12.8,
                "metric_type": "LTV",
                "x": 12.8,
                "y": 43.6
              },
              {
                "cumpct_pct": 43.6,
                "cumpct_cust": 12.8,
                "metric_type": "LTV",
                "x": 12.8,
                "y": 43.6
              },
              {
                "cumpct_pct": 44.1,
                "cumpct_cust": 13,
                "metric_type": "LTV",
                "x": 13,
                "y": 44.1
              },
              {
                "cumpct_pct": 44.1,
                "cumpct_cust": 13.1,
                "metric_type": "LTV",
                "x": 13.1,
                "y": 44.1
              },
              {
                "cumpct_pct": 44.3,
                "cumpct_cust": 13.1,
                "metric_type": "LTV",
                "x": 13.1,
                "y": 44.3
              },
              {
                "cumpct_pct": 44.4,
                "cumpct_cust": 13.2,
                "metric_type": "LTV",
                "x": 13.2,
                "y": 44.4
              },
              {
                "cumpct_pct": 45,
                "cumpct_cust": 13.5,
                "metric_type": "LTV",
                "x": 13.5,
                "y": 45
              },
              {
                "cumpct_pct": 45.2,
                "cumpct_cust": 13.6,
                "metric_type": "LTV",
                "x": 13.6,
                "y": 45.2
              },
              {
                "cumpct_pct": 45.3,
                "cumpct_cust": 13.7,
                "metric_type": "LTV",
                "x": 13.7,
                "y": 45.3
              },
              {
                "cumpct_pct": 45.3,
                "cumpct_cust": 13.7,
                "metric_type": "LTV",
                "x": 13.7,
                "y": 45.3
              },
              {
                "cumpct_pct": 45.4,
                "cumpct_cust": 13.7,
                "metric_type": "LTV",
                "x": 13.7,
                "y": 45.4
              },
              {
                "cumpct_pct": 45.4,
                "cumpct_cust": 13.7,
                "metric_type": "LTV",
                "x": 13.7,
                "y": 45.4
              },
              {
                "cumpct_pct": 45.4,
                "cumpct_cust": 13.8,
                "metric_type": "LTV",
                "x": 13.8,
                "y": 45.4
              },
              {
                "cumpct_pct": 45.7,
                "cumpct_cust": 13.9,
                "metric_type": "LTV",
                "x": 13.9,
                "y": 45.7
              },
              {
                "cumpct_pct": 46,
                "cumpct_cust": 14.1,
                "metric_type": "LTV",
                "x": 14.1,
                "y": 46
              },
              {
                "cumpct_pct": 46.4,
                "cumpct_cust": 14.3,
                "metric_type": "LTV",
                "x": 14.3,
                "y": 46.4
              },
              {
                "cumpct_pct": 46.5,
                "cumpct_cust": 14.3,
                "metric_type": "LTV",
                "x": 14.3,
                "y": 46.5
              },
              {
                "cumpct_pct": 46.5,
                "cumpct_cust": 14.4,
                "metric_type": "LTV",
                "x": 14.4,
                "y": 46.5
              },
              {
                "cumpct_pct": 46.8,
                "cumpct_cust": 14.5,
                "metric_type": "LTV",
                "x": 14.5,
                "y": 46.8
              },
              {
                "cumpct_pct": 46.9,
                "cumpct_cust": 14.6,
                "metric_type": "LTV",
                "x": 14.6,
                "y": 46.9
              },
              {
                "cumpct_pct": 46.9,
                "cumpct_cust": 14.6,
                "metric_type": "LTV",
                "x": 14.6,
                "y": 46.9
              },
              {
                "cumpct_pct": 46.9,
                "cumpct_cust": 14.6,
                "metric_type": "LTV",
                "x": 14.6,
                "y": 46.9
              },
              {
                "cumpct_pct": 47.1,
                "cumpct_cust": 14.7,
                "metric_type": "LTV",
                "x": 14.7,
                "y": 47.1
              },
              {
                "cumpct_pct": 47.3,
                "cumpct_cust": 14.8,
                "metric_type": "LTV",
                "x": 14.8,
                "y": 47.3
              },
              {
                "cumpct_pct": 47.3,
                "cumpct_cust": 14.8,
                "metric_type": "LTV",
                "x": 14.8,
                "y": 47.3
              },
              {
                "cumpct_pct": 47.3,
                "cumpct_cust": 14.8,
                "metric_type": "LTV",
                "x": 14.8,
                "y": 47.3
              },
              {
                "cumpct_pct": 47.4,
                "cumpct_cust": 14.9,
                "metric_type": "LTV",
                "x": 14.9,
                "y": 47.4
              },
              {
                "cumpct_pct": 47.5,
                "cumpct_cust": 15,
                "metric_type": "LTV",
                "x": 15,
                "y": 47.5
              },
              {
                "cumpct_pct": 48,
                "cumpct_cust": 15.2,
                "metric_type": "LTV",
                "x": 15.2,
                "y": 48
              },
              {
                "cumpct_pct": 48.1,
                "cumpct_cust": 15.3,
                "metric_type": "LTV",
                "x": 15.3,
                "y": 48.1
              },
              {
                "cumpct_pct": 48.2,
                "cumpct_cust": 15.3,
                "metric_type": "LTV",
                "x": 15.3,
                "y": 48.2
              },
              {
                "cumpct_pct": 48.3,
                "cumpct_cust": 15.4,
                "metric_type": "LTV",
                "x": 15.4,
                "y": 48.3
              },
              {
                "cumpct_pct": 48.6,
                "cumpct_cust": 15.6,
                "metric_type": "LTV",
                "x": 15.6,
                "y": 48.6
              },
              {
                "cumpct_pct": 48.7,
                "cumpct_cust": 15.6,
                "metric_type": "LTV",
                "x": 15.6,
                "y": 48.7
              },
              {
                "cumpct_pct": 48.8,
                "cumpct_cust": 15.7,
                "metric_type": "LTV",
                "x": 15.7,
                "y": 48.8
              },
              {
                "cumpct_pct": 49.1,
                "cumpct_cust": 15.9,
                "metric_type": "LTV",
                "x": 15.9,
                "y": 49.1
              },
              {
                "cumpct_pct": 49.3,
                "cumpct_cust": 16,
                "metric_type": "LTV",
                "x": 16,
                "y": 49.3
              },
              {
                "cumpct_pct": 49.3,
                "cumpct_cust": 16,
                "metric_type": "LTV",
                "x": 16,
                "y": 49.3
              },
              {
                "cumpct_pct": 49.4,
                "cumpct_cust": 16,
                "metric_type": "LTV",
                "x": 16,
                "y": 49.4
              },
              {
                "cumpct_pct": 49.4,
                "cumpct_cust": 16.1,
                "metric_type": "LTV",
                "x": 16.1,
                "y": 49.4
              },
              {
                "cumpct_pct": 49.4,
                "cumpct_cust": 16.1,
                "metric_type": "LTV",
                "x": 16.1,
                "y": 49.4
              },
              {
                "cumpct_pct": 49.5,
                "cumpct_cust": 16.1,
                "metric_type": "LTV",
                "x": 16.1,
                "y": 49.5
              },
              {
                "cumpct_pct": 49.6,
                "cumpct_cust": 16.2,
                "metric_type": "LTV",
                "x": 16.2,
                "y": 49.6
              },
              {
                "cumpct_pct": 49.7,
                "cumpct_cust": 16.3,
                "metric_type": "LTV",
                "x": 16.3,
                "y": 49.7
              },
              {
                "cumpct_pct": 49.9,
                "cumpct_cust": 16.4,
                "metric_type": "LTV",
                "x": 16.4,
                "y": 49.9
              },
              {
                "cumpct_pct": 50.3,
                "cumpct_cust": 16.6,
                "metric_type": "LTV",
                "x": 16.6,
                "y": 50.3
              },
              {
                "cumpct_pct": 50.4,
                "cumpct_cust": 16.7,
                "metric_type": "LTV",
                "x": 16.7,
                "y": 50.4
              },
              {
                "cumpct_pct": 50.6,
                "cumpct_cust": 16.8,
                "metric_type": "LTV",
                "x": 16.8,
                "y": 50.6
              },
              {
                "cumpct_pct": 50.6,
                "cumpct_cust": 16.8,
                "metric_type": "LTV",
                "x": 16.8,
                "y": 50.6
              },
              {
                "cumpct_pct": 50.8,
                "cumpct_cust": 16.9,
                "metric_type": "LTV",
                "x": 16.9,
                "y": 50.8
              },
              {
                "cumpct_pct": 50.9,
                "cumpct_cust": 17,
                "metric_type": "LTV",
                "x": 17,
                "y": 50.9
              },
              {
                "cumpct_pct": 51.1,
                "cumpct_cust": 17.1,
                "metric_type": "LTV",
                "x": 17.1,
                "y": 51.1
              },
              {
                "cumpct_pct": 51.8,
                "cumpct_cust": 17.6,
                "metric_type": "LTV",
                "x": 17.6,
                "y": 51.8
              },
              {
                "cumpct_pct": 51.9,
                "cumpct_cust": 17.7,
                "metric_type": "LTV",
                "x": 17.7,
                "y": 51.9
              },
              {
                "cumpct_pct": 52.1,
                "cumpct_cust": 17.7,
                "metric_type": "LTV",
                "x": 17.7,
                "y": 52.1
              },
              {
                "cumpct_pct": 52.3,
                "cumpct_cust": 17.9,
                "metric_type": "LTV",
                "x": 17.9,
                "y": 52.3
              },
              {
                "cumpct_pct": 52.3,
                "cumpct_cust": 17.9,
                "metric_type": "LTV",
                "x": 17.9,
                "y": 52.3
              },
              {
                "cumpct_pct": 52.4,
                "cumpct_cust": 17.9,
                "metric_type": "LTV",
                "x": 17.9,
                "y": 52.4
              },
              {
                "cumpct_pct": 52.4,
                "cumpct_cust": 18,
                "metric_type": "LTV",
                "x": 18,
                "y": 52.4
              },
              {
                "cumpct_pct": 52.5,
                "cumpct_cust": 18,
                "metric_type": "LTV",
                "x": 18,
                "y": 52.5
              },
              {
                "cumpct_pct": 52.6,
                "cumpct_cust": 18.1,
                "metric_type": "LTV",
                "x": 18.1,
                "y": 52.6
              },
              {
                "cumpct_pct": 52.6,
                "cumpct_cust": 18.1,
                "metric_type": "LTV",
                "x": 18.1,
                "y": 52.6
              },
              {
                "cumpct_pct": 52.7,
                "cumpct_cust": 18.2,
                "metric_type": "LTV",
                "x": 18.2,
                "y": 52.7
              },
              {
                "cumpct_pct": 52.8,
                "cumpct_cust": 18.2,
                "metric_type": "LTV",
                "x": 18.2,
                "y": 52.8
              },
              {
                "cumpct_pct": 52.9,
                "cumpct_cust": 18.3,
                "metric_type": "LTV",
                "x": 18.3,
                "y": 52.9
              },
              {
                "cumpct_pct": 52.9,
                "cumpct_cust": 18.3,
                "metric_type": "LTV",
                "x": 18.3,
                "y": 52.9
              },
              {
                "cumpct_pct": 53.2,
                "cumpct_cust": 18.5,
                "metric_type": "LTV",
                "x": 18.5,
                "y": 53.2
              },
              {
                "cumpct_pct": 53.2,
                "cumpct_cust": 18.5,
                "metric_type": "LTV",
                "x": 18.5,
                "y": 53.2
              },
              {
                "cumpct_pct": 53.3,
                "cumpct_cust": 18.5,
                "metric_type": "LTV",
                "x": 18.5,
                "y": 53.3
              },
              {
                "cumpct_pct": 53.8,
                "cumpct_cust": 18.9,
                "metric_type": "LTV",
                "x": 18.9,
                "y": 53.8
              },
              {
                "cumpct_pct": 53.9,
                "cumpct_cust": 18.9,
                "metric_type": "LTV",
                "x": 18.9,
                "y": 53.9
              },
              {
                "cumpct_pct": 53.9,
                "cumpct_cust": 19,
                "metric_type": "LTV",
                "x": 19,
                "y": 53.9
              },
              {
                "cumpct_pct": 54,
                "cumpct_cust": 19,
                "metric_type": "LTV",
                "x": 19,
                "y": 54
              },
              {
                "cumpct_pct": 54.2,
                "cumpct_cust": 19.1,
                "metric_type": "LTV",
                "x": 19.1,
                "y": 54.2
              },
              {
                "cumpct_pct": 54.3,
                "cumpct_cust": 19.2,
                "metric_type": "LTV",
                "x": 19.2,
                "y": 54.3
              },
              {
                "cumpct_pct": 54.4,
                "cumpct_cust": 19.3,
                "metric_type": "LTV",
                "x": 19.3,
                "y": 54.4
              },
              {
                "cumpct_pct": 54.5,
                "cumpct_cust": 19.3,
                "metric_type": "LTV",
                "x": 19.3,
                "y": 54.5
              },
              {
                "cumpct_pct": 54.5,
                "cumpct_cust": 19.4,
                "metric_type": "LTV",
                "x": 19.4,
                "y": 54.5
              },
              {
                "cumpct_pct": 54.6,
                "cumpct_cust": 19.5,
                "metric_type": "LTV",
                "x": 19.5,
                "y": 54.6
              },
              {
                "cumpct_pct": 55,
                "cumpct_cust": 19.7,
                "metric_type": "LTV",
                "x": 19.7,
                "y": 55
              },
              {
                "cumpct_pct": 55,
                "cumpct_cust": 19.7,
                "metric_type": "LTV",
                "x": 19.7,
                "y": 55
              },
              {
                "cumpct_pct": 55.4,
                "cumpct_cust": 20,
                "metric_type": "LTV",
                "x": 20,
                "y": 55.4
              },
              {
                "cumpct_pct": 55.4,
                "cumpct_cust": 20,
                "metric_type": "LTV",
                "x": 20,
                "y": 55.4
              },
              {
                "cumpct_pct": 55.6,
                "cumpct_cust": 20.1,
                "metric_type": "LTV",
                "x": 20.1,
                "y": 55.6
              },
              {
                "cumpct_pct": 55.8,
                "cumpct_cust": 20.2,
                "metric_type": "LTV",
                "x": 20.2,
                "y": 55.8
              },
              {
                "cumpct_pct": 55.9,
                "cumpct_cust": 20.3,
                "metric_type": "LTV",
                "x": 20.3,
                "y": 55.9
              },
              {
                "cumpct_pct": 56.3,
                "cumpct_cust": 20.6,
                "metric_type": "LTV",
                "x": 20.6,
                "y": 56.3
              },
              {
                "cumpct_pct": 56.5,
                "cumpct_cust": 20.8,
                "metric_type": "LTV",
                "x": 20.8,
                "y": 56.5
              },
              {
                "cumpct_pct": 56.6,
                "cumpct_cust": 20.8,
                "metric_type": "LTV",
                "x": 20.8,
                "y": 56.6
              },
              {
                "cumpct_pct": 56.7,
                "cumpct_cust": 20.9,
                "metric_type": "LTV",
                "x": 20.9,
                "y": 56.7
              },
              {
                "cumpct_pct": 56.9,
                "cumpct_cust": 21.1,
                "metric_type": "LTV",
                "x": 21.1,
                "y": 56.9
              },
              {
                "cumpct_pct": 57,
                "cumpct_cust": 21.1,
                "metric_type": "LTV",
                "x": 21.1,
                "y": 57
              },
              {
                "cumpct_pct": 57.2,
                "cumpct_cust": 21.3,
                "metric_type": "LTV",
                "x": 21.3,
                "y": 57.2
              },
              {
                "cumpct_pct": 57.3,
                "cumpct_cust": 21.4,
                "metric_type": "LTV",
                "x": 21.4,
                "y": 57.3
              },
              {
                "cumpct_pct": 57.7,
                "cumpct_cust": 21.6,
                "metric_type": "LTV",
                "x": 21.6,
                "y": 57.7
              },
              {
                "cumpct_pct": 58.5,
                "cumpct_cust": 22.2,
                "metric_type": "LTV",
                "x": 22.2,
                "y": 58.5
              },
              {
                "cumpct_pct": 58.6,
                "cumpct_cust": 22.3,
                "metric_type": "LTV",
                "x": 22.3,
                "y": 58.6
              },
              {
                "cumpct_pct": 58.6,
                "cumpct_cust": 22.3,
                "metric_type": "LTV",
                "x": 22.3,
                "y": 58.6
              },
              {
                "cumpct_pct": 58.7,
                "cumpct_cust": 22.3,
                "metric_type": "LTV",
                "x": 22.3,
                "y": 58.7
              },
              {
                "cumpct_pct": 58.7,
                "cumpct_cust": 22.3,
                "metric_type": "LTV",
                "x": 22.3,
                "y": 58.7
              },
              {
                "cumpct_pct": 58.8,
                "cumpct_cust": 22.5,
                "metric_type": "LTV",
                "x": 22.5,
                "y": 58.8
              },
              {
                "cumpct_pct": 58.8,
                "cumpct_cust": 22.5,
                "metric_type": "LTV",
                "x": 22.5,
                "y": 58.8
              },
              {
                "cumpct_pct": 58.8,
                "cumpct_cust": 22.5,
                "metric_type": "LTV",
                "x": 22.5,
                "y": 58.8
              },
              {
                "cumpct_pct": 59,
                "cumpct_cust": 22.6,
                "metric_type": "LTV",
                "x": 22.6,
                "y": 59
              },
              {
                "cumpct_pct": 59.1,
                "cumpct_cust": 22.7,
                "metric_type": "LTV",
                "x": 22.7,
                "y": 59.1
              },
              {
                "cumpct_pct": 59.4,
                "cumpct_cust": 22.9,
                "metric_type": "LTV",
                "x": 22.9,
                "y": 59.4
              },
              {
                "cumpct_pct": 59.5,
                "cumpct_cust": 23,
                "metric_type": "LTV",
                "x": 23,
                "y": 59.5
              },
              {
                "cumpct_pct": 59.6,
                "cumpct_cust": 23.1,
                "metric_type": "LTV",
                "x": 23.1,
                "y": 59.6
              },
              {
                "cumpct_pct": 59.6,
                "cumpct_cust": 23.1,
                "metric_type": "LTV",
                "x": 23.1,
                "y": 59.6
              },
              {
                "cumpct_pct": 59.8,
                "cumpct_cust": 23.2,
                "metric_type": "LTV",
                "x": 23.2,
                "y": 59.8
              },
              {
                "cumpct_pct": 60,
                "cumpct_cust": 23.4,
                "metric_type": "LTV",
                "x": 23.4,
                "y": 60
              },
              {
                "cumpct_pct": 60.3,
                "cumpct_cust": 23.6,
                "metric_type": "LTV",
                "x": 23.6,
                "y": 60.3
              },
              {
                "cumpct_pct": 60.5,
                "cumpct_cust": 23.7,
                "metric_type": "LTV",
                "x": 23.7,
                "y": 60.5
              },
              {
                "cumpct_pct": 60.5,
                "cumpct_cust": 23.7,
                "metric_type": "LTV",
                "x": 23.7,
                "y": 60.5
              },
              {
                "cumpct_pct": 60.7,
                "cumpct_cust": 23.9,
                "metric_type": "LTV",
                "x": 23.9,
                "y": 60.7
              },
              {
                "cumpct_pct": 60.8,
                "cumpct_cust": 24,
                "metric_type": "LTV",
                "x": 24,
                "y": 60.8
              },
              {
                "cumpct_pct": 61,
                "cumpct_cust": 24.1,
                "metric_type": "LTV",
                "x": 24.1,
                "y": 61
              },
              {
                "cumpct_pct": 61.2,
                "cumpct_cust": 24.3,
                "metric_type": "LTV",
                "x": 24.3,
                "y": 61.2
              },
              {
                "cumpct_pct": 61.3,
                "cumpct_cust": 24.4,
                "metric_type": "LTV",
                "x": 24.4,
                "y": 61.3
              },
              {
                "cumpct_pct": 61.5,
                "cumpct_cust": 24.5,
                "metric_type": "LTV",
                "x": 24.5,
                "y": 61.5
              },
              {
                "cumpct_pct": 61.6,
                "cumpct_cust": 24.7,
                "metric_type": "LTV",
                "x": 24.7,
                "y": 61.6
              },
              {
                "cumpct_pct": 61.7,
                "cumpct_cust": 24.7,
                "metric_type": "LTV",
                "x": 24.7,
                "y": 61.7
              },
              {
                "cumpct_pct": 61.8,
                "cumpct_cust": 24.8,
                "metric_type": "LTV",
                "x": 24.8,
                "y": 61.8
              },
              {
                "cumpct_pct": 62,
                "cumpct_cust": 25,
                "metric_type": "LTV",
                "x": 25,
                "y": 62
              },
              {
                "cumpct_pct": 62.4,
                "cumpct_cust": 25.3,
                "metric_type": "LTV",
                "x": 25.3,
                "y": 62.4
              },
              {
                "cumpct_pct": 62.5,
                "cumpct_cust": 25.4,
                "metric_type": "LTV",
                "x": 25.4,
                "y": 62.5
              },
              {
                "cumpct_pct": 62.8,
                "cumpct_cust": 25.6,
                "metric_type": "LTV",
                "x": 25.6,
                "y": 62.8
              },
              {
                "cumpct_pct": 62.8,
                "cumpct_cust": 25.7,
                "metric_type": "LTV",
                "x": 25.7,
                "y": 62.8
              },
              {
                "cumpct_pct": 62.9,
                "cumpct_cust": 25.7,
                "metric_type": "LTV",
                "x": 25.7,
                "y": 62.9
              },
              {
                "cumpct_pct": 63.1,
                "cumpct_cust": 25.9,
                "metric_type": "LTV",
                "x": 25.9,
                "y": 63.1
              },
              {
                "cumpct_pct": 63.1,
                "cumpct_cust": 25.9,
                "metric_type": "LTV",
                "x": 25.9,
                "y": 63.1
              },
              {
                "cumpct_pct": 63.3,
                "cumpct_cust": 26,
                "metric_type": "LTV",
                "x": 26,
                "y": 63.3
              },
              {
                "cumpct_pct": 63.4,
                "cumpct_cust": 26.2,
                "metric_type": "LTV",
                "x": 26.2,
                "y": 63.4
              },
              {
                "cumpct_pct": 63.4,
                "cumpct_cust": 26.2,
                "metric_type": "LTV",
                "x": 26.2,
                "y": 63.4
              },
              {
                "cumpct_pct": 63.6,
                "cumpct_cust": 26.3,
                "metric_type": "LTV",
                "x": 26.3,
                "y": 63.6
              },
              {
                "cumpct_pct": 63.6,
                "cumpct_cust": 26.3,
                "metric_type": "LTV",
                "x": 26.3,
                "y": 63.6
              },
              {
                "cumpct_pct": 63.8,
                "cumpct_cust": 26.4,
                "metric_type": "LTV",
                "x": 26.4,
                "y": 63.8
              },
              {
                "cumpct_pct": 63.8,
                "cumpct_cust": 26.5,
                "metric_type": "LTV",
                "x": 26.5,
                "y": 63.8
              },
              {
                "cumpct_pct": 64,
                "cumpct_cust": 26.6,
                "metric_type": "LTV",
                "x": 26.6,
                "y": 64
              },
              {
                "cumpct_pct": 64.1,
                "cumpct_cust": 26.8,
                "metric_type": "LTV",
                "x": 26.8,
                "y": 64.1
              },
              {
                "cumpct_pct": 64.3,
                "cumpct_cust": 26.9,
                "metric_type": "LTV",
                "x": 26.9,
                "y": 64.3
              },
              {
                "cumpct_pct": 64.7,
                "cumpct_cust": 27.2,
                "metric_type": "LTV",
                "x": 27.2,
                "y": 64.7
              },
              {
                "cumpct_pct": 64.7,
                "cumpct_cust": 27.3,
                "metric_type": "LTV",
                "x": 27.3,
                "y": 64.7
              },
              {
                "cumpct_pct": 64.8,
                "cumpct_cust": 27.3,
                "metric_type": "LTV",
                "x": 27.3,
                "y": 64.8
              },
              {
                "cumpct_pct": 64.8,
                "cumpct_cust": 27.3,
                "metric_type": "LTV",
                "x": 27.3,
                "y": 64.8
              },
              {
                "cumpct_pct": 64.8,
                "cumpct_cust": 27.4,
                "metric_type": "LTV",
                "x": 27.4,
                "y": 64.8
              },
              {
                "cumpct_pct": 64.9,
                "cumpct_cust": 27.4,
                "metric_type": "LTV",
                "x": 27.4,
                "y": 64.9
              },
              {
                "cumpct_pct": 65.3,
                "cumpct_cust": 27.8,
                "metric_type": "LTV",
                "x": 27.8,
                "y": 65.3
              },
              {
                "cumpct_pct": 65.4,
                "cumpct_cust": 27.9,
                "metric_type": "LTV",
                "x": 27.9,
                "y": 65.4
              },
              {
                "cumpct_pct": 65.5,
                "cumpct_cust": 27.9,
                "metric_type": "LTV",
                "x": 27.9,
                "y": 65.5
              },
              {
                "cumpct_pct": 65.6,
                "cumpct_cust": 28,
                "metric_type": "LTV",
                "x": 28,
                "y": 65.6
              },
              {
                "cumpct_pct": 65.6,
                "cumpct_cust": 28.1,
                "metric_type": "LTV",
                "x": 28.1,
                "y": 65.6
              },
              {
                "cumpct_pct": 65.6,
                "cumpct_cust": 28.1,
                "metric_type": "LTV",
                "x": 28.1,
                "y": 65.6
              },
              {
                "cumpct_pct": 65.6,
                "cumpct_cust": 28.1,
                "metric_type": "LTV",
                "x": 28.1,
                "y": 65.6
              },
              {
                "cumpct_pct": 65.7,
                "cumpct_cust": 28.1,
                "metric_type": "LTV",
                "x": 28.1,
                "y": 65.7
              },
              {
                "cumpct_pct": 66.2,
                "cumpct_cust": 28.6,
                "metric_type": "LTV",
                "x": 28.6,
                "y": 66.2
              },
              {
                "cumpct_pct": 66.5,
                "cumpct_cust": 28.8,
                "metric_type": "LTV",
                "x": 28.8,
                "y": 66.5
              },
              {
                "cumpct_pct": 66.6,
                "cumpct_cust": 29,
                "metric_type": "LTV",
                "x": 29,
                "y": 66.6
              },
              {
                "cumpct_pct": 66.8,
                "cumpct_cust": 29.1,
                "metric_type": "LTV",
                "x": 29.1,
                "y": 66.8
              },
              {
                "cumpct_pct": 66.9,
                "cumpct_cust": 29.2,
                "metric_type": "LTV",
                "x": 29.2,
                "y": 66.9
              },
              {
                "cumpct_pct": 67.1,
                "cumpct_cust": 29.4,
                "metric_type": "LTV",
                "x": 29.4,
                "y": 67.1
              },
              {
                "cumpct_pct": 67.1,
                "cumpct_cust": 29.4,
                "metric_type": "LTV",
                "x": 29.4,
                "y": 67.1
              },
              {
                "cumpct_pct": 67.2,
                "cumpct_cust": 29.5,
                "metric_type": "LTV",
                "x": 29.5,
                "y": 67.2
              },
              {
                "cumpct_pct": 67.2,
                "cumpct_cust": 29.5,
                "metric_type": "LTV",
                "x": 29.5,
                "y": 67.2
              },
              {
                "cumpct_pct": 67.3,
                "cumpct_cust": 29.6,
                "metric_type": "LTV",
                "x": 29.6,
                "y": 67.3
              },
              {
                "cumpct_pct": 67.4,
                "cumpct_cust": 29.7,
                "metric_type": "LTV",
                "x": 29.7,
                "y": 67.4
              },
              {
                "cumpct_pct": 67.5,
                "cumpct_cust": 29.8,
                "metric_type": "LTV",
                "x": 29.8,
                "y": 67.5
              },
              {
                "cumpct_pct": 67.7,
                "cumpct_cust": 30,
                "metric_type": "LTV",
                "x": 30,
                "y": 67.7
              },
              {
                "cumpct_pct": 67.7,
                "cumpct_cust": 30,
                "metric_type": "LTV",
                "x": 30,
                "y": 67.7
              },
              {
                "cumpct_pct": 67.8,
                "cumpct_cust": 30,
                "metric_type": "LTV",
                "x": 30,
                "y": 67.8
              },
              {
                "cumpct_pct": 67.8,
                "cumpct_cust": 30.1,
                "metric_type": "LTV",
                "x": 30.1,
                "y": 67.8
              },
              {
                "cumpct_pct": 68,
                "cumpct_cust": 30.3,
                "metric_type": "LTV",
                "x": 30.3,
                "y": 68
              },
              {
                "cumpct_pct": 68.1,
                "cumpct_cust": 30.3,
                "metric_type": "LTV",
                "x": 30.3,
                "y": 68.1
              },
              {
                "cumpct_pct": 68.3,
                "cumpct_cust": 30.5,
                "metric_type": "LTV",
                "x": 30.5,
                "y": 68.3
              },
              {
                "cumpct_pct": 68.3,
                "cumpct_cust": 30.6,
                "metric_type": "LTV",
                "x": 30.6,
                "y": 68.3
              },
              {
                "cumpct_pct": 68.3,
                "cumpct_cust": 30.6,
                "metric_type": "LTV",
                "x": 30.6,
                "y": 68.3
              },
              {
                "cumpct_pct": 68.4,
                "cumpct_cust": 30.7,
                "metric_type": "LTV",
                "x": 30.7,
                "y": 68.4
              },
              {
                "cumpct_pct": 68.6,
                "cumpct_cust": 30.9,
                "metric_type": "LTV",
                "x": 30.9,
                "y": 68.6
              },
              {
                "cumpct_pct": 68.6,
                "cumpct_cust": 30.9,
                "metric_type": "LTV",
                "x": 30.9,
                "y": 68.6
              },
              {
                "cumpct_pct": 68.6,
                "cumpct_cust": 30.9,
                "metric_type": "LTV",
                "x": 30.9,
                "y": 68.6
              },
              {
                "cumpct_pct": 68.8,
                "cumpct_cust": 31.1,
                "metric_type": "LTV",
                "x": 31.1,
                "y": 68.8
              },
              {
                "cumpct_pct": 68.9,
                "cumpct_cust": 31.2,
                "metric_type": "LTV",
                "x": 31.2,
                "y": 68.9
              },
              {
                "cumpct_pct": 69.3,
                "cumpct_cust": 31.5,
                "metric_type": "LTV",
                "x": 31.5,
                "y": 69.3
              },
              {
                "cumpct_pct": 69.4,
                "cumpct_cust": 31.6,
                "metric_type": "LTV",
                "x": 31.6,
                "y": 69.4
              },
              {
                "cumpct_pct": 69.5,
                "cumpct_cust": 31.7,
                "metric_type": "LTV",
                "x": 31.7,
                "y": 69.5
              },
              {
                "cumpct_pct": 69.5,
                "cumpct_cust": 31.8,
                "metric_type": "LTV",
                "x": 31.8,
                "y": 69.5
              },
              {
                "cumpct_pct": 69.6,
                "cumpct_cust": 31.9,
                "metric_type": "LTV",
                "x": 31.9,
                "y": 69.6
              },
              {
                "cumpct_pct": 69.8,
                "cumpct_cust": 32,
                "metric_type": "LTV",
                "x": 32,
                "y": 69.8
              },
              {
                "cumpct_pct": 69.8,
                "cumpct_cust": 32,
                "metric_type": "LTV",
                "x": 32,
                "y": 69.8
              },
              {
                "cumpct_pct": 70.1,
                "cumpct_cust": 32.3,
                "metric_type": "LTV",
                "x": 32.3,
                "y": 70.1
              },
              {
                "cumpct_pct": 70.1,
                "cumpct_cust": 32.3,
                "metric_type": "LTV",
                "x": 32.3,
                "y": 70.1
              },
              {
                "cumpct_pct": 70.1,
                "cumpct_cust": 32.3,
                "metric_type": "LTV",
                "x": 32.3,
                "y": 70.1
              },
              {
                "cumpct_pct": 70.2,
                "cumpct_cust": 32.5,
                "metric_type": "LTV",
                "x": 32.5,
                "y": 70.2
              },
              {
                "cumpct_pct": 70.6,
                "cumpct_cust": 32.9,
                "metric_type": "LTV",
                "x": 32.9,
                "y": 70.6
              },
              {
                "cumpct_pct": 70.6,
                "cumpct_cust": 32.9,
                "metric_type": "LTV",
                "x": 32.9,
                "y": 70.6
              },
              {
                "cumpct_pct": 70.7,
                "cumpct_cust": 32.9,
                "metric_type": "LTV",
                "x": 32.9,
                "y": 70.7
              },
              {
                "cumpct_pct": 70.7,
                "cumpct_cust": 33,
                "metric_type": "LTV",
                "x": 33,
                "y": 70.7
              },
              {
                "cumpct_pct": 70.7,
                "cumpct_cust": 33,
                "metric_type": "LTV",
                "x": 33,
                "y": 70.7
              },
              {
                "cumpct_pct": 71.1,
                "cumpct_cust": 33.3,
                "metric_type": "LTV",
                "x": 33.3,
                "y": 71.1
              },
              {
                "cumpct_pct": 71.1,
                "cumpct_cust": 33.3,
                "metric_type": "LTV",
                "x": 33.3,
                "y": 71.1
              },
              {
                "cumpct_pct": 71.2,
                "cumpct_cust": 33.5,
                "metric_type": "LTV",
                "x": 33.5,
                "y": 71.2
              },
              {
                "cumpct_pct": 71.3,
                "cumpct_cust": 33.6,
                "metric_type": "LTV",
                "x": 33.6,
                "y": 71.3
              },
              {
                "cumpct_pct": 71.4,
                "cumpct_cust": 33.7,
                "metric_type": "LTV",
                "x": 33.7,
                "y": 71.4
              },
              {
                "cumpct_pct": 71.5,
                "cumpct_cust": 33.7,
                "metric_type": "LTV",
                "x": 33.7,
                "y": 71.5
              },
              {
                "cumpct_pct": 71.5,
                "cumpct_cust": 33.8,
                "metric_type": "LTV",
                "x": 33.8,
                "y": 71.5
              },
              {
                "cumpct_pct": 71.5,
                "cumpct_cust": 33.8,
                "metric_type": "LTV",
                "x": 33.8,
                "y": 71.5
              },
              {
                "cumpct_pct": 71.6,
                "cumpct_cust": 33.9,
                "metric_type": "LTV",
                "x": 33.9,
                "y": 71.6
              },
              {
                "cumpct_pct": 71.7,
                "cumpct_cust": 33.9,
                "metric_type": "LTV",
                "x": 33.9,
                "y": 71.7
              },
              {
                "cumpct_pct": 72,
                "cumpct_cust": 34.3,
                "metric_type": "LTV",
                "x": 34.3,
                "y": 72
              },
              {
                "cumpct_pct": 72,
                "cumpct_cust": 34.3,
                "metric_type": "LTV",
                "x": 34.3,
                "y": 72
              },
              {
                "cumpct_pct": 72.3,
                "cumpct_cust": 34.6,
                "metric_type": "LTV",
                "x": 34.6,
                "y": 72.3
              },
              {
                "cumpct_pct": 72.3,
                "cumpct_cust": 34.6,
                "metric_type": "LTV",
                "x": 34.6,
                "y": 72.3
              },
              {
                "cumpct_pct": 72.3,
                "cumpct_cust": 34.6,
                "metric_type": "LTV",
                "x": 34.6,
                "y": 72.3
              },
              {
                "cumpct_pct": 72.4,
                "cumpct_cust": 34.7,
                "metric_type": "LTV",
                "x": 34.7,
                "y": 72.4
              },
              {
                "cumpct_pct": 72.5,
                "cumpct_cust": 34.8,
                "metric_type": "LTV",
                "x": 34.8,
                "y": 72.5
              },
              {
                "cumpct_pct": 72.5,
                "cumpct_cust": 34.9,
                "metric_type": "LTV",
                "x": 34.9,
                "y": 72.5
              },
              {
                "cumpct_pct": 72.5,
                "cumpct_cust": 34.9,
                "metric_type": "LTV",
                "x": 34.9,
                "y": 72.5
              },
              {
                "cumpct_pct": 72.7,
                "cumpct_cust": 35.1,
                "metric_type": "LTV",
                "x": 35.1,
                "y": 72.7
              },
              {
                "cumpct_pct": 72.7,
                "cumpct_cust": 35.1,
                "metric_type": "LTV",
                "x": 35.1,
                "y": 72.7
              },
              {
                "cumpct_pct": 72.8,
                "cumpct_cust": 35.2,
                "metric_type": "LTV",
                "x": 35.2,
                "y": 72.8
              },
              {
                "cumpct_pct": 73,
                "cumpct_cust": 35.3,
                "metric_type": "LTV",
                "x": 35.3,
                "y": 73
              },
              {
                "cumpct_pct": 73,
                "cumpct_cust": 35.3,
                "metric_type": "LTV",
                "x": 35.3,
                "y": 73
              },
              {
                "cumpct_pct": 73.1,
                "cumpct_cust": 35.5,
                "metric_type": "LTV",
                "x": 35.5,
                "y": 73.1
              },
              {
                "cumpct_pct": 73.3,
                "cumpct_cust": 35.7,
                "metric_type": "LTV",
                "x": 35.7,
                "y": 73.3
              },
              {
                "cumpct_pct": 73.4,
                "cumpct_cust": 35.9,
                "metric_type": "LTV",
                "x": 35.9,
                "y": 73.4
              },
              {
                "cumpct_pct": 73.5,
                "cumpct_cust": 36,
                "metric_type": "LTV",
                "x": 36,
                "y": 73.5
              },
              {
                "cumpct_pct": 73.7,
                "cumpct_cust": 36.2,
                "metric_type": "LTV",
                "x": 36.2,
                "y": 73.7
              },
              {
                "cumpct_pct": 73.8,
                "cumpct_cust": 36.2,
                "metric_type": "LTV",
                "x": 36.2,
                "y": 73.8
              },
              {
                "cumpct_pct": 73.9,
                "cumpct_cust": 36.4,
                "metric_type": "LTV",
                "x": 36.4,
                "y": 73.9
              },
              {
                "cumpct_pct": 74,
                "cumpct_cust": 36.5,
                "metric_type": "LTV",
                "x": 36.5,
                "y": 74
              },
              {
                "cumpct_pct": 74.1,
                "cumpct_cust": 36.6,
                "metric_type": "LTV",
                "x": 36.6,
                "y": 74.1
              },
              {
                "cumpct_pct": 74.3,
                "cumpct_cust": 36.9,
                "metric_type": "LTV",
                "x": 36.9,
                "y": 74.3
              },
              {
                "cumpct_pct": 74.4,
                "cumpct_cust": 37,
                "metric_type": "LTV",
                "x": 37,
                "y": 74.4
              },
              {
                "cumpct_pct": 74.4,
                "cumpct_cust": 37,
                "metric_type": "LTV",
                "x": 37,
                "y": 74.4
              },
              {
                "cumpct_pct": 74.4,
                "cumpct_cust": 37,
                "metric_type": "LTV",
                "x": 37,
                "y": 74.4
              },
              {
                "cumpct_pct": 74.5,
                "cumpct_cust": 37.1,
                "metric_type": "LTV",
                "x": 37.1,
                "y": 74.5
              },
              {
                "cumpct_pct": 74.6,
                "cumpct_cust": 37.2,
                "metric_type": "LTV",
                "x": 37.2,
                "y": 74.6
              },
              {
                "cumpct_pct": 74.6,
                "cumpct_cust": 37.2,
                "metric_type": "LTV",
                "x": 37.2,
                "y": 74.6
              },
              {
                "cumpct_pct": 74.7,
                "cumpct_cust": 37.3,
                "metric_type": "LTV",
                "x": 37.3,
                "y": 74.7
              },
              {
                "cumpct_pct": 74.7,
                "cumpct_cust": 37.3,
                "metric_type": "LTV",
                "x": 37.3,
                "y": 74.7
              },
              {
                "cumpct_pct": 74.8,
                "cumpct_cust": 37.5,
                "metric_type": "LTV",
                "x": 37.5,
                "y": 74.8
              },
              {
                "cumpct_pct": 74.8,
                "cumpct_cust": 37.5,
                "metric_type": "LTV",
                "x": 37.5,
                "y": 74.8
              },
              {
                "cumpct_pct": 74.9,
                "cumpct_cust": 37.5,
                "metric_type": "LTV",
                "x": 37.5,
                "y": 74.9
              },
              {
                "cumpct_pct": 74.9,
                "cumpct_cust": 37.6,
                "metric_type": "LTV",
                "x": 37.6,
                "y": 74.9
              },
              {
                "cumpct_pct": 75,
                "cumpct_cust": 37.7,
                "metric_type": "LTV",
                "x": 37.7,
                "y": 75
              },
              {
                "cumpct_pct": 75,
                "cumpct_cust": 37.7,
                "metric_type": "LTV",
                "x": 37.7,
                "y": 75
              },
              {
                "cumpct_pct": 75.3,
                "cumpct_cust": 38,
                "metric_type": "LTV",
                "x": 38,
                "y": 75.3
              },
              {
                "cumpct_pct": 75.3,
                "cumpct_cust": 38.1,
                "metric_type": "LTV",
                "x": 38.1,
                "y": 75.3
              },
              {
                "cumpct_pct": 75.3,
                "cumpct_cust": 38.1,
                "metric_type": "LTV",
                "x": 38.1,
                "y": 75.3
              },
              {
                "cumpct_pct": 75.3,
                "cumpct_cust": 38.1,
                "metric_type": "LTV",
                "x": 38.1,
                "y": 75.3
              },
              {
                "cumpct_pct": 75.4,
                "cumpct_cust": 38.1,
                "metric_type": "LTV",
                "x": 38.1,
                "y": 75.4
              },
              {
                "cumpct_pct": 75.4,
                "cumpct_cust": 38.2,
                "metric_type": "LTV",
                "x": 38.2,
                "y": 75.4
              },
              {
                "cumpct_pct": 75.6,
                "cumpct_cust": 38.4,
                "metric_type": "LTV",
                "x": 38.4,
                "y": 75.6
              },
              {
                "cumpct_pct": 75.6,
                "cumpct_cust": 38.4,
                "metric_type": "LTV",
                "x": 38.4,
                "y": 75.6
              },
              {
                "cumpct_pct": 75.7,
                "cumpct_cust": 38.6,
                "metric_type": "LTV",
                "x": 38.6,
                "y": 75.7
              },
              {
                "cumpct_pct": 75.8,
                "cumpct_cust": 38.6,
                "metric_type": "LTV",
                "x": 38.6,
                "y": 75.8
              },
              {
                "cumpct_pct": 76.1,
                "cumpct_cust": 39,
                "metric_type": "LTV",
                "x": 39,
                "y": 76.1
              },
              {
                "cumpct_pct": 76.1,
                "cumpct_cust": 39.1,
                "metric_type": "LTV",
                "x": 39.1,
                "y": 76.1
              },
              {
                "cumpct_pct": 76.3,
                "cumpct_cust": 39.2,
                "metric_type": "LTV",
                "x": 39.2,
                "y": 76.3
              },
              {
                "cumpct_pct": 76.3,
                "cumpct_cust": 39.3,
                "metric_type": "LTV",
                "x": 39.3,
                "y": 76.3
              },
              {
                "cumpct_pct": 76.3,
                "cumpct_cust": 39.3,
                "metric_type": "LTV",
                "x": 39.3,
                "y": 76.3
              },
              {
                "cumpct_pct": 76.3,
                "cumpct_cust": 39.3,
                "metric_type": "LTV",
                "x": 39.3,
                "y": 76.3
              },
              {
                "cumpct_pct": 76.3,
                "cumpct_cust": 39.3,
                "metric_type": "LTV",
                "x": 39.3,
                "y": 76.3
              },
              {
                "cumpct_pct": 76.4,
                "cumpct_cust": 39.3,
                "metric_type": "LTV",
                "x": 39.3,
                "y": 76.4
              },
              {
                "cumpct_pct": 76.4,
                "cumpct_cust": 39.4,
                "metric_type": "LTV",
                "x": 39.4,
                "y": 76.4
              },
              {
                "cumpct_pct": 76.4,
                "cumpct_cust": 39.4,
                "metric_type": "LTV",
                "x": 39.4,
                "y": 76.4
              },
              {
                "cumpct_pct": 76.7,
                "cumpct_cust": 39.8,
                "metric_type": "LTV",
                "x": 39.8,
                "y": 76.7
              },
              {
                "cumpct_pct": 76.8,
                "cumpct_cust": 39.9,
                "metric_type": "LTV",
                "x": 39.9,
                "y": 76.8
              },
              {
                "cumpct_pct": 77,
                "cumpct_cust": 40.1,
                "metric_type": "LTV",
                "x": 40.1,
                "y": 77
              },
              {
                "cumpct_pct": 77.1,
                "cumpct_cust": 40.2,
                "metric_type": "LTV",
                "x": 40.2,
                "y": 77.1
              },
              {
                "cumpct_pct": 77.1,
                "cumpct_cust": 40.3,
                "metric_type": "LTV",
                "x": 40.3,
                "y": 77.1
              },
              {
                "cumpct_pct": 77.2,
                "cumpct_cust": 40.3,
                "metric_type": "LTV",
                "x": 40.3,
                "y": 77.2
              },
              {
                "cumpct_pct": 77.2,
                "cumpct_cust": 40.4,
                "metric_type": "LTV",
                "x": 40.4,
                "y": 77.2
              },
              {
                "cumpct_pct": 77.5,
                "cumpct_cust": 40.8,
                "metric_type": "LTV",
                "x": 40.8,
                "y": 77.5
              },
              {
                "cumpct_pct": 77.7,
                "cumpct_cust": 41,
                "metric_type": "LTV",
                "x": 41,
                "y": 77.7
              },
              {
                "cumpct_pct": 77.7,
                "cumpct_cust": 41,
                "metric_type": "LTV",
                "x": 41,
                "y": 77.7
              },
              {
                "cumpct_pct": 77.8,
                "cumpct_cust": 41.2,
                "metric_type": "LTV",
                "x": 41.2,
                "y": 77.8
              },
              {
                "cumpct_pct": 77.8,
                "cumpct_cust": 41.2,
                "metric_type": "LTV",
                "x": 41.2,
                "y": 77.8
              },
              {
                "cumpct_pct": 78,
                "cumpct_cust": 41.5,
                "metric_type": "LTV",
                "x": 41.5,
                "y": 78
              },
              {
                "cumpct_pct": 78,
                "cumpct_cust": 41.5,
                "metric_type": "LTV",
                "x": 41.5,
                "y": 78
              },
              {
                "cumpct_pct": 78.1,
                "cumpct_cust": 41.5,
                "metric_type": "LTV",
                "x": 41.5,
                "y": 78.1
              },
              {
                "cumpct_pct": 78.3,
                "cumpct_cust": 41.8,
                "metric_type": "LTV",
                "x": 41.8,
                "y": 78.3
              },
              {
                "cumpct_pct": 78.4,
                "cumpct_cust": 41.9,
                "metric_type": "LTV",
                "x": 41.9,
                "y": 78.4
              },
              {
                "cumpct_pct": 78.7,
                "cumpct_cust": 42.4,
                "metric_type": "LTV",
                "x": 42.4,
                "y": 78.7
              },
              {
                "cumpct_pct": 78.7,
                "cumpct_cust": 42.4,
                "metric_type": "LTV",
                "x": 42.4,
                "y": 78.7
              },
              {
                "cumpct_pct": 78.7,
                "cumpct_cust": 42.4,
                "metric_type": "LTV",
                "x": 42.4,
                "y": 78.7
              },
              {
                "cumpct_pct": 78.8,
                "cumpct_cust": 42.5,
                "metric_type": "LTV",
                "x": 42.5,
                "y": 78.8
              },
              {
                "cumpct_pct": 78.9,
                "cumpct_cust": 42.6,
                "metric_type": "LTV",
                "x": 42.6,
                "y": 78.9
              },
              {
                "cumpct_pct": 78.9,
                "cumpct_cust": 42.7,
                "metric_type": "LTV",
                "x": 42.7,
                "y": 78.9
              },
              {
                "cumpct_pct": 78.9,
                "cumpct_cust": 42.7,
                "metric_type": "LTV",
                "x": 42.7,
                "y": 78.9
              },
              {
                "cumpct_pct": 79,
                "cumpct_cust": 42.8,
                "metric_type": "LTV",
                "x": 42.8,
                "y": 79
              },
              {
                "cumpct_pct": 79.1,
                "cumpct_cust": 42.9,
                "metric_type": "LTV",
                "x": 42.9,
                "y": 79.1
              },
              {
                "cumpct_pct": 79.1,
                "cumpct_cust": 43,
                "metric_type": "LTV",
                "x": 43,
                "y": 79.1
              },
              {
                "cumpct_pct": 79.2,
                "cumpct_cust": 43.1,
                "metric_type": "LTV",
                "x": 43.1,
                "y": 79.2
              },
              {
                "cumpct_pct": 79.2,
                "cumpct_cust": 43.1,
                "metric_type": "LTV",
                "x": 43.1,
                "y": 79.2
              },
              {
                "cumpct_pct": 79.3,
                "cumpct_cust": 43.2,
                "metric_type": "LTV",
                "x": 43.2,
                "y": 79.3
              },
              {
                "cumpct_pct": 79.3,
                "cumpct_cust": 43.2,
                "metric_type": "LTV",
                "x": 43.2,
                "y": 79.3
              },
              {
                "cumpct_pct": 79.4,
                "cumpct_cust": 43.3,
                "metric_type": "LTV",
                "x": 43.3,
                "y": 79.4
              },
              {
                "cumpct_pct": 79.4,
                "cumpct_cust": 43.3,
                "metric_type": "LTV",
                "x": 43.3,
                "y": 79.4
              },
              {
                "cumpct_pct": 79.4,
                "cumpct_cust": 43.3,
                "metric_type": "LTV",
                "x": 43.3,
                "y": 79.4
              },
              {
                "cumpct_pct": 79.6,
                "cumpct_cust": 43.7,
                "metric_type": "LTV",
                "x": 43.7,
                "y": 79.6
              },
              {
                "cumpct_pct": 79.7,
                "cumpct_cust": 43.7,
                "metric_type": "LTV",
                "x": 43.7,
                "y": 79.7
              },
              {
                "cumpct_pct": 79.7,
                "cumpct_cust": 43.8,
                "metric_type": "LTV",
                "x": 43.8,
                "y": 79.7
              },
              {
                "cumpct_pct": 79.8,
                "cumpct_cust": 43.8,
                "metric_type": "LTV",
                "x": 43.8,
                "y": 79.8
              },
              {
                "cumpct_pct": 79.8,
                "cumpct_cust": 43.9,
                "metric_type": "LTV",
                "x": 43.9,
                "y": 79.8
              },
              {
                "cumpct_pct": 79.8,
                "cumpct_cust": 43.9,
                "metric_type": "LTV",
                "x": 43.9,
                "y": 79.8
              },
              {
                "cumpct_pct": 79.9,
                "cumpct_cust": 44,
                "metric_type": "LTV",
                "x": 44,
                "y": 79.9
              },
              {
                "cumpct_pct": 79.9,
                "cumpct_cust": 44,
                "metric_type": "LTV",
                "x": 44,
                "y": 79.9
              },
              {
                "cumpct_pct": 79.9,
                "cumpct_cust": 44,
                "metric_type": "LTV",
                "x": 44,
                "y": 79.9
              },
              {
                "cumpct_pct": 80,
                "cumpct_cust": 44.1,
                "metric_type": "LTV",
                "x": 44.1,
                "y": 80
              },
              {
                "cumpct_pct": 80,
                "cumpct_cust": 44.1,
                "metric_type": "LTV",
                "x": 44.1,
                "y": 80
              },
              {
                "cumpct_pct": 80,
                "cumpct_cust": 44.2,
                "metric_type": "LTV",
                "x": 44.2,
                "y": 80
              },
              {
                "cumpct_pct": 80,
                "cumpct_cust": 44.2,
                "metric_type": "LTV",
                "x": 44.2,
                "y": 80
              },
              {
                "cumpct_pct": 80.1,
                "cumpct_cust": 44.3,
                "metric_type": "LTV",
                "x": 44.3,
                "y": 80.1
              },
              {
                "cumpct_pct": 80.1,
                "cumpct_cust": 44.4,
                "metric_type": "LTV",
                "x": 44.4,
                "y": 80.1
              },
              {
                "cumpct_pct": 80.2,
                "cumpct_cust": 44.5,
                "metric_type": "LTV",
                "x": 44.5,
                "y": 80.2
              },
              {
                "cumpct_pct": 80.2,
                "cumpct_cust": 44.5,
                "metric_type": "LTV",
                "x": 44.5,
                "y": 80.2
              },
              {
                "cumpct_pct": 80.2,
                "cumpct_cust": 44.5,
                "metric_type": "LTV",
                "x": 44.5,
                "y": 80.2
              },
              {
                "cumpct_pct": 80.3,
                "cumpct_cust": 44.6,
                "metric_type": "LTV",
                "x": 44.6,
                "y": 80.3
              },
              {
                "cumpct_pct": 80.3,
                "cumpct_cust": 44.6,
                "metric_type": "LTV",
                "x": 44.6,
                "y": 80.3
              },
              {
                "cumpct_pct": 80.3,
                "cumpct_cust": 44.7,
                "metric_type": "LTV",
                "x": 44.7,
                "y": 80.3
              },
              {
                "cumpct_pct": 80.4,
                "cumpct_cust": 44.7,
                "metric_type": "LTV",
                "x": 44.7,
                "y": 80.4
              },
              {
                "cumpct_pct": 80.4,
                "cumpct_cust": 44.8,
                "metric_type": "LTV",
                "x": 44.8,
                "y": 80.4
              },
              {
                "cumpct_pct": 80.5,
                "cumpct_cust": 44.9,
                "metric_type": "LTV",
                "x": 44.9,
                "y": 80.5
              },
              {
                "cumpct_pct": 80.6,
                "cumpct_cust": 45,
                "metric_type": "LTV",
                "x": 45,
                "y": 80.6
              },
              {
                "cumpct_pct": 80.6,
                "cumpct_cust": 45.1,
                "metric_type": "LTV",
                "x": 45.1,
                "y": 80.6
              },
              {
                "cumpct_pct": 80.7,
                "cumpct_cust": 45.1,
                "metric_type": "LTV",
                "x": 45.1,
                "y": 80.7
              },
              {
                "cumpct_pct": 80.7,
                "cumpct_cust": 45.2,
                "metric_type": "LTV",
                "x": 45.2,
                "y": 80.7
              },
              {
                "cumpct_pct": 80.7,
                "cumpct_cust": 45.2,
                "metric_type": "LTV",
                "x": 45.2,
                "y": 80.7
              },
              {
                "cumpct_pct": 80.7,
                "cumpct_cust": 45.2,
                "metric_type": "LTV",
                "x": 45.2,
                "y": 80.7
              },
              {
                "cumpct_pct": 80.8,
                "cumpct_cust": 45.3,
                "metric_type": "LTV",
                "x": 45.3,
                "y": 80.8
              },
              {
                "cumpct_pct": 80.8,
                "cumpct_cust": 45.3,
                "metric_type": "LTV",
                "x": 45.3,
                "y": 80.8
              },
              {
                "cumpct_pct": 80.8,
                "cumpct_cust": 45.3,
                "metric_type": "LTV",
                "x": 45.3,
                "y": 80.8
              },
              {
                "cumpct_pct": 80.9,
                "cumpct_cust": 45.4,
                "metric_type": "LTV",
                "x": 45.4,
                "y": 80.9
              },
              {
                "cumpct_pct": 80.9,
                "cumpct_cust": 45.5,
                "metric_type": "LTV",
                "x": 45.5,
                "y": 80.9
              },
              {
                "cumpct_pct": 81.5,
                "cumpct_cust": 46.3,
                "metric_type": "LTV",
                "x": 46.3,
                "y": 81.5
              },
              {
                "cumpct_pct": 81.5,
                "cumpct_cust": 46.4,
                "metric_type": "LTV",
                "x": 46.4,
                "y": 81.5
              },
              {
                "cumpct_pct": 81.6,
                "cumpct_cust": 46.5,
                "metric_type": "LTV",
                "x": 46.5,
                "y": 81.6
              },
              {
                "cumpct_pct": 81.7,
                "cumpct_cust": 46.7,
                "metric_type": "LTV",
                "x": 46.7,
                "y": 81.7
              },
              {
                "cumpct_pct": 82,
                "cumpct_cust": 47.2,
                "metric_type": "LTV",
                "x": 47.2,
                "y": 82
              },
              {
                "cumpct_pct": 82.2,
                "cumpct_cust": 47.4,
                "metric_type": "LTV",
                "x": 47.4,
                "y": 82.2
              },
              {
                "cumpct_pct": 82.2,
                "cumpct_cust": 47.4,
                "metric_type": "LTV",
                "x": 47.4,
                "y": 82.2
              },
              {
                "cumpct_pct": 82.2,
                "cumpct_cust": 47.5,
                "metric_type": "LTV",
                "x": 47.5,
                "y": 82.2
              },
              {
                "cumpct_pct": 82.3,
                "cumpct_cust": 47.6,
                "metric_type": "LTV",
                "x": 47.6,
                "y": 82.3
              },
              {
                "cumpct_pct": 82.4,
                "cumpct_cust": 47.8,
                "metric_type": "LTV",
                "x": 47.8,
                "y": 82.4
              },
              {
                "cumpct_pct": 82.5,
                "cumpct_cust": 47.9,
                "metric_type": "LTV",
                "x": 47.9,
                "y": 82.5
              },
              {
                "cumpct_pct": 82.5,
                "cumpct_cust": 47.9,
                "metric_type": "LTV",
                "x": 47.9,
                "y": 82.5
              },
              {
                "cumpct_pct": 82.5,
                "cumpct_cust": 47.9,
                "metric_type": "LTV",
                "x": 47.9,
                "y": 82.5
              },
              {
                "cumpct_pct": 82.5,
                "cumpct_cust": 48,
                "metric_type": "LTV",
                "x": 48,
                "y": 82.5
              },
              {
                "cumpct_pct": 82.6,
                "cumpct_cust": 48.1,
                "metric_type": "LTV",
                "x": 48.1,
                "y": 82.6
              },
              {
                "cumpct_pct": 82.6,
                "cumpct_cust": 48.1,
                "metric_type": "LTV",
                "x": 48.1,
                "y": 82.6
              },
              {
                "cumpct_pct": 82.6,
                "cumpct_cust": 48.1,
                "metric_type": "LTV",
                "x": 48.1,
                "y": 82.6
              },
              {
                "cumpct_pct": 82.7,
                "cumpct_cust": 48.2,
                "metric_type": "LTV",
                "x": 48.2,
                "y": 82.7
              },
              {
                "cumpct_pct": 82.7,
                "cumpct_cust": 48.2,
                "metric_type": "LTV",
                "x": 48.2,
                "y": 82.7
              },
              {
                "cumpct_pct": 82.7,
                "cumpct_cust": 48.2,
                "metric_type": "LTV",
                "x": 48.2,
                "y": 82.7
              },
              {
                "cumpct_pct": 82.8,
                "cumpct_cust": 48.4,
                "metric_type": "LTV",
                "x": 48.4,
                "y": 82.8
              },
              {
                "cumpct_pct": 83,
                "cumpct_cust": 48.7,
                "metric_type": "LTV",
                "x": 48.7,
                "y": 83
              },
              {
                "cumpct_pct": 83.1,
                "cumpct_cust": 48.9,
                "metric_type": "LTV",
                "x": 48.9,
                "y": 83.1
              },
              {
                "cumpct_pct": 83.4,
                "cumpct_cust": 49.3,
                "metric_type": "LTV",
                "x": 49.3,
                "y": 83.4
              },
              {
                "cumpct_pct": 83.5,
                "cumpct_cust": 49.5,
                "metric_type": "LTV",
                "x": 49.5,
                "y": 83.5
              },
              {
                "cumpct_pct": 83.5,
                "cumpct_cust": 49.6,
                "metric_type": "LTV",
                "x": 49.6,
                "y": 83.5
              },
              {
                "cumpct_pct": 83.5,
                "cumpct_cust": 49.6,
                "metric_type": "LTV",
                "x": 49.6,
                "y": 83.5
              },
              {
                "cumpct_pct": 83.6,
                "cumpct_cust": 49.8,
                "metric_type": "LTV",
                "x": 49.8,
                "y": 83.6
              },
              {
                "cumpct_pct": 83.8,
                "cumpct_cust": 50,
                "metric_type": "LTV",
                "x": 50,
                "y": 83.8
              },
              {
                "cumpct_pct": 84,
                "cumpct_cust": 50.4,
                "metric_type": "LTV",
                "x": 50.4,
                "y": 84
              },
              {
                "cumpct_pct": 84,
                "cumpct_cust": 50.4,
                "metric_type": "LTV",
                "x": 50.4,
                "y": 84
              },
              {
                "cumpct_pct": 84.1,
                "cumpct_cust": 50.5,
                "metric_type": "LTV",
                "x": 50.5,
                "y": 84.1
              },
              {
                "cumpct_pct": 84.1,
                "cumpct_cust": 50.6,
                "metric_type": "LTV",
                "x": 50.6,
                "y": 84.1
              },
              {
                "cumpct_pct": 84.1,
                "cumpct_cust": 50.6,
                "metric_type": "LTV",
                "x": 50.6,
                "y": 84.1
              },
              {
                "cumpct_pct": 84.2,
                "cumpct_cust": 50.7,
                "metric_type": "LTV",
                "x": 50.7,
                "y": 84.2
              },
              {
                "cumpct_pct": 84.2,
                "cumpct_cust": 50.7,
                "metric_type": "LTV",
                "x": 50.7,
                "y": 84.2
              },
              {
                "cumpct_pct": 84.2,
                "cumpct_cust": 50.7,
                "metric_type": "LTV",
                "x": 50.7,
                "y": 84.2
              },
              {
                "cumpct_pct": 84.3,
                "cumpct_cust": 50.9,
                "metric_type": "LTV",
                "x": 50.9,
                "y": 84.3
              },
              {
                "cumpct_pct": 84.4,
                "cumpct_cust": 51,
                "metric_type": "LTV",
                "x": 51,
                "y": 84.4
              },
              {
                "cumpct_pct": 84.5,
                "cumpct_cust": 51.2,
                "metric_type": "LTV",
                "x": 51.2,
                "y": 84.5
              },
              {
                "cumpct_pct": 84.5,
                "cumpct_cust": 51.3,
                "metric_type": "LTV",
                "x": 51.3,
                "y": 84.5
              },
              {
                "cumpct_pct": 84.6,
                "cumpct_cust": 51.5,
                "metric_type": "LTV",
                "x": 51.5,
                "y": 84.6
              },
              {
                "cumpct_pct": 84.7,
                "cumpct_cust": 51.6,
                "metric_type": "LTV",
                "x": 51.6,
                "y": 84.7
              },
              {
                "cumpct_pct": 84.7,
                "cumpct_cust": 51.6,
                "metric_type": "LTV",
                "x": 51.6,
                "y": 84.7
              },
              {
                "cumpct_pct": 84.8,
                "cumpct_cust": 51.8,
                "metric_type": "LTV",
                "x": 51.8,
                "y": 84.8
              },
              {
                "cumpct_pct": 84.8,
                "cumpct_cust": 51.8,
                "metric_type": "LTV",
                "x": 51.8,
                "y": 84.8
              },
              {
                "cumpct_pct": 84.8,
                "cumpct_cust": 51.8,
                "metric_type": "LTV",
                "x": 51.8,
                "y": 84.8
              },
              {
                "cumpct_pct": 84.8,
                "cumpct_cust": 51.8,
                "metric_type": "LTV",
                "x": 51.8,
                "y": 84.8
              },
              {
                "cumpct_pct": 84.9,
                "cumpct_cust": 51.9,
                "metric_type": "LTV",
                "x": 51.9,
                "y": 84.9
              },
              {
                "cumpct_pct": 85,
                "cumpct_cust": 52,
                "metric_type": "LTV",
                "x": 52,
                "y": 85
              },
              {
                "cumpct_pct": 85,
                "cumpct_cust": 52.1,
                "metric_type": "LTV",
                "x": 52.1,
                "y": 85
              },
              {
                "cumpct_pct": 85.1,
                "cumpct_cust": 52.2,
                "metric_type": "LTV",
                "x": 52.2,
                "y": 85.1
              },
              {
                "cumpct_pct": 85.1,
                "cumpct_cust": 52.3,
                "metric_type": "LTV",
                "x": 52.3,
                "y": 85.1
              },
              {
                "cumpct_pct": 85.3,
                "cumpct_cust": 52.7,
                "metric_type": "LTV",
                "x": 52.7,
                "y": 85.3
              },
              {
                "cumpct_pct": 85.4,
                "cumpct_cust": 52.7,
                "metric_type": "LTV",
                "x": 52.7,
                "y": 85.4
              },
              {
                "cumpct_pct": 85.4,
                "cumpct_cust": 52.8,
                "metric_type": "LTV",
                "x": 52.8,
                "y": 85.4
              },
              {
                "cumpct_pct": 85.7,
                "cumpct_cust": 53.3,
                "metric_type": "LTV",
                "x": 53.3,
                "y": 85.7
              },
              {
                "cumpct_pct": 85.7,
                "cumpct_cust": 53.3,
                "metric_type": "LTV",
                "x": 53.3,
                "y": 85.7
              },
              {
                "cumpct_pct": 85.8,
                "cumpct_cust": 53.4,
                "metric_type": "LTV",
                "x": 53.4,
                "y": 85.8
              },
              {
                "cumpct_pct": 85.8,
                "cumpct_cust": 53.6,
                "metric_type": "LTV",
                "x": 53.6,
                "y": 85.8
              },
              {
                "cumpct_pct": 85.9,
                "cumpct_cust": 53.6,
                "metric_type": "LTV",
                "x": 53.6,
                "y": 85.9
              },
              {
                "cumpct_pct": 85.9,
                "cumpct_cust": 53.6,
                "metric_type": "LTV",
                "x": 53.6,
                "y": 85.9
              },
              {
                "cumpct_pct": 85.9,
                "cumpct_cust": 53.7,
                "metric_type": "LTV",
                "x": 53.7,
                "y": 85.9
              },
              {
                "cumpct_pct": 85.9,
                "cumpct_cust": 53.7,
                "metric_type": "LTV",
                "x": 53.7,
                "y": 85.9
              },
              {
                "cumpct_pct": 86,
                "cumpct_cust": 53.8,
                "metric_type": "LTV",
                "x": 53.8,
                "y": 86
              },
              {
                "cumpct_pct": 86,
                "cumpct_cust": 53.9,
                "metric_type": "LTV",
                "x": 53.9,
                "y": 86
              },
              {
                "cumpct_pct": 86.1,
                "cumpct_cust": 54.1,
                "metric_type": "LTV",
                "x": 54.1,
                "y": 86.1
              },
              {
                "cumpct_pct": 86.3,
                "cumpct_cust": 54.4,
                "metric_type": "LTV",
                "x": 54.4,
                "y": 86.3
              },
              {
                "cumpct_pct": 86.3,
                "cumpct_cust": 54.4,
                "metric_type": "LTV",
                "x": 54.4,
                "y": 86.3
              },
              {
                "cumpct_pct": 86.4,
                "cumpct_cust": 54.6,
                "metric_type": "LTV",
                "x": 54.6,
                "y": 86.4
              },
              {
                "cumpct_pct": 86.4,
                "cumpct_cust": 54.6,
                "metric_type": "LTV",
                "x": 54.6,
                "y": 86.4
              },
              {
                "cumpct_pct": 86.6,
                "cumpct_cust": 54.9,
                "metric_type": "LTV",
                "x": 54.9,
                "y": 86.6
              },
              {
                "cumpct_pct": 86.6,
                "cumpct_cust": 54.9,
                "metric_type": "LTV",
                "x": 54.9,
                "y": 86.6
              },
              {
                "cumpct_pct": 86.6,
                "cumpct_cust": 55.1,
                "metric_type": "LTV",
                "x": 55.1,
                "y": 86.6
              },
              {
                "cumpct_pct": 86.7,
                "cumpct_cust": 55.1,
                "metric_type": "LTV",
                "x": 55.1,
                "y": 86.7
              },
              {
                "cumpct_pct": 86.7,
                "cumpct_cust": 55.2,
                "metric_type": "LTV",
                "x": 55.2,
                "y": 86.7
              },
              {
                "cumpct_pct": 86.7,
                "cumpct_cust": 55.2,
                "metric_type": "LTV",
                "x": 55.2,
                "y": 86.7
              },
              {
                "cumpct_pct": 86.7,
                "cumpct_cust": 55.2,
                "metric_type": "LTV",
                "x": 55.2,
                "y": 86.7
              },
              {
                "cumpct_pct": 86.8,
                "cumpct_cust": 55.4,
                "metric_type": "LTV",
                "x": 55.4,
                "y": 86.8
              },
              {
                "cumpct_pct": 86.9,
                "cumpct_cust": 55.5,
                "metric_type": "LTV",
                "x": 55.5,
                "y": 86.9
              },
              {
                "cumpct_pct": 86.9,
                "cumpct_cust": 55.6,
                "metric_type": "LTV",
                "x": 55.6,
                "y": 86.9
              },
              {
                "cumpct_pct": 87,
                "cumpct_cust": 55.7,
                "metric_type": "LTV",
                "x": 55.7,
                "y": 87
              },
              {
                "cumpct_pct": 87,
                "cumpct_cust": 55.7,
                "metric_type": "LTV",
                "x": 55.7,
                "y": 87
              },
              {
                "cumpct_pct": 87,
                "cumpct_cust": 55.8,
                "metric_type": "LTV",
                "x": 55.8,
                "y": 87
              },
              {
                "cumpct_pct": 87,
                "cumpct_cust": 55.8,
                "metric_type": "LTV",
                "x": 55.8,
                "y": 87
              },
              {
                "cumpct_pct": 87,
                "cumpct_cust": 55.8,
                "metric_type": "LTV",
                "x": 55.8,
                "y": 87
              },
              {
                "cumpct_pct": 87.1,
                "cumpct_cust": 55.9,
                "metric_type": "LTV",
                "x": 55.9,
                "y": 87.1
              },
              {
                "cumpct_pct": 87.1,
                "cumpct_cust": 55.9,
                "metric_type": "LTV",
                "x": 55.9,
                "y": 87.1
              },
              {
                "cumpct_pct": 87.2,
                "cumpct_cust": 56.1,
                "metric_type": "LTV",
                "x": 56.1,
                "y": 87.2
              },
              {
                "cumpct_pct": 87.3,
                "cumpct_cust": 56.3,
                "metric_type": "LTV",
                "x": 56.3,
                "y": 87.3
              },
              {
                "cumpct_pct": 87.3,
                "cumpct_cust": 56.3,
                "metric_type": "LTV",
                "x": 56.3,
                "y": 87.3
              },
              {
                "cumpct_pct": 87.3,
                "cumpct_cust": 56.4,
                "metric_type": "LTV",
                "x": 56.4,
                "y": 87.3
              },
              {
                "cumpct_pct": 87.4,
                "cumpct_cust": 56.5,
                "metric_type": "LTV",
                "x": 56.5,
                "y": 87.4
              },
              {
                "cumpct_pct": 87.4,
                "cumpct_cust": 56.5,
                "metric_type": "LTV",
                "x": 56.5,
                "y": 87.4
              },
              {
                "cumpct_pct": 87.6,
                "cumpct_cust": 56.9,
                "metric_type": "LTV",
                "x": 56.9,
                "y": 87.6
              },
              {
                "cumpct_pct": 87.7,
                "cumpct_cust": 57.1,
                "metric_type": "LTV",
                "x": 57.1,
                "y": 87.7
              },
              {
                "cumpct_pct": 87.7,
                "cumpct_cust": 57.1,
                "metric_type": "LTV",
                "x": 57.1,
                "y": 87.7
              },
              {
                "cumpct_pct": 87.7,
                "cumpct_cust": 57.2,
                "metric_type": "LTV",
                "x": 57.2,
                "y": 87.7
              },
              {
                "cumpct_pct": 87.7,
                "cumpct_cust": 57.2,
                "metric_type": "LTV",
                "x": 57.2,
                "y": 87.7
              },
              {
                "cumpct_pct": 87.8,
                "cumpct_cust": 57.2,
                "metric_type": "LTV",
                "x": 57.2,
                "y": 87.8
              },
              {
                "cumpct_pct": 87.8,
                "cumpct_cust": 57.4,
                "metric_type": "LTV",
                "x": 57.4,
                "y": 87.8
              },
              {
                "cumpct_pct": 87.9,
                "cumpct_cust": 57.5,
                "metric_type": "LTV",
                "x": 57.5,
                "y": 87.9
              },
              {
                "cumpct_pct": 87.9,
                "cumpct_cust": 57.5,
                "metric_type": "LTV",
                "x": 57.5,
                "y": 87.9
              },
              {
                "cumpct_pct": 87.9,
                "cumpct_cust": 57.5,
                "metric_type": "LTV",
                "x": 57.5,
                "y": 87.9
              },
              {
                "cumpct_pct": 87.9,
                "cumpct_cust": 57.6,
                "metric_type": "LTV",
                "x": 57.6,
                "y": 87.9
              },
              {
                "cumpct_pct": 88.2,
                "cumpct_cust": 58.1,
                "metric_type": "LTV",
                "x": 58.1,
                "y": 88.2
              },
              {
                "cumpct_pct": 88.2,
                "cumpct_cust": 58.3,
                "metric_type": "LTV",
                "x": 58.3,
                "y": 88.2
              },
              {
                "cumpct_pct": 88.4,
                "cumpct_cust": 58.5,
                "metric_type": "LTV",
                "x": 58.5,
                "y": 88.4
              },
              {
                "cumpct_pct": 88.4,
                "cumpct_cust": 58.6,
                "metric_type": "LTV",
                "x": 58.6,
                "y": 88.4
              },
              {
                "cumpct_pct": 88.4,
                "cumpct_cust": 58.6,
                "metric_type": "LTV",
                "x": 58.6,
                "y": 88.4
              },
              {
                "cumpct_pct": 88.5,
                "cumpct_cust": 58.7,
                "metric_type": "LTV",
                "x": 58.7,
                "y": 88.5
              },
              {
                "cumpct_pct": 88.5,
                "cumpct_cust": 58.7,
                "metric_type": "LTV",
                "x": 58.7,
                "y": 88.5
              },
              {
                "cumpct_pct": 88.5,
                "cumpct_cust": 58.8,
                "metric_type": "LTV",
                "x": 58.8,
                "y": 88.5
              },
              {
                "cumpct_pct": 88.5,
                "cumpct_cust": 58.8,
                "metric_type": "LTV",
                "x": 58.8,
                "y": 88.5
              },
              {
                "cumpct_pct": 88.6,
                "cumpct_cust": 59.1,
                "metric_type": "LTV",
                "x": 59.1,
                "y": 88.6
              },
              {
                "cumpct_pct": 88.7,
                "cumpct_cust": 59.3,
                "metric_type": "LTV",
                "x": 59.3,
                "y": 88.7
              },
              {
                "cumpct_pct": 88.8,
                "cumpct_cust": 59.4,
                "metric_type": "LTV",
                "x": 59.4,
                "y": 88.8
              },
              {
                "cumpct_pct": 88.8,
                "cumpct_cust": 59.5,
                "metric_type": "LTV",
                "x": 59.5,
                "y": 88.8
              },
              {
                "cumpct_pct": 88.9,
                "cumpct_cust": 59.6,
                "metric_type": "LTV",
                "x": 59.6,
                "y": 88.9
              },
              {
                "cumpct_pct": 88.9,
                "cumpct_cust": 59.6,
                "metric_type": "LTV",
                "x": 59.6,
                "y": 88.9
              },
              {
                "cumpct_pct": 89,
                "cumpct_cust": 59.9,
                "metric_type": "LTV",
                "x": 59.9,
                "y": 89
              },
              {
                "cumpct_pct": 89.1,
                "cumpct_cust": 60,
                "metric_type": "LTV",
                "x": 60,
                "y": 89.1
              },
              {
                "cumpct_pct": 89.1,
                "cumpct_cust": 60,
                "metric_type": "LTV",
                "x": 60,
                "y": 89.1
              },
              {
                "cumpct_pct": 89.2,
                "cumpct_cust": 60.3,
                "metric_type": "LTV",
                "x": 60.3,
                "y": 89.2
              },
              {
                "cumpct_pct": 89.2,
                "cumpct_cust": 60.3,
                "metric_type": "LTV",
                "x": 60.3,
                "y": 89.2
              },
              {
                "cumpct_pct": 89.2,
                "cumpct_cust": 60.4,
                "metric_type": "LTV",
                "x": 60.4,
                "y": 89.2
              },
              {
                "cumpct_pct": 89.3,
                "cumpct_cust": 60.5,
                "metric_type": "LTV",
                "x": 60.5,
                "y": 89.3
              },
              {
                "cumpct_pct": 89.3,
                "cumpct_cust": 60.5,
                "metric_type": "LTV",
                "x": 60.5,
                "y": 89.3
              },
              {
                "cumpct_pct": 89.3,
                "cumpct_cust": 60.6,
                "metric_type": "LTV",
                "x": 60.6,
                "y": 89.3
              },
              {
                "cumpct_pct": 89.4,
                "cumpct_cust": 60.7,
                "metric_type": "LTV",
                "x": 60.7,
                "y": 89.4
              },
              {
                "cumpct_pct": 89.4,
                "cumpct_cust": 60.8,
                "metric_type": "LTV",
                "x": 60.8,
                "y": 89.4
              },
              {
                "cumpct_pct": 89.4,
                "cumpct_cust": 60.9,
                "metric_type": "LTV",
                "x": 60.9,
                "y": 89.4
              },
              {
                "cumpct_pct": 89.5,
                "cumpct_cust": 60.9,
                "metric_type": "LTV",
                "x": 60.9,
                "y": 89.5
              },
              {
                "cumpct_pct": 89.5,
                "cumpct_cust": 61,
                "metric_type": "LTV",
                "x": 61,
                "y": 89.5
              },
              {
                "cumpct_pct": 89.5,
                "cumpct_cust": 61,
                "metric_type": "LTV",
                "x": 61,
                "y": 89.5
              },
              {
                "cumpct_pct": 89.7,
                "cumpct_cust": 61.3,
                "metric_type": "LTV",
                "x": 61.3,
                "y": 89.7
              },
              {
                "cumpct_pct": 89.7,
                "cumpct_cust": 61.5,
                "metric_type": "LTV",
                "x": 61.5,
                "y": 89.7
              },
              {
                "cumpct_pct": 89.8,
                "cumpct_cust": 61.7,
                "metric_type": "LTV",
                "x": 61.7,
                "y": 89.8
              },
              {
                "cumpct_pct": 89.9,
                "cumpct_cust": 61.8,
                "metric_type": "LTV",
                "x": 61.8,
                "y": 89.9
              },
              {
                "cumpct_pct": 89.9,
                "cumpct_cust": 61.8,
                "metric_type": "LTV",
                "x": 61.8,
                "y": 89.9
              },
              {
                "cumpct_pct": 89.9,
                "cumpct_cust": 61.9,
                "metric_type": "LTV",
                "x": 61.9,
                "y": 89.9
              },
              {
                "cumpct_pct": 89.9,
                "cumpct_cust": 61.9,
                "metric_type": "LTV",
                "x": 61.9,
                "y": 89.9
              },
              {
                "cumpct_pct": 89.9,
                "cumpct_cust": 62,
                "metric_type": "LTV",
                "x": 62,
                "y": 89.9
              },
              {
                "cumpct_pct": 90,
                "cumpct_cust": 62.1,
                "metric_type": "LTV",
                "x": 62.1,
                "y": 90
              },
              {
                "cumpct_pct": 90.1,
                "cumpct_cust": 62.4,
                "metric_type": "LTV",
                "x": 62.4,
                "y": 90.1
              },
              {
                "cumpct_pct": 90.1,
                "cumpct_cust": 62.4,
                "metric_type": "LTV",
                "x": 62.4,
                "y": 90.1
              },
              {
                "cumpct_pct": 90.2,
                "cumpct_cust": 62.5,
                "metric_type": "LTV",
                "x": 62.5,
                "y": 90.2
              },
              {
                "cumpct_pct": 90.2,
                "cumpct_cust": 62.5,
                "metric_type": "LTV",
                "x": 62.5,
                "y": 90.2
              },
              {
                "cumpct_pct": 90.2,
                "cumpct_cust": 62.6,
                "metric_type": "LTV",
                "x": 62.6,
                "y": 90.2
              },
              {
                "cumpct_pct": 90.2,
                "cumpct_cust": 62.6,
                "metric_type": "LTV",
                "x": 62.6,
                "y": 90.2
              },
              {
                "cumpct_pct": 90.2,
                "cumpct_cust": 62.7,
                "metric_type": "LTV",
                "x": 62.7,
                "y": 90.2
              },
              {
                "cumpct_pct": 90.3,
                "cumpct_cust": 62.7,
                "metric_type": "LTV",
                "x": 62.7,
                "y": 90.3
              },
              {
                "cumpct_pct": 90.3,
                "cumpct_cust": 62.8,
                "metric_type": "LTV",
                "x": 62.8,
                "y": 90.3
              },
              {
                "cumpct_pct": 90.4,
                "cumpct_cust": 62.9,
                "metric_type": "LTV",
                "x": 62.9,
                "y": 90.4
              },
              {
                "cumpct_pct": 90.4,
                "cumpct_cust": 63,
                "metric_type": "LTV",
                "x": 63,
                "y": 90.4
              },
              {
                "cumpct_pct": 90.4,
                "cumpct_cust": 63.1,
                "metric_type": "LTV",
                "x": 63.1,
                "y": 90.4
              },
              {
                "cumpct_pct": 90.4,
                "cumpct_cust": 63.1,
                "metric_type": "LTV",
                "x": 63.1,
                "y": 90.4
              },
              {
                "cumpct_pct": 90.6,
                "cumpct_cust": 63.6,
                "metric_type": "LTV",
                "x": 63.6,
                "y": 90.6
              },
              {
                "cumpct_pct": 90.6,
                "cumpct_cust": 63.6,
                "metric_type": "LTV",
                "x": 63.6,
                "y": 90.6
              },
              {
                "cumpct_pct": 90.7,
                "cumpct_cust": 63.7,
                "metric_type": "LTV",
                "x": 63.7,
                "y": 90.7
              },
              {
                "cumpct_pct": 90.7,
                "cumpct_cust": 63.8,
                "metric_type": "LTV",
                "x": 63.8,
                "y": 90.7
              },
              {
                "cumpct_pct": 90.7,
                "cumpct_cust": 63.8,
                "metric_type": "LTV",
                "x": 63.8,
                "y": 90.7
              },
              {
                "cumpct_pct": 90.7,
                "cumpct_cust": 63.8,
                "metric_type": "LTV",
                "x": 63.8,
                "y": 90.7
              },
              {
                "cumpct_pct": 90.8,
                "cumpct_cust": 63.9,
                "metric_type": "LTV",
                "x": 63.9,
                "y": 90.8
              },
              {
                "cumpct_pct": 91.1,
                "cumpct_cust": 64.6,
                "metric_type": "LTV",
                "x": 64.6,
                "y": 91.1
              },
              {
                "cumpct_pct": 91.1,
                "cumpct_cust": 64.6,
                "metric_type": "LTV",
                "x": 64.6,
                "y": 91.1
              },
              {
                "cumpct_pct": 91.2,
                "cumpct_cust": 65,
                "metric_type": "LTV",
                "x": 65,
                "y": 91.2
              },
              {
                "cumpct_pct": 91.3,
                "cumpct_cust": 65.2,
                "metric_type": "LTV",
                "x": 65.2,
                "y": 91.3
              },
              {
                "cumpct_pct": 91.3,
                "cumpct_cust": 65.2,
                "metric_type": "LTV",
                "x": 65.2,
                "y": 91.3
              },
              {
                "cumpct_pct": 91.3,
                "cumpct_cust": 65.2,
                "metric_type": "LTV",
                "x": 65.2,
                "y": 91.3
              },
              {
                "cumpct_pct": 91.3,
                "cumpct_cust": 65.2,
                "metric_type": "LTV",
                "x": 65.2,
                "y": 91.3
              },
              {
                "cumpct_pct": 91.3,
                "cumpct_cust": 65.3,
                "metric_type": "LTV",
                "x": 65.3,
                "y": 91.3
              },
              {
                "cumpct_pct": 91.3,
                "cumpct_cust": 65.3,
                "metric_type": "LTV",
                "x": 65.3,
                "y": 91.3
              },
              {
                "cumpct_pct": 91.4,
                "cumpct_cust": 65.4,
                "metric_type": "LTV",
                "x": 65.4,
                "y": 91.4
              },
              {
                "cumpct_pct": 91.4,
                "cumpct_cust": 65.5,
                "metric_type": "LTV",
                "x": 65.5,
                "y": 91.4
              },
              {
                "cumpct_pct": 91.4,
                "cumpct_cust": 65.6,
                "metric_type": "LTV",
                "x": 65.6,
                "y": 91.4
              },
              {
                "cumpct_pct": 91.5,
                "cumpct_cust": 65.7,
                "metric_type": "LTV",
                "x": 65.7,
                "y": 91.5
              },
              {
                "cumpct_pct": 91.5,
                "cumpct_cust": 65.7,
                "metric_type": "LTV",
                "x": 65.7,
                "y": 91.5
              },
              {
                "cumpct_pct": 91.5,
                "cumpct_cust": 65.8,
                "metric_type": "LTV",
                "x": 65.8,
                "y": 91.5
              },
              {
                "cumpct_pct": 91.5,
                "cumpct_cust": 65.8,
                "metric_type": "LTV",
                "x": 65.8,
                "y": 91.5
              },
              {
                "cumpct_pct": 91.5,
                "cumpct_cust": 65.8,
                "metric_type": "LTV",
                "x": 65.8,
                "y": 91.5
              },
              {
                "cumpct_pct": 91.6,
                "cumpct_cust": 66,
                "metric_type": "LTV",
                "x": 66,
                "y": 91.6
              },
              {
                "cumpct_pct": 91.6,
                "cumpct_cust": 66,
                "metric_type": "LTV",
                "x": 66,
                "y": 91.6
              },
              {
                "cumpct_pct": 91.6,
                "cumpct_cust": 66,
                "metric_type": "LTV",
                "x": 66,
                "y": 91.6
              },
              {
                "cumpct_pct": 91.6,
                "cumpct_cust": 66.1,
                "metric_type": "LTV",
                "x": 66.1,
                "y": 91.6
              },
              {
                "cumpct_pct": 91.7,
                "cumpct_cust": 66.1,
                "metric_type": "LTV",
                "x": 66.1,
                "y": 91.7
              },
              {
                "cumpct_pct": 91.8,
                "cumpct_cust": 66.4,
                "metric_type": "LTV",
                "x": 66.4,
                "y": 91.8
              },
              {
                "cumpct_pct": 91.8,
                "cumpct_cust": 66.5,
                "metric_type": "LTV",
                "x": 66.5,
                "y": 91.8
              },
              {
                "cumpct_pct": 91.8,
                "cumpct_cust": 66.5,
                "metric_type": "LTV",
                "x": 66.5,
                "y": 91.8
              },
              {
                "cumpct_pct": 91.9,
                "cumpct_cust": 66.7,
                "metric_type": "LTV",
                "x": 66.7,
                "y": 91.9
              },
              {
                "cumpct_pct": 91.9,
                "cumpct_cust": 66.8,
                "metric_type": "LTV",
                "x": 66.8,
                "y": 91.9
              },
              {
                "cumpct_pct": 91.9,
                "cumpct_cust": 66.9,
                "metric_type": "LTV",
                "x": 66.9,
                "y": 91.9
              },
              {
                "cumpct_pct": 92,
                "cumpct_cust": 67,
                "metric_type": "LTV",
                "x": 67,
                "y": 92
              },
              {
                "cumpct_pct": 92,
                "cumpct_cust": 67,
                "metric_type": "LTV",
                "x": 67,
                "y": 92
              },
              {
                "cumpct_pct": 92,
                "cumpct_cust": 67,
                "metric_type": "LTV",
                "x": 67,
                "y": 92
              },
              {
                "cumpct_pct": 92,
                "cumpct_cust": 67.1,
                "metric_type": "LTV",
                "x": 67.1,
                "y": 92
              },
              {
                "cumpct_pct": 92.1,
                "cumpct_cust": 67.2,
                "metric_type": "LTV",
                "x": 67.2,
                "y": 92.1
              },
              {
                "cumpct_pct": 92.1,
                "cumpct_cust": 67.2,
                "metric_type": "LTV",
                "x": 67.2,
                "y": 92.1
              },
              {
                "cumpct_pct": 92.1,
                "cumpct_cust": 67.3,
                "metric_type": "LTV",
                "x": 67.3,
                "y": 92.1
              },
              {
                "cumpct_pct": 92.1,
                "cumpct_cust": 67.4,
                "metric_type": "LTV",
                "x": 67.4,
                "y": 92.1
              },
              {
                "cumpct_pct": 92.1,
                "cumpct_cust": 67.4,
                "metric_type": "LTV",
                "x": 67.4,
                "y": 92.1
              },
              {
                "cumpct_pct": 92.2,
                "cumpct_cust": 67.4,
                "metric_type": "LTV",
                "x": 67.4,
                "y": 92.2
              },
              {
                "cumpct_pct": 92.2,
                "cumpct_cust": 67.6,
                "metric_type": "LTV",
                "x": 67.6,
                "y": 92.2
              },
              {
                "cumpct_pct": 92.2,
                "cumpct_cust": 67.6,
                "metric_type": "LTV",
                "x": 67.6,
                "y": 92.2
              },
              {
                "cumpct_pct": 92.2,
                "cumpct_cust": 67.7,
                "metric_type": "LTV",
                "x": 67.7,
                "y": 92.2
              },
              {
                "cumpct_pct": 92.3,
                "cumpct_cust": 67.8,
                "metric_type": "LTV",
                "x": 67.8,
                "y": 92.3
              },
              {
                "cumpct_pct": 92.3,
                "cumpct_cust": 67.9,
                "metric_type": "LTV",
                "x": 67.9,
                "y": 92.3
              },
              {
                "cumpct_pct": 92.3,
                "cumpct_cust": 67.9,
                "metric_type": "LTV",
                "x": 67.9,
                "y": 92.3
              },
              {
                "cumpct_pct": 92.5,
                "cumpct_cust": 68.3,
                "metric_type": "LTV",
                "x": 68.3,
                "y": 92.5
              },
              {
                "cumpct_pct": 92.5,
                "cumpct_cust": 68.4,
                "metric_type": "LTV",
                "x": 68.4,
                "y": 92.5
              },
              {
                "cumpct_pct": 92.5,
                "cumpct_cust": 68.4,
                "metric_type": "LTV",
                "x": 68.4,
                "y": 92.5
              },
              {
                "cumpct_pct": 92.5,
                "cumpct_cust": 68.4,
                "metric_type": "LTV",
                "x": 68.4,
                "y": 92.5
              },
              {
                "cumpct_pct": 92.5,
                "cumpct_cust": 68.5,
                "metric_type": "LTV",
                "x": 68.5,
                "y": 92.5
              },
              {
                "cumpct_pct": 92.6,
                "cumpct_cust": 68.5,
                "metric_type": "LTV",
                "x": 68.5,
                "y": 92.6
              },
              {
                "cumpct_pct": 92.6,
                "cumpct_cust": 68.5,
                "metric_type": "LTV",
                "x": 68.5,
                "y": 92.6
              },
              {
                "cumpct_pct": 92.6,
                "cumpct_cust": 68.5,
                "metric_type": "LTV",
                "x": 68.5,
                "y": 92.6
              },
              {
                "cumpct_pct": 92.6,
                "cumpct_cust": 68.6,
                "metric_type": "LTV",
                "x": 68.6,
                "y": 92.6
              },
              {
                "cumpct_pct": 92.6,
                "cumpct_cust": 68.6,
                "metric_type": "LTV",
                "x": 68.6,
                "y": 92.6
              },
              {
                "cumpct_pct": 92.8,
                "cumpct_cust": 69.1,
                "metric_type": "LTV",
                "x": 69.1,
                "y": 92.8
              },
              {
                "cumpct_pct": 92.8,
                "cumpct_cust": 69.2,
                "metric_type": "LTV",
                "x": 69.2,
                "y": 92.8
              },
              {
                "cumpct_pct": 92.8,
                "cumpct_cust": 69.2,
                "metric_type": "LTV",
                "x": 69.2,
                "y": 92.8
              },
              {
                "cumpct_pct": 92.9,
                "cumpct_cust": 69.4,
                "metric_type": "LTV",
                "x": 69.4,
                "y": 92.9
              },
              {
                "cumpct_pct": 92.9,
                "cumpct_cust": 69.5,
                "metric_type": "LTV",
                "x": 69.5,
                "y": 92.9
              },
              {
                "cumpct_pct": 93,
                "cumpct_cust": 69.7,
                "metric_type": "LTV",
                "x": 69.7,
                "y": 93
              },
              {
                "cumpct_pct": 93,
                "cumpct_cust": 69.8,
                "metric_type": "LTV",
                "x": 69.8,
                "y": 93
              },
              {
                "cumpct_pct": 93.1,
                "cumpct_cust": 69.9,
                "metric_type": "LTV",
                "x": 69.9,
                "y": 93.1
              },
              {
                "cumpct_pct": 93.1,
                "cumpct_cust": 70.1,
                "metric_type": "LTV",
                "x": 70.1,
                "y": 93.1
              },
              {
                "cumpct_pct": 93.1,
                "cumpct_cust": 70.2,
                "metric_type": "LTV",
                "x": 70.2,
                "y": 93.1
              },
              {
                "cumpct_pct": 93.2,
                "cumpct_cust": 70.2,
                "metric_type": "LTV",
                "x": 70.2,
                "y": 93.2
              },
              {
                "cumpct_pct": 93.2,
                "cumpct_cust": 70.3,
                "metric_type": "LTV",
                "x": 70.3,
                "y": 93.2
              },
              {
                "cumpct_pct": 93.2,
                "cumpct_cust": 70.4,
                "metric_type": "LTV",
                "x": 70.4,
                "y": 93.2
              },
              {
                "cumpct_pct": 93.2,
                "cumpct_cust": 70.4,
                "metric_type": "LTV",
                "x": 70.4,
                "y": 93.2
              },
              {
                "cumpct_pct": 93.3,
                "cumpct_cust": 70.6,
                "metric_type": "LTV",
                "x": 70.6,
                "y": 93.3
              },
              {
                "cumpct_pct": 93.3,
                "cumpct_cust": 70.7,
                "metric_type": "LTV",
                "x": 70.7,
                "y": 93.3
              },
              {
                "cumpct_pct": 93.4,
                "cumpct_cust": 70.8,
                "metric_type": "LTV",
                "x": 70.8,
                "y": 93.4
              },
              {
                "cumpct_pct": 93.4,
                "cumpct_cust": 70.8,
                "metric_type": "LTV",
                "x": 70.8,
                "y": 93.4
              },
              {
                "cumpct_pct": 93.4,
                "cumpct_cust": 70.9,
                "metric_type": "LTV",
                "x": 70.9,
                "y": 93.4
              },
              {
                "cumpct_pct": 93.4,
                "cumpct_cust": 71,
                "metric_type": "LTV",
                "x": 71,
                "y": 93.4
              },
              {
                "cumpct_pct": 93.5,
                "cumpct_cust": 71.2,
                "metric_type": "LTV",
                "x": 71.2,
                "y": 93.5
              },
              {
                "cumpct_pct": 93.5,
                "cumpct_cust": 71.3,
                "metric_type": "LTV",
                "x": 71.3,
                "y": 93.5
              },
              {
                "cumpct_pct": 93.6,
                "cumpct_cust": 71.4,
                "metric_type": "LTV",
                "x": 71.4,
                "y": 93.6
              },
              {
                "cumpct_pct": 93.6,
                "cumpct_cust": 71.4,
                "metric_type": "LTV",
                "x": 71.4,
                "y": 93.6
              },
              {
                "cumpct_pct": 93.6,
                "cumpct_cust": 71.5,
                "metric_type": "LTV",
                "x": 71.5,
                "y": 93.6
              },
              {
                "cumpct_pct": 93.6,
                "cumpct_cust": 71.5,
                "metric_type": "LTV",
                "x": 71.5,
                "y": 93.6
              },
              {
                "cumpct_pct": 93.7,
                "cumpct_cust": 71.8,
                "metric_type": "LTV",
                "x": 71.8,
                "y": 93.7
              },
              {
                "cumpct_pct": 93.7,
                "cumpct_cust": 71.8,
                "metric_type": "LTV",
                "x": 71.8,
                "y": 93.7
              },
              {
                "cumpct_pct": 93.7,
                "cumpct_cust": 71.8,
                "metric_type": "LTV",
                "x": 71.8,
                "y": 93.7
              },
              {
                "cumpct_pct": 93.8,
                "cumpct_cust": 71.9,
                "metric_type": "LTV",
                "x": 71.9,
                "y": 93.8
              },
              {
                "cumpct_pct": 93.8,
                "cumpct_cust": 72,
                "metric_type": "LTV",
                "x": 72,
                "y": 93.8
              },
              {
                "cumpct_pct": 93.8,
                "cumpct_cust": 72.2,
                "metric_type": "LTV",
                "x": 72.2,
                "y": 93.8
              },
              {
                "cumpct_pct": 93.9,
                "cumpct_cust": 72.3,
                "metric_type": "LTV",
                "x": 72.3,
                "y": 93.9
              },
              {
                "cumpct_pct": 93.9,
                "cumpct_cust": 72.4,
                "metric_type": "LTV",
                "x": 72.4,
                "y": 93.9
              },
              {
                "cumpct_pct": 93.9,
                "cumpct_cust": 72.4,
                "metric_type": "LTV",
                "x": 72.4,
                "y": 93.9
              },
              {
                "cumpct_pct": 93.9,
                "cumpct_cust": 72.5,
                "metric_type": "LTV",
                "x": 72.5,
                "y": 93.9
              },
              {
                "cumpct_pct": 94,
                "cumpct_cust": 72.5,
                "metric_type": "LTV",
                "x": 72.5,
                "y": 94
              },
              {
                "cumpct_pct": 94.1,
                "cumpct_cust": 73,
                "metric_type": "LTV",
                "x": 73,
                "y": 94.1
              },
              {
                "cumpct_pct": 94.1,
                "cumpct_cust": 73,
                "metric_type": "LTV",
                "x": 73,
                "y": 94.1
              },
              {
                "cumpct_pct": 94.1,
                "cumpct_cust": 73.1,
                "metric_type": "LTV",
                "x": 73.1,
                "y": 94.1
              },
              {
                "cumpct_pct": 94.2,
                "cumpct_cust": 73.1,
                "metric_type": "LTV",
                "x": 73.1,
                "y": 94.2
              },
              {
                "cumpct_pct": 94.2,
                "cumpct_cust": 73.2,
                "metric_type": "LTV",
                "x": 73.2,
                "y": 94.2
              },
              {
                "cumpct_pct": 94.2,
                "cumpct_cust": 73.2,
                "metric_type": "LTV",
                "x": 73.2,
                "y": 94.2
              },
              {
                "cumpct_pct": 94.2,
                "cumpct_cust": 73.4,
                "metric_type": "LTV",
                "x": 73.4,
                "y": 94.2
              },
              {
                "cumpct_pct": 94.3,
                "cumpct_cust": 73.6,
                "metric_type": "LTV",
                "x": 73.6,
                "y": 94.3
              },
              {
                "cumpct_pct": 94.3,
                "cumpct_cust": 73.6,
                "metric_type": "LTV",
                "x": 73.6,
                "y": 94.3
              },
              {
                "cumpct_pct": 94.4,
                "cumpct_cust": 73.8,
                "metric_type": "LTV",
                "x": 73.8,
                "y": 94.4
              },
              {
                "cumpct_pct": 94.4,
                "cumpct_cust": 73.9,
                "metric_type": "LTV",
                "x": 73.9,
                "y": 94.4
              },
              {
                "cumpct_pct": 94.4,
                "cumpct_cust": 73.9,
                "metric_type": "LTV",
                "x": 73.9,
                "y": 94.4
              },
              {
                "cumpct_pct": 94.4,
                "cumpct_cust": 73.9,
                "metric_type": "LTV",
                "x": 73.9,
                "y": 94.4
              },
              {
                "cumpct_pct": 94.4,
                "cumpct_cust": 73.9,
                "metric_type": "LTV",
                "x": 73.9,
                "y": 94.4
              },
              {
                "cumpct_pct": 94.4,
                "cumpct_cust": 74,
                "metric_type": "LTV",
                "x": 74,
                "y": 94.4
              },
              {
                "cumpct_pct": 94.5,
                "cumpct_cust": 74.2,
                "metric_type": "LTV",
                "x": 74.2,
                "y": 94.5
              },
              {
                "cumpct_pct": 94.5,
                "cumpct_cust": 74.3,
                "metric_type": "LTV",
                "x": 74.3,
                "y": 94.5
              },
              {
                "cumpct_pct": 94.6,
                "cumpct_cust": 74.5,
                "metric_type": "LTV",
                "x": 74.5,
                "y": 94.6
              },
              {
                "cumpct_pct": 94.6,
                "cumpct_cust": 74.5,
                "metric_type": "LTV",
                "x": 74.5,
                "y": 94.6
              },
              {
                "cumpct_pct": 94.6,
                "cumpct_cust": 74.5,
                "metric_type": "LTV",
                "x": 74.5,
                "y": 94.6
              },
              {
                "cumpct_pct": 94.6,
                "cumpct_cust": 74.6,
                "metric_type": "LTV",
                "x": 74.6,
                "y": 94.6
              },
              {
                "cumpct_pct": 94.7,
                "cumpct_cust": 74.7,
                "metric_type": "LTV",
                "x": 74.7,
                "y": 94.7
              },
              {
                "cumpct_pct": 94.7,
                "cumpct_cust": 74.7,
                "metric_type": "LTV",
                "x": 74.7,
                "y": 94.7
              },
              {
                "cumpct_pct": 94.7,
                "cumpct_cust": 74.7,
                "metric_type": "LTV",
                "x": 74.7,
                "y": 94.7
              },
              {
                "cumpct_pct": 94.7,
                "cumpct_cust": 74.8,
                "metric_type": "LTV",
                "x": 74.8,
                "y": 94.7
              },
              {
                "cumpct_pct": 94.7,
                "cumpct_cust": 74.9,
                "metric_type": "LTV",
                "x": 74.9,
                "y": 94.7
              },
              {
                "cumpct_pct": 94.7,
                "cumpct_cust": 74.9,
                "metric_type": "LTV",
                "x": 74.9,
                "y": 94.7
              },
              {
                "cumpct_pct": 94.7,
                "cumpct_cust": 74.9,
                "metric_type": "LTV",
                "x": 74.9,
                "y": 94.7
              },
              {
                "cumpct_pct": 94.7,
                "cumpct_cust": 75,
                "metric_type": "LTV",
                "x": 75,
                "y": 94.7
              },
              {
                "cumpct_pct": 94.8,
                "cumpct_cust": 75,
                "metric_type": "LTV",
                "x": 75,
                "y": 94.8
              },
              {
                "cumpct_pct": 94.8,
                "cumpct_cust": 75.1,
                "metric_type": "LTV",
                "x": 75.1,
                "y": 94.8
              },
              {
                "cumpct_pct": 94.8,
                "cumpct_cust": 75.2,
                "metric_type": "LTV",
                "x": 75.2,
                "y": 94.8
              },
              {
                "cumpct_pct": 94.8,
                "cumpct_cust": 75.3,
                "metric_type": "LTV",
                "x": 75.3,
                "y": 94.8
              },
              {
                "cumpct_pct": 94.8,
                "cumpct_cust": 75.3,
                "metric_type": "LTV",
                "x": 75.3,
                "y": 94.8
              },
              {
                "cumpct_pct": 94.8,
                "cumpct_cust": 75.3,
                "metric_type": "LTV",
                "x": 75.3,
                "y": 94.8
              },
              {
                "cumpct_pct": 94.9,
                "cumpct_cust": 75.4,
                "metric_type": "LTV",
                "x": 75.4,
                "y": 94.9
              },
              {
                "cumpct_pct": 94.9,
                "cumpct_cust": 75.6,
                "metric_type": "LTV",
                "x": 75.6,
                "y": 94.9
              },
              {
                "cumpct_pct": 95,
                "cumpct_cust": 75.7,
                "metric_type": "LTV",
                "x": 75.7,
                "y": 95
              },
              {
                "cumpct_pct": 95,
                "cumpct_cust": 75.8,
                "metric_type": "LTV",
                "x": 75.8,
                "y": 95
              },
              {
                "cumpct_pct": 95,
                "cumpct_cust": 75.8,
                "metric_type": "LTV",
                "x": 75.8,
                "y": 95
              },
              {
                "cumpct_pct": 95,
                "cumpct_cust": 75.9,
                "metric_type": "LTV",
                "x": 75.9,
                "y": 95
              },
              {
                "cumpct_pct": 95,
                "cumpct_cust": 75.9,
                "metric_type": "LTV",
                "x": 75.9,
                "y": 95
              },
              {
                "cumpct_pct": 95.1,
                "cumpct_cust": 76.1,
                "metric_type": "LTV",
                "x": 76.1,
                "y": 95.1
              },
              {
                "cumpct_pct": 95.1,
                "cumpct_cust": 76.2,
                "metric_type": "LTV",
                "x": 76.2,
                "y": 95.1
              },
              {
                "cumpct_pct": 95.1,
                "cumpct_cust": 76.2,
                "metric_type": "LTV",
                "x": 76.2,
                "y": 95.1
              },
              {
                "cumpct_pct": 95.1,
                "cumpct_cust": 76.3,
                "metric_type": "LTV",
                "x": 76.3,
                "y": 95.1
              },
              {
                "cumpct_pct": 95.2,
                "cumpct_cust": 76.3,
                "metric_type": "LTV",
                "x": 76.3,
                "y": 95.2
              },
              {
                "cumpct_pct": 95.2,
                "cumpct_cust": 76.5,
                "metric_type": "LTV",
                "x": 76.5,
                "y": 95.2
              },
              {
                "cumpct_pct": 95.2,
                "cumpct_cust": 76.6,
                "metric_type": "LTV",
                "x": 76.6,
                "y": 95.2
              },
              {
                "cumpct_pct": 95.3,
                "cumpct_cust": 76.8,
                "metric_type": "LTV",
                "x": 76.8,
                "y": 95.3
              },
              {
                "cumpct_pct": 95.3,
                "cumpct_cust": 76.9,
                "metric_type": "LTV",
                "x": 76.9,
                "y": 95.3
              },
              {
                "cumpct_pct": 95.4,
                "cumpct_cust": 77,
                "metric_type": "LTV",
                "x": 77,
                "y": 95.4
              },
              {
                "cumpct_pct": 95.4,
                "cumpct_cust": 77,
                "metric_type": "LTV",
                "x": 77,
                "y": 95.4
              },
              {
                "cumpct_pct": 95.4,
                "cumpct_cust": 77,
                "metric_type": "LTV",
                "x": 77,
                "y": 95.4
              },
              {
                "cumpct_pct": 95.5,
                "cumpct_cust": 77.3,
                "metric_type": "LTV",
                "x": 77.3,
                "y": 95.5
              },
              {
                "cumpct_pct": 95.5,
                "cumpct_cust": 77.5,
                "metric_type": "LTV",
                "x": 77.5,
                "y": 95.5
              },
              {
                "cumpct_pct": 95.6,
                "cumpct_cust": 77.7,
                "metric_type": "LTV",
                "x": 77.7,
                "y": 95.6
              },
              {
                "cumpct_pct": 95.6,
                "cumpct_cust": 77.9,
                "metric_type": "LTV",
                "x": 77.9,
                "y": 95.6
              },
              {
                "cumpct_pct": 95.6,
                "cumpct_cust": 78,
                "metric_type": "LTV",
                "x": 78,
                "y": 95.6
              },
              {
                "cumpct_pct": 95.6,
                "cumpct_cust": 78,
                "metric_type": "LTV",
                "x": 78,
                "y": 95.6
              },
              {
                "cumpct_pct": 95.7,
                "cumpct_cust": 78.1,
                "metric_type": "LTV",
                "x": 78.1,
                "y": 95.7
              },
              {
                "cumpct_pct": 95.7,
                "cumpct_cust": 78.1,
                "metric_type": "LTV",
                "x": 78.1,
                "y": 95.7
              },
              {
                "cumpct_pct": 95.7,
                "cumpct_cust": 78.2,
                "metric_type": "LTV",
                "x": 78.2,
                "y": 95.7
              },
              {
                "cumpct_pct": 95.7,
                "cumpct_cust": 78.2,
                "metric_type": "LTV",
                "x": 78.2,
                "y": 95.7
              },
              {
                "cumpct_pct": 95.7,
                "cumpct_cust": 78.2,
                "metric_type": "LTV",
                "x": 78.2,
                "y": 95.7
              },
              {
                "cumpct_pct": 95.7,
                "cumpct_cust": 78.3,
                "metric_type": "LTV",
                "x": 78.3,
                "y": 95.7
              },
              {
                "cumpct_pct": 95.7,
                "cumpct_cust": 78.3,
                "metric_type": "LTV",
                "x": 78.3,
                "y": 95.7
              },
              {
                "cumpct_pct": 95.8,
                "cumpct_cust": 78.4,
                "metric_type": "LTV",
                "x": 78.4,
                "y": 95.8
              },
              {
                "cumpct_pct": 95.8,
                "cumpct_cust": 78.5,
                "metric_type": "LTV",
                "x": 78.5,
                "y": 95.8
              },
              {
                "cumpct_pct": 95.8,
                "cumpct_cust": 78.6,
                "metric_type": "LTV",
                "x": 78.6,
                "y": 95.8
              },
              {
                "cumpct_pct": 95.8,
                "cumpct_cust": 78.6,
                "metric_type": "LTV",
                "x": 78.6,
                "y": 95.8
              },
              {
                "cumpct_pct": 95.8,
                "cumpct_cust": 78.7,
                "metric_type": "LTV",
                "x": 78.7,
                "y": 95.8
              },
              {
                "cumpct_pct": 95.9,
                "cumpct_cust": 78.7,
                "metric_type": "LTV",
                "x": 78.7,
                "y": 95.9
              },
              {
                "cumpct_pct": 95.9,
                "cumpct_cust": 78.8,
                "metric_type": "LTV",
                "x": 78.8,
                "y": 95.9
              },
              {
                "cumpct_pct": 95.9,
                "cumpct_cust": 78.8,
                "metric_type": "LTV",
                "x": 78.8,
                "y": 95.9
              },
              {
                "cumpct_pct": 95.9,
                "cumpct_cust": 78.9,
                "metric_type": "LTV",
                "x": 78.9,
                "y": 95.9
              },
              {
                "cumpct_pct": 95.9,
                "cumpct_cust": 79,
                "metric_type": "LTV",
                "x": 79,
                "y": 95.9
              },
              {
                "cumpct_pct": 96,
                "cumpct_cust": 79.1,
                "metric_type": "LTV",
                "x": 79.1,
                "y": 96
              },
              {
                "cumpct_pct": 96,
                "cumpct_cust": 79.2,
                "metric_type": "LTV",
                "x": 79.2,
                "y": 96
              },
              {
                "cumpct_pct": 96.1,
                "cumpct_cust": 79.5,
                "metric_type": "LTV",
                "x": 79.5,
                "y": 96.1
              },
              {
                "cumpct_pct": 96.1,
                "cumpct_cust": 79.6,
                "metric_type": "LTV",
                "x": 79.6,
                "y": 96.1
              },
              {
                "cumpct_pct": 96.1,
                "cumpct_cust": 79.6,
                "metric_type": "LTV",
                "x": 79.6,
                "y": 96.1
              },
              {
                "cumpct_pct": 96.1,
                "cumpct_cust": 79.7,
                "metric_type": "LTV",
                "x": 79.7,
                "y": 96.1
              },
              {
                "cumpct_pct": 96.2,
                "cumpct_cust": 79.9,
                "metric_type": "LTV",
                "x": 79.9,
                "y": 96.2
              },
              {
                "cumpct_pct": 96.2,
                "cumpct_cust": 79.9,
                "metric_type": "LTV",
                "x": 79.9,
                "y": 96.2
              },
              {
                "cumpct_pct": 96.2,
                "cumpct_cust": 80,
                "metric_type": "LTV",
                "x": 80,
                "y": 96.2
              },
              {
                "cumpct_pct": 96.2,
                "cumpct_cust": 80,
                "metric_type": "LTV",
                "x": 80,
                "y": 96.2
              },
              {
                "cumpct_pct": 96.2,
                "cumpct_cust": 80.1,
                "metric_type": "LTV",
                "x": 80.1,
                "y": 96.2
              },
              {
                "cumpct_pct": 96.3,
                "cumpct_cust": 80.2,
                "metric_type": "LTV",
                "x": 80.2,
                "y": 96.3
              },
              {
                "cumpct_pct": 96.4,
                "cumpct_cust": 80.5,
                "metric_type": "LTV",
                "x": 80.5,
                "y": 96.4
              },
              {
                "cumpct_pct": 96.4,
                "cumpct_cust": 80.8,
                "metric_type": "LTV",
                "x": 80.8,
                "y": 96.4
              },
              {
                "cumpct_pct": 96.4,
                "cumpct_cust": 80.9,
                "metric_type": "LTV",
                "x": 80.9,
                "y": 96.4
              },
              {
                "cumpct_pct": 96.5,
                "cumpct_cust": 81,
                "metric_type": "LTV",
                "x": 81,
                "y": 96.5
              },
              {
                "cumpct_pct": 96.5,
                "cumpct_cust": 81.1,
                "metric_type": "LTV",
                "x": 81.1,
                "y": 96.5
              },
              {
                "cumpct_pct": 96.5,
                "cumpct_cust": 81.2,
                "metric_type": "LTV",
                "x": 81.2,
                "y": 96.5
              },
              {
                "cumpct_pct": 96.5,
                "cumpct_cust": 81.2,
                "metric_type": "LTV",
                "x": 81.2,
                "y": 96.5
              },
              {
                "cumpct_pct": 96.5,
                "cumpct_cust": 81.2,
                "metric_type": "LTV",
                "x": 81.2,
                "y": 96.5
              },
              {
                "cumpct_pct": 96.6,
                "cumpct_cust": 81.4,
                "metric_type": "LTV",
                "x": 81.4,
                "y": 96.6
              },
              {
                "cumpct_pct": 96.6,
                "cumpct_cust": 81.4,
                "metric_type": "LTV",
                "x": 81.4,
                "y": 96.6
              },
              {
                "cumpct_pct": 96.6,
                "cumpct_cust": 81.5,
                "metric_type": "LTV",
                "x": 81.5,
                "y": 96.6
              },
              {
                "cumpct_pct": 96.6,
                "cumpct_cust": 81.7,
                "metric_type": "LTV",
                "x": 81.7,
                "y": 96.6
              },
              {
                "cumpct_pct": 96.7,
                "cumpct_cust": 81.7,
                "metric_type": "LTV",
                "x": 81.7,
                "y": 96.7
              },
              {
                "cumpct_pct": 96.7,
                "cumpct_cust": 81.7,
                "metric_type": "LTV",
                "x": 81.7,
                "y": 96.7
              },
              {
                "cumpct_pct": 96.7,
                "cumpct_cust": 81.8,
                "metric_type": "LTV",
                "x": 81.8,
                "y": 96.7
              },
              {
                "cumpct_pct": 96.7,
                "cumpct_cust": 81.9,
                "metric_type": "LTV",
                "x": 81.9,
                "y": 96.7
              },
              {
                "cumpct_pct": 96.8,
                "cumpct_cust": 82.3,
                "metric_type": "LTV",
                "x": 82.3,
                "y": 96.8
              },
              {
                "cumpct_pct": 96.8,
                "cumpct_cust": 82.3,
                "metric_type": "LTV",
                "x": 82.3,
                "y": 96.8
              },
              {
                "cumpct_pct": 96.9,
                "cumpct_cust": 82.5,
                "metric_type": "LTV",
                "x": 82.5,
                "y": 96.9
              },
              {
                "cumpct_pct": 96.9,
                "cumpct_cust": 82.5,
                "metric_type": "LTV",
                "x": 82.5,
                "y": 96.9
              },
              {
                "cumpct_pct": 96.9,
                "cumpct_cust": 82.5,
                "metric_type": "LTV",
                "x": 82.5,
                "y": 96.9
              },
              {
                "cumpct_pct": 96.9,
                "cumpct_cust": 82.6,
                "metric_type": "LTV",
                "x": 82.6,
                "y": 96.9
              },
              {
                "cumpct_pct": 96.9,
                "cumpct_cust": 82.6,
                "metric_type": "LTV",
                "x": 82.6,
                "y": 96.9
              },
              {
                "cumpct_pct": 96.9,
                "cumpct_cust": 82.6,
                "metric_type": "LTV",
                "x": 82.6,
                "y": 96.9
              },
              {
                "cumpct_pct": 96.9,
                "cumpct_cust": 82.7,
                "metric_type": "LTV",
                "x": 82.7,
                "y": 96.9
              },
              {
                "cumpct_pct": 96.9,
                "cumpct_cust": 82.7,
                "metric_type": "LTV",
                "x": 82.7,
                "y": 96.9
              },
              {
                "cumpct_pct": 96.9,
                "cumpct_cust": 82.8,
                "metric_type": "LTV",
                "x": 82.8,
                "y": 96.9
              },
              {
                "cumpct_pct": 96.9,
                "cumpct_cust": 82.8,
                "metric_type": "LTV",
                "x": 82.8,
                "y": 96.9
              },
              {
                "cumpct_pct": 97,
                "cumpct_cust": 82.9,
                "metric_type": "LTV",
                "x": 82.9,
                "y": 97
              },
              {
                "cumpct_pct": 97,
                "cumpct_cust": 83,
                "metric_type": "LTV",
                "x": 83,
                "y": 97
              },
              {
                "cumpct_pct": 97,
                "cumpct_cust": 83.1,
                "metric_type": "LTV",
                "x": 83.1,
                "y": 97
              },
              {
                "cumpct_pct": 97,
                "cumpct_cust": 83.2,
                "metric_type": "LTV",
                "x": 83.2,
                "y": 97
              },
              {
                "cumpct_pct": 97.1,
                "cumpct_cust": 83.3,
                "metric_type": "LTV",
                "x": 83.3,
                "y": 97.1
              },
              {
                "cumpct_pct": 97.1,
                "cumpct_cust": 83.4,
                "metric_type": "LTV",
                "x": 83.4,
                "y": 97.1
              },
              {
                "cumpct_pct": 97.1,
                "cumpct_cust": 83.5,
                "metric_type": "LTV",
                "x": 83.5,
                "y": 97.1
              },
              {
                "cumpct_pct": 97.1,
                "cumpct_cust": 83.5,
                "metric_type": "LTV",
                "x": 83.5,
                "y": 97.1
              },
              {
                "cumpct_pct": 97.2,
                "cumpct_cust": 83.9,
                "metric_type": "LTV",
                "x": 83.9,
                "y": 97.2
              },
              {
                "cumpct_pct": 97.2,
                "cumpct_cust": 84,
                "metric_type": "LTV",
                "x": 84,
                "y": 97.2
              },
              {
                "cumpct_pct": 97.2,
                "cumpct_cust": 84,
                "metric_type": "LTV",
                "x": 84,
                "y": 97.2
              },
              {
                "cumpct_pct": 97.3,
                "cumpct_cust": 84.2,
                "metric_type": "LTV",
                "x": 84.2,
                "y": 97.3
              },
              {
                "cumpct_pct": 97.3,
                "cumpct_cust": 84.3,
                "metric_type": "LTV",
                "x": 84.3,
                "y": 97.3
              },
              {
                "cumpct_pct": 97.3,
                "cumpct_cust": 84.3,
                "metric_type": "LTV",
                "x": 84.3,
                "y": 97.3
              },
              {
                "cumpct_pct": 97.4,
                "cumpct_cust": 84.8,
                "metric_type": "LTV",
                "x": 84.8,
                "y": 97.4
              },
              {
                "cumpct_pct": 97.4,
                "cumpct_cust": 84.8,
                "metric_type": "LTV",
                "x": 84.8,
                "y": 97.4
              },
              {
                "cumpct_pct": 97.4,
                "cumpct_cust": 84.8,
                "metric_type": "LTV",
                "x": 84.8,
                "y": 97.4
              },
              {
                "cumpct_pct": 97.4,
                "cumpct_cust": 84.9,
                "metric_type": "LTV",
                "x": 84.9,
                "y": 97.4
              },
              {
                "cumpct_pct": 97.5,
                "cumpct_cust": 85.2,
                "metric_type": "LTV",
                "x": 85.2,
                "y": 97.5
              },
              {
                "cumpct_pct": 97.5,
                "cumpct_cust": 85.2,
                "metric_type": "LTV",
                "x": 85.2,
                "y": 97.5
              },
              {
                "cumpct_pct": 97.5,
                "cumpct_cust": 85.2,
                "metric_type": "LTV",
                "x": 85.2,
                "y": 97.5
              },
              {
                "cumpct_pct": 97.5,
                "cumpct_cust": 85.2,
                "metric_type": "LTV",
                "x": 85.2,
                "y": 97.5
              },
              {
                "cumpct_pct": 97.5,
                "cumpct_cust": 85.2,
                "metric_type": "LTV",
                "x": 85.2,
                "y": 97.5
              },
              {
                "cumpct_pct": 97.5,
                "cumpct_cust": 85.3,
                "metric_type": "LTV",
                "x": 85.3,
                "y": 97.5
              },
              {
                "cumpct_pct": 97.5,
                "cumpct_cust": 85.3,
                "metric_type": "LTV",
                "x": 85.3,
                "y": 97.5
              },
              {
                "cumpct_pct": 97.5,
                "cumpct_cust": 85.4,
                "metric_type": "LTV",
                "x": 85.4,
                "y": 97.5
              },
              {
                "cumpct_pct": 97.5,
                "cumpct_cust": 85.4,
                "metric_type": "LTV",
                "x": 85.4,
                "y": 97.5
              },
              {
                "cumpct_pct": 97.6,
                "cumpct_cust": 85.4,
                "metric_type": "LTV",
                "x": 85.4,
                "y": 97.6
              },
              {
                "cumpct_pct": 97.6,
                "cumpct_cust": 85.6,
                "metric_type": "LTV",
                "x": 85.6,
                "y": 97.6
              },
              {
                "cumpct_pct": 97.6,
                "cumpct_cust": 85.6,
                "metric_type": "LTV",
                "x": 85.6,
                "y": 97.6
              },
              {
                "cumpct_pct": 97.7,
                "cumpct_cust": 85.9,
                "metric_type": "LTV",
                "x": 85.9,
                "y": 97.7
              },
              {
                "cumpct_pct": 97.7,
                "cumpct_cust": 86,
                "metric_type": "LTV",
                "x": 86,
                "y": 97.7
              },
              {
                "cumpct_pct": 97.8,
                "cumpct_cust": 86.5,
                "metric_type": "LTV",
                "x": 86.5,
                "y": 97.8
              },
              {
                "cumpct_pct": 97.8,
                "cumpct_cust": 86.5,
                "metric_type": "LTV",
                "x": 86.5,
                "y": 97.8
              },
              {
                "cumpct_pct": 97.8,
                "cumpct_cust": 86.5,
                "metric_type": "LTV",
                "x": 86.5,
                "y": 97.8
              },
              {
                "cumpct_pct": 97.8,
                "cumpct_cust": 86.5,
                "metric_type": "LTV",
                "x": 86.5,
                "y": 97.8
              },
              {
                "cumpct_pct": 97.8,
                "cumpct_cust": 86.7,
                "metric_type": "LTV",
                "x": 86.7,
                "y": 97.8
              },
              {
                "cumpct_pct": 97.9,
                "cumpct_cust": 86.8,
                "metric_type": "LTV",
                "x": 86.8,
                "y": 97.9
              },
              {
                "cumpct_pct": 97.9,
                "cumpct_cust": 86.9,
                "metric_type": "LTV",
                "x": 86.9,
                "y": 97.9
              },
              {
                "cumpct_pct": 97.9,
                "cumpct_cust": 86.9,
                "metric_type": "LTV",
                "x": 86.9,
                "y": 97.9
              },
              {
                "cumpct_pct": 97.9,
                "cumpct_cust": 87,
                "metric_type": "LTV",
                "x": 87,
                "y": 97.9
              },
              {
                "cumpct_pct": 97.9,
                "cumpct_cust": 87,
                "metric_type": "LTV",
                "x": 87,
                "y": 97.9
              },
              {
                "cumpct_pct": 98,
                "cumpct_cust": 87.3,
                "metric_type": "LTV",
                "x": 87.3,
                "y": 98
              },
              {
                "cumpct_pct": 98,
                "cumpct_cust": 87.5,
                "metric_type": "LTV",
                "x": 87.5,
                "y": 98
              },
              {
                "cumpct_pct": 98,
                "cumpct_cust": 87.6,
                "metric_type": "LTV",
                "x": 87.6,
                "y": 98
              },
              {
                "cumpct_pct": 98,
                "cumpct_cust": 87.6,
                "metric_type": "LTV",
                "x": 87.6,
                "y": 98
              },
              {
                "cumpct_pct": 98.1,
                "cumpct_cust": 87.8,
                "metric_type": "LTV",
                "x": 87.8,
                "y": 98.1
              },
              {
                "cumpct_pct": 98.1,
                "cumpct_cust": 87.9,
                "metric_type": "LTV",
                "x": 87.9,
                "y": 98.1
              },
              {
                "cumpct_pct": 98.1,
                "cumpct_cust": 87.9,
                "metric_type": "LTV",
                "x": 87.9,
                "y": 98.1
              },
              {
                "cumpct_pct": 98.1,
                "cumpct_cust": 88,
                "metric_type": "LTV",
                "x": 88,
                "y": 98.1
              },
              {
                "cumpct_pct": 98.2,
                "cumpct_cust": 88.2,
                "metric_type": "LTV",
                "x": 88.2,
                "y": 98.2
              },
              {
                "cumpct_pct": 98.2,
                "cumpct_cust": 88.2,
                "metric_type": "LTV",
                "x": 88.2,
                "y": 98.2
              },
              {
                "cumpct_pct": 98.2,
                "cumpct_cust": 88.4,
                "metric_type": "LTV",
                "x": 88.4,
                "y": 98.2
              },
              {
                "cumpct_pct": 98.2,
                "cumpct_cust": 88.4,
                "metric_type": "LTV",
                "x": 88.4,
                "y": 98.2
              },
              {
                "cumpct_pct": 98.2,
                "cumpct_cust": 88.4,
                "metric_type": "LTV",
                "x": 88.4,
                "y": 98.2
              },
              {
                "cumpct_pct": 98.2,
                "cumpct_cust": 88.4,
                "metric_type": "LTV",
                "x": 88.4,
                "y": 98.2
              },
              {
                "cumpct_pct": 98.2,
                "cumpct_cust": 88.5,
                "metric_type": "LTV",
                "x": 88.5,
                "y": 98.2
              },
              {
                "cumpct_pct": 98.2,
                "cumpct_cust": 88.6,
                "metric_type": "LTV",
                "x": 88.6,
                "y": 98.2
              },
              {
                "cumpct_pct": 98.2,
                "cumpct_cust": 88.6,
                "metric_type": "LTV",
                "x": 88.6,
                "y": 98.2
              },
              {
                "cumpct_pct": 98.3,
                "cumpct_cust": 88.7,
                "metric_type": "LTV",
                "x": 88.7,
                "y": 98.3
              },
              {
                "cumpct_pct": 98.3,
                "cumpct_cust": 88.7,
                "metric_type": "LTV",
                "x": 88.7,
                "y": 98.3
              },
              {
                "cumpct_pct": 98.3,
                "cumpct_cust": 88.8,
                "metric_type": "LTV",
                "x": 88.8,
                "y": 98.3
              },
              {
                "cumpct_pct": 98.3,
                "cumpct_cust": 88.8,
                "metric_type": "LTV",
                "x": 88.8,
                "y": 98.3
              },
              {
                "cumpct_pct": 98.3,
                "cumpct_cust": 88.8,
                "metric_type": "LTV",
                "x": 88.8,
                "y": 98.3
              },
              {
                "cumpct_pct": 98.3,
                "cumpct_cust": 88.9,
                "metric_type": "LTV",
                "x": 88.9,
                "y": 98.3
              },
              {
                "cumpct_pct": 98.3,
                "cumpct_cust": 89,
                "metric_type": "LTV",
                "x": 89,
                "y": 98.3
              },
              {
                "cumpct_pct": 98.3,
                "cumpct_cust": 89.1,
                "metric_type": "LTV",
                "x": 89.1,
                "y": 98.3
              },
              {
                "cumpct_pct": 98.4,
                "cumpct_cust": 89.2,
                "metric_type": "LTV",
                "x": 89.2,
                "y": 98.4
              },
              {
                "cumpct_pct": 98.4,
                "cumpct_cust": 89.4,
                "metric_type": "LTV",
                "x": 89.4,
                "y": 98.4
              },
              {
                "cumpct_pct": 98.4,
                "cumpct_cust": 89.4,
                "metric_type": "LTV",
                "x": 89.4,
                "y": 98.4
              },
              {
                "cumpct_pct": 98.4,
                "cumpct_cust": 89.6,
                "metric_type": "LTV",
                "x": 89.6,
                "y": 98.4
              },
              {
                "cumpct_pct": 98.4,
                "cumpct_cust": 89.7,
                "metric_type": "LTV",
                "x": 89.7,
                "y": 98.4
              },
              {
                "cumpct_pct": 98.5,
                "cumpct_cust": 89.8,
                "metric_type": "LTV",
                "x": 89.8,
                "y": 98.5
              },
              {
                "cumpct_pct": 98.5,
                "cumpct_cust": 90,
                "metric_type": "LTV",
                "x": 90,
                "y": 98.5
              },
              {
                "cumpct_pct": 98.5,
                "cumpct_cust": 90.1,
                "metric_type": "LTV",
                "x": 90.1,
                "y": 98.5
              },
              {
                "cumpct_pct": 98.5,
                "cumpct_cust": 90.2,
                "metric_type": "LTV",
                "x": 90.2,
                "y": 98.5
              },
              {
                "cumpct_pct": 98.6,
                "cumpct_cust": 90.2,
                "metric_type": "LTV",
                "x": 90.2,
                "y": 98.6
              },
              {
                "cumpct_pct": 98.6,
                "cumpct_cust": 90.3,
                "metric_type": "LTV",
                "x": 90.3,
                "y": 98.6
              },
              {
                "cumpct_pct": 98.6,
                "cumpct_cust": 90.4,
                "metric_type": "LTV",
                "x": 90.4,
                "y": 98.6
              },
              {
                "cumpct_pct": 98.6,
                "cumpct_cust": 90.6,
                "metric_type": "LTV",
                "x": 90.6,
                "y": 98.6
              },
              {
                "cumpct_pct": 98.6,
                "cumpct_cust": 90.6,
                "metric_type": "LTV",
                "x": 90.6,
                "y": 98.6
              },
              {
                "cumpct_pct": 98.7,
                "cumpct_cust": 90.8,
                "metric_type": "LTV",
                "x": 90.8,
                "y": 98.7
              },
              {
                "cumpct_pct": 98.7,
                "cumpct_cust": 90.9,
                "metric_type": "LTV",
                "x": 90.9,
                "y": 98.7
              },
              {
                "cumpct_pct": 98.7,
                "cumpct_cust": 91.1,
                "metric_type": "LTV",
                "x": 91.1,
                "y": 98.7
              },
              {
                "cumpct_pct": 98.7,
                "cumpct_cust": 91.1,
                "metric_type": "LTV",
                "x": 91.1,
                "y": 98.7
              },
              {
                "cumpct_pct": 98.7,
                "cumpct_cust": 91.2,
                "metric_type": "LTV",
                "x": 91.2,
                "y": 98.7
              },
              {
                "cumpct_pct": 98.7,
                "cumpct_cust": 91.2,
                "metric_type": "LTV",
                "x": 91.2,
                "y": 98.7
              },
              {
                "cumpct_pct": 98.8,
                "cumpct_cust": 91.3,
                "metric_type": "LTV",
                "x": 91.3,
                "y": 98.8
              },
              {
                "cumpct_pct": 98.8,
                "cumpct_cust": 91.4,
                "metric_type": "LTV",
                "x": 91.4,
                "y": 98.8
              },
              {
                "cumpct_pct": 98.8,
                "cumpct_cust": 91.6,
                "metric_type": "LTV",
                "x": 91.6,
                "y": 98.8
              },
              {
                "cumpct_pct": 98.9,
                "cumpct_cust": 91.9,
                "metric_type": "LTV",
                "x": 91.9,
                "y": 98.9
              },
              {
                "cumpct_pct": 98.9,
                "cumpct_cust": 91.9,
                "metric_type": "LTV",
                "x": 91.9,
                "y": 98.9
              },
              {
                "cumpct_pct": 98.9,
                "cumpct_cust": 91.9,
                "metric_type": "LTV",
                "x": 91.9,
                "y": 98.9
              },
              {
                "cumpct_pct": 98.9,
                "cumpct_cust": 92.1,
                "metric_type": "LTV",
                "x": 92.1,
                "y": 98.9
              },
              {
                "cumpct_pct": 99,
                "cumpct_cust": 92.5,
                "metric_type": "LTV",
                "x": 92.5,
                "y": 99
              },
              {
                "cumpct_pct": 99,
                "cumpct_cust": 92.5,
                "metric_type": "LTV",
                "x": 92.5,
                "y": 99
              },
              {
                "cumpct_pct": 99,
                "cumpct_cust": 92.6,
                "metric_type": "LTV",
                "x": 92.6,
                "y": 99
              },
              {
                "cumpct_pct": 99,
                "cumpct_cust": 92.6,
                "metric_type": "LTV",
                "x": 92.6,
                "y": 99
              },
              {
                "cumpct_pct": 99,
                "cumpct_cust": 92.7,
                "metric_type": "LTV",
                "x": 92.7,
                "y": 99
              },
              {
                "cumpct_pct": 99,
                "cumpct_cust": 92.8,
                "metric_type": "LTV",
                "x": 92.8,
                "y": 99
              },
              {
                "cumpct_pct": 99,
                "cumpct_cust": 92.9,
                "metric_type": "LTV",
                "x": 92.9,
                "y": 99
              },
              {
                "cumpct_pct": 99.1,
                "cumpct_cust": 93.2,
                "metric_type": "LTV",
                "x": 93.2,
                "y": 99.1
              },
              {
                "cumpct_pct": 99.1,
                "cumpct_cust": 93.2,
                "metric_type": "LTV",
                "x": 93.2,
                "y": 99.1
              },
              {
                "cumpct_pct": 99.1,
                "cumpct_cust": 93.5,
                "metric_type": "LTV",
                "x": 93.5,
                "y": 99.1
              },
              {
                "cumpct_pct": 99.2,
                "cumpct_cust": 93.6,
                "metric_type": "LTV",
                "x": 93.6,
                "y": 99.2
              },
              {
                "cumpct_pct": 99.2,
                "cumpct_cust": 93.8,
                "metric_type": "LTV",
                "x": 93.8,
                "y": 99.2
              },
              {
                "cumpct_pct": 99.2,
                "cumpct_cust": 93.8,
                "metric_type": "LTV",
                "x": 93.8,
                "y": 99.2
              },
              {
                "cumpct_pct": 99.2,
                "cumpct_cust": 93.9,
                "metric_type": "LTV",
                "x": 93.9,
                "y": 99.2
              },
              {
                "cumpct_pct": 99.2,
                "cumpct_cust": 94,
                "metric_type": "LTV",
                "x": 94,
                "y": 99.2
              },
              {
                "cumpct_pct": 99.3,
                "cumpct_cust": 94.3,
                "metric_type": "LTV",
                "x": 94.3,
                "y": 99.3
              },
              {
                "cumpct_pct": 99.3,
                "cumpct_cust": 94.3,
                "metric_type": "LTV",
                "x": 94.3,
                "y": 99.3
              },
              {
                "cumpct_pct": 99.3,
                "cumpct_cust": 94.4,
                "metric_type": "LTV",
                "x": 94.4,
                "y": 99.3
              },
              {
                "cumpct_pct": 99.3,
                "cumpct_cust": 94.4,
                "metric_type": "LTV",
                "x": 94.4,
                "y": 99.3
              },
              {
                "cumpct_pct": 99.3,
                "cumpct_cust": 94.4,
                "metric_type": "LTV",
                "x": 94.4,
                "y": 99.3
              },
              {
                "cumpct_pct": 99.3,
                "cumpct_cust": 94.5,
                "metric_type": "LTV",
                "x": 94.5,
                "y": 99.3
              },
              {
                "cumpct_pct": 99.3,
                "cumpct_cust": 94.6,
                "metric_type": "LTV",
                "x": 94.6,
                "y": 99.3
              },
              {
                "cumpct_pct": 99.3,
                "cumpct_cust": 94.6,
                "metric_type": "LTV",
                "x": 94.6,
                "y": 99.3
              },
              {
                "cumpct_pct": 99.4,
                "cumpct_cust": 94.8,
                "metric_type": "LTV",
                "x": 94.8,
                "y": 99.4
              },
              {
                "cumpct_pct": 99.4,
                "cumpct_cust": 95,
                "metric_type": "LTV",
                "x": 95,
                "y": 99.4
              },
              {
                "cumpct_pct": 99.4,
                "cumpct_cust": 95.1,
                "metric_type": "LTV",
                "x": 95.1,
                "y": 99.4
              },
              {
                "cumpct_pct": 99.4,
                "cumpct_cust": 95.2,
                "metric_type": "LTV",
                "x": 95.2,
                "y": 99.4
              },
              {
                "cumpct_pct": 99.4,
                "cumpct_cust": 95.3,
                "metric_type": "LTV",
                "x": 95.3,
                "y": 99.4
              },
              {
                "cumpct_pct": 99.5,
                "cumpct_cust": 95.5,
                "metric_type": "LTV",
                "x": 95.5,
                "y": 99.5
              },
              {
                "cumpct_pct": 99.5,
                "cumpct_cust": 95.5,
                "metric_type": "LTV",
                "x": 95.5,
                "y": 99.5
              },
              {
                "cumpct_pct": 99.5,
                "cumpct_cust": 95.7,
                "metric_type": "LTV",
                "x": 95.7,
                "y": 99.5
              },
              {
                "cumpct_pct": 99.5,
                "cumpct_cust": 95.7,
                "metric_type": "LTV",
                "x": 95.7,
                "y": 99.5
              },
              {
                "cumpct_pct": 99.5,
                "cumpct_cust": 95.7,
                "metric_type": "LTV",
                "x": 95.7,
                "y": 99.5
              },
              {
                "cumpct_pct": 99.5,
                "cumpct_cust": 95.9,
                "metric_type": "LTV",
                "x": 95.9,
                "y": 99.5
              },
              {
                "cumpct_pct": 99.5,
                "cumpct_cust": 96.1,
                "metric_type": "LTV",
                "x": 96.1,
                "y": 99.5
              },
              {
                "cumpct_pct": 99.6,
                "cumpct_cust": 96.2,
                "metric_type": "LTV",
                "x": 96.2,
                "y": 99.6
              },
              {
                "cumpct_pct": 99.6,
                "cumpct_cust": 96.3,
                "metric_type": "LTV",
                "x": 96.3,
                "y": 99.6
              },
              {
                "cumpct_pct": 99.6,
                "cumpct_cust": 96.3,
                "metric_type": "LTV",
                "x": 96.3,
                "y": 99.6
              },
              {
                "cumpct_pct": 99.6,
                "cumpct_cust": 96.4,
                "metric_type": "LTV",
                "x": 96.4,
                "y": 99.6
              },
              {
                "cumpct_pct": 99.6,
                "cumpct_cust": 96.7,
                "metric_type": "LTV",
                "x": 96.7,
                "y": 99.6
              },
              {
                "cumpct_pct": 99.6,
                "cumpct_cust": 96.8,
                "metric_type": "LTV",
                "x": 96.8,
                "y": 99.6
              },
              {
                "cumpct_pct": 99.7,
                "cumpct_cust": 96.8,
                "metric_type": "LTV",
                "x": 96.8,
                "y": 99.7
              },
              {
                "cumpct_pct": 99.7,
                "cumpct_cust": 96.8,
                "metric_type": "LTV",
                "x": 96.8,
                "y": 99.7
              },
              {
                "cumpct_pct": 99.7,
                "cumpct_cust": 97.1,
                "metric_type": "LTV",
                "x": 97.1,
                "y": 99.7
              },
              {
                "cumpct_pct": 99.7,
                "cumpct_cust": 97.1,
                "metric_type": "LTV",
                "x": 97.1,
                "y": 99.7
              },
              {
                "cumpct_pct": 99.7,
                "cumpct_cust": 97.3,
                "metric_type": "LTV",
                "x": 97.3,
                "y": 99.7
              },
              {
                "cumpct_pct": 99.7,
                "cumpct_cust": 97.4,
                "metric_type": "LTV",
                "x": 97.4,
                "y": 99.7
              },
              {
                "cumpct_pct": 99.7,
                "cumpct_cust": 97.4,
                "metric_type": "LTV",
                "x": 97.4,
                "y": 99.7
              },
              {
                "cumpct_pct": 99.7,
                "cumpct_cust": 97.5,
                "metric_type": "LTV",
                "x": 97.5,
                "y": 99.7
              },
              {
                "cumpct_pct": 99.8,
                "cumpct_cust": 97.6,
                "metric_type": "LTV",
                "x": 97.6,
                "y": 99.8
              },
              {
                "cumpct_pct": 99.8,
                "cumpct_cust": 97.7,
                "metric_type": "LTV",
                "x": 97.7,
                "y": 99.8
              },
              {
                "cumpct_pct": 99.8,
                "cumpct_cust": 97.7,
                "metric_type": "LTV",
                "x": 97.7,
                "y": 99.8
              },
              {
                "cumpct_pct": 99.8,
                "cumpct_cust": 97.7,
                "metric_type": "LTV",
                "x": 97.7,
                "y": 99.8
              },
              {
                "cumpct_pct": 99.8,
                "cumpct_cust": 97.9,
                "metric_type": "LTV",
                "x": 97.9,
                "y": 99.8
              },
              {
                "cumpct_pct": 99.8,
                "cumpct_cust": 98,
                "metric_type": "LTV",
                "x": 98,
                "y": 99.8
              },
              {
                "cumpct_pct": 99.8,
                "cumpct_cust": 98.1,
                "metric_type": "LTV",
                "x": 98.1,
                "y": 99.8
              },
              {
                "cumpct_pct": 99.8,
                "cumpct_cust": 98.1,
                "metric_type": "LTV",
                "x": 98.1,
                "y": 99.8
              },
              {
                "cumpct_pct": 99.8,
                "cumpct_cust": 98.1,
                "metric_type": "LTV",
                "x": 98.1,
                "y": 99.8
              },
              {
                "cumpct_pct": 99.8,
                "cumpct_cust": 98.2,
                "metric_type": "LTV",
                "x": 98.2,
                "y": 99.8
              },
              {
                "cumpct_pct": 99.8,
                "cumpct_cust": 98.3,
                "metric_type": "LTV",
                "x": 98.3,
                "y": 99.8
              },
              {
                "cumpct_pct": 99.8,
                "cumpct_cust": 98.4,
                "metric_type": "LTV",
                "x": 98.4,
                "y": 99.8
              },
              {
                "cumpct_pct": 99.8,
                "cumpct_cust": 98.4,
                "metric_type": "LTV",
                "x": 98.4,
                "y": 99.8
              },
              {
                "cumpct_pct": 99.9,
                "cumpct_cust": 98.5,
                "metric_type": "LTV",
                "x": 98.5,
                "y": 99.9
              },
              {
                "cumpct_pct": 99.9,
                "cumpct_cust": 98.5,
                "metric_type": "LTV",
                "x": 98.5,
                "y": 99.9
              },
              {
                "cumpct_pct": 99.9,
                "cumpct_cust": 98.6,
                "metric_type": "LTV",
                "x": 98.6,
                "y": 99.9
              },
              {
                "cumpct_pct": 99.9,
                "cumpct_cust": 98.8,
                "metric_type": "LTV",
                "x": 98.8,
                "y": 99.9
              },
              {
                "cumpct_pct": 99.9,
                "cumpct_cust": 99,
                "metric_type": "LTV",
                "x": 99,
                "y": 99.9
              },
              {
                "cumpct_pct": 99.9,
                "cumpct_cust": 99.1,
                "metric_type": "LTV",
                "x": 99.1,
                "y": 99.9
              },
              {
                "cumpct_pct": 100,
                "cumpct_cust": 99.5,
                "metric_type": "LTV",
                "x": 99.5,
                "y": 100
              },
              {
                "cumpct_pct": 100,
                "cumpct_cust": 99.5,
                "metric_type": "LTV",
                "x": 99.5,
                "y": 100
              },
              {
                "cumpct_pct": 100,
                "cumpct_cust": 99.5,
                "metric_type": "LTV",
                "x": 99.5,
                "y": 100
              },
              {
                "cumpct_pct": 100,
                "cumpct_cust": 99.5,
                "metric_type": "LTV",
                "x": 99.5,
                "y": 100
              },
              {
                "cumpct_pct": 100,
                "cumpct_cust": 99.6,
                "metric_type": "LTV",
                "x": 99.6,
                "y": 100
              },
              {
                "cumpct_pct": 100,
                "cumpct_cust": 99.7,
                "metric_type": "LTV",
                "x": 99.7,
                "y": 100
              },
              {
                "cumpct_pct": 100,
                "cumpct_cust": 99.8,
                "metric_type": "LTV",
                "x": 99.8,
                "y": 100
              },
              {
                "cumpct_pct": 100,
                "cumpct_cust": 99.9,
                "metric_type": "LTV",
                "x": 99.9,
                "y": 100
              }
            ],
            "type": "line"
          },
          {
            "name": "Revenue",
            "color": '#BD10E0',
            "data": [
              {
                "cumpct_pct": 6.9,
                "cumpct_cust": 0.1,
                "metric_type": "Revenue",
                "x": 0.1,
                "y": 6.9
              },
              {
                "cumpct_pct": 8.4,
                "cumpct_cust": 0.2,
                "metric_type": "Revenue",
                "x": 0.2,
                "y": 8.4
              },
              {
                "cumpct_pct": 8.8,
                "cumpct_cust": 0.3,
                "metric_type": "Revenue",
                "x": 0.3,
                "y": 8.8
              },
              {
                "cumpct_pct": 9,
                "cumpct_cust": 0.3,
                "metric_type": "Revenue",
                "x": 0.3,
                "y": 9
              },
              {
                "cumpct_pct": 9.3,
                "cumpct_cust": 0.3,
                "metric_type": "Revenue",
                "x": 0.3,
                "y": 9.3
              },
              {
                "cumpct_pct": 9.5,
                "cumpct_cust": 0.4,
                "metric_type": "Revenue",
                "x": 0.4,
                "y": 9.5
              },
              {
                "cumpct_pct": 9.6,
                "cumpct_cust": 0.4,
                "metric_type": "Revenue",
                "x": 0.4,
                "y": 9.6
              },
              {
                "cumpct_pct": 9.8,
                "cumpct_cust": 0.4,
                "metric_type": "Revenue",
                "x": 0.4,
                "y": 9.8
              },
              {
                "cumpct_pct": 10,
                "cumpct_cust": 0.4,
                "metric_type": "Revenue",
                "x": 0.4,
                "y": 10
              },
              {
                "cumpct_pct": 10.9,
                "cumpct_cust": 0.5,
                "metric_type": "Revenue",
                "x": 0.5,
                "y": 10.9
              },
              {
                "cumpct_pct": 10.9,
                "cumpct_cust": 0.5,
                "metric_type": "Revenue",
                "x": 0.5,
                "y": 10.9
              },
              {
                "cumpct_pct": 12.9,
                "cumpct_cust": 0.8,
                "metric_type": "Revenue",
                "x": 0.8,
                "y": 12.9
              },
              {
                "cumpct_pct": 13.4,
                "cumpct_cust": 0.9,
                "metric_type": "Revenue",
                "x": 0.9,
                "y": 13.4
              },
              {
                "cumpct_pct": 13.7,
                "cumpct_cust": 1,
                "metric_type": "Revenue",
                "x": 1,
                "y": 13.7
              },
              {
                "cumpct_pct": 13.8,
                "cumpct_cust": 1,
                "metric_type": "Revenue",
                "x": 1,
                "y": 13.8
              },
              {
                "cumpct_pct": 14.2,
                "cumpct_cust": 1.1,
                "metric_type": "Revenue",
                "x": 1.1,
                "y": 14.2
              },
              {
                "cumpct_pct": 14.3,
                "cumpct_cust": 1.1,
                "metric_type": "Revenue",
                "x": 1.1,
                "y": 14.3
              },
              {
                "cumpct_pct": 14.4,
                "cumpct_cust": 1.1,
                "metric_type": "Revenue",
                "x": 1.1,
                "y": 14.4
              },
              {
                "cumpct_pct": 14.5,
                "cumpct_cust": 1.1,
                "metric_type": "Revenue",
                "x": 1.1,
                "y": 14.5
              },
              {
                "cumpct_pct": 14.6,
                "cumpct_cust": 1.2,
                "metric_type": "Revenue",
                "x": 1.2,
                "y": 14.6
              },
              {
                "cumpct_pct": 15,
                "cumpct_cust": 1.2,
                "metric_type": "Revenue",
                "x": 1.2,
                "y": 15
              },
              {
                "cumpct_pct": 15.7,
                "cumpct_cust": 1.4,
                "metric_type": "Revenue",
                "x": 1.4,
                "y": 15.7
              },
              {
                "cumpct_pct": 15.9,
                "cumpct_cust": 1.4,
                "metric_type": "Revenue",
                "x": 1.4,
                "y": 15.9
              },
              {
                "cumpct_pct": 16.4,
                "cumpct_cust": 1.5,
                "metric_type": "Revenue",
                "x": 1.5,
                "y": 16.4
              },
              {
                "cumpct_pct": 16.5,
                "cumpct_cust": 1.5,
                "metric_type": "Revenue",
                "x": 1.5,
                "y": 16.5
              },
              {
                "cumpct_pct": 17.2,
                "cumpct_cust": 1.7,
                "metric_type": "Revenue",
                "x": 1.7,
                "y": 17.2
              },
              {
                "cumpct_pct": 17.7,
                "cumpct_cust": 1.8,
                "metric_type": "Revenue",
                "x": 1.8,
                "y": 17.7
              },
              {
                "cumpct_pct": 18.2,
                "cumpct_cust": 1.9,
                "metric_type": "Revenue",
                "x": 1.9,
                "y": 18.2
              },
              {
                "cumpct_pct": 18.7,
                "cumpct_cust": 2.1,
                "metric_type": "Revenue",
                "x": 2.1,
                "y": 18.7
              },
              {
                "cumpct_pct": 20.6,
                "cumpct_cust": 2.5,
                "metric_type": "Revenue",
                "x": 2.5,
                "y": 20.6
              },
              {
                "cumpct_pct": 20.9,
                "cumpct_cust": 2.6,
                "metric_type": "Revenue",
                "x": 2.6,
                "y": 20.9
              },
              {
                "cumpct_pct": 21.4,
                "cumpct_cust": 2.8,
                "metric_type": "Revenue",
                "x": 2.8,
                "y": 21.4
              },
              {
                "cumpct_pct": 21.5,
                "cumpct_cust": 2.8,
                "metric_type": "Revenue",
                "x": 2.8,
                "y": 21.5
              },
              {
                "cumpct_pct": 21.7,
                "cumpct_cust": 2.8,
                "metric_type": "Revenue",
                "x": 2.8,
                "y": 21.7
              },
              {
                "cumpct_pct": 21.8,
                "cumpct_cust": 2.9,
                "metric_type": "Revenue",
                "x": 2.9,
                "y": 21.8
              },
              {
                "cumpct_pct": 21.9,
                "cumpct_cust": 2.9,
                "metric_type": "Revenue",
                "x": 2.9,
                "y": 21.9
              },
              {
                "cumpct_pct": 21.9,
                "cumpct_cust": 2.9,
                "metric_type": "Revenue",
                "x": 2.9,
                "y": 21.9
              },
              {
                "cumpct_pct": 22.2,
                "cumpct_cust": 3,
                "metric_type": "Revenue",
                "x": 3,
                "y": 22.2
              },
              {
                "cumpct_pct": 22.3,
                "cumpct_cust": 3,
                "metric_type": "Revenue",
                "x": 3,
                "y": 22.3
              },
              {
                "cumpct_pct": 22.4,
                "cumpct_cust": 3,
                "metric_type": "Revenue",
                "x": 3,
                "y": 22.4
              },
              {
                "cumpct_pct": 22.6,
                "cumpct_cust": 3.1,
                "metric_type": "Revenue",
                "x": 3.1,
                "y": 22.6
              },
              {
                "cumpct_pct": 22.7,
                "cumpct_cust": 3.1,
                "metric_type": "Revenue",
                "x": 3.1,
                "y": 22.7
              },
              {
                "cumpct_pct": 23.1,
                "cumpct_cust": 3.2,
                "metric_type": "Revenue",
                "x": 3.2,
                "y": 23.1
              },
              {
                "cumpct_pct": 23.5,
                "cumpct_cust": 3.3,
                "metric_type": "Revenue",
                "x": 3.3,
                "y": 23.5
              },
              {
                "cumpct_pct": 23.6,
                "cumpct_cust": 3.4,
                "metric_type": "Revenue",
                "x": 3.4,
                "y": 23.6
              },
              {
                "cumpct_pct": 23.6,
                "cumpct_cust": 3.4,
                "metric_type": "Revenue",
                "x": 3.4,
                "y": 23.6
              },
              {
                "cumpct_pct": 24,
                "cumpct_cust": 3.5,
                "metric_type": "Revenue",
                "x": 3.5,
                "y": 24
              },
              {
                "cumpct_pct": 24.1,
                "cumpct_cust": 3.5,
                "metric_type": "Revenue",
                "x": 3.5,
                "y": 24.1
              },
              {
                "cumpct_pct": 24.3,
                "cumpct_cust": 3.6,
                "metric_type": "Revenue",
                "x": 3.6,
                "y": 24.3
              },
              {
                "cumpct_pct": 24.3,
                "cumpct_cust": 3.6,
                "metric_type": "Revenue",
                "x": 3.6,
                "y": 24.3
              },
              {
                "cumpct_pct": 24.3,
                "cumpct_cust": 3.6,
                "metric_type": "Revenue",
                "x": 3.6,
                "y": 24.3
              },
              {
                "cumpct_pct": 24.3,
                "cumpct_cust": 3.6,
                "metric_type": "Revenue",
                "x": 3.6,
                "y": 24.3
              },
              {
                "cumpct_pct": 24.7,
                "cumpct_cust": 3.7,
                "metric_type": "Revenue",
                "x": 3.7,
                "y": 24.7
              },
              {
                "cumpct_pct": 25.7,
                "cumpct_cust": 4,
                "metric_type": "Revenue",
                "x": 4,
                "y": 25.7
              },
              {
                "cumpct_pct": 26.1,
                "cumpct_cust": 4.1,
                "metric_type": "Revenue",
                "x": 4.1,
                "y": 26.1
              },
              {
                "cumpct_pct": 26.6,
                "cumpct_cust": 4.3,
                "metric_type": "Revenue",
                "x": 4.3,
                "y": 26.6
              },
              {
                "cumpct_pct": 26.8,
                "cumpct_cust": 4.3,
                "metric_type": "Revenue",
                "x": 4.3,
                "y": 26.8
              },
              {
                "cumpct_pct": 26.8,
                "cumpct_cust": 4.3,
                "metric_type": "Revenue",
                "x": 4.3,
                "y": 26.8
              },
              {
                "cumpct_pct": 27,
                "cumpct_cust": 4.4,
                "metric_type": "Revenue",
                "x": 4.4,
                "y": 27
              },
              {
                "cumpct_pct": 27.3,
                "cumpct_cust": 4.5,
                "metric_type": "Revenue",
                "x": 4.5,
                "y": 27.3
              },
              {
                "cumpct_pct": 27.6,
                "cumpct_cust": 4.6,
                "metric_type": "Revenue",
                "x": 4.6,
                "y": 27.6
              },
              {
                "cumpct_pct": 27.7,
                "cumpct_cust": 4.6,
                "metric_type": "Revenue",
                "x": 4.6,
                "y": 27.7
              },
              {
                "cumpct_pct": 28.1,
                "cumpct_cust": 4.8,
                "metric_type": "Revenue",
                "x": 4.8,
                "y": 28.1
              },
              {
                "cumpct_pct": 28.4,
                "cumpct_cust": 4.9,
                "metric_type": "Revenue",
                "x": 4.9,
                "y": 28.4
              },
              {
                "cumpct_pct": 29.6,
                "cumpct_cust": 5.3,
                "metric_type": "Revenue",
                "x": 5.3,
                "y": 29.6
              },
              {
                "cumpct_pct": 30.3,
                "cumpct_cust": 5.5,
                "metric_type": "Revenue",
                "x": 5.5,
                "y": 30.3
              },
              {
                "cumpct_pct": 30.4,
                "cumpct_cust": 5.5,
                "metric_type": "Revenue",
                "x": 5.5,
                "y": 30.4
              },
              {
                "cumpct_pct": 30.5,
                "cumpct_cust": 5.6,
                "metric_type": "Revenue",
                "x": 5.6,
                "y": 30.5
              },
              {
                "cumpct_pct": 31.2,
                "cumpct_cust": 5.9,
                "metric_type": "Revenue",
                "x": 5.9,
                "y": 31.2
              },
              {
                "cumpct_pct": 31.3,
                "cumpct_cust": 5.9,
                "metric_type": "Revenue",
                "x": 5.9,
                "y": 31.3
              },
              {
                "cumpct_pct": 31.4,
                "cumpct_cust": 5.9,
                "metric_type": "Revenue",
                "x": 5.9,
                "y": 31.4
              },
              {
                "cumpct_pct": 31.8,
                "cumpct_cust": 6,
                "metric_type": "Revenue",
                "x": 6,
                "y": 31.8
              },
              {
                "cumpct_pct": 32.1,
                "cumpct_cust": 6.2,
                "metric_type": "Revenue",
                "x": 6.2,
                "y": 32.1
              },
              {
                "cumpct_pct": 32.4,
                "cumpct_cust": 6.3,
                "metric_type": "Revenue",
                "x": 6.3,
                "y": 32.4
              },
              {
                "cumpct_pct": 32.5,
                "cumpct_cust": 6.3,
                "metric_type": "Revenue",
                "x": 6.3,
                "y": 32.5
              },
              {
                "cumpct_pct": 32.6,
                "cumpct_cust": 6.3,
                "metric_type": "Revenue",
                "x": 6.3,
                "y": 32.6
              },
              {
                "cumpct_pct": 33.7,
                "cumpct_cust": 6.8,
                "metric_type": "Revenue",
                "x": 6.8,
                "y": 33.7
              },
              {
                "cumpct_pct": 33.8,
                "cumpct_cust": 6.8,
                "metric_type": "Revenue",
                "x": 6.8,
                "y": 33.8
              },
              {
                "cumpct_pct": 34.1,
                "cumpct_cust": 6.9,
                "metric_type": "Revenue",
                "x": 6.9,
                "y": 34.1
              },
              {
                "cumpct_pct": 34.1,
                "cumpct_cust": 6.9,
                "metric_type": "Revenue",
                "x": 6.9,
                "y": 34.1
              },
              {
                "cumpct_pct": 34.3,
                "cumpct_cust": 7,
                "metric_type": "Revenue",
                "x": 7,
                "y": 34.3
              },
              {
                "cumpct_pct": 34.3,
                "cumpct_cust": 7,
                "metric_type": "Revenue",
                "x": 7,
                "y": 34.3
              },
              {
                "cumpct_pct": 34.6,
                "cumpct_cust": 7.1,
                "metric_type": "Revenue",
                "x": 7.1,
                "y": 34.6
              },
              {
                "cumpct_pct": 34.8,
                "cumpct_cust": 7.2,
                "metric_type": "Revenue",
                "x": 7.2,
                "y": 34.8
              },
              {
                "cumpct_pct": 35.3,
                "cumpct_cust": 7.4,
                "metric_type": "Revenue",
                "x": 7.4,
                "y": 35.3
              },
              {
                "cumpct_pct": 35.5,
                "cumpct_cust": 7.5,
                "metric_type": "Revenue",
                "x": 7.5,
                "y": 35.5
              },
              {
                "cumpct_pct": 35.7,
                "cumpct_cust": 7.5,
                "metric_type": "Revenue",
                "x": 7.5,
                "y": 35.7
              },
              {
                "cumpct_pct": 36.1,
                "cumpct_cust": 7.7,
                "metric_type": "Revenue",
                "x": 7.7,
                "y": 36.1
              },
              {
                "cumpct_pct": 36.6,
                "cumpct_cust": 7.9,
                "metric_type": "Revenue",
                "x": 7.9,
                "y": 36.6
              },
              {
                "cumpct_pct": 36.6,
                "cumpct_cust": 7.9,
                "metric_type": "Revenue",
                "x": 7.9,
                "y": 36.6
              },
              {
                "cumpct_pct": 36.8,
                "cumpct_cust": 8,
                "metric_type": "Revenue",
                "x": 8,
                "y": 36.8
              },
              {
                "cumpct_pct": 37,
                "cumpct_cust": 8.1,
                "metric_type": "Revenue",
                "x": 8.1,
                "y": 37
              },
              {
                "cumpct_pct": 37.5,
                "cumpct_cust": 8.3,
                "metric_type": "Revenue",
                "x": 8.3,
                "y": 37.5
              },
              {
                "cumpct_pct": 37.5,
                "cumpct_cust": 8.3,
                "metric_type": "Revenue",
                "x": 8.3,
                "y": 37.5
              },
              {
                "cumpct_pct": 38.2,
                "cumpct_cust": 8.6,
                "metric_type": "Revenue",
                "x": 8.6,
                "y": 38.2
              },
              {
                "cumpct_pct": 38.2,
                "cumpct_cust": 8.6,
                "metric_type": "Revenue",
                "x": 8.6,
                "y": 38.2
              },
              {
                "cumpct_pct": 38.5,
                "cumpct_cust": 8.7,
                "metric_type": "Revenue",
                "x": 8.7,
                "y": 38.5
              },
              {
                "cumpct_pct": 39,
                "cumpct_cust": 9,
                "metric_type": "Revenue",
                "x": 9,
                "y": 39
              },
              {
                "cumpct_pct": 39.7,
                "cumpct_cust": 9.2,
                "metric_type": "Revenue",
                "x": 9.2,
                "y": 39.7
              },
              {
                "cumpct_pct": 39.7,
                "cumpct_cust": 9.2,
                "metric_type": "Revenue",
                "x": 9.2,
                "y": 39.7
              },
              {
                "cumpct_pct": 39.9,
                "cumpct_cust": 9.3,
                "metric_type": "Revenue",
                "x": 9.3,
                "y": 39.9
              },
              {
                "cumpct_pct": 40.2,
                "cumpct_cust": 9.5,
                "metric_type": "Revenue",
                "x": 9.5,
                "y": 40.2
              },
              {
                "cumpct_pct": 40.3,
                "cumpct_cust": 9.5,
                "metric_type": "Revenue",
                "x": 9.5,
                "y": 40.3
              },
              {
                "cumpct_pct": 41.1,
                "cumpct_cust": 9.9,
                "metric_type": "Revenue",
                "x": 9.9,
                "y": 41.1
              },
              {
                "cumpct_pct": 41.9,
                "cumpct_cust": 10.3,
                "metric_type": "Revenue",
                "x": 10.3,
                "y": 41.9
              },
              {
                "cumpct_pct": 42.1,
                "cumpct_cust": 10.4,
                "metric_type": "Revenue",
                "x": 10.4,
                "y": 42.1
              },
              {
                "cumpct_pct": 42.5,
                "cumpct_cust": 10.5,
                "metric_type": "Revenue",
                "x": 10.5,
                "y": 42.5
              },
              {
                "cumpct_pct": 42.5,
                "cumpct_cust": 10.5,
                "metric_type": "Revenue",
                "x": 10.5,
                "y": 42.5
              },
              {
                "cumpct_pct": 42.7,
                "cumpct_cust": 10.6,
                "metric_type": "Revenue",
                "x": 10.6,
                "y": 42.7
              },
              {
                "cumpct_pct": 43,
                "cumpct_cust": 10.8,
                "metric_type": "Revenue",
                "x": 10.8,
                "y": 43
              },
              {
                "cumpct_pct": 43,
                "cumpct_cust": 10.8,
                "metric_type": "Revenue",
                "x": 10.8,
                "y": 43
              },
              {
                "cumpct_pct": 43.1,
                "cumpct_cust": 10.8,
                "metric_type": "Revenue",
                "x": 10.8,
                "y": 43.1
              },
              {
                "cumpct_pct": 43.4,
                "cumpct_cust": 11,
                "metric_type": "Revenue",
                "x": 11,
                "y": 43.4
              },
              {
                "cumpct_pct": 43.5,
                "cumpct_cust": 11,
                "metric_type": "Revenue",
                "x": 11,
                "y": 43.5
              },
              {
                "cumpct_pct": 43.8,
                "cumpct_cust": 11.2,
                "metric_type": "Revenue",
                "x": 11.2,
                "y": 43.8
              },
              {
                "cumpct_pct": 43.9,
                "cumpct_cust": 11.2,
                "metric_type": "Revenue",
                "x": 11.2,
                "y": 43.9
              },
              {
                "cumpct_pct": 43.9,
                "cumpct_cust": 11.2,
                "metric_type": "Revenue",
                "x": 11.2,
                "y": 43.9
              },
              {
                "cumpct_pct": 44.1,
                "cumpct_cust": 11.3,
                "metric_type": "Revenue",
                "x": 11.3,
                "y": 44.1
              },
              {
                "cumpct_pct": 44.3,
                "cumpct_cust": 11.4,
                "metric_type": "Revenue",
                "x": 11.4,
                "y": 44.3
              },
              {
                "cumpct_pct": 44.7,
                "cumpct_cust": 11.6,
                "metric_type": "Revenue",
                "x": 11.6,
                "y": 44.7
              },
              {
                "cumpct_pct": 44.8,
                "cumpct_cust": 11.6,
                "metric_type": "Revenue",
                "x": 11.6,
                "y": 44.8
              },
              {
                "cumpct_pct": 44.8,
                "cumpct_cust": 11.6,
                "metric_type": "Revenue",
                "x": 11.6,
                "y": 44.8
              },
              {
                "cumpct_pct": 44.8,
                "cumpct_cust": 11.7,
                "metric_type": "Revenue",
                "x": 11.7,
                "y": 44.8
              },
              {
                "cumpct_pct": 44.8,
                "cumpct_cust": 11.7,
                "metric_type": "Revenue",
                "x": 11.7,
                "y": 44.8
              },
              {
                "cumpct_pct": 44.8,
                "cumpct_cust": 11.7,
                "metric_type": "Revenue",
                "x": 11.7,
                "y": 44.8
              },
              {
                "cumpct_pct": 45.6,
                "cumpct_cust": 12.1,
                "metric_type": "Revenue",
                "x": 12.1,
                "y": 45.6
              },
              {
                "cumpct_pct": 45.7,
                "cumpct_cust": 12.1,
                "metric_type": "Revenue",
                "x": 12.1,
                "y": 45.7
              },
              {
                "cumpct_pct": 45.7,
                "cumpct_cust": 12.1,
                "metric_type": "Revenue",
                "x": 12.1,
                "y": 45.7
              },
              {
                "cumpct_pct": 45.7,
                "cumpct_cust": 12.1,
                "metric_type": "Revenue",
                "x": 12.1,
                "y": 45.7
              },
              {
                "cumpct_pct": 45.8,
                "cumpct_cust": 12.2,
                "metric_type": "Revenue",
                "x": 12.2,
                "y": 45.8
              },
              {
                "cumpct_pct": 45.9,
                "cumpct_cust": 12.2,
                "metric_type": "Revenue",
                "x": 12.2,
                "y": 45.9
              },
              {
                "cumpct_pct": 46,
                "cumpct_cust": 12.3,
                "metric_type": "Revenue",
                "x": 12.3,
                "y": 46
              },
              {
                "cumpct_pct": 46.1,
                "cumpct_cust": 12.3,
                "metric_type": "Revenue",
                "x": 12.3,
                "y": 46.1
              },
              {
                "cumpct_pct": 46.1,
                "cumpct_cust": 12.3,
                "metric_type": "Revenue",
                "x": 12.3,
                "y": 46.1
              },
              {
                "cumpct_pct": 46.2,
                "cumpct_cust": 12.4,
                "metric_type": "Revenue",
                "x": 12.4,
                "y": 46.2
              },
              {
                "cumpct_pct": 46.8,
                "cumpct_cust": 12.7,
                "metric_type": "Revenue",
                "x": 12.7,
                "y": 46.8
              },
              {
                "cumpct_pct": 46.8,
                "cumpct_cust": 12.7,
                "metric_type": "Revenue",
                "x": 12.7,
                "y": 46.8
              },
              {
                "cumpct_pct": 46.9,
                "cumpct_cust": 12.7,
                "metric_type": "Revenue",
                "x": 12.7,
                "y": 46.9
              },
              {
                "cumpct_pct": 47,
                "cumpct_cust": 12.8,
                "metric_type": "Revenue",
                "x": 12.8,
                "y": 47
              },
              {
                "cumpct_pct": 47.1,
                "cumpct_cust": 12.9,
                "metric_type": "Revenue",
                "x": 12.9,
                "y": 47.1
              },
              {
                "cumpct_pct": 47.3,
                "cumpct_cust": 12.9,
                "metric_type": "Revenue",
                "x": 12.9,
                "y": 47.3
              },
              {
                "cumpct_pct": 47.4,
                "cumpct_cust": 13,
                "metric_type": "Revenue",
                "x": 13,
                "y": 47.4
              },
              {
                "cumpct_pct": 47.8,
                "cumpct_cust": 13.2,
                "metric_type": "Revenue",
                "x": 13.2,
                "y": 47.8
              },
              {
                "cumpct_pct": 47.8,
                "cumpct_cust": 13.2,
                "metric_type": "Revenue",
                "x": 13.2,
                "y": 47.8
              },
              {
                "cumpct_pct": 47.9,
                "cumpct_cust": 13.2,
                "metric_type": "Revenue",
                "x": 13.2,
                "y": 47.9
              },
              {
                "cumpct_pct": 48.2,
                "cumpct_cust": 13.4,
                "metric_type": "Revenue",
                "x": 13.4,
                "y": 48.2
              },
              {
                "cumpct_pct": 48.3,
                "cumpct_cust": 13.5,
                "metric_type": "Revenue",
                "x": 13.5,
                "y": 48.3
              },
              {
                "cumpct_pct": 48.5,
                "cumpct_cust": 13.6,
                "metric_type": "Revenue",
                "x": 13.6,
                "y": 48.5
              },
              {
                "cumpct_pct": 48.5,
                "cumpct_cust": 13.6,
                "metric_type": "Revenue",
                "x": 13.6,
                "y": 48.5
              },
              {
                "cumpct_pct": 48.9,
                "cumpct_cust": 13.8,
                "metric_type": "Revenue",
                "x": 13.8,
                "y": 48.9
              },
              {
                "cumpct_pct": 48.9,
                "cumpct_cust": 13.8,
                "metric_type": "Revenue",
                "x": 13.8,
                "y": 48.9
              },
              {
                "cumpct_pct": 48.9,
                "cumpct_cust": 13.8,
                "metric_type": "Revenue",
                "x": 13.8,
                "y": 48.9
              },
              {
                "cumpct_pct": 49.1,
                "cumpct_cust": 13.9,
                "metric_type": "Revenue",
                "x": 13.9,
                "y": 49.1
              },
              {
                "cumpct_pct": 49.5,
                "cumpct_cust": 14.2,
                "metric_type": "Revenue",
                "x": 14.2,
                "y": 49.5
              },
              {
                "cumpct_pct": 50,
                "cumpct_cust": 14.4,
                "metric_type": "Revenue",
                "x": 14.4,
                "y": 50
              },
              {
                "cumpct_pct": 50.3,
                "cumpct_cust": 14.6,
                "metric_type": "Revenue",
                "x": 14.6,
                "y": 50.3
              },
              {
                "cumpct_pct": 50.5,
                "cumpct_cust": 14.7,
                "metric_type": "Revenue",
                "x": 14.7,
                "y": 50.5
              },
              {
                "cumpct_pct": 50.6,
                "cumpct_cust": 14.8,
                "metric_type": "Revenue",
                "x": 14.8,
                "y": 50.6
              },
              {
                "cumpct_pct": 50.6,
                "cumpct_cust": 14.8,
                "metric_type": "Revenue",
                "x": 14.8,
                "y": 50.6
              },
              {
                "cumpct_pct": 50.7,
                "cumpct_cust": 14.8,
                "metric_type": "Revenue",
                "x": 14.8,
                "y": 50.7
              },
              {
                "cumpct_pct": 50.8,
                "cumpct_cust": 14.9,
                "metric_type": "Revenue",
                "x": 14.9,
                "y": 50.8
              },
              {
                "cumpct_pct": 50.9,
                "cumpct_cust": 14.9,
                "metric_type": "Revenue",
                "x": 14.9,
                "y": 50.9
              },
              {
                "cumpct_pct": 50.9,
                "cumpct_cust": 14.9,
                "metric_type": "Revenue",
                "x": 14.9,
                "y": 50.9
              },
              {
                "cumpct_pct": 51,
                "cumpct_cust": 15,
                "metric_type": "Revenue",
                "x": 15,
                "y": 51
              },
              {
                "cumpct_pct": 51.1,
                "cumpct_cust": 15,
                "metric_type": "Revenue",
                "x": 15,
                "y": 51.1
              },
              {
                "cumpct_pct": 51.4,
                "cumpct_cust": 15.2,
                "metric_type": "Revenue",
                "x": 15.2,
                "y": 51.4
              },
              {
                "cumpct_pct": 51.4,
                "cumpct_cust": 15.2,
                "metric_type": "Revenue",
                "x": 15.2,
                "y": 51.4
              },
              {
                "cumpct_pct": 51.6,
                "cumpct_cust": 15.4,
                "metric_type": "Revenue",
                "x": 15.4,
                "y": 51.6
              },
              {
                "cumpct_pct": 51.9,
                "cumpct_cust": 15.5,
                "metric_type": "Revenue",
                "x": 15.5,
                "y": 51.9
              },
              {
                "cumpct_pct": 52.1,
                "cumpct_cust": 15.7,
                "metric_type": "Revenue",
                "x": 15.7,
                "y": 52.1
              },
              {
                "cumpct_pct": 52.2,
                "cumpct_cust": 15.7,
                "metric_type": "Revenue",
                "x": 15.7,
                "y": 52.2
              },
              {
                "cumpct_pct": 52.2,
                "cumpct_cust": 15.7,
                "metric_type": "Revenue",
                "x": 15.7,
                "y": 52.2
              },
              {
                "cumpct_pct": 52.3,
                "cumpct_cust": 15.8,
                "metric_type": "Revenue",
                "x": 15.8,
                "y": 52.3
              },
              {
                "cumpct_pct": 52.7,
                "cumpct_cust": 16,
                "metric_type": "Revenue",
                "x": 16,
                "y": 52.7
              },
              {
                "cumpct_pct": 52.7,
                "cumpct_cust": 16,
                "metric_type": "Revenue",
                "x": 16,
                "y": 52.7
              },
              {
                "cumpct_pct": 52.9,
                "cumpct_cust": 16.1,
                "metric_type": "Revenue",
                "x": 16.1,
                "y": 52.9
              },
              {
                "cumpct_pct": 53,
                "cumpct_cust": 16.2,
                "metric_type": "Revenue",
                "x": 16.2,
                "y": 53
              },
              {
                "cumpct_pct": 53.2,
                "cumpct_cust": 16.3,
                "metric_type": "Revenue",
                "x": 16.3,
                "y": 53.2
              },
              {
                "cumpct_pct": 53.3,
                "cumpct_cust": 16.3,
                "metric_type": "Revenue",
                "x": 16.3,
                "y": 53.3
              },
              {
                "cumpct_pct": 53.3,
                "cumpct_cust": 16.4,
                "metric_type": "Revenue",
                "x": 16.4,
                "y": 53.3
              },
              {
                "cumpct_pct": 53.6,
                "cumpct_cust": 16.5,
                "metric_type": "Revenue",
                "x": 16.5,
                "y": 53.6
              },
              {
                "cumpct_pct": 53.8,
                "cumpct_cust": 16.6,
                "metric_type": "Revenue",
                "x": 16.6,
                "y": 53.8
              },
              {
                "cumpct_pct": 54.1,
                "cumpct_cust": 16.9,
                "metric_type": "Revenue",
                "x": 16.9,
                "y": 54.1
              },
              {
                "cumpct_pct": 54.7,
                "cumpct_cust": 17.2,
                "metric_type": "Revenue",
                "x": 17.2,
                "y": 54.7
              },
              {
                "cumpct_pct": 54.8,
                "cumpct_cust": 17.3,
                "metric_type": "Revenue",
                "x": 17.3,
                "y": 54.8
              },
              {
                "cumpct_pct": 54.9,
                "cumpct_cust": 17.3,
                "metric_type": "Revenue",
                "x": 17.3,
                "y": 54.9
              },
              {
                "cumpct_pct": 55,
                "cumpct_cust": 17.4,
                "metric_type": "Revenue",
                "x": 17.4,
                "y": 55
              },
              {
                "cumpct_pct": 55.1,
                "cumpct_cust": 17.5,
                "metric_type": "Revenue",
                "x": 17.5,
                "y": 55.1
              },
              {
                "cumpct_pct": 55.2,
                "cumpct_cust": 17.6,
                "metric_type": "Revenue",
                "x": 17.6,
                "y": 55.2
              },
              {
                "cumpct_pct": 55.3,
                "cumpct_cust": 17.6,
                "metric_type": "Revenue",
                "x": 17.6,
                "y": 55.3
              },
              {
                "cumpct_pct": 55.4,
                "cumpct_cust": 17.7,
                "metric_type": "Revenue",
                "x": 17.7,
                "y": 55.4
              },
              {
                "cumpct_pct": 55.5,
                "cumpct_cust": 17.7,
                "metric_type": "Revenue",
                "x": 17.7,
                "y": 55.5
              },
              {
                "cumpct_pct": 55.6,
                "cumpct_cust": 17.8,
                "metric_type": "Revenue",
                "x": 17.8,
                "y": 55.6
              },
              {
                "cumpct_pct": 55.6,
                "cumpct_cust": 17.8,
                "metric_type": "Revenue",
                "x": 17.8,
                "y": 55.6
              },
              {
                "cumpct_pct": 55.6,
                "cumpct_cust": 17.8,
                "metric_type": "Revenue",
                "x": 17.8,
                "y": 55.6
              },
              {
                "cumpct_pct": 55.7,
                "cumpct_cust": 17.9,
                "metric_type": "Revenue",
                "x": 17.9,
                "y": 55.7
              },
              {
                "cumpct_pct": 55.8,
                "cumpct_cust": 18,
                "metric_type": "Revenue",
                "x": 18,
                "y": 55.8
              },
              {
                "cumpct_pct": 55.9,
                "cumpct_cust": 18,
                "metric_type": "Revenue",
                "x": 18,
                "y": 55.9
              },
              {
                "cumpct_pct": 56.2,
                "cumpct_cust": 18.2,
                "metric_type": "Revenue",
                "x": 18.2,
                "y": 56.2
              },
              {
                "cumpct_pct": 56.3,
                "cumpct_cust": 18.3,
                "metric_type": "Revenue",
                "x": 18.3,
                "y": 56.3
              },
              {
                "cumpct_pct": 56.4,
                "cumpct_cust": 18.3,
                "metric_type": "Revenue",
                "x": 18.3,
                "y": 56.4
              },
              {
                "cumpct_pct": 56.5,
                "cumpct_cust": 18.4,
                "metric_type": "Revenue",
                "x": 18.4,
                "y": 56.5
              },
              {
                "cumpct_pct": 56.6,
                "cumpct_cust": 18.4,
                "metric_type": "Revenue",
                "x": 18.4,
                "y": 56.6
              },
              {
                "cumpct_pct": 56.6,
                "cumpct_cust": 18.4,
                "metric_type": "Revenue",
                "x": 18.4,
                "y": 56.6
              },
              {
                "cumpct_pct": 56.7,
                "cumpct_cust": 18.5,
                "metric_type": "Revenue",
                "x": 18.5,
                "y": 56.7
              },
              {
                "cumpct_pct": 56.9,
                "cumpct_cust": 18.7,
                "metric_type": "Revenue",
                "x": 18.7,
                "y": 56.9
              },
              {
                "cumpct_pct": 57.1,
                "cumpct_cust": 18.8,
                "metric_type": "Revenue",
                "x": 18.8,
                "y": 57.1
              },
              {
                "cumpct_pct": 57.1,
                "cumpct_cust": 18.8,
                "metric_type": "Revenue",
                "x": 18.8,
                "y": 57.1
              },
              {
                "cumpct_pct": 57.1,
                "cumpct_cust": 18.8,
                "metric_type": "Revenue",
                "x": 18.8,
                "y": 57.1
              },
              {
                "cumpct_pct": 57.5,
                "cumpct_cust": 19.1,
                "metric_type": "Revenue",
                "x": 19.1,
                "y": 57.5
              },
              {
                "cumpct_pct": 57.5,
                "cumpct_cust": 19.1,
                "metric_type": "Revenue",
                "x": 19.1,
                "y": 57.5
              },
              {
                "cumpct_pct": 57.9,
                "cumpct_cust": 19.3,
                "metric_type": "Revenue",
                "x": 19.3,
                "y": 57.9
              },
              {
                "cumpct_pct": 57.9,
                "cumpct_cust": 19.3,
                "metric_type": "Revenue",
                "x": 19.3,
                "y": 57.9
              },
              {
                "cumpct_pct": 58.1,
                "cumpct_cust": 19.5,
                "metric_type": "Revenue",
                "x": 19.5,
                "y": 58.1
              },
              {
                "cumpct_pct": 58.6,
                "cumpct_cust": 19.8,
                "metric_type": "Revenue",
                "x": 19.8,
                "y": 58.6
              },
              {
                "cumpct_pct": 58.7,
                "cumpct_cust": 19.9,
                "metric_type": "Revenue",
                "x": 19.9,
                "y": 58.7
              },
              {
                "cumpct_pct": 58.8,
                "cumpct_cust": 19.9,
                "metric_type": "Revenue",
                "x": 19.9,
                "y": 58.8
              },
              {
                "cumpct_pct": 59,
                "cumpct_cust": 20.1,
                "metric_type": "Revenue",
                "x": 20.1,
                "y": 59
              },
              {
                "cumpct_pct": 59.2,
                "cumpct_cust": 20.3,
                "metric_type": "Revenue",
                "x": 20.3,
                "y": 59.2
              },
              {
                "cumpct_pct": 59.4,
                "cumpct_cust": 20.4,
                "metric_type": "Revenue",
                "x": 20.4,
                "y": 59.4
              },
              {
                "cumpct_pct": 59.8,
                "cumpct_cust": 20.7,
                "metric_type": "Revenue",
                "x": 20.7,
                "y": 59.8
              },
              {
                "cumpct_pct": 60,
                "cumpct_cust": 20.8,
                "metric_type": "Revenue",
                "x": 20.8,
                "y": 60
              },
              {
                "cumpct_pct": 60.4,
                "cumpct_cust": 21.1,
                "metric_type": "Revenue",
                "x": 21.1,
                "y": 60.4
              },
              {
                "cumpct_pct": 60.6,
                "cumpct_cust": 21.2,
                "metric_type": "Revenue",
                "x": 21.2,
                "y": 60.6
              },
              {
                "cumpct_pct": 60.6,
                "cumpct_cust": 21.2,
                "metric_type": "Revenue",
                "x": 21.2,
                "y": 60.6
              },
              {
                "cumpct_pct": 60.7,
                "cumpct_cust": 21.3,
                "metric_type": "Revenue",
                "x": 21.3,
                "y": 60.7
              },
              {
                "cumpct_pct": 60.9,
                "cumpct_cust": 21.5,
                "metric_type": "Revenue",
                "x": 21.5,
                "y": 60.9
              },
              {
                "cumpct_pct": 61.1,
                "cumpct_cust": 21.6,
                "metric_type": "Revenue",
                "x": 21.6,
                "y": 61.1
              },
              {
                "cumpct_pct": 61.4,
                "cumpct_cust": 21.8,
                "metric_type": "Revenue",
                "x": 21.8,
                "y": 61.4
              },
              {
                "cumpct_pct": 61.8,
                "cumpct_cust": 22.1,
                "metric_type": "Revenue",
                "x": 22.1,
                "y": 61.8
              },
              {
                "cumpct_pct": 61.8,
                "cumpct_cust": 22.2,
                "metric_type": "Revenue",
                "x": 22.2,
                "y": 61.8
              },
              {
                "cumpct_pct": 61.8,
                "cumpct_cust": 22.2,
                "metric_type": "Revenue",
                "x": 22.2,
                "y": 61.8
              },
              {
                "cumpct_pct": 62,
                "cumpct_cust": 22.3,
                "metric_type": "Revenue",
                "x": 22.3,
                "y": 62
              },
              {
                "cumpct_pct": 62.2,
                "cumpct_cust": 22.4,
                "metric_type": "Revenue",
                "x": 22.4,
                "y": 62.2
              },
              {
                "cumpct_pct": 62.2,
                "cumpct_cust": 22.5,
                "metric_type": "Revenue",
                "x": 22.5,
                "y": 62.2
              },
              {
                "cumpct_pct": 62.2,
                "cumpct_cust": 22.5,
                "metric_type": "Revenue",
                "x": 22.5,
                "y": 62.2
              },
              {
                "cumpct_pct": 62.3,
                "cumpct_cust": 22.5,
                "metric_type": "Revenue",
                "x": 22.5,
                "y": 62.3
              },
              {
                "cumpct_pct": 62.4,
                "cumpct_cust": 22.6,
                "metric_type": "Revenue",
                "x": 22.6,
                "y": 62.4
              },
              {
                "cumpct_pct": 62.5,
                "cumpct_cust": 22.7,
                "metric_type": "Revenue",
                "x": 22.7,
                "y": 62.5
              },
              {
                "cumpct_pct": 62.5,
                "cumpct_cust": 22.7,
                "metric_type": "Revenue",
                "x": 22.7,
                "y": 62.5
              },
              {
                "cumpct_pct": 62.6,
                "cumpct_cust": 22.8,
                "metric_type": "Revenue",
                "x": 22.8,
                "y": 62.6
              },
              {
                "cumpct_pct": 62.8,
                "cumpct_cust": 22.9,
                "metric_type": "Revenue",
                "x": 22.9,
                "y": 62.8
              },
              {
                "cumpct_pct": 62.8,
                "cumpct_cust": 22.9,
                "metric_type": "Revenue",
                "x": 22.9,
                "y": 62.8
              },
              {
                "cumpct_pct": 62.8,
                "cumpct_cust": 22.9,
                "metric_type": "Revenue",
                "x": 22.9,
                "y": 62.8
              },
              {
                "cumpct_pct": 62.8,
                "cumpct_cust": 22.9,
                "metric_type": "Revenue",
                "x": 22.9,
                "y": 62.8
              },
              {
                "cumpct_pct": 62.9,
                "cumpct_cust": 23,
                "metric_type": "Revenue",
                "x": 23,
                "y": 62.9
              },
              {
                "cumpct_pct": 62.9,
                "cumpct_cust": 23,
                "metric_type": "Revenue",
                "x": 23,
                "y": 62.9
              },
              {
                "cumpct_pct": 62.9,
                "cumpct_cust": 23,
                "metric_type": "Revenue",
                "x": 23,
                "y": 62.9
              },
              {
                "cumpct_pct": 63,
                "cumpct_cust": 23.1,
                "metric_type": "Revenue",
                "x": 23.1,
                "y": 63
              },
              {
                "cumpct_pct": 63.1,
                "cumpct_cust": 23.1,
                "metric_type": "Revenue",
                "x": 23.1,
                "y": 63.1
              },
              {
                "cumpct_pct": 63.3,
                "cumpct_cust": 23.3,
                "metric_type": "Revenue",
                "x": 23.3,
                "y": 63.3
              },
              {
                "cumpct_pct": 63.3,
                "cumpct_cust": 23.3,
                "metric_type": "Revenue",
                "x": 23.3,
                "y": 63.3
              },
              {
                "cumpct_pct": 63.4,
                "cumpct_cust": 23.4,
                "metric_type": "Revenue",
                "x": 23.4,
                "y": 63.4
              },
              {
                "cumpct_pct": 63.5,
                "cumpct_cust": 23.4,
                "metric_type": "Revenue",
                "x": 23.4,
                "y": 63.5
              },
              {
                "cumpct_pct": 63.9,
                "cumpct_cust": 23.8,
                "metric_type": "Revenue",
                "x": 23.8,
                "y": 63.9
              },
              {
                "cumpct_pct": 64.1,
                "cumpct_cust": 23.9,
                "metric_type": "Revenue",
                "x": 23.9,
                "y": 64.1
              },
              {
                "cumpct_pct": 64.1,
                "cumpct_cust": 24,
                "metric_type": "Revenue",
                "x": 24,
                "y": 64.1
              },
              {
                "cumpct_pct": 64.2,
                "cumpct_cust": 24,
                "metric_type": "Revenue",
                "x": 24,
                "y": 64.2
              },
              {
                "cumpct_pct": 64.2,
                "cumpct_cust": 24,
                "metric_type": "Revenue",
                "x": 24,
                "y": 64.2
              },
              {
                "cumpct_pct": 64.5,
                "cumpct_cust": 24.2,
                "metric_type": "Revenue",
                "x": 24.2,
                "y": 64.5
              },
              {
                "cumpct_pct": 64.7,
                "cumpct_cust": 24.4,
                "metric_type": "Revenue",
                "x": 24.4,
                "y": 64.7
              },
              {
                "cumpct_pct": 64.7,
                "cumpct_cust": 24.4,
                "metric_type": "Revenue",
                "x": 24.4,
                "y": 64.7
              },
              {
                "cumpct_pct": 65.1,
                "cumpct_cust": 24.7,
                "metric_type": "Revenue",
                "x": 24.7,
                "y": 65.1
              },
              {
                "cumpct_pct": 65.1,
                "cumpct_cust": 24.7,
                "metric_type": "Revenue",
                "x": 24.7,
                "y": 65.1
              },
              {
                "cumpct_pct": 65.2,
                "cumpct_cust": 24.8,
                "metric_type": "Revenue",
                "x": 24.8,
                "y": 65.2
              },
              {
                "cumpct_pct": 65.4,
                "cumpct_cust": 25,
                "metric_type": "Revenue",
                "x": 25,
                "y": 65.4
              },
              {
                "cumpct_pct": 65.5,
                "cumpct_cust": 25.1,
                "metric_type": "Revenue",
                "x": 25.1,
                "y": 65.5
              },
              {
                "cumpct_pct": 65.6,
                "cumpct_cust": 25.2,
                "metric_type": "Revenue",
                "x": 25.2,
                "y": 65.6
              },
              {
                "cumpct_pct": 65.7,
                "cumpct_cust": 25.3,
                "metric_type": "Revenue",
                "x": 25.3,
                "y": 65.7
              },
              {
                "cumpct_pct": 66.3,
                "cumpct_cust": 25.7,
                "metric_type": "Revenue",
                "x": 25.7,
                "y": 66.3
              },
              {
                "cumpct_pct": 66.5,
                "cumpct_cust": 26,
                "metric_type": "Revenue",
                "x": 26,
                "y": 66.5
              },
              {
                "cumpct_pct": 66.7,
                "cumpct_cust": 26.1,
                "metric_type": "Revenue",
                "x": 26.1,
                "y": 66.7
              },
              {
                "cumpct_pct": 66.8,
                "cumpct_cust": 26.2,
                "metric_type": "Revenue",
                "x": 26.2,
                "y": 66.8
              },
              {
                "cumpct_pct": 66.8,
                "cumpct_cust": 26.2,
                "metric_type": "Revenue",
                "x": 26.2,
                "y": 66.8
              },
              {
                "cumpct_pct": 67,
                "cumpct_cust": 26.3,
                "metric_type": "Revenue",
                "x": 26.3,
                "y": 67
              },
              {
                "cumpct_pct": 67,
                "cumpct_cust": 26.3,
                "metric_type": "Revenue",
                "x": 26.3,
                "y": 67
              },
              {
                "cumpct_pct": 67,
                "cumpct_cust": 26.4,
                "metric_type": "Revenue",
                "x": 26.4,
                "y": 67
              },
              {
                "cumpct_pct": 67,
                "cumpct_cust": 26.4,
                "metric_type": "Revenue",
                "x": 26.4,
                "y": 67
              },
              {
                "cumpct_pct": 67.2,
                "cumpct_cust": 26.5,
                "metric_type": "Revenue",
                "x": 26.5,
                "y": 67.2
              },
              {
                "cumpct_pct": 67.2,
                "cumpct_cust": 26.5,
                "metric_type": "Revenue",
                "x": 26.5,
                "y": 67.2
              },
              {
                "cumpct_pct": 67.3,
                "cumpct_cust": 26.6,
                "metric_type": "Revenue",
                "x": 26.6,
                "y": 67.3
              },
              {
                "cumpct_pct": 67.3,
                "cumpct_cust": 26.6,
                "metric_type": "Revenue",
                "x": 26.6,
                "y": 67.3
              },
              {
                "cumpct_pct": 67.4,
                "cumpct_cust": 26.7,
                "metric_type": "Revenue",
                "x": 26.7,
                "y": 67.4
              },
              {
                "cumpct_pct": 67.6,
                "cumpct_cust": 26.9,
                "metric_type": "Revenue",
                "x": 26.9,
                "y": 67.6
              },
              {
                "cumpct_pct": 67.8,
                "cumpct_cust": 27.1,
                "metric_type": "Revenue",
                "x": 27.1,
                "y": 67.8
              },
              {
                "cumpct_pct": 67.8,
                "cumpct_cust": 27.1,
                "metric_type": "Revenue",
                "x": 27.1,
                "y": 67.8
              },
              {
                "cumpct_pct": 68,
                "cumpct_cust": 27.2,
                "metric_type": "Revenue",
                "x": 27.2,
                "y": 68
              },
              {
                "cumpct_pct": 68.1,
                "cumpct_cust": 27.4,
                "metric_type": "Revenue",
                "x": 27.4,
                "y": 68.1
              },
              {
                "cumpct_pct": 68.4,
                "cumpct_cust": 27.6,
                "metric_type": "Revenue",
                "x": 27.6,
                "y": 68.4
              },
              {
                "cumpct_pct": 68.5,
                "cumpct_cust": 27.7,
                "metric_type": "Revenue",
                "x": 27.7,
                "y": 68.5
              },
              {
                "cumpct_pct": 68.7,
                "cumpct_cust": 27.9,
                "metric_type": "Revenue",
                "x": 27.9,
                "y": 68.7
              },
              {
                "cumpct_pct": 68.9,
                "cumpct_cust": 28.1,
                "metric_type": "Revenue",
                "x": 28.1,
                "y": 68.9
              },
              {
                "cumpct_pct": 68.9,
                "cumpct_cust": 28.1,
                "metric_type": "Revenue",
                "x": 28.1,
                "y": 68.9
              },
              {
                "cumpct_pct": 68.9,
                "cumpct_cust": 28.1,
                "metric_type": "Revenue",
                "x": 28.1,
                "y": 68.9
              },
              {
                "cumpct_pct": 69.1,
                "cumpct_cust": 28.3,
                "metric_type": "Revenue",
                "x": 28.3,
                "y": 69.1
              },
              {
                "cumpct_pct": 69.4,
                "cumpct_cust": 28.5,
                "metric_type": "Revenue",
                "x": 28.5,
                "y": 69.4
              },
              {
                "cumpct_pct": 69.7,
                "cumpct_cust": 28.8,
                "metric_type": "Revenue",
                "x": 28.8,
                "y": 69.7
              },
              {
                "cumpct_pct": 69.7,
                "cumpct_cust": 28.8,
                "metric_type": "Revenue",
                "x": 28.8,
                "y": 69.7
              },
              {
                "cumpct_pct": 69.7,
                "cumpct_cust": 28.8,
                "metric_type": "Revenue",
                "x": 28.8,
                "y": 69.7
              },
              {
                "cumpct_pct": 69.9,
                "cumpct_cust": 29,
                "metric_type": "Revenue",
                "x": 29,
                "y": 69.9
              },
              {
                "cumpct_pct": 70,
                "cumpct_cust": 29.1,
                "metric_type": "Revenue",
                "x": 29.1,
                "y": 70
              },
              {
                "cumpct_pct": 70,
                "cumpct_cust": 29.1,
                "metric_type": "Revenue",
                "x": 29.1,
                "y": 70
              },
              {
                "cumpct_pct": 70.4,
                "cumpct_cust": 29.5,
                "metric_type": "Revenue",
                "x": 29.5,
                "y": 70.4
              },
              {
                "cumpct_pct": 70.9,
                "cumpct_cust": 30,
                "metric_type": "Revenue",
                "x": 30,
                "y": 70.9
              },
              {
                "cumpct_pct": 70.9,
                "cumpct_cust": 30,
                "metric_type": "Revenue",
                "x": 30,
                "y": 70.9
              },
              {
                "cumpct_pct": 71,
                "cumpct_cust": 30,
                "metric_type": "Revenue",
                "x": 30,
                "y": 71
              },
              {
                "cumpct_pct": 71,
                "cumpct_cust": 30.1,
                "metric_type": "Revenue",
                "x": 30.1,
                "y": 71
              },
              {
                "cumpct_pct": 71,
                "cumpct_cust": 30.1,
                "metric_type": "Revenue",
                "x": 30.1,
                "y": 71
              },
              {
                "cumpct_pct": 71.2,
                "cumpct_cust": 30.2,
                "metric_type": "Revenue",
                "x": 30.2,
                "y": 71.2
              },
              {
                "cumpct_pct": 71.2,
                "cumpct_cust": 30.3,
                "metric_type": "Revenue",
                "x": 30.3,
                "y": 71.2
              },
              {
                "cumpct_pct": 71.2,
                "cumpct_cust": 30.3,
                "metric_type": "Revenue",
                "x": 30.3,
                "y": 71.2
              },
              {
                "cumpct_pct": 71.3,
                "cumpct_cust": 30.4,
                "metric_type": "Revenue",
                "x": 30.4,
                "y": 71.3
              },
              {
                "cumpct_pct": 71.4,
                "cumpct_cust": 30.5,
                "metric_type": "Revenue",
                "x": 30.5,
                "y": 71.4
              },
              {
                "cumpct_pct": 71.6,
                "cumpct_cust": 30.6,
                "metric_type": "Revenue",
                "x": 30.6,
                "y": 71.6
              },
              {
                "cumpct_pct": 71.7,
                "cumpct_cust": 30.8,
                "metric_type": "Revenue",
                "x": 30.8,
                "y": 71.7
              },
              {
                "cumpct_pct": 72,
                "cumpct_cust": 31.1,
                "metric_type": "Revenue",
                "x": 31.1,
                "y": 72
              },
              {
                "cumpct_pct": 72.1,
                "cumpct_cust": 31.2,
                "metric_type": "Revenue",
                "x": 31.2,
                "y": 72.1
              },
              {
                "cumpct_pct": 72.2,
                "cumpct_cust": 31.3,
                "metric_type": "Revenue",
                "x": 31.3,
                "y": 72.2
              },
              {
                "cumpct_pct": 72.3,
                "cumpct_cust": 31.3,
                "metric_type": "Revenue",
                "x": 31.3,
                "y": 72.3
              },
              {
                "cumpct_pct": 72.4,
                "cumpct_cust": 31.4,
                "metric_type": "Revenue",
                "x": 31.4,
                "y": 72.4
              },
              {
                "cumpct_pct": 72.4,
                "cumpct_cust": 31.4,
                "metric_type": "Revenue",
                "x": 31.4,
                "y": 72.4
              },
              {
                "cumpct_pct": 72.4,
                "cumpct_cust": 31.5,
                "metric_type": "Revenue",
                "x": 31.5,
                "y": 72.4
              },
              {
                "cumpct_pct": 72.4,
                "cumpct_cust": 31.5,
                "metric_type": "Revenue",
                "x": 31.5,
                "y": 72.4
              },
              {
                "cumpct_pct": 72.5,
                "cumpct_cust": 31.6,
                "metric_type": "Revenue",
                "x": 31.6,
                "y": 72.5
              },
              {
                "cumpct_pct": 72.9,
                "cumpct_cust": 32,
                "metric_type": "Revenue",
                "x": 32,
                "y": 72.9
              },
              {
                "cumpct_pct": 73,
                "cumpct_cust": 32.1,
                "metric_type": "Revenue",
                "x": 32.1,
                "y": 73
              },
              {
                "cumpct_pct": 73.2,
                "cumpct_cust": 32.3,
                "metric_type": "Revenue",
                "x": 32.3,
                "y": 73.2
              },
              {
                "cumpct_pct": 73.2,
                "cumpct_cust": 32.3,
                "metric_type": "Revenue",
                "x": 32.3,
                "y": 73.2
              },
              {
                "cumpct_pct": 73.3,
                "cumpct_cust": 32.4,
                "metric_type": "Revenue",
                "x": 32.4,
                "y": 73.3
              },
              {
                "cumpct_pct": 74,
                "cumpct_cust": 33.2,
                "metric_type": "Revenue",
                "x": 33.2,
                "y": 74
              },
              {
                "cumpct_pct": 74,
                "cumpct_cust": 33.2,
                "metric_type": "Revenue",
                "x": 33.2,
                "y": 74
              },
              {
                "cumpct_pct": 74.1,
                "cumpct_cust": 33.2,
                "metric_type": "Revenue",
                "x": 33.2,
                "y": 74.1
              },
              {
                "cumpct_pct": 74.2,
                "cumpct_cust": 33.4,
                "metric_type": "Revenue",
                "x": 33.4,
                "y": 74.2
              },
              {
                "cumpct_pct": 74.3,
                "cumpct_cust": 33.5,
                "metric_type": "Revenue",
                "x": 33.5,
                "y": 74.3
              },
              {
                "cumpct_pct": 74.3,
                "cumpct_cust": 33.5,
                "metric_type": "Revenue",
                "x": 33.5,
                "y": 74.3
              },
              {
                "cumpct_pct": 74.3,
                "cumpct_cust": 33.5,
                "metric_type": "Revenue",
                "x": 33.5,
                "y": 74.3
              },
              {
                "cumpct_pct": 74.3,
                "cumpct_cust": 33.5,
                "metric_type": "Revenue",
                "x": 33.5,
                "y": 74.3
              },
              {
                "cumpct_pct": 74.4,
                "cumpct_cust": 33.5,
                "metric_type": "Revenue",
                "x": 33.5,
                "y": 74.4
              },
              {
                "cumpct_pct": 74.4,
                "cumpct_cust": 33.6,
                "metric_type": "Revenue",
                "x": 33.6,
                "y": 74.4
              },
              {
                "cumpct_pct": 74.4,
                "cumpct_cust": 33.6,
                "metric_type": "Revenue",
                "x": 33.6,
                "y": 74.4
              },
              {
                "cumpct_pct": 74.5,
                "cumpct_cust": 33.7,
                "metric_type": "Revenue",
                "x": 33.7,
                "y": 74.5
              },
              {
                "cumpct_pct": 74.6,
                "cumpct_cust": 33.8,
                "metric_type": "Revenue",
                "x": 33.8,
                "y": 74.6
              },
              {
                "cumpct_pct": 74.6,
                "cumpct_cust": 33.8,
                "metric_type": "Revenue",
                "x": 33.8,
                "y": 74.6
              },
              {
                "cumpct_pct": 74.6,
                "cumpct_cust": 33.9,
                "metric_type": "Revenue",
                "x": 33.9,
                "y": 74.6
              },
              {
                "cumpct_pct": 74.7,
                "cumpct_cust": 33.9,
                "metric_type": "Revenue",
                "x": 33.9,
                "y": 74.7
              },
              {
                "cumpct_pct": 74.8,
                "cumpct_cust": 34.1,
                "metric_type": "Revenue",
                "x": 34.1,
                "y": 74.8
              },
              {
                "cumpct_pct": 74.9,
                "cumpct_cust": 34.1,
                "metric_type": "Revenue",
                "x": 34.1,
                "y": 74.9
              },
              {
                "cumpct_pct": 74.9,
                "cumpct_cust": 34.1,
                "metric_type": "Revenue",
                "x": 34.1,
                "y": 74.9
              },
              {
                "cumpct_pct": 74.9,
                "cumpct_cust": 34.1,
                "metric_type": "Revenue",
                "x": 34.1,
                "y": 74.9
              },
              {
                "cumpct_pct": 74.9,
                "cumpct_cust": 34.1,
                "metric_type": "Revenue",
                "x": 34.1,
                "y": 74.9
              },
              {
                "cumpct_pct": 75.1,
                "cumpct_cust": 34.3,
                "metric_type": "Revenue",
                "x": 34.3,
                "y": 75.1
              },
              {
                "cumpct_pct": 75.1,
                "cumpct_cust": 34.4,
                "metric_type": "Revenue",
                "x": 34.4,
                "y": 75.1
              },
              {
                "cumpct_pct": 75.2,
                "cumpct_cust": 34.4,
                "metric_type": "Revenue",
                "x": 34.4,
                "y": 75.2
              },
              {
                "cumpct_pct": 75.2,
                "cumpct_cust": 34.5,
                "metric_type": "Revenue",
                "x": 34.5,
                "y": 75.2
              },
              {
                "cumpct_pct": 75.3,
                "cumpct_cust": 34.6,
                "metric_type": "Revenue",
                "x": 34.6,
                "y": 75.3
              },
              {
                "cumpct_pct": 75.3,
                "cumpct_cust": 34.6,
                "metric_type": "Revenue",
                "x": 34.6,
                "y": 75.3
              },
              {
                "cumpct_pct": 75.4,
                "cumpct_cust": 34.7,
                "metric_type": "Revenue",
                "x": 34.7,
                "y": 75.4
              },
              {
                "cumpct_pct": 75.7,
                "cumpct_cust": 35,
                "metric_type": "Revenue",
                "x": 35,
                "y": 75.7
              },
              {
                "cumpct_pct": 76,
                "cumpct_cust": 35.4,
                "metric_type": "Revenue",
                "x": 35.4,
                "y": 76
              },
              {
                "cumpct_pct": 76,
                "cumpct_cust": 35.4,
                "metric_type": "Revenue",
                "x": 35.4,
                "y": 76
              },
              {
                "cumpct_pct": 76,
                "cumpct_cust": 35.4,
                "metric_type": "Revenue",
                "x": 35.4,
                "y": 76
              },
              {
                "cumpct_pct": 76,
                "cumpct_cust": 35.4,
                "metric_type": "Revenue",
                "x": 35.4,
                "y": 76
              },
              {
                "cumpct_pct": 76.1,
                "cumpct_cust": 35.5,
                "metric_type": "Revenue",
                "x": 35.5,
                "y": 76.1
              },
              {
                "cumpct_pct": 76.5,
                "cumpct_cust": 36,
                "metric_type": "Revenue",
                "x": 36,
                "y": 76.5
              },
              {
                "cumpct_pct": 76.5,
                "cumpct_cust": 36,
                "metric_type": "Revenue",
                "x": 36,
                "y": 76.5
              },
              {
                "cumpct_pct": 76.6,
                "cumpct_cust": 36.1,
                "metric_type": "Revenue",
                "x": 36.1,
                "y": 76.6
              },
              {
                "cumpct_pct": 76.6,
                "cumpct_cust": 36.1,
                "metric_type": "Revenue",
                "x": 36.1,
                "y": 76.6
              },
              {
                "cumpct_pct": 76.7,
                "cumpct_cust": 36.2,
                "metric_type": "Revenue",
                "x": 36.2,
                "y": 76.7
              },
              {
                "cumpct_pct": 76.7,
                "cumpct_cust": 36.2,
                "metric_type": "Revenue",
                "x": 36.2,
                "y": 76.7
              },
              {
                "cumpct_pct": 76.8,
                "cumpct_cust": 36.3,
                "metric_type": "Revenue",
                "x": 36.3,
                "y": 76.8
              },
              {
                "cumpct_pct": 76.8,
                "cumpct_cust": 36.3,
                "metric_type": "Revenue",
                "x": 36.3,
                "y": 76.8
              },
              {
                "cumpct_pct": 76.9,
                "cumpct_cust": 36.4,
                "metric_type": "Revenue",
                "x": 36.4,
                "y": 76.9
              },
              {
                "cumpct_pct": 76.9,
                "cumpct_cust": 36.5,
                "metric_type": "Revenue",
                "x": 36.5,
                "y": 76.9
              },
              {
                "cumpct_pct": 77,
                "cumpct_cust": 36.5,
                "metric_type": "Revenue",
                "x": 36.5,
                "y": 77
              },
              {
                "cumpct_pct": 77,
                "cumpct_cust": 36.6,
                "metric_type": "Revenue",
                "x": 36.6,
                "y": 77
              },
              {
                "cumpct_pct": 77.1,
                "cumpct_cust": 36.7,
                "metric_type": "Revenue",
                "x": 36.7,
                "y": 77.1
              },
              {
                "cumpct_pct": 77.1,
                "cumpct_cust": 36.7,
                "metric_type": "Revenue",
                "x": 36.7,
                "y": 77.1
              },
              {
                "cumpct_pct": 77.1,
                "cumpct_cust": 36.7,
                "metric_type": "Revenue",
                "x": 36.7,
                "y": 77.1
              },
              {
                "cumpct_pct": 77.2,
                "cumpct_cust": 36.9,
                "metric_type": "Revenue",
                "x": 36.9,
                "y": 77.2
              },
              {
                "cumpct_pct": 77.3,
                "cumpct_cust": 36.9,
                "metric_type": "Revenue",
                "x": 36.9,
                "y": 77.3
              },
              {
                "cumpct_pct": 77.4,
                "cumpct_cust": 37.1,
                "metric_type": "Revenue",
                "x": 37.1,
                "y": 77.4
              },
              {
                "cumpct_pct": 77.8,
                "cumpct_cust": 37.5,
                "metric_type": "Revenue",
                "x": 37.5,
                "y": 77.8
              },
              {
                "cumpct_pct": 78,
                "cumpct_cust": 37.7,
                "metric_type": "Revenue",
                "x": 37.7,
                "y": 78
              },
              {
                "cumpct_pct": 78,
                "cumpct_cust": 37.8,
                "metric_type": "Revenue",
                "x": 37.8,
                "y": 78
              },
              {
                "cumpct_pct": 78.1,
                "cumpct_cust": 37.9,
                "metric_type": "Revenue",
                "x": 37.9,
                "y": 78.1
              },
              {
                "cumpct_pct": 78.1,
                "cumpct_cust": 37.9,
                "metric_type": "Revenue",
                "x": 37.9,
                "y": 78.1
              },
              {
                "cumpct_pct": 78.2,
                "cumpct_cust": 38,
                "metric_type": "Revenue",
                "x": 38,
                "y": 78.2
              },
              {
                "cumpct_pct": 78.3,
                "cumpct_cust": 38.2,
                "metric_type": "Revenue",
                "x": 38.2,
                "y": 78.3
              },
              {
                "cumpct_pct": 78.3,
                "cumpct_cust": 38.2,
                "metric_type": "Revenue",
                "x": 38.2,
                "y": 78.3
              },
              {
                "cumpct_pct": 78.4,
                "cumpct_cust": 38.3,
                "metric_type": "Revenue",
                "x": 38.3,
                "y": 78.4
              },
              {
                "cumpct_pct": 78.4,
                "cumpct_cust": 38.3,
                "metric_type": "Revenue",
                "x": 38.3,
                "y": 78.4
              },
              {
                "cumpct_pct": 78.6,
                "cumpct_cust": 38.5,
                "metric_type": "Revenue",
                "x": 38.5,
                "y": 78.6
              },
              {
                "cumpct_pct": 78.7,
                "cumpct_cust": 38.6,
                "metric_type": "Revenue",
                "x": 38.6,
                "y": 78.7
              },
              {
                "cumpct_pct": 78.7,
                "cumpct_cust": 38.7,
                "metric_type": "Revenue",
                "x": 38.7,
                "y": 78.7
              },
              {
                "cumpct_pct": 79,
                "cumpct_cust": 39.1,
                "metric_type": "Revenue",
                "x": 39.1,
                "y": 79
              },
              {
                "cumpct_pct": 79.1,
                "cumpct_cust": 39.2,
                "metric_type": "Revenue",
                "x": 39.2,
                "y": 79.1
              },
              {
                "cumpct_pct": 79.3,
                "cumpct_cust": 39.5,
                "metric_type": "Revenue",
                "x": 39.5,
                "y": 79.3
              },
              {
                "cumpct_pct": 79.3,
                "cumpct_cust": 39.5,
                "metric_type": "Revenue",
                "x": 39.5,
                "y": 79.3
              },
              {
                "cumpct_pct": 79.4,
                "cumpct_cust": 39.6,
                "metric_type": "Revenue",
                "x": 39.6,
                "y": 79.4
              },
              {
                "cumpct_pct": 79.5,
                "cumpct_cust": 39.7,
                "metric_type": "Revenue",
                "x": 39.7,
                "y": 79.5
              },
              {
                "cumpct_pct": 79.8,
                "cumpct_cust": 40.1,
                "metric_type": "Revenue",
                "x": 40.1,
                "y": 79.8
              },
              {
                "cumpct_pct": 80.1,
                "cumpct_cust": 40.5,
                "metric_type": "Revenue",
                "x": 40.5,
                "y": 80.1
              },
              {
                "cumpct_pct": 80.1,
                "cumpct_cust": 40.6,
                "metric_type": "Revenue",
                "x": 40.6,
                "y": 80.1
              },
              {
                "cumpct_pct": 80.2,
                "cumpct_cust": 40.6,
                "metric_type": "Revenue",
                "x": 40.6,
                "y": 80.2
              },
              {
                "cumpct_pct": 80.2,
                "cumpct_cust": 40.6,
                "metric_type": "Revenue",
                "x": 40.6,
                "y": 80.2
              },
              {
                "cumpct_pct": 80.6,
                "cumpct_cust": 41.2,
                "metric_type": "Revenue",
                "x": 41.2,
                "y": 80.6
              },
              {
                "cumpct_pct": 80.8,
                "cumpct_cust": 41.4,
                "metric_type": "Revenue",
                "x": 41.4,
                "y": 80.8
              },
              {
                "cumpct_pct": 80.8,
                "cumpct_cust": 41.5,
                "metric_type": "Revenue",
                "x": 41.5,
                "y": 80.8
              },
              {
                "cumpct_pct": 80.9,
                "cumpct_cust": 41.7,
                "metric_type": "Revenue",
                "x": 41.7,
                "y": 80.9
              },
              {
                "cumpct_pct": 81,
                "cumpct_cust": 41.8,
                "metric_type": "Revenue",
                "x": 41.8,
                "y": 81
              },
              {
                "cumpct_pct": 81.1,
                "cumpct_cust": 41.9,
                "metric_type": "Revenue",
                "x": 41.9,
                "y": 81.1
              },
              {
                "cumpct_pct": 81.1,
                "cumpct_cust": 41.9,
                "metric_type": "Revenue",
                "x": 41.9,
                "y": 81.1
              },
              {
                "cumpct_pct": 81.2,
                "cumpct_cust": 42,
                "metric_type": "Revenue",
                "x": 42,
                "y": 81.2
              },
              {
                "cumpct_pct": 81.2,
                "cumpct_cust": 42,
                "metric_type": "Revenue",
                "x": 42,
                "y": 81.2
              },
              {
                "cumpct_pct": 81.2,
                "cumpct_cust": 42,
                "metric_type": "Revenue",
                "x": 42,
                "y": 81.2
              },
              {
                "cumpct_pct": 81.2,
                "cumpct_cust": 42.1,
                "metric_type": "Revenue",
                "x": 42.1,
                "y": 81.2
              },
              {
                "cumpct_pct": 81.4,
                "cumpct_cust": 42.3,
                "metric_type": "Revenue",
                "x": 42.3,
                "y": 81.4
              },
              {
                "cumpct_pct": 81.4,
                "cumpct_cust": 42.4,
                "metric_type": "Revenue",
                "x": 42.4,
                "y": 81.4
              },
              {
                "cumpct_pct": 81.5,
                "cumpct_cust": 42.4,
                "metric_type": "Revenue",
                "x": 42.4,
                "y": 81.5
              },
              {
                "cumpct_pct": 81.5,
                "cumpct_cust": 42.4,
                "metric_type": "Revenue",
                "x": 42.4,
                "y": 81.5
              },
              {
                "cumpct_pct": 81.6,
                "cumpct_cust": 42.6,
                "metric_type": "Revenue",
                "x": 42.6,
                "y": 81.6
              },
              {
                "cumpct_pct": 81.6,
                "cumpct_cust": 42.6,
                "metric_type": "Revenue",
                "x": 42.6,
                "y": 81.6
              },
              {
                "cumpct_pct": 81.7,
                "cumpct_cust": 42.8,
                "metric_type": "Revenue",
                "x": 42.8,
                "y": 81.7
              },
              {
                "cumpct_pct": 81.7,
                "cumpct_cust": 42.8,
                "metric_type": "Revenue",
                "x": 42.8,
                "y": 81.7
              },
              {
                "cumpct_pct": 81.8,
                "cumpct_cust": 42.9,
                "metric_type": "Revenue",
                "x": 42.9,
                "y": 81.8
              },
              {
                "cumpct_pct": 81.8,
                "cumpct_cust": 42.9,
                "metric_type": "Revenue",
                "x": 42.9,
                "y": 81.8
              },
              {
                "cumpct_pct": 81.8,
                "cumpct_cust": 42.9,
                "metric_type": "Revenue",
                "x": 42.9,
                "y": 81.8
              },
              {
                "cumpct_pct": 81.9,
                "cumpct_cust": 43,
                "metric_type": "Revenue",
                "x": 43,
                "y": 81.9
              },
              {
                "cumpct_pct": 81.9,
                "cumpct_cust": 43,
                "metric_type": "Revenue",
                "x": 43,
                "y": 81.9
              },
              {
                "cumpct_pct": 82.1,
                "cumpct_cust": 43.3,
                "metric_type": "Revenue",
                "x": 43.3,
                "y": 82.1
              },
              {
                "cumpct_pct": 82.1,
                "cumpct_cust": 43.4,
                "metric_type": "Revenue",
                "x": 43.4,
                "y": 82.1
              },
              {
                "cumpct_pct": 82.2,
                "cumpct_cust": 43.5,
                "metric_type": "Revenue",
                "x": 43.5,
                "y": 82.2
              },
              {
                "cumpct_pct": 82.2,
                "cumpct_cust": 43.5,
                "metric_type": "Revenue",
                "x": 43.5,
                "y": 82.2
              },
              {
                "cumpct_pct": 82.2,
                "cumpct_cust": 43.5,
                "metric_type": "Revenue",
                "x": 43.5,
                "y": 82.2
              },
              {
                "cumpct_pct": 82.2,
                "cumpct_cust": 43.5,
                "metric_type": "Revenue",
                "x": 43.5,
                "y": 82.2
              },
              {
                "cumpct_pct": 82.3,
                "cumpct_cust": 43.6,
                "metric_type": "Revenue",
                "x": 43.6,
                "y": 82.3
              },
              {
                "cumpct_pct": 82.4,
                "cumpct_cust": 43.7,
                "metric_type": "Revenue",
                "x": 43.7,
                "y": 82.4
              },
              {
                "cumpct_pct": 82.7,
                "cumpct_cust": 44.2,
                "metric_type": "Revenue",
                "x": 44.2,
                "y": 82.7
              },
              {
                "cumpct_pct": 82.9,
                "cumpct_cust": 44.4,
                "metric_type": "Revenue",
                "x": 44.4,
                "y": 82.9
              },
              {
                "cumpct_pct": 82.9,
                "cumpct_cust": 44.6,
                "metric_type": "Revenue",
                "x": 44.6,
                "y": 82.9
              },
              {
                "cumpct_pct": 83.1,
                "cumpct_cust": 44.8,
                "metric_type": "Revenue",
                "x": 44.8,
                "y": 83.1
              },
              {
                "cumpct_pct": 83.1,
                "cumpct_cust": 44.8,
                "metric_type": "Revenue",
                "x": 44.8,
                "y": 83.1
              },
              {
                "cumpct_pct": 83.1,
                "cumpct_cust": 44.9,
                "metric_type": "Revenue",
                "x": 44.9,
                "y": 83.1
              },
              {
                "cumpct_pct": 83.2,
                "cumpct_cust": 44.9,
                "metric_type": "Revenue",
                "x": 44.9,
                "y": 83.2
              },
              {
                "cumpct_pct": 83.2,
                "cumpct_cust": 44.9,
                "metric_type": "Revenue",
                "x": 44.9,
                "y": 83.2
              },
              {
                "cumpct_pct": 83.3,
                "cumpct_cust": 45.1,
                "metric_type": "Revenue",
                "x": 45.1,
                "y": 83.3
              },
              {
                "cumpct_pct": 83.4,
                "cumpct_cust": 45.2,
                "metric_type": "Revenue",
                "x": 45.2,
                "y": 83.4
              },
              {
                "cumpct_pct": 83.4,
                "cumpct_cust": 45.3,
                "metric_type": "Revenue",
                "x": 45.3,
                "y": 83.4
              },
              {
                "cumpct_pct": 83.4,
                "cumpct_cust": 45.3,
                "metric_type": "Revenue",
                "x": 45.3,
                "y": 83.4
              },
              {
                "cumpct_pct": 83.5,
                "cumpct_cust": 45.3,
                "metric_type": "Revenue",
                "x": 45.3,
                "y": 83.5
              },
              {
                "cumpct_pct": 83.6,
                "cumpct_cust": 45.5,
                "metric_type": "Revenue",
                "x": 45.5,
                "y": 83.6
              },
              {
                "cumpct_pct": 83.6,
                "cumpct_cust": 45.6,
                "metric_type": "Revenue",
                "x": 45.6,
                "y": 83.6
              },
              {
                "cumpct_pct": 83.9,
                "cumpct_cust": 46.1,
                "metric_type": "Revenue",
                "x": 46.1,
                "y": 83.9
              },
              {
                "cumpct_pct": 83.9,
                "cumpct_cust": 46.1,
                "metric_type": "Revenue",
                "x": 46.1,
                "y": 83.9
              },
              {
                "cumpct_pct": 84,
                "cumpct_cust": 46.2,
                "metric_type": "Revenue",
                "x": 46.2,
                "y": 84
              },
              {
                "cumpct_pct": 84,
                "cumpct_cust": 46.3,
                "metric_type": "Revenue",
                "x": 46.3,
                "y": 84
              },
              {
                "cumpct_pct": 84,
                "cumpct_cust": 46.3,
                "metric_type": "Revenue",
                "x": 46.3,
                "y": 84
              },
              {
                "cumpct_pct": 84,
                "cumpct_cust": 46.3,
                "metric_type": "Revenue",
                "x": 46.3,
                "y": 84
              },
              {
                "cumpct_pct": 84.1,
                "cumpct_cust": 46.4,
                "metric_type": "Revenue",
                "x": 46.4,
                "y": 84.1
              },
              {
                "cumpct_pct": 84.2,
                "cumpct_cust": 46.5,
                "metric_type": "Revenue",
                "x": 46.5,
                "y": 84.2
              },
              {
                "cumpct_pct": 84.2,
                "cumpct_cust": 46.5,
                "metric_type": "Revenue",
                "x": 46.5,
                "y": 84.2
              },
              {
                "cumpct_pct": 84.2,
                "cumpct_cust": 46.6,
                "metric_type": "Revenue",
                "x": 46.6,
                "y": 84.2
              },
              {
                "cumpct_pct": 84.2,
                "cumpct_cust": 46.6,
                "metric_type": "Revenue",
                "x": 46.6,
                "y": 84.2
              },
              {
                "cumpct_pct": 84.3,
                "cumpct_cust": 46.6,
                "metric_type": "Revenue",
                "x": 46.6,
                "y": 84.3
              },
              {
                "cumpct_pct": 84.4,
                "cumpct_cust": 46.8,
                "metric_type": "Revenue",
                "x": 46.8,
                "y": 84.4
              },
              {
                "cumpct_pct": 84.4,
                "cumpct_cust": 46.9,
                "metric_type": "Revenue",
                "x": 46.9,
                "y": 84.4
              },
              {
                "cumpct_pct": 84.5,
                "cumpct_cust": 46.9,
                "metric_type": "Revenue",
                "x": 46.9,
                "y": 84.5
              },
              {
                "cumpct_pct": 84.6,
                "cumpct_cust": 47.2,
                "metric_type": "Revenue",
                "x": 47.2,
                "y": 84.6
              },
              {
                "cumpct_pct": 84.7,
                "cumpct_cust": 47.3,
                "metric_type": "Revenue",
                "x": 47.3,
                "y": 84.7
              },
              {
                "cumpct_pct": 84.8,
                "cumpct_cust": 47.4,
                "metric_type": "Revenue",
                "x": 47.4,
                "y": 84.8
              },
              {
                "cumpct_pct": 84.8,
                "cumpct_cust": 47.5,
                "metric_type": "Revenue",
                "x": 47.5,
                "y": 84.8
              },
              {
                "cumpct_pct": 84.8,
                "cumpct_cust": 47.5,
                "metric_type": "Revenue",
                "x": 47.5,
                "y": 84.8
              },
              {
                "cumpct_pct": 84.8,
                "cumpct_cust": 47.5,
                "metric_type": "Revenue",
                "x": 47.5,
                "y": 84.8
              },
              {
                "cumpct_pct": 84.8,
                "cumpct_cust": 47.6,
                "metric_type": "Revenue",
                "x": 47.6,
                "y": 84.8
              },
              {
                "cumpct_pct": 85,
                "cumpct_cust": 47.8,
                "metric_type": "Revenue",
                "x": 47.8,
                "y": 85
              },
              {
                "cumpct_pct": 85,
                "cumpct_cust": 47.8,
                "metric_type": "Revenue",
                "x": 47.8,
                "y": 85
              },
              {
                "cumpct_pct": 85,
                "cumpct_cust": 47.9,
                "metric_type": "Revenue",
                "x": 47.9,
                "y": 85
              },
              {
                "cumpct_pct": 85.1,
                "cumpct_cust": 47.9,
                "metric_type": "Revenue",
                "x": 47.9,
                "y": 85.1
              },
              {
                "cumpct_pct": 85.2,
                "cumpct_cust": 48.1,
                "metric_type": "Revenue",
                "x": 48.1,
                "y": 85.2
              },
              {
                "cumpct_pct": 85.2,
                "cumpct_cust": 48.2,
                "metric_type": "Revenue",
                "x": 48.2,
                "y": 85.2
              },
              {
                "cumpct_pct": 85.3,
                "cumpct_cust": 48.2,
                "metric_type": "Revenue",
                "x": 48.2,
                "y": 85.3
              },
              {
                "cumpct_pct": 85.3,
                "cumpct_cust": 48.3,
                "metric_type": "Revenue",
                "x": 48.3,
                "y": 85.3
              },
              {
                "cumpct_pct": 85.3,
                "cumpct_cust": 48.3,
                "metric_type": "Revenue",
                "x": 48.3,
                "y": 85.3
              },
              {
                "cumpct_pct": 85.4,
                "cumpct_cust": 48.5,
                "metric_type": "Revenue",
                "x": 48.5,
                "y": 85.4
              },
              {
                "cumpct_pct": 85.4,
                "cumpct_cust": 48.6,
                "metric_type": "Revenue",
                "x": 48.6,
                "y": 85.4
              },
              {
                "cumpct_pct": 85.5,
                "cumpct_cust": 48.6,
                "metric_type": "Revenue",
                "x": 48.6,
                "y": 85.5
              },
              {
                "cumpct_pct": 85.5,
                "cumpct_cust": 48.7,
                "metric_type": "Revenue",
                "x": 48.7,
                "y": 85.5
              },
              {
                "cumpct_pct": 85.6,
                "cumpct_cust": 48.7,
                "metric_type": "Revenue",
                "x": 48.7,
                "y": 85.6
              },
              {
                "cumpct_pct": 85.6,
                "cumpct_cust": 48.8,
                "metric_type": "Revenue",
                "x": 48.8,
                "y": 85.6
              },
              {
                "cumpct_pct": 85.6,
                "cumpct_cust": 48.9,
                "metric_type": "Revenue",
                "x": 48.9,
                "y": 85.6
              },
              {
                "cumpct_pct": 85.7,
                "cumpct_cust": 49,
                "metric_type": "Revenue",
                "x": 49,
                "y": 85.7
              },
              {
                "cumpct_pct": 85.7,
                "cumpct_cust": 49.1,
                "metric_type": "Revenue",
                "x": 49.1,
                "y": 85.7
              },
              {
                "cumpct_pct": 85.8,
                "cumpct_cust": 49.1,
                "metric_type": "Revenue",
                "x": 49.1,
                "y": 85.8
              },
              {
                "cumpct_pct": 85.8,
                "cumpct_cust": 49.1,
                "metric_type": "Revenue",
                "x": 49.1,
                "y": 85.8
              },
              {
                "cumpct_pct": 85.8,
                "cumpct_cust": 49.2,
                "metric_type": "Revenue",
                "x": 49.2,
                "y": 85.8
              },
              {
                "cumpct_pct": 85.9,
                "cumpct_cust": 49.3,
                "metric_type": "Revenue",
                "x": 49.3,
                "y": 85.9
              },
              {
                "cumpct_pct": 86,
                "cumpct_cust": 49.4,
                "metric_type": "Revenue",
                "x": 49.4,
                "y": 86
              },
              {
                "cumpct_pct": 86,
                "cumpct_cust": 49.5,
                "metric_type": "Revenue",
                "x": 49.5,
                "y": 86
              },
              {
                "cumpct_pct": 86.1,
                "cumpct_cust": 49.7,
                "metric_type": "Revenue",
                "x": 49.7,
                "y": 86.1
              },
              {
                "cumpct_pct": 86.2,
                "cumpct_cust": 49.8,
                "metric_type": "Revenue",
                "x": 49.8,
                "y": 86.2
              },
              {
                "cumpct_pct": 86.2,
                "cumpct_cust": 49.9,
                "metric_type": "Revenue",
                "x": 49.9,
                "y": 86.2
              },
              {
                "cumpct_pct": 86.3,
                "cumpct_cust": 50.1,
                "metric_type": "Revenue",
                "x": 50.1,
                "y": 86.3
              },
              {
                "cumpct_pct": 86.4,
                "cumpct_cust": 50.2,
                "metric_type": "Revenue",
                "x": 50.2,
                "y": 86.4
              },
              {
                "cumpct_pct": 86.4,
                "cumpct_cust": 50.2,
                "metric_type": "Revenue",
                "x": 50.2,
                "y": 86.4
              },
              {
                "cumpct_pct": 86.4,
                "cumpct_cust": 50.3,
                "metric_type": "Revenue",
                "x": 50.3,
                "y": 86.4
              },
              {
                "cumpct_pct": 86.6,
                "cumpct_cust": 50.6,
                "metric_type": "Revenue",
                "x": 50.6,
                "y": 86.6
              },
              {
                "cumpct_pct": 86.6,
                "cumpct_cust": 50.7,
                "metric_type": "Revenue",
                "x": 50.7,
                "y": 86.6
              },
              {
                "cumpct_pct": 86.7,
                "cumpct_cust": 50.7,
                "metric_type": "Revenue",
                "x": 50.7,
                "y": 86.7
              },
              {
                "cumpct_pct": 86.7,
                "cumpct_cust": 50.8,
                "metric_type": "Revenue",
                "x": 50.8,
                "y": 86.7
              },
              {
                "cumpct_pct": 86.7,
                "cumpct_cust": 50.8,
                "metric_type": "Revenue",
                "x": 50.8,
                "y": 86.7
              },
              {
                "cumpct_pct": 86.7,
                "cumpct_cust": 50.9,
                "metric_type": "Revenue",
                "x": 50.9,
                "y": 86.7
              },
              {
                "cumpct_pct": 86.8,
                "cumpct_cust": 50.9,
                "metric_type": "Revenue",
                "x": 50.9,
                "y": 86.8
              },
              {
                "cumpct_pct": 86.9,
                "cumpct_cust": 51.1,
                "metric_type": "Revenue",
                "x": 51.1,
                "y": 86.9
              },
              {
                "cumpct_pct": 86.9,
                "cumpct_cust": 51.2,
                "metric_type": "Revenue",
                "x": 51.2,
                "y": 86.9
              },
              {
                "cumpct_pct": 86.9,
                "cumpct_cust": 51.2,
                "metric_type": "Revenue",
                "x": 51.2,
                "y": 86.9
              },
              {
                "cumpct_pct": 87,
                "cumpct_cust": 51.3,
                "metric_type": "Revenue",
                "x": 51.3,
                "y": 87
              },
              {
                "cumpct_pct": 87.3,
                "cumpct_cust": 51.8,
                "metric_type": "Revenue",
                "x": 51.8,
                "y": 87.3
              },
              {
                "cumpct_pct": 87.3,
                "cumpct_cust": 51.8,
                "metric_type": "Revenue",
                "x": 51.8,
                "y": 87.3
              },
              {
                "cumpct_pct": 87.3,
                "cumpct_cust": 51.9,
                "metric_type": "Revenue",
                "x": 51.9,
                "y": 87.3
              },
              {
                "cumpct_pct": 87.4,
                "cumpct_cust": 52.1,
                "metric_type": "Revenue",
                "x": 52.1,
                "y": 87.4
              },
              {
                "cumpct_pct": 87.4,
                "cumpct_cust": 52.1,
                "metric_type": "Revenue",
                "x": 52.1,
                "y": 87.4
              },
              {
                "cumpct_pct": 87.5,
                "cumpct_cust": 52.3,
                "metric_type": "Revenue",
                "x": 52.3,
                "y": 87.5
              },
              {
                "cumpct_pct": 87.5,
                "cumpct_cust": 52.4,
                "metric_type": "Revenue",
                "x": 52.4,
                "y": 87.5
              },
              {
                "cumpct_pct": 87.6,
                "cumpct_cust": 52.5,
                "metric_type": "Revenue",
                "x": 52.5,
                "y": 87.6
              },
              {
                "cumpct_pct": 87.6,
                "cumpct_cust": 52.5,
                "metric_type": "Revenue",
                "x": 52.5,
                "y": 87.6
              },
              {
                "cumpct_pct": 87.8,
                "cumpct_cust": 52.8,
                "metric_type": "Revenue",
                "x": 52.8,
                "y": 87.8
              },
              {
                "cumpct_pct": 87.8,
                "cumpct_cust": 52.8,
                "metric_type": "Revenue",
                "x": 52.8,
                "y": 87.8
              },
              {
                "cumpct_pct": 87.8,
                "cumpct_cust": 52.9,
                "metric_type": "Revenue",
                "x": 52.9,
                "y": 87.8
              },
              {
                "cumpct_pct": 87.8,
                "cumpct_cust": 52.9,
                "metric_type": "Revenue",
                "x": 52.9,
                "y": 87.8
              },
              {
                "cumpct_pct": 87.8,
                "cumpct_cust": 52.9,
                "metric_type": "Revenue",
                "x": 52.9,
                "y": 87.8
              },
              {
                "cumpct_pct": 87.9,
                "cumpct_cust": 53,
                "metric_type": "Revenue",
                "x": 53,
                "y": 87.9
              },
              {
                "cumpct_pct": 87.9,
                "cumpct_cust": 53,
                "metric_type": "Revenue",
                "x": 53,
                "y": 87.9
              },
              {
                "cumpct_pct": 87.9,
                "cumpct_cust": 53.1,
                "metric_type": "Revenue",
                "x": 53.1,
                "y": 87.9
              },
              {
                "cumpct_pct": 88,
                "cumpct_cust": 53.2,
                "metric_type": "Revenue",
                "x": 53.2,
                "y": 88
              },
              {
                "cumpct_pct": 88,
                "cumpct_cust": 53.2,
                "metric_type": "Revenue",
                "x": 53.2,
                "y": 88
              },
              {
                "cumpct_pct": 88.1,
                "cumpct_cust": 53.3,
                "metric_type": "Revenue",
                "x": 53.3,
                "y": 88.1
              },
              {
                "cumpct_pct": 88.1,
                "cumpct_cust": 53.4,
                "metric_type": "Revenue",
                "x": 53.4,
                "y": 88.1
              },
              {
                "cumpct_pct": 88.2,
                "cumpct_cust": 53.7,
                "metric_type": "Revenue",
                "x": 53.7,
                "y": 88.2
              },
              {
                "cumpct_pct": 88.2,
                "cumpct_cust": 53.7,
                "metric_type": "Revenue",
                "x": 53.7,
                "y": 88.2
              },
              {
                "cumpct_pct": 88.2,
                "cumpct_cust": 53.7,
                "metric_type": "Revenue",
                "x": 53.7,
                "y": 88.2
              },
              {
                "cumpct_pct": 88.3,
                "cumpct_cust": 53.8,
                "metric_type": "Revenue",
                "x": 53.8,
                "y": 88.3
              },
              {
                "cumpct_pct": 88.3,
                "cumpct_cust": 53.9,
                "metric_type": "Revenue",
                "x": 53.9,
                "y": 88.3
              },
              {
                "cumpct_pct": 88.3,
                "cumpct_cust": 53.9,
                "metric_type": "Revenue",
                "x": 53.9,
                "y": 88.3
              },
              {
                "cumpct_pct": 88.4,
                "cumpct_cust": 54,
                "metric_type": "Revenue",
                "x": 54,
                "y": 88.4
              },
              {
                "cumpct_pct": 88.4,
                "cumpct_cust": 54.1,
                "metric_type": "Revenue",
                "x": 54.1,
                "y": 88.4
              },
              {
                "cumpct_pct": 88.5,
                "cumpct_cust": 54.2,
                "metric_type": "Revenue",
                "x": 54.2,
                "y": 88.5
              },
              {
                "cumpct_pct": 88.5,
                "cumpct_cust": 54.2,
                "metric_type": "Revenue",
                "x": 54.2,
                "y": 88.5
              },
              {
                "cumpct_pct": 88.6,
                "cumpct_cust": 54.4,
                "metric_type": "Revenue",
                "x": 54.4,
                "y": 88.6
              },
              {
                "cumpct_pct": 88.7,
                "cumpct_cust": 54.6,
                "metric_type": "Revenue",
                "x": 54.6,
                "y": 88.7
              },
              {
                "cumpct_pct": 88.8,
                "cumpct_cust": 54.8,
                "metric_type": "Revenue",
                "x": 54.8,
                "y": 88.8
              },
              {
                "cumpct_pct": 88.9,
                "cumpct_cust": 55.1,
                "metric_type": "Revenue",
                "x": 55.1,
                "y": 88.9
              },
              {
                "cumpct_pct": 89,
                "cumpct_cust": 55.3,
                "metric_type": "Revenue",
                "x": 55.3,
                "y": 89
              },
              {
                "cumpct_pct": 89.1,
                "cumpct_cust": 55.4,
                "metric_type": "Revenue",
                "x": 55.4,
                "y": 89.1
              },
              {
                "cumpct_pct": 89.2,
                "cumpct_cust": 55.7,
                "metric_type": "Revenue",
                "x": 55.7,
                "y": 89.2
              },
              {
                "cumpct_pct": 89.4,
                "cumpct_cust": 56.1,
                "metric_type": "Revenue",
                "x": 56.1,
                "y": 89.4
              },
              {
                "cumpct_pct": 89.4,
                "cumpct_cust": 56.1,
                "metric_type": "Revenue",
                "x": 56.1,
                "y": 89.4
              },
              {
                "cumpct_pct": 89.4,
                "cumpct_cust": 56.1,
                "metric_type": "Revenue",
                "x": 56.1,
                "y": 89.4
              },
              {
                "cumpct_pct": 89.5,
                "cumpct_cust": 56.3,
                "metric_type": "Revenue",
                "x": 56.3,
                "y": 89.5
              },
              {
                "cumpct_pct": 89.5,
                "cumpct_cust": 56.3,
                "metric_type": "Revenue",
                "x": 56.3,
                "y": 89.5
              },
              {
                "cumpct_pct": 89.5,
                "cumpct_cust": 56.4,
                "metric_type": "Revenue",
                "x": 56.4,
                "y": 89.5
              },
              {
                "cumpct_pct": 89.6,
                "cumpct_cust": 56.4,
                "metric_type": "Revenue",
                "x": 56.4,
                "y": 89.6
              },
              {
                "cumpct_pct": 89.6,
                "cumpct_cust": 56.5,
                "metric_type": "Revenue",
                "x": 56.5,
                "y": 89.6
              },
              {
                "cumpct_pct": 89.7,
                "cumpct_cust": 56.6,
                "metric_type": "Revenue",
                "x": 56.6,
                "y": 89.7
              },
              {
                "cumpct_pct": 89.7,
                "cumpct_cust": 56.7,
                "metric_type": "Revenue",
                "x": 56.7,
                "y": 89.7
              },
              {
                "cumpct_pct": 89.7,
                "cumpct_cust": 56.8,
                "metric_type": "Revenue",
                "x": 56.8,
                "y": 89.7
              },
              {
                "cumpct_pct": 89.7,
                "cumpct_cust": 56.8,
                "metric_type": "Revenue",
                "x": 56.8,
                "y": 89.7
              },
              {
                "cumpct_pct": 89.8,
                "cumpct_cust": 56.8,
                "metric_type": "Revenue",
                "x": 56.8,
                "y": 89.8
              },
              {
                "cumpct_pct": 89.8,
                "cumpct_cust": 56.8,
                "metric_type": "Revenue",
                "x": 56.8,
                "y": 89.8
              },
              {
                "cumpct_pct": 89.9,
                "cumpct_cust": 57.1,
                "metric_type": "Revenue",
                "x": 57.1,
                "y": 89.9
              },
              {
                "cumpct_pct": 89.9,
                "cumpct_cust": 57.2,
                "metric_type": "Revenue",
                "x": 57.2,
                "y": 89.9
              },
              {
                "cumpct_pct": 89.9,
                "cumpct_cust": 57.2,
                "metric_type": "Revenue",
                "x": 57.2,
                "y": 89.9
              },
              {
                "cumpct_pct": 90,
                "cumpct_cust": 57.3,
                "metric_type": "Revenue",
                "x": 57.3,
                "y": 90
              },
              {
                "cumpct_pct": 90,
                "cumpct_cust": 57.3,
                "metric_type": "Revenue",
                "x": 57.3,
                "y": 90
              },
              {
                "cumpct_pct": 90,
                "cumpct_cust": 57.5,
                "metric_type": "Revenue",
                "x": 57.5,
                "y": 90
              },
              {
                "cumpct_pct": 90.1,
                "cumpct_cust": 57.5,
                "metric_type": "Revenue",
                "x": 57.5,
                "y": 90.1
              },
              {
                "cumpct_pct": 90.1,
                "cumpct_cust": 57.6,
                "metric_type": "Revenue",
                "x": 57.6,
                "y": 90.1
              },
              {
                "cumpct_pct": 90.1,
                "cumpct_cust": 57.6,
                "metric_type": "Revenue",
                "x": 57.6,
                "y": 90.1
              },
              {
                "cumpct_pct": 90.1,
                "cumpct_cust": 57.7,
                "metric_type": "Revenue",
                "x": 57.7,
                "y": 90.1
              },
              {
                "cumpct_pct": 90.2,
                "cumpct_cust": 57.8,
                "metric_type": "Revenue",
                "x": 57.8,
                "y": 90.2
              },
              {
                "cumpct_pct": 90.3,
                "cumpct_cust": 57.9,
                "metric_type": "Revenue",
                "x": 57.9,
                "y": 90.3
              },
              {
                "cumpct_pct": 90.3,
                "cumpct_cust": 58,
                "metric_type": "Revenue",
                "x": 58,
                "y": 90.3
              },
              {
                "cumpct_pct": 90.3,
                "cumpct_cust": 58,
                "metric_type": "Revenue",
                "x": 58,
                "y": 90.3
              },
              {
                "cumpct_pct": 90.3,
                "cumpct_cust": 58.1,
                "metric_type": "Revenue",
                "x": 58.1,
                "y": 90.3
              },
              {
                "cumpct_pct": 90.4,
                "cumpct_cust": 58.2,
                "metric_type": "Revenue",
                "x": 58.2,
                "y": 90.4
              },
              {
                "cumpct_pct": 90.4,
                "cumpct_cust": 58.2,
                "metric_type": "Revenue",
                "x": 58.2,
                "y": 90.4
              },
              {
                "cumpct_pct": 90.4,
                "cumpct_cust": 58.3,
                "metric_type": "Revenue",
                "x": 58.3,
                "y": 90.4
              },
              {
                "cumpct_pct": 90.4,
                "cumpct_cust": 58.3,
                "metric_type": "Revenue",
                "x": 58.3,
                "y": 90.4
              },
              {
                "cumpct_pct": 90.5,
                "cumpct_cust": 58.4,
                "metric_type": "Revenue",
                "x": 58.4,
                "y": 90.5
              },
              {
                "cumpct_pct": 90.5,
                "cumpct_cust": 58.6,
                "metric_type": "Revenue",
                "x": 58.6,
                "y": 90.5
              },
              {
                "cumpct_pct": 90.6,
                "cumpct_cust": 58.6,
                "metric_type": "Revenue",
                "x": 58.6,
                "y": 90.6
              },
              {
                "cumpct_pct": 90.6,
                "cumpct_cust": 58.6,
                "metric_type": "Revenue",
                "x": 58.6,
                "y": 90.6
              },
              {
                "cumpct_pct": 90.6,
                "cumpct_cust": 58.6,
                "metric_type": "Revenue",
                "x": 58.6,
                "y": 90.6
              },
              {
                "cumpct_pct": 90.6,
                "cumpct_cust": 58.7,
                "metric_type": "Revenue",
                "x": 58.7,
                "y": 90.6
              },
              {
                "cumpct_pct": 90.7,
                "cumpct_cust": 58.8,
                "metric_type": "Revenue",
                "x": 58.8,
                "y": 90.7
              },
              {
                "cumpct_pct": 90.7,
                "cumpct_cust": 58.9,
                "metric_type": "Revenue",
                "x": 58.9,
                "y": 90.7
              },
              {
                "cumpct_pct": 90.8,
                "cumpct_cust": 59.1,
                "metric_type": "Revenue",
                "x": 59.1,
                "y": 90.8
              },
              {
                "cumpct_pct": 90.8,
                "cumpct_cust": 59.2,
                "metric_type": "Revenue",
                "x": 59.2,
                "y": 90.8
              },
              {
                "cumpct_pct": 90.8,
                "cumpct_cust": 59.2,
                "metric_type": "Revenue",
                "x": 59.2,
                "y": 90.8
              },
              {
                "cumpct_pct": 90.8,
                "cumpct_cust": 59.2,
                "metric_type": "Revenue",
                "x": 59.2,
                "y": 90.8
              },
              {
                "cumpct_pct": 90.9,
                "cumpct_cust": 59.4,
                "metric_type": "Revenue",
                "x": 59.4,
                "y": 90.9
              },
              {
                "cumpct_pct": 90.9,
                "cumpct_cust": 59.5,
                "metric_type": "Revenue",
                "x": 59.5,
                "y": 90.9
              },
              {
                "cumpct_pct": 91,
                "cumpct_cust": 59.7,
                "metric_type": "Revenue",
                "x": 59.7,
                "y": 91
              },
              {
                "cumpct_pct": 91.1,
                "cumpct_cust": 59.9,
                "metric_type": "Revenue",
                "x": 59.9,
                "y": 91.1
              },
              {
                "cumpct_pct": 91.2,
                "cumpct_cust": 60,
                "metric_type": "Revenue",
                "x": 60,
                "y": 91.2
              },
              {
                "cumpct_pct": 91.2,
                "cumpct_cust": 60.1,
                "metric_type": "Revenue",
                "x": 60.1,
                "y": 91.2
              },
              {
                "cumpct_pct": 91.2,
                "cumpct_cust": 60.1,
                "metric_type": "Revenue",
                "x": 60.1,
                "y": 91.2
              },
              {
                "cumpct_pct": 91.2,
                "cumpct_cust": 60.1,
                "metric_type": "Revenue",
                "x": 60.1,
                "y": 91.2
              },
              {
                "cumpct_pct": 91.3,
                "cumpct_cust": 60.3,
                "metric_type": "Revenue",
                "x": 60.3,
                "y": 91.3
              },
              {
                "cumpct_pct": 91.3,
                "cumpct_cust": 60.3,
                "metric_type": "Revenue",
                "x": 60.3,
                "y": 91.3
              },
              {
                "cumpct_pct": 91.3,
                "cumpct_cust": 60.5,
                "metric_type": "Revenue",
                "x": 60.5,
                "y": 91.3
              },
              {
                "cumpct_pct": 91.4,
                "cumpct_cust": 60.6,
                "metric_type": "Revenue",
                "x": 60.6,
                "y": 91.4
              },
              {
                "cumpct_pct": 91.4,
                "cumpct_cust": 60.6,
                "metric_type": "Revenue",
                "x": 60.6,
                "y": 91.4
              },
              {
                "cumpct_pct": 91.4,
                "cumpct_cust": 60.7,
                "metric_type": "Revenue",
                "x": 60.7,
                "y": 91.4
              },
              {
                "cumpct_pct": 91.5,
                "cumpct_cust": 60.9,
                "metric_type": "Revenue",
                "x": 60.9,
                "y": 91.5
              },
              {
                "cumpct_pct": 91.5,
                "cumpct_cust": 60.9,
                "metric_type": "Revenue",
                "x": 60.9,
                "y": 91.5
              },
              {
                "cumpct_pct": 91.6,
                "cumpct_cust": 61.1,
                "metric_type": "Revenue",
                "x": 61.1,
                "y": 91.6
              },
              {
                "cumpct_pct": 91.6,
                "cumpct_cust": 61.1,
                "metric_type": "Revenue",
                "x": 61.1,
                "y": 91.6
              },
              {
                "cumpct_pct": 91.7,
                "cumpct_cust": 61.3,
                "metric_type": "Revenue",
                "x": 61.3,
                "y": 91.7
              },
              {
                "cumpct_pct": 91.7,
                "cumpct_cust": 61.3,
                "metric_type": "Revenue",
                "x": 61.3,
                "y": 91.7
              },
              {
                "cumpct_pct": 91.8,
                "cumpct_cust": 61.5,
                "metric_type": "Revenue",
                "x": 61.5,
                "y": 91.8
              },
              {
                "cumpct_pct": 91.8,
                "cumpct_cust": 61.5,
                "metric_type": "Revenue",
                "x": 61.5,
                "y": 91.8
              },
              {
                "cumpct_pct": 91.8,
                "cumpct_cust": 61.6,
                "metric_type": "Revenue",
                "x": 61.6,
                "y": 91.8
              },
              {
                "cumpct_pct": 91.8,
                "cumpct_cust": 61.6,
                "metric_type": "Revenue",
                "x": 61.6,
                "y": 91.8
              },
              {
                "cumpct_pct": 91.8,
                "cumpct_cust": 61.7,
                "metric_type": "Revenue",
                "x": 61.7,
                "y": 91.8
              },
              {
                "cumpct_pct": 91.9,
                "cumpct_cust": 61.9,
                "metric_type": "Revenue",
                "x": 61.9,
                "y": 91.9
              },
              {
                "cumpct_pct": 91.9,
                "cumpct_cust": 61.9,
                "metric_type": "Revenue",
                "x": 61.9,
                "y": 91.9
              },
              {
                "cumpct_pct": 92,
                "cumpct_cust": 62.1,
                "metric_type": "Revenue",
                "x": 62.1,
                "y": 92
              },
              {
                "cumpct_pct": 92,
                "cumpct_cust": 62.1,
                "metric_type": "Revenue",
                "x": 62.1,
                "y": 92
              },
              {
                "cumpct_pct": 92,
                "cumpct_cust": 62.1,
                "metric_type": "Revenue",
                "x": 62.1,
                "y": 92
              },
              {
                "cumpct_pct": 92,
                "cumpct_cust": 62.1,
                "metric_type": "Revenue",
                "x": 62.1,
                "y": 92
              },
              {
                "cumpct_pct": 92,
                "cumpct_cust": 62.1,
                "metric_type": "Revenue",
                "x": 62.1,
                "y": 92
              },
              {
                "cumpct_pct": 92,
                "cumpct_cust": 62.1,
                "metric_type": "Revenue",
                "x": 62.1,
                "y": 92
              },
              {
                "cumpct_pct": 92.1,
                "cumpct_cust": 62.3,
                "metric_type": "Revenue",
                "x": 62.3,
                "y": 92.1
              },
              {
                "cumpct_pct": 92.1,
                "cumpct_cust": 62.3,
                "metric_type": "Revenue",
                "x": 62.3,
                "y": 92.1
              },
              {
                "cumpct_pct": 92.1,
                "cumpct_cust": 62.3,
                "metric_type": "Revenue",
                "x": 62.3,
                "y": 92.1
              },
              {
                "cumpct_pct": 92.1,
                "cumpct_cust": 62.4,
                "metric_type": "Revenue",
                "x": 62.4,
                "y": 92.1
              },
              {
                "cumpct_pct": 92.1,
                "cumpct_cust": 62.5,
                "metric_type": "Revenue",
                "x": 62.5,
                "y": 92.1
              },
              {
                "cumpct_pct": 92.1,
                "cumpct_cust": 62.5,
                "metric_type": "Revenue",
                "x": 62.5,
                "y": 92.1
              },
              {
                "cumpct_pct": 92.1,
                "cumpct_cust": 62.5,
                "metric_type": "Revenue",
                "x": 62.5,
                "y": 92.1
              },
              {
                "cumpct_pct": 92.2,
                "cumpct_cust": 62.5,
                "metric_type": "Revenue",
                "x": 62.5,
                "y": 92.2
              },
              {
                "cumpct_pct": 92.2,
                "cumpct_cust": 62.7,
                "metric_type": "Revenue",
                "x": 62.7,
                "y": 92.2
              },
              {
                "cumpct_pct": 92.3,
                "cumpct_cust": 62.9,
                "metric_type": "Revenue",
                "x": 62.9,
                "y": 92.3
              },
              {
                "cumpct_pct": 92.4,
                "cumpct_cust": 63.2,
                "metric_type": "Revenue",
                "x": 63.2,
                "y": 92.4
              },
              {
                "cumpct_pct": 92.6,
                "cumpct_cust": 63.6,
                "metric_type": "Revenue",
                "x": 63.6,
                "y": 92.6
              },
              {
                "cumpct_pct": 92.6,
                "cumpct_cust": 63.7,
                "metric_type": "Revenue",
                "x": 63.7,
                "y": 92.6
              },
              {
                "cumpct_pct": 92.6,
                "cumpct_cust": 63.7,
                "metric_type": "Revenue",
                "x": 63.7,
                "y": 92.6
              },
              {
                "cumpct_pct": 92.6,
                "cumpct_cust": 63.8,
                "metric_type": "Revenue",
                "x": 63.8,
                "y": 92.6
              },
              {
                "cumpct_pct": 92.7,
                "cumpct_cust": 63.8,
                "metric_type": "Revenue",
                "x": 63.8,
                "y": 92.7
              },
              {
                "cumpct_pct": 92.9,
                "cumpct_cust": 64.5,
                "metric_type": "Revenue",
                "x": 64.5,
                "y": 92.9
              },
              {
                "cumpct_pct": 92.9,
                "cumpct_cust": 64.6,
                "metric_type": "Revenue",
                "x": 64.6,
                "y": 92.9
              },
              {
                "cumpct_pct": 93,
                "cumpct_cust": 64.7,
                "metric_type": "Revenue",
                "x": 64.7,
                "y": 93
              },
              {
                "cumpct_pct": 93,
                "cumpct_cust": 64.7,
                "metric_type": "Revenue",
                "x": 64.7,
                "y": 93
              },
              {
                "cumpct_pct": 93,
                "cumpct_cust": 64.7,
                "metric_type": "Revenue",
                "x": 64.7,
                "y": 93
              },
              {
                "cumpct_pct": 93,
                "cumpct_cust": 64.8,
                "metric_type": "Revenue",
                "x": 64.8,
                "y": 93
              },
              {
                "cumpct_pct": 93,
                "cumpct_cust": 64.8,
                "metric_type": "Revenue",
                "x": 64.8,
                "y": 93
              },
              {
                "cumpct_pct": 93,
                "cumpct_cust": 64.8,
                "metric_type": "Revenue",
                "x": 64.8,
                "y": 93
              },
              {
                "cumpct_pct": 93,
                "cumpct_cust": 64.9,
                "metric_type": "Revenue",
                "x": 64.9,
                "y": 93
              },
              {
                "cumpct_pct": 93.1,
                "cumpct_cust": 65,
                "metric_type": "Revenue",
                "x": 65,
                "y": 93.1
              },
              {
                "cumpct_pct": 93.1,
                "cumpct_cust": 65.2,
                "metric_type": "Revenue",
                "x": 65.2,
                "y": 93.1
              },
              {
                "cumpct_pct": 93.2,
                "cumpct_cust": 65.2,
                "metric_type": "Revenue",
                "x": 65.2,
                "y": 93.2
              },
              {
                "cumpct_pct": 93.2,
                "cumpct_cust": 65.3,
                "metric_type": "Revenue",
                "x": 65.3,
                "y": 93.2
              },
              {
                "cumpct_pct": 93.3,
                "cumpct_cust": 65.7,
                "metric_type": "Revenue",
                "x": 65.7,
                "y": 93.3
              },
              {
                "cumpct_pct": 93.3,
                "cumpct_cust": 65.7,
                "metric_type": "Revenue",
                "x": 65.7,
                "y": 93.3
              },
              {
                "cumpct_pct": 93.4,
                "cumpct_cust": 65.8,
                "metric_type": "Revenue",
                "x": 65.8,
                "y": 93.4
              },
              {
                "cumpct_pct": 93.5,
                "cumpct_cust": 66.2,
                "metric_type": "Revenue",
                "x": 66.2,
                "y": 93.5
              },
              {
                "cumpct_pct": 93.5,
                "cumpct_cust": 66.3,
                "metric_type": "Revenue",
                "x": 66.3,
                "y": 93.5
              },
              {
                "cumpct_pct": 93.6,
                "cumpct_cust": 66.4,
                "metric_type": "Revenue",
                "x": 66.4,
                "y": 93.6
              },
              {
                "cumpct_pct": 93.6,
                "cumpct_cust": 66.4,
                "metric_type": "Revenue",
                "x": 66.4,
                "y": 93.6
              },
              {
                "cumpct_pct": 93.6,
                "cumpct_cust": 66.6,
                "metric_type": "Revenue",
                "x": 66.6,
                "y": 93.6
              },
              {
                "cumpct_pct": 93.7,
                "cumpct_cust": 66.8,
                "metric_type": "Revenue",
                "x": 66.8,
                "y": 93.7
              },
              {
                "cumpct_pct": 93.7,
                "cumpct_cust": 66.8,
                "metric_type": "Revenue",
                "x": 66.8,
                "y": 93.7
              },
              {
                "cumpct_pct": 93.7,
                "cumpct_cust": 66.9,
                "metric_type": "Revenue",
                "x": 66.9,
                "y": 93.7
              },
              {
                "cumpct_pct": 93.7,
                "cumpct_cust": 66.9,
                "metric_type": "Revenue",
                "x": 66.9,
                "y": 93.7
              },
              {
                "cumpct_pct": 93.8,
                "cumpct_cust": 67.2,
                "metric_type": "Revenue",
                "x": 67.2,
                "y": 93.8
              },
              {
                "cumpct_pct": 93.8,
                "cumpct_cust": 67.2,
                "metric_type": "Revenue",
                "x": 67.2,
                "y": 93.8
              },
              {
                "cumpct_pct": 93.9,
                "cumpct_cust": 67.3,
                "metric_type": "Revenue",
                "x": 67.3,
                "y": 93.9
              },
              {
                "cumpct_pct": 94,
                "cumpct_cust": 67.6,
                "metric_type": "Revenue",
                "x": 67.6,
                "y": 94
              },
              {
                "cumpct_pct": 94,
                "cumpct_cust": 67.7,
                "metric_type": "Revenue",
                "x": 67.7,
                "y": 94
              },
              {
                "cumpct_pct": 94,
                "cumpct_cust": 67.8,
                "metric_type": "Revenue",
                "x": 67.8,
                "y": 94
              },
              {
                "cumpct_pct": 94.1,
                "cumpct_cust": 67.9,
                "metric_type": "Revenue",
                "x": 67.9,
                "y": 94.1
              },
              {
                "cumpct_pct": 94.1,
                "cumpct_cust": 67.9,
                "metric_type": "Revenue",
                "x": 67.9,
                "y": 94.1
              },
              {
                "cumpct_pct": 94.1,
                "cumpct_cust": 68,
                "metric_type": "Revenue",
                "x": 68,
                "y": 94.1
              },
              {
                "cumpct_pct": 94.1,
                "cumpct_cust": 68,
                "metric_type": "Revenue",
                "x": 68,
                "y": 94.1
              },
              {
                "cumpct_pct": 94.2,
                "cumpct_cust": 68.1,
                "metric_type": "Revenue",
                "x": 68.1,
                "y": 94.2
              },
              {
                "cumpct_pct": 94.2,
                "cumpct_cust": 68.2,
                "metric_type": "Revenue",
                "x": 68.2,
                "y": 94.2
              },
              {
                "cumpct_pct": 94.2,
                "cumpct_cust": 68.2,
                "metric_type": "Revenue",
                "x": 68.2,
                "y": 94.2
              },
              {
                "cumpct_pct": 94.2,
                "cumpct_cust": 68.3,
                "metric_type": "Revenue",
                "x": 68.3,
                "y": 94.2
              },
              {
                "cumpct_pct": 94.2,
                "cumpct_cust": 68.3,
                "metric_type": "Revenue",
                "x": 68.3,
                "y": 94.2
              },
              {
                "cumpct_pct": 94.2,
                "cumpct_cust": 68.4,
                "metric_type": "Revenue",
                "x": 68.4,
                "y": 94.2
              },
              {
                "cumpct_pct": 94.3,
                "cumpct_cust": 68.5,
                "metric_type": "Revenue",
                "x": 68.5,
                "y": 94.3
              },
              {
                "cumpct_pct": 94.3,
                "cumpct_cust": 68.6,
                "metric_type": "Revenue",
                "x": 68.6,
                "y": 94.3
              },
              {
                "cumpct_pct": 94.4,
                "cumpct_cust": 68.7,
                "metric_type": "Revenue",
                "x": 68.7,
                "y": 94.4
              },
              {
                "cumpct_pct": 94.4,
                "cumpct_cust": 68.8,
                "metric_type": "Revenue",
                "x": 68.8,
                "y": 94.4
              },
              {
                "cumpct_pct": 94.4,
                "cumpct_cust": 68.8,
                "metric_type": "Revenue",
                "x": 68.8,
                "y": 94.4
              },
              {
                "cumpct_pct": 94.4,
                "cumpct_cust": 68.9,
                "metric_type": "Revenue",
                "x": 68.9,
                "y": 94.4
              },
              {
                "cumpct_pct": 94.4,
                "cumpct_cust": 68.9,
                "metric_type": "Revenue",
                "x": 68.9,
                "y": 94.4
              },
              {
                "cumpct_pct": 94.4,
                "cumpct_cust": 68.9,
                "metric_type": "Revenue",
                "x": 68.9,
                "y": 94.4
              },
              {
                "cumpct_pct": 94.4,
                "cumpct_cust": 68.9,
                "metric_type": "Revenue",
                "x": 68.9,
                "y": 94.4
              },
              {
                "cumpct_pct": 94.4,
                "cumpct_cust": 68.9,
                "metric_type": "Revenue",
                "x": 68.9,
                "y": 94.4
              },
              {
                "cumpct_pct": 94.5,
                "cumpct_cust": 69,
                "metric_type": "Revenue",
                "x": 69,
                "y": 94.5
              },
              {
                "cumpct_pct": 94.5,
                "cumpct_cust": 69.1,
                "metric_type": "Revenue",
                "x": 69.1,
                "y": 94.5
              },
              {
                "cumpct_pct": 94.5,
                "cumpct_cust": 69.2,
                "metric_type": "Revenue",
                "x": 69.2,
                "y": 94.5
              },
              {
                "cumpct_pct": 94.5,
                "cumpct_cust": 69.2,
                "metric_type": "Revenue",
                "x": 69.2,
                "y": 94.5
              },
              {
                "cumpct_pct": 94.5,
                "cumpct_cust": 69.2,
                "metric_type": "Revenue",
                "x": 69.2,
                "y": 94.5
              },
              {
                "cumpct_pct": 94.5,
                "cumpct_cust": 69.3,
                "metric_type": "Revenue",
                "x": 69.3,
                "y": 94.5
              },
              {
                "cumpct_pct": 94.6,
                "cumpct_cust": 69.4,
                "metric_type": "Revenue",
                "x": 69.4,
                "y": 94.6
              },
              {
                "cumpct_pct": 94.6,
                "cumpct_cust": 69.5,
                "metric_type": "Revenue",
                "x": 69.5,
                "y": 94.6
              },
              {
                "cumpct_pct": 94.6,
                "cumpct_cust": 69.6,
                "metric_type": "Revenue",
                "x": 69.6,
                "y": 94.6
              },
              {
                "cumpct_pct": 94.7,
                "cumpct_cust": 69.7,
                "metric_type": "Revenue",
                "x": 69.7,
                "y": 94.7
              },
              {
                "cumpct_pct": 94.7,
                "cumpct_cust": 69.8,
                "metric_type": "Revenue",
                "x": 69.8,
                "y": 94.7
              },
              {
                "cumpct_pct": 94.7,
                "cumpct_cust": 69.8,
                "metric_type": "Revenue",
                "x": 69.8,
                "y": 94.7
              },
              {
                "cumpct_pct": 94.8,
                "cumpct_cust": 70,
                "metric_type": "Revenue",
                "x": 70,
                "y": 94.8
              },
              {
                "cumpct_pct": 94.8,
                "cumpct_cust": 70,
                "metric_type": "Revenue",
                "x": 70,
                "y": 94.8
              },
              {
                "cumpct_pct": 94.8,
                "cumpct_cust": 70,
                "metric_type": "Revenue",
                "x": 70,
                "y": 94.8
              },
              {
                "cumpct_pct": 94.8,
                "cumpct_cust": 70.2,
                "metric_type": "Revenue",
                "x": 70.2,
                "y": 94.8
              },
              {
                "cumpct_pct": 94.9,
                "cumpct_cust": 70.3,
                "metric_type": "Revenue",
                "x": 70.3,
                "y": 94.9
              },
              {
                "cumpct_pct": 94.9,
                "cumpct_cust": 70.3,
                "metric_type": "Revenue",
                "x": 70.3,
                "y": 94.9
              },
              {
                "cumpct_pct": 94.9,
                "cumpct_cust": 70.4,
                "metric_type": "Revenue",
                "x": 70.4,
                "y": 94.9
              },
              {
                "cumpct_pct": 94.9,
                "cumpct_cust": 70.4,
                "metric_type": "Revenue",
                "x": 70.4,
                "y": 94.9
              },
              {
                "cumpct_pct": 95,
                "cumpct_cust": 70.6,
                "metric_type": "Revenue",
                "x": 70.6,
                "y": 95
              },
              {
                "cumpct_pct": 95,
                "cumpct_cust": 70.6,
                "metric_type": "Revenue",
                "x": 70.6,
                "y": 95
              },
              {
                "cumpct_pct": 95,
                "cumpct_cust": 70.7,
                "metric_type": "Revenue",
                "x": 70.7,
                "y": 95
              },
              {
                "cumpct_pct": 95,
                "cumpct_cust": 70.8,
                "metric_type": "Revenue",
                "x": 70.8,
                "y": 95
              },
              {
                "cumpct_pct": 95.1,
                "cumpct_cust": 71,
                "metric_type": "Revenue",
                "x": 71,
                "y": 95.1
              },
              {
                "cumpct_pct": 95.1,
                "cumpct_cust": 71.1,
                "metric_type": "Revenue",
                "x": 71.1,
                "y": 95.1
              },
              {
                "cumpct_pct": 95.2,
                "cumpct_cust": 71.2,
                "metric_type": "Revenue",
                "x": 71.2,
                "y": 95.2
              },
              {
                "cumpct_pct": 95.2,
                "cumpct_cust": 71.3,
                "metric_type": "Revenue",
                "x": 71.3,
                "y": 95.2
              },
              {
                "cumpct_pct": 95.2,
                "cumpct_cust": 71.4,
                "metric_type": "Revenue",
                "x": 71.4,
                "y": 95.2
              },
              {
                "cumpct_pct": 95.3,
                "cumpct_cust": 71.5,
                "metric_type": "Revenue",
                "x": 71.5,
                "y": 95.3
              },
              {
                "cumpct_pct": 95.3,
                "cumpct_cust": 71.6,
                "metric_type": "Revenue",
                "x": 71.6,
                "y": 95.3
              },
              {
                "cumpct_pct": 95.3,
                "cumpct_cust": 71.6,
                "metric_type": "Revenue",
                "x": 71.6,
                "y": 95.3
              },
              {
                "cumpct_pct": 95.3,
                "cumpct_cust": 71.7,
                "metric_type": "Revenue",
                "x": 71.7,
                "y": 95.3
              },
              {
                "cumpct_pct": 95.4,
                "cumpct_cust": 71.9,
                "metric_type": "Revenue",
                "x": 71.9,
                "y": 95.4
              },
              {
                "cumpct_pct": 95.4,
                "cumpct_cust": 72,
                "metric_type": "Revenue",
                "x": 72,
                "y": 95.4
              },
              {
                "cumpct_pct": 95.4,
                "cumpct_cust": 72,
                "metric_type": "Revenue",
                "x": 72,
                "y": 95.4
              },
              {
                "cumpct_pct": 95.5,
                "cumpct_cust": 72.4,
                "metric_type": "Revenue",
                "x": 72.4,
                "y": 95.5
              },
              {
                "cumpct_pct": 95.5,
                "cumpct_cust": 72.4,
                "metric_type": "Revenue",
                "x": 72.4,
                "y": 95.5
              },
              {
                "cumpct_pct": 95.5,
                "cumpct_cust": 72.4,
                "metric_type": "Revenue",
                "x": 72.4,
                "y": 95.5
              },
              {
                "cumpct_pct": 95.6,
                "cumpct_cust": 72.6,
                "metric_type": "Revenue",
                "x": 72.6,
                "y": 95.6
              },
              {
                "cumpct_pct": 95.6,
                "cumpct_cust": 72.7,
                "metric_type": "Revenue",
                "x": 72.7,
                "y": 95.6
              },
              {
                "cumpct_pct": 95.7,
                "cumpct_cust": 73,
                "metric_type": "Revenue",
                "x": 73,
                "y": 95.7
              },
              {
                "cumpct_pct": 95.7,
                "cumpct_cust": 73,
                "metric_type": "Revenue",
                "x": 73,
                "y": 95.7
              },
              {
                "cumpct_pct": 95.7,
                "cumpct_cust": 73.1,
                "metric_type": "Revenue",
                "x": 73.1,
                "y": 95.7
              },
              {
                "cumpct_pct": 95.7,
                "cumpct_cust": 73.1,
                "metric_type": "Revenue",
                "x": 73.1,
                "y": 95.7
              },
              {
                "cumpct_pct": 95.8,
                "cumpct_cust": 73.3,
                "metric_type": "Revenue",
                "x": 73.3,
                "y": 95.8
              },
              {
                "cumpct_pct": 95.8,
                "cumpct_cust": 73.3,
                "metric_type": "Revenue",
                "x": 73.3,
                "y": 95.8
              },
              {
                "cumpct_pct": 95.8,
                "cumpct_cust": 73.3,
                "metric_type": "Revenue",
                "x": 73.3,
                "y": 95.8
              },
              {
                "cumpct_pct": 95.8,
                "cumpct_cust": 73.4,
                "metric_type": "Revenue",
                "x": 73.4,
                "y": 95.8
              },
              {
                "cumpct_pct": 95.9,
                "cumpct_cust": 73.7,
                "metric_type": "Revenue",
                "x": 73.7,
                "y": 95.9
              },
              {
                "cumpct_pct": 95.9,
                "cumpct_cust": 73.9,
                "metric_type": "Revenue",
                "x": 73.9,
                "y": 95.9
              },
              {
                "cumpct_pct": 96,
                "cumpct_cust": 74,
                "metric_type": "Revenue",
                "x": 74,
                "y": 96
              },
              {
                "cumpct_pct": 96,
                "cumpct_cust": 74,
                "metric_type": "Revenue",
                "x": 74,
                "y": 96
              },
              {
                "cumpct_pct": 96,
                "cumpct_cust": 74.1,
                "metric_type": "Revenue",
                "x": 74.1,
                "y": 96
              },
              {
                "cumpct_pct": 96,
                "cumpct_cust": 74.2,
                "metric_type": "Revenue",
                "x": 74.2,
                "y": 96
              },
              {
                "cumpct_pct": 96.1,
                "cumpct_cust": 74.3,
                "metric_type": "Revenue",
                "x": 74.3,
                "y": 96.1
              },
              {
                "cumpct_pct": 96.1,
                "cumpct_cust": 74.4,
                "metric_type": "Revenue",
                "x": 74.4,
                "y": 96.1
              },
              {
                "cumpct_pct": 96.1,
                "cumpct_cust": 74.5,
                "metric_type": "Revenue",
                "x": 74.5,
                "y": 96.1
              },
              {
                "cumpct_pct": 96.2,
                "cumpct_cust": 74.8,
                "metric_type": "Revenue",
                "x": 74.8,
                "y": 96.2
              },
              {
                "cumpct_pct": 96.2,
                "cumpct_cust": 74.9,
                "metric_type": "Revenue",
                "x": 74.9,
                "y": 96.2
              },
              {
                "cumpct_pct": 96.3,
                "cumpct_cust": 75,
                "metric_type": "Revenue",
                "x": 75,
                "y": 96.3
              },
              {
                "cumpct_pct": 96.3,
                "cumpct_cust": 75.3,
                "metric_type": "Revenue",
                "x": 75.3,
                "y": 96.3
              },
              {
                "cumpct_pct": 96.4,
                "cumpct_cust": 75.4,
                "metric_type": "Revenue",
                "x": 75.4,
                "y": 96.4
              },
              {
                "cumpct_pct": 96.4,
                "cumpct_cust": 75.4,
                "metric_type": "Revenue",
                "x": 75.4,
                "y": 96.4
              },
              {
                "cumpct_pct": 96.4,
                "cumpct_cust": 75.5,
                "metric_type": "Revenue",
                "x": 75.5,
                "y": 96.4
              },
              {
                "cumpct_pct": 96.4,
                "cumpct_cust": 75.6,
                "metric_type": "Revenue",
                "x": 75.6,
                "y": 96.4
              },
              {
                "cumpct_pct": 96.4,
                "cumpct_cust": 75.6,
                "metric_type": "Revenue",
                "x": 75.6,
                "y": 96.4
              },
              {
                "cumpct_pct": 96.4,
                "cumpct_cust": 75.7,
                "metric_type": "Revenue",
                "x": 75.7,
                "y": 96.4
              },
              {
                "cumpct_pct": 96.5,
                "cumpct_cust": 76,
                "metric_type": "Revenue",
                "x": 76,
                "y": 96.5
              },
              {
                "cumpct_pct": 96.5,
                "cumpct_cust": 76.1,
                "metric_type": "Revenue",
                "x": 76.1,
                "y": 96.5
              },
              {
                "cumpct_pct": 96.6,
                "cumpct_cust": 76.3,
                "metric_type": "Revenue",
                "x": 76.3,
                "y": 96.6
              },
              {
                "cumpct_pct": 96.6,
                "cumpct_cust": 76.4,
                "metric_type": "Revenue",
                "x": 76.4,
                "y": 96.6
              },
              {
                "cumpct_pct": 96.6,
                "cumpct_cust": 76.4,
                "metric_type": "Revenue",
                "x": 76.4,
                "y": 96.6
              },
              {
                "cumpct_pct": 96.6,
                "cumpct_cust": 76.5,
                "metric_type": "Revenue",
                "x": 76.5,
                "y": 96.6
              },
              {
                "cumpct_pct": 96.7,
                "cumpct_cust": 76.6,
                "metric_type": "Revenue",
                "x": 76.6,
                "y": 96.7
              },
              {
                "cumpct_pct": 96.7,
                "cumpct_cust": 76.7,
                "metric_type": "Revenue",
                "x": 76.7,
                "y": 96.7
              },
              {
                "cumpct_pct": 96.7,
                "cumpct_cust": 76.8,
                "metric_type": "Revenue",
                "x": 76.8,
                "y": 96.7
              },
              {
                "cumpct_pct": 96.7,
                "cumpct_cust": 76.8,
                "metric_type": "Revenue",
                "x": 76.8,
                "y": 96.7
              },
              {
                "cumpct_pct": 96.7,
                "cumpct_cust": 76.8,
                "metric_type": "Revenue",
                "x": 76.8,
                "y": 96.7
              },
              {
                "cumpct_pct": 96.7,
                "cumpct_cust": 76.8,
                "metric_type": "Revenue",
                "x": 76.8,
                "y": 96.7
              },
              {
                "cumpct_pct": 96.8,
                "cumpct_cust": 77,
                "metric_type": "Revenue",
                "x": 77,
                "y": 96.8
              },
              {
                "cumpct_pct": 96.8,
                "cumpct_cust": 77.1,
                "metric_type": "Revenue",
                "x": 77.1,
                "y": 96.8
              },
              {
                "cumpct_pct": 96.8,
                "cumpct_cust": 77.1,
                "metric_type": "Revenue",
                "x": 77.1,
                "y": 96.8
              },
              {
                "cumpct_pct": 96.8,
                "cumpct_cust": 77.1,
                "metric_type": "Revenue",
                "x": 77.1,
                "y": 96.8
              },
              {
                "cumpct_pct": 96.8,
                "cumpct_cust": 77.2,
                "metric_type": "Revenue",
                "x": 77.2,
                "y": 96.8
              },
              {
                "cumpct_pct": 96.8,
                "cumpct_cust": 77.3,
                "metric_type": "Revenue",
                "x": 77.3,
                "y": 96.8
              },
              {
                "cumpct_pct": 96.8,
                "cumpct_cust": 77.3,
                "metric_type": "Revenue",
                "x": 77.3,
                "y": 96.8
              },
              {
                "cumpct_pct": 96.8,
                "cumpct_cust": 77.3,
                "metric_type": "Revenue",
                "x": 77.3,
                "y": 96.8
              },
              {
                "cumpct_pct": 96.9,
                "cumpct_cust": 77.3,
                "metric_type": "Revenue",
                "x": 77.3,
                "y": 96.9
              },
              {
                "cumpct_pct": 96.9,
                "cumpct_cust": 77.4,
                "metric_type": "Revenue",
                "x": 77.4,
                "y": 96.9
              },
              {
                "cumpct_pct": 96.9,
                "cumpct_cust": 77.4,
                "metric_type": "Revenue",
                "x": 77.4,
                "y": 96.9
              },
              {
                "cumpct_pct": 96.9,
                "cumpct_cust": 77.4,
                "metric_type": "Revenue",
                "x": 77.4,
                "y": 96.9
              },
              {
                "cumpct_pct": 96.9,
                "cumpct_cust": 77.5,
                "metric_type": "Revenue",
                "x": 77.5,
                "y": 96.9
              },
              {
                "cumpct_pct": 96.9,
                "cumpct_cust": 77.5,
                "metric_type": "Revenue",
                "x": 77.5,
                "y": 96.9
              },
              {
                "cumpct_pct": 96.9,
                "cumpct_cust": 77.7,
                "metric_type": "Revenue",
                "x": 77.7,
                "y": 96.9
              },
              {
                "cumpct_pct": 96.9,
                "cumpct_cust": 77.7,
                "metric_type": "Revenue",
                "x": 77.7,
                "y": 96.9
              },
              {
                "cumpct_pct": 97,
                "cumpct_cust": 77.8,
                "metric_type": "Revenue",
                "x": 77.8,
                "y": 97
              },
              {
                "cumpct_pct": 97,
                "cumpct_cust": 78,
                "metric_type": "Revenue",
                "x": 78,
                "y": 97
              },
              {
                "cumpct_pct": 97.1,
                "cumpct_cust": 78.3,
                "metric_type": "Revenue",
                "x": 78.3,
                "y": 97.1
              },
              {
                "cumpct_pct": 97.1,
                "cumpct_cust": 78.3,
                "metric_type": "Revenue",
                "x": 78.3,
                "y": 97.1
              },
              {
                "cumpct_pct": 97.1,
                "cumpct_cust": 78.4,
                "metric_type": "Revenue",
                "x": 78.4,
                "y": 97.1
              },
              {
                "cumpct_pct": 97.2,
                "cumpct_cust": 78.7,
                "metric_type": "Revenue",
                "x": 78.7,
                "y": 97.2
              },
              {
                "cumpct_pct": 97.2,
                "cumpct_cust": 78.8,
                "metric_type": "Revenue",
                "x": 78.8,
                "y": 97.2
              },
              {
                "cumpct_pct": 97.3,
                "cumpct_cust": 79.2,
                "metric_type": "Revenue",
                "x": 79.2,
                "y": 97.3
              },
              {
                "cumpct_pct": 97.3,
                "cumpct_cust": 79.3,
                "metric_type": "Revenue",
                "x": 79.3,
                "y": 97.3
              },
              {
                "cumpct_pct": 97.3,
                "cumpct_cust": 79.4,
                "metric_type": "Revenue",
                "x": 79.4,
                "y": 97.3
              },
              {
                "cumpct_pct": 97.3,
                "cumpct_cust": 79.5,
                "metric_type": "Revenue",
                "x": 79.5,
                "y": 97.3
              },
              {
                "cumpct_pct": 97.4,
                "cumpct_cust": 79.7,
                "metric_type": "Revenue",
                "x": 79.7,
                "y": 97.4
              },
              {
                "cumpct_pct": 97.5,
                "cumpct_cust": 80,
                "metric_type": "Revenue",
                "x": 80,
                "y": 97.5
              },
              {
                "cumpct_pct": 97.5,
                "cumpct_cust": 80.2,
                "metric_type": "Revenue",
                "x": 80.2,
                "y": 97.5
              },
              {
                "cumpct_pct": 97.5,
                "cumpct_cust": 80.2,
                "metric_type": "Revenue",
                "x": 80.2,
                "y": 97.5
              },
              {
                "cumpct_pct": 97.5,
                "cumpct_cust": 80.3,
                "metric_type": "Revenue",
                "x": 80.3,
                "y": 97.5
              },
              {
                "cumpct_pct": 97.5,
                "cumpct_cust": 80.3,
                "metric_type": "Revenue",
                "x": 80.3,
                "y": 97.5
              },
              {
                "cumpct_pct": 97.5,
                "cumpct_cust": 80.4,
                "metric_type": "Revenue",
                "x": 80.4,
                "y": 97.5
              },
              {
                "cumpct_pct": 97.6,
                "cumpct_cust": 80.5,
                "metric_type": "Revenue",
                "x": 80.5,
                "y": 97.6
              },
              {
                "cumpct_pct": 97.6,
                "cumpct_cust": 80.7,
                "metric_type": "Revenue",
                "x": 80.7,
                "y": 97.6
              },
              {
                "cumpct_pct": 97.6,
                "cumpct_cust": 80.8,
                "metric_type": "Revenue",
                "x": 80.8,
                "y": 97.6
              },
              {
                "cumpct_pct": 97.6,
                "cumpct_cust": 80.9,
                "metric_type": "Revenue",
                "x": 80.9,
                "y": 97.6
              },
              {
                "cumpct_pct": 97.7,
                "cumpct_cust": 81.1,
                "metric_type": "Revenue",
                "x": 81.1,
                "y": 97.7
              },
              {
                "cumpct_pct": 97.7,
                "cumpct_cust": 81.3,
                "metric_type": "Revenue",
                "x": 81.3,
                "y": 97.7
              },
              {
                "cumpct_pct": 97.8,
                "cumpct_cust": 81.4,
                "metric_type": "Revenue",
                "x": 81.4,
                "y": 97.8
              },
              {
                "cumpct_pct": 97.8,
                "cumpct_cust": 81.5,
                "metric_type": "Revenue",
                "x": 81.5,
                "y": 97.8
              },
              {
                "cumpct_pct": 97.8,
                "cumpct_cust": 81.5,
                "metric_type": "Revenue",
                "x": 81.5,
                "y": 97.8
              },
              {
                "cumpct_pct": 97.8,
                "cumpct_cust": 81.7,
                "metric_type": "Revenue",
                "x": 81.7,
                "y": 97.8
              },
              {
                "cumpct_pct": 97.9,
                "cumpct_cust": 82,
                "metric_type": "Revenue",
                "x": 82,
                "y": 97.9
              },
              {
                "cumpct_pct": 97.9,
                "cumpct_cust": 82,
                "metric_type": "Revenue",
                "x": 82,
                "y": 97.9
              },
              {
                "cumpct_pct": 97.9,
                "cumpct_cust": 82,
                "metric_type": "Revenue",
                "x": 82,
                "y": 97.9
              },
              {
                "cumpct_pct": 97.9,
                "cumpct_cust": 82.1,
                "metric_type": "Revenue",
                "x": 82.1,
                "y": 97.9
              },
              {
                "cumpct_pct": 97.9,
                "cumpct_cust": 82.1,
                "metric_type": "Revenue",
                "x": 82.1,
                "y": 97.9
              },
              {
                "cumpct_pct": 98,
                "cumpct_cust": 82.4,
                "metric_type": "Revenue",
                "x": 82.4,
                "y": 98
              },
              {
                "cumpct_pct": 98,
                "cumpct_cust": 82.4,
                "metric_type": "Revenue",
                "x": 82.4,
                "y": 98
              },
              {
                "cumpct_pct": 98,
                "cumpct_cust": 82.5,
                "metric_type": "Revenue",
                "x": 82.5,
                "y": 98
              },
              {
                "cumpct_pct": 98,
                "cumpct_cust": 82.7,
                "metric_type": "Revenue",
                "x": 82.7,
                "y": 98
              },
              {
                "cumpct_pct": 98,
                "cumpct_cust": 82.7,
                "metric_type": "Revenue",
                "x": 82.7,
                "y": 98
              },
              {
                "cumpct_pct": 98,
                "cumpct_cust": 82.7,
                "metric_type": "Revenue",
                "x": 82.7,
                "y": 98
              },
              {
                "cumpct_pct": 98,
                "cumpct_cust": 82.8,
                "metric_type": "Revenue",
                "x": 82.8,
                "y": 98
              },
              {
                "cumpct_pct": 98.1,
                "cumpct_cust": 83,
                "metric_type": "Revenue",
                "x": 83,
                "y": 98.1
              },
              {
                "cumpct_pct": 98.1,
                "cumpct_cust": 83,
                "metric_type": "Revenue",
                "x": 83,
                "y": 98.1
              },
              {
                "cumpct_pct": 98.1,
                "cumpct_cust": 83.2,
                "metric_type": "Revenue",
                "x": 83.2,
                "y": 98.1
              },
              {
                "cumpct_pct": 98.1,
                "cumpct_cust": 83.3,
                "metric_type": "Revenue",
                "x": 83.3,
                "y": 98.1
              },
              {
                "cumpct_pct": 98.2,
                "cumpct_cust": 83.5,
                "metric_type": "Revenue",
                "x": 83.5,
                "y": 98.2
              },
              {
                "cumpct_pct": 98.2,
                "cumpct_cust": 83.6,
                "metric_type": "Revenue",
                "x": 83.6,
                "y": 98.2
              },
              {
                "cumpct_pct": 98.2,
                "cumpct_cust": 83.8,
                "metric_type": "Revenue",
                "x": 83.8,
                "y": 98.2
              },
              {
                "cumpct_pct": 98.2,
                "cumpct_cust": 83.8,
                "metric_type": "Revenue",
                "x": 83.8,
                "y": 98.2
              },
              {
                "cumpct_pct": 98.2,
                "cumpct_cust": 83.9,
                "metric_type": "Revenue",
                "x": 83.9,
                "y": 98.2
              },
              {
                "cumpct_pct": 98.2,
                "cumpct_cust": 83.9,
                "metric_type": "Revenue",
                "x": 83.9,
                "y": 98.2
              },
              {
                "cumpct_pct": 98.3,
                "cumpct_cust": 84,
                "metric_type": "Revenue",
                "x": 84,
                "y": 98.3
              },
              {
                "cumpct_pct": 98.3,
                "cumpct_cust": 84.1,
                "metric_type": "Revenue",
                "x": 84.1,
                "y": 98.3
              },
              {
                "cumpct_pct": 98.3,
                "cumpct_cust": 84.2,
                "metric_type": "Revenue",
                "x": 84.2,
                "y": 98.3
              },
              {
                "cumpct_pct": 98.3,
                "cumpct_cust": 84.2,
                "metric_type": "Revenue",
                "x": 84.2,
                "y": 98.3
              },
              {
                "cumpct_pct": 98.3,
                "cumpct_cust": 84.2,
                "metric_type": "Revenue",
                "x": 84.2,
                "y": 98.3
              },
              {
                "cumpct_pct": 98.3,
                "cumpct_cust": 84.4,
                "metric_type": "Revenue",
                "x": 84.4,
                "y": 98.3
              },
              {
                "cumpct_pct": 98.3,
                "cumpct_cust": 84.4,
                "metric_type": "Revenue",
                "x": 84.4,
                "y": 98.3
              },
              {
                "cumpct_pct": 98.4,
                "cumpct_cust": 84.7,
                "metric_type": "Revenue",
                "x": 84.7,
                "y": 98.4
              },
              {
                "cumpct_pct": 98.4,
                "cumpct_cust": 84.9,
                "metric_type": "Revenue",
                "x": 84.9,
                "y": 98.4
              },
              {
                "cumpct_pct": 98.5,
                "cumpct_cust": 85,
                "metric_type": "Revenue",
                "x": 85,
                "y": 98.5
              },
              {
                "cumpct_pct": 98.5,
                "cumpct_cust": 85,
                "metric_type": "Revenue",
                "x": 85,
                "y": 98.5
              },
              {
                "cumpct_pct": 98.5,
                "cumpct_cust": 85.2,
                "metric_type": "Revenue",
                "x": 85.2,
                "y": 98.5
              },
              {
                "cumpct_pct": 98.5,
                "cumpct_cust": 85.2,
                "metric_type": "Revenue",
                "x": 85.2,
                "y": 98.5
              },
              {
                "cumpct_pct": 98.5,
                "cumpct_cust": 85.2,
                "metric_type": "Revenue",
                "x": 85.2,
                "y": 98.5
              },
              {
                "cumpct_pct": 98.5,
                "cumpct_cust": 85.3,
                "metric_type": "Revenue",
                "x": 85.3,
                "y": 98.5
              },
              {
                "cumpct_pct": 98.5,
                "cumpct_cust": 85.3,
                "metric_type": "Revenue",
                "x": 85.3,
                "y": 98.5
              },
              {
                "cumpct_pct": 98.5,
                "cumpct_cust": 85.4,
                "metric_type": "Revenue",
                "x": 85.4,
                "y": 98.5
              },
              {
                "cumpct_pct": 98.5,
                "cumpct_cust": 85.4,
                "metric_type": "Revenue",
                "x": 85.4,
                "y": 98.5
              },
              {
                "cumpct_pct": 98.6,
                "cumpct_cust": 85.6,
                "metric_type": "Revenue",
                "x": 85.6,
                "y": 98.6
              },
              {
                "cumpct_pct": 98.6,
                "cumpct_cust": 85.7,
                "metric_type": "Revenue",
                "x": 85.7,
                "y": 98.6
              },
              {
                "cumpct_pct": 98.6,
                "cumpct_cust": 85.9,
                "metric_type": "Revenue",
                "x": 85.9,
                "y": 98.6
              },
              {
                "cumpct_pct": 98.6,
                "cumpct_cust": 86.1,
                "metric_type": "Revenue",
                "x": 86.1,
                "y": 98.6
              },
              {
                "cumpct_pct": 98.7,
                "cumpct_cust": 86.2,
                "metric_type": "Revenue",
                "x": 86.2,
                "y": 98.7
              },
              {
                "cumpct_pct": 98.7,
                "cumpct_cust": 86.3,
                "metric_type": "Revenue",
                "x": 86.3,
                "y": 98.7
              },
              {
                "cumpct_pct": 98.7,
                "cumpct_cust": 86.4,
                "metric_type": "Revenue",
                "x": 86.4,
                "y": 98.7
              },
              {
                "cumpct_pct": 98.7,
                "cumpct_cust": 86.5,
                "metric_type": "Revenue",
                "x": 86.5,
                "y": 98.7
              },
              {
                "cumpct_pct": 98.7,
                "cumpct_cust": 86.6,
                "metric_type": "Revenue",
                "x": 86.6,
                "y": 98.7
              },
              {
                "cumpct_pct": 98.7,
                "cumpct_cust": 86.7,
                "metric_type": "Revenue",
                "x": 86.7,
                "y": 98.7
              },
              {
                "cumpct_pct": 98.7,
                "cumpct_cust": 86.7,
                "metric_type": "Revenue",
                "x": 86.7,
                "y": 98.7
              },
              {
                "cumpct_pct": 98.8,
                "cumpct_cust": 86.7,
                "metric_type": "Revenue",
                "x": 86.7,
                "y": 98.8
              },
              {
                "cumpct_pct": 98.8,
                "cumpct_cust": 86.7,
                "metric_type": "Revenue",
                "x": 86.7,
                "y": 98.8
              },
              {
                "cumpct_pct": 98.8,
                "cumpct_cust": 86.8,
                "metric_type": "Revenue",
                "x": 86.8,
                "y": 98.8
              },
              {
                "cumpct_pct": 98.8,
                "cumpct_cust": 87,
                "metric_type": "Revenue",
                "x": 87,
                "y": 98.8
              },
              {
                "cumpct_pct": 98.8,
                "cumpct_cust": 87,
                "metric_type": "Revenue",
                "x": 87,
                "y": 98.8
              },
              {
                "cumpct_pct": 98.8,
                "cumpct_cust": 87.1,
                "metric_type": "Revenue",
                "x": 87.1,
                "y": 98.8
              },
              {
                "cumpct_pct": 98.9,
                "cumpct_cust": 87.4,
                "metric_type": "Revenue",
                "x": 87.4,
                "y": 98.9
              },
              {
                "cumpct_pct": 98.9,
                "cumpct_cust": 87.4,
                "metric_type": "Revenue",
                "x": 87.4,
                "y": 98.9
              },
              {
                "cumpct_pct": 98.9,
                "cumpct_cust": 87.5,
                "metric_type": "Revenue",
                "x": 87.5,
                "y": 98.9
              },
              {
                "cumpct_pct": 98.9,
                "cumpct_cust": 87.6,
                "metric_type": "Revenue",
                "x": 87.6,
                "y": 98.9
              },
              {
                "cumpct_pct": 98.9,
                "cumpct_cust": 87.7,
                "metric_type": "Revenue",
                "x": 87.7,
                "y": 98.9
              },
              {
                "cumpct_pct": 98.9,
                "cumpct_cust": 87.7,
                "metric_type": "Revenue",
                "x": 87.7,
                "y": 98.9
              },
              {
                "cumpct_pct": 98.9,
                "cumpct_cust": 87.7,
                "metric_type": "Revenue",
                "x": 87.7,
                "y": 98.9
              },
              {
                "cumpct_pct": 98.9,
                "cumpct_cust": 87.8,
                "metric_type": "Revenue",
                "x": 87.8,
                "y": 98.9
              },
              {
                "cumpct_pct": 99,
                "cumpct_cust": 87.8,
                "metric_type": "Revenue",
                "x": 87.8,
                "y": 99
              },
              {
                "cumpct_pct": 99,
                "cumpct_cust": 88,
                "metric_type": "Revenue",
                "x": 88,
                "y": 99
              },
              {
                "cumpct_pct": 99,
                "cumpct_cust": 88,
                "metric_type": "Revenue",
                "x": 88,
                "y": 99
              },
              {
                "cumpct_pct": 99,
                "cumpct_cust": 88,
                "metric_type": "Revenue",
                "x": 88,
                "y": 99
              },
              {
                "cumpct_pct": 99,
                "cumpct_cust": 88,
                "metric_type": "Revenue",
                "x": 88,
                "y": 99
              },
              {
                "cumpct_pct": 99,
                "cumpct_cust": 88.3,
                "metric_type": "Revenue",
                "x": 88.3,
                "y": 99
              },
              {
                "cumpct_pct": 99.1,
                "cumpct_cust": 88.4,
                "metric_type": "Revenue",
                "x": 88.4,
                "y": 99.1
              },
              {
                "cumpct_pct": 99.1,
                "cumpct_cust": 88.5,
                "metric_type": "Revenue",
                "x": 88.5,
                "y": 99.1
              },
              {
                "cumpct_pct": 99.1,
                "cumpct_cust": 88.8,
                "metric_type": "Revenue",
                "x": 88.8,
                "y": 99.1
              },
              {
                "cumpct_pct": 99.1,
                "cumpct_cust": 88.9,
                "metric_type": "Revenue",
                "x": 88.9,
                "y": 99.1
              },
              {
                "cumpct_pct": 99.1,
                "cumpct_cust": 88.9,
                "metric_type": "Revenue",
                "x": 88.9,
                "y": 99.1
              },
              {
                "cumpct_pct": 99.1,
                "cumpct_cust": 89,
                "metric_type": "Revenue",
                "x": 89,
                "y": 99.1
              },
              {
                "cumpct_pct": 99.2,
                "cumpct_cust": 89.1,
                "metric_type": "Revenue",
                "x": 89.1,
                "y": 99.2
              },
              {
                "cumpct_pct": 99.2,
                "cumpct_cust": 89.2,
                "metric_type": "Revenue",
                "x": 89.2,
                "y": 99.2
              },
              {
                "cumpct_pct": 99.2,
                "cumpct_cust": 89.4,
                "metric_type": "Revenue",
                "x": 89.4,
                "y": 99.2
              },
              {
                "cumpct_pct": 99.2,
                "cumpct_cust": 89.7,
                "metric_type": "Revenue",
                "x": 89.7,
                "y": 99.2
              },
              {
                "cumpct_pct": 99.2,
                "cumpct_cust": 89.7,
                "metric_type": "Revenue",
                "x": 89.7,
                "y": 99.2
              },
              {
                "cumpct_pct": 99.3,
                "cumpct_cust": 89.7,
                "metric_type": "Revenue",
                "x": 89.7,
                "y": 99.3
              },
              {
                "cumpct_pct": 99.3,
                "cumpct_cust": 89.7,
                "metric_type": "Revenue",
                "x": 89.7,
                "y": 99.3
              },
              {
                "cumpct_pct": 99.3,
                "cumpct_cust": 89.7,
                "metric_type": "Revenue",
                "x": 89.7,
                "y": 99.3
              },
              {
                "cumpct_pct": 99.3,
                "cumpct_cust": 89.7,
                "metric_type": "Revenue",
                "x": 89.7,
                "y": 99.3
              },
              {
                "cumpct_pct": 99.3,
                "cumpct_cust": 89.8,
                "metric_type": "Revenue",
                "x": 89.8,
                "y": 99.3
              },
              {
                "cumpct_pct": 99.3,
                "cumpct_cust": 89.8,
                "metric_type": "Revenue",
                "x": 89.8,
                "y": 99.3
              },
              {
                "cumpct_pct": 99.3,
                "cumpct_cust": 89.9,
                "metric_type": "Revenue",
                "x": 89.9,
                "y": 99.3
              },
              {
                "cumpct_pct": 99.3,
                "cumpct_cust": 90.1,
                "metric_type": "Revenue",
                "x": 90.1,
                "y": 99.3
              },
              {
                "cumpct_pct": 99.3,
                "cumpct_cust": 90.2,
                "metric_type": "Revenue",
                "x": 90.2,
                "y": 99.3
              },
              {
                "cumpct_pct": 99.3,
                "cumpct_cust": 90.2,
                "metric_type": "Revenue",
                "x": 90.2,
                "y": 99.3
              },
              {
                "cumpct_pct": 99.4,
                "cumpct_cust": 90.5,
                "metric_type": "Revenue",
                "x": 90.5,
                "y": 99.4
              },
              {
                "cumpct_pct": 99.4,
                "cumpct_cust": 90.7,
                "metric_type": "Revenue",
                "x": 90.7,
                "y": 99.4
              },
              {
                "cumpct_pct": 99.4,
                "cumpct_cust": 90.9,
                "metric_type": "Revenue",
                "x": 90.9,
                "y": 99.4
              },
              {
                "cumpct_pct": 99.4,
                "cumpct_cust": 91,
                "metric_type": "Revenue",
                "x": 91,
                "y": 99.4
              },
              {
                "cumpct_pct": 99.5,
                "cumpct_cust": 91.2,
                "metric_type": "Revenue",
                "x": 91.2,
                "y": 99.5
              },
              {
                "cumpct_pct": 99.5,
                "cumpct_cust": 91.3,
                "metric_type": "Revenue",
                "x": 91.3,
                "y": 99.5
              },
              {
                "cumpct_pct": 99.5,
                "cumpct_cust": 91.3,
                "metric_type": "Revenue",
                "x": 91.3,
                "y": 99.5
              },
              {
                "cumpct_pct": 99.5,
                "cumpct_cust": 91.4,
                "metric_type": "Revenue",
                "x": 91.4,
                "y": 99.5
              },
              {
                "cumpct_pct": 99.5,
                "cumpct_cust": 91.4,
                "metric_type": "Revenue",
                "x": 91.4,
                "y": 99.5
              },
              {
                "cumpct_pct": 99.5,
                "cumpct_cust": 91.5,
                "metric_type": "Revenue",
                "x": 91.5,
                "y": 99.5
              },
              {
                "cumpct_pct": 99.5,
                "cumpct_cust": 91.5,
                "metric_type": "Revenue",
                "x": 91.5,
                "y": 99.5
              },
              {
                "cumpct_pct": 99.5,
                "cumpct_cust": 91.6,
                "metric_type": "Revenue",
                "x": 91.6,
                "y": 99.5
              },
              {
                "cumpct_pct": 99.5,
                "cumpct_cust": 91.6,
                "metric_type": "Revenue",
                "x": 91.6,
                "y": 99.5
              },
              {
                "cumpct_pct": 99.5,
                "cumpct_cust": 91.7,
                "metric_type": "Revenue",
                "x": 91.7,
                "y": 99.5
              },
              {
                "cumpct_pct": 99.5,
                "cumpct_cust": 91.8,
                "metric_type": "Revenue",
                "x": 91.8,
                "y": 99.5
              },
              {
                "cumpct_pct": 99.5,
                "cumpct_cust": 91.9,
                "metric_type": "Revenue",
                "x": 91.9,
                "y": 99.5
              },
              {
                "cumpct_pct": 99.6,
                "cumpct_cust": 92,
                "metric_type": "Revenue",
                "x": 92,
                "y": 99.6
              },
              {
                "cumpct_pct": 99.6,
                "cumpct_cust": 92.1,
                "metric_type": "Revenue",
                "x": 92.1,
                "y": 99.6
              },
              {
                "cumpct_pct": 99.6,
                "cumpct_cust": 92.2,
                "metric_type": "Revenue",
                "x": 92.2,
                "y": 99.6
              },
              {
                "cumpct_pct": 99.6,
                "cumpct_cust": 92.3,
                "metric_type": "Revenue",
                "x": 92.3,
                "y": 99.6
              },
              {
                "cumpct_pct": 99.6,
                "cumpct_cust": 92.4,
                "metric_type": "Revenue",
                "x": 92.4,
                "y": 99.6
              },
              {
                "cumpct_pct": 99.6,
                "cumpct_cust": 92.4,
                "metric_type": "Revenue",
                "x": 92.4,
                "y": 99.6
              },
              {
                "cumpct_pct": 99.6,
                "cumpct_cust": 92.5,
                "metric_type": "Revenue",
                "x": 92.5,
                "y": 99.6
              },
              {
                "cumpct_pct": 99.6,
                "cumpct_cust": 92.6,
                "metric_type": "Revenue",
                "x": 92.6,
                "y": 99.6
              },
              {
                "cumpct_pct": 99.6,
                "cumpct_cust": 92.6,
                "metric_type": "Revenue",
                "x": 92.6,
                "y": 99.6
              },
              {
                "cumpct_pct": 99.6,
                "cumpct_cust": 92.6,
                "metric_type": "Revenue",
                "x": 92.6,
                "y": 99.6
              },
              {
                "cumpct_pct": 99.6,
                "cumpct_cust": 92.6,
                "metric_type": "Revenue",
                "x": 92.6,
                "y": 99.6
              },
              {
                "cumpct_pct": 99.6,
                "cumpct_cust": 92.7,
                "metric_type": "Revenue",
                "x": 92.7,
                "y": 99.6
              },
              {
                "cumpct_pct": 99.6,
                "cumpct_cust": 92.8,
                "metric_type": "Revenue",
                "x": 92.8,
                "y": 99.6
              },
              {
                "cumpct_pct": 99.6,
                "cumpct_cust": 92.9,
                "metric_type": "Revenue",
                "x": 92.9,
                "y": 99.6
              },
              {
                "cumpct_pct": 99.6,
                "cumpct_cust": 92.9,
                "metric_type": "Revenue",
                "x": 92.9,
                "y": 99.6
              },
              {
                "cumpct_pct": 99.7,
                "cumpct_cust": 93.2,
                "metric_type": "Revenue",
                "x": 93.2,
                "y": 99.7
              },
              {
                "cumpct_pct": 99.7,
                "cumpct_cust": 93.2,
                "metric_type": "Revenue",
                "x": 93.2,
                "y": 99.7
              },
              {
                "cumpct_pct": 99.7,
                "cumpct_cust": 93.2,
                "metric_type": "Revenue",
                "x": 93.2,
                "y": 99.7
              },
              {
                "cumpct_pct": 99.7,
                "cumpct_cust": 93.4,
                "metric_type": "Revenue",
                "x": 93.4,
                "y": 99.7
              },
              {
                "cumpct_pct": 99.7,
                "cumpct_cust": 93.4,
                "metric_type": "Revenue",
                "x": 93.4,
                "y": 99.7
              },
              {
                "cumpct_pct": 99.7,
                "cumpct_cust": 93.5,
                "metric_type": "Revenue",
                "x": 93.5,
                "y": 99.7
              },
              {
                "cumpct_pct": 99.7,
                "cumpct_cust": 93.6,
                "metric_type": "Revenue",
                "x": 93.6,
                "y": 99.7
              },
              {
                "cumpct_pct": 99.7,
                "cumpct_cust": 93.6,
                "metric_type": "Revenue",
                "x": 93.6,
                "y": 99.7
              },
              {
                "cumpct_pct": 99.7,
                "cumpct_cust": 93.8,
                "metric_type": "Revenue",
                "x": 93.8,
                "y": 99.7
              },
              {
                "cumpct_pct": 99.7,
                "cumpct_cust": 93.8,
                "metric_type": "Revenue",
                "x": 93.8,
                "y": 99.7
              },
              {
                "cumpct_pct": 99.7,
                "cumpct_cust": 93.8,
                "metric_type": "Revenue",
                "x": 93.8,
                "y": 99.7
              },
              {
                "cumpct_pct": 99.7,
                "cumpct_cust": 93.9,
                "metric_type": "Revenue",
                "x": 93.9,
                "y": 99.7
              },
              {
                "cumpct_pct": 99.7,
                "cumpct_cust": 93.9,
                "metric_type": "Revenue",
                "x": 93.9,
                "y": 99.7
              },
              {
                "cumpct_pct": 99.7,
                "cumpct_cust": 93.9,
                "metric_type": "Revenue",
                "x": 93.9,
                "y": 99.7
              },
              {
                "cumpct_pct": 99.7,
                "cumpct_cust": 94,
                "metric_type": "Revenue",
                "x": 94,
                "y": 99.7
              },
              {
                "cumpct_pct": 99.8,
                "cumpct_cust": 94.1,
                "metric_type": "Revenue",
                "x": 94.1,
                "y": 99.8
              },
              {
                "cumpct_pct": 99.8,
                "cumpct_cust": 94.1,
                "metric_type": "Revenue",
                "x": 94.1,
                "y": 99.8
              },
              {
                "cumpct_pct": 99.8,
                "cumpct_cust": 94.2,
                "metric_type": "Revenue",
                "x": 94.2,
                "y": 99.8
              },
              {
                "cumpct_pct": 99.8,
                "cumpct_cust": 94.2,
                "metric_type": "Revenue",
                "x": 94.2,
                "y": 99.8
              },
              {
                "cumpct_pct": 99.8,
                "cumpct_cust": 94.3,
                "metric_type": "Revenue",
                "x": 94.3,
                "y": 99.8
              },
              {
                "cumpct_pct": 99.8,
                "cumpct_cust": 94.5,
                "metric_type": "Revenue",
                "x": 94.5,
                "y": 99.8
              },
              {
                "cumpct_pct": 99.8,
                "cumpct_cust": 94.6,
                "metric_type": "Revenue",
                "x": 94.6,
                "y": 99.8
              },
              {
                "cumpct_pct": 99.8,
                "cumpct_cust": 94.6,
                "metric_type": "Revenue",
                "x": 94.6,
                "y": 99.8
              },
              {
                "cumpct_pct": 99.8,
                "cumpct_cust": 94.9,
                "metric_type": "Revenue",
                "x": 94.9,
                "y": 99.8
              },
              {
                "cumpct_pct": 99.8,
                "cumpct_cust": 95,
                "metric_type": "Revenue",
                "x": 95,
                "y": 99.8
              },
              {
                "cumpct_pct": 99.8,
                "cumpct_cust": 95.1,
                "metric_type": "Revenue",
                "x": 95.1,
                "y": 99.8
              },
              {
                "cumpct_pct": 99.8,
                "cumpct_cust": 95.1,
                "metric_type": "Revenue",
                "x": 95.1,
                "y": 99.8
              },
              {
                "cumpct_pct": 99.8,
                "cumpct_cust": 95.1,
                "metric_type": "Revenue",
                "x": 95.1,
                "y": 99.8
              },
              {
                "cumpct_pct": 99.8,
                "cumpct_cust": 95.3,
                "metric_type": "Revenue",
                "x": 95.3,
                "y": 99.8
              },
              {
                "cumpct_pct": 99.8,
                "cumpct_cust": 95.4,
                "metric_type": "Revenue",
                "x": 95.4,
                "y": 99.8
              },
              {
                "cumpct_pct": 99.8,
                "cumpct_cust": 95.4,
                "metric_type": "Revenue",
                "x": 95.4,
                "y": 99.8
              },
              {
                "cumpct_pct": 99.8,
                "cumpct_cust": 95.4,
                "metric_type": "Revenue",
                "x": 95.4,
                "y": 99.8
              },
              {
                "cumpct_pct": 99.8,
                "cumpct_cust": 95.6,
                "metric_type": "Revenue",
                "x": 95.6,
                "y": 99.8
              },
              {
                "cumpct_pct": 99.9,
                "cumpct_cust": 95.7,
                "metric_type": "Revenue",
                "x": 95.7,
                "y": 99.9
              },
              {
                "cumpct_pct": 99.9,
                "cumpct_cust": 95.8,
                "metric_type": "Revenue",
                "x": 95.8,
                "y": 99.9
              },
              {
                "cumpct_pct": 99.9,
                "cumpct_cust": 95.8,
                "metric_type": "Revenue",
                "x": 95.8,
                "y": 99.9
              },
              {
                "cumpct_pct": 99.9,
                "cumpct_cust": 96.1,
                "metric_type": "Revenue",
                "x": 96.1,
                "y": 99.9
              },
              {
                "cumpct_pct": 99.9,
                "cumpct_cust": 96.6,
                "metric_type": "Revenue",
                "x": 96.6,
                "y": 99.9
              },
              {
                "cumpct_pct": 99.9,
                "cumpct_cust": 96.7,
                "metric_type": "Revenue",
                "x": 96.7,
                "y": 99.9
              },
              {
                "cumpct_pct": 99.9,
                "cumpct_cust": 96.9,
                "metric_type": "Revenue",
                "x": 96.9,
                "y": 99.9
              },
              {
                "cumpct_pct": 99.9,
                "cumpct_cust": 97,
                "metric_type": "Revenue",
                "x": 97,
                "y": 99.9
              },
              {
                "cumpct_pct": 99.9,
                "cumpct_cust": 97.1,
                "metric_type": "Revenue",
                "x": 97.1,
                "y": 99.9
              },
              {
                "cumpct_pct": 99.9,
                "cumpct_cust": 97.1,
                "metric_type": "Revenue",
                "x": 97.1,
                "y": 99.9
              },
              {
                "cumpct_pct": 99.9,
                "cumpct_cust": 97.3,
                "metric_type": "Revenue",
                "x": 97.3,
                "y": 99.9
              },
              {
                "cumpct_pct": 99.9,
                "cumpct_cust": 97.3,
                "metric_type": "Revenue",
                "x": 97.3,
                "y": 99.9
              },
              {
                "cumpct_pct": 99.9,
                "cumpct_cust": 97.5,
                "metric_type": "Revenue",
                "x": 97.5,
                "y": 99.9
              },
              {
                "cumpct_pct": 99.9,
                "cumpct_cust": 97.6,
                "metric_type": "Revenue",
                "x": 97.6,
                "y": 99.9
              },
              {
                "cumpct_pct": 99.9,
                "cumpct_cust": 97.8,
                "metric_type": "Revenue",
                "x": 97.8,
                "y": 99.9
              },
              {
                "cumpct_pct": 99.9,
                "cumpct_cust": 97.9,
                "metric_type": "Revenue",
                "x": 97.9,
                "y": 99.9
              },
              {
                "cumpct_pct": 99.9,
                "cumpct_cust": 97.9,
                "metric_type": "Revenue",
                "x": 97.9,
                "y": 99.9
              },
              {
                "cumpct_pct": 99.9,
                "cumpct_cust": 98.1,
                "metric_type": "Revenue",
                "x": 98.1,
                "y": 99.9
              },
              {
                "cumpct_pct": 99.9,
                "cumpct_cust": 98.3,
                "metric_type": "Revenue",
                "x": 98.3,
                "y": 99.9
              },
              {
                "cumpct_pct": 99.9,
                "cumpct_cust": 98.4,
                "metric_type": "Revenue",
                "x": 98.4,
                "y": 99.9
              },
              {
                "cumpct_pct": 99.9,
                "cumpct_cust": 98.4,
                "metric_type": "Revenue",
                "x": 98.4,
                "y": 99.9
              },
              {
                "cumpct_pct": 100,
                "cumpct_cust": 98.5,
                "metric_type": "Revenue",
                "x": 98.5,
                "y": 100
              },
              {
                "cumpct_pct": 100,
                "cumpct_cust": 98.5,
                "metric_type": "Revenue",
                "x": 98.5,
                "y": 100
              },
              {
                "cumpct_pct": 100,
                "cumpct_cust": 98.6,
                "metric_type": "Revenue",
                "x": 98.6,
                "y": 100
              },
              {
                "cumpct_pct": 100,
                "cumpct_cust": 98.7,
                "metric_type": "Revenue",
                "x": 98.7,
                "y": 100
              },
              {
                "cumpct_pct": 100,
                "cumpct_cust": 98.8,
                "metric_type": "Revenue",
                "x": 98.8,
                "y": 100
              },
              {
                "cumpct_pct": 100,
                "cumpct_cust": 98.9,
                "metric_type": "Revenue",
                "x": 98.9,
                "y": 100
              },
              {
                "cumpct_pct": 100,
                "cumpct_cust": 98.9,
                "metric_type": "Revenue",
                "x": 98.9,
                "y": 100
              },
              {
                "cumpct_pct": 100,
                "cumpct_cust": 98.9,
                "metric_type": "Revenue",
                "x": 98.9,
                "y": 100
              },
              {
                "cumpct_pct": 100,
                "cumpct_cust": 99,
                "metric_type": "Revenue",
                "x": 99,
                "y": 100
              },
              {
                "cumpct_pct": 100,
                "cumpct_cust": 99.1,
                "metric_type": "Revenue",
                "x": 99.1,
                "y": 100
              },
              {
                "cumpct_pct": 100,
                "cumpct_cust": 99.6,
                "metric_type": "Revenue",
                "x": 99.6,
                "y": 100
              },
              {
                "cumpct_pct": 100,
                "cumpct_cust": 99.7,
                "metric_type": "Revenue",
                "x": 99.7,
                "y": 100
              },
              {
                "cumpct_pct": 100,
                "cumpct_cust": 99.9,
                "metric_type": "Revenue",
                "x": 99.9,
                "y": 100
              },
              {
                "cumpct_pct": 100,
                "cumpct_cust": 99.9,
                "metric_type": "Revenue",
                "x": 99.9,
                "y": 100
              }
            ],
            "type": "line"
          },
          {
            "group": "group",
            "color": '#6297AB',
            "data": [
              {
                "x": 0,
                "y": 0
              },
              {
                "x": 100,
                "y": 100
              }
            ],
            "type": "line",
            "name": "Line of perfect value diversity",
            "lineWidth": 1
          }
        ],
        "xAxis": {
          "type": "linear",
          "title": {
            "text": "% of Customers"
          },
          "max": 100
        },
        // "subtitle": {
        //   "text": "<span style=\"color:#4B4BE6\">Lifetime Revenue (5 Yr)<\/span> &\n<span style=\"color:#BD10E0\">Revenue<\/span> concentration plots.\n20% of customers account for 55.4% of\n   LTV and 59% of\n   Revenue.",
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
        "tooltip": {
          "crosshairs": true,
          "shared": false,
          "useHTML": true,
          "headerFormat": "",
          "pointFormat": "{point.x}% of customers bring in {point.y}% of {point.metric_type}"
        }

      });

    }

  },
};
</script>

<style>



</style>
