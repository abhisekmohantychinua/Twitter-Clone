package dev.abhisek.backend.service;

import dev.abhisek.backend.exceptions.TweetException;
import dev.abhisek.backend.exceptions.UserException;
import dev.abhisek.backend.model.Tweet;
import dev.abhisek.backend.model.User;
import dev.abhisek.backend.request.TweetReplyRequest;

import java.util.List;

public interface TweetService {
    Tweet createTweet(Tweet tweet, User user)throws UserException;
    List<Tweet> findAllTweets();

    Tweet reTweet(Long tweetId,User user)throws UserException, TweetException;
    Tweet findById(Long tweetId)throws TweetException;
    void deleteById(Long tweetId,Long userId)throws TweetException,UserException;

    Tweet removeFromRetweet(Long tweetId,User user)throws TweetException,UserException;

    Tweet createdReply(TweetReplyRequest request, User user)throws TweetException;
    List<Tweet> getUserTweet(User user);
    List<Tweet> findByLikeContainsUser(User user);
}
