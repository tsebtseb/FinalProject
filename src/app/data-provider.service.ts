import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { MyData } from 'src/models/data.model';
import { Myinsert } from 'src/models/data.model';
import { Myrange } from 'src/models/data.model';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {
  apilink='http://6c9b-34-132-2-236.ngrok.io';

  constructor(private http:HttpClient) { 
    console.log('Create Data Provider');
  }

  getdata(age: String){
    return this.http.get<MyData>(this.apilink+'/getmedcost?age='+age)
  }
  getinsert(inage: String, inbmi: String, incharges: String){
    return this.http.get<Myinsert>(this.apilink+'/insert?dbname=MedicalCost&collectionname=insurance&age='+inage+'&bmi='+inbmi+'&charges='+incharges)
  }

  getagevscharges(listage, listcharges, chart) {
    this.http.get(this.apilink+'/getagevscharges').subscribe(data =>
      {
        for(let i=0; i<data['data'].length;i++) {
          listage.push(data['data'][i]['age']);
          listcharges.push(data['data'][i]['charges']);
        }
        console.log(listage);
        console.log(listcharges);
        chart.update(0);
      });
  }

  getagevsbmi(listage, listbmi, chart) {
    this.http.get(this.apilink+'/getagevsbmi').subscribe(data =>
      {
        for(let i=0; i<data['data'].length;i++) {
          listage.push(data['data'][i]['age']);
          listbmi.push(data['data'][i]['bmi']);
        }
        console.log(listage);
        console.log(listbmi);
        chart.update(0);
      });
  }

  getdetail(itemlist){
   this.http.get(this.apilink+'/getdetail').subscribe(data =>
    {
      for(let i=0; i<data['data'].length;i++) {
        itemlist.push(data['data'][i]);
      }
      console.log(itemlist);
    });
  }  

  getrange(mini, maxi){
    return this.http.get<Myrange>(this.apilink+'/getrange?min='+mini+'&max='+maxi)
  }

}

