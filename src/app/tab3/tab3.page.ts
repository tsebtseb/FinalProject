import { Component } from '@angular/core';
import {DataProviderService} from '../data-provider.service';
import { Observable } from 'rxjs';
import { Myrange } from 'src/models/data.model';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  itemlist=[];
  public mini: String;
  public maxi: String;
  public range$: Observable<Myrange>;

  constructor(private myProvider: DataProviderService) {
  }

  ionViewDidEnter() {
    console.log('Start ionViewDidEnter');
    this.myProvider.getdetail(this.itemlist);
  }

  getrange(){
    this.range$=this.myProvider.getrange(this.mini, this.maxi);
  }

}
