import { AbstractControl, ValidationErrors } from '@angular/forms';

// export function ConfirmPasswordValidator(control: AbstractControl) {
//   const confirmPassword = control.get('confirmPassword');
//   const password = control.get('password');
//   if (!password || !confirmPassword) return null;

//   if (confirmPassword?.pristine || password?.pristine) return null;

//   return password.value !== confirmPassword.value ? { misMatch: true } : null;
// }

export function ConfirmPasswordValidator(control: AbstractControl): ValidationErrors | null {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  if (!password || !confirmPassword) return null;

  // لو لسه المستخدم ما لمسش الحقول
  if (confirmPassword.pristine) return null;

  if (password.value !== confirmPassword.value) {
    confirmPassword.setErrors({ misMatch: true });
    return { misMatch: true };
  } else {
    // مهم جدًا نشيل الخطأ لو اتصلح
    if (confirmPassword.hasError('misMatch')) {
      confirmPassword.setErrors(null);
    }
    return null;
  }
}
