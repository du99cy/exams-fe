import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BaseComponent } from '@shared/abstract/base.component';
import { IPayment } from './models/interface';
import { BANKS } from './recharge.constant';
import { RechargeService } from './services/recharge.service';

@Component({
  selector: 'ex-recharge',
  templateUrl: './recharge.component.html',
  styleUrls: ['./recharge.component.scss'],
})
export class RechargeComponent extends BaseComponent implements OnInit {
  rechargeForm: FormGroup;
  readonly banks: { text: string; value: string }[] = BANKS;
  isLoading = false;
  rechargeInfo:any;
  constructor(
    private fb: FormBuilder,
    private rechargeService: RechargeService,
    private route: ActivatedRoute
  ) {
    super();
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.rechargeService.saveMoney(params).subscribe((res)=> {
        this.rechargeInfo = res['data']
        console.log(this.rechargeInfo)
      })
    });
    this.buildForm();
  }
  buildForm() {
    this.rechargeForm = this.fb.group({
      amount: ['', [Validators.required, this.ValidateAmount]],
      bank_code: ['', Validators.required],
    });
  }
  isValidControl(controlName: string, errorName: string) {
    const control = this.rechargeForm.get(controlName);
    return control.hasError(errorName) && control.touched;
  }
  Charge() {
    this.rechargeForm.markAllAsTouched();
    const body: IPayment = {
      ...this.rechargeForm.value,
      order_id: 'hd' + new Date().getTime(),
    };
    this.rechargeService.recharge(body).subscribe((res) => {
      window.location.href = res.data;
    });
  }
  ValidateAmount(control: AbstractControl): { [key: string]: any } | null {
    console.log(control.value, control.value % 1000 === 0);
    return control.value > 0 && control.value % 1000 === 0
      ? null
      : { amountErr: true };
  }
}
