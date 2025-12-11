import { AfterViewInit, Component, inject, OnInit, ViewChild } from '@angular/core';
import {
  MatColumnDef,
  MatHeaderRowDef,
  MatRowDef,
  MatTable,
  MatTableDataSource,
  MatTableModule,
} from '@angular/material/table';
import { FackUserServices } from '../../services/fack-user-services';
import { IUser } from '../../models/user';
import { TranslateModule } from '@ngx-translate/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import{MatSort, MatSortModule} from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'app-user',
  imports: [
    MatTableModule,
    TranslateModule,
    MatColumnDef,
    MatInputModule,
    MatHeaderRowDef,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule
  ],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
    this.loadDate();
  }

  services = inject(FackUserServices);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  dataSource = new MatTableDataSource<IUser>([]);
  displayCol: string[] = ['id', 'name', 'username', 'address'];
  selectedRow:any=null;
  ngOnInit(): void {
    this.loadDate();
  }

  loadDate() {
    this.services.getUsers().subscribe((res) => {
      this.dataSource.data = res;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort=this.sort;
      this.applyFilter('');
    });
  }

  applyFilter(name: string) {
    this.dataSource.filter = name.trim().toLowerCase();
  }
onRowClick(row:any){
this.selectedRow=row;
}

}
