package repository.impl.hibernate;


import models.Role;
import models.User;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import repository.AuthorizationRepository;
import utils.exceptions.DataBaseException;

import java.util.List;

@Repository
public class HibernateAuthorizationRepository implements AuthorizationRepository {

    private SessionFactory sessionFactory;

    @Autowired
    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    public List<User> getAllUsers() throws DataBaseException {

        Session session = sessionFactory.getCurrentSession();
        Query q = session.createQuery("from User");

        return (List<User>) q.list();
    }

    @Override
    public User getUserByUsername(String userName) throws DataBaseException {

        Session  session = sessionFactory.getCurrentSession();
        String hql = "from User where userName=:userName";
        Query q = session.createQuery(hql);
        q.setParameter("userName", userName);

        return (User) q.uniqueResult();
    }

    @Override
    public String getPermissionByRoleId(int role_id) {

        Session  session = sessionFactory.getCurrentSession();
        String hql = "from Role where idRoles=:idRoles";
        Query q = session.createQuery(hql);
        q.setParameter("idRoles", role_id);
        Role role = (Role)q.uniqueResult();
        return role.getPermission();
    }


}
