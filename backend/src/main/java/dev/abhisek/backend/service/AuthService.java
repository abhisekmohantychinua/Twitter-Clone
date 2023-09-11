package dev.abhisek.backend.service;

import dev.abhisek.backend.model.User;
import dev.abhisek.backend.responses.AuthResponse;

public interface AuthService {
    AuthResponse createUser(User user);
    AuthResponse authorizeUser(User user);
}
