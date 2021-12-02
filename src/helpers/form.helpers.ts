import {
  FormGroup,
  FormBuilder,
  AbstractControl,
  FormArray,
} from '@angular/forms';

export class FormHelper {
  static markFormGroupTouched(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach((control) => {
      control.markAsTouched();
      control.updateValueAndValidity({ opts: { emitEvent: true } });
      if (control.controls) {
        control.controls.forEach((c) => this.markFormGroupTouched(c));
      }
    });
  }
}
