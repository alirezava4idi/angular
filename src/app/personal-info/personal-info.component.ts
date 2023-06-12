import { AfterViewInit,  Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import {MatSort, MatSortModule} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface Person {
  id: number,
  fname: string;
  lname: string;
  nationalCode: number;
  address: string;
}

const DATA: Person[] = [
  {id: 1, fname: "علی", lname: "وحیدی", nationalCode: 5485216868,  address: "سیرجان"},
  {id: 2, fname: "رضا", lname: "جوادی", nationalCode: 5124879564,  address: "سیرجان"},
  {id: 3, fname: "جواد", lname: "رحیمی", nationalCode: 9562311448,  address: "سیرجان"},
  {id: 4, fname: "حسین", lname: "اکبری", nationalCode: 7548623148,  address: "سیرجان"},
]

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements AfterViewInit {
  dateValue = new FormControl();
  displayedColumns: string[] = ['id', 'fname', 'lname', 'nationalCode', 'address', 'ops'];
  dataSource = new MatTableDataSource(DATA);


  @ViewChild(MatSort) sort!: MatSort;

  
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }
}
