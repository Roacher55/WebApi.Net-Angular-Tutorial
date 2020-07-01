import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styleUrls: []
})
export class PaymentDetailComponent implements OnInit {

  constructor(private service: PaymentDetailService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.resetForm();
  }
  getService() {
    return this.service.formData;
  }
  resetForm(form?: NgForm){
    if(form!= null)
    {
    form.resetForm();
    }
    this.service.formData = {
      PMid: 0,
  
      CardOwnerName: '',
         
      CardNumber : '',
         
      ExpirationDate : '',
         
      CVV : '',
    }
  }

  onSubnit(form:NgForm)
  {
if(this.service.formData.PMid==0)
{
    this.insertRecord(form)
    }
    else
    {
      this.updateRecord(form);
    }
  }

  insertRecord(form:NgForm)
  {
    this.service.postPaymentDetail().subscribe(
      res => {this.resetForm(form), this.toastr.success("Zapis udany", "Rejestracja karty płatniczej"); this.service.refreshList()}, err => { console.log(err)})
  }

  updateRecord(form:NgForm)
  {
    this.service.putPaymentDetail().subscribe(
      res => {this.resetForm(form), this.toastr.info("Zapis udany", "Zmiany Danych"); this.service.refreshList()}, err => { console.log(err)})
  }

}
