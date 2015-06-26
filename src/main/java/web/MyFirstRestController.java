package web;

import models.Department;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import service.DataService;
import utils.exceptions.DataBaseException;

import java.util.List;

@RestController
@RequestMapping("/rest")
public class MyFirstRestController {

    @Autowired
    private DataService dataService;

    @RequestMapping(value = "/departments", method = RequestMethod.GET)
    public List greeting() throws DataBaseException {
        return dataService.getDepartmentList();
    }

    @RequestMapping(value = "/departments/{id}", method = RequestMethod.GET)
    public Department getDepartment(@PathVariable String id) throws DataBaseException {
        return dataService.getDepartmentById(Integer.parseInt(id));
    }

    @RequestMapping(value = "/departments", method = RequestMethod.PUT)
    public void editDepartment(@RequestParam String id, @RequestParam String title) throws DataBaseException {
        Department dep = dataService.getDepartmentById(Integer.parseInt(id));
        dep.setTitle(title);
        dataService.editDepartment(dep);
    }

    @RequestMapping(value = "/departments", method = RequestMethod.POST)
    public void createDepartment(@RequestParam String title) throws DataBaseException {
        dataService.createDepartment(title);
    }

    @RequestMapping(value = "/departments/{id}", method = RequestMethod.DELETE)
    public void deleteDepartment(@PathVariable String id) throws DataBaseException {
        dataService.deleteDepartment(Integer.parseInt(id));
    }


}



