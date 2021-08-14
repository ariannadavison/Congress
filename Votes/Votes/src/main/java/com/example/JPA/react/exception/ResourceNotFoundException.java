package com.example.JPA.react.exception;
import org.springframework.http.HttpStatus;
public class ResourceNotFoundException extends RuntimeException{

private static final long serialVersionUID = 2L;
public ResourceNotFoundException(String message) {
	super(message);
}

}
