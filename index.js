let employee = {
    name: 'Rashford',            
    streetAddress: 'manchester' 
  };

  function updateEmployeeWithKeyAndValue(employee, key, value) {
    
    const updatedEmployee = { ...employee };
    
    
    updatedEmployee[key] = value;
  
    
    return updatedEmployee;
  }

  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    
    employee[key] = value;
  
    return employee;
  }

  function deleteFromEmployeeByKey(employee, key) {
    
    const employeeClone = { ...employee };
  
    
    if (employeeClone.hasOwnProperty(key)) {
      
      delete employeeClone[key];
    }
  
    
    return employeeClone;
  }
  

  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    
    if (employee.hasOwnProperty(key)) {
      
      delete employee[key];
    }
  
    
    return employee;
}