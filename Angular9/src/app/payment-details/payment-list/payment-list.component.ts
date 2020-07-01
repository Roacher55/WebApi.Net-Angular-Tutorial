import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
import { JsonPipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styles: []
})
export class PaymentListComponent implements OnInit {

  constructor(private service: PaymentDetailService, private toastr:ToastrService) { }

  ngOnInit(): void { 
    this.service.refreshList();
  }

  getService()
  {
    return this.service;
  }

 populateForm(pd: any)
 {
    
  this.service.formData.CVV = pd.cvv;
  this.service.formData.CardNumber = pd.cardNumber;
  this.service.formData.CardOwnerName = pd.cardOwnerName;
  this.service.formData.ExpirationDate = pd.expirationDate;
  this.service.formData.PMid = pd.pMid;
    

    
 }

 onDelate(id)
 {
   if(confirm("Czy na pewno chcesz usunąć tą kartę"))
   {
   this.service.deletePaymentDetail(id).subscribe(res => {this.service.refreshList(),
     this.toastr.warning("Dane zostały usunięte", "Usunięcie karty płatniczej")}, 
   err => {console.log(err)})
 }
}
}
