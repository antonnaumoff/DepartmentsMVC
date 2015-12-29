package web;

import models.Department;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;
import service.DataService;
import utils.exceptions.DataBaseException;
import utils.forms.DepartmentForm;
import utils.validators.OvalFormValidator;

import javax.servlet.http.HttpSession;
import java.util.List;


@Controller
@RequestMapping(value = "/departments")
public class DepartmentController {

    private Logger logger = Logger.getLogger(this.getClass());

    @Autowired
    private DataService dataService;

    @Autowired
    private OvalFormValidator validator;



    @RequestMapping(value = "/list.html", method = {RequestMethod.GET, RequestMethod.HEAD})
    public String initDepartmentList(ModelMap model, HttpSession session) throws DataBaseException {
        List departments = dataService.getDepartmentList();
        model.put("department", departments);
        return "departmentList";
    }

    @RequestMapping("/departmentForm.html")
    public String initDepartmentForm(ModelMap model, HttpSession session) {
        DepartmentForm depForm = new DepartmentForm();
        model.put("departmentForm", depForm);
        return "departmentForm";
    }

    @RequestMapping(value = "/creator.html", method = RequestMethod.POST)
    public String createDepartment(DepartmentForm depForm, BindingResult result) throws DataBaseException {
        validator.validate(depForm, result);
        if (result.hasErrors()) {
            return "departmentForm";
        } else {
            dataService.createDepartment(depForm.getTitle());
            return "redirect:/departments/list.html";
        }
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @RequestMapping("/edit.html")
    String editDepartment(int id, ModelMap model) throws DataBaseException {
        String title = dataService.getDepartmentById(id).getTitle();
        DepartmentForm depForm = new DepartmentForm();
        model.put("departmentForm", depForm);
        model.put("id_dep", id);
        model.put("title", title);
        return "departmentForm";
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @RequestMapping("/delete.html")
    public String deleteDepartment(@RequestParam("id") int id) throws DataBaseException {
        dataService.deleteDepartment(id);
        return "redirect:/departments/list.html";
    }

    @RequestMapping(value = "/editValidator.html", method = RequestMethod.POST)
    public String validateDepartmentEdition(DepartmentForm depForm, BindingResult result) throws DataBaseException {
        validator.validate(depForm, result);
        if (!result.hasErrors()) {
            dataService.editDepartment(createDepartmentFromForm(depForm));
            return "redirect:/departments/list.html";
        } else {
            return "departmentForm";
        }
    }

    private Department createDepartmentFromForm(DepartmentForm depForm) {
        Department dep = new Department();
        dep.setId(depForm.getId_dep());
        dep.setTitle(depForm.getTitle());
        return dep;
    }

    @ExceptionHandler(Exception.class)
    public ModelAndView handleDataBaseException(Exception e) {
        ModelAndView modelAndView = new ModelAndView("/error");
        logger.warn("Some message", e);
        modelAndView.addObject("message", "Some problem with database, please, try later");
        return modelAndView;
    }
}

