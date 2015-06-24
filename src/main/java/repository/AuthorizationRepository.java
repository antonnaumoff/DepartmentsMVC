package repository;


import models.User;
import utils.exceptions.DataBaseException;

import java.util.List;

public interface AuthorizationRepository {

    public List<User> getAllUsers() throws DataBaseException;

    public User getUserByUsername(String userName) throws DataBaseException;

    public String getPermissionByRoleId(int role_id);
}
