import { Component } from '@angular/core';
import { DataProviderService } from '../data-provider.service';
import { Observable } from 'rxjs';
import { MyData } from 'src/models/data.model';
import { Myinsert } from 'src/models/data.model';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public age: String;
  public data$: Observable<MyData>;
  public inage: String;
  public inbmi: String;
  public incharges: String;
  public indata$: Observable<Myinsert>;
  public confirmedresult: String;
  constructor(private myProvider: DataProviderService) {}

  ionViewDidEnter(){
    console.log('Start ionViewDidEnter');
  }

  getdata(){
    this.data$=this.myProvider.getdata(this.age);
    this.confirmedresult="showing data for "+this.age;
  }

  getinsert(){
    this.indata$=this.myProvider.getinsert(this.inage,this.inbmi,this.incharges);
  }
}
