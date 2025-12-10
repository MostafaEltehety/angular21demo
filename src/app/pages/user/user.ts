import { AfterViewInit, Component, inject, OnInit, ViewChild } from '@angular/core';
import{MatColumnDef, MatHeaderRowDef, MatRowDef, MatTable, MatTableDataSource, MatTableModule} from '@angular/material/table';
import { FackUserServices } from '../../services/fack-user-services';
import { IUser   } from '../../models/user';
import { TranslateModule } from '@ngx-translate/core';
import { MatPaginator, MatPaginatorModule  } from "@angular/material/paginator";
@Component({
  selector: 'app-user',
  imports: [MatTableModule, TranslateModule, MatColumnDef, MatHeaderRowDef,MatPaginatorModule],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User implements OnInit,AfterViewInit{

  services=inject(FackUserServices);
@ViewChild(MatPaginator) paginator!: MatPaginator;
dataSource=new MatTableDataSource<IUser>([]);
displayCol:string[]=['id','name','username','address']
ngOnInit(): void {
this.services.getUsers().subscribe(res=>{
this.dataSource.data=res;
console.log(res);
});
}

  ngAfterViewInit(): void {
this.dataSource.paginator=this.paginator;
  }

}
