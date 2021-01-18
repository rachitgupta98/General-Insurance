import { Component, OnInit } from '@angular/core';
import { Options } from 'highcharts';
import { Chart } from 'angular-highcharts';
import { ClaimPolicyService } from 'src/app/_services/claim-policy/claim-policy.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  claims=parseInt(sessionStorage.getItem('claimNo'));
  policies=parseInt(sessionStorage.getItem('policycount'));

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
          enabled:true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %'

        },
      },
      
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    title: {
      verticalAlign: 'middle',
      floating: true,
      text: 'trend',
    },
    legend: {
      enabled: true,
    },
    series: [
      {
        type: 'pie',
        
        data: [
          // { name: 'a', y: 1, color: '#eeeeee' },
          // { name: 'b', y: 2, color: '' },
          { name: 'ClaimsApproved', y:this.claims, color: '#393e46' },
          { name: 'PoliciesGiven', y:this.policies, color: '#eeeeee' },
          // { name: 'e', y: 5, color: '#506ef9' },
        ],
      },
    ],
    
  };
  
  
chart=new Chart(this.donutChartOptions)
  constructor(private admin:ClaimPolicyService,private router: Router) { 
    admin.fetchapprovedclaims().subscribe(response=>{
      console.log(response,"resssponse");
      this.claims=response.result
      sessionStorage.setItem('claimNo',response.result)
    })
    admin.fetchpolicies().subscribe(response=>{
      console.log(response,"policy..ka");
      this.policies=response.result;
      sessionStorage.setItem('policycount',response.result)
      
    })
    
    
  }


  ngOnInit() {
    // if(sessionStorage.getItem('policycount')==null)
    // {
    //   window.location.reload();
    // }
    
  }

  
}
