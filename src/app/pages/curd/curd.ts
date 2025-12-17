import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';
import { MatIcon } from "@angular/material/icon";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-curd',
  imports: [TranslateModule, MatButtonModule, MatIcon,RouterLink],
  templateUrl: './curd.html',
  styleUrl: './curd.scss',
})
export class Curd {

}
