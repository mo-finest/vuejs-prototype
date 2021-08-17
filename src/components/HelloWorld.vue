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
      <div id="lifeTimeRevenue"></div>
    </figure>
  </div>
</template>

<script>
// import Highcharts from "highcharts";
export default {
  name: "lifeTimeRevenue",
  data() {
    return {

    };
  },
  mounted() {
    this.waterFallChart()
  },
  methods: {
    waterFallChart() {
      window.Highcharts.chart('lifeTimeRevenue', {
        title: {
          text: "Distribution of lifetime revenue (LTR) & Customer",
          align: "left",
          style: { "font-family": "Gill sans", "font-size": "18px" }
        },
        "yAxis": [
          {
            "lineWidth": 3,
            "title": {
              "text": "Number of Customers"
            }
          },
          {
            "showLastLabel": false,
            "opposite": true,
            "title": {
              "text": "Cumulative % of Customers"
            }
          }
        ],
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
            "group": "group",
            "color": '#7878EC',
            "data": [
              {
                "ltv": 20,
                "customer_count": 7,
                "density": 2.3,
                "x": 20,
                "y": 7
              },
              {
                "ltv": 30,
                "customer_count": 26,
                "density": 10.7,
                "x": 30,
                "y": 26
              },
              {
                "ltv": 40,
                "customer_count": 30,
                "density": 20.4,
                "x": 40,
                "y": 30
              },
              {
                "ltv": 50,
                "customer_count": 26,
                "density": 28.8,
                "x": 50,
                "y": 26
              },
              {
                "ltv": 60,
                "customer_count": 27,
                "density": 37.5,
                "x": 60,
                "y": 27
              },
              {
                "ltv": 70,
                "customer_count": 19,
                "density": 43.7,
                "x": 70,
                "y": 19
              },
              {
                "ltv": 80,
                "customer_count": 14,
                "density": 48.2,
                "x": 80,
                "y": 14
              },
              {
                "ltv": 90,
                "customer_count": 9,
                "density": 51.1,
                "x": 90,
                "y": 9
              },
              {
                "ltv": 100,
                "customer_count": 8,
                "density": 53.7,
                "x": 100,
                "y": 8
              },
              {
                "ltv": 110,
                "customer_count": 10,
                "density": 57,
                "x": 110,
                "y": 10
              },
              {
                "ltv": 120,
                "customer_count": 15,
                "density": 61.8,
                "x": 120,
                "y": 15
              },
              {
                "ltv": 130,
                "customer_count": 10,
                "density": 65,
                "x": 130,
                "y": 10
              },
              {
                "ltv": 140,
                "customer_count": 8,
                "density": 67.6,
                "x": 140,
                "y": 8
              },
              {
                "ltv": 150,
                "customer_count": 7,
                "density": 69.9,
                "x": 150,
                "y": 7
              },
              {
                "ltv": 160,
                "customer_count": 8,
                "density": 72.5,
                "x": 160,
                "y": 8
              },
              {
                "ltv": 170,
                "customer_count": 4,
                "density": 73.8,
                "x": 170,
                "y": 4
              },
              {
                "ltv": 180,
                "customer_count": 1,
                "density": 74.1,
                "x": 180,
                "y": 1
              },
              {
                "ltv": 190,
                "customer_count": 10,
                "density": 77.3,
                "x": 190,
                "y": 10
              },
              {
                "ltv": 200,
                "customer_count": 8,
                "density": 79.9,
                "x": 200,
                "y": 8
              },
              {
                "ltv": 210,
                "customer_count": 6,
                "density": 81.9,
                "x": 210,
                "y": 6
              },
              {
                "ltv": 220,
                "customer_count": 6,
                "density": 83.8,
                "x": 220,
                "y": 6
              },
              {
                "ltv": 230,
                "customer_count": 3,
                "density": 84.8,
                "x": 230,
                "y": 3
              },
              {
                "ltv": 240,
                "customer_count": 1,
                "density": 85.1,
                "x": 240,
                "y": 1
              },
              {
                "ltv": 250,
                "customer_count": 2,
                "density": 85.8,
                "x": 250,
                "y": 2
              },
              {
                "ltv": 260,
                "customer_count": 2,
                "density": 86.4,
                "x": 260,
                "y": 2
              },
              {
                "ltv": 270,
                "customer_count": 1,
                "density": 86.7,
                "x": 270,
                "y": 1
              },
              {
                "ltv": 280,
                "customer_count": 4,
                "density": 88,
                "x": 280,
                "y": 4
              },
              {
                "ltv": 290,
                "customer_count": 3,
                "density": 89,
                "x": 290,
                "y": 3
              },
              {
                "ltv": 300,
                "customer_count": 3,
                "density": 90,
                "x": 300,
                "y": 3
              },
              {
                "ltv": 310,
                "customer_count": 3,
                "density": 90.9,
                "x": 310,
                "y": 3
              },
              {
                "ltv": 320,
                "customer_count": 1,
                "density": 91.3,
                "x": 320,
                "y": 1
              },
              {
                "ltv": 330,
                "customer_count": 2,
                "density": 91.9,
                "x": 330,
                "y": 2
              },
              {
                "ltv": 340,
                "customer_count": 1,
                "density": 92.2,
                "x": 340,
                "y": 1
              },
              {
                "ltv": 350,
                "customer_count": 2,
                "density": 92.9,
                "x": 350,
                "y": 2
              },
              {
                "ltv": 360,
                "customer_count": 3,
                "density": 93.9,
                "x": 360,
                "y": 3
              },
              {
                "ltv": 370,
                "customer_count": 1,
                "density": 94.2,
                "x": 370,
                "y": 1
              },
              {
                "ltv": 380,
                "customer_count": 2,
                "density": 94.8,
                "x": 380,
                "y": 2
              },
              {
                "ltv": 390,
                "customer_count": 2,
                "density": 95.5,
                "x": 390,
                "y": 2
              },
              {
                "ltv": 400,
                "customer_count": 1,
                "density": 95.8,
                "x": 400,
                "y": 1
              },
              {
                "ltv": 410,
                "customer_count": 0,
                "density": 95.8,
                "x": 410,
                "y": 0
              },
              {
                "ltv": 420,
                "customer_count": 1,
                "density": 96.1,
                "x": 420,
                "y": 1
              },
              {
                "ltv": 430,
                "customer_count": 0,
                "density": 96.1,
                "x": 430,
                "y": 0
              },
              {
                "ltv": 440,
                "customer_count": 0,
                "density": 96.1,
                "x": 440,
                "y": 0
              },
              {
                "ltv": 450,
                "customer_count": 1,
                "density": 96.4,
                "x": 450,
                "y": 1
              },
              {
                "ltv": 460,
                "customer_count": 1,
                "density": 96.8,
                "x": 460,
                "y": 1
              },
              {
                "ltv": 470,
                "customer_count": 3,
                "density": 97.7,
                "x": 470,
                "y": 3
              },
              {
                "ltv": 480,
                "customer_count": 0,
                "density": 97.7,
                "x": 480,
                "y": 0
              },
              {
                "ltv": 490,
                "customer_count": 1,
                "density": 98.1,
                "x": 490,
                "y": 1
              },
              {
                "ltv": 500,
                "customer_count": 0,
                "density": 98.1,
                "x": 500,
                "y": 0
              },
              {
                "ltv": 510,
                "customer_count": 0,
                "density": 98.1,
                "x": 510,
                "y": 0
              },
              {
                "ltv": 520,
                "customer_count": 1,
                "density": 98.4,
                "x": 520,
                "y": 1
              },
              {
                "ltv": 530,
                "customer_count": 0,
                "density": 98.4,
                "x": 530,
                "y": 0
              },
              {
                "ltv": 540,
                "customer_count": 0,
                "density": 98.4,
                "x": 540,
                "y": 0
              },
              {
                "ltv": 550,
                "customer_count": 0,
                "density": 98.4,
                "x": 550,
                "y": 0
              },
              {
                "ltv": 560,
                "customer_count": 0,
                "density": 98.4,
                "x": 560,
                "y": 0
              },
              {
                "ltv": 570,
                "customer_count": 0,
                "density": 98.4,
                "x": 570,
                "y": 0
              },
              {
                "ltv": 580,
                "customer_count": 0,
                "density": 98.4,
                "x": 580,
                "y": 0
              },
              {
                "ltv": 590,
                "customer_count": 0,
                "density": 98.4,
                "x": 590,
                "y": 0
              },
              {
                "ltv": 600,
                "customer_count": 0,
                "density": 98.4,
                "x": 600,
                "y": 0
              },
              {
                "ltv": 610,
                "customer_count": 0,
                "density": 98.4,
                "x": 610,
                "y": 0
              },
              {
                "ltv": 620,
                "customer_count": 0,
                "density": 98.4,
                "x": 620,
                "y": 0
              },
              {
                "ltv": 630,
                "customer_count": 0,
                "density": 98.4,
                "x": 630,
                "y": 0
              },
              {
                "ltv": 640,
                "customer_count": 1,
                "density": 98.7,
                "x": 640,
                "y": 1
              },
              {
                "ltv": 650,
                "customer_count": 0,
                "density": 98.7,
                "x": 650,
                "y": 0
              },
              {
                "ltv": 660,
                "customer_count": 0,
                "density": 98.7,
                "x": 660,
                "y": 0
              },
              {
                "ltv": 670,
                "customer_count": 0,
                "density": 98.7,
                "x": 670,
                "y": 0
              },
              {
                "ltv": 680,
                "customer_count": 0,
                "density": 98.7,
                "x": 680,
                "y": 0
              },
              {
                "ltv": 690,
                "customer_count": 0,
                "density": 98.7,
                "x": 690,
                "y": 0
              },
              {
                "ltv": 700,
                "customer_count": 0,
                "density": 98.7,
                "x": 700,
                "y": 0
              },
              {
                "ltv": 710,
                "customer_count": 1,
                "density": 99,
                "x": 710,
                "y": 1
              },
              {
                "ltv": 720,
                "customer_count": 0,
                "density": 99,
                "x": 720,
                "y": 0
              },
              {
                "ltv": 730,
                "customer_count": 0,
                "density": 99,
                "x": 730,
                "y": 0
              },
              {
                "ltv": 740,
                "customer_count": 1,
                "density": 99.4,
                "x": 740,
                "y": 1
              },
              {
                "ltv": 750,
                "customer_count": 0,
                "density": 99.4,
                "x": 750,
                "y": 0
              },
              {
                "ltv": 760,
                "customer_count": 0,
                "density": 99.4,
                "x": 760,
                "y": 0
              },
              {
                "ltv": 770,
                "customer_count": 0,
                "density": 99.4,
                "x": 770,
                "y": 0
              },
              {
                "ltv": 780,
                "customer_count": 0,
                "density": 99.4,
                "x": 780,
                "y": 0
              },
              {
                "ltv": 790,
                "customer_count": 0,
                "density": 99.4,
                "x": 790,
                "y": 0
              },
              {
                "ltv": 800,
                "customer_count": 1,
                "density": 99.7,
                "x": 800,
                "y": 1
              },
              {
                "ltv": 810,
                "customer_count": 0,
                "density": 99.7,
                "x": 810,
                "y": 0
              },
              {
                "ltv": 820,
                "customer_count": 0,
                "density": 99.7,
                "x": 820,
                "y": 0
              },
              {
                "ltv": 830,
                "customer_count": 0,
                "density": 99.7,
                "x": 830,
                "y": 0
              },
              {
                "ltv": 840,
                "customer_count": 1,
                "density": 100,
                "x": 840,
                "y": 1
              }
            ],
            "type": "area",
            "yAxis": 0
          },
          {
            "group": "group",
            "color": '#7878EC',
            "data": [
              {
                "ltv": 20,
                "customer_count": 7,
                "density": 2.3,
                "x": 20,
                "y": 2.3
              },
              {
                "ltv": 30,
                "customer_count": 26,
                "density": 10.7,
                "x": 30,
                "y": 10.7
              },
              {
                "ltv": 40,
                "customer_count": 30,
                "density": 20.4,
                "x": 40,
                "y": 20.4
              },
              {
                "ltv": 50,
                "customer_count": 26,
                "density": 28.8,
                "x": 50,
                "y": 28.8
              },
              {
                "ltv": 60,
                "customer_count": 27,
                "density": 37.5,
                "x": 60,
                "y": 37.5
              },
              {
                "ltv": 70,
                "customer_count": 19,
                "density": 43.7,
                "x": 70,
                "y": 43.7
              },
              {
                "ltv": 80,
                "customer_count": 14,
                "density": 48.2,
                "x": 80,
                "y": 48.2
              },
              {
                "ltv": 90,
                "customer_count": 9,
                "density": 51.1,
                "x": 90,
                "y": 51.1
              },
              {
                "ltv": 100,
                "customer_count": 8,
                "density": 53.7,
                "x": 100,
                "y": 53.7
              },
              {
                "ltv": 110,
                "customer_count": 10,
                "density": 57,
                "x": 110,
                "y": 57
              },
              {
                "ltv": 120,
                "customer_count": 15,
                "density": 61.8,
                "x": 120,
                "y": 61.8
              },
              {
                "ltv": 130,
                "customer_count": 10,
                "density": 65,
                "x": 130,
                "y": 65
              },
              {
                "ltv": 140,
                "customer_count": 8,
                "density": 67.6,
                "x": 140,
                "y": 67.6
              },
              {
                "ltv": 150,
                "customer_count": 7,
                "density": 69.9,
                "x": 150,
                "y": 69.9
              },
              {
                "ltv": 160,
                "customer_count": 8,
                "density": 72.5,
                "x": 160,
                "y": 72.5
              },
              {
                "ltv": 170,
                "customer_count": 4,
                "density": 73.8,
                "x": 170,
                "y": 73.8
              },
              {
                "ltv": 180,
                "customer_count": 1,
                "density": 74.1,
                "x": 180,
                "y": 74.1
              },
              {
                "ltv": 190,
                "customer_count": 10,
                "density": 77.3,
                "x": 190,
                "y": 77.3
              },
              {
                "ltv": 200,
                "customer_count": 8,
                "density": 79.9,
                "x": 200,
                "y": 79.9
              },
              {
                "ltv": 210,
                "customer_count": 6,
                "density": 81.9,
                "x": 210,
                "y": 81.9
              },
              {
                "ltv": 220,
                "customer_count": 6,
                "density": 83.8,
                "x": 220,
                "y": 83.8
              },
              {
                "ltv": 230,
                "customer_count": 3,
                "density": 84.8,
                "x": 230,
                "y": 84.8
              },
              {
                "ltv": 240,
                "customer_count": 1,
                "density": 85.1,
                "x": 240,
                "y": 85.1
              },
              {
                "ltv": 250,
                "customer_count": 2,
                "density": 85.8,
                "x": 250,
                "y": 85.8
              },
              {
                "ltv": 260,
                "customer_count": 2,
                "density": 86.4,
                "x": 260,
                "y": 86.4
              },
              {
                "ltv": 270,
                "customer_count": 1,
                "density": 86.7,
                "x": 270,
                "y": 86.7
              },
              {
                "ltv": 280,
                "customer_count": 4,
                "density": 88,
                "x": 280,
                "y": 88
              },
              {
                "ltv": 290,
                "customer_count": 3,
                "density": 89,
                "x": 290,
                "y": 89
              },
              {
                "ltv": 300,
                "customer_count": 3,
                "density": 90,
                "x": 300,
                "y": 90
              },
              {
                "ltv": 310,
                "customer_count": 3,
                "density": 90.9,
                "x": 310,
                "y": 90.9
              },
              {
                "ltv": 320,
                "customer_count": 1,
                "density": 91.3,
                "x": 320,
                "y": 91.3
              },
              {
                "ltv": 330,
                "customer_count": 2,
                "density": 91.9,
                "x": 330,
                "y": 91.9
              },
              {
                "ltv": 340,
                "customer_count": 1,
                "density": 92.2,
                "x": 340,
                "y": 92.2
              },
              {
                "ltv": 350,
                "customer_count": 2,
                "density": 92.9,
                "x": 350,
                "y": 92.9
              },
              {
                "ltv": 360,
                "customer_count": 3,
                "density": 93.9,
                "x": 360,
                "y": 93.9
              },
              {
                "ltv": 370,
                "customer_count": 1,
                "density": 94.2,
                "x": 370,
                "y": 94.2
              },
              {
                "ltv": 380,
                "customer_count": 2,
                "density": 94.8,
                "x": 380,
                "y": 94.8
              },
              {
                "ltv": 390,
                "customer_count": 2,
                "density": 95.5,
                "x": 390,
                "y": 95.5
              },
              {
                "ltv": 400,
                "customer_count": 1,
                "density": 95.8,
                "x": 400,
                "y": 95.8
              },
              {
                "ltv": 410,
                "customer_count": 0,
                "density": 95.8,
                "x": 410,
                "y": 95.8
              },
              {
                "ltv": 420,
                "customer_count": 1,
                "density": 96.1,
                "x": 420,
                "y": 96.1
              },
              {
                "ltv": 430,
                "customer_count": 0,
                "density": 96.1,
                "x": 430,
                "y": 96.1
              },
              {
                "ltv": 440,
                "customer_count": 0,
                "density": 96.1,
                "x": 440,
                "y": 96.1
              },
              {
                "ltv": 450,
                "customer_count": 1,
                "density": 96.4,
                "x": 450,
                "y": 96.4
              },
              {
                "ltv": 460,
                "customer_count": 1,
                "density": 96.8,
                "x": 460,
                "y": 96.8
              },
              {
                "ltv": 470,
                "customer_count": 3,
                "density": 97.7,
                "x": 470,
                "y": 97.7
              },
              {
                "ltv": 480,
                "customer_count": 0,
                "density": 97.7,
                "x": 480,
                "y": 97.7
              },
              {
                "ltv": 490,
                "customer_count": 1,
                "density": 98.1,
                "x": 490,
                "y": 98.1
              },
              {
                "ltv": 500,
                "customer_count": 0,
                "density": 98.1,
                "x": 500,
                "y": 98.1
              },
              {
                "ltv": 510,
                "customer_count": 0,
                "density": 98.1,
                "x": 510,
                "y": 98.1
              },
              {
                "ltv": 520,
                "customer_count": 1,
                "density": 98.4,
                "x": 520,
                "y": 98.4
              },
              {
                "ltv": 530,
                "customer_count": 0,
                "density": 98.4,
                "x": 530,
                "y": 98.4
              },
              {
                "ltv": 540,
                "customer_count": 0,
                "density": 98.4,
                "x": 540,
                "y": 98.4
              },
              {
                "ltv": 550,
                "customer_count": 0,
                "density": 98.4,
                "x": 550,
                "y": 98.4
              },
              {
                "ltv": 560,
                "customer_count": 0,
                "density": 98.4,
                "x": 560,
                "y": 98.4
              },
              {
                "ltv": 570,
                "customer_count": 0,
                "density": 98.4,
                "x": 570,
                "y": 98.4
              },
              {
                "ltv": 580,
                "customer_count": 0,
                "density": 98.4,
                "x": 580,
                "y": 98.4
              },
              {
                "ltv": 590,
                "customer_count": 0,
                "density": 98.4,
                "x": 590,
                "y": 98.4
              },
              {
                "ltv": 600,
                "customer_count": 0,
                "density": 98.4,
                "x": 600,
                "y": 98.4
              },
              {
                "ltv": 610,
                "customer_count": 0,
                "density": 98.4,
                "x": 610,
                "y": 98.4
              },
              {
                "ltv": 620,
                "customer_count": 0,
                "density": 98.4,
                "x": 620,
                "y": 98.4
              },
              {
                "ltv": 630,
                "customer_count": 0,
                "density": 98.4,
                "x": 630,
                "y": 98.4
              },
              {
                "ltv": 640,
                "customer_count": 1,
                "density": 98.7,
                "x": 640,
                "y": 98.7
              },
              {
                "ltv": 650,
                "customer_count": 0,
                "density": 98.7,
                "x": 650,
                "y": 98.7
              },
              {
                "ltv": 660,
                "customer_count": 0,
                "density": 98.7,
                "x": 660,
                "y": 98.7
              },
              {
                "ltv": 670,
                "customer_count": 0,
                "density": 98.7,
                "x": 670,
                "y": 98.7
              },
              {
                "ltv": 680,
                "customer_count": 0,
                "density": 98.7,
                "x": 680,
                "y": 98.7
              },
              {
                "ltv": 690,
                "customer_count": 0,
                "density": 98.7,
                "x": 690,
                "y": 98.7
              },
              {
                "ltv": 700,
                "customer_count": 0,
                "density": 98.7,
                "x": 700,
                "y": 98.7
              },
              {
                "ltv": 710,
                "customer_count": 1,
                "density": 99,
                "x": 710,
                "y": 99
              },
              {
                "ltv": 720,
                "customer_count": 0,
                "density": 99,
                "x": 720,
                "y": 99
              },
              {
                "ltv": 730,
                "customer_count": 0,
                "density": 99,
                "x": 730,
                "y": 99
              },
              {
                "ltv": 740,
                "customer_count": 1,
                "density": 99.4,
                "x": 740,
                "y": 99.4
              },
              {
                "ltv": 750,
                "customer_count": 0,
                "density": 99.4,
                "x": 750,
                "y": 99.4
              },
              {
                "ltv": 760,
                "customer_count": 0,
                "density": 99.4,
                "x": 760,
                "y": 99.4
              },
              {
                "ltv": 770,
                "customer_count": 0,
                "density": 99.4,
                "x": 770,
                "y": 99.4
              },
              {
                "ltv": 780,
                "customer_count": 0,
                "density": 99.4,
                "x": 780,
                "y": 99.4
              },
              {
                "ltv": 790,
                "customer_count": 0,
                "density": 99.4,
                "x": 790,
                "y": 99.4
              },
              {
                "ltv": 800,
                "customer_count": 1,
                "density": 99.7,
                "x": 800,
                "y": 99.7
              },
              {
                "ltv": 810,
                "customer_count": 0,
                "density": 99.7,
                "x": 810,
                "y": 99.7
              },
              {
                "ltv": 820,
                "customer_count": 0,
                "density": 99.7,
                "x": 820,
                "y": 99.7
              },
              {
                "ltv": 830,
                "customer_count": 0,
                "density": 99.7,
                "x": 830,
                "y": 99.7
              },
              {
                "ltv": 840,
                "customer_count": 1,
                "density": 100,
                "x": 840,
                "y": 100
              }
            ],
            "type": "line",
            "name": "Density",
            "yAxis": 1,
            "lineWidth": 2
          }
        ],
        "xAxis": {
          "title": {
            "text": "Lifetime Revenue (USD)"
          },
          "max": 472.950594840652
        },
        "chart": {
          "zoomType": "xy"
        },
        "legend": [
          {
            "enabled": false
          }
        ],
        "boost": {
          "enabled": true,
          "useGPUTranslations": true,
          "usePreAllocated": true
        },
        "tooltip": {
          "crosshairs": true,
          "shared": false,
          "useHTML": true,
          "headerFormat": "",
          // "formatter": "function() {\n        var text = '';\n        if(this.series.name == 'Density') {\n            text = this.y + '% of Customers have an LTR of $' + this.x + ' or less';\n        } else {\n            text = this.y + ' Customers have an LTR of $' + this.x;\n        }\n        return text;\n    }"
        },
        "annotations": [
          {
            "labels": [
              {
                "point": {
                  "x": 149.971000554122,
                  "y": 8,
                  "xAxis": 0,
                  "yAxis": 0
                },
                "text": "Mean: $150"
              },
              {
                "point": {
                  "x": 90.2562454353491,
                  "y": 10,
                  "xAxis": 0,
                  "yAxis": 0
                },
                "text": "Median: $90.3"
              }
            ]
          }
        ]

      });

    }

  },
};
</script>

<style>



</style>
