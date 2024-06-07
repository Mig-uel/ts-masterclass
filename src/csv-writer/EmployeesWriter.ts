import { CSVWriter } from './app'
import { Employee } from './interfaces/employees'

const employeeWriter = new CSVWriter<Employee>(['id', 'name', 'role', 'salary'])

employeeWriter.addRows([
  { id: 1, name: 'shaun', salary: 50000, role: 'web development' },
  { id: 2, name: 'miguel', salary: 90000, role: 'web development' },
  { id: 1, name: 'shack', salary: 78000, role: 'ui designer' },
])

employeeWriter.save('employees')
