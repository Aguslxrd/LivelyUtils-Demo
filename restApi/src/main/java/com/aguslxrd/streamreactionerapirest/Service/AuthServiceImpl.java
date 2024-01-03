package com.aguslxrd.streamreactionerapirest.Service;

import com.aguslxrd.streamreactionerapirest.Config.JwtService;
import com.aguslxrd.streamreactionerapirest.Controller.Models.AuthResponse;
import com.aguslxrd.streamreactionerapirest.Controller.Models.AuthenticationRequest;
import com.aguslxrd.streamreactionerapirest.Controller.Models.RegisterRequest;
import com.aguslxrd.streamreactionerapirest.Model.Entity.UserEntity;
import com.aguslxrd.streamreactionerapirest.Model.Entity.UserRole;
import com.aguslxrd.streamreactionerapirest.Repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    @Override
    public AuthResponse register(RegisterRequest request) {
        var user = UserEntity.builder()
                .username(request.getUsername())
                .email(request.getEmail())
                .passwd(passwordEncoder.encode(request.getPasswd()))
                .role(UserRole.USER)
                .build();
        userRepository.save(user);
        var jwtToken = jwtService.generateToken(user);
        return AuthResponse.builder().token(jwtToken).build();
    }

    @Override
    public AuthResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPasswd()
                )
        );
        var user = userRepository.findByEmail(request.getEmail()).orElseThrow();
        var jwtToken = jwtService.generateToken(user);
        return AuthResponse.builder().token(jwtToken).build();
    }
}
