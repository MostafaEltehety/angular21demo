import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonToggleGroup, MatButtonToggle } from "@angular/material/button-toggle";


@Component({
  selector: 'app-skills-languages',
  imports: [ReactiveFormsModule, MatButtonToggleGroup, MatButtonToggle],
  templateUrl: './skills-languages.html',
  styleUrl: './skills-languages.scss',
})
export class SkillsLanguages {

@Input() skills!:FormGroup;

}
