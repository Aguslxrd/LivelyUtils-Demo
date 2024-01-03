package com.aguslxrd.streamreactionerapirest.Controller;

import com.aguslxrd.streamreactionerapirest.Controller.Models.AuthResponse;
import com.aguslxrd.streamreactionerapirest.Controller.Models.AuthenticationRequest;
import com.aguslxrd.streamreactionerapirest.Controller.Models.RegisterRequest;
import com.aguslxrd.streamreactionerapirest.Service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@CrossOrigin("*")
public class AuthController {

    @Autowired
    private AuthService authService;
    @PostMapping(value = "/register")
    public ResponseEntity<AuthResponse> register(@RequestBody RegisterRequest request){
        return ResponseEntity.ok(authService.register(request));
    }

    @PostMapping(value = "/authenticate")
    public ResponseEntity<AuthResponse> authenticate(@RequestBody AuthenticationRequest request){
        return ResponseEntity.ok(authService.authenticate(request));
    }
}
