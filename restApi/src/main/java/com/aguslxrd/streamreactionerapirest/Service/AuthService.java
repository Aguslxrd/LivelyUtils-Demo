package com.aguslxrd.streamreactionerapirest.Service;

import com.aguslxrd.streamreactionerapirest.Controller.Models.AuthResponse;
import com.aguslxrd.streamreactionerapirest.Controller.Models.AuthenticationRequest;
import com.aguslxrd.streamreactionerapirest.Controller.Models.RegisterRequest;

public interface AuthService {
    public AuthResponse register (RegisterRequest request);
    public AuthResponse authenticate (AuthenticationRequest request);
}
