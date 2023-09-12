package dev.abhisek.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Tweet {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    private User user;

    private String content;
    private String image;
    private String video;
    private LocalDateTime createdAt;

    @OneToMany(mappedBy = "tweet",cascade = CascadeType.ALL)
    private List<Like> likes=new ArrayList<>();

    @OneToMany
    private List<Tweet> replyTweets=new ArrayList<>();

    @ManyToMany
    private List<User> retweetUsers=new ArrayList<>();

    @ManyToOne
    private Tweet replyFor;

    private boolean isReply;
    private boolean isTweet;
}

