import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';
import { MatIcon } from "@angular/material/icon";
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [ReactiveFormsModule,NgIf, TranslateModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile {


@Input() profile!:FormGroup;

selectedImage?: string;
selectedFileName?: string;

constructor(private cdr: ChangeDetectorRef) {}

onImageSelected(event: Event): void {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files[0]) {
    const file = input.files[0];
    this.selectedFileName = file.name;

    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.selectedImage = e.target.result;
      this.cdr.detectChanges(); // Trigger change detection
    };
    reader.readAsDataURL(file);
  }
}



}
