import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[mobile]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(()=>Mobile),
      multi: true,
    },
  ],
})
export class Mobile implements Validator {
  constructor() {}
  validate(control: AbstractControl): ValidationErrors | null {

    if (!control.value) return null;
    const egyptMobileRegex = /^(01)[0-2,5]{1}[0-9]{8}$/;
    return egyptMobileRegex.test(control.value) ? null : { mobile: true };
  }

}
