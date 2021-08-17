<template>
  <div class="bg-white rounded shadow p-1 py-5 px-4">
    <div class="font-gillSans text-left pl-10 flex space-x-4 ">
      <div class="pt-1">
        <div class="rounded-100 w-8 h-8 grid place-items-center bg-1b text-white">
          <i class="far fa-chart-line text-xl"></i>
        </div>
      </div>
      <div>
        <span class="text-2xl">Customer Cohort Survival / Subsequent Retention  </span>
        <br />
        <span class="text-xl">Simple Description</span>
      </div>
    </div>
    <figure class="highcharts-figure">
      <div id="CustomCohortSurvival"></div>
    </figure>
  </div>
</template>

<script>
// import Highcharts from "highcharts";
export default {
  name: "CustomCohortSurvival",
  data() {
    return {

    };
  },
  mounted() {
    this.waterFallChart()
  },
  methods: {
    waterFallChart() {
      window.Highcharts.chart('CustomCohortSurvival', {
        title: {
          text: 'Customer Cohort Retention chart',
          //  margin: 50,
          align: 'left',
          style: { "font-family": "Gill sans", "font-size": "18px" }
        },

        // subtitle: {
        //   text: 'This chart shows how customers survive from their first month to the next.',
        //   align: 'left',
        //   style: { "font-family": "Gill sans", "font-size": "14px","padding-left":"40px"  }
        // },
        "yAxis": {
          "title": {
            "text": "Percent Cumulative Survival"
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
          "line": {
            "marker": {
              "enabled": false
            }
          },
          "spline": {
            "marker": {
              "enabled": false
            }
          },
          "area": {
            "marker": {
              "enabled": false
            }
          },
          "areaspline": {
            "marker": {
              "enabled": false
            }
          },
          "arearange": {
            "marker": {
              "enabled": false
            }
          },
          "bubble": {
            "maxSize": "10%"
          }
        },
        "series": [
          {
            "name": "2018",
            "data": [
              {
                "cohort": "2018",
                "percent": 100,
                "period": 0,
                "x": 0,
                "y": 100
              },
              {
                "cohort": "2018",
                "percent": 76,
                "period": 1,
                "x": 1,
                "y": 76
              },
              {
                "cohort": "2018",
                "percent": 73.7,
                "period": 2,
                "x": 2,
                "y": 73.7
              },
              {
                "cohort": "2018",
                "percent": 72.2,
                "period": 3,
                "x": 3,
                "y": 72.2
              },
              {
                "cohort": "2018",
                "percent": 69.8,
                "period": 4,
                "x": 4,
                "y": 69.8
              },
              {
                "cohort": "2018",
                "percent": 67.7,
                "period": 5,
                "x": 5,
                "y": 67.7
              },
              {
                "cohort": "2018",
                "percent": 65.3,
                "period": 6,
                "x": 6,
                "y": 65.3
              },
              {
                "cohort": "2018",
                "percent": 61.6,
                "period": 7,
                "x": 7,
                "y": 61.6
              },
              {
                "cohort": "2018",
                "percent": 60.1,
                "period": 8,
                "x": 8,
                "y": 60.1
              },
              {
                "cohort": "2018",
                "percent": 58.2,
                "period": 9,
                "x": 9,
                "y": 58.2
              },
              {
                "cohort": "2018",
                "percent": 55.8,
                "period": 10,
                "x": 10,
                "y": 55.8
              },
              {
                "cohort": "2018",
                "percent": 53.4,
                "period": 11,
                "x": 11,
                "y": 53.4
              },
              {
                "cohort": "2018",
                "percent": 52.1,
                "period": 12,
                "x": 12,
                "y": 52.1
              },
              {
                "cohort": "2018",
                "percent": 49.5,
                "period": 13,
                "x": 13,
                "y": 49.5
              },
              {
                "cohort": "2018",
                "percent": 48.2,
                "period": 14,
                "x": 14,
                "y": 48.2
              },
              {
                "cohort": "2018",
                "percent": 46.8,
                "period": 15,
                "x": 15,
                "y": 46.8
              },
              {
                "cohort": "2018",
                "percent": 44.8,
                "period": 16,
                "x": 16,
                "y": 44.8
              },
              {
                "cohort": "2018",
                "percent": 43.4,
                "period": 17,
                "x": 17,
                "y": 43.4
              },
              {
                "cohort": "2018",
                "percent": 42.1,
                "period": 18,
                "x": 18,
                "y": 42.1
              },
              {
                "cohort": "2018",
                "percent": 40,
                "period": 19,
                "x": 19,
                "y": 40
              },
              {
                "cohort": "2018",
                "percent": 38.6,
                "period": 20,
                "x": 20,
                "y": 38.6
              },
              {
                "cohort": "2018",
                "percent": 36.6,
                "period": 21,
                "x": 21,
                "y": 36.6
              },
              {
                "cohort": "2018",
                "percent": 34.8,
                "period": 22,
                "x": 22,
                "y": 34.8
              },
              {
                "cohort": "2018",
                "percent": 33.3,
                "period": 23,
                "x": 23,
                "y": 33.3
              },
              {
                "cohort": "2018",
                "percent": 31.6,
                "period": 24,
                "x": 24,
                "y": 31.6
              }
            ],
            "type": "spline"
          },
          {
            "name": "2019",
            "data": [
              {
                "cohort": "2019",
                "percent": 100,
                "period": 0,
                "x": 0,
                "y": 100
              },
              {
                "cohort": "2019",
                "percent": 53.3,
                "period": 1,
                "x": 1,
                "y": 53.3
              },
              {
                "cohort": "2019",
                "percent": 47.3,
                "period": 2,
                "x": 2,
                "y": 47.3
              },
              {
                "cohort": "2019",
                "percent": 45.6,
                "period": 3,
                "x": 3,
                "y": 45.6
              },
              {
                "cohort": "2019",
                "percent": 43.3,
                "period": 4,
                "x": 4,
                "y": 43.3
              },
              {
                "cohort": "2019",
                "percent": 41,
                "period": 5,
                "x": 5,
                "y": 41
              },
              {
                "cohort": "2019",
                "percent": 38.6,
                "period": 6,
                "x": 6,
                "y": 38.6
              },
              {
                "cohort": "2019",
                "percent": 35.6,
                "period": 7,
                "x": 7,
                "y": 35.6
              },
              {
                "cohort": "2019",
                "percent": 33.6,
                "period": 8,
                "x": 8,
                "y": 33.6
              },
              {
                "cohort": "2019",
                "percent": 32.1,
                "period": 9,
                "x": 9,
                "y": 32.1
              },
              {
                "cohort": "2019",
                "percent": 30.4,
                "period": 10,
                "x": 10,
                "y": 30.4
              },
              {
                "cohort": "2019",
                "percent": 28.1,
                "period": 11,
                "x": 11,
                "y": 28.1
              },
              {
                "cohort": "2019",
                "percent": 26.2,
                "period": 12,
                "x": 12,
                "y": 26.2
              },
              {
                "cohort": "2019",
                "percent": 23.6,
                "period": 13,
                "x": 13,
                "y": 23.6
              },
              {
                "cohort": "2019",
                "percent": 21.8,
                "period": 14,
                "x": 14,
                "y": 21.8
              },
              {
                "cohort": "2019",
                "percent": 20.2,
                "period": 15,
                "x": 15,
                "y": 20.2
              },
              {
                "cohort": "2019",
                "percent": 17.2,
                "period": 16,
                "x": 16,
                "y": 17.2
              },
              {
                "cohort": "2019",
                "percent": 14.6,
                "period": 17,
                "x": 17,
                "y": 14.6
              },
              {
                "cohort": "2019",
                "percent": 12.9,
                "period": 18,
                "x": 18,
                "y": 12.9
              },
              {
                "cohort": "2019",
                "percent": 10.6,
                "period": 19,
                "x": 19,
                "y": 10.6
              },
              {
                "cohort": "2019",
                "percent": 9,
                "period": 20,
                "x": 20,
                "y": 9
              },
              {
                "cohort": "2019",
                "percent": 7.2,
                "period": 21,
                "x": 21,
                "y": 7.2
              },
              {
                "cohort": "2019",
                "percent": 5.6,
                "period": 22,
                "x": 22,
                "y": 5.6
              },
              {
                "cohort": "2019",
                "percent": 4.2,
                "period": 23,
                "x": 23,
                "y": 4.2
              },
              {
                "cohort": "2019",
                "percent": 3,
                "period": 24,
                "x": 24,
                "y": 3
              }
            ],
            "type": "spline"
          },
          {
            "name": "2020",
            "data": [
              {
                "cohort": "2020",
                "percent": 100,
                "period": 0,
                "x": 0,
                "y": 100
              },
              {
                "cohort": "2020",
                "percent": 52.8,
                "period": 1,
                "x": 1,
                "y": 52.8
              },
              {
                "cohort": "2020",
                "percent": 45.6,
                "period": 2,
                "x": 2,
                "y": 45.6
              },
              {
                "cohort": "2020",
                "percent": 43.6,
                "period": 3,
                "x": 3,
                "y": 43.6
              },
              {
                "cohort": "2020",
                "percent": 40.7,
                "period": 4,
                "x": 4,
                "y": 40.7
              },
              {
                "cohort": "2020",
                "percent": 37.7,
                "period": 5,
                "x": 5,
                "y": 37.7
              },
              {
                "cohort": "2020",
                "percent": 34.6,
                "period": 6,
                "x": 6,
                "y": 34.6
              },
              {
                "cohort": "2020",
                "percent": 31,
                "period": 7,
                "x": 7,
                "y": 31
              },
              {
                "cohort": "2020",
                "percent": 28.4,
                "period": 8,
                "x": 8,
                "y": 28.4
              },
              {
                "cohort": "2020",
                "percent": 26.3,
                "period": 9,
                "x": 9,
                "y": 26.3
              },
              {
                "cohort": "2020",
                "percent": 22.6,
                "period": 10,
                "x": 10,
                "y": 22.6
              },
              {
                "cohort": "2020",
                "percent": 17,
                "period": 11,
                "x": 11,
                "y": 17
              },
              {
                "cohort": "2020",
                "percent": 12.8,
                "period": 12,
                "x": 12,
                "y": 12.8
              },
              {
                "cohort": "2020",
                "percent": 6.2,
                "period": 13,
                "x": 13,
                "y": 6.2
              },
              {
                "cohort": "2020",
                "percent": 2.5,
                "period": 14,
                "x": 14,
                "y": 2.5
              },
              {
                "cohort": "2020",
                "percent": 0.6,
                "period": 15,
                "x": 15,
                "y": 0.6
              },
              {
                "cohort": "2020",
                "percent": 0,
                "period": 16,
                "x": 16,
                "y": 0
              },
              {
                "cohort": "2020",
                "percent": 0,
                "period": 17,
                "x": 17,
                "y": 0
              },
              {
                "cohort": "2020",
                "percent": 0,
                "period": 18,
                "x": 18,
                "y": 0
              },
              {
                "cohort": "2020",
                "percent": 0,
                "period": 19,
                "x": 19,
                "y": 0
              },
              {
                "cohort": "2020",
                "percent": 0,
                "period": 20,
                "x": 20,
                "y": 0
              },
              {
                "cohort": "2020",
                "percent": 0,
                "period": 21,
                "x": 21,
                "y": 0
              },
              {
                "cohort": "2020",
                "percent": 0,
                "period": 22,
                "x": 22,
                "y": 0
              },
              {
                "cohort": "2020",
                "percent": 0,
                "period": 23,
                "x": 23,
                "y": 0
              },
              {
                "cohort": "2020",
                "percent": 0,
                "period": 24,
                "x": 24,
                "y": 0
              }
            ],
            "type": "spline"
          },
          {
            "name": "2020-Q2",
            "data": [
              {
                "cohort": "2020-Q2",
                "percent": 100,
                "period": 0,
                "x": 0,
                "y": 100
              },
              {
                "cohort": "2020-Q2",
                "percent": 54.1,
                "period": 1,
                "x": 1,
                "y": 54.1
              },
              {
                "cohort": "2020-Q2",
                "percent": 44.9,
                "period": 2,
                "x": 2,
                "y": 44.9
              },
              {
                "cohort": "2020-Q2",
                "percent": 42.6,
                "period": 3,
                "x": 3,
                "y": 42.6
              },
              {
                "cohort": "2020-Q2",
                "percent": 39.5,
                "period": 4,
                "x": 4,
                "y": 39.5
              },
              {
                "cohort": "2020-Q2",
                "percent": 36,
                "period": 5,
                "x": 5,
                "y": 36
              },
              {
                "cohort": "2020-Q2",
                "percent": 32,
                "period": 6,
                "x": 6,
                "y": 32
              },
              {
                "cohort": "2020-Q2",
                "percent": 26.2,
                "period": 7,
                "x": 7,
                "y": 26.2
              },
              {
                "cohort": "2020-Q2",
                "percent": 21.5,
                "period": 8,
                "x": 8,
                "y": 21.5
              },
              {
                "cohort": "2020-Q2",
                "percent": 17.5,
                "period": 9,
                "x": 9,
                "y": 17.5
              },
              {
                "cohort": "2020-Q2",
                "percent": 10.6,
                "period": 10,
                "x": 10,
                "y": 10.6
              },
              {
                "cohort": "2020-Q2",
                "percent": 4.1,
                "period": 11,
                "x": 11,
                "y": 4.1
              },
              {
                "cohort": "2020-Q2",
                "percent": 0.4,
                "period": 12,
                "x": 12,
                "y": 0.4
              },
              {
                "cohort": "2020-Q2",
                "percent": 0,
                "period": 13,
                "x": 13,
                "y": 0
              },
              {
                "cohort": "2020-Q2",
                "percent": 0,
                "period": 14,
                "x": 14,
                "y": 0
              },
              {
                "cohort": "2020-Q2",
                "percent": 0,
                "period": 15,
                "x": 15,
                "y": 0
              },
              {
                "cohort": "2020-Q2",
                "percent": 0,
                "period": 16,
                "x": 16,
                "y": 0
              },
              {
                "cohort": "2020-Q2",
                "percent": 0,
                "period": 17,
                "x": 17,
                "y": 0
              },
              {
                "cohort": "2020-Q2",
                "percent": 0,
                "period": 18,
                "x": 18,
                "y": 0
              },
              {
                "cohort": "2020-Q2",
                "percent": 0,
                "period": 19,
                "x": 19,
                "y": 0
              },
              {
                "cohort": "2020-Q2",
                "percent": 0,
                "period": 20,
                "x": 20,
                "y": 0
              },
              {
                "cohort": "2020-Q2",
                "percent": 0,
                "period": 21,
                "x": 21,
                "y": 0
              },
              {
                "cohort": "2020-Q2",
                "percent": 0,
                "period": 22,
                "x": 22,
                "y": 0
              },
              {
                "cohort": "2020-Q2",
                "percent": 0,
                "period": 23,
                "x": 23,
                "y": 0
              },
              {
                "cohort": "2020-Q2",
                "percent": 0,
                "period": 24,
                "x": 24,
                "y": 0
              }
            ],
            "type": "spline"
          },
          {
            "name": "2020-Q3",
            "data": [
              {
                "cohort": "2020-Q3",
                "percent": 100,
                "period": 0,
                "x": 0,
                "y": 100
              },
              {
                "cohort": "2020-Q3",
                "percent": 44.2,
                "period": 1,
                "x": 1,
                "y": 44.2
              },
              {
                "cohort": "2020-Q3",
                "percent": 37.9,
                "period": 2,
                "x": 2,
                "y": 37.9
              },
              {
                "cohort": "2020-Q3",
                "percent": 35.9,
                "period": 3,
                "x": 3,
                "y": 35.9
              },
              {
                "cohort": "2020-Q3",
                "percent": 32,
                "period": 4,
                "x": 4,
                "y": 32
              },
              {
                "cohort": "2020-Q3",
                "percent": 27,
                "period": 5,
                "x": 5,
                "y": 27
              },
              {
                "cohort": "2020-Q3",
                "percent": 20.9,
                "period": 6,
                "x": 6,
                "y": 20.9
              },
              {
                "cohort": "2020-Q3",
                "percent": 10.4,
                "period": 7,
                "x": 7,
                "y": 10.4
              },
              {
                "cohort": "2020-Q3",
                "percent": 2.8,
                "period": 8,
                "x": 8,
                "y": 2.8
              },
              {
                "cohort": "2020-Q3",
                "percent": 0.6,
                "period": 9,
                "x": 9,
                "y": 0.6
              },
              {
                "cohort": "2020-Q3",
                "percent": 0,
                "period": 10,
                "x": 10,
                "y": 0
              },
              {
                "cohort": "2020-Q3",
                "percent": 0,
                "period": 11,
                "x": 11,
                "y": 0
              },
              {
                "cohort": "2020-Q3",
                "percent": 0,
                "period": 12,
                "x": 12,
                "y": 0
              },
              {
                "cohort": "2020-Q3",
                "percent": 0,
                "period": 13,
                "x": 13,
                "y": 0
              },
              {
                "cohort": "2020-Q3",
                "percent": 0,
                "period": 14,
                "x": 14,
                "y": 0
              },
              {
                "cohort": "2020-Q3",
                "percent": 0,
                "period": 15,
                "x": 15,
                "y": 0
              },
              {
                "cohort": "2020-Q3",
                "percent": 0,
                "period": 16,
                "x": 16,
                "y": 0
              },
              {
                "cohort": "2020-Q3",
                "percent": 0,
                "period": 17,
                "x": 17,
                "y": 0
              },
              {
                "cohort": "2020-Q3",
                "percent": 0,
                "period": 18,
                "x": 18,
                "y": 0
              },
              {
                "cohort": "2020-Q3",
                "percent": 0,
                "period": 19,
                "x": 19,
                "y": 0
              },
              {
                "cohort": "2020-Q3",
                "percent": 0,
                "period": 20,
                "x": 20,
                "y": 0
              },
              {
                "cohort": "2020-Q3",
                "percent": 0,
                "period": 21,
                "x": 21,
                "y": 0
              },
              {
                "cohort": "2020-Q3",
                "percent": 0,
                "period": 22,
                "x": 22,
                "y": 0
              },
              {
                "cohort": "2020-Q3",
                "percent": 0,
                "period": 23,
                "x": 23,
                "y": 0
              },
              {
                "cohort": "2020-Q3",
                "percent": 0,
                "period": 24,
                "x": 24,
                "y": 0
              }
            ],
            "type": "spline"
          },
          {
            "name": "2020-Q4",
            "data": [
              {
                "cohort": "2020-Q4",
                "percent": 100,
                "period": 0,
                "x": 0,
                "y": 100
              },
              {
                "cohort": "2020-Q4",
                "percent": 41.6,
                "period": 1,
                "x": 1,
                "y": 41.6
              },
              {
                "cohort": "2020-Q4",
                "percent": 27.7,
                "period": 2,
                "x": 2,
                "y": 27.7
              },
              {
                "cohort": "2020-Q4",
                "percent": 24.1,
                "period": 3,
                "x": 3,
                "y": 24.1
              },
              {
                "cohort": "2020-Q4",
                "percent": 13.7,
                "period": 4,
                "x": 4,
                "y": 13.7
              },
              {
                "cohort": "2020-Q4",
                "percent": 5,
                "period": 5,
                "x": 5,
                "y": 5
              },
              {
                "cohort": "2020-Q4",
                "percent": 0.9,
                "period": 6,
                "x": 6,
                "y": 0.9
              },
              {
                "cohort": "2020-Q4",
                "percent": 0,
                "period": 7,
                "x": 7,
                "y": 0
              },
              {
                "cohort": "2020-Q4",
                "percent": 0,
                "period": 8,
                "x": 8,
                "y": 0
              },
              {
                "cohort": "2020-Q4",
                "percent": 0,
                "period": 9,
                "x": 9,
                "y": 0
              },
              {
                "cohort": "2020-Q4",
                "percent": 0,
                "period": 10,
                "x": 10,
                "y": 0
              },
              {
                "cohort": "2020-Q4",
                "percent": 0,
                "period": 11,
                "x": 11,
                "y": 0
              },
              {
                "cohort": "2020-Q4",
                "percent": 0,
                "period": 12,
                "x": 12,
                "y": 0
              },
              {
                "cohort": "2020-Q4",
                "percent": 0,
                "period": 13,
                "x": 13,
                "y": 0
              },
              {
                "cohort": "2020-Q4",
                "percent": 0,
                "period": 14,
                "x": 14,
                "y": 0
              },
              {
                "cohort": "2020-Q4",
                "percent": 0,
                "period": 15,
                "x": 15,
                "y": 0
              },
              {
                "cohort": "2020-Q4",
                "percent": 0,
                "period": 16,
                "x": 16,
                "y": 0
              },
              {
                "cohort": "2020-Q4",
                "percent": 0,
                "period": 17,
                "x": 17,
                "y": 0
              },
              {
                "cohort": "2020-Q4",
                "percent": 0,
                "period": 18,
                "x": 18,
                "y": 0
              },
              {
                "cohort": "2020-Q4",
                "percent": 0,
                "period": 19,
                "x": 19,
                "y": 0
              },
              {
                "cohort": "2020-Q4",
                "percent": 0,
                "period": 20,
                "x": 20,
                "y": 0
              },
              {
                "cohort": "2020-Q4",
                "percent": 0,
                "period": 21,
                "x": 21,
                "y": 0
              },
              {
                "cohort": "2020-Q4",
                "percent": 0,
                "period": 22,
                "x": 22,
                "y": 0
              },
              {
                "cohort": "2020-Q4",
                "percent": 0,
                "period": 23,
                "x": 23,
                "y": 0
              },
              {
                "cohort": "2020-Q4",
                "percent": 0,
                "period": 24,
                "x": 24,
                "y": 0
              }
            ],
            "type": "spline"
          },
          {
            "name": "2021-Q1",
            "data": [
              {
                "cohort": "2021-Q1",
                "percent": 100,
                "period": 0,
                "x": 0,
                "y": 100
              },
              {
                "cohort": "2021-Q1",
                "percent": 24.9,
                "period": 1,
                "x": 1,
                "y": 24.9
              },
              {
                "cohort": "2021-Q1",
                "percent": 4.5,
                "period": 2,
                "x": 2,
                "y": 4.5
              },
              {
                "cohort": "2021-Q1",
                "percent": 1,
                "period": 3,
                "x": 3,
                "y": 1
              },
              {
                "cohort": "2021-Q1",
                "percent": 0,
                "period": 4,
                "x": 4,
                "y": 0
              },
              {
                "cohort": "2021-Q1",
                "percent": 0,
                "period": 5,
                "x": 5,
                "y": 0
              },
              {
                "cohort": "2021-Q1",
                "percent": 0,
                "period": 6,
                "x": 6,
                "y": 0
              },
              {
                "cohort": "2021-Q1",
                "percent": 0,
                "period": 7,
                "x": 7,
                "y": 0
              },
              {
                "cohort": "2021-Q1",
                "percent": 0,
                "period": 8,
                "x": 8,
                "y": 0
              },
              {
                "cohort": "2021-Q1",
                "percent": 0,
                "period": 9,
                "x": 9,
                "y": 0
              },
              {
                "cohort": "2021-Q1",
                "percent": 0,
                "period": 10,
                "x": 10,
                "y": 0
              },
              {
                "cohort": "2021-Q1",
                "percent": 0,
                "period": 11,
                "x": 11,
                "y": 0
              },
              {
                "cohort": "2021-Q1",
                "percent": 0,
                "period": 12,
                "x": 12,
                "y": 0
              },
              {
                "cohort": "2021-Q1",
                "percent": 0,
                "period": 13,
                "x": 13,
                "y": 0
              },
              {
                "cohort": "2021-Q1",
                "percent": 0,
                "period": 14,
                "x": 14,
                "y": 0
              },
              {
                "cohort": "2021-Q1",
                "percent": 0,
                "period": 15,
                "x": 15,
                "y": 0
              },
              {
                "cohort": "2021-Q1",
                "percent": 0,
                "period": 16,
                "x": 16,
                "y": 0
              },
              {
                "cohort": "2021-Q1",
                "percent": 0,
                "period": 17,
                "x": 17,
                "y": 0
              },
              {
                "cohort": "2021-Q1",
                "percent": 0,
                "period": 18,
                "x": 18,
                "y": 0
              },
              {
                "cohort": "2021-Q1",
                "percent": 0,
                "period": 19,
                "x": 19,
                "y": 0
              },
              {
                "cohort": "2021-Q1",
                "percent": 0,
                "period": 20,
                "x": 20,
                "y": 0
              },
              {
                "cohort": "2021-Q1",
                "percent": 0,
                "period": 21,
                "x": 21,
                "y": 0
              },
              {
                "cohort": "2021-Q1",
                "percent": 0,
                "period": 22,
                "x": 22,
                "y": 0
              },
              {
                "cohort": "2021-Q1",
                "percent": 0,
                "period": 23,
                "x": 23,
                "y": 0
              },
              {
                "cohort": "2021-Q1",
                "percent": 0,
                "period": 24,
                "x": 24,
                "y": 0
              }
            ],
            "type": "spline"
          },
          {
            "name": "2021-Q2",
            "data": [
              {
                "cohort": "2021-Q2",
                "percent": 100,
                "period": 0,
                "x": 0,
                "y": 100
              },
              {
                "cohort": "2021-Q2",
                "percent": 0,
                "period": 1,
                "x": 1,
                "y": 0
              },
              {
                "cohort": "2021-Q2",
                "percent": 0,
                "period": 2,
                "x": 2,
                "y": 0
              },
              {
                "cohort": "2021-Q2",
                "percent": 0,
                "period": 3,
                "x": 3,
                "y": 0
              },
              {
                "cohort": "2021-Q2",
                "percent": 0,
                "period": 4,
                "x": 4,
                "y": 0
              },
              {
                "cohort": "2021-Q2",
                "percent": 0,
                "period": 5,
                "x": 5,
                "y": 0
              },
              {
                "cohort": "2021-Q2",
                "percent": 0,
                "period": 6,
                "x": 6,
                "y": 0
              },
              {
                "cohort": "2021-Q2",
                "percent": 0,
                "period": 7,
                "x": 7,
                "y": 0
              },
              {
                "cohort": "2021-Q2",
                "percent": 0,
                "period": 8,
                "x": 8,
                "y": 0
              },
              {
                "cohort": "2021-Q2",
                "percent": 0,
                "period": 9,
                "x": 9,
                "y": 0
              },
              {
                "cohort": "2021-Q2",
                "percent": 0,
                "period": 10,
                "x": 10,
                "y": 0
              },
              {
                "cohort": "2021-Q2",
                "percent": 0,
                "period": 11,
                "x": 11,
                "y": 0
              },
              {
                "cohort": "2021-Q2",
                "percent": 0,
                "period": 12,
                "x": 12,
                "y": 0
              },
              {
                "cohort": "2021-Q2",
                "percent": 0,
                "period": 13,
                "x": 13,
                "y": 0
              },
              {
                "cohort": "2021-Q2",
                "percent": 0,
                "period": 14,
                "x": 14,
                "y": 0
              },
              {
                "cohort": "2021-Q2",
                "percent": 0,
                "period": 15,
                "x": 15,
                "y": 0
              },
              {
                "cohort": "2021-Q2",
                "percent": 0,
                "period": 16,
                "x": 16,
                "y": 0
              },
              {
                "cohort": "2021-Q2",
                "percent": 0,
                "period": 17,
                "x": 17,
                "y": 0
              },
              {
                "cohort": "2021-Q2",
                "percent": 0,
                "period": 18,
                "x": 18,
                "y": 0
              },
              {
                "cohort": "2021-Q2",
                "percent": 0,
                "period": 19,
                "x": 19,
                "y": 0
              },
              {
                "cohort": "2021-Q2",
                "percent": 0,
                "period": 20,
                "x": 20,
                "y": 0
              },
              {
                "cohort": "2021-Q2",
                "percent": 0,
                "period": 21,
                "x": 21,
                "y": 0
              },
              {
                "cohort": "2021-Q2",
                "percent": 0,
                "period": 22,
                "x": 22,
                "y": 0
              },
              {
                "cohort": "2021-Q2",
                "percent": 0,
                "period": 23,
                "x": 23,
                "y": 0
              },
              {
                "cohort": "2021-Q2",
                "percent": 0,
                "period": 24,
                "x": 24,
                "y": 0
              }
            ],
            "type": "spline"
          },
          {
            "group": "group",
            "data": [
              {
                "percent": 100,
                "period": 0,
                "cohort": "Average",
                "x": 0,
                "y": 100
              },
              {
                "percent": 61.7,
                "period": 1,
                "cohort": "Average",
                "x": 1,
                "y": 61.7
              },
              {
                "percent": 56.4,
                "period": 2,
                "cohort": "Average",
                "x": 2,
                "y": 56.4
              },
              {
                "percent": 54.6,
                "period": 3,
                "cohort": "Average",
                "x": 3,
                "y": 54.6
              },
              {
                "percent": 51.7,
                "period": 4,
                "cohort": "Average",
                "x": 4,
                "y": 51.7
              },
              {
                "percent": 49.1,
                "period": 5,
                "cohort": "Average",
                "x": 5,
                "y": 49.1
              },
              {
                "percent": 46.4,
                "period": 6,
                "cohort": "Average",
                "x": 6,
                "y": 46.4
              },
              {
                "percent": 42.6,
                "period": 7,
                "cohort": "Average",
                "x": 7,
                "y": 42.6
              },
              {
                "percent": 40.5,
                "period": 8,
                "cohort": "Average",
                "x": 8,
                "y": 40.5
              },
              {
                "percent": 38.8,
                "period": 9,
                "cohort": "Average",
                "x": 9,
                "y": 38.8
              },
              {
                "percent": 36.6,
                "period": 10,
                "cohort": "Average",
                "x": 10,
                "y": 36.6
              },
              {
                "percent": 34.1,
                "period": 11,
                "cohort": "Average",
                "x": 11,
                "y": 34.1
              },
              {
                "percent": 32.5,
                "period": 12,
                "cohort": "Average",
                "x": 12,
                "y": 32.5
              },
              {
                "percent": 30.1,
                "period": 13,
                "cohort": "Average",
                "x": 13,
                "y": 30.1
              },
              {
                "percent": 28.8,
                "period": 14,
                "cohort": "Average",
                "x": 14,
                "y": 28.8
              },
              {
                "percent": 27.5,
                "period": 15,
                "cohort": "Average",
                "x": 15,
                "y": 27.5
              },
              {
                "percent": 25.7,
                "period": 16,
                "cohort": "Average",
                "x": 16,
                "y": 25.7
              },
              {
                "percent": 24.3,
                "period": 17,
                "cohort": "Average",
                "x": 17,
                "y": 24.3
              },
              {
                "percent": 23.2,
                "period": 18,
                "cohort": "Average",
                "x": 18,
                "y": 23.2
              },
              {
                "percent": 21.6,
                "period": 19,
                "cohort": "Average",
                "x": 19,
                "y": 21.6
              },
              {
                "percent": 20.4,
                "period": 20,
                "cohort": "Average",
                "x": 20,
                "y": 20.4
              },
              {
                "percent": 19,
                "period": 21,
                "cohort": "Average",
                "x": 21,
                "y": 19
              },
              {
                "percent": 17.7,
                "period": 22,
                "cohort": "Average",
                "x": 22,
                "y": 17.7
              },
              {
                "percent": 16.6,
                "period": 23,
                "cohort": "Average",
                "x": 23,
                "y": 16.6
              },
              {
                "percent": 15.5,
                "period": 24,
                "cohort": "Average",
                "x": 24,
                "y": 15.5
              }
            ],
            "type": "line",
            "name": "Average",
            "dataLabels": {
              "enabled": true
            },
            "dashStyle": "longDash"
          }
        ],
        "xAxis": {
          "type": "linear",
          "title": {
            "text": "Months Since Joining"
          }
        },
        // "subtitle": {
        //   "text": "This chart shows how customers survive from their first month to the next."
        // },
        "boost": {
          "useGPUTranslations": true,
          "usePreAllocated": true
        },
        "tooltip": {
          "shared": false,
          "useHTML": true,
          "headerFormat": "",
          "pointFormat": "For the {point.series.name} cohort {point.y:.1f}% of {point.n} customers come back after {point.x} months or later"
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
