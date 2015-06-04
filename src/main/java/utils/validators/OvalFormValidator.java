package utils.validators;

import net.sf.oval.ConstraintViolation;
import net.sf.oval.Validator;
import net.sf.oval.context.FieldContext;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import utils.forms.Form;

import java.util.List;

@Component
public class OvalFormValidator implements org.springframework.validation.Validator {


    private Validator validator = new Validator();

    public boolean supports(Class<?> clazz) {
        return Form.class.isAssignableFrom(clazz);
    }

    public void validate(Object target, Errors errors) {
        Form empForm = (Form) target;
        List<ConstraintViolation> list = validator.validate(empForm);
        if (!list.isEmpty()) {
            for (ConstraintViolation cv : list) {
                errors.rejectValue((((FieldContext) cv.getContext()).getField().getName()), cv.getErrorCode(), cv.getMessage());
            }
        }
    }
}
