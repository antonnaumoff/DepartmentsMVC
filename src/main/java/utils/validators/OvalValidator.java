package utils.validators;

import net.sf.oval.ConstraintViolation;
import net.sf.oval.Validator;
import net.sf.oval.context.FieldContext;
import net.sf.oval.exception.ValidationFailedException;
import org.springframework.stereotype.Component;
import utils.authentification.User;
import utils.forms.Form;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component("OvalValidator")
public class OvalValidator {

    public Map<String, String> validateUser(User validatedObject) throws IllegalArgumentException, ValidationFailedException {
        HashMap<String, String> map = new HashMap<String, String>();
        Validator valid = new Validator();
        List<ConstraintViolation> violations = valid.validate(validatedObject);
        if (violations.size() > 0) {
            for (ConstraintViolation vio : violations) {
                map.put((((FieldContext) vio.getContext()).getField().getName()), vio.getMessage());
            }
        }
        return map;
    }

    public Map<String, String> validate(Form validatedObject) throws IllegalArgumentException, ValidationFailedException {

        HashMap<String, String> map = new HashMap<String, String>();
        Validator valid = new Validator();
        List<ConstraintViolation> violations = valid.validate(validatedObject);
        if (violations.size() > 0) {
            for (ConstraintViolation vio : violations) {
                map.put((((FieldContext) vio.getContext()).getField().getName()), vio.getMessage());
            }
        }
        return map;
    }

//    public Map<String, String> validateModel(Model validatedObject) {
//        HashMap<String, String> map = new HashMap<String, String>();
//        Validator valid = new Validator();
//        List<ConstraintViolation> violations = valid.validate(validatedObject);
//        if (violations.size() > 0) {
//            for (ConstraintViolation vio : violations) {
//                map.put((((FieldContext) vio.getContext()).getField().getName()), vio.getMessage());
//            }
//        }
//        return map;
//    }

}
