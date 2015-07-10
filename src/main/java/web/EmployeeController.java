package web;

import models.Employee;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;
import service.DataService;
import utils.forms.EmployeeForm;
import utils.validators.OvalValidator;

import java.util.List;
import java.util.Map;


@Controller

@RequestMapping("/employees")
public class EmployeeController {

    private Logger logger = Logger.getLogger(this.getClass());

    @Autowired
    private DataService dataService;

    @Autowired
    @Qualifier("OvalValidator")
    private OvalValidator validator;

    @RequestMapping("/list.html")
    public String initEmployeeList(@RequestParam("id_dep") int id_dep, ModelMap model) throws Exception {
        List<Employee> empl = dataService.getEmloyeeListById(id_dep);
        model.put("id_dep", id_dep);
        model.put("list", empl);
        return "employeeList";
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @RequestMapping("/employeeFormHandlerForCreation.html")
    public String initEmployeeFormForCreation(@RequestParam("id_dep") Integer id_dep, ModelMap model) {
        EmployeeForm employeeForm = new EmployeeForm();
        model.put("employeeForm", employeeForm);
        model.put("id_dep", id_dep);
        return "employeeForm";
    }

    @RequestMapping("/employeeFormHandlerForEditing.html")
    public String initEmployeeFormForEditing(@RequestParam("id") Integer id, ModelMap model) throws Exception {

        Employee empl = dataService.getEmloyeeById(id);

        EmployeeForm employeeForm = new EmployeeForm();
        employeeForm.setId(empl.getId());
        employeeForm.setJobTitle(empl.getJob_title());
        employeeForm.setFirstName(empl.getFirst_name());
        employeeForm.setSecondName(empl.getSecond_name());
        employeeForm.setSalary(empl.getSalary());
        employeeForm.setDate(empl.getDate());

        model.put("employeeForm", employeeForm);
        return "employeeForm";
    }

    @RequestMapping(value = "/employeeCreator.html", method = RequestMethod.POST)
    public String createEmployee(ModelMap model, EmployeeForm employeeForm, BindingResult result) throws Exception {
        Integer id_dep = employeeForm.getId_dep();
        Map errors = validator.validate(employeeForm);
        if (errors.isEmpty()) {
            Employee emp = createEmployeeFromForm(employeeForm);
            emp.setDep_id(id_dep);
            dataService.createEmployee(emp);
            return ("redirect:/employees/list.html?id_dep=" + id_dep);
        } else {
            model.put("employeeForm", employeeForm);
            model.put("errors", errors);
            model.put("id_dep", id_dep);
            return "employeeForm";
        }
    }

    @RequestMapping(value = "/edit.html", method = RequestMethod.POST)
    public String editEmployee(ModelMap model, EmployeeForm employeeForm, BindingResult result) throws Exception {
        Integer id = employeeForm.getId();
        Map errors = validator.validate(employeeForm);
        if (errors.isEmpty()) {
            Employee emp = createEmployeeFromForm(employeeForm);
            emp.setId(id);
            dataService.editEmployee(emp);
            emp.setDep_id(dataService.getId_dById(id));
            return ("redirect:/employees/list.html?id_dep=" + emp.getDep_id());
        } else {
            model.put("employeeForm", employeeForm);
            model.put("errors", errors);
            model.put("id", id);
            return "employeeForm";
        }
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @RequestMapping("/employeeDeleting.html")
    public String deleteEmployee(@RequestParam("id") int id, @RequestParam("id_dep") int id_dep) throws Exception {
        dataService.deleteById(id);
        return ("redirect:/employees/list.html?id_dep=" + id_dep);
    }

    private Employee createEmployeeFromForm(EmployeeForm empForm) {
        Employee emp = new Employee();
        emp.setJob_title(empForm.getJobTitle());
        emp.setFirst_name(empForm.getFirstName());
        emp.setSecond_name(empForm.getSecondName());
        emp.setSalary(empForm.getSalary());
        emp.setDate(empForm.getDate());
        return emp;
    }

    @ExceptionHandler(Exception.class)
    public ModelAndView handleException(Exception e) {
        ModelAndView modelAndView = new ModelAndView("/error");
        logger.warn("Some message", e);
        modelAndView.addObject("message", "Some problem with database, please, try later");
        return modelAndView;
    }
}






