package utils.authentification;


import net.sf.oval.constraint.Length;
import net.sf.oval.constraint.NotNull;

public class User {

    @NotNull(message = "min 5 chars")
    @Length(min = 5, message = "min 5 chars")
    private String username;

    @NotNull(message = "min 5 chars")
    @Length(min = 5, message = "min 5 chars")
    private String password;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
