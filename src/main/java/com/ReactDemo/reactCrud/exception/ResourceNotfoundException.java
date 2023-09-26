package com.ReactDemo.reactCrud.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class ResourceNotfoundException extends RuntimeException{
    public ResourceNotfoundException(String s) {
        super(s);
    }
}
