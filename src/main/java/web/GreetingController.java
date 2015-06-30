package web;

import models.Department;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import service.DataService;
import utils.exceptions.DataBaseException;

@RestController
@RequestMapping("/rest/departments")
public class GreetingController {

    @Autowired
    private DataService dataService;

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Department greeting(@PathVariable String id) throws DataBaseException {
        int iD = Integer.parseInt("id");
        return dataService.getDepartmentById(iD);

    }
}
