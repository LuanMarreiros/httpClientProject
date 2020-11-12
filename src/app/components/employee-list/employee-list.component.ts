import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/shared/rest-api.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  Employee: any = []

  constructor(
    public restApi: RestApiService
  ) { }

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees() {
    return this.restApi.getEmployees().subscribe((data: {}) => {
      this.Employee = data;
    })
  }

  deleteEmployee(id) {
    if (window.confirm('Are you sure, you want to delete?')) {
      this.restApi.deleteEmployee(id).subscribe(data => {
        this.loadEmployees()
      })
    }
  }

}
