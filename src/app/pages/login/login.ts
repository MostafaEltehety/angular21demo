import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInput } from "@angular/material/input";
import { FormControl, FormControlName, FormGroup, Validators, ɵInternalFormsSharedModule, ReactiveFormsModule } from '@angular/forms';
import { MatAnchor } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";
@Component({
  selector: 'app-login',
  imports: [TranslateModule, MatFormFieldModule, MatInput, ɵInternalFormsSharedModule, ReactiveFormsModule, MatAnchor ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
save() {
throw new Error('Method not implemented.');
}

  from=new FormGroup({
  userName:new FormControl('',Validators.required),
  password:new FormControl('',Validators.required)
});


}
