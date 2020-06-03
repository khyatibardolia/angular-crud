import {Component, Input, OnInit} from '@angular/core';
import {PageChangedEvent} from 'ngx-bootstrap';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {
  @Input() employeeArr;
  returnedArray: string[];

  constructor(private route: Router,
              private router: ActivatedRoute) {
  }

  ngOnInit() {
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
