<template>
  <div class="bg-white rounded shadow p-1 py-5 px-4">
    <div class="font-gillSans text-left pl-10 flex space-x-4">
      <div class="pt-1">
        <div class="rounded-100 w-8 h-8 grid place-items-center bg-1b text-white">
          <i class="far fa-chart-line text-xl"></i>
        </div>
      </div>
      <div>
        <span class="text-2xl">Historic Annual Customer Growth</span>
        <br />
        <span class="text-xl">Simple Description</span>
      </div>
    </div>
    <figure class="highcharts-figure">
      <div id="active60Customer"></div>
    </figure>
  </div>
</template>

<script>
// import Highcharts from "highcharts";
export default {
  name: "NextActive60Customer",
  data() {
    return {

    };
  },
  mounted() {
    this.waterFallChart()
  },
  methods: {
    waterFallChart() {
      window.Highcharts.chart('active60Customer', {
        title: {
          text: 'Net Active Customers in 60 Day',
          align: 'left',
          style: { "font-family": "Gill sans", "font-size": "18px" }
        },

        subtitle: {
          text: 'Number of Customers in Y-Axis',
          align: 'left',
          style: { "font-family": "Gill sans", "font-size": "14px" }
        },
        "yAxis": {
          "title": {
            "text": " "
          },
          "gridLineColor": "#D3D3D3"
        },
        "credits": {
          "enabled": false
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
            "marker": {
              "enabled": false
            },
            "lineWidth": 0
          },
          "treemap": {
            "layoutAlgorithm": "squarified"
          },
          "area": {
            "stacking": [
              "percent"
            ],
            "lineColor": "#ffeeff"
          },
          "column": {
            "stacking": [
              "normal"
            ],
            "groupPadding": 0,
            "pointPadding": 0,
            "dataLabels": {
              "enabled": false,
              // "allowOverlap": true,
              // "formatter": "function() {\n                  if (this.point.x == this.series.data.length - 1) {\n                          if (this.y > 1000000) {\n          return Highcharts.numberFormat((this.y / 1000000), 1) + \"M\"\n        } else if (this.y > 1000) {\n          return Highcharts.numberFormat((this.y / 1000), 1) + \"K\";\n        } else {\n          return this.y\n        };\n                    }\n                          return \"\";\n                }"
            }
          }
        },
        "chart": {
          "type": "column",
          "opacity": 0.6,
          "zoomType": "xy"
        },
        "series": [
          {
            "name": "continuing_this_period",
            "color": "#E0BD10",
            "index": 4,
            "data": [
              8918,
              8820,
              8857,
              8978,
              9074,
              9014,
              8577,
              8600,
              8487,
              8386,
              8418,
              8190,
              8272,
              8270,
              8278,
              8196,
              8159,
              8196,
              8115,
              7971,
              7805,
              8004,
              7948,
              7940,
              7903,
              7935,
              7864,
              8156,
              8150,
              8347,
              8147,
              8283,
              8266,
              8265,
              8258,
              8149,
              8268,
              8070,
              8092,
              8150,
              8090,
              8287,
              8300,
              8350,
              8005,
              8033,
              7787,
              7983,
              8056,
              8130,
              8028,
              7836,
              7830,
              7738,
              7138,
              7247,
              7531,
              7438,
              7307,
              7327,
              7276,
              7356,
              7588,
              7420,
              7458,
              7555,
              7465,
              7048,
              6917,
              7027,
              7025,
              7471,
              7333,
              6971,
              6966,
              6985,
              6939,
              7115,
              6944,
              6790,
              6893,
              6946,
              6908,
              6835,
              7151,
              7150,
              7120,
              6993,
              7006,
              6723,
              6109,
              6795,
              6714,
              6666,
              6491,
              6503,
              6278,
              6383,
              6215,
              5675,
              5771,
              5713,
              5653,
              5281
            ]
          },
          {
            "name": "lapsed_this_period",
            "color": "#55D483",
            "index": 3,
            "data": [
              -13183,
              -13246,
              -13609,
              -13692,
              -13548,
              -13541,
              -13818,
              -13719,
              -13475,
              -13441,
              -13297,
              -13300,
              -13368,
              -13359,
              -13432,
              -13336,
              -13307,
              -13217,
              -13206,
              -13362,
              -13012,
              -12943,
              -12860,
              -12637,
              -12561,
              -12441,
              -12523,
              -12279,
              -12285,
              -12328,
              -12481,
              -12428,
              -12473,
              -12420,
              -12304,
              -12395,
              -12143,
              -12207,
              -12055,
              -11779,
              -11923,
              -11635,
              -12082,
              -12154,
              -12392,
              -12153,
              -11550,
              -12302,
              -12348,
              -12218,
              -12482,
              -12278,
              -12231,
              -12079,
              -12806,
              -12937,
              -12418,
              -12453,
              -12357,
              -12231,
              -12115,
              -12038,
              -11509,
              -10769,
              -11343,
              -11617,
              -11781,
              -12138,
              -12294,
              -12076,
              -11876,
              -12232,
              -12369,
              -11897,
              -11898,
              -11487,
              -11199,
              -11197,
              -11229,
              -11363,
              -11205,
              -10984,
              -10875,
              -10660,
              -11325,
              -11672,
              -11625,
              -11637,
              -11257,
              -11522,
              -12208,
              -11400,
              -11628,
              -10616,
              -10843,
              -10894,
              -11177,
              -10986,
              -10437,
              -10755,
              -11190,
              -10922,
              -10866,
              -10700
            ]
          },
          {
            "name": "new_this_period",
            "color": "#499AC8",
            "index": 2,
            "data": [
              5276,
              5190,
              5033,
              4980,
              4935,
              4922,
              4873,
              4925,
              4947,
              4910,
              4852,
              4643,
              4638,
              4621,
              4377,
              4287,
              4160,
              4145,
              4245,
              4501,
              4542,
              4734,
              4842,
              4875,
              4854,
              4832,
              4600,
              4359,
              4197,
              3976,
              3782,
              3762,
              3814,
              3827,
              4001,
              4091,
              4144,
              3981,
              3971,
              3996,
              3911,
              4025,
              3723,
              3648,
              3553,
              3744,
              3899,
              3754,
              3707,
              3602,
              3505,
              3520,
              3540,
              3655,
              3598,
              3629,
              3777,
              3869,
              3931,
              3973,
              3844,
              3760,
              3638,
              3655,
              3476,
              3291,
              3203,
              3151,
              3198,
              3195,
              3161,
              3154,
              3105,
              3023,
              2992,
              2991,
              3847,
              3789,
              3736,
              3717,
              3758,
              3791,
              3832,
              3860,
              3062,
              2864,
              2880,
              2911,
              2925,
              2761,
              2611,
              2615,
              2472,
              2513,
              2374,
              2253,
              2071,
              1996,
              2049,
              2019,
              1993,
              2050,
              2073,
              2115
            ]
          },
          {
            "name": "reactivated_this_period",
            "color": "#BD10E0",
            "index": 1,
            "data": [
              7070,
              7122,
              6919,
              6951,
              7082,
              7084,
              7154,
              7178,
              7395,
              7420,
              7476,
              7453,
              7438,
              7402,
              7402,
              7396,
              7435,
              7449,
              7378,
              7307,
              7281,
              7265,
              7243,
              7223,
              7173,
              7123,
              7104,
              7289,
              7271,
              7167,
              7180,
              7220,
              7290,
              7377,
              7520,
              7511,
              7471,
              7404,
              7392,
              7598,
              7536,
              7753,
              7500,
              7526,
              7567,
              7705,
              8488,
              7662,
              7565,
              7477,
              7301,
              7449,
              7347,
              7416,
              7009,
              6939,
              7202,
              7228,
              7059,
              7089,
              7176,
              7061,
              7353,
              8184,
              7653,
              7329,
              7346,
              7402,
              7296,
              7317,
              7326,
              6858,
              6664,
              6975,
              6830,
              7005,
              7235,
              7132,
              7091,
              6945,
              6900,
              6899,
              6863,
              6922,
              6725,
              6542,
              6675,
              6789,
              6955,
              6864,
              6338,
              6856,
              6730,
              6868,
              6462,
              6384,
              6259,
              6140,
              6558,
              6579,
              5938,
              5961,
              5850,
              5853
            ]
          },
          {
            "group": "group",
            "data": [
              {
                "as_of_date": "2019-04-15",
                "active_this_period": 21264,
                "new_this_period": 5276,
                "reactivated_this_period": 7070,
                "continuing_this_period": 8918,
                "lapsed_this_period": -13183,
                "y": 8081
              },
              {
                "as_of_date": "2019-04-22",
                "active_this_period": 21132,
                "new_this_period": 5190,
                "reactivated_this_period": 7122,
                "continuing_this_period": 8820,
                "lapsed_this_period": -13246,
                "y": 7886
              },
              {
                "as_of_date": "2019-04-29",
                "active_this_period": 20809,
                "new_this_period": 5033,
                "reactivated_this_period": 6919,
                "continuing_this_period": 8857,
                "lapsed_this_period": -13609,
                "y": 7200
              },
              {
                "as_of_date": "2019-05-06",
                "active_this_period": 20909,
                "new_this_period": 4980,
                "reactivated_this_period": 6951,
                "continuing_this_period": 8978,
                "lapsed_this_period": -13692,
                "y": 7217
              },
              {
                "as_of_date": "2019-05-13",
                "active_this_period": 21091,
                "new_this_period": 4935,
                "reactivated_this_period": 7082,
                "continuing_this_period": 9074,
                "lapsed_this_period": -13548,
                "y": 7543
              },
              {
                "as_of_date": "2019-05-20",
                "active_this_period": 21020,
                "new_this_period": 4922,
                "reactivated_this_period": 7084,
                "continuing_this_period": 9014,
                "lapsed_this_period": -13541,
                "y": 7479
              },
              {
                "as_of_date": "2019-05-27",
                "active_this_period": 20604,
                "new_this_period": 4873,
                "reactivated_this_period": 7154,
                "continuing_this_period": 8577,
                "lapsed_this_period": -13818,
                "y": 6786
              },
              {
                "as_of_date": "2019-06-03",
                "active_this_period": 20703,
                "new_this_period": 4925,
                "reactivated_this_period": 7178,
                "continuing_this_period": 8600,
                "lapsed_this_period": -13719,
                "y": 6984
              },
              {
                "as_of_date": "2019-06-10",
                "active_this_period": 20829,
                "new_this_period": 4947,
                "reactivated_this_period": 7395,
                "continuing_this_period": 8487,
                "lapsed_this_period": -13475,
                "y": 7354
              },
              {
                "as_of_date": "2019-06-17",
                "active_this_period": 20716,
                "new_this_period": 4910,
                "reactivated_this_period": 7420,
                "continuing_this_period": 8386,
                "lapsed_this_period": -13441,
                "y": 7275
              },
              {
                "as_of_date": "2019-06-24",
                "active_this_period": 20746,
                "new_this_period": 4852,
                "reactivated_this_period": 7476,
                "continuing_this_period": 8418,
                "lapsed_this_period": -13297,
                "y": 7449
              },
              {
                "as_of_date": "2019-07-01",
                "active_this_period": 20286,
                "new_this_period": 4643,
                "reactivated_this_period": 7453,
                "continuing_this_period": 8190,
                "lapsed_this_period": -13300,
                "y": 6986
              },
              {
                "as_of_date": "2019-07-08",
                "active_this_period": 20348,
                "new_this_period": 4638,
                "reactivated_this_period": 7438,
                "continuing_this_period": 8272,
                "lapsed_this_period": -13368,
                "y": 6980
              },
              {
                "as_of_date": "2019-07-15",
                "active_this_period": 20293,
                "new_this_period": 4621,
                "reactivated_this_period": 7402,
                "continuing_this_period": 8270,
                "lapsed_this_period": -13359,
                "y": 6934
              },
              {
                "as_of_date": "2019-07-22",
                "active_this_period": 20057,
                "new_this_period": 4377,
                "reactivated_this_period": 7402,
                "continuing_this_period": 8278,
                "lapsed_this_period": -13432,
                "y": 6625
              },
              {
                "as_of_date": "2019-07-29",
                "active_this_period": 19879,
                "new_this_period": 4287,
                "reactivated_this_period": 7396,
                "continuing_this_period": 8196,
                "lapsed_this_period": -13336,
                "y": 6543
              },
              {
                "as_of_date": "2019-08-05",
                "active_this_period": 19754,
                "new_this_period": 4160,
                "reactivated_this_period": 7435,
                "continuing_this_period": 8159,
                "lapsed_this_period": -13307,
                "y": 6447
              },
              {
                "as_of_date": "2019-08-12",
                "active_this_period": 19790,
                "new_this_period": 4145,
                "reactivated_this_period": 7449,
                "continuing_this_period": 8196,
                "lapsed_this_period": -13217,
                "y": 6573
              },
              {
                "as_of_date": "2019-08-19",
                "active_this_period": 19738,
                "new_this_period": 4245,
                "reactivated_this_period": 7378,
                "continuing_this_period": 8115,
                "lapsed_this_period": -13206,
                "y": 6532
              },
              {
                "as_of_date": "2019-08-26",
                "active_this_period": 19779,
                "new_this_period": 4501,
                "reactivated_this_period": 7307,
                "continuing_this_period": 7971,
                "lapsed_this_period": -13362,
                "y": 6417
              },
              {
                "as_of_date": "2019-09-02",
                "active_this_period": 19628,
                "new_this_period": 4542,
                "reactivated_this_period": 7281,
                "continuing_this_period": 7805,
                "lapsed_this_period": -13012,
                "y": 6616
              },
              {
                "as_of_date": "2019-09-09",
                "active_this_period": 20003,
                "new_this_period": 4734,
                "reactivated_this_period": 7265,
                "continuing_this_period": 8004,
                "lapsed_this_period": -12943,
                "y": 7060
              },
              {
                "as_of_date": "2019-09-16",
                "active_this_period": 20033,
                "new_this_period": 4842,
                "reactivated_this_period": 7243,
                "continuing_this_period": 7948,
                "lapsed_this_period": -12860,
                "y": 7173
              },
              {
                "as_of_date": "2019-09-23",
                "active_this_period": 20038,
                "new_this_period": 4875,
                "reactivated_this_period": 7223,
                "continuing_this_period": 7940,
                "lapsed_this_period": -12637,
                "y": 7401
              },
              {
                "as_of_date": "2019-09-30",
                "active_this_period": 19930,
                "new_this_period": 4854,
                "reactivated_this_period": 7173,
                "continuing_this_period": 7903,
                "lapsed_this_period": -12561,
                "y": 7369
              },
              {
                "as_of_date": "2019-10-07",
                "active_this_period": 19890,
                "new_this_period": 4832,
                "reactivated_this_period": 7123,
                "continuing_this_period": 7935,
                "lapsed_this_period": -12441,
                "y": 7449
              },
              {
                "as_of_date": "2019-10-14",
                "active_this_period": 19568,
                "new_this_period": 4600,
                "reactivated_this_period": 7104,
                "continuing_this_period": 7864,
                "lapsed_this_period": -12523,
                "y": 7045
              },
              {
                "as_of_date": "2019-10-21",
                "active_this_period": 19804,
                "new_this_period": 4359,
                "reactivated_this_period": 7289,
                "continuing_this_period": 8156,
                "lapsed_this_period": -12279,
                "y": 7525
              },
              {
                "as_of_date": "2019-10-28",
                "active_this_period": 19618,
                "new_this_period": 4197,
                "reactivated_this_period": 7271,
                "continuing_this_period": 8150,
                "lapsed_this_period": -12285,
                "y": 7333
              },
              {
                "as_of_date": "2019-11-04",
                "active_this_period": 19490,
                "new_this_period": 3976,
                "reactivated_this_period": 7167,
                "continuing_this_period": 8347,
                "lapsed_this_period": -12328,
                "y": 7162
              },
              {
                "as_of_date": "2019-11-11",
                "active_this_period": 19109,
                "new_this_period": 3782,
                "reactivated_this_period": 7180,
                "continuing_this_period": 8147,
                "lapsed_this_period": -12481,
                "y": 6628
              },
              {
                "as_of_date": "2019-11-18",
                "active_this_period": 19265,
                "new_this_period": 3762,
                "reactivated_this_period": 7220,
                "continuing_this_period": 8283,
                "lapsed_this_period": -12428,
                "y": 6837
              },
              {
                "as_of_date": "2019-11-25",
                "active_this_period": 19370,
                "new_this_period": 3814,
                "reactivated_this_period": 7290,
                "continuing_this_period": 8266,
                "lapsed_this_period": -12473,
                "y": 6897
              },
              {
                "as_of_date": "2019-12-02",
                "active_this_period": 19469,
                "new_this_period": 3827,
                "reactivated_this_period": 7377,
                "continuing_this_period": 8265,
                "lapsed_this_period": -12420,
                "y": 7049
              },
              {
                "as_of_date": "2019-12-09",
                "active_this_period": 19779,
                "new_this_period": 4001,
                "reactivated_this_period": 7520,
                "continuing_this_period": 8258,
                "lapsed_this_period": -12304,
                "y": 7475
              },
              {
                "as_of_date": "2019-12-16",
                "active_this_period": 19751,
                "new_this_period": 4091,
                "reactivated_this_period": 7511,
                "continuing_this_period": 8149,
                "lapsed_this_period": -12395,
                "y": 7356
              },
              {
                "as_of_date": "2019-12-23",
                "active_this_period": 19883,
                "new_this_period": 4144,
                "reactivated_this_period": 7471,
                "continuing_this_period": 8268,
                "lapsed_this_period": -12143,
                "y": 7740
              },
              {
                "as_of_date": "2019-12-30",
                "active_this_period": 19455,
                "new_this_period": 3981,
                "reactivated_this_period": 7404,
                "continuing_this_period": 8070,
                "lapsed_this_period": -12207,
                "y": 7248
              },
              {
                "as_of_date": "2020-01-06",
                "active_this_period": 19455,
                "new_this_period": 3971,
                "reactivated_this_period": 7392,
                "continuing_this_period": 8092,
                "lapsed_this_period": -12055,
                "y": 7400
              },
              {
                "as_of_date": "2020-01-13",
                "active_this_period": 19744,
                "new_this_period": 3996,
                "reactivated_this_period": 7598,
                "continuing_this_period": 8150,
                "lapsed_this_period": -11779,
                "y": 7965
              },
              {
                "as_of_date": "2020-01-20",
                "active_this_period": 19537,
                "new_this_period": 3911,
                "reactivated_this_period": 7536,
                "continuing_this_period": 8090,
                "lapsed_this_period": -11923,
                "y": 7614
              },
              {
                "as_of_date": "2020-01-27",
                "active_this_period": 20065,
                "new_this_period": 4025,
                "reactivated_this_period": 7753,
                "continuing_this_period": 8287,
                "lapsed_this_period": -11635,
                "y": 8430
              },
              {
                "as_of_date": "2020-02-03",
                "active_this_period": 19523,
                "new_this_period": 3723,
                "reactivated_this_period": 7500,
                "continuing_this_period": 8300,
                "lapsed_this_period": -12082,
                "y": 7441
              },
              {
                "as_of_date": "2020-02-10",
                "active_this_period": 19524,
                "new_this_period": 3648,
                "reactivated_this_period": 7526,
                "continuing_this_period": 8350,
                "lapsed_this_period": -12154,
                "y": 7370
              },
              {
                "as_of_date": "2020-02-17",
                "active_this_period": 19125,
                "new_this_period": 3553,
                "reactivated_this_period": 7567,
                "continuing_this_period": 8005,
                "lapsed_this_period": -12392,
                "y": 6733
              },
              {
                "as_of_date": "2020-02-24",
                "active_this_period": 19482,
                "new_this_period": 3744,
                "reactivated_this_period": 7705,
                "continuing_this_period": 8033,
                "lapsed_this_period": -12153,
                "y": 7329
              },
              {
                "as_of_date": "2020-03-02",
                "active_this_period": 20174,
                "new_this_period": 3899,
                "reactivated_this_period": 8488,
                "continuing_this_period": 7787,
                "lapsed_this_period": -11550,
                "y": 8624
              },
              {
                "as_of_date": "2020-03-09",
                "active_this_period": 19399,
                "new_this_period": 3754,
                "reactivated_this_period": 7662,
                "continuing_this_period": 7983,
                "lapsed_this_period": -12302,
                "y": 7097
              },
              {
                "as_of_date": "2020-03-16",
                "active_this_period": 19328,
                "new_this_period": 3707,
                "reactivated_this_period": 7565,
                "continuing_this_period": 8056,
                "lapsed_this_period": -12348,
                "y": 6980
              },
              {
                "as_of_date": "2020-03-23",
                "active_this_period": 19209,
                "new_this_period": 3602,
                "reactivated_this_period": 7477,
                "continuing_this_period": 8130,
                "lapsed_this_period": -12218,
                "y": 6991
              },
              {
                "as_of_date": "2020-03-30",
                "active_this_period": 18834,
                "new_this_period": 3505,
                "reactivated_this_period": 7301,
                "continuing_this_period": 8028,
                "lapsed_this_period": -12482,
                "y": 6352
              },
              {
                "as_of_date": "2020-04-06",
                "active_this_period": 18805,
                "new_this_period": 3520,
                "reactivated_this_period": 7449,
                "continuing_this_period": 7836,
                "lapsed_this_period": -12278,
                "y": 6527
              },
              {
                "as_of_date": "2020-04-13",
                "active_this_period": 18717,
                "new_this_period": 3540,
                "reactivated_this_period": 7347,
                "continuing_this_period": 7830,
                "lapsed_this_period": -12231,
                "y": 6486
              },
              {
                "as_of_date": "2020-04-20",
                "active_this_period": 18809,
                "new_this_period": 3655,
                "reactivated_this_period": 7416,
                "continuing_this_period": 7738,
                "lapsed_this_period": -12079,
                "y": 6730
              },
              {
                "as_of_date": "2020-04-27",
                "active_this_period": 17745,
                "new_this_period": 3598,
                "reactivated_this_period": 7009,
                "continuing_this_period": 7138,
                "lapsed_this_period": -12806,
                "y": 4939
              },
              {
                "as_of_date": "2020-05-04",
                "active_this_period": 17815,
                "new_this_period": 3629,
                "reactivated_this_period": 6939,
                "continuing_this_period": 7247,
                "lapsed_this_period": -12937,
                "y": 4878
              },
              {
                "as_of_date": "2020-05-11",
                "active_this_period": 18510,
                "new_this_period": 3777,
                "reactivated_this_period": 7202,
                "continuing_this_period": 7531,
                "lapsed_this_period": -12418,
                "y": 6092
              },
              {
                "as_of_date": "2020-05-18",
                "active_this_period": 18535,
                "new_this_period": 3869,
                "reactivated_this_period": 7228,
                "continuing_this_period": 7438,
                "lapsed_this_period": -12453,
                "y": 6082
              },
              {
                "as_of_date": "2020-05-25",
                "active_this_period": 18297,
                "new_this_period": 3931,
                "reactivated_this_period": 7059,
                "continuing_this_period": 7307,
                "lapsed_this_period": -12357,
                "y": 5940
              },
              {
                "as_of_date": "2020-06-01",
                "active_this_period": 18389,
                "new_this_period": 3973,
                "reactivated_this_period": 7089,
                "continuing_this_period": 7327,
                "lapsed_this_period": -12231,
                "y": 6158
              },
              {
                "as_of_date": "2020-06-08",
                "active_this_period": 18296,
                "new_this_period": 3844,
                "reactivated_this_period": 7176,
                "continuing_this_period": 7276,
                "lapsed_this_period": -12115,
                "y": 6181
              },
              {
                "as_of_date": "2020-06-15",
                "active_this_period": 18177,
                "new_this_period": 3760,
                "reactivated_this_period": 7061,
                "continuing_this_period": 7356,
                "lapsed_this_period": -12038,
                "y": 6139
              },
              {
                "as_of_date": "2020-06-22",
                "active_this_period": 18579,
                "new_this_period": 3638,
                "reactivated_this_period": 7353,
                "continuing_this_period": 7588,
                "lapsed_this_period": -11509,
                "y": 7070
              },
              {
                "as_of_date": "2020-06-29",
                "active_this_period": 19259,
                "new_this_period": 3655,
                "reactivated_this_period": 8184,
                "continuing_this_period": 7420,
                "lapsed_this_period": -10769,
                "y": 8490
              },
              {
                "as_of_date": "2020-07-06",
                "active_this_period": 18587,
                "new_this_period": 3476,
                "reactivated_this_period": 7653,
                "continuing_this_period": 7458,
                "lapsed_this_period": -11343,
                "y": 7244
              },
              {
                "as_of_date": "2020-07-13",
                "active_this_period": 18175,
                "new_this_period": 3291,
                "reactivated_this_period": 7329,
                "continuing_this_period": 7555,
                "lapsed_this_period": -11617,
                "y": 6558
              },
              {
                "as_of_date": "2020-07-20",
                "active_this_period": 18014,
                "new_this_period": 3203,
                "reactivated_this_period": 7346,
                "continuing_this_period": 7465,
                "lapsed_this_period": -11781,
                "y": 6233
              },
              {
                "as_of_date": "2020-07-27",
                "active_this_period": 17601,
                "new_this_period": 3151,
                "reactivated_this_period": 7402,
                "continuing_this_period": 7048,
                "lapsed_this_period": -12138,
                "y": 5463
              },
              {
                "as_of_date": "2020-08-03",
                "active_this_period": 17411,
                "new_this_period": 3198,
                "reactivated_this_period": 7296,
                "continuing_this_period": 6917,
                "lapsed_this_period": -12294,
                "y": 5117
              },
              {
                "as_of_date": "2020-08-10",
                "active_this_period": 17539,
                "new_this_period": 3195,
                "reactivated_this_period": 7317,
                "continuing_this_period": 7027,
                "lapsed_this_period": -12076,
                "y": 5463
              },
              {
                "as_of_date": "2020-08-17",
                "active_this_period": 17512,
                "new_this_period": 3161,
                "reactivated_this_period": 7326,
                "continuing_this_period": 7025,
                "lapsed_this_period": -11876,
                "y": 5636
              },
              {
                "as_of_date": "2020-08-24",
                "active_this_period": 17483,
                "new_this_period": 3154,
                "reactivated_this_period": 6858,
                "continuing_this_period": 7471,
                "lapsed_this_period": -12232,
                "y": 5251
              },
              {
                "as_of_date": "2020-08-31",
                "active_this_period": 17102,
                "new_this_period": 3105,
                "reactivated_this_period": 6664,
                "continuing_this_period": 7333,
                "lapsed_this_period": -12369,
                "y": 4733
              },
              {
                "as_of_date": "2020-09-07",
                "active_this_period": 16969,
                "new_this_period": 3023,
                "reactivated_this_period": 6975,
                "continuing_this_period": 6971,
                "lapsed_this_period": -11897,
                "y": 5072
              },
              {
                "as_of_date": "2020-09-14",
                "active_this_period": 16788,
                "new_this_period": 2992,
                "reactivated_this_period": 6830,
                "continuing_this_period": 6966,
                "lapsed_this_period": -11898,
                "y": 4890
              },
              {
                "as_of_date": "2020-09-21",
                "active_this_period": 16981,
                "new_this_period": 2991,
                "reactivated_this_period": 7005,
                "continuing_this_period": 6985,
                "lapsed_this_period": -11487,
                "y": 5494
              },
              {
                "as_of_date": "2020-09-28",
                "active_this_period": 18021,
                "new_this_period": 3847,
                "reactivated_this_period": 7235,
                "continuing_this_period": 6939,
                "lapsed_this_period": -11199,
                "y": 6822
              },
              {
                "as_of_date": "2020-10-05",
                "active_this_period": 18036,
                "new_this_period": 3789,
                "reactivated_this_period": 7132,
                "continuing_this_period": 7115,
                "lapsed_this_period": -11197,
                "y": 6839
              },
              {
                "as_of_date": "2020-10-12",
                "active_this_period": 17771,
                "new_this_period": 3736,
                "reactivated_this_period": 7091,
                "continuing_this_period": 6944,
                "lapsed_this_period": -11229,
                "y": 6542
              },
              {
                "as_of_date": "2020-10-19",
                "active_this_period": 17452,
                "new_this_period": 3717,
                "reactivated_this_period": 6945,
                "continuing_this_period": 6790,
                "lapsed_this_period": -11363,
                "y": 6089
              },
              {
                "as_of_date": "2020-10-26",
                "active_this_period": 17551,
                "new_this_period": 3758,
                "reactivated_this_period": 6900,
                "continuing_this_period": 6893,
                "lapsed_this_period": -11205,
                "y": 6346
              },
              {
                "as_of_date": "2020-11-02",
                "active_this_period": 17636,
                "new_this_period": 3791,
                "reactivated_this_period": 6899,
                "continuing_this_period": 6946,
                "lapsed_this_period": -10984,
                "y": 6652
              },
              {
                "as_of_date": "2020-11-09",
                "active_this_period": 17603,
                "new_this_period": 3832,
                "reactivated_this_period": 6863,
                "continuing_this_period": 6908,
                "lapsed_this_period": -10875,
                "y": 6728
              },
              {
                "as_of_date": "2020-11-16",
                "active_this_period": 17617,
                "new_this_period": 3860,
                "reactivated_this_period": 6922,
                "continuing_this_period": 6835,
                "lapsed_this_period": -10660,
                "y": 6957
              },
              {
                "as_of_date": "2020-11-23",
                "active_this_period": 16938,
                "new_this_period": 3062,
                "reactivated_this_period": 6725,
                "continuing_this_period": 7151,
                "lapsed_this_period": -11325,
                "y": 5613
              },
              {
                "as_of_date": "2020-11-30",
                "active_this_period": 16556,
                "new_this_period": 2864,
                "reactivated_this_period": 6542,
                "continuing_this_period": 7150,
                "lapsed_this_period": -11672,
                "y": 4884
              },
              {
                "as_of_date": "2020-12-07",
                "active_this_period": 16675,
                "new_this_period": 2880,
                "reactivated_this_period": 6675,
                "continuing_this_period": 7120,
                "lapsed_this_period": -11625,
                "y": 5050
              },
              {
                "as_of_date": "2020-12-14",
                "active_this_period": 16693,
                "new_this_period": 2911,
                "reactivated_this_period": 6789,
                "continuing_this_period": 6993,
                "lapsed_this_period": -11637,
                "y": 5056
              },
              {
                "as_of_date": "2020-12-21",
                "active_this_period": 16886,
                "new_this_period": 2925,
                "reactivated_this_period": 6955,
                "continuing_this_period": 7006,
                "lapsed_this_period": -11257,
                "y": 5629
              },
              {
                "as_of_date": "2020-12-28",
                "active_this_period": 16348,
                "new_this_period": 2761,
                "reactivated_this_period": 6864,
                "continuing_this_period": 6723,
                "lapsed_this_period": -11522,
                "y": 4826
              },
              {
                "as_of_date": "2021-01-04",
                "active_this_period": 15058,
                "new_this_period": 2611,
                "reactivated_this_period": 6338,
                "continuing_this_period": 6109,
                "lapsed_this_period": -12208,
                "y": 2850
              },
              {
                "as_of_date": "2021-01-11",
                "active_this_period": 16266,
                "new_this_period": 2615,
                "reactivated_this_period": 6856,
                "continuing_this_period": 6795,
                "lapsed_this_period": -11400,
                "y": 4866
              },
              {
                "as_of_date": "2021-01-18",
                "active_this_period": 15916,
                "new_this_period": 2472,
                "reactivated_this_period": 6730,
                "continuing_this_period": 6714,
                "lapsed_this_period": -11628,
                "y": 4288
              },
              {
                "as_of_date": "2021-01-25",
                "active_this_period": 16047,
                "new_this_period": 2513,
                "reactivated_this_period": 6868,
                "continuing_this_period": 6666,
                "lapsed_this_period": -10616,
                "y": 5431
              },
              {
                "as_of_date": "2021-02-01",
                "active_this_period": 15327,
                "new_this_period": 2374,
                "reactivated_this_period": 6462,
                "continuing_this_period": 6491,
                "lapsed_this_period": -10843,
                "y": 4484
              },
              {
                "as_of_date": "2021-02-08",
                "active_this_period": 15140,
                "new_this_period": 2253,
                "reactivated_this_period": 6384,
                "continuing_this_period": 6503,
                "lapsed_this_period": -10894,
                "y": 4246
              },
              {
                "as_of_date": "2021-02-15",
                "active_this_period": 14608,
                "new_this_period": 2071,
                "reactivated_this_period": 6259,
                "continuing_this_period": 6278,
                "lapsed_this_period": -11177,
                "y": 3431
              },
              {
                "as_of_date": "2021-02-22",
                "active_this_period": 14519,
                "new_this_period": 1996,
                "reactivated_this_period": 6140,
                "continuing_this_period": 6383,
                "lapsed_this_period": -10986,
                "y": 3533
              },
              {
                "as_of_date": "2021-03-01",
                "active_this_period": 14822,
                "new_this_period": 2049,
                "reactivated_this_period": 6558,
                "continuing_this_period": 6215,
                "lapsed_this_period": -10437,
                "y": 4385
              },
              {
                "as_of_date": "2021-03-08",
                "active_this_period": 14273,
                "new_this_period": 2019,
                "reactivated_this_period": 6579,
                "continuing_this_period": 5675,
                "lapsed_this_period": -10755,
                "y": 3518
              },
              {
                "as_of_date": "2021-03-15",
                "active_this_period": 13702,
                "new_this_period": 1993,
                "reactivated_this_period": 5938,
                "continuing_this_period": 5771,
                "lapsed_this_period": -11190,
                "y": 2512
              },
              {
                "as_of_date": "2021-03-22",
                "active_this_period": 13724,
                "new_this_period": 2050,
                "reactivated_this_period": 5961,
                "continuing_this_period": 5713,
                "lapsed_this_period": -10922,
                "y": 2802
              },
              {
                "as_of_date": "2021-03-29",
                "active_this_period": 13576,
                "new_this_period": 2073,
                "reactivated_this_period": 5850,
                "continuing_this_period": 5653,
                "lapsed_this_period": -10866,
                "y": 2710
              },
              {
                "as_of_date": "2021-04-05",
                "active_this_period": 13249,
                "new_this_period": 2115,
                "reactivated_this_period": 5853,
                "continuing_this_period": 5281,
                "lapsed_this_period": -10700,
                "y": 2549
              }
            ],
            "type": "line",
            "name": "Net Actives",
            "color": "#4B4BE6",
            "lineWidth": 2,
            "dataLabels": {
              "enabled": false,
              // "allowOverlap": true,
              // "formatter": "function() {\n                  if (this.point.x == this.series.data.length - 1) {\n                          if (this.y > 1000000) {\n          return Highcharts.numberFormat((this.y / 1000000), 1) + \"M\"\n        } else if (this.y > 1000) {\n          return Highcharts.numberFormat((this.y / 1000), 1) + \"K\";\n        } else {\n          return this.y\n        };\n                    }\n                          return \"\";\n                }"
            }
          }
        ],
        "xAxis": {
          "categories": [
            "15 Apr 2019",
            "22 Apr 2019",
            "29 Apr 2019",
            "06 May 2019",
            "13 May 2019",
            "20 May 2019",
            "27 May 2019",
            "03 Jun 2019",
            "10 Jun 2019",
            "17 Jun 2019",
            "24 Jun 2019",
            "01 Jul 2019",
            "08 Jul 2019",
            "15 Jul 2019",
            "22 Jul 2019",
            "29 Jul 2019",
            "05 Aug 2019",
            "12 Aug 2019",
            "19 Aug 2019",
            "26 Aug 2019",
            "02 Sep 2019",
            "09 Sep 2019",
            "16 Sep 2019",
            "23 Sep 2019",
            "30 Sep 2019",
            "07 Oct 2019",
            "14 Oct 2019",
            "21 Oct 2019",
            "28 Oct 2019",
            "04 Nov 2019",
            "11 Nov 2019",
            "18 Nov 2019",
            "25 Nov 2019",
            "02 Dec 2019",
            "09 Dec 2019",
            "16 Dec 2019",
            "23 Dec 2019",
            "30 Dec 2019",
            "06 Jan 2020",
            "13 Jan 2020",
            "20 Jan 2020",
            "27 Jan 2020",
            "03 Feb 2020",
            "10 Feb 2020",
            "17 Feb 2020",
            "24 Feb 2020",
            "02 Mar 2020",
            "09 Mar 2020",
            "16 Mar 2020",
            "23 Mar 2020",
            "30 Mar 2020",
            "06 Apr 2020",
            "13 Apr 2020",
            "20 Apr 2020",
            "27 Apr 2020",
            "04 May 2020",
            "11 May 2020",
            "18 May 2020",
            "25 May 2020",
            "01 Jun 2020",
            "08 Jun 2020",
            "15 Jun 2020",
            "22 Jun 2020",
            "29 Jun 2020",
            "06 Jul 2020",
            "13 Jul 2020",
            "20 Jul 2020",
            "27 Jul 2020",
            "03 Aug 2020",
            "10 Aug 2020",
            "17 Aug 2020",
            "24 Aug 2020",
            "31 Aug 2020",
            "07 Sep 2020",
            "14 Sep 2020",
            "21 Sep 2020",
            "28 Sep 2020",
            "05 Oct 2020",
            "12 Oct 2020",
            "19 Oct 2020",
            "26 Oct 2020",
            "02 Nov 2020",
            "09 Nov 2020",
            "16 Nov 2020",
            "23 Nov 2020",
            "30 Nov 2020",
            "07 Dec 2020",
            "14 Dec 2020",
            "21 Dec 2020",
            "28 Dec 2020",
            "04 Jan 2021",
            "11 Jan 2021",
            "18 Jan 2021",
            "25 Jan 2021",
            "01 Feb 2021",
            "08 Feb 2021",
            "15 Feb 2021",
            "22 Feb 2021",
            "01 Mar 2021",
            "08 Mar 2021",
            "15 Mar 2021",
            "22 Mar 2021",
            "29 Mar 2021",
            "05 Apr 2021"
          ],
          "title": {
            "text": " "
          }
        },
        "tooltip": {
          "crosshairs": true,
          "shared": true
        },
        "legend": {
          "title": [
            "Cohort"
          ]
        },
        "boost": {
          "enabled": true,
          "useGPUTranslations": true,
          "usePreAllocated": true,
          "seriesThreshold": 500,
          "allowForce": false
        }

      });

    }

  },
};
</script>

<style>



</style>
