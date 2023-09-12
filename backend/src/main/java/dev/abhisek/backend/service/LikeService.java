package dev.abhisek.backend.service;

import dev.abhisek.backend.exceptions.TweetException;
import dev.abhisek.backend.exceptions.UserException;
import dev.abhisek.backend.model.Like;
import dev.abhisek.backend.model.User;

import java.util.List;

public interface LikeService {
    Like likeTweet(Long tweetId, User user) throws UserException, TweetException;

    List<Like> getAllLikes(Long tweetId) throws TweetException;
}
