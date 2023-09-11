package dev.abhisek.backend.controllers;

import dev.abhisek.backend.model.User;
import dev.abhisek.backend.responses.AuthResponse;
import dev.abhisek.backend.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {
    private final AuthService authService;

    @PostMapping("signup")
    public ResponseEntity<AuthResponse> createUser(@RequestBody User user){
        return new ResponseEntity<>(authService.createUser(user), HttpStatus.CREATED);
    }

    @PostMapping("signin")
    public ResponseEntity<AuthResponse> loginUser(@RequestBody User user){
        return ResponseEntity.ok(authService.authorizeUser(user));
    }
}
