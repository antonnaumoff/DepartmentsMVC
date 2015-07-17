package service;

import models.Department;
import models.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.cache.annotation.Caching;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import repository.DepartmentRepository;
import repository.EmployeeRepository;
import utils.exceptions.DataBaseException;

import java.util.List;

@Component
@Transactional(propagation = Propagation.REQUIRED)
public class DataServiceImpl implements DataService {

    @Autowired
    @Qualifier("hibernateDepartmentRepository")
    private DepartmentRepository departmentRepository;

    @Autowired
    @Qualifier("hibernateEmployeeRepository")
    private EmployeeRepository employeeRepository;

    @Override
    @Cacheable(value = "departments")
    @Transactional(readOnly = true)
    public List<Department> getDepartmentList() throws DataBaseException {
        List<Department> list = departmentRepository.getAll();
        return list;
    }

    @Override
    @Caching(evict = @CacheEvict(value = "departments", allEntries = true), put = @CachePut(value = "department"))
    public Department createDepartment(String title) throws DataBaseException {
        return departmentRepository.createDepartment(title);
    }

    @Override
    @Caching(evict = {@CacheEvict(value = "departments", allEntries = true), @CacheEvict(value = "department", key="#id")})
    public void deleteDepartment(int id) throws DataBaseException {
        departmentRepository.deleteDepartment(id);
    }

    @Override
//    @Cacheable(value="department", key="#id")
    @Transactional(readOnly = true)
    public Department getDepartmentById(int id) throws DataBaseException {
        return departmentRepository.getDepartmentById(id);
    }

    @Override
    @Caching(evict = {@CacheEvict(value = "departments", allEntries = true)},put = {@CachePut(value = "department", key="#dep.id")})
    public void editDepartment(Department dep) throws DataBaseException {
        departmentRepository.editDepartment(dep.getTitle(), dep.getId());
    }

    @Override
    @Cacheable(value = "employees")
    @Transactional(readOnly = true)
    public List<Employee> getEmloyeeListById(int id) throws DataBaseException {
        return employeeRepository.getEmloyeeListById(id);
    }

    @Override
    @Caching(evict = {@CacheEvict(value = "employees", allEntries = true), @CacheEvict(value = "employee", key="#id")})
    public void deleteById(int id) throws DataBaseException {
        employeeRepository.deleteById(id);
    }

    @Override
    @Caching(evict = @CacheEvict(value = "employees", allEntries = true), put = @CachePut(value = "employee", key = "#emp"))
    public void createEmployee(Employee emp) throws DataBaseException {
        employeeRepository.createEmployee(emp);
    }

    @Override
//    @Cacheable("employee")
    public Employee getEmloyeeById(int id) throws DataBaseException {
        return employeeRepository.getEmloyeeById(id);
    }

    @Override
    @Caching(evict = {@CacheEvict(value = "employees", allEntries = true)},cacheable = {@Cacheable(value = "employee", key="#emp.id")})
    public void editEmployee(Employee emp) throws DataBaseException {
        employeeRepository.editEmployee(emp);
    }

    @Override
    public Integer getId_dById(Integer id) throws DataBaseException {
        return employeeRepository.getId_dById(id);
    }
}
