package utils.exceptions;

import javax.ejb.ApplicationException;

@ApplicationException(rollback = true)
public class CustomException extends Exception {
}
