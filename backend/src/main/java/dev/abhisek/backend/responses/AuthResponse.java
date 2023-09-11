package dev.abhisek.backend.responses;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class AuthResponse {
    private String jwt;
    private boolean status;
}
