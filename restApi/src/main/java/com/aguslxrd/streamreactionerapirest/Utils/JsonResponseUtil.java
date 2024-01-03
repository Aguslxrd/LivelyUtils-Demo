package com.aguslxrd.streamreactionerapirest.Utils;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;

@Component
public class JsonResponseUtil {
    public ResponseEntity<Object> createResponse(String message, HttpStatus status) {
        Map<String, Object> response = new HashMap<>();
        response.put("response", message);
        return new ResponseEntity<>(response, status);
    }
}
