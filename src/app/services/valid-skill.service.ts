import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function validSkill(length: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
      return control.value > length? null : {validSkill: true};
  };
}
