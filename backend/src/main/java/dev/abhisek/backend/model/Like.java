package dev.abhisek.backend.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity(name = "likes")
public class Like {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    private User user;

    @ManyToOne
    private Tweet tweet;

}
