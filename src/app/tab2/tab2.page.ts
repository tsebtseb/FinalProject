import { Component, ElementRef, ViewChild } from '@angular/core';
import { Data } from '@angular/router';
import { Chart, registerables } from 'chart.js';
import { DataProviderService } from '../data-provider.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  // Importing ViewChild. We need @ViewChild decorator to get a reference to the local variable 
  // that we have added to the canvas element in the HTML template.
  @ViewChild('agechargesLineCanvas', {static: true}) private agechargesLineCanvas: ElementRef;
  @ViewChild('agebmiLineCanvas', {static: true}) private agebmiLineCanvas: ElementRef;
  @ViewChild('agechargesBarCanvas', {static: true}) private agechargesBarCanvas: ElementRef;
  @ViewChild('agebmiBarCanvas', {static: true}) private agebmiBarCanvas: ElementRef;
  @ViewChild('agechargesdoughnutCanvas', {static: true}) private agechargesdoughnutCanvas: ElementRef;
  @ViewChild('agebmidoughnutCanvas', {static: true}) private agebmidoughnutCanvas: ElementRef;

  agechargesChart: any;
  agebmiChart: any;
  agechargesBar: any;
  agebmiBar: any;
  agechargesdonut: any;
  agebmidonut: any;
  listage1=[];
  listcharges1=[];
  listage2=[];
  listbmi2=[];
  listage3=[];
  listcharges3=[];
  listage4=[];
  listbmi4=[];
  listage5=[];
  listcharges5=[];
  listage6=[];
  listbmi6=[];
  

  constructor(private myDataProvider: DataProviderService) {
    Chart.register(...registerables);
  }

  ionViewDidEnter() {
    this.agechargesChartMethod(); 
    this.myDataProvider.getagevscharges(this.listage1,this.listcharges1,this.agechargesChart);
    this.agebmiChartMethod();
    this.myDataProvider.getagevsbmi(this.listage2,this.listbmi2,this.agebmiChart);
    this.agechargesBarMethod();
    this.myDataProvider.getagevscharges(this.listage3,this.listcharges3, this.agechargesBar);
    this.agebmiBarMethod();
    this.myDataProvider.getagevsbmi(this.listage4,this.listbmi4, this.agebmiBar);
    this.agechargesdoughnutMethod();
    this.myDataProvider.getagevscharges(this.listage5,this.listcharges5, this.agechargesdonut);
    this.agebmidoughnutMethod();
    this.myDataProvider.getagevsbmi(this.listage6,this.listbmi6, this.agebmidonut);
  }

  agechargesChartMethod() {
    this.agechargesChart = new Chart(this.agechargesLineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: this.listage1,
        datasets: [
          {
            label: 'age vs charges',
            fill: false,

            backgroundColor: 'rgba(100,255,100,0.4)',
            borderColor: 'rgba(170,244,170,0.6)',
            borderCapStyle: 'round',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: this.listcharges1,
            spanGaps: false,
          }
        ]
      }
    });
  }

  agebmiChartMethod() {
    this.agebmiChart = new Chart(this.agebmiLineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: this.listage2,
        datasets: [
          {
            label: 'age vs bmi',
            fill: false,

            backgroundColor: 'rgba(100,255,100,0.4)',
            borderColor: 'rgba(170,244,170,0.6)',
            borderCapStyle: 'round',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: this.listbmi2,
            spanGaps: false,
          }
        ]
      }
    });
  }

  agechargesBarMethod() {
    // Now we need to supply a Chart element reference with an object that defines the type of chart we want to use, and the type of data we want to display.
    this.agechargesBar = new Chart(this.agechargesBarCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: this.listage3,
        datasets: [{
          label: 'age vs charges',
          data: this.listcharges3,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {

      }
    });
  }

  agebmiBarMethod() {
    // Now we need to supply a Chart element reference with an object that defines the type of chart we want to use, and the type of data we want to display.
    this.agebmiBar = new Chart(this.agebmiBarCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: this.listage4,
        datasets: [{
          label: 'age vs bmi',
          data: this.listbmi4,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {

      }
    });
  }

  agechargesdoughnutMethod() {
    this.agechargesdonut = new Chart(this.agechargesdoughnutCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: this.listage5,
        datasets: [{
          label: 'age vs charges',
          data: this.listcharges5,
          backgroundColor: [
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'
          ],
          hoverBackgroundColor: [
            '#FFCE56',
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#FF6384'
          ]
        }]
      }
    });
  }

  agebmidoughnutMethod() {
    this.agebmidonut = new Chart(this.agebmidoughnutCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: this.listage6,
        datasets: [{
          label: 'age vs bmi',
          data: this.listbmi6,
          backgroundColor: [
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'
          ],
          hoverBackgroundColor: [
            '#FFCE56',
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#FF6384'
          ]
        }]
      }
    });
  }


}
