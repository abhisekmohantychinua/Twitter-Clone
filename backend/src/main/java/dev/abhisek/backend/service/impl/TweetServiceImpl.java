package dev.abhisek.backend.service.impl;

import dev.abhisek.backend.exceptions.TweetException;
import dev.abhisek.backend.exceptions.UserException;
import dev.abhisek.backend.model.Tweet;
import dev.abhisek.backend.model.User;
import dev.abhisek.backend.repository.TweetRepository;
import dev.abhisek.backend.request.TweetReplyRequest;
import dev.abhisek.backend.service.TweetService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TweetServiceImpl implements TweetService {

    private final TweetRepository tweetRepository;

    @Override
    public Tweet createTweet(Tweet tweet, User user) throws UserException {
        Tweet newTweet=Tweet.builder()
                .content(tweet.getContent())
                .createdAt(LocalDateTime.now())
                .image(tweet.getImage())
                .video(tweet.getVideo())
                .user(user)
                .isReply(false)
                .isTweet(true)
                .build();

        return tweetRepository.save(newTweet);
    }

    @Override
    public List<Tweet> findAllTweets() {
        return tweetRepository
                .findAllByIsTweetTrueOrderByCreatedAtDesc();
    }

    @Override
    public Tweet reTweet(Long tweetId, User user) throws UserException, TweetException {
        Tweet tweet=findById(tweetId);
        if(tweet.getRetweetUsers().contains(user)){
            tweet.getRetweetUsers().remove(user);
        }else {
            tweet.getRetweetUsers().add(user);
        }
        return null;
    }

    @Override
    public Tweet findById(Long tweetId) throws TweetException {
        return tweetRepository
                .findById(tweetId)
                .orElseThrow(()->new TweetException("Tweet not found"));
    }

    @Override
    public void deleteById(Long tweetId, Long userId) throws TweetException, UserException {
        Tweet tweet=findById(tweetId);
        if(!userId.equals(tweet.getUser().getId())){
            throw new UserException("Can't delete other users tweet");
        }
        tweetRepository.deleteById(tweetId);
    }

    @Override
    public Tweet removeFromRetweet(Long tweetId, User user) throws TweetException, UserException {
        return null;
    }

    @Override
    public Tweet createdReply(TweetReplyRequest request, User user) throws TweetException {
//        main Tweet entity
        Tweet replyFor=findById(request.getTweetId());

//        new Tweet entity from request
        Tweet newTweet=Tweet.builder()
                .content(request.getContent())
                .createdAt(LocalDateTime.now())
                .image(request.getImage())
//                .video(request.getVideo())
                .user(user)
                .isReply(true)
                .isTweet(false)
                .replyFor(replyFor)
                .build();
//        saving new Tweet
        Tweet savedTweet=tweetRepository.save(newTweet);
//        adding saved Tweet to main Tweet
        replyFor.getReplyTweets().add(savedTweet);
//        saving main Tweet updated with reply Tweet
        tweetRepository.save(replyFor);
        return replyFor;
    }

    @Override
    public List<Tweet> getUserTweet(User user) {
        return tweetRepository.findAllByRetweetUsersContainsAndUser_IdAndIsTweetTrueOrderByCreatedAtDesc(user,user.getId());
    }

    @Override
    public List<Tweet> findByLikeContainsUser(User user) {
        return tweetRepository.findAllByLikesUser_Id(user.getId());
    }
}
