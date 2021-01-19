import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts'
import { Options } from 'highcharts';
import { Chart } from 'angular-highcharts';
import { UserService } from 'src/app/_services/user.service';
import { PolicyServiceService } from 'src/app/_services/policyService/policy-service.service';


@Component({
  selector: 'line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  userCount = parseInt(sessionStorage.getItem('userscount'));
  policyCount = parseInt(sessionStorage.getItem('policycount'));

  constructor(policyservice: PolicyServiceService) {

    policyservice.viewAll().subscribe(response => {


      sessionStorage.setItem('userscount', response.result)

    })
    policyservice.findExistingPolicies().subscribe(response => {

      sessionStorage.setItem('policycount', response.result)
    })
  }

  ngOnInit() {

  }

  donutChartOptions: Options = {
    chart: {
      type: 'pie',
      plotShadow: false,
      height: 300,
    },
    credits: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        innerSize: '99%',
        borderWidth: 30,
        borderColor: null,
        slicedOffset: 20,
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %'

        },
        showInLegend: true

      },


    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.y}</b>'
    },

    title: {
      verticalAlign: 'middle',
      floating: true,
      text: 'trend',
    },
    legend: {

    },

    series: [
      {
        type: 'pie',

        data: [

          { name: 'Usercount', y: this.userCount, color: '#eeeeee' },
          { name: 'ExistingPolicy', y: this.policyCount, color: '#506ef9' },

        ],
      },
    ],

  };
  chart = new Chart(this.donutChartOptions)
}



