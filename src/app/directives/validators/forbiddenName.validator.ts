import { AbstractControl } from '@angular/forms';

// export function ForbiddenNameValidator(control:AbstractControl){
// const forbidden=/admin/.test(control.value.trim());
// return forbidden?{'forbiddenName':{value:control.value}}:null;
// }

// Factory Pattern
export function ForbiddenNameValidator(regExp: RegExp) {
  return (control: AbstractControl) => {
    const forbidden = regExp.test(control.value.trim());
    return forbidden ? { forbiddenName: { value: control.value } } : null;
  };
}
