import { Component, OnInit, ViewChild } from '@angular/core';
import { trigger, transition, query, style, animate } from '@angular/animations';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { Table } from '../../../services/utils/table';
import { Alert } from '../../../services/utils/alert';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatMenu, MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
import { DialogBox } from '../dialog-box/dialog-box';
import { NgFor, NgIf } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableExporterModule } from 'mat-table-exporter';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

export interface CountryReports {
  country: string;
  cases: number;
  todayCases: number;
  deaths: string;
  todayDeaths: string;
  recovered: number;
  active: number;
  critical: string;
  casesPerOneMillion: number;
  deathsPerOneMillion: number;
  tests: string;
  testsPerOneMillion: string;
  countryInfo: {
    flag: string;
  };
}

export interface DisplayColumn {
  def: string;
  label: string;
  hide: boolean;
}

@Component({
  selector: 'app-table',
  templateUrl: './responsive-table.html',
  styleUrls: ['./responsive-table.scss'],
  animations: [
    trigger('animation', [
      transition('* => *', [
        query(
          ':enter',
          [
            style({ transform: 'translateX(100%)', opacity: 0 }),
            animate('500ms', style({ transform: 'translateX(0)', opacity: 1 })),
          ],
          { optional: true }
        ),
        query(
          ':leave',
          [
            style({ transform: 'translateX(0)', opacity: 1 }),
            animate('500ms', style({ transform: 'translateX(100%)', opacity: 0 })),
          ],
          {
            optional: true,
          }
        ),
      ]),
    ]),
  ],
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule,
MatTableExporterModule,
    MatCardModule,
    FormsModule,
MatProgressSpinnerModule,
    NgIf,
    NgFor,
  ],
})
export class ResponsiveTable implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ELEMENT_DAT: CountryReports[] = [];
  dataSource = new MatTableDataSource<CountryReports>([]);
  selection!: SelectionModel<CountryReports>;
  countries: string[] = [];
  selectedCountry: string = 'all';
  add: string = 'Add';
  edit: string = 'Edit';
  delete: string = 'Delete';
  value: string = '';
  isLoading: boolean = true;

  // Keep as main 'column mapper'
  displayedColumns: DisplayColumn[] = [
    { def: 'select', label: 'Select', hide: false },
    { def: 'flag', label: 'Flag', hide: false },
    { def: 'country', label: 'Country', hide: false },
    { def: 'cases', label: 'Cases', hide: false },
    { def: 'todayCases', label: 'TodayCases', hide: false },
    { def: 'deaths', label: 'Deaths', hide: false },
    { def: 'todayDeaths', label: 'TodayDeaths', hide: false },
    { def: 'recovered', label: 'Recovered', hide: false },
    { def: 'active', label: 'Active', hide: false },
    { def: 'action', label: 'Action', hide: false },
  ];

  // Used in the template
  disColumns!: string[];

  // Use for creating check box views dynamically in the template
  checkBoxList: DisplayColumn[] = [];

  constructor(public dialog: MatDialog, private service: Table, private alertService: Alert) {}

  ngOnInit(): void {
    // Apply paginator
    this.dataSource.paginator = this.paginator;

    // Apply sort option
    this.dataSource.sort = this.sort;

    // Create instance of checkbox SelectionModel
    this.selection = new SelectionModel<CountryReports>(true, []);

    // Update with columns to be displayed
    this.disColumns = this.displayedColumns.map((cd) => cd.def);

    this.dataSource.filterPredicate = (data: CountryReports, filter: string) =>
      data.country.toLowerCase().includes(filter);

    // Get covid19 data from external rest api endpoint
    this.getAllReports();
  }

  // This function filter data by input in the search box
  applyFilter(event: any): void {
    this.dataSource.filter = event.target.value.trim().toLowerCase();
  }

  // This function will be called when user click on select all check-box
  isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle(): void {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }

  // Add, Edit, Delete rows in data table
  openAddEditDialog(action: string, obj: any): void {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBox, {
      data: obj,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result != null) {
        const action = result.data['action'];
        delete result.data['action'];
        if (action == this.add) {
          this.addRowData(result.data);
        } else if (action == this.edit) {
          this.updateRowData(result.data);
        } else {
          console.log(action);
        }
      }
    });
  }

  // Add a row into to data table
  addRowData(row_obj: any): void {
    const data = this.dataSource.data;
    data.push(row_obj);
    this.dataSource.data = data;
  }

  // Update a row in data table
  updateRowData(row_obj: any): void {
    if (row_obj === null) {
      return;
    }
    const data = this.dataSource.data;
    const index = data.findIndex((item) => item['country'] === row_obj.data['country']);
    if (index > -1) {
      data[index].country = row_obj.data['country'];
      data[index].cases = row_obj.data['cases'];
      data[index].todayCases = row_obj.data['todayCases'];
      data[index].deaths = row_obj.data['deaths'];
      data[index].todayDeaths = row_obj.data['todayDeaths'];
      data[index].recovered = row_obj.data['recovered'];
      data[index].active = row_obj.data['active'];
    }
    this.dataSource.data = data;
  }

  // Open confirmation dialog
  openDeleteDialog(len: number, obj: any): void {
    const options = {
      title: 'Delete?',
      message: `Are you sure want to remove ${len} rows?`,
      cancelText: 'NO',
      confirmText: 'YES',
    };

    // If user confirms, remove selected row from data table
    this.alertService.open(options);
    this.alertService.confirmed().subscribe((confirmed) => {
      if (confirmed) {
        this.deleteRow(obj);
      }
    });
  }

  // Delete a row by 'row' delete button
  deleteRow(row_obj: any): void {
    const data = this.dataSource.data;
    const index = data.findIndex((item) => item['country'] === row_obj['country']);
    if (index > -1) {
      data.splice(index, 1);
    }
    this.dataSource.data = data;
  }

  // Fill data table
  public getAllReports(): void {
    let resp = this.service.covid19Reports();
    resp.subscribe((report) => {
      this.isLoading = false;
      this.dataSource.data = report as CountryReports[];
    });
  }

  // Fill on selected option
  public onSelectCountry(): void {
    this.selection.clear();
    if (this.selectedCountry === 'all') {
      this.getAllReports();
    } else {
      let resp = this.service.covid19ReportsByCountry(this.selectedCountry);
      resp.subscribe((report) => {
        this.dataSource.data = [report] as CountryReports[];
      });
    }
  }

  // Show/Hide check boxes
  showCheckBoxes(): void {
    this.checkBoxList = this.displayedColumns;
  }

  hideCheckBoxes(): void {
    this.checkBoxList = [];
  }

  toggleForm(): void {
    this.checkBoxList.length ? this.hideCheckBoxes() : this.showCheckBoxes();
  }

  // Show/Hide columns
  hideColumn(event: any, item: string) {
    this.displayedColumns.forEach((element) => {
      if (element['def'] == item) {
        element['hide'] = event.checked;
      }
    });
    this.disColumns = this.displayedColumns.filter((cd) => !cd.hide).map((cd) => cd.def);
  }
}
