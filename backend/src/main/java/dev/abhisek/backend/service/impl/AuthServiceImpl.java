package dev.abhisek.backend.service.impl;

import dev.abhisek.backend.exceptions.UserException;
import dev.abhisek.backend.model.User;
import dev.abhisek.backend.model.Verification;
import dev.abhisek.backend.repository.UserRepository;
import dev.abhisek.backend.responses.AuthResponse;
import dev.abhisek.backend.service.AuthService;
import dev.abhisek.backend.util.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;
    private final AuthenticationManager authenticationManager;

    @Override
    public AuthResponse createUser(User user) {
        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            throw new UserException(user.getEmail() + " already exists.");
        }
        User newUser = User.builder()
                .fullName(user.getFullName())
                .email(user.getEmail())
                .password(passwordEncoder.encode(user.getPassword()))
                .birthDate(user.getBirthDate())
                .verification(new Verification())
                .build();
        userRepository.save(newUser);
        return authorize(user.getUsername(),user.getPassword());
    }

    @Override
    public AuthResponse authorizeUser(User user) {
        return authorize(user.getUsername(),user.getPassword());
    }

    private AuthResponse authorize(String username,String password){
        Authentication authentication=new UsernamePasswordAuthenticationToken(username,password);
        authenticationManager.authenticate(authentication);
        User user=userRepository
                .findByEmail(username)
                .orElseThrow(()->new UsernameNotFoundException(username + " Not found!!!"));
        String jwt=jwtUtil.generateToken(user);
        return new AuthResponse(jwt,true);
    }
}
