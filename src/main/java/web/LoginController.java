package web;


import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import service.DataService;
import utils.authentification.User;
import utils.exceptions.DataBaseException;
import utils.forms.LoginForm;
import utils.permission.PermissionBinder;
import utils.validators.LoginAuthentification;
import utils.validators.OvalValidator;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/")
public class LoginController {

    private Logger logger = Logger.getLogger(this.getClass());

    @Autowired
    private DataService dataService;

    @Autowired
    private OvalValidator ovalValidator;

    @RequestMapping("*")
    public String initLoginPage(ModelMap model) throws DataBaseException {
        model.put("loginForm", new LoginForm());
        logger.info("Login Page");
        return "loginPage";
    }

    @RequestMapping(value = "/validate", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public List validate(@RequestBody User user) throws DataBaseException {
        List request = new ArrayList();
        Map errors = ovalValidator.validateUser(user);
        if (errors.size() > 0) {
            request.add("validation failed");
            request.add(errors);
            return request;
        } else {
            models.User us = new models.User();
            us.setUserName(user.getUsername());
            us.setPassword(user.getPassword());
            if (LoginAuthentification.registeredOrNot(us, dataService.getAllUsers())) {
                request.add("login success");
                request.add(PermissionBinder.bindPermission(dataService.getPermissionByRoleId(dataService.getUserByUsername(us.getUserName()).getRole_id())));
                return request;
            } else {
                request.add("login failed");
                return request;
            }
        }

    }

    @RequestMapping(value = "/getDepartmentList", method = RequestMethod.POST/*, consumes = MediaType.APPLICATION_JSON_VALUE*/)
    @ResponseBody
    public List getDepartmentList() throws DataBaseException {
        return dataService.getDepartmentList();
    }

    @RequestMapping(value = "/getEmployeeList/{dep_id}", method = RequestMethod.POST)
    @ResponseBody
    public List getEmployeesList(@PathVariable String dep_id) throws DataBaseException {
        return dataService.getEmloyeeListById(Integer.parseInt(dep_id));
    }
}

