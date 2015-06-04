package utils.validators;


import models.User;

import java.util.List;


public class LoginAuthentification {

    public static boolean registeredOrNot(User user, List<User> Users) {

        boolean registered = false;
        for (User us : Users) {
            if (user.getUserName().equals(us.getUserName()) && user.getPassword().equals(us.getPassword())) {
                registered = true;
            }
        }
        return registered;
    }
}
