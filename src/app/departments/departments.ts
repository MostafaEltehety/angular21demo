import { Component } from '@angular/core';
import { department } from '../models/demaprtment';
import { MatTable, MatColumnDef, MatCellDef, MatHeaderRowDef, MatRowDef } from "@angular/material/table";

@Component({
  selector: 'app-departments',
  imports: [MatTable, MatColumnDef, MatCellDef, MatHeaderRowDef, MatRowDef],
  templateUrl: './departments.html',
  styleUrl: './departments.scss',
})
export class Departments {
}
