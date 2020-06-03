import {Injectable} from '@angular/core';

@Injectable()
export class EmployeesService {

  addEmployees(id: number, fullName: string, email: string, contactNo: number) {
    const getEmployees = JSON.parse(localStorage.getItem('newEmployee')) || [];
    getEmployees.push({
      id: id,
      fullName: fullName,
      email: email,
      contactNo: contactNo
    });
    localStorage.setItem('newEmployee', JSON.stringify(getEmployees));
  }

  getAllEmployees() {
    const employee = JSON.parse(localStorage.getItem('newEmployee'));
    return employee;
  }

  editEmployee(id: number) {

  }
}
