import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  formData: PaymentDetail;
  readonly rootUrl = 'http://localhost:49471/api/PaymentDetail';
  list: PaymentDetail[];

  constructor(private http:HttpClient) { }

  postPaymentDetail()
  {
   return this.http.post(this.rootUrl,this.formData)
  }
  putPaymentDetail()
  {
   return this.http.put(this.rootUrl + '/' + this.formData.PMid,this.formData)
  }
  deletePaymentDetail(id)
  {
   return this.http.delete(this.rootUrl + '/' + id )
  }
  refreshList(){
    this.http.get(this.rootUrl).toPromise().then(res => this.list = res as PaymentDetail[]);
  }
}
