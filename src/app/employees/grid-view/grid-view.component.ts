import {Component, Input, OnInit} from '@angular/core';
import {EmployeesService} from '../employees.service';
import {FormGroup} from '@angular/forms';
import {PageChangedEvent} from 'ngx-bootstrap';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.css']
})
export class GridViewComponent implements OnInit {
  totalItems = 64;
  currentPage;
  maxSize = 4;
  returnedArray: string[];

  @Input() employeeArr;
  constructor(private route: Router,
    private router: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.employeeArr.length);
    this.returnedArray = this.employeeArr.slice(0, 8);
  }
  pageChanged(event: PageChangedEvent): void {
    console.log('page', event);
    this.route.navigate(['/employees'], {relativeTo: this.router ,queryParams: {currentPage: event.page}});
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedArray = this.employeeArr.slice(startItem, endItem);
  }
}
