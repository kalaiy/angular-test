import { Component, Input, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  ValidatorFn,
  FormArray,
} from '@angular/forms';
import { Observable, throwError } from 'rxjs';
import { map, retry, catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { CustomValidator } from '../../helpers/custom.validators';
import { UserDetails } from '../../models/userdetails';
import { FormHelper } from '../../helpers/form.helpers';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styles: [`h1 { font-family: Lato; }`],
})
export class HomeComponent implements OnInit {
  @Input() name: string;

  homeFromHandle: FormGroup;
  firstname: AbstractControl;
  lastname: AbstractControl;
  model: UserDetails = new UserDetails();
  isSuccess: boolean;
  errorMsg: string = "";

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {
    this.homeFromHandle = this.formBuilder.group({
      firstname: ['', Validators.compose([CustomValidator.Required])],
      lastname: ['', Validators.compose([CustomValidator.Required])],
    });

    this.firstname = this.homeFromHandle.get('firstname');
    this.lastname = this.homeFromHandle.get('lastname');
  }

  ngOnInit() { }

  register() {
    FormHelper.markFormGroupTouched(this.homeFromHandle);
    //this.setTouched();
    if (this.homeFromHandle.valid) {
      this.userService.create(this.model).pipe(retry(2)).subscribe((data) => {
        this.isSuccess = true;
        this.errorMsg="";
      }, (err) => {
        this.isSuccess = false;
        this.errorMsg =  err.message;
      }, () => { });
    }

  }
 
}
