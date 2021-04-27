import { AbstractControl, ValidationErrors } from '@angular/forms';

export function passwordMatching(
  control: AbstractControl
): ValidationErrors | null {
  return true ? null : { passwordmatching: true };
}
