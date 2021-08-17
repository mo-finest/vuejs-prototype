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
      <div id="active60Revenue"></div>
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
      window.Highcharts.chart('active60Revenue', {
        title: {
          text: 'Net Revenue in 60 Day',
          align: 'left',
          style: { "font-family": "Gill sans", "font-size": "18px" }
        },

        subtitle: {
          text: 'Revenue in USD on Y-Axis',
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
              "normal"
            ],
            "lineColor": "#ffeeff"
          },
          "column": {
            "stacking": [
              "normal"
            ],
            "groupPadding": 0,
            "pointPadding": 0
          }
        },
        "chart": {
          "type": "column",
          "opacity": 0.6,
          "zoomType": "xy"
        },
        "series": [
          {
            "name": "continuing_current_period_revenue",
            "color": "#E0BD10",
            "index": 4,
            "data": [
              219607,
              217829.8,
              219101.5,
              223598.4,
              226585.1,
              223451.4,
              212229.2,
              213006.8,
              211225.6,
              209255,
              212869.9,
              209656.9,
              208723.5,
              209682.4,
              212702.7,
              214107,
              211625.5,
              211047.2,
              210286.3,
              206931.9,
              201798.8,
              207877.7,
              205730.9,
              205585.9,
              203495.4,
              205212.7,
              200506.5,
              206367.1,
              206132.1,
              212413.5,
              206679.3,
              215572,
              216111.9,
              215345.9,
              215723,
              213738.4,
              217926.9,
              211958.1,
              211759,
              212973.6,
              208157.6,
              217605.8,
              215397.2,
              214566.5,
              204328.9,
              206001.8,
              202148.4,
              204526,
              207923.7,
              206420.1,
              204162.9,
              199185.5,
              197709.2,
              192116.6,
              177052.7,
              176034.8,
              179195.4,
              176010,
              173119.9,
              177273.8,
              176325.2,
              179701.1,
              186972.9,
              184272,
              187044.8,
              188216.8,
              188871.2,
              177466.8,
              173953.2,
              179862.6,
              182223,
              192160.6,
              187722.8,
              175331.7,
              175121.5,
              174676.9,
              173665.7,
              174595.6,
              169035.2,
              163662.6,
              165578.6,
              166746.6,
              165861.8,
              164573.5,
              173516.2,
              174424.3,
              174383.2,
              174845.7,
              178408,
              171702.3,
              156483.5,
              174231.1,
              170101.8,
              167939.7,
              159834.8,
              159191.5,
              153049.5,
              154653,
              152955.1,
              140191.9,
              142762.9,
              141608.4,
              140725.7,
              135125.2
            ]
          },
          {
            "name": "lapsed_prior_period_revenue",
            "color": "#55D483",
            "index": 3,
            "data": [
              -348084.2,
              -349524.3,
              -359051.2,
              -360557.8,
              -361359.4,
              -361167.2,
              -370439,
              -370713.2,
              -367040.7,
              -365415.4,
              -355652.2,
              -356345.2,
              -357530.8,
              -357844,
              -360233.8,
              -355435.5,
              -357220.8,
              -355715.4,
              -359448.2,
              -365491.2,
              -355470.1,
              -355187.1,
              -353713.5,
              -341853.3,
              -341842,
              -333738.3,
              -335123,
              -326159.3,
              -321552.9,
              -323686,
              -325080.3,
              -323568.3,
              -324607.1,
              -319299.9,
              -314992.2,
              -319265.8,
              -318091.4,
              -318027,
              -315472.2,
              -310847.7,
              -314494.6,
              -305751.3,
              -318894.9,
              -324068.5,
              -335823.9,
              -332141.2,
              -323067,
              -344039.1,
              -343090.8,
              -340880,
              -345002.1,
              -335763.9,
              -332303.5,
              -328644,
              -343532.1,
              -346107.1,
              -336623.3,
              -339704.5,
              -336108.2,
              -331911.5,
              -326269,
              -320163.2,
              -301784.4,
              -281445.7,
              -286197.7,
              -291682.5,
              -297415.3,
              -307814.8,
              -312731.5,
              -307076.2,
              -301053.8,
              -312167.5,
              -323260.6,
              -320525.6,
              -322276,
              -313165.8,
              -306078.6,
              -666534.9,
              -667933.1,
              -669437.6,
              -665522.2,
              -654345.8,
              -647516.1,
              -636083.8,
              -637873.7,
              -283819,
              -279788.9,
              -281015.3,
              -268235.9,
              -272455.5,
              -286269.5,
              -266213.1,
              -274432.9,
              -260972.1,
              -274515.3,
              -278773.3,
              -291695,
              -289017.2,
              -278159,
              -289667.8,
              -303149.5,
              -294320.8,
              -291924.4,
              -281617.6
            ]
          },
          {
            "name": "new_current_period_revenue",
            "color": "#499AC8",
            "index": 2,
            "data": [
              176199.7,
              168452.2,
              165523.6,
              161451.8,
              159620.2,
              158506.9,
              155014.4,
              159293.9,
              157309.9,
              158161.9,
              159207.1,
              155850,
              156996.6,
              154270.5,
              144048.5,
              137256.2,
              133257,
              128135.6,
              124806.2,
              123945.1,
              122247.8,
              127530.4,
              131028.1,
              132870.8,
              133174.1,
              132586.3,
              129501.4,
              127250.2,
              123450.3,
              116756.3,
              113787.4,
              111685.4,
              111779.6,
              114057.6,
              120867.3,
              123812.6,
              130655.6,
              132066.2,
              135894,
              135549.3,
              132587.9,
              130488.2,
              121707.7,
              118730.8,
              113667.6,
              118759.3,
              116678.1,
              112501.6,
              110155.8,
              108758,
              104832.6,
              104708.3,
              103194.7,
              101511.5,
              95670.2,
              93417.1,
              95752.5,
              100177.9,
              105132.1,
              110004.8,
              106539.7,
              106362.3,
              103702.3,
              107389.2,
              105510.8,
              101823.2,
              98207.4,
              95771.2,
              454678.9,
              454616.2,
              453261.5,
              450785.2,
              448718.1,
              446054.1,
              446411.4,
              444964.8,
              450849.5,
              88262.1,
              86201.1,
              85737.5,
              86590,
              86323.8,
              86208.8,
              88354.3,
              81114.5,
              80732.2,
              84487.6,
              88299.4,
              92539.8,
              90590.9,
              87146.8,
              89720.4,
              82462.3,
              82277.6,
              77224.3,
              70923.2,
              62857.5,
              58033.4,
              57485.7,
              52941.4,
              53049.8,
              54655.7,
              55038.7,
              55108.4
            ]
          },
          {
            "name": "reactivated_current_period_revenue",
            "color": "#BD10E0",
            "index": 1,
            "data": [
              168965.7,
              166978.3,
              161692.9,
              162400.4,
              165233.8,
              167057,
              168075.8,
              168977.2,
              174957,
              180207.9,
              179839.7,
              178157.2,
              179635.2,
              178535.3,
              176845,
              177481.2,
              178760.4,
              180539.4,
              177737.3,
              175555.6,
              175663.3,
              176286.4,
              177951.8,
              176525.8,
              173917.3,
              172644.4,
              171569.8,
              178062.3,
              179380,
              175854.5,
              176387.9,
              177039.1,
              177257.6,
              182867.2,
              187096.9,
              189881.3,
              188811.6,
              187317.6,
              185976.8,
              189067.3,
              186996.9,
              190479.2,
              182654.8,
              182371.5,
              182425.8,
              187574,
              207999.4,
              186241.9,
              186582.2,
              184772.1,
              179023,
              180798.6,
              179583.9,
              181585.9,
              171535.6,
              171076.9,
              176568.6,
              177725.5,
              174138.4,
              173661.3,
              176010.6,
              173117,
              180724.7,
              201004.4,
              193103.3,
              186324.7,
              189151.6,
              191089.5,
              190980,
              188686.8,
              187911.8,
              179144.1,
              172099.3,
              175595.1,
              169584.1,
              171487.3,
              174558.8,
              171771.5,
              170406.5,
              166527.8,
              164424.9,
              164912.7,
              164394.2,
              165811.3,
              161838,
              157013.6,
              161935.8,
              165409,
              169342.5,
              167806.2,
              157635.2,
              169231.2,
              167105.9,
              172175.5,
              161412.1,
              158065.1,
              153317.6,
              148229.4,
              157343.9,
              157668.1,
              142814.2,
              143133,
              141563.2,
              141020.9
            ]
          },
          {
            "group": "group",
            "data": [
              {
                "as_of_date": "2019-04-15",
                "active_current_period_revenue": 564772.4,
                "new_current_period_revenue": 176199.7,
                "reactivated_current_period_revenue": 168965.7,
                "continuing_current_period_revenue": 219607,
                "lapsed_prior_period_revenue": -348084.2,
                "y": 216688.2
              },
              {
                "as_of_date": "2019-04-22",
                "active_current_period_revenue": 553260.3,
                "new_current_period_revenue": 168452.2,
                "reactivated_current_period_revenue": 166978.3,
                "continuing_current_period_revenue": 217829.8,
                "lapsed_prior_period_revenue": -349524.3,
                "y": 203736
              },
              {
                "as_of_date": "2019-04-29",
                "active_current_period_revenue": 546318,
                "new_current_period_revenue": 165523.6,
                "reactivated_current_period_revenue": 161692.9,
                "continuing_current_period_revenue": 219101.5,
                "lapsed_prior_period_revenue": -359051.2,
                "y": 187266.8
              },
              {
                "as_of_date": "2019-05-06",
                "active_current_period_revenue": 547450.5,
                "new_current_period_revenue": 161451.8,
                "reactivated_current_period_revenue": 162400.4,
                "continuing_current_period_revenue": 223598.4,
                "lapsed_prior_period_revenue": -360557.8,
                "y": 186892.7
              },
              {
                "as_of_date": "2019-05-13",
                "active_current_period_revenue": 551439,
                "new_current_period_revenue": 159620.2,
                "reactivated_current_period_revenue": 165233.8,
                "continuing_current_period_revenue": 226585.1,
                "lapsed_prior_period_revenue": -361359.4,
                "y": 190079.6
              },
              {
                "as_of_date": "2019-05-20",
                "active_current_period_revenue": 549015.3,
                "new_current_period_revenue": 158506.9,
                "reactivated_current_period_revenue": 167057,
                "continuing_current_period_revenue": 223451.4,
                "lapsed_prior_period_revenue": -361167.2,
                "y": 187848.1
              },
              {
                "as_of_date": "2019-05-27",
                "active_current_period_revenue": 535319.4,
                "new_current_period_revenue": 155014.4,
                "reactivated_current_period_revenue": 168075.8,
                "continuing_current_period_revenue": 212229.2,
                "lapsed_prior_period_revenue": -370439,
                "y": 164880.4
              },
              {
                "as_of_date": "2019-06-03",
                "active_current_period_revenue": 541277.9,
                "new_current_period_revenue": 159293.9,
                "reactivated_current_period_revenue": 168977.2,
                "continuing_current_period_revenue": 213006.8,
                "lapsed_prior_period_revenue": -370713.2,
                "y": 170564.7
              },
              {
                "as_of_date": "2019-06-10",
                "active_current_period_revenue": 543492.6,
                "new_current_period_revenue": 157309.9,
                "reactivated_current_period_revenue": 174957,
                "continuing_current_period_revenue": 211225.6,
                "lapsed_prior_period_revenue": -367040.7,
                "y": 176451.9
              },
              {
                "as_of_date": "2019-06-17",
                "active_current_period_revenue": 547624.8,
                "new_current_period_revenue": 158161.9,
                "reactivated_current_period_revenue": 180207.9,
                "continuing_current_period_revenue": 209255,
                "lapsed_prior_period_revenue": -365415.4,
                "y": 182209.4
              },
              {
                "as_of_date": "2019-06-24",
                "active_current_period_revenue": 551916.7,
                "new_current_period_revenue": 159207.1,
                "reactivated_current_period_revenue": 179839.7,
                "continuing_current_period_revenue": 212869.9,
                "lapsed_prior_period_revenue": -355652.2,
                "y": 196264.5
              },
              {
                "as_of_date": "2019-07-01",
                "active_current_period_revenue": 543664.2,
                "new_current_period_revenue": 155850,
                "reactivated_current_period_revenue": 178157.2,
                "continuing_current_period_revenue": 209656.9,
                "lapsed_prior_period_revenue": -356345.2,
                "y": 187319
              },
              {
                "as_of_date": "2019-07-08",
                "active_current_period_revenue": 545355.4,
                "new_current_period_revenue": 156996.6,
                "reactivated_current_period_revenue": 179635.2,
                "continuing_current_period_revenue": 208723.5,
                "lapsed_prior_period_revenue": -357530.8,
                "y": 187824.6
              },
              {
                "as_of_date": "2019-07-15",
                "active_current_period_revenue": 542488.2,
                "new_current_period_revenue": 154270.5,
                "reactivated_current_period_revenue": 178535.3,
                "continuing_current_period_revenue": 209682.4,
                "lapsed_prior_period_revenue": -357844,
                "y": 184644.2
              },
              {
                "as_of_date": "2019-07-22",
                "active_current_period_revenue": 533596.2,
                "new_current_period_revenue": 144048.5,
                "reactivated_current_period_revenue": 176845,
                "continuing_current_period_revenue": 212702.7,
                "lapsed_prior_period_revenue": -360233.8,
                "y": 173362.4
              },
              {
                "as_of_date": "2019-07-29",
                "active_current_period_revenue": 528844.4,
                "new_current_period_revenue": 137256.2,
                "reactivated_current_period_revenue": 177481.2,
                "continuing_current_period_revenue": 214107,
                "lapsed_prior_period_revenue": -355435.5,
                "y": 173408.9
              },
              {
                "as_of_date": "2019-08-05",
                "active_current_period_revenue": 523642.8,
                "new_current_period_revenue": 133257,
                "reactivated_current_period_revenue": 178760.4,
                "continuing_current_period_revenue": 211625.5,
                "lapsed_prior_period_revenue": -357220.8,
                "y": 166422
              },
              {
                "as_of_date": "2019-08-12",
                "active_current_period_revenue": 519722.2,
                "new_current_period_revenue": 128135.6,
                "reactivated_current_period_revenue": 180539.4,
                "continuing_current_period_revenue": 211047.2,
                "lapsed_prior_period_revenue": -355715.4,
                "y": 164006.8
              },
              {
                "as_of_date": "2019-08-19",
                "active_current_period_revenue": 512829.9,
                "new_current_period_revenue": 124806.2,
                "reactivated_current_period_revenue": 177737.3,
                "continuing_current_period_revenue": 210286.3,
                "lapsed_prior_period_revenue": -359448.2,
                "y": 153381.7
              },
              {
                "as_of_date": "2019-08-26",
                "active_current_period_revenue": 506432.6,
                "new_current_period_revenue": 123945.1,
                "reactivated_current_period_revenue": 175555.6,
                "continuing_current_period_revenue": 206931.9,
                "lapsed_prior_period_revenue": -365491.2,
                "y": 140941.4
              },
              {
                "as_of_date": "2019-09-02",
                "active_current_period_revenue": 499709.9,
                "new_current_period_revenue": 122247.8,
                "reactivated_current_period_revenue": 175663.3,
                "continuing_current_period_revenue": 201798.8,
                "lapsed_prior_period_revenue": -355470.1,
                "y": 144239.8
              },
              {
                "as_of_date": "2019-09-09",
                "active_current_period_revenue": 511694.5,
                "new_current_period_revenue": 127530.4,
                "reactivated_current_period_revenue": 176286.4,
                "continuing_current_period_revenue": 207877.7,
                "lapsed_prior_period_revenue": -355187.1,
                "y": 156507.4
              },
              {
                "as_of_date": "2019-09-16",
                "active_current_period_revenue": 514710.8,
                "new_current_period_revenue": 131028.1,
                "reactivated_current_period_revenue": 177951.8,
                "continuing_current_period_revenue": 205730.9,
                "lapsed_prior_period_revenue": -353713.5,
                "y": 160997.3
              },
              {
                "as_of_date": "2019-09-23",
                "active_current_period_revenue": 514982.5,
                "new_current_period_revenue": 132870.8,
                "reactivated_current_period_revenue": 176525.8,
                "continuing_current_period_revenue": 205585.9,
                "lapsed_prior_period_revenue": -341853.3,
                "y": 173129.2
              },
              {
                "as_of_date": "2019-09-30",
                "active_current_period_revenue": 510586.8,
                "new_current_period_revenue": 133174.1,
                "reactivated_current_period_revenue": 173917.3,
                "continuing_current_period_revenue": 203495.4,
                "lapsed_prior_period_revenue": -341842,
                "y": 168744.8
              },
              {
                "as_of_date": "2019-10-07",
                "active_current_period_revenue": 510443.5,
                "new_current_period_revenue": 132586.3,
                "reactivated_current_period_revenue": 172644.4,
                "continuing_current_period_revenue": 205212.7,
                "lapsed_prior_period_revenue": -333738.3,
                "y": 176705.2
              },
              {
                "as_of_date": "2019-10-14",
                "active_current_period_revenue": 501577.8,
                "new_current_period_revenue": 129501.4,
                "reactivated_current_period_revenue": 171569.8,
                "continuing_current_period_revenue": 200506.5,
                "lapsed_prior_period_revenue": -335123,
                "y": 166454.8
              },
              {
                "as_of_date": "2019-10-21",
                "active_current_period_revenue": 511679.5,
                "new_current_period_revenue": 127250.2,
                "reactivated_current_period_revenue": 178062.3,
                "continuing_current_period_revenue": 206367.1,
                "lapsed_prior_period_revenue": -326159.3,
                "y": 185520.2
              },
              {
                "as_of_date": "2019-10-28",
                "active_current_period_revenue": 508962.4,
                "new_current_period_revenue": 123450.3,
                "reactivated_current_period_revenue": 179380,
                "continuing_current_period_revenue": 206132.1,
                "lapsed_prior_period_revenue": -321552.9,
                "y": 187409.5
              },
              {
                "as_of_date": "2019-11-04",
                "active_current_period_revenue": 505024.3,
                "new_current_period_revenue": 116756.3,
                "reactivated_current_period_revenue": 175854.5,
                "continuing_current_period_revenue": 212413.5,
                "lapsed_prior_period_revenue": -323686,
                "y": 181338.3
              },
              {
                "as_of_date": "2019-11-11",
                "active_current_period_revenue": 496854.6,
                "new_current_period_revenue": 113787.4,
                "reactivated_current_period_revenue": 176387.9,
                "continuing_current_period_revenue": 206679.3,
                "lapsed_prior_period_revenue": -325080.3,
                "y": 171774.3
              },
              {
                "as_of_date": "2019-11-18",
                "active_current_period_revenue": 504296.5,
                "new_current_period_revenue": 111685.4,
                "reactivated_current_period_revenue": 177039.1,
                "continuing_current_period_revenue": 215572,
                "lapsed_prior_period_revenue": -323568.3,
                "y": 180728.2
              },
              {
                "as_of_date": "2019-11-25",
                "active_current_period_revenue": 505149.1,
                "new_current_period_revenue": 111779.6,
                "reactivated_current_period_revenue": 177257.6,
                "continuing_current_period_revenue": 216111.9,
                "lapsed_prior_period_revenue": -324607.1,
                "y": 180542
              },
              {
                "as_of_date": "2019-12-02",
                "active_current_period_revenue": 512270.7,
                "new_current_period_revenue": 114057.6,
                "reactivated_current_period_revenue": 182867.2,
                "continuing_current_period_revenue": 215345.9,
                "lapsed_prior_period_revenue": -319299.9,
                "y": 192970.8
              },
              {
                "as_of_date": "2019-12-09",
                "active_current_period_revenue": 523687.2,
                "new_current_period_revenue": 120867.3,
                "reactivated_current_period_revenue": 187096.9,
                "continuing_current_period_revenue": 215723,
                "lapsed_prior_period_revenue": -314992.2,
                "y": 208695
              },
              {
                "as_of_date": "2019-12-16",
                "active_current_period_revenue": 527432.4,
                "new_current_period_revenue": 123812.6,
                "reactivated_current_period_revenue": 189881.3,
                "continuing_current_period_revenue": 213738.4,
                "lapsed_prior_period_revenue": -319265.8,
                "y": 208166.6
              },
              {
                "as_of_date": "2019-12-23",
                "active_current_period_revenue": 537394.1,
                "new_current_period_revenue": 130655.6,
                "reactivated_current_period_revenue": 188811.6,
                "continuing_current_period_revenue": 217926.9,
                "lapsed_prior_period_revenue": -318091.4,
                "y": 219302.7
              },
              {
                "as_of_date": "2019-12-30",
                "active_current_period_revenue": 531341.9,
                "new_current_period_revenue": 132066.2,
                "reactivated_current_period_revenue": 187317.6,
                "continuing_current_period_revenue": 211958.1,
                "lapsed_prior_period_revenue": -318027,
                "y": 213314.9
              },
              {
                "as_of_date": "2020-01-06",
                "active_current_period_revenue": 533629.8,
                "new_current_period_revenue": 135894,
                "reactivated_current_period_revenue": 185976.8,
                "continuing_current_period_revenue": 211759,
                "lapsed_prior_period_revenue": -315472.2,
                "y": 218157.6
              },
              {
                "as_of_date": "2020-01-13",
                "active_current_period_revenue": 537590.3,
                "new_current_period_revenue": 135549.3,
                "reactivated_current_period_revenue": 189067.3,
                "continuing_current_period_revenue": 212973.6,
                "lapsed_prior_period_revenue": -310847.7,
                "y": 226742.6
              },
              {
                "as_of_date": "2020-01-20",
                "active_current_period_revenue": 527742.3,
                "new_current_period_revenue": 132587.9,
                "reactivated_current_period_revenue": 186996.9,
                "continuing_current_period_revenue": 208157.6,
                "lapsed_prior_period_revenue": -314494.6,
                "y": 213247.7
              },
              {
                "as_of_date": "2020-01-27",
                "active_current_period_revenue": 538573.2,
                "new_current_period_revenue": 130488.2,
                "reactivated_current_period_revenue": 190479.2,
                "continuing_current_period_revenue": 217605.8,
                "lapsed_prior_period_revenue": -305751.3,
                "y": 232821.9
              },
              {
                "as_of_date": "2020-02-03",
                "active_current_period_revenue": 519759.7,
                "new_current_period_revenue": 121707.7,
                "reactivated_current_period_revenue": 182654.8,
                "continuing_current_period_revenue": 215397.2,
                "lapsed_prior_period_revenue": -318894.9,
                "y": 200864.8
              },
              {
                "as_of_date": "2020-02-10",
                "active_current_period_revenue": 515668.8,
                "new_current_period_revenue": 118730.8,
                "reactivated_current_period_revenue": 182371.5,
                "continuing_current_period_revenue": 214566.5,
                "lapsed_prior_period_revenue": -324068.5,
                "y": 191600.3
              },
              {
                "as_of_date": "2020-02-17",
                "active_current_period_revenue": 500422.2,
                "new_current_period_revenue": 113667.6,
                "reactivated_current_period_revenue": 182425.8,
                "continuing_current_period_revenue": 204328.9,
                "lapsed_prior_period_revenue": -335823.9,
                "y": 164598.3
              },
              {
                "as_of_date": "2020-02-24",
                "active_current_period_revenue": 512335.1,
                "new_current_period_revenue": 118759.3,
                "reactivated_current_period_revenue": 187574,
                "continuing_current_period_revenue": 206001.8,
                "lapsed_prior_period_revenue": -332141.2,
                "y": 180193.9
              },
              {
                "as_of_date": "2020-03-02",
                "active_current_period_revenue": 526825.9,
                "new_current_period_revenue": 116678.1,
                "reactivated_current_period_revenue": 207999.4,
                "continuing_current_period_revenue": 202148.4,
                "lapsed_prior_period_revenue": -323067,
                "y": 203758.9
              },
              {
                "as_of_date": "2020-03-09",
                "active_current_period_revenue": 503269.5,
                "new_current_period_revenue": 112501.6,
                "reactivated_current_period_revenue": 186241.9,
                "continuing_current_period_revenue": 204526,
                "lapsed_prior_period_revenue": -344039.1,
                "y": 159230.4
              },
              {
                "as_of_date": "2020-03-16",
                "active_current_period_revenue": 504661.7,
                "new_current_period_revenue": 110155.8,
                "reactivated_current_period_revenue": 186582.2,
                "continuing_current_period_revenue": 207923.7,
                "lapsed_prior_period_revenue": -343090.8,
                "y": 161570.9
              },
              {
                "as_of_date": "2020-03-23",
                "active_current_period_revenue": 499950.2,
                "new_current_period_revenue": 108758,
                "reactivated_current_period_revenue": 184772.1,
                "continuing_current_period_revenue": 206420.1,
                "lapsed_prior_period_revenue": -340880,
                "y": 159070.2
              },
              {
                "as_of_date": "2020-03-30",
                "active_current_period_revenue": 488018.4,
                "new_current_period_revenue": 104832.6,
                "reactivated_current_period_revenue": 179023,
                "continuing_current_period_revenue": 204162.9,
                "lapsed_prior_period_revenue": -345002.1,
                "y": 143016.3
              },
              {
                "as_of_date": "2020-04-06",
                "active_current_period_revenue": 484692.4,
                "new_current_period_revenue": 104708.3,
                "reactivated_current_period_revenue": 180798.6,
                "continuing_current_period_revenue": 199185.5,
                "lapsed_prior_period_revenue": -335763.9,
                "y": 148928.5
              },
              {
                "as_of_date": "2020-04-13",
                "active_current_period_revenue": 480487.9,
                "new_current_period_revenue": 103194.7,
                "reactivated_current_period_revenue": 179583.9,
                "continuing_current_period_revenue": 197709.2,
                "lapsed_prior_period_revenue": -332303.5,
                "y": 148184.4
              },
              {
                "as_of_date": "2020-04-20",
                "active_current_period_revenue": 475214,
                "new_current_period_revenue": 101511.5,
                "reactivated_current_period_revenue": 181585.9,
                "continuing_current_period_revenue": 192116.6,
                "lapsed_prior_period_revenue": -328644,
                "y": 146570
              },
              {
                "as_of_date": "2020-04-27",
                "active_current_period_revenue": 444258.6,
                "new_current_period_revenue": 95670.2,
                "reactivated_current_period_revenue": 171535.6,
                "continuing_current_period_revenue": 177052.7,
                "lapsed_prior_period_revenue": -343532.1,
                "y": 100726.5
              },
              {
                "as_of_date": "2020-05-04",
                "active_current_period_revenue": 440528.9,
                "new_current_period_revenue": 93417.1,
                "reactivated_current_period_revenue": 171076.9,
                "continuing_current_period_revenue": 176034.8,
                "lapsed_prior_period_revenue": -346107.1,
                "y": 94421.8
              },
              {
                "as_of_date": "2020-05-11",
                "active_current_period_revenue": 451516.5,
                "new_current_period_revenue": 95752.5,
                "reactivated_current_period_revenue": 176568.6,
                "continuing_current_period_revenue": 179195.4,
                "lapsed_prior_period_revenue": -336623.3,
                "y": 114893.2
              },
              {
                "as_of_date": "2020-05-18",
                "active_current_period_revenue": 453913.4,
                "new_current_period_revenue": 100177.9,
                "reactivated_current_period_revenue": 177725.5,
                "continuing_current_period_revenue": 176010,
                "lapsed_prior_period_revenue": -339704.5,
                "y": 114208.9
              },
              {
                "as_of_date": "2020-05-25",
                "active_current_period_revenue": 452390.4,
                "new_current_period_revenue": 105132.1,
                "reactivated_current_period_revenue": 174138.4,
                "continuing_current_period_revenue": 173119.9,
                "lapsed_prior_period_revenue": -336108.2,
                "y": 116282.2
              },
              {
                "as_of_date": "2020-06-01",
                "active_current_period_revenue": 460939.8,
                "new_current_period_revenue": 110004.8,
                "reactivated_current_period_revenue": 173661.3,
                "continuing_current_period_revenue": 177273.8,
                "lapsed_prior_period_revenue": -331911.5,
                "y": 129028.3
              },
              {
                "as_of_date": "2020-06-08",
                "active_current_period_revenue": 458875.6,
                "new_current_period_revenue": 106539.7,
                "reactivated_current_period_revenue": 176010.6,
                "continuing_current_period_revenue": 176325.2,
                "lapsed_prior_period_revenue": -326269,
                "y": 132606.6
              },
              {
                "as_of_date": "2020-06-15",
                "active_current_period_revenue": 459180.5,
                "new_current_period_revenue": 106362.3,
                "reactivated_current_period_revenue": 173117,
                "continuing_current_period_revenue": 179701.1,
                "lapsed_prior_period_revenue": -320163.2,
                "y": 139017.3
              },
              {
                "as_of_date": "2020-06-22",
                "active_current_period_revenue": 471399.8,
                "new_current_period_revenue": 103702.3,
                "reactivated_current_period_revenue": 180724.7,
                "continuing_current_period_revenue": 186972.9,
                "lapsed_prior_period_revenue": -301784.4,
                "y": 169615.4
              },
              {
                "as_of_date": "2020-06-29",
                "active_current_period_revenue": 492665.6,
                "new_current_period_revenue": 107389.2,
                "reactivated_current_period_revenue": 201004.4,
                "continuing_current_period_revenue": 184272,
                "lapsed_prior_period_revenue": -281445.7,
                "y": 211219.9
              },
              {
                "as_of_date": "2020-07-06",
                "active_current_period_revenue": 485658.9,
                "new_current_period_revenue": 105510.8,
                "reactivated_current_period_revenue": 193103.3,
                "continuing_current_period_revenue": 187044.8,
                "lapsed_prior_period_revenue": -286197.7,
                "y": 199461.2
              },
              {
                "as_of_date": "2020-07-13",
                "active_current_period_revenue": 476364.7,
                "new_current_period_revenue": 101823.2,
                "reactivated_current_period_revenue": 186324.7,
                "continuing_current_period_revenue": 188216.8,
                "lapsed_prior_period_revenue": -291682.5,
                "y": 184682.2
              },
              {
                "as_of_date": "2020-07-20",
                "active_current_period_revenue": 476230.2,
                "new_current_period_revenue": 98207.4,
                "reactivated_current_period_revenue": 189151.6,
                "continuing_current_period_revenue": 188871.2,
                "lapsed_prior_period_revenue": -297415.3,
                "y": 178814.9
              },
              {
                "as_of_date": "2020-07-27",
                "active_current_period_revenue": 464327.4,
                "new_current_period_revenue": 95771.2,
                "reactivated_current_period_revenue": 191089.5,
                "continuing_current_period_revenue": 177466.8,
                "lapsed_prior_period_revenue": -307814.8,
                "y": 156512.6
              },
              {
                "as_of_date": "2020-08-03",
                "active_current_period_revenue": 819612.1,
                "new_current_period_revenue": 454678.9,
                "reactivated_current_period_revenue": 190980,
                "continuing_current_period_revenue": 173953.2,
                "lapsed_prior_period_revenue": -312731.5,
                "y": 506880.6
              },
              {
                "as_of_date": "2020-08-10",
                "active_current_period_revenue": 823165.6,
                "new_current_period_revenue": 454616.2,
                "reactivated_current_period_revenue": 188686.8,
                "continuing_current_period_revenue": 179862.6,
                "lapsed_prior_period_revenue": -307076.2,
                "y": 516089.4
              },
              {
                "as_of_date": "2020-08-17",
                "active_current_period_revenue": 823396.3,
                "new_current_period_revenue": 453261.5,
                "reactivated_current_period_revenue": 187911.8,
                "continuing_current_period_revenue": 182223,
                "lapsed_prior_period_revenue": -301053.8,
                "y": 522342.5
              },
              {
                "as_of_date": "2020-08-24",
                "active_current_period_revenue": 822089.9,
                "new_current_period_revenue": 450785.2,
                "reactivated_current_period_revenue": 179144.1,
                "continuing_current_period_revenue": 192160.6,
                "lapsed_prior_period_revenue": -312167.5,
                "y": 509922.4
              },
              {
                "as_of_date": "2020-08-31",
                "active_current_period_revenue": 808540.2,
                "new_current_period_revenue": 448718.1,
                "reactivated_current_period_revenue": 172099.3,
                "continuing_current_period_revenue": 187722.8,
                "lapsed_prior_period_revenue": -323260.6,
                "y": 485279.6
              },
              {
                "as_of_date": "2020-09-07",
                "active_current_period_revenue": 796980.8,
                "new_current_period_revenue": 446054.1,
                "reactivated_current_period_revenue": 175595.1,
                "continuing_current_period_revenue": 175331.7,
                "lapsed_prior_period_revenue": -320525.6,
                "y": 476455.2
              },
              {
                "as_of_date": "2020-09-14",
                "active_current_period_revenue": 791117,
                "new_current_period_revenue": 446411.4,
                "reactivated_current_period_revenue": 169584.1,
                "continuing_current_period_revenue": 175121.5,
                "lapsed_prior_period_revenue": -322276,
                "y": 468841
              },
              {
                "as_of_date": "2020-09-21",
                "active_current_period_revenue": 791129.1,
                "new_current_period_revenue": 444964.8,
                "reactivated_current_period_revenue": 171487.3,
                "continuing_current_period_revenue": 174676.9,
                "lapsed_prior_period_revenue": -313165.8,
                "y": 477963.3
              },
              {
                "as_of_date": "2020-09-28",
                "active_current_period_revenue": 799074,
                "new_current_period_revenue": 450849.5,
                "reactivated_current_period_revenue": 174558.8,
                "continuing_current_period_revenue": 173665.7,
                "lapsed_prior_period_revenue": -306078.6,
                "y": 492995.4
              },
              {
                "as_of_date": "2020-10-05",
                "active_current_period_revenue": 434629.2,
                "new_current_period_revenue": 88262.1,
                "reactivated_current_period_revenue": 171771.5,
                "continuing_current_period_revenue": 174595.6,
                "lapsed_prior_period_revenue": -666534.9,
                "y": -231905.7
              },
              {
                "as_of_date": "2020-10-12",
                "active_current_period_revenue": 425642.9,
                "new_current_period_revenue": 86201.1,
                "reactivated_current_period_revenue": 170406.5,
                "continuing_current_period_revenue": 169035.2,
                "lapsed_prior_period_revenue": -667933.1,
                "y": -242290.2
              },
              {
                "as_of_date": "2020-10-19",
                "active_current_period_revenue": 415927.9,
                "new_current_period_revenue": 85737.5,
                "reactivated_current_period_revenue": 166527.8,
                "continuing_current_period_revenue": 163662.6,
                "lapsed_prior_period_revenue": -669437.6,
                "y": -253509.7
              },
              {
                "as_of_date": "2020-10-26",
                "active_current_period_revenue": 416593.4,
                "new_current_period_revenue": 86590,
                "reactivated_current_period_revenue": 164424.9,
                "continuing_current_period_revenue": 165578.6,
                "lapsed_prior_period_revenue": -665522.2,
                "y": -248928.8
              },
              {
                "as_of_date": "2020-11-02",
                "active_current_period_revenue": 417983,
                "new_current_period_revenue": 86323.8,
                "reactivated_current_period_revenue": 164912.7,
                "continuing_current_period_revenue": 166746.6,
                "lapsed_prior_period_revenue": -654345.8,
                "y": -236362.8
              },
              {
                "as_of_date": "2020-11-09",
                "active_current_period_revenue": 416464.8,
                "new_current_period_revenue": 86208.8,
                "reactivated_current_period_revenue": 164394.2,
                "continuing_current_period_revenue": 165861.8,
                "lapsed_prior_period_revenue": -647516.1,
                "y": -231051.3
              },
              {
                "as_of_date": "2020-11-16",
                "active_current_period_revenue": 418739.2,
                "new_current_period_revenue": 88354.3,
                "reactivated_current_period_revenue": 165811.3,
                "continuing_current_period_revenue": 164573.5,
                "lapsed_prior_period_revenue": -636083.8,
                "y": -217344.6
              },
              {
                "as_of_date": "2020-11-23",
                "active_current_period_revenue": 416468.8,
                "new_current_period_revenue": 81114.5,
                "reactivated_current_period_revenue": 161838,
                "continuing_current_period_revenue": 173516.2,
                "lapsed_prior_period_revenue": -637873.7,
                "y": -221404.9
              },
              {
                "as_of_date": "2020-11-30",
                "active_current_period_revenue": 412170.1,
                "new_current_period_revenue": 80732.2,
                "reactivated_current_period_revenue": 157013.6,
                "continuing_current_period_revenue": 174424.3,
                "lapsed_prior_period_revenue": -283819,
                "y": 128351.1
              },
              {
                "as_of_date": "2020-12-07",
                "active_current_period_revenue": 420806.5,
                "new_current_period_revenue": 84487.6,
                "reactivated_current_period_revenue": 161935.8,
                "continuing_current_period_revenue": 174383.2,
                "lapsed_prior_period_revenue": -279788.9,
                "y": 141017.6
              },
              {
                "as_of_date": "2020-12-14",
                "active_current_period_revenue": 428554.1,
                "new_current_period_revenue": 88299.4,
                "reactivated_current_period_revenue": 165409,
                "continuing_current_period_revenue": 174845.7,
                "lapsed_prior_period_revenue": -281015.3,
                "y": 147538.8
              },
              {
                "as_of_date": "2020-12-21",
                "active_current_period_revenue": 440290.3,
                "new_current_period_revenue": 92539.8,
                "reactivated_current_period_revenue": 169342.5,
                "continuing_current_period_revenue": 178408,
                "lapsed_prior_period_revenue": -268235.9,
                "y": 172054.4
              },
              {
                "as_of_date": "2020-12-28",
                "active_current_period_revenue": 430099.4,
                "new_current_period_revenue": 90590.9,
                "reactivated_current_period_revenue": 167806.2,
                "continuing_current_period_revenue": 171702.3,
                "lapsed_prior_period_revenue": -272455.5,
                "y": 157643.9
              },
              {
                "as_of_date": "2021-01-04",
                "active_current_period_revenue": 401265.4,
                "new_current_period_revenue": 87146.8,
                "reactivated_current_period_revenue": 157635.2,
                "continuing_current_period_revenue": 156483.5,
                "lapsed_prior_period_revenue": -286269.5,
                "y": 114995.9
              },
              {
                "as_of_date": "2021-01-11",
                "active_current_period_revenue": 433182.8,
                "new_current_period_revenue": 89720.4,
                "reactivated_current_period_revenue": 169231.2,
                "continuing_current_period_revenue": 174231.1,
                "lapsed_prior_period_revenue": -266213.1,
                "y": 166969.7
              },
              {
                "as_of_date": "2021-01-18",
                "active_current_period_revenue": 419670,
                "new_current_period_revenue": 82462.3,
                "reactivated_current_period_revenue": 167105.9,
                "continuing_current_period_revenue": 170101.8,
                "lapsed_prior_period_revenue": -274432.9,
                "y": 145237.1
              },
              {
                "as_of_date": "2021-01-25",
                "active_current_period_revenue": 422392.8,
                "new_current_period_revenue": 82277.6,
                "reactivated_current_period_revenue": 172175.5,
                "continuing_current_period_revenue": 167939.7,
                "lapsed_prior_period_revenue": -260972.1,
                "y": 161420.7
              },
              {
                "as_of_date": "2021-02-01",
                "active_current_period_revenue": 398471.2,
                "new_current_period_revenue": 77224.3,
                "reactivated_current_period_revenue": 161412.1,
                "continuing_current_period_revenue": 159834.8,
                "lapsed_prior_period_revenue": -274515.3,
                "y": 123955.9
              },
              {
                "as_of_date": "2021-02-08",
                "active_current_period_revenue": 388179.8,
                "new_current_period_revenue": 70923.2,
                "reactivated_current_period_revenue": 158065.1,
                "continuing_current_period_revenue": 159191.5,
                "lapsed_prior_period_revenue": -278773.3,
                "y": 109406.5
              },
              {
                "as_of_date": "2021-02-15",
                "active_current_period_revenue": 369224.6,
                "new_current_period_revenue": 62857.5,
                "reactivated_current_period_revenue": 153317.6,
                "continuing_current_period_revenue": 153049.5,
                "lapsed_prior_period_revenue": -291695,
                "y": 77529.6
              },
              {
                "as_of_date": "2021-02-22",
                "active_current_period_revenue": 360915.8,
                "new_current_period_revenue": 58033.4,
                "reactivated_current_period_revenue": 148229.4,
                "continuing_current_period_revenue": 154653,
                "lapsed_prior_period_revenue": -289017.2,
                "y": 71898.6
              },
              {
                "as_of_date": "2021-03-01",
                "active_current_period_revenue": 367784.7,
                "new_current_period_revenue": 57485.7,
                "reactivated_current_period_revenue": 157343.9,
                "continuing_current_period_revenue": 152955.1,
                "lapsed_prior_period_revenue": -278159,
                "y": 89625.7
              },
              {
                "as_of_date": "2021-03-08",
                "active_current_period_revenue": 350801.4,
                "new_current_period_revenue": 52941.4,
                "reactivated_current_period_revenue": 157668.1,
                "continuing_current_period_revenue": 140191.9,
                "lapsed_prior_period_revenue": -289667.8,
                "y": 61133.6
              },
              {
                "as_of_date": "2021-03-15",
                "active_current_period_revenue": 338626.8,
                "new_current_period_revenue": 53049.8,
                "reactivated_current_period_revenue": 142814.2,
                "continuing_current_period_revenue": 142762.9,
                "lapsed_prior_period_revenue": -303149.5,
                "y": 35477.3
              },
              {
                "as_of_date": "2021-03-22",
                "active_current_period_revenue": 339397.1,
                "new_current_period_revenue": 54655.7,
                "reactivated_current_period_revenue": 143133,
                "continuing_current_period_revenue": 141608.4,
                "lapsed_prior_period_revenue": -294320.8,
                "y": 45076.3
              },
              {
                "as_of_date": "2021-03-29",
                "active_current_period_revenue": 337327.6,
                "new_current_period_revenue": 55038.7,
                "reactivated_current_period_revenue": 141563.2,
                "continuing_current_period_revenue": 140725.7,
                "lapsed_prior_period_revenue": -291924.4,
                "y": 45403.2
              },
              {
                "as_of_date": "2021-04-05",
                "active_current_period_revenue": 331254.6,
                "new_current_period_revenue": 55108.4,
                "reactivated_current_period_revenue": 141020.9,
                "continuing_current_period_revenue": 135125.2,
                "lapsed_prior_period_revenue": -281617.6,
                "y": 49637
              }
            ],
            "type": "line",
            "color": "#4B4BE6",
            "name": "Net Negative Churn",
            "lineWidth": 2,
            "dataLabels": {
              "enabled": false,
              // "allowOverlap": true,
              // "formatter": "function() {\nif (this.point.x == this.series.data.length - 1) {\n             if (this.y > 1000000) {\n          return \"$\" + Highcharts.numberFormat((this.y / 1000000), 1) + \"M\"\n        } else if (this.y > 1000) {\n          return \"$\" + Highcharts.numberFormat((this.y / 1000), 1) + \"K\";\n        } else {\n          return this.y\n        };\n                    }\n                          return \"\";\n                }"
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
        },

      });

    }

  },
};
</script>

<style>



</style>
