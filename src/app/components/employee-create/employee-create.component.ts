import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from 'src/app/shared/rest-api.service';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  @Input() employeeDetails = {
    name: '',
    email: '',
    phone: null
  }

  constructor(
    public restApi: RestApiService,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  addEmployee(){
    this.restApi.createEmployee(this.employeeDetails).subscribe((data: {})=>{
      this.router.navigate(['/employess-list'])
    })
  }

}
