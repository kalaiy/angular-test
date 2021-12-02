import { AbstractControl, ValidatorFn } from '@angular/forms';
export class CustomValidator {
  static Required(control: AbstractControl): ValidationResult {
    if (!control.valid || control.dirty || control.touched) {
      if (control.value === undefined || control.value == '') {
        return { required: true };
      }
    }
    return null;
  }
}

interface ValidationResult {
  [key: string]: boolean;
}
