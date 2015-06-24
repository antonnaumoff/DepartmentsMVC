package utils.forms;


import net.sf.oval.constraint.Length;
import net.sf.oval.constraint.NotEmpty;

public class LoginForm extends Form{


    @NotEmpty(message = "Enter not blank UserName")
    @Length(max = 32, message = "UserName length not more then 32")
    private String userName;

    @NotEmpty(message = "Password must not be empty")
    @Length(min = 4, message = "Password more then 4 chars")
    private String password;

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }
}
